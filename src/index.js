const React = require("react");
const { render } = require("react-dom");

const App = () => {
  return <span>It works!</span>;
};

render(<App />, document.getElementById("root"));