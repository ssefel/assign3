<?php

	require_once('TwitterAPIExchange.php');
	 
	// Set access tokens: https://dev.twitter.com/apps/
	$settings = array(
	    'oauth_access_token' => "1107871213076926464-ZO7RZFsT0E1DIrPunU2PL9QIMzstGR",
	    'oauth_access_token_secret' => "hCW99L3aWkHc3UTc1CPoX0fwJ4u8OFzyNobuz8m4Bf5Qg",
	    'consumer_key' => "k3LeMB71qC9S6k6lqlMnYF931",
	    'consumer_secret' => "vVbYnA1pf3pYS6ZwfpmuB0ciCxQ0Pzock5y1SBZGcHd7umLdn8"
	);

	 //$q = $_REQUEST["q"];

	// Choose URL and Request Method
	$url = "https://api.twitter.com/1.1/search/tweets.json";
	$getfield = '?q=#todaysnews&result_type=recent&tweet_mode=extended&lang=en&count=100'; // queries start with ? and are strung together with &
	$requestMethod = "GET";
	
	//Perform the request!
	$twitter = new TwitterAPIExchange($settings);
	echo $twitter->setGetfield($getfield)
	             ->buildOauth($url, $requestMethod)
	             ->performRequest();

?>

