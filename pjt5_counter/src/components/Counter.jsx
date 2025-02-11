import React, { useState } from "react";

export default function Counter() {
  const arr = ["-100", "-10", "-1", "+1", "+10", "+100"];

  const [value, setValue] = useState(0);

  function handleUserActions(key) {
    let k = parseInt(key);
    setValue((v) => v + k);
    storeHistory(key, value, value+k );
  }

  const [histroy, setHistory] = useState([]);

  function storeHistory(key, prev, curr) {
    //console.log(curr);

    const obj = {
      action: key,
      prevVal: prev,
      currVal: curr,
    };

    setHistory([obj, ...histroy]);
  }

  function handleReset()
  {
    setValue(0);
    setHistory([]);
  }

  function handleRedo()
  {

    let newKey = histroy[0].action;
    handleUserActions(newKey);

  }

  function handleUndo()
  {
    let newKey = histroy[0].action;
    let n = parseInt(-newKey);
    console.log(n);
    setValue((v)=>v+n);
    const copyHist = histroy.slice(1);
    setHistory(copyHist);
    
  }

  return (
    <div>
      <h2>Undoable counter</h2>

      <div className="main_btns">
        <button onClick={handleUndo} disabled={histroy.length<1}>Undo</button>
        <button onClick={handleRedo} disabled={histroy.length<1}>Redo</button>
        <button onClick={handleReset}>Reset</button>
      </div>

      <div className="value_box">
        <span className="value">{value}</span>
      </div>

      <div className="user_actions_btns">
        {arr.map((i, idx) => (
          <button key={idx} onClick={() => handleUserActions(i)}>
            {i}
          </button>
        ))}
      </div>

      <div className="history_box">
        <h4>History</h4>

        <div className="maping_history">

        {histroy.map((i, idx) => {
          return (
            <div key={idx}>
             
              [
                {i.prevVal}
                {i.action}
                =
                {i.currVal}
              ]             
            </div>
          );
        })}

</div>
      </div>
    </div>
  );
}
