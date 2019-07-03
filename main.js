const url='https://api.github.com/users/EndriulisBeatz/repos';

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




$('#gitrepos').ready(function(){
    console.log('test')
    $.get(url, function(data, status){
        console.log('data')
        for (var i =data.length - 1; i >= 0; i--) {
           
        var card = `
                                <div class="card col-6" >
                                    <div id="github">
                                    <div class="card-body">
                                    <h5 class="card-title">`+data[i].name+`</h5>
                                    <h6 class="card-subtitle mb-2 text-muted"></h6>
                                    <p class="card-text">`+ data[i].description+`</p>
                                    <a href="`+ data[i].url+`" class="card-link">Repo Link</a>
                                     
                                    </div>
                                    `
        $('#gitrepos').append(card);

       

        console.log('test log')}
    });
})



    
    
    /* Bootstrap Tooltip for Skillset */
    $('.level-label').tooltip();
    
  

});