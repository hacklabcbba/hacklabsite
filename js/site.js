
// topmenu affixed
$('#top-menu').affix({
    offset: {
        top: $('header').height()
    }
});

// scrollspy
$('body').scrollspy({
    target: '.navbar-collapse',
    offset: 100
});

// back-to-top button
$('body').scrollToTop({
    skin: 'cycle'
});
