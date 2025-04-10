// Javascript for affiliate data persistence
// specifically to append btags to all links to the betonline website

var Adp = {

    getBtag: function() {
        // split url and retrieve btag
        var aPath = window.location.href.split("?");
        var sbtag = aPath[aPath.length - 1];
        return sbtag;
    },

    persistAffiliateData: function() {
        // get the affiliate data from the url
        var bTag = Adp.getBtag();
        if (!bTag) { return false; }

        // get all the links on the page
        var aLinks = document.getElementsByTagName("a");
        if (!aLinks) { return false; }

        // add the affiliate data to the links to betonline
        for (var i = 0; i < aLinks.length; i++) {
            if (aLinks[i].href.indexOf("betonline") > 0 || aLinks[i].href.indexOf("localhost") > 0) {
                aLinks[i].href = aLinks[i].href + "?" + bTag;
            }
        }
    }
};

function addLoadEvent(func){
    // appends unlimited functions to the onload event 
    var oldonload = window.onload;
    if(typeof window.onload != 'function'){
        window.onload = func;
    }else{
        window.onload = function(){
            oldonload();
            func();
        }
    }
}

addLoadEvent(Adp.persistAffiliateData);

function getQueryStringByName(name) {
	name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
	var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
	results = regex.exec(location.search);
	return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

//new function
function getDomain(host) {
  const locationHostParts = (host)?.split('.');
  if (locationHostParts?.length >= 2) {
    return `${locationHostParts[locationHostParts.length - 2]}.${locationHostParts[locationHostParts.length - 1].split(':')[0]}`;
  }
  return 'localhost';
}

function setCookie(cname, cvalue) {
    const domain = getDomain(globalThis.window.location.host);
    // time defined to 90 days
	date = new Date();
	date.setDate(date.getDate() + 90);    
	expires = "; expires="+date.toUTCString();
    document.cookie = `${cname}=${cvalue};${expires};domain=${domain};path=/`;	
}

function setAffiliateInformation() {
  const btag = getQueryStringByName('btag');
  const affid = getQueryStringByName('affid');
  const cookieName = 'IncomeAccess';
  if (btag.trim() != "" && affid.trim() != "") {
	setCookie(cookieName, `btag=${btag}&affid=${affid}`);
  }
}

globalThis.window.addEventListener('load', setAffiliateInformation)