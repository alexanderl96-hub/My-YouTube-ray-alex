import React from "react";
const Form = () => {
  return (
    <>
      <form className="Form">
        <label htmlFor="input"><bold>Name:</bold></label>
        <input className='forminput' type="text" value="" placeholder="name..."></input>
        <label htmlFor="input"><bold>Enter Comment:</bold> </label>
        <input className='forminput'
        //   onChange={handleChange}
          id="input"
          value=""
          placeholder="Enter Comment..." />
          <button type="submit" className="button">Submit</button>
      </form>
    </>
  );
};
export default Form;