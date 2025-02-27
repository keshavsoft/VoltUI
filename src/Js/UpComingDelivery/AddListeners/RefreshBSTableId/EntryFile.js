import { StartFunc as StartFuncFuncToRun } from "./FetchFromFuncs/Entry.js";

let StartFunc = () => {
    const arrClass = document.querySelectorAll(".ShowButtonClass");

    for (let i of arrClass) {
        i.addEventListener("click", StartFuncFuncToRun);
    };
};

export { StartFunc }