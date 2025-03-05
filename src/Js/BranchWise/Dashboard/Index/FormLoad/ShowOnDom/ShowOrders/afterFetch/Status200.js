import { StartFunc as TodayOrder } from "./TodayOrder.js";
import { StartFunc as AllOrders } from "./AllOrders.js";

const StartFunc = (data) => {
    let localTodayData = data.TodayQrCodes;
    let localAllData = data.AllQrCodes

    TodayOrder(localTodayData);
    AllOrders(localAllData);
};


export { StartFunc };