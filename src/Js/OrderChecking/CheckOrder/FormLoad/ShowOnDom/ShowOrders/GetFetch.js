import UrlJson from "../../../Config.json" with { type: "json" };

let StartFunc = async () => {
    let LocalGetEndPoint = UrlJson.url;
    
    let jVarLocalFetchUrl = `${LocalGetEndPoint}`;
    let response = await fetch(jVarLocalFetchUrl);

    return await response;
};


export { StartFunc };

