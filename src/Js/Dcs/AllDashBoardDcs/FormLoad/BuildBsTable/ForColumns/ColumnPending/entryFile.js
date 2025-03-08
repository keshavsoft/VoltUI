let StartFunc = ({ inFindColumn }) => {
    inFindColumn.formatter = jVarLocalFormatterFunc;
    inFindColumn.footerFormatter = priceFormatter;
};

let jVarLocalFormatterFunc = (value, row, index) => {
    if (row.pending !== 0) {
        return [
            `<a class="like btn btn-danger rounded-circle d-flex justify-content-center align-items-center" style="width: 32px; height: 32px;" href="./AllFactoryPending.html?VoucherRef=${row.pk}" title="Show">`,
            ' ',
            row.pending,
            '</a>',

        ].join('')

    }
};


function priceFormatter(data) {
    var field = this.field;
    let total = data.map(row => +row.pending)
        .reduce((sum, i) => sum + i, 0);

    return `<span style="font-size: 17px; font-weight: bold; display: block;">${total}</span>`;
}


// function priceFormatter(data) {
//     var field = this.field
//     return '' + data.map(function (row) {
//         return +row.ItemDetails
//     }).reduce(function (sum, i) {
//         return sum + i
//     }, 0)
// }

export { StartFunc };