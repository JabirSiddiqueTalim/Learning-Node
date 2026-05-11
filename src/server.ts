import { createServer, IncomingMessage, Server, ServerResponse } from "http";
import { routerHandle } from "./router/router";

const server:Server=createServer((req:IncomingMessage,res:ServerResponse)=>{
  // console.log(req.url);
  // console.log(req.method)
  routerHandle(req,res);
  
})
server.listen(1235,()=>{
  console.log("Server is running on post 5000");

})