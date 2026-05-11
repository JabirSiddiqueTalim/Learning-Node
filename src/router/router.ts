import { IncomingMessage, ServerResponse } from "http"
import { productHandle } from "../controller/products";

export const routerHandle=(req:IncomingMessage,res:ServerResponse)=>
{
  const url=req.url;
  const method=req.method;
  if(url==='/' && method==='GET')
    {
      // console.log("This is url and method");
      res.writeHead(200,{"content-type":"application/json"})
   
      res.end(JSON.stringify({message:"This is root"}))
  
    }else if(url?.startsWith("/products"))
    {
      productHandle(req,res)
  
    }
    else
    {
      // res.writeHead(300,{"content-type":"text"});
      // res.end("Router is in else option")
      res.writeHead(200,{"content-type":"application/json"})
   
      res.end(JSON.stringify({message:"This is not root!!!!!!!!!!!"}))
    }
  

}