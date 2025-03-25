import { StartFunc as TodayOrder } from "./TodayOrder.js";
import { StartFunc as AllOrders } from "./AllOrders.js";

const StartFunc = (data) => {
    let localTodayData = data.TodayOrders;
    let localAllData = data.TotalOrders

    TodayOrder(localTodayData);
    AllOrders(localAllData);
};


export { StartFunc };