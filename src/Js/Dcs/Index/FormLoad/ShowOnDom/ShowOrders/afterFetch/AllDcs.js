const StartFunc = (data) => {
    let template = document.getElementById('AllOrderstemplate').content;
    let container = document.getElementById('AllContainerId');
    data.forEach(element => {
        let clone = template.cloneNode(true);
        clone.querySelector('.BranchNameClass').innerHTML=element.BranchName;
        clone.querySelector('.BranchOrderCountClass').innerHTML=element.DcCount;
        clone.querySelector('.Allorders').href="../Orders/OrderDetails/totalOrders.html?Branch="+element.BranchName;
        container.appendChild(clone);
    });
};


export { StartFunc };