import React, { useState } from "react";

function Create(props) {
  let [name, setName] = useState();
  let [course, setCourse] = useState();
  let [type, setType] = useState();
  let [calories, setCalories] = useState();

  const showHideClassName = props.showCreate
    ? "modal display-block"
    : "modal display-none";

  const handleChangeName = e => {
    e.preventDefault();
    setName(e.target.value);
  };
  const handleChangeCourse = e => {
    e.preventDefault();
    setCourse(e.target.value);
  };
  const handleChangeType = e => {
    e.preventDefault();
    setType(e.target.value);
  };
  const handleChangeCalories = e => {
    e.preventDefault();
    setCalories(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    const Recipe = {
      name: name,
      course: course,
      type: type,
      calories: calories
    };

    props.createRecipe(Recipe);
  };
  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <div className="modalhead">Create a New Recipe!</div>
        <form className="inputform" onSubmit={e => handleSubmit(e)}>
          <div>
            <input
              className="input"
              value={name}
              type="text"
              placeholder="Name"
              onChange={e => handleChangeName(e)}
            ></input>
          </div>
          <div>
            <input
              className="input"
              value={course}
              type="text"
              placeholder="Course"
              onChange={e => handleChangeCourse(e)}
            ></input>
          </div>
          <div>
            <input
              className="input"
              value={type}
              type="text"
              placeholder="Type"
              onChange={e => handleChangeType(e)}
            ></input>
          </div>
          <div>
            <input
              className="input"
              value={calories}
              type="text"
              placeholder="Calories"
              onChange={e => handleChangeCalories(e)}
            ></input>
          </div>
          <div>
            <button className="sumbitbtn">Submit</button>
          </div>
        </form>
        <button onClick={props.handleClose} className="closebtn">
          close
        </button>
      </section>
    </div>
  );
}

export default Create;
