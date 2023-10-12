import React from "react";
import { Button } from "react-bootstrap";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ToastContain() {
  const notify = () =>
    toast.success("Hello World...!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  return (
    <div>
      <h1>Hello World</h1>
      <Button onClick={notify}>Notify...!</Button>
      <ToastContainer style={{textAlign:"left"}}/>
    </div>
  );
}

export default ToastContain;
