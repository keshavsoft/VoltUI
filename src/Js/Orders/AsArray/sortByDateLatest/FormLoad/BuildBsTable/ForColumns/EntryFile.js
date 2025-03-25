import { StartFunc as ColumnOperate } from "./ColumnSerial/entryFile.js";
import { StartFunc as Columnopts } from "./Columnopts/entryFile.js";

let StartFunc = ({ inColumns }) => {
    let LocalColumns = inColumns;
    let LocalColumnOperateFine = LocalColumns.find(element => element.field === "KS-Serial");
    let LocalColumnopts = LocalColumns.find(element => element.field === "KS-Opts");

    if (LocalColumnOperateFine === undefined === false) {
        ColumnOperate({ inFindColumn: LocalColumnOperateFine });
    };

    if (LocalColumnopts === undefined === false) {
        Columnopts({ inFindColumn: LocalColumnopts });
    };
};

export { StartFunc };