import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../slices/todoSlices";
import { Link } from "react-router-dom";

const AdminProduct = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  console.log(inputValue);

  function handleSubmit() {
    let newProduct = { inputValue, id: Date.now() };
    dispatch(addTodo(newProduct));
  }
  return (
    <div className="addTODO" >
      <div className="addList">
        <h1>Add ToDo</h1>
        <input
          onChange={(e) => setInputValue(e.target.value)}
          className="addInp"
          type="text"
          placeholder="Add to task"
        />
        <Link to={"/list"}>
          <button onClick={handleSubmit} className="btnCreate">
            create
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AdminProduct;
