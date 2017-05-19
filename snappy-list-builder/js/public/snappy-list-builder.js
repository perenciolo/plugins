// wait until the page and jQuery have loaded before running the code below 
jQuery(document).ready(function ($) {
    // setup our wp ajax URL 
    var wpAjaxUrl = document.location.protocol + '//' + document.location.host + '/wp-admin/admin-ajax.php';

    // email capture action url 
    var emailCaptureUrl = wpAjaxUrl + '?action=slb_save_subscription';
    console.log(wpAjaxUrl);

    $('form.slb-form').bind('submit', function () {
        // get the jQuery form object
        $form = $(this);
        // setup our form data with ajax
        var form_data = $form.serialize();

        $.ajax({
            'method': 'post',
            'url': emailCaptureUrl,
            'data': form_data,
            'dataType': 'json',
            'cache': false,
            'success': function (response, textStatus) {
                if (response.status == 1) {
                    // success reset the form 
                    $form[0].reset();
                    // notify the user of success
                    alert(response.message);
                } else {
                    // error begin building our error message text
                    var msg = response.data + '\r' + response.error + '\r';
                    // loop over the errors 
                    $.each(response.errors, function (key, value) {
                        // append each error on a new line
                        msg += '\r';
                        msg += '- ' + value;
                    });
                    // notify the user of the error
                    alert(msg);
                }
            },
            'error': function (jqXHR, textStatus, errorThrown) {
                // ajax didn't work 
            }
        });
    });

});