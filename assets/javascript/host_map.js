
/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *  WARNING: Moovweb auto-generated file. Any changes you make here will *
 *  be overwritten.                                                      *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

(function(){

if (typeof(mw) == "undefined") {
	window.mw = {};
}
var mapProxyToOriginPrime = {"http://mlocal.akamai.pepboys-uat.net:3030":"http://akamai.pepboys-uat.net","http://mlocal.www.pepboys-uat.net:3030":"http://www.pepboys-uat.net","http://mlocal.www.pepboys.com:3030":"http://www.pepboys.com","https://mlocal.akamai.pepboys-uat.net":"https://akamai.pepboys-uat.net","https://mlocal.www.pepboys-uat.net":"https://www.pepboys-uat.net","https://mlocal.www.pepboys.com":"https://www.pepboys.com"},
    mapOriginToProxyPrime = {"http://akamai.pepboys-uat.net":"http://mlocal.akamai.pepboys-uat.net:3030","http://www.pepboys-uat.com":"http://mlocal.www.pepboys-uat.net:3030","http://www.pepboys-uat.net":"http://mlocal.www.pepboys-uat.net:3030","http://www.pepboys.com":"http://mlocal.www.pepboys.com:3030","https://akamai.pepboys-uat.net":"https://mlocal.akamai.pepboys-uat.net","https://www.pepboys-uat.com":"https://mlocal.www.pepboys-uat.net","https://www.pepboys-uat.net":"https://mlocal.www.pepboys-uat.net","https://www.pepboys.com":"https://mlocal.www.pepboys.com"};

if (typeof(mw.mapProxyToOrigin) !== "undefined") {
  for (key in mapProxyToOriginPrime) {

    if (mapProxyToOriginPrime.hasOwnProperty(key)) {
        mw.mapProxyToOrigin[key] = mapProxyToOriginPrime[key];
    }
  }
} else {
  mw.mapProxyToOrigin = mapProxyToOriginPrime;
}

if (typeof(mw.mapOriginToProxy) !== "undefined") {
  for (key in mapOriginToProxyPrime) {
    if (mapOriginToProxyPrime.hasOwnProperty(key)) {
        mw.mapOriginToProxy[key] = mapOriginToProxyPrime[key];
    }
  }
} else {
  mw.mapOriginToProxy = mapOriginToProxyPrime;
}



if(typeof(mw.catch_all_domain) == "undefined") {
	mw.catch_all_domain = ".moovapp.com";
} else {
  if (mw.catch_all_domain[0] != ".") {
  	console.log("Bad catch all domain");
  }
}


function detect_catch_all(url) {
	var found_index = url.host.indexOf(mw.catch_all_domain);
	var length = url.host.length;

	if (found_index != -1 && (found_index + mw.catch_all_domain.length) == length) {
		return true;
	}
	return false;
}

function strip_catch_all(url) {
	var found_index = url.host.indexOf(mw.catch_all_domain);
	var length = url.host.length;

	url.host = url.host.slice(0, found_index);
	return url;
}

function add_catch_all(url) {
	url.host = url.host + mw.catch_all_domain;
	return url;
}

function getParsedURL(url) {
	var elem = document.createElement("a")
	elem.href = url;
	return elem;
}

function getSchemeAndHostname(url) {
	var result = {};
	result.scheme = url.protocol;
	result.host = url.host;
	return result;
}

function getKey(url) {
	var components = getSchemeAndHostname(url);
	return components.scheme + "//" + components.host;
}

function fetch(url, map) {
	var key = getKey(url);
	var result = map[key];

	if (result === undefined) {
		if (typeof(mw) != 'undefined' && mw.debug == true) {
			console.log("Warning. No rule to modify host (" + key + ").")
		}
		return url.href;
	}

	return result + url.pathname + url.search + url.hash;
}

function detect(rawURL) {
  var properties = {
    "secure": false,
    "schema_relative": false,
    "relative": false
  };
  properties.raw = rawURL;

  if (rawURL.indexOf("https://") != -1) {
    properties.secure = true;
  } else if(rawURL.indexOf("http://") == -1) {
    if (rawURL.indexOf("//") == 0) {
      properties.schema_relative = true;
    } else {
      properties.relative = true;
    }
  }

  return properties;
}

function denormalize(url, properties) {
  url = getParsedURL(url);
  if (properties.relative) {
    return url.pathname + url.search + url.hash;
  } else {
    if (properties.secure) {
      return url.href.replace("http://","https://");
    }
    if (properties.schema_relative) {
      return url.href.replace(/^https*:/, "");
    }

  }
  return url.href;
}

mw.proxyURLToOrigin = function(rawURL){

	var properties = detect(rawURL);

	// Make sure it includes the host, or it will still be proxied!
	properties.relative = false;

	var url = getParsedURL(rawURL);
	var catch_all = detect_catch_all(url);

  if (catch_all) {
	  url = strip_catch_all(url);
  }

	url = fetch(url, this.mapProxyToOrigin);
	url = denormalize(url, properties);

	return url;
}

mw.originURLToProxy = function(rawURL){

	var properties = detect(rawURL);
	var url = getParsedURL(rawURL);
	var catch_all = detect_catch_all(url);

  if (catch_all) {
	  url = strip_catch_all(url);
  }

  url = getParsedURL(fetch(url, this.mapOriginToProxy));
  var globalLocation = getParsedURL(window.location.href);
  var urlShouldBeProxied = typeof(this.mapOriginToProxy[getKey(url)]) !== undefined;

  if (detect_catch_all(globalLocation) && urlShouldBeProxied) {
      url = add_catch_all(url);
  }

	url = denormalize(url.href, properties);

	return url;
}

}());
