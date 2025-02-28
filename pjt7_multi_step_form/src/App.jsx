import { useState } from "react";
import "./App.css";

function App() {
  const data = [
    {
      id: "name",
      name: "Name",
      placeholder: "Enter your name",
      type: "text",
      btn: "Next",
    },
    {
      id: "email",
      name: "Email",
      placeholder: "Enter your email id",
      type: "email",
      btn: "Next",
    },
    {
      id: "dob",
      name: "DOB",
      placeholder: "Enter your dob",
      type: "date",
      btn: "Next",
    },
    {
      id: "password",
      name: "Password",
      placeholder: "Enter a password",
      type: "text",
      btn: "Submit",
    },
  ];

  const [currIndex, setCurrIndex] = useState(0);

  function handleIndexChange(btnType) {
    if (btnType == "Next") {
      setCurrIndex(currIndex + 1);
    } else if (btnType == "Submit") {
      //put any logic here
      alert(`Data submitted: ${JSON.stringify(formData)}`)
    } else if (btnType == "Back") {
      setCurrIndex(currIndex - 1);
    }
  }

  const formObj = {
    name: "",
    email: "",
    dob: "",
    password: "",
  };

  const [formData, setFormData] = useState(formObj);

  function handleInput(e) {
    let id = e.target.id;
    let val = e.target.value;

    setFormData((prevData)=>({...prevData, [id]:val}))
   
  }

  return (
    <>
      <div className="form_component">
        <label>{data[currIndex].name}</label>
        <br></br>
        <input
          id={data[currIndex].id}
          type={data[currIndex].type}
          placeholder={data[currIndex].placeholder}
          onChange={handleInput}
          value={formData[data[currIndex].id]}
        ></input>
        <br></br>
        {currIndex != 0 && (
          <button onClick={() => handleIndexChange("Back")}>Back</button>
        )}

        <button
          style={{ marginLeft: "10px" }}
          onClick={() => handleIndexChange(data[currIndex].btn)}
        >
          {data[currIndex].btn}
        </button>
      </div>
    </>
  );
}

export default App;

// id:"name",
// name: "Name",
// placeholder: "Enter your name",
// type:"text",
// btn:"Next"
