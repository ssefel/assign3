window.onload = init;

function init() {

    var query;
    var input = document.getElementById("query");

    // input.addEventListener("keypress", function(e){
    //     if(e.key == "Enter"){

    //         query = input.value;
    //         console.log(query);
    //         getTweets();

    //     }
    // });


setInterval(function(){
    
getTweets()
  
 }, 60000);  //can pull request 180x every 15 minutes, so to not max out I'll pull a new request every minute


function getTweets() {



      // function getTweets() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'get_tweets.php?', true); //this changes the state of xmlhttp
    xhr.send(null); 

    
    
    //response
    xhr.onload = function() {
        
        
        if(xhr.status == 200){

            var tweets = JSON.parse(xhr.responseText);
            tweets = tweets.statuses;

            console.log(tweets)

            //  EXAMPLE OUTPUT TO A LISt
            var tweetList = "";
            tweets.forEach(function(tweet) {
                tweetList += "<img src=" + tweet.user.profile_image_url_https + ">"+"<p>" + tweet.full_text + "</p>";
            });
            tweetList += "";



            document.getElementById("result").innerHTML = tweetList;
            
        } else {
            console.log(xhr);
            document.getElementById("result").innerHTML = xhr.responseText;
        }

    }
}

getTweets();


}