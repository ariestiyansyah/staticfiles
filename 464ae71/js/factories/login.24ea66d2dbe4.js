/*!
 * jQuery Cookie Plugin
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2011, Klaus Hartl
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.opensource.org/licenses/GPL-2.0
 */

!function(e){e.cookie=function(n,o,t){if(arguments.length>1&&(!/Object/.test(Object.prototype.toString.call(o))||null===o||void 0===o)){if(t=e.extend({},t),(null===o||void 0===o)&&(t.expires=-1),"number"==typeof t.expires){var r=t.expires,i=t.expires=new Date;i.setDate(i.getDate()+r)}return o=String(o),document.cookie=[encodeURIComponent(n),"=",t.raw?o:encodeURIComponent(o),t.expires?"; expires="+t.expires.toUTCString():"",t.path?"; path="+t.path:"",t.domain?"; domain="+t.domain:"",t.secure?"; secure":""].join("")}t=o||{};for(var s,a=t.raw?function(e){return e}:decodeURIComponent,l=document.cookie.split("; "),u=0;s=l[u]&&l[u].split("=");u++)if(a(s[0])===n)return a(s[1]||"");return null}}(jQuery),define("jquery.cookie",["jquery"],function(e){return function(){var n;return n||e.jQuery.fn.cookie}}(this)),window.isExternal=function(e){var n=e.match(/^([^:\/?#]+:)?(?:\/\/([^\/?#]*))?([^?#]+)?(\?[^#]*)?(#.*)?/);return"string"==typeof n[1]&&n[1].length>0&&n[1].toLowerCase()!==location.protocol?!0:"string"==typeof n[2]&&n[2].length>0&&n[2].replace(new RegExp(":("+{"http:":80,"https:":443}[location.protocol]+")?$"),"")!==location.host?!0:!1},window.rewriteStaticLinks=function(e,n,o){function t(e){return e===n?o:e}if(null===n||null===o)return e;fromRe=n.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&");var r=new RegExp("(https?://(www.)?[-a-zA-Z0-9@:%._+~#=]{2,256}.[a-z]{2,6}([-a-zA-Z0-9@:%_+.~#?&//=]*))?"+fromRe,"g");return e.replace(r,t)},define("utility",function(){}),define("js/factories/login",["jquery.cookie","utility"],function(){return function(e){function n(e,n,o){$.ajax({type:"POST",url:e,dataType:"json",data:n,success:o,headers:{"X-CSRFToken":$.cookie("csrftoken")}})}$("input#email").on("input",function(){$("#login_error").removeClass("is-shown")}),$("input#password").on("input",function(){$("#login_error").removeClass("is-shown")}),$("form#login_form").submit(function(o){o.preventDefault();var t=$("#login_form").serialize();n("/login_post",t,function(n){if(n.success){var o=/next=([^&]*)/g.exec(decodeURIComponent(window.location.search));location.href=o&&o.length>1&&!isExternal(o[1])?o[1]:e}else 0===$("#login_error").length?($("#login_form").prepend('<div id="login_error" class="message message-status error">'+n.value+"</span></div>"),$("#login_error").addClass("is-shown")):$("#login_error").stop().addClass("is-shown").html(n.value)})})}});