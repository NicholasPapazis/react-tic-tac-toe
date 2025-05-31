//code in this file creates a component, a piece of reusable code that represents part of a UI
//components are used to render, manage, and update the UI elements in your application

// useState is a function that you can call from your component to let it remember things
import { useState } from 'react'; 

// function square() -> defines function called square
// export -> makes this function accessible outside of this file
// default -> tells other files using this code that it's the main function in this file
export default function Board() {
  
  // returns a button
  // <button> is a JSX element (JSX is combo of JS and HTML that describes what you want to display)
  // className = "square" -> a button prop that tells CSS how to style the button
  // X -> the text displayed inside of the button
  return (
    //wrap adjacent JSX elements in fragments
    <> 
        <div className="board-row">
          <Square  />
          <Square  />
          <Square  />
        </div>
        <div className="board-row">
          <Square  />
          <Square  />
          <Square  />
        </div>
        <div className="board-row">
          <Square  />
          <Square  />
          <Square  />
        </div>
    </>
  );

}

// new square component
// we use props to pass the value each square should have from the parent component (Board) to its child (Square)
// function Square({ value }) indicates the Square component can be passed a prop called value
function Square() {
  
  // value -> stores the value
  // setValue -> function used to change the value
  // null passed to useState is used as the initial value for this state variable
  const [value, setValue] = useState(null);

  //fill Square with X when clicked
  //usage is within onClick prop in button component
  function handleClick() {
    setValue('X'); //setValue is the 2nd parameter when creating the state variable for value
  }

  return (
    <button 
      className="square" 
      onClick={handleClick}
      >
        {value}
      </button>
  );
}
