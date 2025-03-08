let StartFunc = ({inData}) => {
    console.log("aaaaaaaa:",inData);
    
    var $table = $('#table');

    $table.bootstrapTable("load", inData);
};

export { StartFunc };