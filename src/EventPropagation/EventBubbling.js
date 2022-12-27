import React from "react";

const MyEvent = () => {
  const HandleOne = (e) => {
    // to stop bubbling, we use e.stopPropagation();

    // e.stopPropagation();
    console.log("one");
    alert("clicked Parent div");
  };

  const HandleTwo = (e) => {
    // e.stopPropagation();
    console.log("two");
    alert("clicked second div");
  };
  const HandleThree = (e) => {
    // e.stopPropagation();
    console.log("three");

    alert("hanlde third div");
  };
  return (
    <div
      style={{ border: "5px red", backgroundColor: "pink" }}
      onClick={(e) => HandleOne(e)}
    >
      This is Parent
      <div
        style={{ border: "5px green", backgroundColor: "green" }}
        onClick={(e) => HandleTwo(e)}
      >
        This is second outer
        <div
          style={{ border: "5px black", backgroundColor: "red" }}
          onClick={(e) => HandleThree(e)}
        >
          This is third outer
        </div>
      </div>
    </div>
  );
};
export default MyEvent;

//                        Note

// The concept of event propagation was introduced to deal with the situations
// in which multiple elements in the DOM hierarchy with a parent-child relationship have
//  event handlers for the same event, such as a mouse click. Now,
//  the question is which element's click event will be handled first when the user clicks
// on the inner element: the click event of the outer element, or the inner element?

// Event Propagation has three phases:

// Capturing Phase - the event starts from the window down until it reaches the event.target.
//   (top to bottom)

// Target Phase - the event has reached the event.target. The most deeply nested element
// that caused the event is called a target element, accessible as event.target.

// Bubbling Phase - the event bubbles up from the event.target element up until it reaches the window,
//  meaning: when an event happens on an element, it first runs the handlers on it,
// then on its parent, then all the way up on other ancestors.
//  That's the reverse of what is happening in the Capturing Phase.
//  (bottom to top)

//                    Note Two

// to use bubbling -:
// Bubbling is as straightforward as with the normal DOM API;
// simply attach a handler to an eventual parent of an element,
// and any events triggered on that element will bubble to the parent,
// just like in our example in the beginning.

// to use capturing -:
// Capturing is just as straightforward, but instead of the onClick prop,
//  you have to use onClickCapture on your element.





//   Second example of event bubbling.


// import React, { useState } from "react";
// function App() {
//   const [counter, setCounter] = useState(0);
//   return (
//     <div onClick={() => setCounter((prevCounter) => prevCounter + 1)}>
//       <button
//         onClick={(event) => {
//           event.stopPropagation();
//           setCounter((prevCounter) => prevCounter + 1);
//         }}
//       >
//         Counter value is: {counter}
//       </button>
//     </div>
//   );
// }

// export default App;
