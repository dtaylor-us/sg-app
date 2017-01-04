// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__37384__auto__,writer__37385__auto__,opt__37386__auto__){
return cljs.core._write.call(null,writer__37385__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__37860__auto__ = [];
var len__37853__auto___43033 = arguments.length;
var i__37854__auto___43034 = (0);
while(true){
if((i__37854__auto___43034 < len__37853__auto___43033)){
args__37860__auto__.push((arguments[i__37854__auto___43034]));

var G__43035 = (i__37854__auto___43034 + (1));
i__37854__auto___43034 = G__43035;
continue;
} else {
}
break;
}

var argseq__37861__auto__ = ((((0) < args__37860__auto__.length))?(new cljs.core.IndexedSeq(args__37860__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__37861__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq43032){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43032));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__37860__auto__ = [];
var len__37853__auto___43037 = arguments.length;
var i__37854__auto___43038 = (0);
while(true){
if((i__37854__auto___43038 < len__37853__auto___43037)){
args__37860__auto__.push((arguments[i__37854__auto___43038]));

var G__43039 = (i__37854__auto___43038 + (1));
i__37854__auto___43038 = G__43039;
continue;
} else {
}
break;
}

var argseq__37861__auto__ = ((((0) < args__37860__auto__.length))?(new cljs.core.IndexedSeq(args__37860__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__37861__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq43036){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43036));
});

var g_QMARK__43040 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_43041 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__43040){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__43040))
,null));
var mkg_43042 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__43040,g_43041){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__43040,g_43041))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__43040,g_43041,mkg_43042){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__43040).call(null,x);
});})(g_QMARK__43040,g_43041,mkg_43042))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__43040,g_43041,mkg_43042){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_43042).call(null,gfn);
});})(g_QMARK__43040,g_43041,mkg_43042))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__43040,g_43041,mkg_43042){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_43041).call(null,generator);
});})(g_QMARK__43040,g_43041,mkg_43042))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__43004__auto___43061 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__43004__auto___43061){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__37860__auto__ = [];
var len__37853__auto___43062 = arguments.length;
var i__37854__auto___43063 = (0);
while(true){
if((i__37854__auto___43063 < len__37853__auto___43062)){
args__37860__auto__.push((arguments[i__37854__auto___43063]));

var G__43064 = (i__37854__auto___43063 + (1));
i__37854__auto___43063 = G__43064;
continue;
} else {
}
break;
}

var argseq__37861__auto__ = ((((0) < args__37860__auto__.length))?(new cljs.core.IndexedSeq(args__37860__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__37861__auto__);
});})(g__43004__auto___43061))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43004__auto___43061){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__43004__auto___43061),args);
});})(g__43004__auto___43061))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__43004__auto___43061){
return (function (seq43043){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43043));
});})(g__43004__auto___43061))
;


var g__43004__auto___43065 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__43004__auto___43065){
return (function cljs$spec$impl$gen$list(var_args){
var args__37860__auto__ = [];
var len__37853__auto___43066 = arguments.length;
var i__37854__auto___43067 = (0);
while(true){
if((i__37854__auto___43067 < len__37853__auto___43066)){
args__37860__auto__.push((arguments[i__37854__auto___43067]));

var G__43068 = (i__37854__auto___43067 + (1));
i__37854__auto___43067 = G__43068;
continue;
} else {
}
break;
}

var argseq__37861__auto__ = ((((0) < args__37860__auto__.length))?(new cljs.core.IndexedSeq(args__37860__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__37861__auto__);
});})(g__43004__auto___43065))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43004__auto___43065){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__43004__auto___43065),args);
});})(g__43004__auto___43065))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__43004__auto___43065){
return (function (seq43044){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43044));
});})(g__43004__auto___43065))
;


var g__43004__auto___43069 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__43004__auto___43069){
return (function cljs$spec$impl$gen$map(var_args){
var args__37860__auto__ = [];
var len__37853__auto___43070 = arguments.length;
var i__37854__auto___43071 = (0);
while(true){
if((i__37854__auto___43071 < len__37853__auto___43070)){
args__37860__auto__.push((arguments[i__37854__auto___43071]));

var G__43072 = (i__37854__auto___43071 + (1));
i__37854__auto___43071 = G__43072;
continue;
} else {
}
break;
}

var argseq__37861__auto__ = ((((0) < args__37860__auto__.length))?(new cljs.core.IndexedSeq(args__37860__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__37861__auto__);
});})(g__43004__auto___43069))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43004__auto___43069){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__43004__auto___43069),args);
});})(g__43004__auto___43069))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__43004__auto___43069){
return (function (seq43045){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43045));
});})(g__43004__auto___43069))
;


var g__43004__auto___43073 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__43004__auto___43073){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__37860__auto__ = [];
var len__37853__auto___43074 = arguments.length;
var i__37854__auto___43075 = (0);
while(true){
if((i__37854__auto___43075 < len__37853__auto___43074)){
args__37860__auto__.push((arguments[i__37854__auto___43075]));

var G__43076 = (i__37854__auto___43075 + (1));
i__37854__auto___43075 = G__43076;
continue;
} else {
}
break;
}

var argseq__37861__auto__ = ((((0) < args__37860__auto__.length))?(new cljs.core.IndexedSeq(args__37860__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__37861__auto__);
});})(g__43004__auto___43073))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43004__auto___43073){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__43004__auto___43073),args);
});})(g__43004__auto___43073))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__43004__auto___43073){
return (function (seq43046){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43046));
});})(g__43004__auto___43073))
;


var g__43004__auto___43077 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__43004__auto___43077){
return (function cljs$spec$impl$gen$set(var_args){
var args__37860__auto__ = [];
var len__37853__auto___43078 = arguments.length;
var i__37854__auto___43079 = (0);
while(true){
if((i__37854__auto___43079 < len__37853__auto___43078)){
args__37860__auto__.push((arguments[i__37854__auto___43079]));

var G__43080 = (i__37854__auto___43079 + (1));
i__37854__auto___43079 = G__43080;
continue;
} else {
}
break;
}

var argseq__37861__auto__ = ((((0) < args__37860__auto__.length))?(new cljs.core.IndexedSeq(args__37860__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__37861__auto__);
});})(g__43004__auto___43077))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43004__auto___43077){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__43004__auto___43077),args);
});})(g__43004__auto___43077))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__43004__auto___43077){
return (function (seq43047){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43047));
});})(g__43004__auto___43077))
;


var g__43004__auto___43081 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__43004__auto___43081){
return (function cljs$spec$impl$gen$vector(var_args){
var args__37860__auto__ = [];
var len__37853__auto___43082 = arguments.length;
var i__37854__auto___43083 = (0);
while(true){
if((i__37854__auto___43083 < len__37853__auto___43082)){
args__37860__auto__.push((arguments[i__37854__auto___43083]));

var G__43084 = (i__37854__auto___43083 + (1));
i__37854__auto___43083 = G__43084;
continue;
} else {
}
break;
}

var argseq__37861__auto__ = ((((0) < args__37860__auto__.length))?(new cljs.core.IndexedSeq(args__37860__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__37861__auto__);
});})(g__43004__auto___43081))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43004__auto___43081){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__43004__auto___43081),args);
});})(g__43004__auto___43081))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__43004__auto___43081){
return (function (seq43048){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43048));
});})(g__43004__auto___43081))
;


var g__43004__auto___43085 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__43004__auto___43085){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__37860__auto__ = [];
var len__37853__auto___43086 = arguments.length;
var i__37854__auto___43087 = (0);
while(true){
if((i__37854__auto___43087 < len__37853__auto___43086)){
args__37860__auto__.push((arguments[i__37854__auto___43087]));

var G__43088 = (i__37854__auto___43087 + (1));
i__37854__auto___43087 = G__43088;
continue;
} else {
}
break;
}

var argseq__37861__auto__ = ((((0) < args__37860__auto__.length))?(new cljs.core.IndexedSeq(args__37860__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__37861__auto__);
});})(g__43004__auto___43085))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43004__auto___43085){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__43004__auto___43085),args);
});})(g__43004__auto___43085))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__43004__auto___43085){
return (function (seq43049){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43049));
});})(g__43004__auto___43085))
;


var g__43004__auto___43089 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__43004__auto___43089){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__37860__auto__ = [];
var len__37853__auto___43090 = arguments.length;
var i__37854__auto___43091 = (0);
while(true){
if((i__37854__auto___43091 < len__37853__auto___43090)){
args__37860__auto__.push((arguments[i__37854__auto___43091]));

var G__43092 = (i__37854__auto___43091 + (1));
i__37854__auto___43091 = G__43092;
continue;
} else {
}
break;
}

var argseq__37861__auto__ = ((((0) < args__37860__auto__.length))?(new cljs.core.IndexedSeq(args__37860__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__37861__auto__);
});})(g__43004__auto___43089))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43004__auto___43089){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__43004__auto___43089),args);
});})(g__43004__auto___43089))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__43004__auto___43089){
return (function (seq43050){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43050));
});})(g__43004__auto___43089))
;


var g__43004__auto___43093 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__43004__auto___43093){
return (function cljs$spec$impl$gen$elements(var_args){
var args__37860__auto__ = [];
var len__37853__auto___43094 = arguments.length;
var i__37854__auto___43095 = (0);
while(true){
if((i__37854__auto___43095 < len__37853__auto___43094)){
args__37860__auto__.push((arguments[i__37854__auto___43095]));

var G__43096 = (i__37854__auto___43095 + (1));
i__37854__auto___43095 = G__43096;
continue;
} else {
}
break;
}

var argseq__37861__auto__ = ((((0) < args__37860__auto__.length))?(new cljs.core.IndexedSeq(args__37860__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__37861__auto__);
});})(g__43004__auto___43093))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43004__auto___43093){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__43004__auto___43093),args);
});})(g__43004__auto___43093))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__43004__auto___43093){
return (function (seq43051){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43051));
});})(g__43004__auto___43093))
;


var g__43004__auto___43097 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__43004__auto___43097){
return (function cljs$spec$impl$gen$bind(var_args){
var args__37860__auto__ = [];
var len__37853__auto___43098 = arguments.length;
var i__37854__auto___43099 = (0);
while(true){
if((i__37854__auto___43099 < len__37853__auto___43098)){
args__37860__auto__.push((arguments[i__37854__auto___43099]));

var G__43100 = (i__37854__auto___43099 + (1));
i__37854__auto___43099 = G__43100;
continue;
} else {
}
break;
}

var argseq__37861__auto__ = ((((0) < args__37860__auto__.length))?(new cljs.core.IndexedSeq(args__37860__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__37861__auto__);
});})(g__43004__auto___43097))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43004__auto___43097){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__43004__auto___43097),args);
});})(g__43004__auto___43097))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__43004__auto___43097){
return (function (seq43052){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43052));
});})(g__43004__auto___43097))
;


var g__43004__auto___43101 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__43004__auto___43101){
return (function cljs$spec$impl$gen$choose(var_args){
var args__37860__auto__ = [];
var len__37853__auto___43102 = arguments.length;
var i__37854__auto___43103 = (0);
while(true){
if((i__37854__auto___43103 < len__37853__auto___43102)){
args__37860__auto__.push((arguments[i__37854__auto___43103]));

var G__43104 = (i__37854__auto___43103 + (1));
i__37854__auto___43103 = G__43104;
continue;
} else {
}
break;
}

var argseq__37861__auto__ = ((((0) < args__37860__auto__.length))?(new cljs.core.IndexedSeq(args__37860__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__37861__auto__);
});})(g__43004__auto___43101))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43004__auto___43101){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__43004__auto___43101),args);
});})(g__43004__auto___43101))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__43004__auto___43101){
return (function (seq43053){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43053));
});})(g__43004__auto___43101))
;


var g__43004__auto___43105 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__43004__auto___43105){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__37860__auto__ = [];
var len__37853__auto___43106 = arguments.length;
var i__37854__auto___43107 = (0);
while(true){
if((i__37854__auto___43107 < len__37853__auto___43106)){
args__37860__auto__.push((arguments[i__37854__auto___43107]));

var G__43108 = (i__37854__auto___43107 + (1));
i__37854__auto___43107 = G__43108;
continue;
} else {
}
break;
}

var argseq__37861__auto__ = ((((0) < args__37860__auto__.length))?(new cljs.core.IndexedSeq(args__37860__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__37861__auto__);
});})(g__43004__auto___43105))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43004__auto___43105){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__43004__auto___43105),args);
});})(g__43004__auto___43105))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__43004__auto___43105){
return (function (seq43054){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43054));
});})(g__43004__auto___43105))
;


var g__43004__auto___43109 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__43004__auto___43109){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__37860__auto__ = [];
var len__37853__auto___43110 = arguments.length;
var i__37854__auto___43111 = (0);
while(true){
if((i__37854__auto___43111 < len__37853__auto___43110)){
args__37860__auto__.push((arguments[i__37854__auto___43111]));

var G__43112 = (i__37854__auto___43111 + (1));
i__37854__auto___43111 = G__43112;
continue;
} else {
}
break;
}

var argseq__37861__auto__ = ((((0) < args__37860__auto__.length))?(new cljs.core.IndexedSeq(args__37860__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__37861__auto__);
});})(g__43004__auto___43109))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43004__auto___43109){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__43004__auto___43109),args);
});})(g__43004__auto___43109))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__43004__auto___43109){
return (function (seq43055){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43055));
});})(g__43004__auto___43109))
;


var g__43004__auto___43113 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__43004__auto___43113){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__37860__auto__ = [];
var len__37853__auto___43114 = arguments.length;
var i__37854__auto___43115 = (0);
while(true){
if((i__37854__auto___43115 < len__37853__auto___43114)){
args__37860__auto__.push((arguments[i__37854__auto___43115]));

var G__43116 = (i__37854__auto___43115 + (1));
i__37854__auto___43115 = G__43116;
continue;
} else {
}
break;
}

var argseq__37861__auto__ = ((((0) < args__37860__auto__.length))?(new cljs.core.IndexedSeq(args__37860__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__37861__auto__);
});})(g__43004__auto___43113))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43004__auto___43113){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__43004__auto___43113),args);
});})(g__43004__auto___43113))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__43004__auto___43113){
return (function (seq43056){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43056));
});})(g__43004__auto___43113))
;


var g__43004__auto___43117 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__43004__auto___43117){
return (function cljs$spec$impl$gen$sample(var_args){
var args__37860__auto__ = [];
var len__37853__auto___43118 = arguments.length;
var i__37854__auto___43119 = (0);
while(true){
if((i__37854__auto___43119 < len__37853__auto___43118)){
args__37860__auto__.push((arguments[i__37854__auto___43119]));

var G__43120 = (i__37854__auto___43119 + (1));
i__37854__auto___43119 = G__43120;
continue;
} else {
}
break;
}

var argseq__37861__auto__ = ((((0) < args__37860__auto__.length))?(new cljs.core.IndexedSeq(args__37860__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__37861__auto__);
});})(g__43004__auto___43117))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43004__auto___43117){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__43004__auto___43117),args);
});})(g__43004__auto___43117))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__43004__auto___43117){
return (function (seq43057){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43057));
});})(g__43004__auto___43117))
;


var g__43004__auto___43121 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__43004__auto___43121){
return (function cljs$spec$impl$gen$return(var_args){
var args__37860__auto__ = [];
var len__37853__auto___43122 = arguments.length;
var i__37854__auto___43123 = (0);
while(true){
if((i__37854__auto___43123 < len__37853__auto___43122)){
args__37860__auto__.push((arguments[i__37854__auto___43123]));

var G__43124 = (i__37854__auto___43123 + (1));
i__37854__auto___43123 = G__43124;
continue;
} else {
}
break;
}

var argseq__37861__auto__ = ((((0) < args__37860__auto__.length))?(new cljs.core.IndexedSeq(args__37860__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__37861__auto__);
});})(g__43004__auto___43121))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43004__auto___43121){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__43004__auto___43121),args);
});})(g__43004__auto___43121))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__43004__auto___43121){
return (function (seq43058){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43058));
});})(g__43004__auto___43121))
;


var g__43004__auto___43125 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__43004__auto___43125){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__37860__auto__ = [];
var len__37853__auto___43126 = arguments.length;
var i__37854__auto___43127 = (0);
while(true){
if((i__37854__auto___43127 < len__37853__auto___43126)){
args__37860__auto__.push((arguments[i__37854__auto___43127]));

var G__43128 = (i__37854__auto___43127 + (1));
i__37854__auto___43127 = G__43128;
continue;
} else {
}
break;
}

var argseq__37861__auto__ = ((((0) < args__37860__auto__.length))?(new cljs.core.IndexedSeq(args__37860__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__37861__auto__);
});})(g__43004__auto___43125))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43004__auto___43125){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__43004__auto___43125),args);
});})(g__43004__auto___43125))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__43004__auto___43125){
return (function (seq43059){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43059));
});})(g__43004__auto___43125))
;


var g__43004__auto___43129 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__43004__auto___43129){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__37860__auto__ = [];
var len__37853__auto___43130 = arguments.length;
var i__37854__auto___43131 = (0);
while(true){
if((i__37854__auto___43131 < len__37853__auto___43130)){
args__37860__auto__.push((arguments[i__37854__auto___43131]));

var G__43132 = (i__37854__auto___43131 + (1));
i__37854__auto___43131 = G__43132;
continue;
} else {
}
break;
}

var argseq__37861__auto__ = ((((0) < args__37860__auto__.length))?(new cljs.core.IndexedSeq(args__37860__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__37861__auto__);
});})(g__43004__auto___43129))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43004__auto___43129){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__43004__auto___43129),args);
});})(g__43004__auto___43129))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__43004__auto___43129){
return (function (seq43060){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43060));
});})(g__43004__auto___43129))
;

var g__43017__auto___43154 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__43017__auto___43154){
return (function cljs$spec$impl$gen$any(var_args){
var args__37860__auto__ = [];
var len__37853__auto___43155 = arguments.length;
var i__37854__auto___43156 = (0);
while(true){
if((i__37854__auto___43156 < len__37853__auto___43155)){
args__37860__auto__.push((arguments[i__37854__auto___43156]));

var G__43157 = (i__37854__auto___43156 + (1));
i__37854__auto___43156 = G__43157;
continue;
} else {
}
break;
}

var argseq__37861__auto__ = ((((0) < args__37860__auto__.length))?(new cljs.core.IndexedSeq(args__37860__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__37861__auto__);
});})(g__43017__auto___43154))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43017__auto___43154){
return (function (args){
return cljs.core.deref.call(null,g__43017__auto___43154);
});})(g__43017__auto___43154))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__43017__auto___43154){
return (function (seq43133){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43133));
});})(g__43017__auto___43154))
;


var g__43017__auto___43158 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__43017__auto___43158){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__37860__auto__ = [];
var len__37853__auto___43159 = arguments.length;
var i__37854__auto___43160 = (0);
while(true){
if((i__37854__auto___43160 < len__37853__auto___43159)){
args__37860__auto__.push((arguments[i__37854__auto___43160]));

var G__43161 = (i__37854__auto___43160 + (1));
i__37854__auto___43160 = G__43161;
continue;
} else {
}
break;
}

var argseq__37861__auto__ = ((((0) < args__37860__auto__.length))?(new cljs.core.IndexedSeq(args__37860__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__37861__auto__);
});})(g__43017__auto___43158))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43017__auto___43158){
return (function (args){
return cljs.core.deref.call(null,g__43017__auto___43158);
});})(g__43017__auto___43158))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__43017__auto___43158){
return (function (seq43134){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43134));
});})(g__43017__auto___43158))
;


var g__43017__auto___43162 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__43017__auto___43162){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__37860__auto__ = [];
var len__37853__auto___43163 = arguments.length;
var i__37854__auto___43164 = (0);
while(true){
if((i__37854__auto___43164 < len__37853__auto___43163)){
args__37860__auto__.push((arguments[i__37854__auto___43164]));

var G__43165 = (i__37854__auto___43164 + (1));
i__37854__auto___43164 = G__43165;
continue;
} else {
}
break;
}

var argseq__37861__auto__ = ((((0) < args__37860__auto__.length))?(new cljs.core.IndexedSeq(args__37860__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__37861__auto__);
});})(g__43017__auto___43162))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43017__auto___43162){
return (function (args){
return cljs.core.deref.call(null,g__43017__auto___43162);
});})(g__43017__auto___43162))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__43017__auto___43162){
return (function (seq43135){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43135));
});})(g__43017__auto___43162))
;


var g__43017__auto___43166 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__43017__auto___43166){
return (function cljs$spec$impl$gen$char(var_args){
var args__37860__auto__ = [];
var len__37853__auto___43167 = arguments.length;
var i__37854__auto___43168 = (0);
while(true){
if((i__37854__auto___43168 < len__37853__auto___43167)){
args__37860__auto__.push((arguments[i__37854__auto___43168]));

var G__43169 = (i__37854__auto___43168 + (1));
i__37854__auto___43168 = G__43169;
continue;
} else {
}
break;
}

var argseq__37861__auto__ = ((((0) < args__37860__auto__.length))?(new cljs.core.IndexedSeq(args__37860__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__37861__auto__);
});})(g__43017__auto___43166))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43017__auto___43166){
return (function (args){
return cljs.core.deref.call(null,g__43017__auto___43166);
});})(g__43017__auto___43166))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__43017__auto___43166){
return (function (seq43136){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43136));
});})(g__43017__auto___43166))
;


var g__43017__auto___43170 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__43017__auto___43170){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__37860__auto__ = [];
var len__37853__auto___43171 = arguments.length;
var i__37854__auto___43172 = (0);
while(true){
if((i__37854__auto___43172 < len__37853__auto___43171)){
args__37860__auto__.push((arguments[i__37854__auto___43172]));

var G__43173 = (i__37854__auto___43172 + (1));
i__37854__auto___43172 = G__43173;
continue;
} else {
}
break;
}

var argseq__37861__auto__ = ((((0) < args__37860__auto__.length))?(new cljs.core.IndexedSeq(args__37860__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__37861__auto__);
});})(g__43017__auto___43170))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43017__auto___43170){
return (function (args){
return cljs.core.deref.call(null,g__43017__auto___43170);
});})(g__43017__auto___43170))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__43017__auto___43170){
return (function (seq43137){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43137));
});})(g__43017__auto___43170))
;


var g__43017__auto___43174 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__43017__auto___43174){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__37860__auto__ = [];
var len__37853__auto___43175 = arguments.length;
var i__37854__auto___43176 = (0);
while(true){
if((i__37854__auto___43176 < len__37853__auto___43175)){
args__37860__auto__.push((arguments[i__37854__auto___43176]));

var G__43177 = (i__37854__auto___43176 + (1));
i__37854__auto___43176 = G__43177;
continue;
} else {
}
break;
}

var argseq__37861__auto__ = ((((0) < args__37860__auto__.length))?(new cljs.core.IndexedSeq(args__37860__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__37861__auto__);
});})(g__43017__auto___43174))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43017__auto___43174){
return (function (args){
return cljs.core.deref.call(null,g__43017__auto___43174);
});})(g__43017__auto___43174))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__43017__auto___43174){
return (function (seq43138){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43138));
});})(g__43017__auto___43174))
;


var g__43017__auto___43178 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__43017__auto___43178){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__37860__auto__ = [];
var len__37853__auto___43179 = arguments.length;
var i__37854__auto___43180 = (0);
while(true){
if((i__37854__auto___43180 < len__37853__auto___43179)){
args__37860__auto__.push((arguments[i__37854__auto___43180]));

var G__43181 = (i__37854__auto___43180 + (1));
i__37854__auto___43180 = G__43181;
continue;
} else {
}
break;
}

var argseq__37861__auto__ = ((((0) < args__37860__auto__.length))?(new cljs.core.IndexedSeq(args__37860__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__37861__auto__);
});})(g__43017__auto___43178))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43017__auto___43178){
return (function (args){
return cljs.core.deref.call(null,g__43017__auto___43178);
});})(g__43017__auto___43178))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__43017__auto___43178){
return (function (seq43139){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43139));
});})(g__43017__auto___43178))
;


var g__43017__auto___43182 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__43017__auto___43182){
return (function cljs$spec$impl$gen$double(var_args){
var args__37860__auto__ = [];
var len__37853__auto___43183 = arguments.length;
var i__37854__auto___43184 = (0);
while(true){
if((i__37854__auto___43184 < len__37853__auto___43183)){
args__37860__auto__.push((arguments[i__37854__auto___43184]));

var G__43185 = (i__37854__auto___43184 + (1));
i__37854__auto___43184 = G__43185;
continue;
} else {
}
break;
}

var argseq__37861__auto__ = ((((0) < args__37860__auto__.length))?(new cljs.core.IndexedSeq(args__37860__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__37861__auto__);
});})(g__43017__auto___43182))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43017__auto___43182){
return (function (args){
return cljs.core.deref.call(null,g__43017__auto___43182);
});})(g__43017__auto___43182))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__43017__auto___43182){
return (function (seq43140){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43140));
});})(g__43017__auto___43182))
;


var g__43017__auto___43186 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__43017__auto___43186){
return (function cljs$spec$impl$gen$int(var_args){
var args__37860__auto__ = [];
var len__37853__auto___43187 = arguments.length;
var i__37854__auto___43188 = (0);
while(true){
if((i__37854__auto___43188 < len__37853__auto___43187)){
args__37860__auto__.push((arguments[i__37854__auto___43188]));

var G__43189 = (i__37854__auto___43188 + (1));
i__37854__auto___43188 = G__43189;
continue;
} else {
}
break;
}

var argseq__37861__auto__ = ((((0) < args__37860__auto__.length))?(new cljs.core.IndexedSeq(args__37860__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__37861__auto__);
});})(g__43017__auto___43186))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43017__auto___43186){
return (function (args){
return cljs.core.deref.call(null,g__43017__auto___43186);
});})(g__43017__auto___43186))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__43017__auto___43186){
return (function (seq43141){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43141));
});})(g__43017__auto___43186))
;


var g__43017__auto___43190 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__43017__auto___43190){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__37860__auto__ = [];
var len__37853__auto___43191 = arguments.length;
var i__37854__auto___43192 = (0);
while(true){
if((i__37854__auto___43192 < len__37853__auto___43191)){
args__37860__auto__.push((arguments[i__37854__auto___43192]));

var G__43193 = (i__37854__auto___43192 + (1));
i__37854__auto___43192 = G__43193;
continue;
} else {
}
break;
}

var argseq__37861__auto__ = ((((0) < args__37860__auto__.length))?(new cljs.core.IndexedSeq(args__37860__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__37861__auto__);
});})(g__43017__auto___43190))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43017__auto___43190){
return (function (args){
return cljs.core.deref.call(null,g__43017__auto___43190);
});})(g__43017__auto___43190))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__43017__auto___43190){
return (function (seq43142){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43142));
});})(g__43017__auto___43190))
;


var g__43017__auto___43194 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__43017__auto___43194){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__37860__auto__ = [];
var len__37853__auto___43195 = arguments.length;
var i__37854__auto___43196 = (0);
while(true){
if((i__37854__auto___43196 < len__37853__auto___43195)){
args__37860__auto__.push((arguments[i__37854__auto___43196]));

var G__43197 = (i__37854__auto___43196 + (1));
i__37854__auto___43196 = G__43197;
continue;
} else {
}
break;
}

var argseq__37861__auto__ = ((((0) < args__37860__auto__.length))?(new cljs.core.IndexedSeq(args__37860__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__37861__auto__);
});})(g__43017__auto___43194))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43017__auto___43194){
return (function (args){
return cljs.core.deref.call(null,g__43017__auto___43194);
});})(g__43017__auto___43194))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__43017__auto___43194){
return (function (seq43143){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43143));
});})(g__43017__auto___43194))
;


var g__43017__auto___43198 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__43017__auto___43198){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__37860__auto__ = [];
var len__37853__auto___43199 = arguments.length;
var i__37854__auto___43200 = (0);
while(true){
if((i__37854__auto___43200 < len__37853__auto___43199)){
args__37860__auto__.push((arguments[i__37854__auto___43200]));

var G__43201 = (i__37854__auto___43200 + (1));
i__37854__auto___43200 = G__43201;
continue;
} else {
}
break;
}

var argseq__37861__auto__ = ((((0) < args__37860__auto__.length))?(new cljs.core.IndexedSeq(args__37860__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__37861__auto__);
});})(g__43017__auto___43198))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43017__auto___43198){
return (function (args){
return cljs.core.deref.call(null,g__43017__auto___43198);
});})(g__43017__auto___43198))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__43017__auto___43198){
return (function (seq43144){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43144));
});})(g__43017__auto___43198))
;


var g__43017__auto___43202 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__43017__auto___43202){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__37860__auto__ = [];
var len__37853__auto___43203 = arguments.length;
var i__37854__auto___43204 = (0);
while(true){
if((i__37854__auto___43204 < len__37853__auto___43203)){
args__37860__auto__.push((arguments[i__37854__auto___43204]));

var G__43205 = (i__37854__auto___43204 + (1));
i__37854__auto___43204 = G__43205;
continue;
} else {
}
break;
}

var argseq__37861__auto__ = ((((0) < args__37860__auto__.length))?(new cljs.core.IndexedSeq(args__37860__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__37861__auto__);
});})(g__43017__auto___43202))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43017__auto___43202){
return (function (args){
return cljs.core.deref.call(null,g__43017__auto___43202);
});})(g__43017__auto___43202))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__43017__auto___43202){
return (function (seq43145){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43145));
});})(g__43017__auto___43202))
;


var g__43017__auto___43206 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__43017__auto___43206){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__37860__auto__ = [];
var len__37853__auto___43207 = arguments.length;
var i__37854__auto___43208 = (0);
while(true){
if((i__37854__auto___43208 < len__37853__auto___43207)){
args__37860__auto__.push((arguments[i__37854__auto___43208]));

var G__43209 = (i__37854__auto___43208 + (1));
i__37854__auto___43208 = G__43209;
continue;
} else {
}
break;
}

var argseq__37861__auto__ = ((((0) < args__37860__auto__.length))?(new cljs.core.IndexedSeq(args__37860__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__37861__auto__);
});})(g__43017__auto___43206))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43017__auto___43206){
return (function (args){
return cljs.core.deref.call(null,g__43017__auto___43206);
});})(g__43017__auto___43206))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__43017__auto___43206){
return (function (seq43146){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43146));
});})(g__43017__auto___43206))
;


var g__43017__auto___43210 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__43017__auto___43210){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__37860__auto__ = [];
var len__37853__auto___43211 = arguments.length;
var i__37854__auto___43212 = (0);
while(true){
if((i__37854__auto___43212 < len__37853__auto___43211)){
args__37860__auto__.push((arguments[i__37854__auto___43212]));

var G__43213 = (i__37854__auto___43212 + (1));
i__37854__auto___43212 = G__43213;
continue;
} else {
}
break;
}

var argseq__37861__auto__ = ((((0) < args__37860__auto__.length))?(new cljs.core.IndexedSeq(args__37860__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__37861__auto__);
});})(g__43017__auto___43210))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43017__auto___43210){
return (function (args){
return cljs.core.deref.call(null,g__43017__auto___43210);
});})(g__43017__auto___43210))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__43017__auto___43210){
return (function (seq43147){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43147));
});})(g__43017__auto___43210))
;


var g__43017__auto___43214 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__43017__auto___43214){
return (function cljs$spec$impl$gen$string(var_args){
var args__37860__auto__ = [];
var len__37853__auto___43215 = arguments.length;
var i__37854__auto___43216 = (0);
while(true){
if((i__37854__auto___43216 < len__37853__auto___43215)){
args__37860__auto__.push((arguments[i__37854__auto___43216]));

var G__43217 = (i__37854__auto___43216 + (1));
i__37854__auto___43216 = G__43217;
continue;
} else {
}
break;
}

var argseq__37861__auto__ = ((((0) < args__37860__auto__.length))?(new cljs.core.IndexedSeq(args__37860__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__37861__auto__);
});})(g__43017__auto___43214))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43017__auto___43214){
return (function (args){
return cljs.core.deref.call(null,g__43017__auto___43214);
});})(g__43017__auto___43214))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__43017__auto___43214){
return (function (seq43148){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43148));
});})(g__43017__auto___43214))
;


var g__43017__auto___43218 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__43017__auto___43218){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__37860__auto__ = [];
var len__37853__auto___43219 = arguments.length;
var i__37854__auto___43220 = (0);
while(true){
if((i__37854__auto___43220 < len__37853__auto___43219)){
args__37860__auto__.push((arguments[i__37854__auto___43220]));

var G__43221 = (i__37854__auto___43220 + (1));
i__37854__auto___43220 = G__43221;
continue;
} else {
}
break;
}

var argseq__37861__auto__ = ((((0) < args__37860__auto__.length))?(new cljs.core.IndexedSeq(args__37860__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__37861__auto__);
});})(g__43017__auto___43218))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43017__auto___43218){
return (function (args){
return cljs.core.deref.call(null,g__43017__auto___43218);
});})(g__43017__auto___43218))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__43017__auto___43218){
return (function (seq43149){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43149));
});})(g__43017__auto___43218))
;


var g__43017__auto___43222 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__43017__auto___43222){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__37860__auto__ = [];
var len__37853__auto___43223 = arguments.length;
var i__37854__auto___43224 = (0);
while(true){
if((i__37854__auto___43224 < len__37853__auto___43223)){
args__37860__auto__.push((arguments[i__37854__auto___43224]));

var G__43225 = (i__37854__auto___43224 + (1));
i__37854__auto___43224 = G__43225;
continue;
} else {
}
break;
}

var argseq__37861__auto__ = ((((0) < args__37860__auto__.length))?(new cljs.core.IndexedSeq(args__37860__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__37861__auto__);
});})(g__43017__auto___43222))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43017__auto___43222){
return (function (args){
return cljs.core.deref.call(null,g__43017__auto___43222);
});})(g__43017__auto___43222))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__43017__auto___43222){
return (function (seq43150){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43150));
});})(g__43017__auto___43222))
;


var g__43017__auto___43226 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__43017__auto___43226){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__37860__auto__ = [];
var len__37853__auto___43227 = arguments.length;
var i__37854__auto___43228 = (0);
while(true){
if((i__37854__auto___43228 < len__37853__auto___43227)){
args__37860__auto__.push((arguments[i__37854__auto___43228]));

var G__43229 = (i__37854__auto___43228 + (1));
i__37854__auto___43228 = G__43229;
continue;
} else {
}
break;
}

var argseq__37861__auto__ = ((((0) < args__37860__auto__.length))?(new cljs.core.IndexedSeq(args__37860__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__37861__auto__);
});})(g__43017__auto___43226))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43017__auto___43226){
return (function (args){
return cljs.core.deref.call(null,g__43017__auto___43226);
});})(g__43017__auto___43226))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__43017__auto___43226){
return (function (seq43151){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43151));
});})(g__43017__auto___43226))
;


var g__43017__auto___43230 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__43017__auto___43230){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__37860__auto__ = [];
var len__37853__auto___43231 = arguments.length;
var i__37854__auto___43232 = (0);
while(true){
if((i__37854__auto___43232 < len__37853__auto___43231)){
args__37860__auto__.push((arguments[i__37854__auto___43232]));

var G__43233 = (i__37854__auto___43232 + (1));
i__37854__auto___43232 = G__43233;
continue;
} else {
}
break;
}

var argseq__37861__auto__ = ((((0) < args__37860__auto__.length))?(new cljs.core.IndexedSeq(args__37860__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__37861__auto__);
});})(g__43017__auto___43230))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43017__auto___43230){
return (function (args){
return cljs.core.deref.call(null,g__43017__auto___43230);
});})(g__43017__auto___43230))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__43017__auto___43230){
return (function (seq43152){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43152));
});})(g__43017__auto___43230))
;


var g__43017__auto___43234 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__43017__auto___43234){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__37860__auto__ = [];
var len__37853__auto___43235 = arguments.length;
var i__37854__auto___43236 = (0);
while(true){
if((i__37854__auto___43236 < len__37853__auto___43235)){
args__37860__auto__.push((arguments[i__37854__auto___43236]));

var G__43237 = (i__37854__auto___43236 + (1));
i__37854__auto___43236 = G__43237;
continue;
} else {
}
break;
}

var argseq__37861__auto__ = ((((0) < args__37860__auto__.length))?(new cljs.core.IndexedSeq(args__37860__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__37861__auto__);
});})(g__43017__auto___43234))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43017__auto___43234){
return (function (args){
return cljs.core.deref.call(null,g__43017__auto___43234);
});})(g__43017__auto___43234))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__43017__auto___43234){
return (function (seq43153){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43153));
});})(g__43017__auto___43234))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__37860__auto__ = [];
var len__37853__auto___43240 = arguments.length;
var i__37854__auto___43241 = (0);
while(true){
if((i__37854__auto___43241 < len__37853__auto___43240)){
args__37860__auto__.push((arguments[i__37854__auto___43241]));

var G__43242 = (i__37854__auto___43241 + (1));
i__37854__auto___43241 = G__43242;
continue;
} else {
}
break;
}

var argseq__37861__auto__ = ((((0) < args__37860__auto__.length))?(new cljs.core.IndexedSeq(args__37860__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__37861__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__43238_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__43238_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq43239){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43239));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__43243_SHARP_){
return (new Date(p1__43243_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map?rel=1483514361073