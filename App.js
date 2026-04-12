/**
 * <div id="parent">
 *    <div id="child">
 *      <h1></h1>
 * </div>
 * </div>
 *
 */
import React from "react";
import ReactDOM from "react-dom/client";
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1", key: "child1" }, [
    React.createElement("h1", { key: "h1-1" }, "I'm an h1 tag"),
    React.createElement("h2", { key: "h2-1" }, "I'm an h2 tag"),
  ]),
  React.createElement("div", { id: "child2", key: "child2" }, [
    React.createElement("h1", { key: "h1-2" }, "I'm an h1 tag"),
    React.createElement("h2", { key: "h2-2" }, "I'm an h2 tag"),
  ]),
]);

// const heading = React.createElement(
//   "h1",
//   { id: "heading", xyz: "abc" },
//   "Hello World from React",
// );
console.log(parent); //object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
