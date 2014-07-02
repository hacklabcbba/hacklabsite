
// topmenu affixed
$('#top-menu').affix({
    offset: {
        top: $('header').height()
    }
});

// back-to-top button
$('body').scrollToTop({
    skin: 'cycle'
});
