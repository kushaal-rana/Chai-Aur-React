const reactElement = {
  type: "h1",
  props: {
    href: "https://www.google.com",
    target: "_blank",
    className: "title",
  },
  children: "Hello World from customReact",
};

const customRender = (reactElement, container) => {
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  domElement.setAttribute("href", reactElement.props.href);
  domElement.setAttribute("target", reactElement.props.target);
  domElement.setAttribute("className", reactElement.props.className);
  container.appendChild(domElement);
};

const modularCustomRender = (reactElement, container) => {
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  for (let prop in reactElement.props) {
    domElement.setAttribute(prop, reactElement.props[prop]);
  }
  container.appendChild(domElement);
};

const mainContainer = document.querySelector("#root");
// customRender(reactElement, mainContainer);
modularCustomRender(reactElement, mainContainer);
