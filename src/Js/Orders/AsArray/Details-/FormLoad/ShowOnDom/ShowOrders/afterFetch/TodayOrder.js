const StartFunc = (data) => {
    let template = document.getElementById('datatemplate').content;
    let container = document.getElementById('TodayContainerId');
    data.forEach(element => {
        let clone = template.cloneNode(true);
        clone.querySelector('.BranchNameClass').innerHTML=element.BranchName;
        clone.querySelector('.BranchOrderCountClass').innerHTML=element.QrCount;
        clone.querySelector('.todayOrderClass').href="../BranchWise/TodayDashboardQrCodes.html?Branch="+element.BranchName;
        container.appendChild(clone);
    });
};


export { StartFunc };