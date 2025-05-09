import UrlJson from "../../../Config.json" with { type: "json" };

let StartFunc = async () => {
    let LocalroutePath = UrlJson.routePath;
    let jVarLocalBranchName =  getUrlQueryParams({ inGetKey: "BranchName" });
    let jVarLocalVoucherRef = getUrlQueryParams({ inGetKey: "VoucherRef" });


    let jVarLocalFetchUrl = `${LocalroutePath}/${jVarLocalVoucherRef}/${jVarLocalBranchName}`;
    let response = await fetch(jVarLocalFetchUrl);

    return await response;
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

export { StartFunc };

