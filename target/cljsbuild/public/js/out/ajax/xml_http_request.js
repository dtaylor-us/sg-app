// Compiled by ClojureScript 1.9.293 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__43441,handler){
var map__43442 = p__43441;
var map__43442__$1 = ((((!((map__43442 == null)))?((((map__43442.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43442.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43442):map__43442);
var uri = cljs.core.get.call(null,map__43442__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__43442__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__43442__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__43442__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__43442__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__43442__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__43442__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__43442,map__43442__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__43440_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__43440_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__43442,map__43442__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4657__auto___43454 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4657__auto___43454)){
var response_type_43455 = temp__4657__auto___43454;
this$__$1.responseType = cljs.core.name.call(null,response_type_43455);
} else {
}

var seq__43444_43456 = cljs.core.seq.call(null,headers);
var chunk__43445_43457 = null;
var count__43446_43458 = (0);
var i__43447_43459 = (0);
while(true){
if((i__43447_43459 < count__43446_43458)){
var vec__43448_43460 = cljs.core._nth.call(null,chunk__43445_43457,i__43447_43459);
var k_43461 = cljs.core.nth.call(null,vec__43448_43460,(0),null);
var v_43462 = cljs.core.nth.call(null,vec__43448_43460,(1),null);
this$__$1.setRequestHeader(k_43461,v_43462);

var G__43463 = seq__43444_43456;
var G__43464 = chunk__43445_43457;
var G__43465 = count__43446_43458;
var G__43466 = (i__43447_43459 + (1));
seq__43444_43456 = G__43463;
chunk__43445_43457 = G__43464;
count__43446_43458 = G__43465;
i__43447_43459 = G__43466;
continue;
} else {
var temp__4657__auto___43467 = cljs.core.seq.call(null,seq__43444_43456);
if(temp__4657__auto___43467){
var seq__43444_43468__$1 = temp__4657__auto___43467;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43444_43468__$1)){
var c__38717__auto___43469 = cljs.core.chunk_first.call(null,seq__43444_43468__$1);
var G__43470 = cljs.core.chunk_rest.call(null,seq__43444_43468__$1);
var G__43471 = c__38717__auto___43469;
var G__43472 = cljs.core.count.call(null,c__38717__auto___43469);
var G__43473 = (0);
seq__43444_43456 = G__43470;
chunk__43445_43457 = G__43471;
count__43446_43458 = G__43472;
i__43447_43459 = G__43473;
continue;
} else {
var vec__43451_43474 = cljs.core.first.call(null,seq__43444_43468__$1);
var k_43475 = cljs.core.nth.call(null,vec__43451_43474,(0),null);
var v_43476 = cljs.core.nth.call(null,vec__43451_43474,(1),null);
this$__$1.setRequestHeader(k_43475,v_43476);

var G__43477 = cljs.core.next.call(null,seq__43444_43468__$1);
var G__43478 = null;
var G__43479 = (0);
var G__43480 = (0);
seq__43444_43456 = G__43477;
chunk__43445_43457 = G__43478;
count__43446_43458 = G__43479;
i__43447_43459 = G__43480;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__37903__auto__ = body;
if(cljs.core.truth_(or__37903__auto__)){
return or__37903__auto__;
} else {
return "";
}
})());

return this$__$1;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL;

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL;

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.call(null,(0),this$__$1.readyState);
});

//# sourceMappingURL=xml_http_request.js.map