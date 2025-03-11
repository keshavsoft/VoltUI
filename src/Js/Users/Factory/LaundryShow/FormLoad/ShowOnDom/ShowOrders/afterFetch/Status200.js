let StartFunc = ({inData}) => {
    // console.log(inData);
       
    var $table = $('#table');
    let jVarLocalModifiedData= inData.filter(e => e.Factory);

    $table.bootstrapTable("load", jVarLocalModifiedData);
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