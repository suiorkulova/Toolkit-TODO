import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "../slices/todoSlices";
import { useNavigate } from "react-router-dom";
import { RiDeleteBin7Fill } from "react-icons/ri";
import { AiFillEdit } from "react-icons/ai";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const ListProduct = () => {
  const [state, setState] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { add } = useSelector((state) => state.todo);

  return (
    <>
      {add.length > 0 ? (
        <div style={{ background: state ? "#fff" : "#000" }} className="list">
          <div
            style={{ background: state ? "" : "#fff" }}
            className="main-content"
          >
            <h1 style={{ color: state ? "black" : "" }}>TODO LIST</h1>
            <div className="mainContent">
              <div className="todoList">
                <input type="search" placeholder="search...." />
                <select>
                  <option>All</option>
                </select>
                <button onClick={() => setState(!state)} className="toggle-btn">
                  <div className="sun-rays"></div>
                  <div className="main-circle"></div>
                </button>
              </div>
            </div>
          </div>
          <div
            style={{ background: state ? "" : "#fff" }}
            className="date-container"
          >
            {add.map((el) => (
              <div className="date">
                <div className="date-div1">
                  <input type="checkbox" />
                  <p
                    style={{
                      color: state ? "black" : "    ",
                      fontSize: "25px",
                    }}
                  >
                    {el.inputValue}
                  </p>
                </div>
                <div className="date-div1">
                  <button
                    style={{ color: "red" }}
                    onClick={() => dispatch(deleteTodo(el.id))}
                  >
                    <RiDeleteBin7Fill />
                  </button>
                  <button
                    style={{ color: "green" }}
                    onClick={() => navigate(`/edit/${el.id}`)}
                  >
                    <AiFillEdit />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <>
          <div>
            <h1 style={{color:"red"}}> Ваша корзина пуста!!!</h1>
          </div>
        </>
      )}
    </>
  );
};

export default ListProduct;
