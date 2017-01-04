// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__44297){
var map__44322 = p__44297;
var map__44322__$1 = ((((!((map__44322 == null)))?((((map__44322.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44322.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44322):map__44322);
var m = map__44322__$1;
var n = cljs.core.get.call(null,map__44322__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__44322__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__44324_44346 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__44325_44347 = null;
var count__44326_44348 = (0);
var i__44327_44349 = (0);
while(true){
if((i__44327_44349 < count__44326_44348)){
var f_44350 = cljs.core._nth.call(null,chunk__44325_44347,i__44327_44349);
cljs.core.println.call(null,"  ",f_44350);

var G__44351 = seq__44324_44346;
var G__44352 = chunk__44325_44347;
var G__44353 = count__44326_44348;
var G__44354 = (i__44327_44349 + (1));
seq__44324_44346 = G__44351;
chunk__44325_44347 = G__44352;
count__44326_44348 = G__44353;
i__44327_44349 = G__44354;
continue;
} else {
var temp__4657__auto___44355 = cljs.core.seq.call(null,seq__44324_44346);
if(temp__4657__auto___44355){
var seq__44324_44356__$1 = temp__4657__auto___44355;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44324_44356__$1)){
var c__37589__auto___44357 = cljs.core.chunk_first.call(null,seq__44324_44356__$1);
var G__44358 = cljs.core.chunk_rest.call(null,seq__44324_44356__$1);
var G__44359 = c__37589__auto___44357;
var G__44360 = cljs.core.count.call(null,c__37589__auto___44357);
var G__44361 = (0);
seq__44324_44346 = G__44358;
chunk__44325_44347 = G__44359;
count__44326_44348 = G__44360;
i__44327_44349 = G__44361;
continue;
} else {
var f_44362 = cljs.core.first.call(null,seq__44324_44356__$1);
cljs.core.println.call(null,"  ",f_44362);

var G__44363 = cljs.core.next.call(null,seq__44324_44356__$1);
var G__44364 = null;
var G__44365 = (0);
var G__44366 = (0);
seq__44324_44346 = G__44363;
chunk__44325_44347 = G__44364;
count__44326_44348 = G__44365;
i__44327_44349 = G__44366;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_44367 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__36778__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__36778__auto__)){
return or__36778__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_44367);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_44367)))?cljs.core.second.call(null,arglists_44367):arglists_44367));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__44328_44368 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__44329_44369 = null;
var count__44330_44370 = (0);
var i__44331_44371 = (0);
while(true){
if((i__44331_44371 < count__44330_44370)){
var vec__44332_44372 = cljs.core._nth.call(null,chunk__44329_44369,i__44331_44371);
var name_44373 = cljs.core.nth.call(null,vec__44332_44372,(0),null);
var map__44335_44374 = cljs.core.nth.call(null,vec__44332_44372,(1),null);
var map__44335_44375__$1 = ((((!((map__44335_44374 == null)))?((((map__44335_44374.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44335_44374.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44335_44374):map__44335_44374);
var doc_44376 = cljs.core.get.call(null,map__44335_44375__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_44377 = cljs.core.get.call(null,map__44335_44375__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_44373);

cljs.core.println.call(null," ",arglists_44377);

if(cljs.core.truth_(doc_44376)){
cljs.core.println.call(null," ",doc_44376);
} else {
}

var G__44378 = seq__44328_44368;
var G__44379 = chunk__44329_44369;
var G__44380 = count__44330_44370;
var G__44381 = (i__44331_44371 + (1));
seq__44328_44368 = G__44378;
chunk__44329_44369 = G__44379;
count__44330_44370 = G__44380;
i__44331_44371 = G__44381;
continue;
} else {
var temp__4657__auto___44382 = cljs.core.seq.call(null,seq__44328_44368);
if(temp__4657__auto___44382){
var seq__44328_44383__$1 = temp__4657__auto___44382;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44328_44383__$1)){
var c__37589__auto___44384 = cljs.core.chunk_first.call(null,seq__44328_44383__$1);
var G__44385 = cljs.core.chunk_rest.call(null,seq__44328_44383__$1);
var G__44386 = c__37589__auto___44384;
var G__44387 = cljs.core.count.call(null,c__37589__auto___44384);
var G__44388 = (0);
seq__44328_44368 = G__44385;
chunk__44329_44369 = G__44386;
count__44330_44370 = G__44387;
i__44331_44371 = G__44388;
continue;
} else {
var vec__44337_44389 = cljs.core.first.call(null,seq__44328_44383__$1);
var name_44390 = cljs.core.nth.call(null,vec__44337_44389,(0),null);
var map__44340_44391 = cljs.core.nth.call(null,vec__44337_44389,(1),null);
var map__44340_44392__$1 = ((((!((map__44340_44391 == null)))?((((map__44340_44391.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44340_44391.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44340_44391):map__44340_44391);
var doc_44393 = cljs.core.get.call(null,map__44340_44392__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_44394 = cljs.core.get.call(null,map__44340_44392__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_44390);

cljs.core.println.call(null," ",arglists_44394);

if(cljs.core.truth_(doc_44393)){
cljs.core.println.call(null," ",doc_44393);
} else {
}

var G__44395 = cljs.core.next.call(null,seq__44328_44383__$1);
var G__44396 = null;
var G__44397 = (0);
var G__44398 = (0);
seq__44328_44368 = G__44395;
chunk__44329_44369 = G__44396;
count__44330_44370 = G__44397;
i__44331_44371 = G__44398;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__44342 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__44343 = null;
var count__44344 = (0);
var i__44345 = (0);
while(true){
if((i__44345 < count__44344)){
var role = cljs.core._nth.call(null,chunk__44343,i__44345);
var temp__4657__auto___44399__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___44399__$1)){
var spec_44400 = temp__4657__auto___44399__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_44400));
} else {
}

var G__44401 = seq__44342;
var G__44402 = chunk__44343;
var G__44403 = count__44344;
var G__44404 = (i__44345 + (1));
seq__44342 = G__44401;
chunk__44343 = G__44402;
count__44344 = G__44403;
i__44345 = G__44404;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__44342);
if(temp__4657__auto____$1){
var seq__44342__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44342__$1)){
var c__37589__auto__ = cljs.core.chunk_first.call(null,seq__44342__$1);
var G__44405 = cljs.core.chunk_rest.call(null,seq__44342__$1);
var G__44406 = c__37589__auto__;
var G__44407 = cljs.core.count.call(null,c__37589__auto__);
var G__44408 = (0);
seq__44342 = G__44405;
chunk__44343 = G__44406;
count__44344 = G__44407;
i__44345 = G__44408;
continue;
} else {
var role = cljs.core.first.call(null,seq__44342__$1);
var temp__4657__auto___44409__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___44409__$2)){
var spec_44410 = temp__4657__auto___44409__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_44410));
} else {
}

var G__44411 = cljs.core.next.call(null,seq__44342__$1);
var G__44412 = null;
var G__44413 = (0);
var G__44414 = (0);
seq__44342 = G__44411;
chunk__44343 = G__44412;
count__44344 = G__44413;
i__44345 = G__44414;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1483514363698