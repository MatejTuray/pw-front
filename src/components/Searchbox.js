import React, { Component } from 'react'
import Input from "./Input"
import Date from "./Date"
import SubmitButton from './SubmitButton';


export default class Searchbox extends Component {
  render() {
    return (
     
        <div className='container' style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop:'2rem', flexDirection:'column'}}>
        <h1>Pythonweekend Frontend</h1>
        <div style={{display: 'flex', flexDirection: "row", justifyContent:"space-between", alignItems: "stretch"}}>
        <Input name="Starting point"/>
        <Input name="Destination"/>
        <Date label={'Start date'}/>
        <Date label={'End date'}/>
        </div>
        <div style={{marginTop: "3rem", width: '50vw'}}>
            <SubmitButton/>
        </div>
        
        </div>      
     
    )
  }
}
