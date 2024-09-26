import express from "express";
import * as model from "./model/model.mjs";

const app = express();



app.get("/api", async (req, res) => {
  let dbmsg;
  try{
    // dbmsg= await model.checkLogin("ster", "admin");
    dbmsg= await model.getCourses(1);
    console.log(dbmsg);
  }
  catch(err){
    console.log(err);
  }
  
  res.json({ message: dbmsg });
});

const port = process.env.PORT || 3000; 

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

