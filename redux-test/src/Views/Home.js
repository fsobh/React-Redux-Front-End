import React , {useEffect} from 'react';
import logo from '../logo.svg';
import '../App.css'
import axios from 'axios'


function Home() {

  useEffect ( () => {

    axios.get('http://localhost:3000/api/v1/animals/getAnimals').then( ({data}) => {

      
    

    }).catch( error => {

    })

  }, [])
  

  return (
      <header className="App-header">
        
        <img src={logo} className="App-logo" alt="logo" />
      
      </header>
      
  
  );
}

export default Home;
