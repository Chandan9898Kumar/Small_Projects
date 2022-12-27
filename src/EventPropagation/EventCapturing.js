function App() {
  // As we can see, the example below uses ‘onClickCapture’ instead of ‘onClick’,
  // telling React to use event capturing instead of event bubbling.
  // We can see the results in the console:
  function outerHandle() {
    console.log("outer");
  }

  function innerHandle() {
    console.log("inner");
  }
  //  To use event Capturing we use onClickCapture handler

  // to use event bubbling we use onClick handler.

  // Note

  // The onClick handler in React enables you to call a function and performs
  // an action when an element is clicked in your app.

  return (
    <div
      onClickCapture={outerHandle}
      style={{ border: "5px red", backgroundColor: "pink" }}
    >
      This is Parent
      <div
        onClickCapture={innerHandle}
        style={{ border: "5px green", backgroundColor: "green" }}
      >
        This is child
      </div>
    </div>
  );
}

export default App;
