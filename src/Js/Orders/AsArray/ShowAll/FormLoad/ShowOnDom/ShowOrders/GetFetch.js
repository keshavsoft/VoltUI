import UrlJson from "../../../Config.json" with { type: "json" };

let StartFunc = async () => {
    let LocalroutePath = UrlJson.routePath;

    let response = await fetch(`${LocalroutePath}`);

    return await response;
};

export { StartFunc };

