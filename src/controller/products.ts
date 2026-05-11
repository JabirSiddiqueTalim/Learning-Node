import type { IncomingMessage, ServerResponse } from "http";

export const productHandle=(req:IncomingMessage,res:ServerResponse)=>
{
  const product=[
    {
      id:23,
      name:"Jabir",
    }
  ]
  res.writeHead(200,{"content-type":"application/json"})
   
  res.end(JSON.stringify({message:"This is products from controller products.ts",data:product}))


}