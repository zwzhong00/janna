function changeIframe() {
    var id = $(this).attr('id')
    $(this).addClass('is-active').siblings().removeClass("is-active")
    $('.main--right iframe').attr('src', id )
}
$(document).ready(function() {
    $('.nav__item').bind('click',changeIframe)
});
