<?php
require_once "../classes/VkPhpSdk.php";
require_once "../classes/Oauth2Proxy.php";

// Init OAuth 2.0 proxy
$oauth2Proxy = new Oauth2Proxy(
    '2623235', // client id
    'FtoFreQZeezym3DCviid', // client secret
    'https://oauth.vk.com/access_token', // access token url
    'https://oauth.vk.com/authorize', // dialog uri
    'code', // response type
    'http://api.vkontakte.ru/blank.html', // redirect url
	'offline,notify,friends,photos,audio,video,wall' // scope
);

// Try to authorize client
if($oauth2Proxy->authorize() === true)
{
	// Init vk.com SDK
	$vkPhpSdk = new VkPhpSdk();
	$vkPhpSdk->setAccessToken($oauth2Proxy->getAccessToken());
	$vkPhpSdk->setUserId($oauth2Proxy->getUserId());

	// API call - get profile
	$result = $vkPhpSdk->api('getProfiles', array(
		'uids' => $vkPhpSdk->getUserId(),
		'fields' => 'uid, first_name, last_name, nickname, screen_name, photo_big',
	));
	echo 'My profile: <br />';
	echo '<pre>';
	print_r($result);
	echo '</pre>';
	
	// API call - wall post
	$result = $vkPhpSdk->api('wall.post', array(
		'owner_id' => $vkPhpSdk->getUserId(),
		'message' => 'Wellcome to vkPhpSdk!',
	));
	echo 'Wall post response: <br />';
	echo '<pre>';
	print_r($result);
	echo '</pre>';	
}
else
	echo 'Error occurred';