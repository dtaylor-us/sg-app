// Compiled by ClojureScript 1.9.293 {}
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

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__38509__auto__,writer__38510__auto__,opt__38511__auto__){
return cljs.core._write.call(null,writer__38510__auto__,"cljs.spec.impl.gen/LazyVar");
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
var args__39018__auto__ = [];
var len__39011__auto___50144 = arguments.length;
var i__39012__auto___50145 = (0);
while(true){
if((i__39012__auto___50145 < len__39011__auto___50144)){
args__39018__auto__.push((arguments[i__39012__auto___50145]));

var G__50146 = (i__39012__auto___50145 + (1));
i__39012__auto___50145 = G__50146;
continue;
} else {
}
break;
}

var argseq__39019__auto__ = ((((0) < args__39018__auto__.length))?(new cljs.core.IndexedSeq(args__39018__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__39019__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq50143){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50143));
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
var args__39018__auto__ = [];
var len__39011__auto___50148 = arguments.length;
var i__39012__auto___50149 = (0);
while(true){
if((i__39012__auto___50149 < len__39011__auto___50148)){
args__39018__auto__.push((arguments[i__39012__auto___50149]));

var G__50150 = (i__39012__auto___50149 + (1));
i__39012__auto___50149 = G__50150;
continue;
} else {
}
break;
}

var argseq__39019__auto__ = ((((0) < args__39018__auto__.length))?(new cljs.core.IndexedSeq(args__39018__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__39019__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq50147){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50147));
});

var g_QMARK__50151 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_50152 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__50151){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__50151))
,null));
var mkg_50153 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__50151,g_50152){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__50151,g_50152))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__50151,g_50152,mkg_50153){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__50151).call(null,x);
});})(g_QMARK__50151,g_50152,mkg_50153))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__50151,g_50152,mkg_50153){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_50153).call(null,gfn);
});})(g_QMARK__50151,g_50152,mkg_50153))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__50151,g_50152,mkg_50153){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_50152).call(null,generator);
});})(g_QMARK__50151,g_50152,mkg_50153))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__50115__auto___50172 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__50115__auto___50172){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__39018__auto__ = [];
var len__39011__auto___50173 = arguments.length;
var i__39012__auto___50174 = (0);
while(true){
if((i__39012__auto___50174 < len__39011__auto___50173)){
args__39018__auto__.push((arguments[i__39012__auto___50174]));

var G__50175 = (i__39012__auto___50174 + (1));
i__39012__auto___50174 = G__50175;
continue;
} else {
}
break;
}

var argseq__39019__auto__ = ((((0) < args__39018__auto__.length))?(new cljs.core.IndexedSeq(args__39018__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__39019__auto__);
});})(g__50115__auto___50172))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50115__auto___50172){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50115__auto___50172),args);
});})(g__50115__auto___50172))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__50115__auto___50172){
return (function (seq50154){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50154));
});})(g__50115__auto___50172))
;


var g__50115__auto___50176 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__50115__auto___50176){
return (function cljs$spec$impl$gen$list(var_args){
var args__39018__auto__ = [];
var len__39011__auto___50177 = arguments.length;
var i__39012__auto___50178 = (0);
while(true){
if((i__39012__auto___50178 < len__39011__auto___50177)){
args__39018__auto__.push((arguments[i__39012__auto___50178]));

var G__50179 = (i__39012__auto___50178 + (1));
i__39012__auto___50178 = G__50179;
continue;
} else {
}
break;
}

var argseq__39019__auto__ = ((((0) < args__39018__auto__.length))?(new cljs.core.IndexedSeq(args__39018__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__39019__auto__);
});})(g__50115__auto___50176))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50115__auto___50176){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50115__auto___50176),args);
});})(g__50115__auto___50176))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__50115__auto___50176){
return (function (seq50155){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50155));
});})(g__50115__auto___50176))
;


var g__50115__auto___50180 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__50115__auto___50180){
return (function cljs$spec$impl$gen$map(var_args){
var args__39018__auto__ = [];
var len__39011__auto___50181 = arguments.length;
var i__39012__auto___50182 = (0);
while(true){
if((i__39012__auto___50182 < len__39011__auto___50181)){
args__39018__auto__.push((arguments[i__39012__auto___50182]));

var G__50183 = (i__39012__auto___50182 + (1));
i__39012__auto___50182 = G__50183;
continue;
} else {
}
break;
}

var argseq__39019__auto__ = ((((0) < args__39018__auto__.length))?(new cljs.core.IndexedSeq(args__39018__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__39019__auto__);
});})(g__50115__auto___50180))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50115__auto___50180){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50115__auto___50180),args);
});})(g__50115__auto___50180))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__50115__auto___50180){
return (function (seq50156){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50156));
});})(g__50115__auto___50180))
;


var g__50115__auto___50184 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__50115__auto___50184){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__39018__auto__ = [];
var len__39011__auto___50185 = arguments.length;
var i__39012__auto___50186 = (0);
while(true){
if((i__39012__auto___50186 < len__39011__auto___50185)){
args__39018__auto__.push((arguments[i__39012__auto___50186]));

var G__50187 = (i__39012__auto___50186 + (1));
i__39012__auto___50186 = G__50187;
continue;
} else {
}
break;
}

var argseq__39019__auto__ = ((((0) < args__39018__auto__.length))?(new cljs.core.IndexedSeq(args__39018__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__39019__auto__);
});})(g__50115__auto___50184))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50115__auto___50184){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50115__auto___50184),args);
});})(g__50115__auto___50184))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__50115__auto___50184){
return (function (seq50157){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50157));
});})(g__50115__auto___50184))
;


var g__50115__auto___50188 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__50115__auto___50188){
return (function cljs$spec$impl$gen$set(var_args){
var args__39018__auto__ = [];
var len__39011__auto___50189 = arguments.length;
var i__39012__auto___50190 = (0);
while(true){
if((i__39012__auto___50190 < len__39011__auto___50189)){
args__39018__auto__.push((arguments[i__39012__auto___50190]));

var G__50191 = (i__39012__auto___50190 + (1));
i__39012__auto___50190 = G__50191;
continue;
} else {
}
break;
}

var argseq__39019__auto__ = ((((0) < args__39018__auto__.length))?(new cljs.core.IndexedSeq(args__39018__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__39019__auto__);
});})(g__50115__auto___50188))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50115__auto___50188){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50115__auto___50188),args);
});})(g__50115__auto___50188))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__50115__auto___50188){
return (function (seq50158){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50158));
});})(g__50115__auto___50188))
;


var g__50115__auto___50192 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__50115__auto___50192){
return (function cljs$spec$impl$gen$vector(var_args){
var args__39018__auto__ = [];
var len__39011__auto___50193 = arguments.length;
var i__39012__auto___50194 = (0);
while(true){
if((i__39012__auto___50194 < len__39011__auto___50193)){
args__39018__auto__.push((arguments[i__39012__auto___50194]));

var G__50195 = (i__39012__auto___50194 + (1));
i__39012__auto___50194 = G__50195;
continue;
} else {
}
break;
}

var argseq__39019__auto__ = ((((0) < args__39018__auto__.length))?(new cljs.core.IndexedSeq(args__39018__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__39019__auto__);
});})(g__50115__auto___50192))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50115__auto___50192){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50115__auto___50192),args);
});})(g__50115__auto___50192))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__50115__auto___50192){
return (function (seq50159){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50159));
});})(g__50115__auto___50192))
;


var g__50115__auto___50196 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__50115__auto___50196){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__39018__auto__ = [];
var len__39011__auto___50197 = arguments.length;
var i__39012__auto___50198 = (0);
while(true){
if((i__39012__auto___50198 < len__39011__auto___50197)){
args__39018__auto__.push((arguments[i__39012__auto___50198]));

var G__50199 = (i__39012__auto___50198 + (1));
i__39012__auto___50198 = G__50199;
continue;
} else {
}
break;
}

var argseq__39019__auto__ = ((((0) < args__39018__auto__.length))?(new cljs.core.IndexedSeq(args__39018__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__39019__auto__);
});})(g__50115__auto___50196))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50115__auto___50196){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50115__auto___50196),args);
});})(g__50115__auto___50196))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__50115__auto___50196){
return (function (seq50160){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50160));
});})(g__50115__auto___50196))
;


var g__50115__auto___50200 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__50115__auto___50200){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__39018__auto__ = [];
var len__39011__auto___50201 = arguments.length;
var i__39012__auto___50202 = (0);
while(true){
if((i__39012__auto___50202 < len__39011__auto___50201)){
args__39018__auto__.push((arguments[i__39012__auto___50202]));

var G__50203 = (i__39012__auto___50202 + (1));
i__39012__auto___50202 = G__50203;
continue;
} else {
}
break;
}

var argseq__39019__auto__ = ((((0) < args__39018__auto__.length))?(new cljs.core.IndexedSeq(args__39018__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__39019__auto__);
});})(g__50115__auto___50200))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50115__auto___50200){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50115__auto___50200),args);
});})(g__50115__auto___50200))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__50115__auto___50200){
return (function (seq50161){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50161));
});})(g__50115__auto___50200))
;


var g__50115__auto___50204 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__50115__auto___50204){
return (function cljs$spec$impl$gen$elements(var_args){
var args__39018__auto__ = [];
var len__39011__auto___50205 = arguments.length;
var i__39012__auto___50206 = (0);
while(true){
if((i__39012__auto___50206 < len__39011__auto___50205)){
args__39018__auto__.push((arguments[i__39012__auto___50206]));

var G__50207 = (i__39012__auto___50206 + (1));
i__39012__auto___50206 = G__50207;
continue;
} else {
}
break;
}

var argseq__39019__auto__ = ((((0) < args__39018__auto__.length))?(new cljs.core.IndexedSeq(args__39018__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__39019__auto__);
});})(g__50115__auto___50204))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50115__auto___50204){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50115__auto___50204),args);
});})(g__50115__auto___50204))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__50115__auto___50204){
return (function (seq50162){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50162));
});})(g__50115__auto___50204))
;


var g__50115__auto___50208 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__50115__auto___50208){
return (function cljs$spec$impl$gen$bind(var_args){
var args__39018__auto__ = [];
var len__39011__auto___50209 = arguments.length;
var i__39012__auto___50210 = (0);
while(true){
if((i__39012__auto___50210 < len__39011__auto___50209)){
args__39018__auto__.push((arguments[i__39012__auto___50210]));

var G__50211 = (i__39012__auto___50210 + (1));
i__39012__auto___50210 = G__50211;
continue;
} else {
}
break;
}

var argseq__39019__auto__ = ((((0) < args__39018__auto__.length))?(new cljs.core.IndexedSeq(args__39018__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__39019__auto__);
});})(g__50115__auto___50208))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50115__auto___50208){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50115__auto___50208),args);
});})(g__50115__auto___50208))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__50115__auto___50208){
return (function (seq50163){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50163));
});})(g__50115__auto___50208))
;


var g__50115__auto___50212 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__50115__auto___50212){
return (function cljs$spec$impl$gen$choose(var_args){
var args__39018__auto__ = [];
var len__39011__auto___50213 = arguments.length;
var i__39012__auto___50214 = (0);
while(true){
if((i__39012__auto___50214 < len__39011__auto___50213)){
args__39018__auto__.push((arguments[i__39012__auto___50214]));

var G__50215 = (i__39012__auto___50214 + (1));
i__39012__auto___50214 = G__50215;
continue;
} else {
}
break;
}

var argseq__39019__auto__ = ((((0) < args__39018__auto__.length))?(new cljs.core.IndexedSeq(args__39018__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__39019__auto__);
});})(g__50115__auto___50212))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50115__auto___50212){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50115__auto___50212),args);
});})(g__50115__auto___50212))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__50115__auto___50212){
return (function (seq50164){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50164));
});})(g__50115__auto___50212))
;


var g__50115__auto___50216 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__50115__auto___50216){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__39018__auto__ = [];
var len__39011__auto___50217 = arguments.length;
var i__39012__auto___50218 = (0);
while(true){
if((i__39012__auto___50218 < len__39011__auto___50217)){
args__39018__auto__.push((arguments[i__39012__auto___50218]));

var G__50219 = (i__39012__auto___50218 + (1));
i__39012__auto___50218 = G__50219;
continue;
} else {
}
break;
}

var argseq__39019__auto__ = ((((0) < args__39018__auto__.length))?(new cljs.core.IndexedSeq(args__39018__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__39019__auto__);
});})(g__50115__auto___50216))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50115__auto___50216){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50115__auto___50216),args);
});})(g__50115__auto___50216))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__50115__auto___50216){
return (function (seq50165){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50165));
});})(g__50115__auto___50216))
;


var g__50115__auto___50220 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__50115__auto___50220){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__39018__auto__ = [];
var len__39011__auto___50221 = arguments.length;
var i__39012__auto___50222 = (0);
while(true){
if((i__39012__auto___50222 < len__39011__auto___50221)){
args__39018__auto__.push((arguments[i__39012__auto___50222]));

var G__50223 = (i__39012__auto___50222 + (1));
i__39012__auto___50222 = G__50223;
continue;
} else {
}
break;
}

var argseq__39019__auto__ = ((((0) < args__39018__auto__.length))?(new cljs.core.IndexedSeq(args__39018__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__39019__auto__);
});})(g__50115__auto___50220))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50115__auto___50220){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50115__auto___50220),args);
});})(g__50115__auto___50220))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__50115__auto___50220){
return (function (seq50166){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50166));
});})(g__50115__auto___50220))
;


var g__50115__auto___50224 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__50115__auto___50224){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__39018__auto__ = [];
var len__39011__auto___50225 = arguments.length;
var i__39012__auto___50226 = (0);
while(true){
if((i__39012__auto___50226 < len__39011__auto___50225)){
args__39018__auto__.push((arguments[i__39012__auto___50226]));

var G__50227 = (i__39012__auto___50226 + (1));
i__39012__auto___50226 = G__50227;
continue;
} else {
}
break;
}

var argseq__39019__auto__ = ((((0) < args__39018__auto__.length))?(new cljs.core.IndexedSeq(args__39018__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__39019__auto__);
});})(g__50115__auto___50224))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50115__auto___50224){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50115__auto___50224),args);
});})(g__50115__auto___50224))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__50115__auto___50224){
return (function (seq50167){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50167));
});})(g__50115__auto___50224))
;


var g__50115__auto___50228 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__50115__auto___50228){
return (function cljs$spec$impl$gen$sample(var_args){
var args__39018__auto__ = [];
var len__39011__auto___50229 = arguments.length;
var i__39012__auto___50230 = (0);
while(true){
if((i__39012__auto___50230 < len__39011__auto___50229)){
args__39018__auto__.push((arguments[i__39012__auto___50230]));

var G__50231 = (i__39012__auto___50230 + (1));
i__39012__auto___50230 = G__50231;
continue;
} else {
}
break;
}

var argseq__39019__auto__ = ((((0) < args__39018__auto__.length))?(new cljs.core.IndexedSeq(args__39018__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__39019__auto__);
});})(g__50115__auto___50228))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50115__auto___50228){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50115__auto___50228),args);
});})(g__50115__auto___50228))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__50115__auto___50228){
return (function (seq50168){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50168));
});})(g__50115__auto___50228))
;


var g__50115__auto___50232 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__50115__auto___50232){
return (function cljs$spec$impl$gen$return(var_args){
var args__39018__auto__ = [];
var len__39011__auto___50233 = arguments.length;
var i__39012__auto___50234 = (0);
while(true){
if((i__39012__auto___50234 < len__39011__auto___50233)){
args__39018__auto__.push((arguments[i__39012__auto___50234]));

var G__50235 = (i__39012__auto___50234 + (1));
i__39012__auto___50234 = G__50235;
continue;
} else {
}
break;
}

var argseq__39019__auto__ = ((((0) < args__39018__auto__.length))?(new cljs.core.IndexedSeq(args__39018__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__39019__auto__);
});})(g__50115__auto___50232))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50115__auto___50232){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50115__auto___50232),args);
});})(g__50115__auto___50232))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__50115__auto___50232){
return (function (seq50169){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50169));
});})(g__50115__auto___50232))
;


var g__50115__auto___50236 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__50115__auto___50236){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__39018__auto__ = [];
var len__39011__auto___50237 = arguments.length;
var i__39012__auto___50238 = (0);
while(true){
if((i__39012__auto___50238 < len__39011__auto___50237)){
args__39018__auto__.push((arguments[i__39012__auto___50238]));

var G__50239 = (i__39012__auto___50238 + (1));
i__39012__auto___50238 = G__50239;
continue;
} else {
}
break;
}

var argseq__39019__auto__ = ((((0) < args__39018__auto__.length))?(new cljs.core.IndexedSeq(args__39018__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__39019__auto__);
});})(g__50115__auto___50236))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50115__auto___50236){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50115__auto___50236),args);
});})(g__50115__auto___50236))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__50115__auto___50236){
return (function (seq50170){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50170));
});})(g__50115__auto___50236))
;


var g__50115__auto___50240 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__50115__auto___50240){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__39018__auto__ = [];
var len__39011__auto___50241 = arguments.length;
var i__39012__auto___50242 = (0);
while(true){
if((i__39012__auto___50242 < len__39011__auto___50241)){
args__39018__auto__.push((arguments[i__39012__auto___50242]));

var G__50243 = (i__39012__auto___50242 + (1));
i__39012__auto___50242 = G__50243;
continue;
} else {
}
break;
}

var argseq__39019__auto__ = ((((0) < args__39018__auto__.length))?(new cljs.core.IndexedSeq(args__39018__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__39019__auto__);
});})(g__50115__auto___50240))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50115__auto___50240){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50115__auto___50240),args);
});})(g__50115__auto___50240))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__50115__auto___50240){
return (function (seq50171){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50171));
});})(g__50115__auto___50240))
;

var g__50128__auto___50265 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__50128__auto___50265){
return (function cljs$spec$impl$gen$any(var_args){
var args__39018__auto__ = [];
var len__39011__auto___50266 = arguments.length;
var i__39012__auto___50267 = (0);
while(true){
if((i__39012__auto___50267 < len__39011__auto___50266)){
args__39018__auto__.push((arguments[i__39012__auto___50267]));

var G__50268 = (i__39012__auto___50267 + (1));
i__39012__auto___50267 = G__50268;
continue;
} else {
}
break;
}

var argseq__39019__auto__ = ((((0) < args__39018__auto__.length))?(new cljs.core.IndexedSeq(args__39018__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__39019__auto__);
});})(g__50128__auto___50265))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50128__auto___50265){
return (function (args){
return cljs.core.deref.call(null,g__50128__auto___50265);
});})(g__50128__auto___50265))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__50128__auto___50265){
return (function (seq50244){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50244));
});})(g__50128__auto___50265))
;


var g__50128__auto___50269 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__50128__auto___50269){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__39018__auto__ = [];
var len__39011__auto___50270 = arguments.length;
var i__39012__auto___50271 = (0);
while(true){
if((i__39012__auto___50271 < len__39011__auto___50270)){
args__39018__auto__.push((arguments[i__39012__auto___50271]));

var G__50272 = (i__39012__auto___50271 + (1));
i__39012__auto___50271 = G__50272;
continue;
} else {
}
break;
}

var argseq__39019__auto__ = ((((0) < args__39018__auto__.length))?(new cljs.core.IndexedSeq(args__39018__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__39019__auto__);
});})(g__50128__auto___50269))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50128__auto___50269){
return (function (args){
return cljs.core.deref.call(null,g__50128__auto___50269);
});})(g__50128__auto___50269))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__50128__auto___50269){
return (function (seq50245){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50245));
});})(g__50128__auto___50269))
;


var g__50128__auto___50273 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__50128__auto___50273){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__39018__auto__ = [];
var len__39011__auto___50274 = arguments.length;
var i__39012__auto___50275 = (0);
while(true){
if((i__39012__auto___50275 < len__39011__auto___50274)){
args__39018__auto__.push((arguments[i__39012__auto___50275]));

var G__50276 = (i__39012__auto___50275 + (1));
i__39012__auto___50275 = G__50276;
continue;
} else {
}
break;
}

var argseq__39019__auto__ = ((((0) < args__39018__auto__.length))?(new cljs.core.IndexedSeq(args__39018__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__39019__auto__);
});})(g__50128__auto___50273))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50128__auto___50273){
return (function (args){
return cljs.core.deref.call(null,g__50128__auto___50273);
});})(g__50128__auto___50273))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__50128__auto___50273){
return (function (seq50246){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50246));
});})(g__50128__auto___50273))
;


var g__50128__auto___50277 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__50128__auto___50277){
return (function cljs$spec$impl$gen$char(var_args){
var args__39018__auto__ = [];
var len__39011__auto___50278 = arguments.length;
var i__39012__auto___50279 = (0);
while(true){
if((i__39012__auto___50279 < len__39011__auto___50278)){
args__39018__auto__.push((arguments[i__39012__auto___50279]));

var G__50280 = (i__39012__auto___50279 + (1));
i__39012__auto___50279 = G__50280;
continue;
} else {
}
break;
}

var argseq__39019__auto__ = ((((0) < args__39018__auto__.length))?(new cljs.core.IndexedSeq(args__39018__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__39019__auto__);
});})(g__50128__auto___50277))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50128__auto___50277){
return (function (args){
return cljs.core.deref.call(null,g__50128__auto___50277);
});})(g__50128__auto___50277))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__50128__auto___50277){
return (function (seq50247){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50247));
});})(g__50128__auto___50277))
;


var g__50128__auto___50281 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__50128__auto___50281){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__39018__auto__ = [];
var len__39011__auto___50282 = arguments.length;
var i__39012__auto___50283 = (0);
while(true){
if((i__39012__auto___50283 < len__39011__auto___50282)){
args__39018__auto__.push((arguments[i__39012__auto___50283]));

var G__50284 = (i__39012__auto___50283 + (1));
i__39012__auto___50283 = G__50284;
continue;
} else {
}
break;
}

var argseq__39019__auto__ = ((((0) < args__39018__auto__.length))?(new cljs.core.IndexedSeq(args__39018__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__39019__auto__);
});})(g__50128__auto___50281))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50128__auto___50281){
return (function (args){
return cljs.core.deref.call(null,g__50128__auto___50281);
});})(g__50128__auto___50281))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__50128__auto___50281){
return (function (seq50248){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50248));
});})(g__50128__auto___50281))
;


var g__50128__auto___50285 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__50128__auto___50285){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__39018__auto__ = [];
var len__39011__auto___50286 = arguments.length;
var i__39012__auto___50287 = (0);
while(true){
if((i__39012__auto___50287 < len__39011__auto___50286)){
args__39018__auto__.push((arguments[i__39012__auto___50287]));

var G__50288 = (i__39012__auto___50287 + (1));
i__39012__auto___50287 = G__50288;
continue;
} else {
}
break;
}

var argseq__39019__auto__ = ((((0) < args__39018__auto__.length))?(new cljs.core.IndexedSeq(args__39018__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__39019__auto__);
});})(g__50128__auto___50285))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50128__auto___50285){
return (function (args){
return cljs.core.deref.call(null,g__50128__auto___50285);
});})(g__50128__auto___50285))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__50128__auto___50285){
return (function (seq50249){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50249));
});})(g__50128__auto___50285))
;


var g__50128__auto___50289 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__50128__auto___50289){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__39018__auto__ = [];
var len__39011__auto___50290 = arguments.length;
var i__39012__auto___50291 = (0);
while(true){
if((i__39012__auto___50291 < len__39011__auto___50290)){
args__39018__auto__.push((arguments[i__39012__auto___50291]));

var G__50292 = (i__39012__auto___50291 + (1));
i__39012__auto___50291 = G__50292;
continue;
} else {
}
break;
}

var argseq__39019__auto__ = ((((0) < args__39018__auto__.length))?(new cljs.core.IndexedSeq(args__39018__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__39019__auto__);
});})(g__50128__auto___50289))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50128__auto___50289){
return (function (args){
return cljs.core.deref.call(null,g__50128__auto___50289);
});})(g__50128__auto___50289))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__50128__auto___50289){
return (function (seq50250){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50250));
});})(g__50128__auto___50289))
;


var g__50128__auto___50293 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__50128__auto___50293){
return (function cljs$spec$impl$gen$double(var_args){
var args__39018__auto__ = [];
var len__39011__auto___50294 = arguments.length;
var i__39012__auto___50295 = (0);
while(true){
if((i__39012__auto___50295 < len__39011__auto___50294)){
args__39018__auto__.push((arguments[i__39012__auto___50295]));

var G__50296 = (i__39012__auto___50295 + (1));
i__39012__auto___50295 = G__50296;
continue;
} else {
}
break;
}

var argseq__39019__auto__ = ((((0) < args__39018__auto__.length))?(new cljs.core.IndexedSeq(args__39018__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__39019__auto__);
});})(g__50128__auto___50293))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50128__auto___50293){
return (function (args){
return cljs.core.deref.call(null,g__50128__auto___50293);
});})(g__50128__auto___50293))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__50128__auto___50293){
return (function (seq50251){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50251));
});})(g__50128__auto___50293))
;


var g__50128__auto___50297 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__50128__auto___50297){
return (function cljs$spec$impl$gen$int(var_args){
var args__39018__auto__ = [];
var len__39011__auto___50298 = arguments.length;
var i__39012__auto___50299 = (0);
while(true){
if((i__39012__auto___50299 < len__39011__auto___50298)){
args__39018__auto__.push((arguments[i__39012__auto___50299]));

var G__50300 = (i__39012__auto___50299 + (1));
i__39012__auto___50299 = G__50300;
continue;
} else {
}
break;
}

var argseq__39019__auto__ = ((((0) < args__39018__auto__.length))?(new cljs.core.IndexedSeq(args__39018__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__39019__auto__);
});})(g__50128__auto___50297))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50128__auto___50297){
return (function (args){
return cljs.core.deref.call(null,g__50128__auto___50297);
});})(g__50128__auto___50297))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__50128__auto___50297){
return (function (seq50252){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50252));
});})(g__50128__auto___50297))
;


var g__50128__auto___50301 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__50128__auto___50301){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__39018__auto__ = [];
var len__39011__auto___50302 = arguments.length;
var i__39012__auto___50303 = (0);
while(true){
if((i__39012__auto___50303 < len__39011__auto___50302)){
args__39018__auto__.push((arguments[i__39012__auto___50303]));

var G__50304 = (i__39012__auto___50303 + (1));
i__39012__auto___50303 = G__50304;
continue;
} else {
}
break;
}

var argseq__39019__auto__ = ((((0) < args__39018__auto__.length))?(new cljs.core.IndexedSeq(args__39018__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__39019__auto__);
});})(g__50128__auto___50301))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50128__auto___50301){
return (function (args){
return cljs.core.deref.call(null,g__50128__auto___50301);
});})(g__50128__auto___50301))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__50128__auto___50301){
return (function (seq50253){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50253));
});})(g__50128__auto___50301))
;


var g__50128__auto___50305 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__50128__auto___50305){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__39018__auto__ = [];
var len__39011__auto___50306 = arguments.length;
var i__39012__auto___50307 = (0);
while(true){
if((i__39012__auto___50307 < len__39011__auto___50306)){
args__39018__auto__.push((arguments[i__39012__auto___50307]));

var G__50308 = (i__39012__auto___50307 + (1));
i__39012__auto___50307 = G__50308;
continue;
} else {
}
break;
}

var argseq__39019__auto__ = ((((0) < args__39018__auto__.length))?(new cljs.core.IndexedSeq(args__39018__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__39019__auto__);
});})(g__50128__auto___50305))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50128__auto___50305){
return (function (args){
return cljs.core.deref.call(null,g__50128__auto___50305);
});})(g__50128__auto___50305))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__50128__auto___50305){
return (function (seq50254){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50254));
});})(g__50128__auto___50305))
;


var g__50128__auto___50309 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__50128__auto___50309){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__39018__auto__ = [];
var len__39011__auto___50310 = arguments.length;
var i__39012__auto___50311 = (0);
while(true){
if((i__39012__auto___50311 < len__39011__auto___50310)){
args__39018__auto__.push((arguments[i__39012__auto___50311]));

var G__50312 = (i__39012__auto___50311 + (1));
i__39012__auto___50311 = G__50312;
continue;
} else {
}
break;
}

var argseq__39019__auto__ = ((((0) < args__39018__auto__.length))?(new cljs.core.IndexedSeq(args__39018__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__39019__auto__);
});})(g__50128__auto___50309))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50128__auto___50309){
return (function (args){
return cljs.core.deref.call(null,g__50128__auto___50309);
});})(g__50128__auto___50309))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__50128__auto___50309){
return (function (seq50255){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50255));
});})(g__50128__auto___50309))
;


var g__50128__auto___50313 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__50128__auto___50313){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__39018__auto__ = [];
var len__39011__auto___50314 = arguments.length;
var i__39012__auto___50315 = (0);
while(true){
if((i__39012__auto___50315 < len__39011__auto___50314)){
args__39018__auto__.push((arguments[i__39012__auto___50315]));

var G__50316 = (i__39012__auto___50315 + (1));
i__39012__auto___50315 = G__50316;
continue;
} else {
}
break;
}

var argseq__39019__auto__ = ((((0) < args__39018__auto__.length))?(new cljs.core.IndexedSeq(args__39018__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__39019__auto__);
});})(g__50128__auto___50313))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50128__auto___50313){
return (function (args){
return cljs.core.deref.call(null,g__50128__auto___50313);
});})(g__50128__auto___50313))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__50128__auto___50313){
return (function (seq50256){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50256));
});})(g__50128__auto___50313))
;


var g__50128__auto___50317 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__50128__auto___50317){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__39018__auto__ = [];
var len__39011__auto___50318 = arguments.length;
var i__39012__auto___50319 = (0);
while(true){
if((i__39012__auto___50319 < len__39011__auto___50318)){
args__39018__auto__.push((arguments[i__39012__auto___50319]));

var G__50320 = (i__39012__auto___50319 + (1));
i__39012__auto___50319 = G__50320;
continue;
} else {
}
break;
}

var argseq__39019__auto__ = ((((0) < args__39018__auto__.length))?(new cljs.core.IndexedSeq(args__39018__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__39019__auto__);
});})(g__50128__auto___50317))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50128__auto___50317){
return (function (args){
return cljs.core.deref.call(null,g__50128__auto___50317);
});})(g__50128__auto___50317))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__50128__auto___50317){
return (function (seq50257){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50257));
});})(g__50128__auto___50317))
;


var g__50128__auto___50321 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__50128__auto___50321){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__39018__auto__ = [];
var len__39011__auto___50322 = arguments.length;
var i__39012__auto___50323 = (0);
while(true){
if((i__39012__auto___50323 < len__39011__auto___50322)){
args__39018__auto__.push((arguments[i__39012__auto___50323]));

var G__50324 = (i__39012__auto___50323 + (1));
i__39012__auto___50323 = G__50324;
continue;
} else {
}
break;
}

var argseq__39019__auto__ = ((((0) < args__39018__auto__.length))?(new cljs.core.IndexedSeq(args__39018__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__39019__auto__);
});})(g__50128__auto___50321))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50128__auto___50321){
return (function (args){
return cljs.core.deref.call(null,g__50128__auto___50321);
});})(g__50128__auto___50321))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__50128__auto___50321){
return (function (seq50258){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50258));
});})(g__50128__auto___50321))
;


var g__50128__auto___50325 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__50128__auto___50325){
return (function cljs$spec$impl$gen$string(var_args){
var args__39018__auto__ = [];
var len__39011__auto___50326 = arguments.length;
var i__39012__auto___50327 = (0);
while(true){
if((i__39012__auto___50327 < len__39011__auto___50326)){
args__39018__auto__.push((arguments[i__39012__auto___50327]));

var G__50328 = (i__39012__auto___50327 + (1));
i__39012__auto___50327 = G__50328;
continue;
} else {
}
break;
}

var argseq__39019__auto__ = ((((0) < args__39018__auto__.length))?(new cljs.core.IndexedSeq(args__39018__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__39019__auto__);
});})(g__50128__auto___50325))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50128__auto___50325){
return (function (args){
return cljs.core.deref.call(null,g__50128__auto___50325);
});})(g__50128__auto___50325))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__50128__auto___50325){
return (function (seq50259){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50259));
});})(g__50128__auto___50325))
;


var g__50128__auto___50329 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__50128__auto___50329){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__39018__auto__ = [];
var len__39011__auto___50330 = arguments.length;
var i__39012__auto___50331 = (0);
while(true){
if((i__39012__auto___50331 < len__39011__auto___50330)){
args__39018__auto__.push((arguments[i__39012__auto___50331]));

var G__50332 = (i__39012__auto___50331 + (1));
i__39012__auto___50331 = G__50332;
continue;
} else {
}
break;
}

var argseq__39019__auto__ = ((((0) < args__39018__auto__.length))?(new cljs.core.IndexedSeq(args__39018__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__39019__auto__);
});})(g__50128__auto___50329))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50128__auto___50329){
return (function (args){
return cljs.core.deref.call(null,g__50128__auto___50329);
});})(g__50128__auto___50329))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__50128__auto___50329){
return (function (seq50260){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50260));
});})(g__50128__auto___50329))
;


var g__50128__auto___50333 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__50128__auto___50333){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__39018__auto__ = [];
var len__39011__auto___50334 = arguments.length;
var i__39012__auto___50335 = (0);
while(true){
if((i__39012__auto___50335 < len__39011__auto___50334)){
args__39018__auto__.push((arguments[i__39012__auto___50335]));

var G__50336 = (i__39012__auto___50335 + (1));
i__39012__auto___50335 = G__50336;
continue;
} else {
}
break;
}

var argseq__39019__auto__ = ((((0) < args__39018__auto__.length))?(new cljs.core.IndexedSeq(args__39018__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__39019__auto__);
});})(g__50128__auto___50333))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50128__auto___50333){
return (function (args){
return cljs.core.deref.call(null,g__50128__auto___50333);
});})(g__50128__auto___50333))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__50128__auto___50333){
return (function (seq50261){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50261));
});})(g__50128__auto___50333))
;


var g__50128__auto___50337 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__50128__auto___50337){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__39018__auto__ = [];
var len__39011__auto___50338 = arguments.length;
var i__39012__auto___50339 = (0);
while(true){
if((i__39012__auto___50339 < len__39011__auto___50338)){
args__39018__auto__.push((arguments[i__39012__auto___50339]));

var G__50340 = (i__39012__auto___50339 + (1));
i__39012__auto___50339 = G__50340;
continue;
} else {
}
break;
}

var argseq__39019__auto__ = ((((0) < args__39018__auto__.length))?(new cljs.core.IndexedSeq(args__39018__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__39019__auto__);
});})(g__50128__auto___50337))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50128__auto___50337){
return (function (args){
return cljs.core.deref.call(null,g__50128__auto___50337);
});})(g__50128__auto___50337))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__50128__auto___50337){
return (function (seq50262){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50262));
});})(g__50128__auto___50337))
;


var g__50128__auto___50341 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__50128__auto___50341){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__39018__auto__ = [];
var len__39011__auto___50342 = arguments.length;
var i__39012__auto___50343 = (0);
while(true){
if((i__39012__auto___50343 < len__39011__auto___50342)){
args__39018__auto__.push((arguments[i__39012__auto___50343]));

var G__50344 = (i__39012__auto___50343 + (1));
i__39012__auto___50343 = G__50344;
continue;
} else {
}
break;
}

var argseq__39019__auto__ = ((((0) < args__39018__auto__.length))?(new cljs.core.IndexedSeq(args__39018__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__39019__auto__);
});})(g__50128__auto___50341))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50128__auto___50341){
return (function (args){
return cljs.core.deref.call(null,g__50128__auto___50341);
});})(g__50128__auto___50341))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__50128__auto___50341){
return (function (seq50263){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50263));
});})(g__50128__auto___50341))
;


var g__50128__auto___50345 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__50128__auto___50345){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__39018__auto__ = [];
var len__39011__auto___50346 = arguments.length;
var i__39012__auto___50347 = (0);
while(true){
if((i__39012__auto___50347 < len__39011__auto___50346)){
args__39018__auto__.push((arguments[i__39012__auto___50347]));

var G__50348 = (i__39012__auto___50347 + (1));
i__39012__auto___50347 = G__50348;
continue;
} else {
}
break;
}

var argseq__39019__auto__ = ((((0) < args__39018__auto__.length))?(new cljs.core.IndexedSeq(args__39018__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__39019__auto__);
});})(g__50128__auto___50345))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50128__auto___50345){
return (function (args){
return cljs.core.deref.call(null,g__50128__auto___50345);
});})(g__50128__auto___50345))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__50128__auto___50345){
return (function (seq50264){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50264));
});})(g__50128__auto___50345))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__39018__auto__ = [];
var len__39011__auto___50351 = arguments.length;
var i__39012__auto___50352 = (0);
while(true){
if((i__39012__auto___50352 < len__39011__auto___50351)){
args__39018__auto__.push((arguments[i__39012__auto___50352]));

var G__50353 = (i__39012__auto___50352 + (1));
i__39012__auto___50352 = G__50353;
continue;
} else {
}
break;
}

var argseq__39019__auto__ = ((((0) < args__39018__auto__.length))?(new cljs.core.IndexedSeq(args__39018__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__39019__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__50349_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__50349_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq50350){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50350));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__50354_SHARP_){
return (new Date(p1__50354_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
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

//# sourceMappingURL=gen.js.map