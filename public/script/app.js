console.log("Loaded")

$.getJSON("/articles", function(data) {
    for( var i = 0 ; i < data.length ; i++ ) {
        if(data[i].saved === false) {
            $("#articles").append('<div class="row"><div class="card mb-3" style="max-width: 80%; min-width: 80%;"><div class="row no-gutters"><div class="col-md-4"><img src="' + data[i].image + '" class="card-img" alt="..."></div><div class="col-md-8"><div class="card-body"><h5 class="card-title">' + data[i].title + '</h5><a class="artLink" href="' + data[i].link + '">Link to Metal Injection Article</a><br><br><a href="#" class="btn btn-primary savButton" data-id="' + data[i]._id + '">Save Article</a></div></div></div></div>');
        }
    }
});

$.getJSON("/articles", function(data) {
    for( var j = 0 ; j < data.length ; j++ ) {
        if(data[j].saved === true) {
            $("#savedArticles").append('<div class="row"><div class="card mb-3" style="max-width: 80%; min-width: 80%;"><div class="row no-gutters"><div class="col-md-4"><img src="' + data[j].image + '" class="card-img" alt="..."></div><div class="col-md-8"><div class="card-body"><h5 class="card-title">' + data[j].title + '</h5><a class="artLink" href="' + data[j].link + '">Link to Metal Injection Article</a><br><br><a href="#" class="btn btn-primary savButton" data-id="' + data[j]._id + '">Save Article</a></div></div></div></div>');
        }
    }
})

$(document).on("click", ".savButton", function() {
    var savedArticleID = $(this).attr('data-id');
    $.ajax({
        method: "POST",
        url: "/articles/save/" + savedArticleID
    }).then(function(data) {
        console.log(data);
    })
})