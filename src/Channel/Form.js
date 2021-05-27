import React from "react";
const Form = ({ input, handleChange, handleSubmit }) => {
  return (
    <>
      <form className="Form" onSubmit={handleSubmit}>
        <label htmlFor="input"><bold>Name:</bold></label>
        <input className='forminput' 
         onChange={handleChange} 
         type="text" 
         value={input} 
         placeholder="Name..." required></input>
        <label htmlFor="input"><bold>Enter Comment:</bold> </label>
        <input className='forminput'
          onChange={handleChange}
          id="input"
          value={input}
          placeholder="Enter Comment..." required/>
          <button type="submit" className="button">Submit</button>
      </form>
    </>
  );
};
export default Form;