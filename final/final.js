$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    // console.log(scroll);


    if (scroll>70){
        $("#myNav").addClass("berubah");
    }
    else{
        $("#myNav").removeClass("berubah");
    }
});

var mini = document.getElementsByClassName('kecil');
$( '#myNav button' ).on('click', function (){
    if (mini.length > 0){
        $( '#myNav .navbar-nav' ).find('div.spasi').addClass(' spacer');
        $( '#myNav button' ).removeClass(' kecil');
        $( '#myNav .navbar-nav' ).addClass(' navbar-besar');
        $( '#myNav .navbar-nav' ).removeClass( ' hitam' );
        $("#myNav").removeClass("hitam");
    }
    else{
        $( '#myNav .navbar-nav' ).find('div.spasi').removeClass('spacer');
        $( '#myNav button' ).addClass(' kecil');
        $( '#myNav .navbar-nav' ).removeClass(' navbar-besar');
        $( '#myNav .navbar-nav' ).addClass( ' hitam' );
        $("#myNav").addClass("hitam");
    }
});



$( '#myNav .navbar-nav a' ).on( 'click', function () {
	$( '#myNav .navbar-nav' ).find( 'div.active' ).removeClass( 'active' );
	$( this ).parent( 'div' ).addClass( 'active' );
});