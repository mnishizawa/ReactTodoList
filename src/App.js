import React from "react";
import "./styles.css";

import { Grid } from "@material-ui/core";
import { ToDoEntryComponent, ToDoListComponent } from "./components";

export default function App() {
  return (
    <div className="App">
      <h1>Todo List</h1>
      <Grid container>
        <Grid item>
          <ToDoEntryComponent />
          <ToDoListComponent />
        </Grid>
      </Grid>
    </div>
  );
}
