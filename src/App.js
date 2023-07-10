import logo from './logo.svg';
import './App.css';

import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import MyBioScreen from './components/MyBioScreen';
import { useState } from 'react';

function App() {

  const [aboutText,setText]=useState([])
  const [bloodGroup,setBloodGroup]=useState(["AB -ve"]);
  const [isEditClicked,setEditClicked]=useState([]);
  const [isValidForm,setValidForm]=useState([]);
  function handleEditClick(){
   setEditClicked("true");
  }
  function handleEditAbout(event){
   

    setText([event.target.value]);
    if(event.target.value.length>=500)
    setValidForm(["true"])
    else
    setValidForm([])
    
   }
   function handleGoBackClick(){
    setEditClicked([]);
   }
   function handleBloodGroupChange(event){
    setBloodGroup([event.target.value]);

   }
   
  return (
    //<Router exact path="/" component={MyBioScreen}/>
   <div>
    {isEditClicked.length >0  ? (<div> <div className='container'>
    <div className='header'>
      <button className='buttonSTD' onClick={()=>{handleGoBackClick()}}>Go Back</button>
      <h4>My Bio</h4>
    </div>
    <div className='about'>
    <h2 className='aboutmetext'>Write something about yourself</h2>
    <button className='buttonSTD' onClick={()=>{handleEditClick()}}>Edit</button>
    </div>
    <div className='aboutText'>
    <input value={aboutText.length>0? aboutText : "Write Something Here"} onChange={(event)=>handleEditAbout(event)}></input>
    </div>
    <div className='about'>
    <h2 className='aboutmetext'>Blood Group</h2>
    <select onChange={(event)=>{handleBloodGroupChange(event)}}>
      <option> A+ve</option>
      <option> AB+ve</option>
      <option> B+ve</option>
      <option> AB-ve</option>
      <option> O+ve</option>

    </select>
    </div>
    <input type="file"></input>
    <div className='saveButtonDiv'>
    {isValidForm.length>0?
    (<button className='saveButton' >Save</button>):
    (<button className='saveButton' disabled>Save</button>)
    }

    </div>
    </div></div>):
    
    
    (<div> <div className='container'>
    <div className='header'>
      <button className='buttonSTD'>Go Back</button>
      <h4>My Bio</h4>
    </div>
    <div className='about'>
    <h2 className='aboutmetext'>About Me</h2>
    <button className='buttonSTD' onClick={()=>{handleEditClick()}}>Edit</button>
    </div>
    <div className='aboutText'>
    <p>{aboutText.length>0? aboutText : "No About Added"}</p>
    </div>
    <div className='about'>
    <h2 className='aboutmetext'>Blood Group</h2>
    <button className='buttonSTD'>{bloodGroup}</button>
    </div>
    <input type="file"></input>
    </div></div>)}

    
    </div>

  );
}

export default App;
