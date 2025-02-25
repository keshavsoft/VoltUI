const StartFunc = (data) => {

    data.forEach(element => {
        jFLocalAddToItems({ inItemName: element.BranchName });
    });
};

const jFLocalAddToItems = ({ inItemName }) => {
    const option = `<option value="${inItemName}">${inItemName}</option>`
        
    // var option = $('<option value="' + inItemName + '"></option>');
    $('#BranchDatalist').append(option);
};

export { StartFunc };