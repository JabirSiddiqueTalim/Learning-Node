import { createServer, IncomingMessage, Server, ServerResponse } from "http";

const server:Server=createServer((req:IncomingMessage,res:ServerResponse)=>{
  // console.log(req.url);
  // console.log(req.method)
  const url=req.url;
  const method=req.method;
  if(url==='/' && method==='GET')
  {
    // console.log("This is url and method");
    res.writeHead(200,{"content-type":"application/json"})
 
    res.end(JSON.stringify({message:"This is root"}))

  }else if(url?.startsWith("/products"))
  {
    res.writeHead(200,{"content-type":"application/json"})
 
    res.end(JSON.stringify({message:"This is products"}))

  }
  else
  {
    // res.writeHead(300,{"content-type":"text"});
    // res.end("Router is in else option")
    res.writeHead(200,{"content-type":"application/json"})
 
    res.end(JSON.stringify({message:"This is not root!!!!!!!!!!!"}))
  }

})
server.listen(1235,()=>{
  console.log("Server is running on post 5000");

})