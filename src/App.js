import './App.css';
import Header from './Components/Header/index'
import Dashboard from './Components/Dashboard/index'
import Home from './Components/Home/index'
import Form from './Components/Form/index'
import Table from './Components/Table/index'
import Footer from './Components/Footer/index'
import { Routes , Route} from 'react-router';
import React, { useState } from "react";



function App() {

  const [data, setData] = useState([]);

  const handleAdd = (item) => {
    setData([...data, item]);
  };
  
  const handleDelete = (index) => {
    setData(data.filter(( user,id) => id!== index));
  };


  return (
    <div className="App">
     <Header/>


      <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/form' element={<Form onAdd={handleAdd}/>}/>
        <Route path='/table' element={<Table  data={data} handleDelete={handleDelete} />}/>

      </Routes>
      
      <Footer/>



    </div>
  );
}

export default App;
