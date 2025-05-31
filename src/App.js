//code in this file creates a component, a piece of reusable code that represents part of a UI
//components are used to render, manage, and update the UI elements in your application


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
          <Square value="1" />
          <Square value="2" />
          <Square value="3"/>
        </div>
        <div className="board-row">
          <Square value="4" />
          <Square value="5" />
          <Square value="6" />
        </div>
        <div className="board-row">
          <Square value="7" />
          <Square value="8" />
          <Square value="9" />
        </div>
    </>
  );

}

// new square component
// we use props to pass the value each square should have from the parent component (Board) to its child (Square)
// function Square({ value }) indicates the Square component can be passed a prop called value
function Square({ value }) {
  return <button className="square">{value}</button>
}
