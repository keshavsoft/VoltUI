import { StartFunc as ColumnOperate } from "./ColumnSerial/entryFile.js";
import { StartFunc as FileDataCount } from "./FileDataCount/entryFile.js";


let StartFunc = ({ inColumns }) => {
    let LocalColumns = inColumns;
    let LocalColumnOperateFine = LocalColumns.find(element => element.field === "KS-Serial")
    let LocalFileDataCount = LocalColumns.find(element => element.field === "FileDataCount")

    if (LocalColumnOperateFine === undefined === false) {
        ColumnOperate({ inFindColumn: LocalColumnOperateFine });
    };

    if (LocalFileDataCount === undefined === false) {
        FileDataCount({ inFindColumn: LocalFileDataCount });
    };
   
};

export { StartFunc };