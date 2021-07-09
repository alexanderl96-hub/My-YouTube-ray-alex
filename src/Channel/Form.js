import React from "react";
const Form = ({ input,input2,handleChange2, handleChange, handleSubmit }) => {
  return (
    <>
      <form className="Form" onSubmit={handleSubmit}>
        <label htmlFor="input" className="label"><bold>Name:</bold></label>
        <input className='forminput' 
         onChange={handleChange} 
         id="input"
         value={input} 
         placeholder="Name..." required></input>
        <label className="label"><bold>Enter Comment:</bold> </label>
        <input htmlFor="input2"className='forminput'
          onChange={handleChange2}
          id="input"
          value={input2}
          placeholder="Enter Comment..." required/>
          <button type="submit" className="button">Submit</button>
      </form>
    </>
  );
};
export default Form;