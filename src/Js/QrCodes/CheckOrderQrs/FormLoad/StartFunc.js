import { StartFunc as StartFuncBuildBsTable } from "./BuildBsTable/EntryFile.js";
import { StartFunc as StartFuncFromUrlParams } from "./FromUrlParams/EntryFile.js";
import { StartFunc as AddListeners } from "./AddListeners/StartFunc.js";
import { StartFunc as ToDataList } from "./ToDataList/StartFunc.js";

const StartFunc = () => {
    StartFuncFromUrlParams();
    StartFuncBuildBsTable();
    AddListeners();
    ToDataList();
};

export { StartFunc };
