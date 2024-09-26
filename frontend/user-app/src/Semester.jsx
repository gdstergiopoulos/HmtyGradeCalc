function Semester({courses,semesterid}) {
    //let semesterid=1;
    //let courses=["Αγγλικά","Λογισμός Συναρτήσεων Μίας Μεταβλητής","Γραμμική Άλγεβρα","Εισαγωγή Στους Υπολογιστές","Σύγχρονη Φυσική","Εφαρμοσμένη Φυσική","Ψηφιακή Λογική"];
    //let courses_weight=[1.5,2,1.5,2,1.5,1.5,1.5];

    return (
    <>
    <div className="semesterCard">
        <h1>Semester {semesterid}</h1>
        {courses.map((course, index) => (
            <div className="course" key={index}>
                <label htmlFor={"course" + semesterid + index}>{course.courseName}</label>
                <input
                    type="number"
                    id={"course" + semesterid + index}
                    name={"course" + semesterid + index}
                    step="0.5"
                    min="0"
                    max="10"
                />
            </div>
        ))}
    </div>
    </>
  );
}

export default Semester;