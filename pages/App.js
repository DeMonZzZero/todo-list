import React from "react";
import ToDoList from "../components/TodoList";


function App() {
    return (
      <>
        <ToDoList start={[
          { id: 0, checked: true, str: 'читать learn JS' },
          { id: 1, str: 'выполнить ДЗ' }
        ]}/>
      </>
    );
  }

export default App;
