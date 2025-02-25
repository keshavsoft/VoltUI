

let StartFunc = async () => {
    // let LocalroutePath = UrlJson.routePath;   

    let jVarLocalFetchUrl = `/Custom/Cleaning/Dashboard/Admin/Reports/Pos/AllDays/QrCodes/BranchWise/QrCodes`;
    let response = await fetch(jVarLocalFetchUrl);

    return await response;
};

export { StartFunc };

