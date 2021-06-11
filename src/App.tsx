import React, { useState } from "react";
import  ButtonAppBar from './AppBar'
import { MyForm } from "./MyForm";
import { MyTable } from "./MyTable";
const id = require ('short-id');



const App = () => {
  const [rows, setRows] = useState([
    {
      id: id.generate(),
      firstName: "a",
      lastName: "a",
      email: "a@gmail.com"
    }
  ]);

  return (
    <div style={{ textAlign: "center" }}>
      <ButtonAppBar />
      <MyForm
        onSubmit={data => {
          setRows(currentRows => [
            {
          id: id.generate(),  ...data
            }, ...currentRows
          ]);
        }}
      />
      <MyTable rows={rows} />
    </div>
  );
};

export default App;