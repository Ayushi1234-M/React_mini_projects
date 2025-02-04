import { useEffect } from 'react';
import { useState } from 'react'

export default function Emi() {

    const[principal, setPrincipal]=useState(0);
    const[interest, setInterest]=useState(0);
    const[years, setYears]=useState(0);
    
    function handleInputs(e)
    {
        let id = e.target.id;
        let val = e.target.value;

        if(id === 'principal')
        {
            setPrincipal(val);
        }
        else if(id === 'ir')
        {
            setInterest(val);
        }
        else 
        {
            setYears(val);
        }
    }

    const[emi, setEmi]=useState(0);

    //P (r(1+r)^n / ((1+r)^n)-1)

    function calculateEmi()
    {
        let r = interest/12/100; //per month

        const calc = Math.pow(1+r, years*12);

        const amt = principal*((r*calc) / (calc -1))
        const final = Math.round(amt);
        setEmi(final);
    }

    useEffect(()=>{
        calculateEmi();
    },[principal, years, interest])

  return (
    <div>
      <h1>EMI calculator</h1>

      <div className='inputs'>
        <input type='number' placeholder='Principal amount' id='principal' onChange={handleInputs}></input>

        <input type='number' placeholder='Interest rate' id='ir' onChange={handleInputs}></input>

        <input type='number' placeholder='years' id='years'onChange={handleInputs}></input>
      </div>

      <div className='output'>
        <h3>Your monthly EMI calculated: <span>Rs. {emi} </span></h3>
      </div>
    </div>
  )
}
