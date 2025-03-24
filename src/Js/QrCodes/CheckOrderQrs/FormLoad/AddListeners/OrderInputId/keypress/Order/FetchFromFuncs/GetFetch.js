import ConfigJson from "../../../../../../Config.json" with { type: "json" };

let StartFunc = async () => {
    let LocalOrderId = jFLocalOrderId();
    let jVarLocalBranchName = jFLocalBranch();

    let jVarLocalFetchUrl = `/Custom/Cleaning/Branch/Order/Delivery/OrderScan/CheckStatus/${LocalOrderId}/${jVarLocalBranchName}`;
    let response = await fetch(jVarLocalFetchUrl);

    return await response;
};

let jFLocalOrderId = () => {
    let jVarLocalOrderId = 'OrderId'
    let jVarLocalHtmlId = document.getElementById(jVarLocalOrderId);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};

let jFLocalBranch = () => {
    let jVarLocalBranch = 'Branch'
    let jVarLocalHtmlId = document.getElementById(jVarLocalBranch);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};
export { StartFunc };

