import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

function App() {
  const [hi, setHi] = useState('');
  useEffect(()=>{
    const getHello = async () =>{
      try{
        const res = await axios("http://127.0.0.1:5000/hello")
        console.log(res.data)
        setHi(res.data)
      }catch(e){
        console.log(e.response.data)
      }
    }

    getHello()
  }, [])

  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {hi}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
