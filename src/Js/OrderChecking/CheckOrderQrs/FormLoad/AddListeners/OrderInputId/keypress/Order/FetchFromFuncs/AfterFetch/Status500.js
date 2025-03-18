let StartFunc = (inData) => {
    if (!inData || inData.length === 0) {
        Swal.fire({
            text: "No Data",
            title: "Check",
            icon: "error"
        });

        $('#table').bootstrapTable("load", []);
    } else {
        $('#table').bootstrapTable("load", inData);
    }
};

export { StartFunc };
