function navBar() {
    let a1 = React.createElement("a", {href:""}, "About Me");
    let a2 = React.createElement("a", {href:""}, "Portfolio");
    let a3 = React.createElement("a", {href:""}, "Services");
    let a4 = React.createElement("a", {href:""}, "Blog");
    let menu = React.createElement("div", { id: "menu" }, [a1, a2, a3, a4]);

    let profile = React.createElement("img", { id: "profile", src: "https://media.istockphoto.com/id/1537997943/photo/black-and-white-film-portrait-of-a-middle-aged-man.jpg?s=2048x2048&w=is&k=20&c=CgUVvsu2Lu8NQpz0wVqCJwsP6nhHhM8pOW-17VSJPCc=" });

    let leftCorner = React.createElement("div", { id: "leftCorner" }, [profile, menu]);


    let anchor1 = React.createElement("a", { id: "bookCall" , href:""}, "Book A Call");
    let i = React.createElement("i", { class: "ri-arrow-right-up-line" },);
    let rightCorner = React.createElement("div", { id: "rightCorner" }, [anchor1, i]);

    let nav = React.createElement("nav", null, [leftCorner, rightCorner]);
    return nav;
}


export default navBar;