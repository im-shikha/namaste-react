import React from "react";
import ReactDOM from "react-dom/client";

//JSX is not HTML in JS. It is HTML-like syntax extension for JS.
const Title = () => <h1 id="heading">Namaste React using JSX.</h1>;
console.log(Title);

const HeadingComponent = () => {
  return (
    <div>
      {Title()}
      <Title />
      <Title />
      <Title></Title>
      <h1 className="heading" tabIndex="5">
        Namaste React from Functional Component!
      </h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
