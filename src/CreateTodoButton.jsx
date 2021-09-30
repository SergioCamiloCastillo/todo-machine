import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton(props) {
  return (
    <button className="CreateTodoButton"
    onClick={()=>console.log('aqui hubo un clic')}
    >+</button>
  );
}

export { CreateTodoButton };
