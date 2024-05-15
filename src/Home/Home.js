import React, { useState } from "react";
import "./Home.css";

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState(""); // State to hold input value

  // Event handler for adding task
  const addTask = () => {
    if (inputValue.length > 38) {
      alert("Type your task less than 38 characters");
      setInputValue("");
    } else {
      if (inputValue.trim() !== "") {
        setTasks([...tasks, inputValue]); // Add new task to tasks array
        setInputValue(""); // Clear input value
      } else {
        alert("Type your activity first");
      }
    }
  };

  // Event handler for handling input change
  const handleChange = (e) => {
    setInputValue(e.target.value); // Update input value
  };

  // Event handler for handling "Enter" key press
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      if (inputValue === "") {
        alert("Type your Activity first");
      } else {
        if (inputValue.length > 38) {
          alert("Type your task less than 38 characters");
          setInputValue("");
        } else {
          addTask(); // Call addTask function when Enter key is pressed
        }
      }
    }
  };

  // Event handler for marking task as completed and removing it
  const TaskCompleted = (index) => {
    // Create a copy of tasks array
    const updatedTasks = [...tasks];
    // Remove task at specified index
    updatedTasks.splice(index, 1);
    // Update tasks state with the modified array
    setTasks(updatedTasks);
  };

  const updateItem = (e, i) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(i, 1, e.target.value);
    setTasks(updatedTasks);
  };

  return (
    <div className="MainDiv">
      <div id="HeaderDiv">
        <input
          id="MainBox"
          type="text"
          placeholder="Type your Activities to do here"
          value={inputValue}
          onChange={handleChange} // Handle input change
          onKeyPress={handleKeyPress} // Handle Enter key press
          required
        />
        <hr id="verticalLine"></hr>
        <button className="Headers" onClick={addTask}>
          Add to list
        </button>
        <span className="Headers">status</span>
      </div>
      {/* Render tasks */}
      <div id="Activities">
        {tasks.map((task, index) => (
          <div key={index} className="task">
            {index + 1 + ". "}
            {task}
            <button id="completedBtn" onClick={() => TaskCompleted(index)}>
              Completed?
            </button>
            <button id="completedBtn" onClick={() => TaskCompleted(index)}>
              Delete
            </button>
            <input
              type="text"
              onChange={(e) => {
                updateItem(e, index);
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home; // Wrap Home component with withRouter
