// Compiled by ClojureScript 1.9.293 {}
goog.provide('sg_app.ajax');
goog.require('cljs.core');
goog.require('ajax.core');
sg_app.ajax.local_uri_QMARK_ = (function sg_app$ajax$local_uri_QMARK_(p__49595){
var map__49598 = p__49595;
var map__49598__$1 = ((((!((map__49598 == null)))?((((map__49598.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49598.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49598):map__49598);
var uri = cljs.core.get.call(null,map__49598__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
return cljs.core.not.call(null,cljs.core.re_find.call(null,/^\w+?:\/\//,uri));
});
sg_app.ajax.default_headers = (function sg_app$ajax$default_headers(request){
if(cljs.core.truth_(sg_app.ajax.local_uri_QMARK_.call(null,request))){
return cljs.core.update.call(null,cljs.core.update.call(null,request,new cljs.core.Keyword(null,"uri","uri",-774711847),(function (p1__49600_SHARP_){
return [cljs.core.str(context),cljs.core.str(p1__49600_SHARP_)].join('');
})),new cljs.core.Keyword(null,"headers","headers",-835030129),(function (p1__49601_SHARP_){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["x-csrf-token",csrfToken], null),p1__49601_SHARP_);
}));
} else {
return request;
}
});
sg_app.ajax.load_interceptors_BANG_ = (function sg_app$ajax$load_interceptors_BANG_(){
return cljs.core.swap_BANG_.call(null,ajax.core.default_interceptors,cljs.core.conj,ajax.core.to_interceptor.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"default headers",new cljs.core.Keyword(null,"request","request",1772954723),sg_app.ajax.default_headers], null)));
});

//# sourceMappingURL=ajax.js.map