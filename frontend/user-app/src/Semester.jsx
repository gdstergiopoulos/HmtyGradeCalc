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
                <label htmlFor={"course" + semesterid + index}>{course.courseName} <span className="weight" hidden>{course.syntelestis}</span></label>
                <input
                    type="number"
                    className="input-grade"
                    id={"course" + semesterid + index}
                    name={"course" + semesterid + index}
                    step="0.5"
                    min="0"
                    max="10"
                    onChange={(e) => {
                        const input = e.target;
                        if (input.value >= 5 && input.value <= 10) {
                            input.style.color = 'green';
                        } else {
                            input.style.color = 'red';
                        }
                    }}
                />
            </div>
        ))}
    </div>
    </>
  );
}

export default Semester;