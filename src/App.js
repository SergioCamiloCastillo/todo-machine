import { AppUI } from "./AppUI";
import react, { useState, useEffect } from "react";
import { TodoProvider } from './TodoContext';


function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}
export default App;

