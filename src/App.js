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
          <button className="square">1</button>
          <button className="square">2</button>
          <button className="square">3</button>
        </div>
        <div className="board-row">
          <button className="square">4</button>
          <button className="square">5</button>
          <button className="square">6</button>
        </div>
        <div className="board-row">
          <button className="square">7</button>
          <button className="square">8</button>
          <button className="square">9</button>
        </div>
    </>
  );

}
