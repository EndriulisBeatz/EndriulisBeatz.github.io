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

$('#gitrepos').ready(function(){
    console.log('test')
    $.get(url, function(data, status){
        console.log('data')
        for (var i =data.length - 1; i >= 0; i--) {
           
        var card = `
                                <div class="card col-xs-12 col-sm-4" >
                                    <div id="github">
                                     <div class="row">
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
    
    
    /* jQuery RSS - https://github.com/sdepold/jquery-rss */
    
    // $("#rss-feeds").rss(
    
    //     //Change this to your own rss feeds
    //     "https://feeds.feedburner.com/TechCrunch/startups",
        
    //     {
    //     // how many entries do you want?
    //     // default: 4
    //     // valid values: any integer
    //     limit: 3,
        
    //     // the effect, which is used to let the entries appear
    //     // default: 'show'
    //     // valid values: 'show', 'slide', 'slideFast', 'slideSynced', 'slideFastSynced'
    //     effect: 'slideFastSynced',
        
    //     // will request the API via https
	   //  // default: false
	   //  // valid values: false, true
	   //  ssl: true,
        
    //     // outer template for the html transformation
    //     // default: "<ul>{entries}</ul>"
    //     // valid values: any string
    //     layoutTemplate: "<div class='items'>{entries}</div>",
        
    //     // inner template for each entry
    //     // default: '<li><a href="{url}">[{author}@{date}] {title}</a><br/>{shortBodyPlain}</li>'
    //     // valid values: any string
    //     entryTemplate: '<div class="item"><h3 class="title"><a href="{url}" target="_blank">{title}</a></h3><div><p>{shortBodyPlain}</p><a class="more-link" href="{url}" target="_blank"><i class="fas fa-external-link-alt"></i>Read more</a></div></div>'
        
    //     }
    // );
    
    // /* Github Calendar - https://github.com/IonicaBizau/github-calendar */
    // new GitHubCalendar("#github-graph", "IonicaBizau");
    
    
    // /* Github Activity Feed - https://github.com/caseyscarborough/github-activity */
    // GitHubActivity.feed({ username: "mdo", selector: "#ghfeed" });


});
