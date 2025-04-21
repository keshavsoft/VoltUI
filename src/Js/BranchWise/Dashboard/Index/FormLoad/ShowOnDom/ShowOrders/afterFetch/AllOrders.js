const StartFunc = (data) => {
    let template = document.getElementById('AllOrderstemplate').content;
    let container = document.getElementById('AllContainerId');
    data.forEach(element => {
        let clone = template.cloneNode(true);
        clone.querySelector('.BranchNameClass').innerHTML=element.BranchName;
        clone.querySelector('.BranchOrderCountClass').innerHTML=element.QrCount;
        clone.querySelector('.Allorders').href="../../QrCodesDashBoard/QrCodes/AllDashboardQrCodes.html?Branch="+element.BranchName;
        container.appendChild(clone);
    });
};


export { StartFunc };