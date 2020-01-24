
import React, { useState } from "react";

function Delete(props) {

  let [name, setName] = useState();


  const showHideClassName = props.showDelete ? "modal display-block": "modal display-none";

  const handleChangeName = e => {
    e.preventDefault();
    setName(e.target.value)
    console.log(e)
    console.log('e.target.value',e.target.value)
    console.log('this is name',name);
  };

  const handleSubmit = e => {
  e.preventDefault();

  console.log(name)
  props.deleteRecipe(name)
  }
  
  
  
  return (
   
    <div className={showHideClassName}>
      <section className="modal-main">
      <div className="modalhead">Delete a recipt by it's Name!</div>
      <form className="inputform" onSubmit={e => handleSubmit(e)}>
        <div><input className="input" value={name} type="text" placeholder="Name" onChange={e=>handleChangeName(e)}></input></div>
        <div><button className="sumbitbtn">Submit</button></div>
      </form>
      <button onClick={props.handleClose} className="closebtn">close</button>
      </section>
    </div>
  );
}

export default Delete;