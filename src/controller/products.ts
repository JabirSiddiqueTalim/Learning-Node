import type { IncomingMessage, ServerResponse } from "http";
import { readProduct } from "../server/product.server";
// import readProduct from "../server/product.server"
export const productHandle=(req:IncomingMessage,res:ServerResponse)=>
{
  // const product=[
  //   {
  //     id:5,
  //     name:"Jabir",
  //     age:23
  //   }
  // ]

const product=readProduct();

  
  
  res.writeHead(200,{"content-type":"application/json"})
   
  res.end(JSON.stringify({message:"This is products from controller products.ts",data:product}))


}