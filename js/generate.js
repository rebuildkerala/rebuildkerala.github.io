var tweet_name,tweets_content;
$(document).ready(function(){
  loadHandler();
  $('.generate').click(function(){

      var user_handler = tweet_name[Math.floor(Math.random()*tweet_name.length)];
      var tweet_content = tweets_content[Math.floor(Math.random()*tweets_content.length)];
      var data = tweet_content.Tweets;
    data = data.replace("@name",user_handler.name);
    $('#tweet-text').show();
    $('#tweet-text').val(data);
    $('.send-tweet').show();
    var url = "https://twitter.com/intent/tweet?text="+encodeURIComponent(data);

    $('.send-tweet').attr('href',url);
  })
});

function loadHandler()
{
  handler();
  content();
}

function handler()
{
  var url = './files/twitterdata.json?v=1.1.0';
  $.getJSON(url)
  .done(function(data){
    tweet_name = data;
  })
}

function content()
{
  var url = './files/tweets.json?v=1.1.0';
  $.getJSON(url)
  .done(function(data){
    tweets_content = data;
  })
}