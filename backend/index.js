import express from "express";
import * as model from "./model/model.mjs";
import session from "express-session";

const app = express();
const router = express.Router();

app.use(router);


router.use(session({
  secret:  process.env.SESSION_SECRET || "PynOjAuHetAuWawtinAytVunar",
  resave: false,
  saveUninitialized: false,
  cookie: { 
    maxAge: 2 * 60 * 60 * 1000,
    sameSite:true
  }
}));

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

let checkLogin = async (req, res,next) => {
  const {username, password} = req.body;
  console.log(username, password);
  let dbmsg;
  try{
    dbmsg= await model.checkLogin(username, password);
    console.log(dbmsg);
    if(dbmsg.length>0){
      req.session.username = dbmsg[0].username;
      console.log(req.session.username);
      res.json({ dbmsg });
    }
  }
  catch(err){
    console.log(err);
  }
}

let fetchCourses= async (req, res,next) => {
  let dbmsg;
  let studentID=req.session.username;
  // console.log(studentID);
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
    dbmsg= await model.getSelectedCourses(studentID,semesterid);
    // console.log(dbmsg);
  }
  catch(err){
    console.log(err);
  }
}
res.json({ dbmsg });
}

let checkAuth = async (req, res,next) => {
  let dbmsg;
  // console.log("check", req.session.username);
  if (req.session.username) {
    dbmsg = req.session.username;
  } else {
    dbmsg = "No active session";
  }
  res.json({ dbmsg });
}

let logout =  (req, res,next) => {
  req.session.destroy((err) => {
    if (err) {
      console.error("Error destroying session:", err);
    }
    res.json({ dbmsg: "Logged out successfully" });
  });
}

let fetchSelectionCourses= async (req, res,next) => {
  let dbmsg;
  
  // console.log(studentID);
  try{
    dbmsg= await model.getSelectionCourses();
    console.log(dbmsg);
  }
  catch(err){
    console.log(err);
  }
  res.json({ dbmsg });
}



router.route("/api/login/submit").post(checkLogin);
router.route("/api/courses/semester/:semesterid").get(fetchCourses);
router.route("/api/auth/check").get(checkAuth);
router.route("/api/auth/logout").get(logout);
router.route("/api/courses/options").get(fetchSelectionCourses);

const port = process.env.PORT || 3000; 

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

