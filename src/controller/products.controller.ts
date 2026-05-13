import type { IncomingMessage, ServerResponse } from "http";
import { insertProduct, readProduct } from "../server/product.server";

import type { IProduct } from "../types/product.type"
import { parseBody } from "../utility/parseBody";
export const productHandle = async (req: IncomingMessage, res: ServerResponse) => {
  const url = req.url;
  const method = req.method;
  //Get All products
  const reqUrl = url;
  // console.log(reqUrl)
  const urlPart = reqUrl?.split('/');
  const id = urlPart && urlPart[1] === 'products' ? urlPart[2] : null;
  console.log(id)
  if (url === '/products' && method === 'GET') {
    const product = readProduct();
    res.writeHead(200, { "content-type": "application/json" })
    res.end(JSON.stringify({
      message: "This is products from controller products.ts",
      data: product
    })
    )
  }
  else if (method === 'GET' && id != null) {
    const products = readProduct();
    const singleProduct = products.find((p: IProduct) => p.id === Number(id));
    // console.log(singleProduct)
    res.writeHead(200, { "content-type": "application/json" })
    res.end(JSON.stringify({
      message: "This is products from controller products.ts",
      data: singleProduct
    })
    )
  } else if (method === "POST" && url === "/products") {
    const products = readProduct();
    const body = await parseBody(req);
    // console.log(body);
    const newProduct = {
      id: Date.now(),
      ...body,

    };

    products.push(newProduct);
    insertProduct(products);
    // console.log(products)
    res.writeHead(200, { "content-type": "application/json" })
    res.end(JSON.stringify({
      message: "product created",
      data: products
    })
    )
  } else if (method === 'PUT' && id != null) {
    const products = readProduct();
    const body = await parseBody(req);
    const indexOfPut = products.findIndex((p: IProduct) => p.id === Number(id));
    // console.log("index",indexOfPut);
    products[indexOfPut] = { id: products[indexOfPut].id, ...body }
    console.log(products);
    if (indexOfPut < 0) {
      res.writeHead(404, { "content-type": "application/json" })
      res.end(JSON.stringify({
        message: "Product not found!!!",
        data: null
      })
      )
    }else
    {
      insertProduct(products);
      res.writeHead(200, { "content-type": "application/json" })
      res.end(JSON.stringify({
      message: "product updated",
      data:products
    })
    )
    }

  }else if(method==="DELETE"  && id!=null)
  {
    const products = readProduct();
    const body = await parseBody(req);
    const indexOfPut = products.findIndex((p: IProduct) => p.id === Number(id));
    products.splice(indexOfPut,1);
    if (indexOfPut < 0) {
      res.writeHead(404, { "content-type": "application/json" })
      res.end(JSON.stringify({
        message: "Product not found to delete!!!",
        data: null
      })
      )
    }else
    {
      insertProduct(products);
      res.writeHead(200, { "content-type": "application/json" })
      res.end(JSON.stringify({
      message: "product deleted",
      data:products
    })
    )
    }
    


  }
} 