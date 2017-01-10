// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__48121){
var map__48146 = p__48121;
var map__48146__$1 = ((((!((map__48146 == null)))?((((map__48146.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48146.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48146):map__48146);
var m = map__48146__$1;
var n = cljs.core.get.call(null,map__48146__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__48146__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__48148_48170 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__48149_48171 = null;
var count__48150_48172 = (0);
var i__48151_48173 = (0);
while(true){
if((i__48151_48173 < count__48150_48172)){
var f_48174 = cljs.core._nth.call(null,chunk__48149_48171,i__48151_48173);
cljs.core.println.call(null,"  ",f_48174);

var G__48175 = seq__48148_48170;
var G__48176 = chunk__48149_48171;
var G__48177 = count__48150_48172;
var G__48178 = (i__48151_48173 + (1));
seq__48148_48170 = G__48175;
chunk__48149_48171 = G__48176;
count__48150_48172 = G__48177;
i__48151_48173 = G__48178;
continue;
} else {
var temp__4657__auto___48179 = cljs.core.seq.call(null,seq__48148_48170);
if(temp__4657__auto___48179){
var seq__48148_48180__$1 = temp__4657__auto___48179;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48148_48180__$1)){
var c__39050__auto___48181 = cljs.core.chunk_first.call(null,seq__48148_48180__$1);
var G__48182 = cljs.core.chunk_rest.call(null,seq__48148_48180__$1);
var G__48183 = c__39050__auto___48181;
var G__48184 = cljs.core.count.call(null,c__39050__auto___48181);
var G__48185 = (0);
seq__48148_48170 = G__48182;
chunk__48149_48171 = G__48183;
count__48150_48172 = G__48184;
i__48151_48173 = G__48185;
continue;
} else {
var f_48186 = cljs.core.first.call(null,seq__48148_48180__$1);
cljs.core.println.call(null,"  ",f_48186);

var G__48187 = cljs.core.next.call(null,seq__48148_48180__$1);
var G__48188 = null;
var G__48189 = (0);
var G__48190 = (0);
seq__48148_48170 = G__48187;
chunk__48149_48171 = G__48188;
count__48150_48172 = G__48189;
i__48151_48173 = G__48190;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_48191 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__38236__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__38236__auto__)){
return or__38236__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_48191);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_48191)))?cljs.core.second.call(null,arglists_48191):arglists_48191));
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
var seq__48152_48192 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__48153_48193 = null;
var count__48154_48194 = (0);
var i__48155_48195 = (0);
while(true){
if((i__48155_48195 < count__48154_48194)){
var vec__48156_48196 = cljs.core._nth.call(null,chunk__48153_48193,i__48155_48195);
var name_48197 = cljs.core.nth.call(null,vec__48156_48196,(0),null);
var map__48159_48198 = cljs.core.nth.call(null,vec__48156_48196,(1),null);
var map__48159_48199__$1 = ((((!((map__48159_48198 == null)))?((((map__48159_48198.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48159_48198.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48159_48198):map__48159_48198);
var doc_48200 = cljs.core.get.call(null,map__48159_48199__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_48201 = cljs.core.get.call(null,map__48159_48199__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_48197);

cljs.core.println.call(null," ",arglists_48201);

if(cljs.core.truth_(doc_48200)){
cljs.core.println.call(null," ",doc_48200);
} else {
}

var G__48202 = seq__48152_48192;
var G__48203 = chunk__48153_48193;
var G__48204 = count__48154_48194;
var G__48205 = (i__48155_48195 + (1));
seq__48152_48192 = G__48202;
chunk__48153_48193 = G__48203;
count__48154_48194 = G__48204;
i__48155_48195 = G__48205;
continue;
} else {
var temp__4657__auto___48206 = cljs.core.seq.call(null,seq__48152_48192);
if(temp__4657__auto___48206){
var seq__48152_48207__$1 = temp__4657__auto___48206;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48152_48207__$1)){
var c__39050__auto___48208 = cljs.core.chunk_first.call(null,seq__48152_48207__$1);
var G__48209 = cljs.core.chunk_rest.call(null,seq__48152_48207__$1);
var G__48210 = c__39050__auto___48208;
var G__48211 = cljs.core.count.call(null,c__39050__auto___48208);
var G__48212 = (0);
seq__48152_48192 = G__48209;
chunk__48153_48193 = G__48210;
count__48154_48194 = G__48211;
i__48155_48195 = G__48212;
continue;
} else {
var vec__48161_48213 = cljs.core.first.call(null,seq__48152_48207__$1);
var name_48214 = cljs.core.nth.call(null,vec__48161_48213,(0),null);
var map__48164_48215 = cljs.core.nth.call(null,vec__48161_48213,(1),null);
var map__48164_48216__$1 = ((((!((map__48164_48215 == null)))?((((map__48164_48215.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48164_48215.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48164_48215):map__48164_48215);
var doc_48217 = cljs.core.get.call(null,map__48164_48216__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_48218 = cljs.core.get.call(null,map__48164_48216__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_48214);

cljs.core.println.call(null," ",arglists_48218);

if(cljs.core.truth_(doc_48217)){
cljs.core.println.call(null," ",doc_48217);
} else {
}

var G__48219 = cljs.core.next.call(null,seq__48152_48207__$1);
var G__48220 = null;
var G__48221 = (0);
var G__48222 = (0);
seq__48152_48192 = G__48219;
chunk__48153_48193 = G__48220;
count__48154_48194 = G__48221;
i__48155_48195 = G__48222;
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

var seq__48166 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__48167 = null;
var count__48168 = (0);
var i__48169 = (0);
while(true){
if((i__48169 < count__48168)){
var role = cljs.core._nth.call(null,chunk__48167,i__48169);
var temp__4657__auto___48223__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___48223__$1)){
var spec_48224 = temp__4657__auto___48223__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_48224));
} else {
}

var G__48225 = seq__48166;
var G__48226 = chunk__48167;
var G__48227 = count__48168;
var G__48228 = (i__48169 + (1));
seq__48166 = G__48225;
chunk__48167 = G__48226;
count__48168 = G__48227;
i__48169 = G__48228;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__48166);
if(temp__4657__auto____$1){
var seq__48166__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48166__$1)){
var c__39050__auto__ = cljs.core.chunk_first.call(null,seq__48166__$1);
var G__48229 = cljs.core.chunk_rest.call(null,seq__48166__$1);
var G__48230 = c__39050__auto__;
var G__48231 = cljs.core.count.call(null,c__39050__auto__);
var G__48232 = (0);
seq__48166 = G__48229;
chunk__48167 = G__48230;
count__48168 = G__48231;
i__48169 = G__48232;
continue;
} else {
var role = cljs.core.first.call(null,seq__48166__$1);
var temp__4657__auto___48233__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___48233__$2)){
var spec_48234 = temp__4657__auto___48233__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_48234));
} else {
}

var G__48235 = cljs.core.next.call(null,seq__48166__$1);
var G__48236 = null;
var G__48237 = (0);
var G__48238 = (0);
seq__48166 = G__48235;
chunk__48167 = G__48236;
count__48168 = G__48237;
i__48169 = G__48238;
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

//# sourceMappingURL=repl.js.map