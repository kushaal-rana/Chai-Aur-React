const reactElement = React.createElement(
  "h1",
  {
    href: "https://www.google.com",
    target: "_blank",
    className: "title",
  },
  "Hello World from React"
);

ReactDOM.createRoot(document.getElementById("root")).render(reactElement);
