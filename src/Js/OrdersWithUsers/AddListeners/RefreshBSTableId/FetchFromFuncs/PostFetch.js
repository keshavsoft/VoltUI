import { StartFunc as StartFuncFetchHeaders } from "./FetchHeaders/EntryFile.js";
import ConfigJson from "../../../Config.json" with { type: "json" };

let StartFunc = async () => {
    let jVarLocalBranchName = jFLocalBranch();
    let fromDate = new Date(jFLocalFromDateInputId());
    let toDate = new Date(jFLocalToDateInputId());

    function formatDate(date) {
        let day = String(date.getDate()).padStart(2, '0');
        let month = String(date.getMonth() + 1).padStart(2, '0');
        let year = date.getFullYear();
        return `${day}-${month}-${year}`;
    }

    let formattedFromDate = formatDate(fromDate);
    let formattedToDate = formatDate(toDate);

    let LocalroutePath = ConfigJson.url;

    let jVarLocalFetchHeaders = StartFuncFetchHeaders();
    console.log(jVarLocalFetchHeaders);
    let jVarLocalFetchUrl = `${LocalroutePath}/BranOrders${jVarLocalBranchName}/${formattedFromDate}/${formattedToDate}`;
    let response = await fetch(jVarLocalFetchUrl);
    console.log(response)

    return await response;
};

let jFLocalBranch = () => {
    let jVarLocalBranch = 'Branch'
    let jVarLocalHtmlId = document.getElementById(jVarLocalBranch);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};

let jFLocalFromDateInputId = () => {
    let jVarLocalFromDateInputId = 'FromDateInputId'
    let jVarLocalHtmlId = document.getElementById(jVarLocalFromDateInputId);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};

let jFLocalToDateInputId = () => {
    let jVarLocalToDateInputId = 'ToDateInputId'
    let jVarLocalHtmlId = document.getElementById(jVarLocalToDateInputId);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};
export { StartFunc };

