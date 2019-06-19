jQuery(document).ready(function($) {
    console.log('document ready')

    /*======= Skillset *=======*/
     $('.level-bar-inner').css('width', '0');

    $(function() {
            console.log('first log')
        $('.level-bar-inner').each(function() {
            console.log('second log')
            var itemWidth = $(this).data('level');
            
            $(this).animate({
                width: itemWidth
            }, 800);
            
        });

    });


const url='https://api.github.com/users/EndriulisBeatz/repos';

$('#github').ready(function(){
    console.log('test')
    $.get(url, function(data, status){
        console.log('data')
        for (var i =data.length - 1; i >= 0; i--) {
           
        
        $('#github').append('<p> '+ data[1].url+' </p>' );
        console.log('test log')}
    });
})


    
    
    /* Bootstrap Tooltip for Skillset */
    $('.level-label').tooltip();
    
   

});