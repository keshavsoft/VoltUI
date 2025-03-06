import { StartFunc as ColumnOperate } from "./ColumnSerial/entryFile.js";
import { StartFunc as ColumnRate } from "./ColumnRate/entryFile.js";
import { StartFunc as BranchScan } from "./ColumnStatus/entryFile.js";
import { StartFunc as ColumnEntryStatus } from "./ColumnStatus/entryFile.js";
import { StartFunc as ColumnEntryCancel } from "./ColumnStatus/entryFile.js";
import { StartFunc as ColumnWashingStatus } from "./ColumnStatus/entryFile.js";
import { StartFunc as ColumnPressingStatus } from "./ColumnStatus/entryFile.js";
import { StartFunc as ColumnPressingRejectScan } from "./ColumnStatus/entryFile.js";
import { StartFunc as ColumnPressingRewash } from "./ColumnStatus/entryFile.js";
import { StartFunc as ColumnCompletionStatus } from "./ColumnStatus/entryFile.js";
import { StartFunc as FFEntryScan } from "./ColumnStatus/entryFile.js";
import { StartFunc as FFProcessScan } from "./ColumnStatus/entryFile.js";
import { StartFunc as FFCompletionScan } from "./ColumnStatus/entryFile.js";
import { StartFunc as ToDelivery } from "./ColumnStatus/entryFile.js";


let StartFunc = ({ inColumns }) => {
    let LocalColumns = inColumns;
    let LocalColumnOperateFine = LocalColumns.find(element => element.field === "KS-Serial");
    let LocalColumnRate = LocalColumns.find(element => element.field === "Rate");
    let LocalColumnBranchScan = LocalColumns.find(element => element.field === "BranchScan");
    let LocalColumnEntryStatus = LocalColumns.find(element => element.field === "EntryScan");
    let LocalColumnEntryReturnScan = LocalColumns.find(element => element.field === "EntryReturnScan");
    let LocalColumnWashingStatus = LocalColumns.find(element => element.field === "WashingScan");
    let LocalColumnPressingStatus = LocalColumns.find(element => element.field === "PressingScan");
    let LocalColumnPressingReject = LocalColumns.find(element => element.field === "PressingRejectScan");
    let LocalColumnPressingRewash = LocalColumns.find(element => element.field === "PressingRewash");
    let LocalColumnCompletionStatus = LocalColumns.find(element => element.field === "CompletionScan");
    let LocalColumnFFEntryScan = LocalColumns.find(element => element.field === "F_F_Entry_Return_Scan");
    let LocalColumnFFProcessScan = LocalColumns.find(element => element.field === "F_F_Pressing_Return_Scan");
    let LocalColumnFFCompletionScan = LocalColumns.find(element => element.field === "F_F_Completion_Scan");
    let LocalColumnToDelivery = LocalColumns.find(element => element.field === "To_Delivery_Scan");




    if (LocalColumnOperateFine === undefined === false) {
        ColumnOperate({ inFindColumn: LocalColumnOperateFine });
    };

    if (LocalColumnRate === undefined === false) {
        ColumnRate({ inFindColumn: LocalColumnRate });
    };
    if (LocalColumnBranchScan === undefined === false) {
        BranchScan({ inFindColumn: LocalColumnBranchScan });
    };

    if (LocalColumnEntryStatus === undefined === false) {
        ColumnEntryStatus({ inFindColumn: LocalColumnEntryStatus });
    };

    if (LocalColumnEntryReturnScan === undefined === false) {
        ColumnEntryCancel({ inFindColumn: LocalColumnEntryReturnScan });
    };
    if (LocalColumnWashingStatus === undefined === false) {
        ColumnWashingStatus({ inFindColumn: LocalColumnWashingStatus });
    };

    if (LocalColumnPressingStatus === undefined === false) {
        ColumnPressingStatus({ inFindColumn: LocalColumnPressingStatus });
    }; 

    if (LocalColumnPressingReject === undefined === false) {
        ColumnPressingRejectScan({ inFindColumn: LocalColumnPressingReject });
    }; 
    
    if (LocalColumnPressingRewash === undefined === false) {
        ColumnPressingRewash({ inFindColumn: LocalColumnPressingRewash });
    }; 
    
    if (LocalColumnCompletionStatus === undefined === false) {
        ColumnCompletionStatus({ inFindColumn: LocalColumnCompletionStatus });
    };
    if (LocalColumnFFEntryScan === undefined === false) {
        FFEntryScan({ inFindColumn: LocalColumnFFEntryScan });
    };
    if (LocalColumnFFProcessScan === undefined === false) {
        FFProcessScan({ inFindColumn: LocalColumnFFProcessScan });
    };
    if (LocalColumnFFCompletionScan === undefined === false) {
        FFCompletionScan({ inFindColumn: LocalColumnFFCompletionScan });
    };
    if (LocalColumnToDelivery === undefined === false) {
        ToDelivery({ inFindColumn: LocalColumnToDelivery });
    };
};

export { StartFunc };