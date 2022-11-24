import React from 'react'
import { useLocation } from "react-router-dom";
import './index.css' 
import StrengthOrWeakness from '../StrengthOrWeakness'
import {useState} from 'react'


export function BootcamperProfile(props) {    

    const { state } = useLocation();

    function bootcamperStrengthAndWeakness(){
        const bootcamperStrengthAndWeakness = props.bootcamperSW.filter((element)=>element.bootcamper_id===state.id)

        return bootcamperStrengthAndWeakness
    }

    let bootcamperStrengthAndWeaknessArray = bootcamperStrengthAndWeakness()

  
    let bootcamperArray = props.bootcamperArray
    let bootcamper = bootcamperArray.filter((element)=>{
        return element.bootcamper_id===state.id})


    const [locked, setLocked] = useState(true)
    const [hidden, setHidden] = useState(true)

    function correctPassword(event){
        let password = document.querySelector(".password").value
   
      
        if(password===bootcamper[0].password){
            setLocked(false)
            document.querySelector(".password").hidden=true
            document.querySelector(".submit-password").hidden=true
            document.querySelector(".logged-in").hidden=false
            document.querySelector(".password").value=""

        }
        else{
            setLocked(true)
            document.querySelector(".password").value=""
            alert("Please enter the correct password")
        }
    }

    function unhidePasswordInput(){
        let e = document.querySelector("#view")
        if(e.value==="view"){
            setHidden(true)
            setLocked(true)
            document.querySelector(".logged-in").hidden=true
        }
      else{
            setHidden(false)
            document.querySelector(".logged-in").hidden=true
            document.querySelector(".password").value=""
            document.querySelector(".password").hidden=false
            document.querySelector(".submit-password").hidden=false
            
           
    }
    }


        
    return(
        
    
    <div className='bootcamper-profile'>
        <div className='name-strength-weakness'>
      
              
            <div className='bootcamper-profile-header'>
            
                <img className = "profile-picture" src={bootcamper[0].image_url} alt = "profile"></img>
                <div className="name-SW">
                <div className="view-name">

                    <h1 className='bootcamper-name-profile'>{bootcamper[0].first_name} {bootcamper[0].last_name}</h1>

                    <div className='view'>
                        <select onChange={unhidePasswordInput} id="view" name="view">
                            <option value="view">View</option>
                            <option value="edit">Edit</option>
                        </select>
                        <div className='enter-password'>
                            <input hidden = {hidden} className ="password" type = "password" placeholder='type password here'></input>
                            <button className="submit-password" hidden = {hidden} onClick={correctPassword}>Submit Password</button>
                            <p hidden="true" className="logged-in">Logged In</p>

                        </div>
                    </div>



                </div>
                    
                    <div className='strength-and-weakness'>
                        <StrengthOrWeakness deleteTopic={props.deleteTopic} state={state.id} addTopic={props.addTopic} hidden={locked} className="topic-list-profile" category="Strength" bootcamperStrengthAndWeaknessArray={bootcamperStrengthAndWeaknessArray}/>
                        <StrengthOrWeakness deleteTopic={props.deleteTopic} state={state.id} addTopic={props.addTopic} hidden={locked} className="topic-list-profile" category="Weakness" bootcamperStrengthAndWeaknessArray={bootcamperStrengthAndWeaknessArray}/>
                    </div>
                </div>
                
                
                
               
            </div>
            
        </div>
       
        <div className='description'>
        <h1>About Me</h1>
            <p>
            Sed molestie nisi vitae est dapibus, a tincidunt erat posuere. Aliquam erat volutpat. Nulla laoreet tincidunt libero. Fusce auctor accumsan suscipit. Proin vitae bibendum nisi. Pellentesque diam est, volutpat sit amet augue sed, vulputate porta justo. Nullam tincidunt sollicitudin velit at tincidunt. Nam sit amet dolor mattis, varius quam a, vestibulum elit. Vivamus tempus augue ac sapien pellentesque elementum nec auctor ipsum. Vestibulum malesuada faucibus nulla eu molestie.
            </p>
        </div>
        <div className='availability'>
        <h1>Availability</h1>
            <ul className='availability-list'>
                <li><h3>Monday:</h3><p>Available 9-5pm</p></li>
                <li><h3>Tuesday:</h3><p>Available 9-5pm</p></li>
                <li><h3>Wednesday:</h3><p>Available 9-5pm</p></li>
                <li><h3>Thursday:</h3><p>Available 9-5pm</p></li>
                <li><h3>Friday:</h3><p>Available 9-5pm</p></li>
                <li><h3>Saturday:</h3><p>Available 9-5pm</p></li>
                <li><h3>Sunday:</h3><p>Available 9-5pm</p></li>
            </ul>
        </div>
    </div>        
    )

 }
 
 export default BootcamperProfile