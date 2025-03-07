let StartFunc = ({ inFindColumn }) => {
    inFindColumn.footerFormatter = priceFormatter;
    inFindColumn.formatter = jVarLocalFormatterFunc;

};

function priceFormatter(data) {
    var field = this.field;
    let total = data.map(row => +row.ItemDetails)
        .reduce((sum, i) => sum + i, 0);

    return `<span style="font-size: 17px; font-weight: bold; display: block;">${total}</span>`;
}


let jVarLocalFormatterFunc = (value, row, index) => {
    return [
        `<a class="like btn btn-success text-white rounded-circle d-flex justify-content-center align-items-center" style="width: 32px; height: 32px;" href="#" title="Show">`,

        // '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">',
        // '<path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>',
        // '<path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>',
        // '</svg>',
        ' ',
        row.ItemDetails,
        '</a>',

    ].join('')

}

export { StartFunc };