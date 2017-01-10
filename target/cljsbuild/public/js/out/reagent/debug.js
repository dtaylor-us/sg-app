// Compiled by ClojureScript 1.9.293 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__43353__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__43353 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43354__i = 0, G__43354__a = new Array(arguments.length -  0);
while (G__43354__i < G__43354__a.length) {G__43354__a[G__43354__i] = arguments[G__43354__i + 0]; ++G__43354__i;}
  args = new cljs.core.IndexedSeq(G__43354__a,0);
} 
return G__43353__delegate.call(this,args);};
G__43353.cljs$lang$maxFixedArity = 0;
G__43353.cljs$lang$applyTo = (function (arglist__43355){
var args = cljs.core.seq(arglist__43355);
return G__43353__delegate(args);
});
G__43353.cljs$core$IFn$_invoke$arity$variadic = G__43353__delegate;
return G__43353;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__43356__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__43356 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43357__i = 0, G__43357__a = new Array(arguments.length -  0);
while (G__43357__i < G__43357__a.length) {G__43357__a[G__43357__i] = arguments[G__43357__i + 0]; ++G__43357__i;}
  args = new cljs.core.IndexedSeq(G__43357__a,0);
} 
return G__43356__delegate.call(this,args);};
G__43356.cljs$lang$maxFixedArity = 0;
G__43356.cljs$lang$applyTo = (function (arglist__43358){
var args = cljs.core.seq(arglist__43358);
return G__43356__delegate(args);
});
G__43356.cljs$core$IFn$_invoke$arity$variadic = G__43356__delegate;
return G__43356;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map