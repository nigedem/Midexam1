import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import { useState,useEffect } from 'react';

function App() {
  const [studentData, setStudentData] = useState([])
  useEffect(() => {
  axios.get(" http://127.0.0.1:8000/").then((respons)=>setStudentData(respons.data)).catch((error)=>console.log(error))
  }, [])
  
  return (
    <div className="App">
      {studentData.map((student)=>{
        return(
          <div>
            <h5>{student.name}</h5>
            <h5>{student.grade}</h5>
          </div>
        )
      })}
    </div>
  );
}

export default App;
