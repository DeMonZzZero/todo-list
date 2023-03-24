

import React from "react";
import ToDoList from "../components/TodoList";


function App() {
    return (
      <>
        <ToDoList start={[
          { id: 0, checked: true, str: 'Задача 1' },
          { id: 1, str: 'Задача 2' }
        ]}/>
      </>
    );
  }

export default App;

