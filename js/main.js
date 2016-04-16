
// READY
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        margin:10,
        loop:true,
        items:1,
        autoplay:true,
        autoplayTimeout:8000,
        autoplayHoverPause:true
    });

    $('.owl-carousel img').click(function(evt) {
        evt.stopPropagation();
        evt.preventDefault();

        $('#screenshot .modal-body').html('<img src="' + $(this).attr('src') + '" class="img-responsive" />');
        $('#screenshot').modal('show');
    });
});

