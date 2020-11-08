$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});

$('.navbar-collapse a').click(function(){
    $(".navbar-collapse").collapse('hide');
});