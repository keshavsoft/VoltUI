const StartFunc = (data) => {
    let template = document.getElementById('AllOrderstemplate').content;
    let container = document.getElementById('AllContainerId');
    data.forEach(element => {
        let clone = template.cloneNode(true);
        clone.querySelector('.BranchNameClass').innerHTML=element.Branch;
        clone.querySelector('.BranchOrderCountClass').innerHTML=element.TotalOrderCount;
        container.appendChild(clone);
    });
};


export { StartFunc };