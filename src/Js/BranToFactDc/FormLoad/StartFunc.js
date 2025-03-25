import { StartFunc as ShowOnDom } from "./ShowOnDom/StartFunc.js";
import { StartFunc as BuildBsTable } from "./BuildBsTable/EntryFile.js";

const StartFunc = async () => {
    BuildBsTable();
    ShowOnDom();
};

export { StartFunc };
