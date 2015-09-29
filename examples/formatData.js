function formatDataRemoveDollarAndCommasExample(input) {
    if (input) {
        return input.replace('$', '').replace(',', '');
    } else {
        return input;
    }
}

function formatDataCheckboxExample(input) {
    // if the table cell contains a checkbox replace the contents with true if checked or false

    if(!( input != null && typeof input === 'object')) input = "<span>"+input+"</span>"; // to be able to use jquery
    var $output = $(input);

    var $checkbox = $output.find('input[type=checkbox]');
    if ($checkbox.length) {
        $output = $('<span>' + Boolean($checkbox.prop('checked')) + '</span>');
    }

    return $output[0].outerHTML;
}