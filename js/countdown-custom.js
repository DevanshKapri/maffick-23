jQuery(document).ready(function () {
    $(function () {
        $('#defaultCountdown').countdown({
            until: new Date(2023, 3, 3, 8)
        }); // year, month, date, hour
    });
});