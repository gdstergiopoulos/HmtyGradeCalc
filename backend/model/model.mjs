import db from 'better-sqlite3'

const sql= new db('model/hmtygrade.sqlite', { fileMustExist: true });

export let checkLogin = (username, password) => {
    let stmt = sql.prepare('SELECT username FROM Account WHERE username = ? AND password = ?');
    try{
        let user = stmt.all(username, password);
        // console.log(user[0].username);
        return user;
    }
    catch(err){
        throw err;
    }
}   

export let getCourses= (semesterID) => {
    let stmt = sql.prepare('SELECT * FROM Course WHERE semester = ?');
    try{
        let courses = stmt.all(semesterID);
        return courses;
    }
    catch(err){
        throw err;
    }
}

export let getSelectedCourses = (studentID,semesterID) => {
    let stmt = sql.prepare('SELECT C.courseName,C.courseCode,S.Semester,C.syntelestis\
        FROM Course as C,Selection as S\
        WHERE C.courseCode=S.courseCode AND S.username=? AND S.Semester=?');
    try{
        let courses = stmt.all(studentID,semesterID);
        return courses;
    }
    catch(err){
        throw err;
    }
}
