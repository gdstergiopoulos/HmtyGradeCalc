import Header from './Header';
import Semester from './Semester';
import Footer from './Footer';
import React from 'react';
import Login from './Login';
import About from './About';
import Contact from './Contact';
import Stats from './Statistics';
import Register from './Register';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  
  let [data1, setData1] = React.useState(null);
  React.useEffect(()=>{
    fetch("/api/courses/semester/1")
    .then(res => res.json())
    .then(data1 => setData1(data1.dbmsg));
  },[]);

  let [data2, setData2] = React.useState(null);
  React.useEffect(()=>{
    fetch("/api/courses/semester/2")
    .then(res => res.json())
    .then(data2 => setData2(data2.dbmsg));
  },[]);

  let [data3, setData3] = React.useState(null);
  React.useEffect(()=>{
    fetch("/api/courses/semester/3")
    .then(res => res.json())
    .then(data3 => setData3(data3.dbmsg));
  },[]);

  let [data4, setData4] = React.useState(null);
  React.useEffect(()=>{
    fetch("/api/courses/semester/4")
    .then(res => res.json())
    .then(data4 => setData4(data4.dbmsg));
  },[]);
 
  let [data5, setData5] = React.useState(null);
  React.useEffect(()=>{
    fetch("/api/courses/semester/5")
    .then(res => res.json())
    .then(data5 => setData5(data5.dbmsg));
  },[]);

  let [data6, setData6] = React.useState(null);
  React.useEffect(()=>{
    fetch("/api/courses/semester/6")
    .then(res => res.json())
    .then(data6 => setData6(data6.dbmsg));
  },[]);

  let [data7, setData7] = React.useState(null);
  React.useEffect(()=>{
    fetch("/api/courses/semester/7")
    .then(res => res.json())
    .then(data7 => setData7(data7.dbmsg));
  },[]);

  let [data8, setData8] = React.useState(null);
  React.useEffect(()=>{
    fetch("/api/courses/semester/8")
    .then(res => res.json())
    .then(data8 => setData8(data8.dbmsg));
  },[]);


  let [data9, setData9] = React.useState(null);
  React.useEffect(()=>{
    fetch("/api/courses/semester/9")
    .then(res => res.json())
    .then(data9 => setData9(data9.dbmsg));
  },[]);

  let [dataX, setDataX] = React.useState(null);
  React.useEffect(()=>{
    fetch("/api/courses/semester/10")
    .then(res => res.json())
    .then(dataX => setDataX(dataX.dbmsg));
  },[]);

  let [grades, setGrades] = React.useState([]);
  let [avgGrade, setAvggrade] = React.useState(null);

  const getInputValues = () => {
    const inputs = document.querySelectorAll('.input-grade');
    const newGrades = Array.from(inputs).map(input => parseFloat(input.value) || 0);
    setGrades(newGrades);
  };

  let [weights, setWeights] = React.useState([]);
  const getWeightValues = () => {
    const weights = document.querySelectorAll('.weight');
    const newWeights = Array.from(weights).map(weight => parseFloat(weight.innerText) || 0);
    setWeights(newWeights);
  }
 
  React.useEffect(() => {
    const inputs = document.querySelectorAll('.input-grade');
    inputs.forEach(input => {
      input.addEventListener('input', getInputValues);
    });
    getWeightValues();
    return () => {
      inputs.forEach(input => {
        input.removeEventListener('input', getInputValues);
      });
      // console.log(grades,weights);
    };
  },[grades,weights]);

  React.useEffect(() => {
    if (grades.length > 0 && weights.length > 0) {
      const validGrades = grades.filter(grade => grade >= 5.0 && grade <= 10.0);
      const validWeights = weights.filter((_, index) => grades[index] >= 5.0 && grades[index] <= 10.0);
      if (validGrades.length > 0 && validWeights.length > 0) {
        const weightedSum = validGrades.reduce((sum, grade, index) => sum + grade * validWeights[index], 0);
        const totalWeights = validWeights.reduce((sum, weight) => sum + weight, 0);
        const avggrade = totalWeights > 0 ? (weightedSum / totalWeights).toFixed(2) : 0;
        setAvggrade(avggrade);
      } else {
        setAvggrade(0);
      }
    }
  }, [grades, weights]);
  
  //another approach without infinite but not working

  // let [grades, setGrades] = React.useState([]);
  // let [weights, setWeights] = React.useState([]);
  // let [avgGrade, setAvgGrade] = React.useState(null);

  // // Update grades based on user input
  // const handleGradeChange = (index, value) => {
  //   console.log("grade")
  //   const updatedGrades = [...grades];
  //   console.log(updatedGrades);
  //   updatedGrades[index] = parseFloat(value) || 0;  // Update the grade at the specific index
  //   setGrades(updatedGrades);
  // };

  // // Set the weights of the courses
  // React.useEffect(() => {
  //   const weightElements = document.querySelectorAll('.weight');
  //   const newWeights = Array.from(weightElements).map(weight => parseFloat(weight.innerText) || 0);
  //   setWeights(newWeights);
  // }, []);

  // // Calculate average grade when grades or weights change
  // React.useEffect(() => {
  //   if (grades.length > 0 && weights.length > 0) {
  //     const validGrades = grades.filter(grade => grade >= 5.0 && grade <= 10.0);
  //     const validWeights = weights.filter((_, index) => grades[index] >= 5.0 && grades[index] <= 10.0);

  //     if (validGrades.length > 0 && validWeights.length > 0) {
  //       const weightedSum = validGrades.reduce((sum, grade, index) => sum + grade * validWeights[index], 0);
  //       const totalWeights = validWeights.reduce((sum, weight) => sum + weight, 0);
  //       const avggrade = totalWeights > 0 ? (weightedSum / totalWeights).toFixed(2) : 0;
  //       setAvgGrade(avggrade);
  //     } else {
  //       setAvgGrade(0);
  //     }
  //   }
  // }, [grades, weights]);


  return (
    <>
    <Router>
      <Routes>
        <Route exact path="/" element={<div className="App">
      <Header/>
      <h3>Average Grade {avgGrade}</h3>
      {data1? <Semester courses={data1} semesterid={1}/> : <p>Loading...</p>} 
      {/* handleGradeChange={handleGradeChange} in semester */}
      {data2? <Semester courses={data2} semesterid={2}/> : <p>Loading...</p>}
      {data3? <Semester courses={data3} semesterid={3}/> : <p>Loading...</p>}
      {data4? <Semester courses={data4} semesterid={4}/> : <p>Loading...</p>}
      {data5? <Semester courses={data5} semesterid={5}/> : <p>Loading...</p>}
      {data6? <Semester courses={data6} semesterid={6}/> : <p>Loading...</p>}
      {data7? <Semester courses={data7} semesterid={7}/> : <p>Loading...</p>}
      {data8? <Semester courses={data8} semesterid={8}/> : <p>Loading...</p>}
      {data9? <Semester courses={data9} semesterid={9}/> : <p>Loading...</p>}
      {dataX? <Semester courses={dataX} semesterid={10}/> : <p>Loading...</p>}
      {/* <p>{!data?"Loading...":data}</p> */}
      <Footer/>
    </div>}/>
        <Route path="/myprof" element={<Login/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/stats" element={<Stats/>}></Route>
        <Route path="*" element={<h1>404 Not Found</h1>}></Route>
        <Route path="/register" element={<Register/>}></Route>
    </Routes>
    </Router>
    
    </>
  );
}

export default App;
