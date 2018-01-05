function setLanguage_index()
{
	var currentlanguage = navigator.language;
	//document.getElementById("ringringzoo_title").innerHTML = currentlanguage;

	if( currentlanguage == "zh-CN")
	{
		/*
		document.getElementById("ringringzoo_video").src = "http://player.youku.com/embed/XMTQ3Mjc5NzQ5Mg==";
		document.getElementById("voilentloli_video").src = "http://player.youku.com/embed/XMTQ3Mjc4ODE2MA==";
		document.getElementById("squareit_video").src = "http://player.youku.com/embed/XMTQ3Mjc5NjUxNg==";
		document.getElementById("wikininjia_video").src = "http://player.youku.com/embed/XMTQ3Mjc5MzEyNA==";
		*/
	}
	else
	{
		document.getElementById("ringringzoo_video").src = "https://www.youtube.com/embed/4WlojunSWxo";
		document.getElementById("voilentloli_video").src = "https://www.youtube.com/embed/pkJwUaTEi6Q";
		document.getElementById("squareit_video").src = "https://www.youtube.com/embed/tkfd11Oc4HI";
		document.getElementById("wikininjia_video").src = "https://www.youtube.com/embed/ZFzB8LOWSAA";
		document.reload();
	}
	
}

function setLanguage_apps(event)
{
	
}

function setLanguage_about(event)
{
	
}
