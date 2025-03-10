let StartFunc = ({inData}) => {
    console.log("inData",inData);
    
    var $table = $('#table');
    // let jVarLocalSortByDate = jFLocalSortByDate();
    // let jVarLocalSortByAccountName = jVarLocalSortByDate.sort((a, b) => a.value - b.value);
    
    $table.bootstrapTable("load", inData);
};

const jFLocalSortByDate = () => {
    var jVarGlobalPresentViewData;
    return jVarGlobalPresentViewData.sort((a, b) => {
        const nameA = a.Date; // ignore upper and lowercase
        const nameB = b.Date; // ignore upper and lowercase
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }

        // names must be equal
        return 0;
    });
};

export { StartFunc };