import express from "express";
import * as model from "./model/model.mjs";

const app = express();



app.get("/api/courses/semester/:semesterid", async (req, res) => {
  let dbmsg;
  const semesterid = req.params.semesterid;
  if (semesterid<7 || semesterid>=10){
  try{
    // dbmsg= await model.checkLogin("ster", "admin");
    dbmsg= await model.getCourses(semesterid);
    // console.log(dbmsg);
  }
  catch(err){
    console.log(err);
  }
}
else{
  try{
    let studentID="ster";
    dbmsg= await model.getSelectedCourses(studentID,semesterid);
    // console.log(dbmsg);
  }
  catch(err){
    console.log(err);
  }
}
res.json({ dbmsg });
});


const port = process.env.PORT || 3000; 

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

