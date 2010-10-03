/*
 * Piwik - Web Analytics
 *
 * @link http://piwik.org
 * @license http://www.gnu.org/licenses/gpl-3.0.html GPL v3 or later
 * @version $Id$
 */
var Piwik,piwik_log,piwik_track;if(!this.Piwik){Piwik=(function(){var i,p={},c=document,g=navigator,o=screen,u=window,f=false,r=[],m=u.encodeURIComponent||escape,b=u.decodeURIComponent||unescape;function a(v){return typeof v!=="undefined"}function n(y,x,w,v){if(y.addEventListener){y.addEventListener(x,w,v);return true}else{if(y.attachEvent){return y.attachEvent("on"+x,w)}}y["on"+x]=w}function e(w,z){var v="",y,x;for(y in p){x=p[y][w];if(typeof x==="function"){v+=x(z)}}return v}function s(v){if(a(i)){var w;do{w=new Date()}while(w.getTime()<i)}e("unload")}function h(w){if(!f){f=true;e("load");for(var v=0;v<r.length;v++){r[v]()}}return true}function q(){if(c.addEventListener){n(c,"DOMContentLoaded",function v(){c.removeEventListener("DOMContentLoaded",v,false);h()})}else{if(c.attachEvent){c.attachEvent("onreadystatechange",function v(){if(c.readyState==="complete"){c.detachEvent("onreadystatechange",v);
h()}});if(c.documentElement.doScroll&&u==u.top){(function v(){if(f){return}try{c.documentElement.doScroll("left")}catch(w){setTimeout(v,0);return}h()}())}}}n(u,"load",h,false)}function d(){var v="";try{v=top.document.referrer}catch(x){if(parent){try{v=parent.document.referrer}catch(w){v=""}}}if(v===""){v=c.referrer}return v}function j(v){var x=new RegExp("^(?:(?:https?|ftp):)/*(?:[^@]+@)?([^:/#]+)"),w=x.exec(v);return w?w[1]:v}function l(w,A){var z=new RegExp("^(?:https?|ftp)(?::/*(?:[^?]+)[?])([^#]+)"),y=z.exec(w),x=new RegExp("(?:^|&)"+A+"=([^&]*)"),v=y?x.exec(y[1]):0;return v?b(v[1]):""}function k(w,v,x){if(w=="webcache.googleusercontent.com"||w=="cc.bingj.com"||w.substr(0,5)=="74.6."){v=c.links[0].href;w=j(v)}else{if(w=="translate.googleusercontent.com"){if(x===""){x=v}v=l(v,"u");w=j(v)}}return[w,v,x]}function t(W,V){var N=k(u.location.hostname,u.location.href,d()),z=N[0],G=N[1],X=N[2],J=W||"",ag=V||"",ac,af=c.title,M="7z|aac|arc|arj|asf|asx|avi|bin|csv|deb|dmg|doc|exe|flv|gif|gz|gzip|hqx|jar|jpe?g|js|mp(2|3|4|e?g)|mov(ie)?|msi|msp|pdf|phps|png|ppt|qtm?|ra(m|r)?|rpm|sea|sit|tar|t?bz2?|tgz|torrent|txt|wav|wma|wmv|wpd||xls|xml|z|zip",Y=[z],y=[],Z=[],aa=[],I=500,U,C="0",H={pdf:["pdf","application/pdf","0"],quicktime:["qt","video/quicktime","0"],realplayer:["realp","audio/x-pn-realaudio-plugin","0"],wma:["wma","application/x-mplayer2","0"],director:["dir","application/x-director","0"],flash:["fla","application/x-shockwave-flash","0"],java:["java","application/x-java-vm","0"],gears:["gears","application/x-googlegears","0"],silverlight:["ag","application/x-silverlight","0"]},Q=false,F=false,ah=function(ak){var an=new RegExp('[\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]',"g"),al={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};
function ai(ao){an.lastIndex=0;return an.test(ao)?'"'+ao.replace(an,function(ap){var aq=al[ap];return typeof aq==="string"?aq:"\\u"+("0000"+ap.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+ao+'"'}function aj(ao){return ao<10?"0"+ao:ao}function am(au,at){var ar,aq,ap,ao,av=at[au];if(av===null){return"null"}if(av&&typeof av==="object"&&typeof av.toJSON==="function"){av=av.toJSON(au)}switch(typeof av){case"string":return ai(av);case"number":return isFinite(av)?String(av):"null";case"boolean":case"null":return String(av);case"object":ao=[];if(av instanceof Array){for(ar=0;ar<av.length;ar++){ao[ar]=am(ar,av)||"null"}ap=ao.length===0?"[]":"["+ao.join(",")+"]";return ap}if(av instanceof Date){return ai(av.getUTCFullYear()+"-"+aj(av.getUTCMonth()+1)+"-"+aj(av.getUTCDate())+"T"+aj(av.getUTCHours())+":"+aj(av.getUTCMinutes())+":"+aj(av.getUTCSeconds())+"Z")}for(aq in av){ap=am(aq,av);if(ap){ao.push(ai(aq)+":"+ap)}}ap=ao.length===0?"{}":"{"+ao.join(",")+"}";return ap}}return am("",{"":ak})},A={};
function D(ao,al,aj,an,ak,am){var ai;if(aj){ai=new Date();ai.setTime(ai.getTime()+aj*86400000)}c.cookie=ao+"="+m(al)+(aj?";expires="+ai.toGMTString():"")+";path="+(an?an:"/")+(ak?";domain="+ak:"")+(am?";secure":"")}function x(ak){var ai=new RegExp("(^|;)[ ]*"+ak+"=([^;]*)"),aj=ai.exec(c.cookie);return aj?b(aj[2]):0}function v(ak,aj){var ai=new Date(),al=new Image(1,1);i=ai.getTime()+aj;al.onLoad=function(){};al.src=ak}function E(){var ai,aj;if(a(g.javaEnabled)&&g.javaEnabled()){H.java[2]="1"}if(typeof u.GearsFactory==="function"){H.gears[2]="1"}if(g.mimeTypes&&g.mimeTypes.length){for(ai in H){aj=g.mimeTypes[H[ai][1]];if(aj&&aj.enabledPlugin){H[ai][2]="1"}}}}function T(){var ai="_pk_testcookie";if(!a(g.cookieEnabled)){D(ai,"1");return x(ai)=="1"?"1":"0"}return g.cookieEnabled?"1":"0"}function O(al){var aj,ai=new Date(),ak="idsite="+ag+"&rec=1&rand="+Math.random()+"&h="+ai.getHours()+"&m="+ai.getMinutes()+"&s="+ai.getSeconds();if(!F){F=true;ak+="&url="+m(a(ac)?ac:G)+"&urlref="+m(X)+"&res="+o.width+"x"+o.height+"&cookie="+C;
for(aj in H){ak+="&"+H[aj][0]+"="+H[aj][2]}}if(a(al)){if(al!==null){ak+="&data="+m(ah(al))}}else{if(a(U)){ak+="&data="+m(ah(U))}}return J+"?"+ak}function w(aj,ak){var ai=O(ak)+"&action_name="+m(a(aj)?aj:af);ai+=e("log");v(ai,I)}function ad(ai,al,ak){var aj=O(ak)+"&idgoal="+ai;if(a(al)&&al!==null){aj+="&revenue="+al}aj+=e("goal");v(aj,I)}function L(aj,ai,al){var ak=O(al)+"&"+ai+"="+m(aj)+"&redirect=0";ak+=e("click");v(ak,I)}function R(al){var aj,ai,ak;for(aj=0;aj<Y.length;aj++){ai=Y[aj].toLowerCase();if(al==ai){return true}if(ai.substr(0,2)=="*."){if((al)==ai.substr(2)){return true}ak=al.length-ai.length+1;if((ak>0)&&(al.substr(ak)==ai.substr(1))){return true}}}return false}function S(ak,aj){var al,ai="(^| )(piwik[_-]"+aj;if(a(ak)){for(al=0;al<ak.length;al++){ai+="|"+ak[al]}}ai+=")( |$)";return new RegExp(ai)}function ae(al,ai,am){if(!am){return"link"}var ak=S(Z,"download"),aj=S(aa,"link"),an=new RegExp("\\.("+M+")([?&#]|$)","i");return aj.test(al)?"link":(ak.test(al)||an.test(ai)?"download":0)
}function K(ap){var aj,ao,aq,ai;if(!a(ap)){ap=u.event}if(a(ap.target)){aj=ap.target}else{if(a(ap.srcElement)){aj=ap.srcElement}else{return}}while((ao=aj.parentNode)&&((aq=aj.tagName)!="A"&&aq!="AREA")){aj=ao}if(a(aj.href)){var an=aj.hostname,al=an.toLowerCase(),ak=aj.href.replace(an,al),am=new RegExp("^(javascript|vbscript|jscript|mocha|livescript|ecmascript): *","i");if(!am.test(ak)){ai=ae(aj.className,ak,R(al));if(ai){L(ak,ai)}}}}function ab(ai){n(ai,"click",K,false)}function P(){if(!Q){Q=true;var aj,ai=S(y,"ignore"),ak=c.links;if(ak){for(aj=0;aj<ak.length;aj++){if(!ai.test(ak[aj].className)){ab(ak[aj])}}}}}function B(aj,ai){var ak=null;if(typeof aj=="string"&&!a(A[aj])){if(typeof ai=="object"){ak=ai}else{if(typeof ai=="string"){try{eval("hookObj ="+ai)}catch(al){}}}A[aj]=ak}return ak}C=T();E();e("run",B);return{hook:A,getHook:function(ai){return A[ai]},setTrackerUrl:function(ai){if(a(ai)){J=ai}},setSiteId:function(ai){if(a(ai)){ag=ai}},setCustomData:function(ai){if(a(ai)){U=ai
}},setLinkTrackingTimer:function(ai){if(a(ai)){I=ai}},setDownloadExtensions:function(ai){if(a(ai)){M=ai}},addDownloadExtensions:function(ai){if(a(ai)){M+="|"+ai}},setDomains:function(ai){if(typeof ai=="object"&&ai instanceof Array){Y=ai;Y.push(z)}else{if(typeof ai=="string"){Y=[ai,z]}}},setIgnoreClasses:function(ai){if(typeof ai=="object"&&ai instanceof Array){y=ai}else{if(typeof ai=="string"){y=[ai]}}},setReferrerUrl:function(ai){if(a(ai)){X=ai;F=false}},setCustomUrl:function(ai){if(a(ai)){ac=ai;F=false}},setDocumentTitle:function(ai){if(a(ai)){af=ai}},setDownloadClasses:function(ai){if(typeof ai=="object"&&ai instanceof Array){Z=ai}else{if(typeof ai=="string"){Z=[ai]}}},setDownloadClass:function(ai){if(typeof ai=="string"){Z=[ai]}},setLinkClasses:function(ai){if(typeof ai=="object"&&ai instanceof Array){aa=ai}else{if(typeof ai=="string"){aa=[ai]}}},setLinkClass:function(ai){if(typeof ai=="string"){aa=[ai]}},addListener:function(ai){if(a(ai)){ab(ai)}},enableLinkTracking:function(){if(f){P()
}else{r[r.length]=function(){P()}}},trackGoal:function(ai,ak,aj){ad(ai,ak,aj)},trackLink:function(aj,ai,ak){L(aj,ai,ak)},trackPageView:function(ai,aj){w(ai,aj)}}}n(u,"beforeunload",s,false);q();return{addPlugin:function(v,w){p[v]=w},getTracker:function(v,w){return new t(v,w)}}}());piwik_log=function(b,e,c,f){function a(g){try{return eval("piwik_"+g)}catch(h){}return}var d=Piwik.getTracker(c,e);d.setDocumentTitle(b);d.setCustomData(f);d.setLinkTrackingTimer(a("tracker_pause"));d.setDownloadExtensions(a("download_extensions"));d.setDomains(a("hosts_alias"));d.setIgnoreClasses(a("ignore_classes"));d.trackPageView();if(a("install_tracker")!==false){piwik_track=function(h,j,i,g){d.setSiteId(j);d.setTrackerUrl(i);d.trackLink(h,g)};d.enableLinkTracking()}}};