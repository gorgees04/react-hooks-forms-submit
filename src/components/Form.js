import React, { useState } from "react";
import DisplayData from "./DisplayData";

function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [submitData, setSubmitData] = useState([]);
  const [errors, setErrors] = useState([]);

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (firstName.length > 0) {
      const formData = {
        firstName: firstName,
        lastName: lastName,
      };
      const storeData = [...submitData, formData];
      setSubmitData(storeData);
      setFirstName("");
      setLastName("");
      setErrors([]);
    } else {
      setErrors(["First name is required!"]);
    }
  }
  console.log(errors);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleFirstNameChange} value={firstName} />
        <input type="text" onChange={handleLastNameChange} value={lastName} />
        <button type="submit">Submit</button>
      </form>
      {errors.map((error, i) =>
        error.length > 0 ? <p key={i}>{error}</p> : null
      )}
      {submitData.map((data, i) => {
        return (
          <DisplayData
            key={i}
            firstName={data.firstName}
            lastName={data.lastName}
          />
        );
      })}
    </div>
  );
}

export default Form;
