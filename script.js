import navBar from "./navBar.js";
import section from "./section.js"
let main = document.querySelector("main");
let root = ReactDOM.createRoot(main);
 
function container() {
    let container = React.createElement("div", { id: "container" }, [navBar(),section()]);
    return container;
}

root.render(container());   
