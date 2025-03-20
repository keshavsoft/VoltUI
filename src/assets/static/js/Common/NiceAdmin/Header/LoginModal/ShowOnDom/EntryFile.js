const StartFunc = () => {
    jFLocalUser();
    jFLocalUserNameId();
};

let jFLocalUser = () => {
    let jVarLocalUserNameId = 'UserName'
    let jVarLocalHtmlId = document.getElementById(jVarLocalUserNameId);
    let jVarLocalUserName = localStorage.getItem("UserName");

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.innerHTML = jVarLocalUserName;
    };
};


let jFLocalUserNameId = () => {
    let jVarLocalUserNameId = 'UserNameId'
    let jVarLocalHtmlId = document.getElementById(jVarLocalUserNameId);
    let jVarLocalUserName = localStorage.getItem("UserName");

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.innerHTML = jVarLocalUserName;
    };
};
export { StartFunc }