import { useEffect, useState } from "react";

export default function Timer() {
  const [isStart, setIsStart] = useState(false);
  const[hours, setHours]=useState(0);
  const[mins, setMins]=useState(0);
  const[seconds, setSeconds]=useState(0);

  function handleStart() {

    if(hours<=0 && mins<=0 && seconds<=0)
    {
      alert("Please give an input");
    }
    else
    setIsStart(true);
  }

  const[isPause, setIsPause]=useState(false);

  function handlePause()
  {
    setIsPause(true);
    clearInterval(timerId);

  }

  function handleResume()
  {
    setIsPause(false);
    handleRunTimer(seconds, mins, hours);
  }

  function handleReset()
  {
    setIsStart(false);
    setHours(0);
    setMins(0);
    setSeconds(0);
    clearInterval(timerId);
  }

  function handleInput(e)
  {
    var val = e.target.value;
    var id = e.target.id;
    // console.log(val + " " + id);

    if(id =="hours" )
    {
      setHours(val);
    }
    else if(id == "mins")
    {
      setMins(val);
    }
    else
    {
      setSeconds(val);
    }
  }

  //timer work

  function handleRunTimer(ss, mm, hh) {
    if (ss > 0) {
      setSeconds((s) => s - 1);
    } else if (ss === 0 && mm > 0) {
      setMins((m) => m - 1);
      setSeconds(59);
    } else if (ss === 0 && mm === 0 && hh > 0) {
      setHours((h) => h - 1);
      setMins(59);
      setSeconds(59);
    }

    if(hours<=0 && mins<=0 && seconds<=0)
    {
      handleReset();
      clearInterval(timerId);
      alert('Timer is finished');
    }
  }

  const[timerId, setTimerId]=useState(0);

  useEffect(()=>{

    let tid;

    if(isStart)
    {
      tid = setInterval(() => {
        setTimerId(tid);

        handleRunTimer(seconds, mins, hours);
        
      }, 1000);

      setTimerId(tid);

    }

    return()=>clearInterval(tid);
   

  },[isStart, hours, mins, seconds])

  return (
    <div>
      <h2>Countdown Timer</h2>

      {!isStart && (
        <div className="input_container">
          <div className="input_box">
            <input placeholder="HH" id="hours" onChange={handleInput}></input>
            <span>:</span>
            <input placeholder="MM" id="mins" onChange={handleInput}></input>
            <span>:</span>
            <input placeholder="SS" id="seconds" onChange={handleInput}></input>
          </div>
          <button className="start_timer" onClick={handleStart}>
            Start
          </button>
        </div>
      )}

      {isStart && 
      <div className="output_container">
        
        <div className="timer_box">
            <span>{hours<10? `0${hours}` : hours}</span>
            <span>:</span>
            <span>{mins<10? `0${mins}` : mins}</span>
            <span>:</span>
            <span>{seconds<10? `0${seconds}` : seconds}</span>
        </div>

        <div className="timerBoxBtns">
          {
            !isPause?
            <button className="Pause_timer" onClick={handlePause}>Pause</button>
            :
            <button className="Resume_timer" onClick={handleResume}>Resume</button>
          }
            
          <button className="reset_timer" onClick={handleReset}>Reset</button>

        </div>
      </div>
      }
    </div>
  );
}
