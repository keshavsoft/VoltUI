import { StartFunc as TodayDcs } from "./TodayDcs.js";
import { StartFunc as AllDcs } from "./AllDcs.js";

const StartFunc = (data) => {
    let localTodayData = data.TodayDcs;
    let localAllData = data.AllDcs

    TodayDcs(localTodayData);
    AllDcs(localAllData);
};


export { StartFunc };