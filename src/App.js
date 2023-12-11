import './App.css';
import React from 'react';
import Products from './Products';
import { useState } from 'react';
function App() {
  const [Search, setSearch] =  useState('');
  const [data, setdata] = useState([])
  const YOUR_APP_ID = "a1086686";
  const YOUR_APP_KEY = "ecc8e3a865ea90ec3b7938976ea2ff26";
  const submithandler = (event)=>{
    event.preventDefault();
    fetch(`https://api.edamam.com/search?q=${Search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=30&calories=591-722&health=alcohol-free`)
    .then(res=> res.json())
    .then(data=> setdata(data.hits))
    // console.log(data.hits);
  }

  return (
    <div className="App">
     <h4>Food Recipe App</h4>
    <form onSubmit={submithandler}>
    <input type="text" class="form-control" value={Search} onChange={(e)=> setSearch(e.target.value)} placeholder="Enter Food Name"  aria-required/><br/>
    <input type="submit" class="btn btn-primary" value="Search"/>
    </form>
    <br/>
    <idv>
    { data.length >= 1 && Search.length >= 1  ?  <Products data = {data}/> : null } 
    </idv>
    </div>
  );
}

export default App;
