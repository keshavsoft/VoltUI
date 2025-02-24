import { StartFunc as StartFuncFetchHeaders } from "./FetchHeaders/EntryFile.js";
import ConfigJson from "../../../Config.json" with { type: "json" };

let StartFunc = async () => {
    let LocalroutePath = ConfigJson.url;
    // let jVarLocalBranchName = localStorage.getItem("BranchName");
    let jVarLocalBranchName = getUrlQueryParams({ inGetKey: "Branch" });
    jVarLocalBranchName = "BranOrders"+jVarLocalBranchName;
    let jVarLocalFetchHeaders = StartFuncFetchHeaders();
    // console.log(jVarLocalFetchHeaders);
    let jVarLocalFetchUrl = `${LocalroutePath}/${jVarLocalBranchName}`;
    //let jVarLocalFetchUrl = `/${LocalroutePath}/Transactions/${jVarLocalBranchName}/FilterDataFrombody`;
    let response = await fetch(jVarLocalFetchUrl);
    // console.log(response)

    return await response;
};

        let getUrlQueryParams = ({ inGetKey }) => {
            const queryString = window.location.search;
            const parameters = new URLSearchParams(queryString);
            const value = parameters.get(inGetKey);
            return value;
        };

export { StartFunc };

