!function(e,t){"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?module.exports=t():e.CookieUtil=t()}(this,function(){return{get:function(e,t){var n,o=document.cookie,i=new RegExp("(^|)"+e+"=([^;]*)(;|$)");return(n=o.match(i))?!0===t?this.decodeStr(n[2]):n[2]:null},set:function(e,t,n,o,i,r){var c=encodeURIComponent(e)+"="+encodeURIComponent(t),d=null;n instanceof Date?c+=";expires="+n.toGMTString():((d=new Date).setTime(d.getTime()+2592e6),c+=";expires ="+d.toGMTString()),i&&(c+=";path="+i),o&&(c+=";domain="+o),r&&(c+=";secure"),document.cookie=c},decodeStr:function(e){var t,n="",o=e.length;for(t=0;t<o;t++){var i=e.charAt(t);if("+"==i)n+=" ";else if("%"==i){var r=e.substring(t+1,t+3);parseInt("0x"+r)>127?(n+=decodeURI("%"+e.substring(t+1,t+9)),t+=8):(n+=String.fromCharCode(parseInt("0x"+r)),t+=2)}else n+=i}return n},deleteCookie:function(e,t,n,o){var i=encodeURIComponent(e)+"="+encodeURIComponent("a"),r=new Date;r.setTime(r.getTime()-1e4),i+=";expires ="+r.toGMTString(),n&&(i+=";path="+n),t&&(i+=";domain="+t),o&&(i+=";secure"),document.cookie=i}}});