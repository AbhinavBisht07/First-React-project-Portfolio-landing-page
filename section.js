function section() {
    let span1 = React.createElement("span", null, "Product Designer")
    let span2 = React.createElement("span", null, "2025");
    let line = React.createElement("div", {id:"line"},);
    let left = React.createElement("div", {id:"left"},[span1,line,span2]);
    

    let i1 = React.createElement("i", {class:"ri-add-line"},);
    let h11 = React.createElement("h1", null, "200");
    let p1 = React.createElement("p", null,"Projects completed");
    let div1 = React.createElement("div", {id:""},[i1,h11,p1]);
    let i2 = React.createElement("i", {class:"ri-add-line"},);
    let h12 = React.createElement("h1", null, "50");
    let p2 = React.createElement("p", null,"Startups raised");
    let div2 = React.createElement("div", {id:""},[i2,h12,p2]);
    let top = React.createElement("div", {id:"top"},[div1,div2]);


    let h13 = React.createElement("h1", null, "Hello");
    let p3 = React.createElement("p", null, "— It's D.Nova a design wizerd");
    let middle = React.createElement("div", {id:"middle"},[h13, p3]);


    let a5 = React.createElement("a", {href:"#", onclick:"return false;"}, "Scroll down");
    let i3 = React.createElement("i", {class:"ri-arrow-down-line"},);
    let bottom = React.createElement("div", {id:"bottom"},[a5,i3]);


    let right = React.createElement("div", {id:"right"},[top,middle,bottom]);

    let section = React.createElement("section", null,[left,right]);
    return section;
}


export default section;