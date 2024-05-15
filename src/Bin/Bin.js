// Bin.js
import React from "react";
import { useParams } from "react-router-dom";

const Bin = () => {
  const { taskId } = useParams(); // Get task ID from URL parameters

  return <div>Deleted Task ID: {taskId}</div>; // Display the deleted task ID
};

export default Bin;
