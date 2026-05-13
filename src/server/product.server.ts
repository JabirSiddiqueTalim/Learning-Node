import * as fs from "fs"
import * as path from "path"
const filePath=path.join(process.cwd(),"./src/database/db.json")
export const readProduct=()=>
{

  // console.log(process.cwd());
  // console.log(filePath);
  const product=fs.readFileSync(filePath,"utf-8");
  // console.log(product.toString())
  // console.log(product)
  return JSON.parse(product);
}