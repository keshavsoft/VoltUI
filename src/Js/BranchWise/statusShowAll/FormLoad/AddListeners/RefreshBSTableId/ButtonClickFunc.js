import { StartFunc as FromServer } from "./FromServer/Entry.js";
import { StartFunc as StartFuncAfterFetch } from "./AfterFetch/EntryFile.js";

let StartFunc = async () => {
    jFLocalShowLoading();
    try {
        let jVarLocalData = await FromServer();

        StartFuncAfterFetch({ inData: jVarLocalData });
    } catch (e) {
        console.log("error from Promise all : ", e);
        alert("error from Promise All");
    };
    jFLocalHideLoading();
};

const jFLocalShowLoading = () => {
    let jVarLocalLoadingButtonId = document.getElementById('LoadingButtonId');
    jVarLocalLoadingButtonId?.classList.remove('d-none');

    let jVarLocalRefreshATagId = document.getElementById('RefreshATagId');
    jVarLocalRefreshATagId?.classList.add('d-none');
};

const jFLocalHideLoading = () => {
    let jVarLocalLoadingButtonId = document.getElementById('LoadingButtonId');
    jVarLocalLoadingButtonId?.classList.add('d-none');

    let jVarLocalRefreshATagId = document.getElementById('RefreshATagId');
    jVarLocalRefreshATagId?.classList.remove('d-none');
};

export { StartFunc }