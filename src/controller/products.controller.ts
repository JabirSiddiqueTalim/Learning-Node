import type { IncomingMessage, ServerResponse } from "http";
import { readProduct } from "../server/product.server";

import type { IProduct} from "../types/product.type"
export const productHandle = (req: IncomingMessage, res: ServerResponse) => {
  const url = req.url;
  const method = req.method;
  //Get All products
  const reqUrl = url;
  // console.log(reqUrl)
  const urlPart=reqUrl?.split('/');
  const id=urlPart && urlPart[1]==='products'?urlPart[2]:null;
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
  else if (method === 'GET' && id!=null)
  {
    const products = readProduct();
    const singleProduct=products.find((p : IProduct) =>p.id === Number(id));
    // console.log(singleProduct)
    res.writeHead(200, { "content-type": "application/json" })
    res.end(JSON.stringify({
      message: "This is products from controller products.ts",
      data: singleProduct
    })
    )

    
  }
} 