// Compiled by ClojureScript 1.9.293 {}
goog.provide('devtools.format');
goog.require('cljs.core');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

devtools.format._header = (function devtools$format$_header(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
var x__38566__auto__ = (((value == null))?null:value);
var m__38567__auto__ = (devtools.format._header[goog.typeOf(x__38566__auto__)]);
if(!((m__38567__auto__ == null))){
return m__38567__auto__.call(null,value);
} else {
var m__38567__auto____$1 = (devtools.format._header["_"]);
if(!((m__38567__auto____$1 == null))){
return m__38567__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-header",value);
}
}
}
});

devtools.format._has_body = (function devtools$format$_has_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
var x__38566__auto__ = (((value == null))?null:value);
var m__38567__auto__ = (devtools.format._has_body[goog.typeOf(x__38566__auto__)]);
if(!((m__38567__auto__ == null))){
return m__38567__auto__.call(null,value);
} else {
var m__38567__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__38567__auto____$1 == null))){
return m__38567__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-has-body",value);
}
}
}
});

devtools.format._body = (function devtools$format$_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
var x__38566__auto__ = (((value == null))?null:value);
var m__38567__auto__ = (devtools.format._body[goog.typeOf(x__38566__auto__)]);
if(!((m__38567__auto__ == null))){
return m__38567__auto__.call(null,value);
} else {
var m__38567__auto____$1 = (devtools.format._body["_"]);
if(!((m__38567__auto____$1 == null))){
return m__38567__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-body",value);
}
}
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
devtools.format._STAR_setup_done_STAR_ = true;

devtools.format.make_template_fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__40034__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__40034__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__40034__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__40034__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__40033__auto__ = temp__4657__auto____$2;
return goog.object.get(o__40033__auto__,"make_template");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__40034__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__40034__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__40034__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__40034__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__40033__auto__ = temp__4657__auto____$2;
return goog.object.get(o__40033__auto__,"make_group");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__40034__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__40034__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__40034__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__40034__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__40033__auto__ = temp__4657__auto____$2;
return goog.object.get(o__40033__auto__,"make_reference");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__40034__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__40034__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__40034__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__40034__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__40033__auto__ = temp__4657__auto____$2;
return goog.object.get(o__40033__auto__,"make_surrogate");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__40034__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__40034__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__40034__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__40034__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__40033__auto__ = temp__4657__auto____$2;
return goog.object.get(o__40033__auto__,"render_markup");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__40034__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__40034__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__40034__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__40034__auto____$1,"markup");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__40033__auto__ = temp__4657__auto____$2;
return goog.object.get(o__40033__auto__,"_LT_header_GT_");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__40034__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__40034__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__40034__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__40034__auto____$1,"markup");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__40033__auto__ = temp__4657__auto____$2;
return goog.object.get(o__40033__auto__,"_LT_standard_body_GT_");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__39018__auto__ = [];
var len__39011__auto___40055 = arguments.length;
var i__39012__auto___40056 = (0);
while(true){
if((i__39012__auto___40056 < len__39011__auto___40055)){
args__39018__auto__.push((arguments[i__39012__auto___40056]));

var G__40057 = (i__39012__auto___40056 + (1));
i__39012__auto___40056 = G__40057;
continue;
} else {
}
break;
}

var argseq__39019__auto__ = ((((0) < args__39018__auto__.length))?(new cljs.core.IndexedSeq(args__39018__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__39019__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq40054){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40054));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__39018__auto__ = [];
var len__39011__auto___40059 = arguments.length;
var i__39012__auto___40060 = (0);
while(true){
if((i__39012__auto___40060 < len__39011__auto___40059)){
args__39018__auto__.push((arguments[i__39012__auto___40060]));

var G__40061 = (i__39012__auto___40060 + (1));
i__39012__auto___40060 = G__40061;
continue;
} else {
}
break;
}

var argseq__39019__auto__ = ((((0) < args__39018__auto__.length))?(new cljs.core.IndexedSeq(args__39018__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__39019__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq40058){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40058));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__39018__auto__ = [];
var len__39011__auto___40063 = arguments.length;
var i__39012__auto___40064 = (0);
while(true){
if((i__39012__auto___40064 < len__39011__auto___40063)){
args__39018__auto__.push((arguments[i__39012__auto___40064]));

var G__40065 = (i__39012__auto___40064 + (1));
i__39012__auto___40064 = G__40065;
continue;
} else {
}
break;
}

var argseq__39019__auto__ = ((((0) < args__39018__auto__.length))?(new cljs.core.IndexedSeq(args__39018__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__39019__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq40062){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40062));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__39018__auto__ = [];
var len__39011__auto___40067 = arguments.length;
var i__39012__auto___40068 = (0);
while(true){
if((i__39012__auto___40068 < len__39011__auto___40067)){
args__39018__auto__.push((arguments[i__39012__auto___40068]));

var G__40069 = (i__39012__auto___40068 + (1));
i__39012__auto___40068 = G__40069;
continue;
} else {
}
break;
}

var argseq__39019__auto__ = ((((0) < args__39018__auto__.length))?(new cljs.core.IndexedSeq(args__39018__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__39019__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq40066){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40066));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__39018__auto__ = [];
var len__39011__auto___40071 = arguments.length;
var i__39012__auto___40072 = (0);
while(true){
if((i__39012__auto___40072 < len__39011__auto___40071)){
args__39018__auto__.push((arguments[i__39012__auto___40072]));

var G__40073 = (i__39012__auto___40072 + (1));
i__39012__auto___40072 = G__40073;
continue;
} else {
}
break;
}

var argseq__39019__auto__ = ((((0) < args__39018__auto__.length))?(new cljs.core.IndexedSeq(args__39018__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__39019__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq40070){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40070));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__39018__auto__ = [];
var len__39011__auto___40075 = arguments.length;
var i__39012__auto___40076 = (0);
while(true){
if((i__39012__auto___40076 < len__39011__auto___40075)){
args__39018__auto__.push((arguments[i__39012__auto___40076]));

var G__40077 = (i__39012__auto___40076 + (1));
i__39012__auto___40076 = G__40077;
continue;
} else {
}
break;
}

var argseq__39019__auto__ = ((((0) < args__39018__auto__.length))?(new cljs.core.IndexedSeq(args__39018__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__39019__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq40074){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40074));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__39018__auto__ = [];
var len__39011__auto___40079 = arguments.length;
var i__39012__auto___40080 = (0);
while(true){
if((i__39012__auto___40080 < len__39011__auto___40079)){
args__39018__auto__.push((arguments[i__39012__auto___40080]));

var G__40081 = (i__39012__auto___40080 + (1));
i__39012__auto___40080 = G__40081;
continue;
} else {
}
break;
}

var argseq__39019__auto__ = ((((0) < args__39018__auto__.length))?(new cljs.core.IndexedSeq(args__39018__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__39019__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq40078){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40078));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__39018__auto__ = [];
var len__39011__auto___40089 = arguments.length;
var i__39012__auto___40090 = (0);
while(true){
if((i__39012__auto___40090 < len__39011__auto___40089)){
args__39018__auto__.push((arguments[i__39012__auto___40090]));

var G__40091 = (i__39012__auto___40090 + (1));
i__39012__auto___40090 = G__40091;
continue;
} else {
}
break;
}

var argseq__39019__auto__ = ((((1) < args__39018__auto__.length))?(new cljs.core.IndexedSeq(args__39018__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__39019__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__40085){
var vec__40086 = p__40085;
var state_override = cljs.core.nth.call(null,vec__40086,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__40086,state_override){
return (function (p1__40082_SHARP_){
return cljs.core.merge.call(null,p1__40082_SHARP_,state_override);
});})(vec__40086,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq40083){
var G__40084 = cljs.core.first.call(null,seq40083);
var seq40083__$1 = cljs.core.next.call(null,seq40083);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__40084,seq40083__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__39018__auto__ = [];
var len__39011__auto___40093 = arguments.length;
var i__39012__auto___40094 = (0);
while(true){
if((i__39012__auto___40094 < len__39011__auto___40093)){
args__39018__auto__.push((arguments[i__39012__auto___40094]));

var G__40095 = (i__39012__auto___40094 + (1));
i__39012__auto___40094 = G__40095;
continue;
} else {
}
break;
}

var argseq__39019__auto__ = ((((0) < args__39018__auto__.length))?(new cljs.core.IndexedSeq(args__39018__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__39019__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq40092){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40092));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__39018__auto__ = [];
var len__39011__auto___40098 = arguments.length;
var i__39012__auto___40099 = (0);
while(true){
if((i__39012__auto___40099 < len__39011__auto___40098)){
args__39018__auto__.push((arguments[i__39012__auto___40099]));

var G__40100 = (i__39012__auto___40099 + (1));
i__39012__auto___40099 = G__40100;
continue;
} else {
}
break;
}

var argseq__39019__auto__ = ((((1) < args__39018__auto__.length))?(new cljs.core.IndexedSeq(args__39018__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__39019__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq40096){
var G__40097 = cljs.core.first.call(null,seq40096);
var seq40096__$1 = cljs.core.next.call(null,seq40096);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__40097,seq40096__$1);
});


//# sourceMappingURL=format.js.map