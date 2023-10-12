/* Nested Structure in React
<div id="parent">
    <div id="child">
          <h1></h1>
          <h2></h2>
    </div>
    <div id="child2">
          <h1></h1>
          <h2></h2>
    </div>      
</div>
*/

const heading = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am a heading1 inside nested structure."),
    React.createElement("h2", {}, "I am a h2 inside nested structure."),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am  heading1 inside nested structure."),
    React.createElement("h2", {}, "I am a h2 inside nested structure."),
  ]),
]);

console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
