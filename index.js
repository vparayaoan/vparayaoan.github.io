//Dark Mode Toggle
$(document).ready(function () {
    $('.toggle').click(function () {
        $('.toggle').toggleClass('active')
        $('body').toggleClass('night')
    })
})

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})