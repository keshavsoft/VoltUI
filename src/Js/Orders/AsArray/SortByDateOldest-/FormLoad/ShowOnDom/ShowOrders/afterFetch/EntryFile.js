import { StartFunc as StartFuncStatus200 } from "./Status200.js";
import { StartFunc as StartFuncStatus500 } from "./Status500.js";

let StartFunc = async (inData) => {
    let LocalResponse = inData.inData;

    if (LocalResponse.status === 200) {
        let jVarLocalDataAsJson = await LocalResponse.json();
        StartFuncStatus200({ inData: jVarLocalDataAsJson });
    }

    if (LocalResponse.status === 500) {
        StartFuncStatus500(await LocalResponse.text());
    }
};

export { StartFunc };