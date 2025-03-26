const StartFunc = () => {
    let jVarLocalBranchName = getUrlQueryParams({ inGetKey: "Branch" });

    if (jVarLocalBranchName === null === false ) {
        let jVarLocalClubbedData = `${jVarLocalBranchName}`;
        jFLocalBranchId(jVarLocalClubbedData);
    };
};

let jFLocalBranchId = (inValue) => {
    let jVarLocalHtmlId = 'BranchNameId';
    let jVarLocalBranch = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalBranch === null === false) {
        jVarLocalBranch.innerHTML = inValue;
    };
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

export { StartFunc };
