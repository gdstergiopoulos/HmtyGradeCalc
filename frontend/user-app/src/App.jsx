import Header from './Header';
import Semester from './Semester';
import Footer from './Footer';
import React from 'react';

function App() {

  let [data, setData] = React.useState(null);
  React.useEffect(()=>{
    fetch("/api")
    .then(res => res.json())
    .then(data => setData(data.message))
  },[]);

  console.log(data);


  return (
    <div className="App">
      <Header/>
      {data? <Semester courses={data} semesterid={1}/> : <p>Loading...</p>}
      {/* <p>{!data?"Loading...":data}</p> */}
      <Footer/>
    </div>
  );
}

export default App;
