// Compiled by ClojureScript 1.9.293 {}
goog.provide('reagent.session');
goog.require('cljs.core');
goog.require('reagent.core');
reagent.session.state = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Returns a cursor from the state atom.
 */
reagent.session.cursor = (function reagent$session$cursor(ks){
return reagent.core.cursor.call(null,reagent.session.state,ks);
});
/**
 * Get the key's value from the session, returns nil if it doesn't exist.
 */
reagent.session.get = (function reagent$session$get(var_args){
var args__39351__auto__ = [];
var len__39344__auto___42182 = arguments.length;
var i__39345__auto___42183 = (0);
while(true){
if((i__39345__auto___42183 < len__39344__auto___42182)){
args__39351__auto__.push((arguments[i__39345__auto___42183]));

var G__42184 = (i__39345__auto___42183 + (1));
i__39345__auto___42183 = G__42184;
continue;
} else {
}
break;
}

var argseq__39352__auto__ = ((((1) < args__39351__auto__.length))?(new cljs.core.IndexedSeq(args__39351__auto__.slice((1)),(0),null)):null);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__39352__auto__);
});

reagent.session.get.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__42178){
var vec__42179 = p__42178;
var default$ = cljs.core.nth.call(null,vec__42179,(0),null);
var temp_a = reagent.session.cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null));
if(!((cljs.core.deref.call(null,temp_a) == null))){
return cljs.core.deref.call(null,temp_a);
} else {
return default$;
}
});

reagent.session.get.cljs$lang$maxFixedArity = (1);

reagent.session.get.cljs$lang$applyTo = (function (seq42176){
var G__42177 = cljs.core.first.call(null,seq42176);
var seq42176__$1 = cljs.core.next.call(null,seq42176);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic(G__42177,seq42176__$1);
});

reagent.session.put_BANG_ = (function reagent$session$put_BANG_(k,v){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.assoc,k,v);
});
/**
 * Gets the value at the path specified by the vector ks from the session,
 *   returns nil if it doesn't exist.
 */
reagent.session.get_in = (function reagent$session$get_in(var_args){
var args__39351__auto__ = [];
var len__39344__auto___42191 = arguments.length;
var i__39345__auto___42192 = (0);
while(true){
if((i__39345__auto___42192 < len__39344__auto___42191)){
args__39351__auto__.push((arguments[i__39345__auto___42192]));

var G__42193 = (i__39345__auto___42192 + (1));
i__39345__auto___42192 = G__42193;
continue;
} else {
}
break;
}

var argseq__39352__auto__ = ((((1) < args__39351__auto__.length))?(new cljs.core.IndexedSeq(args__39351__auto__.slice((1)),(0),null)):null);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__39352__auto__);
});

reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__42187){
var vec__42188 = p__42187;
var default$ = cljs.core.nth.call(null,vec__42188,(0),null);
var or__38236__auto__ = cljs.core.deref.call(null,reagent.session.cursor.call(null,ks));
if(cljs.core.truth_(or__38236__auto__)){
return or__38236__auto__;
} else {
return default$;
}
});

reagent.session.get_in.cljs$lang$maxFixedArity = (1);

reagent.session.get_in.cljs$lang$applyTo = (function (seq42185){
var G__42186 = cljs.core.first.call(null,seq42185);
var seq42185__$1 = cljs.core.next.call(null,seq42185);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic(G__42186,seq42185__$1);
});

/**
 * Replace the current session's value with the result of executing f with
 *   the current value and args.
 */
reagent.session.swap_BANG_ = (function reagent$session$swap_BANG_(var_args){
var args__39351__auto__ = [];
var len__39344__auto___42196 = arguments.length;
var i__39345__auto___42197 = (0);
while(true){
if((i__39345__auto___42197 < len__39344__auto___42196)){
args__39351__auto__.push((arguments[i__39345__auto___42197]));

var G__42198 = (i__39345__auto___42197 + (1));
i__39345__auto___42197 = G__42198;
continue;
} else {
}
break;
}

var argseq__39352__auto__ = ((((1) < args__39351__auto__.length))?(new cljs.core.IndexedSeq(args__39351__auto__.slice((1)),(0),null)):null);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__39352__auto__);
});

reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.call(null,cljs.core.swap_BANG_,reagent.session.state,f,args);
});

reagent.session.swap_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.swap_BANG_.cljs$lang$applyTo = (function (seq42194){
var G__42195 = cljs.core.first.call(null,seq42194);
var seq42194__$1 = cljs.core.next.call(null,seq42194);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__42195,seq42194__$1);
});

/**
 * Remove all data from the session and start over cleanly.
 */
reagent.session.clear_BANG_ = (function reagent$session$clear_BANG_(){
return cljs.core.reset_BANG_.call(null,reagent.session.state,cljs.core.PersistentArrayMap.EMPTY);
});
reagent.session.reset_BANG_ = (function reagent$session$reset_BANG_(m){
return cljs.core.reset_BANG_.call(null,reagent.session.state,m);
});
/**
 * Remove a key from the session
 */
reagent.session.remove_BANG_ = (function reagent$session$remove_BANG_(k){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.dissoc,k);
});
/**
 * Associates a value in the session, where ks is a
 * sequence of keys and v is the new value and returns
 * a new nested structure. If any levels do not exist,
 * hash-maps will be created.
 */
reagent.session.assoc_in_BANG_ = (function reagent$session$assoc_in_BANG_(ks,v){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.assoc_in,ks,v);
});
/**
 * Destructive get from the session. This returns the current value of the key
 *   and then removes it from the session.
 */
reagent.session.get_BANG_ = (function reagent$session$get_BANG_(var_args){
var args__39351__auto__ = [];
var len__39344__auto___42205 = arguments.length;
var i__39345__auto___42206 = (0);
while(true){
if((i__39345__auto___42206 < len__39344__auto___42205)){
args__39351__auto__.push((arguments[i__39345__auto___42206]));

var G__42207 = (i__39345__auto___42206 + (1));
i__39345__auto___42206 = G__42207;
continue;
} else {
}
break;
}

var argseq__39352__auto__ = ((((1) < args__39351__auto__.length))?(new cljs.core.IndexedSeq(args__39351__auto__.slice((1)),(0),null)):null);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__39352__auto__);
});

reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__42201){
var vec__42202 = p__42201;
var default$ = cljs.core.nth.call(null,vec__42202,(0),null);
var cur = reagent.session.get.call(null,k,default$);
reagent.session.remove_BANG_.call(null,k);

return cur;
});

reagent.session.get_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_BANG_.cljs$lang$applyTo = (function (seq42199){
var G__42200 = cljs.core.first.call(null,seq42199);
var seq42199__$1 = cljs.core.next.call(null,seq42199);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__42200,seq42199__$1);
});

/**
 * Destructive get from the session. This returns the current value of the path
 *   specified by the vector ks and then removes it from the session.
 */
reagent.session.get_in_BANG_ = (function reagent$session$get_in_BANG_(var_args){
var args__39351__auto__ = [];
var len__39344__auto___42214 = arguments.length;
var i__39345__auto___42215 = (0);
while(true){
if((i__39345__auto___42215 < len__39344__auto___42214)){
args__39351__auto__.push((arguments[i__39345__auto___42215]));

var G__42216 = (i__39345__auto___42215 + (1));
i__39345__auto___42215 = G__42216;
continue;
} else {
}
break;
}

var argseq__39352__auto__ = ((((1) < args__39351__auto__.length))?(new cljs.core.IndexedSeq(args__39351__auto__.slice((1)),(0),null)):null);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__39352__auto__);
});

reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__42210){
var vec__42211 = p__42210;
var default$ = cljs.core.nth.call(null,vec__42211,(0),null);
var cur = reagent.session.get_in.call(null,ks,default$);
reagent.session.assoc_in_BANG_.call(null,ks,null);

return cur;
});

reagent.session.get_in_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_in_BANG_.cljs$lang$applyTo = (function (seq42208){
var G__42209 = cljs.core.first.call(null,seq42208);
var seq42208__$1 = cljs.core.next.call(null,seq42208);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__42209,seq42208__$1);
});

/**
 * Updates a value in session where k is a key and f
 * is the function that takes the old value along with any
 * supplied args and return the new value. If key is not
 * present it will be added.
 */
reagent.session.update_BANG_ = (function reagent$session$update_BANG_(var_args){
var args__39351__auto__ = [];
var len__39344__auto___42221 = arguments.length;
var i__39345__auto___42222 = (0);
while(true){
if((i__39345__auto___42222 < len__39344__auto___42221)){
args__39351__auto__.push((arguments[i__39345__auto___42222]));

var G__42223 = (i__39345__auto___42222 + (1));
i__39345__auto___42222 = G__42223;
continue;
} else {
}
break;
}

var argseq__39352__auto__ = ((((2) < args__39351__auto__.length))?(new cljs.core.IndexedSeq(args__39351__auto__.slice((2)),(0),null)):null);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__39352__auto__);
});

reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,f,args){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__42217_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update,p1__42217_SHARP_,k,f),args);
}));
});

reagent.session.update_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_BANG_.cljs$lang$applyTo = (function (seq42218){
var G__42219 = cljs.core.first.call(null,seq42218);
var seq42218__$1 = cljs.core.next.call(null,seq42218);
var G__42220 = cljs.core.first.call(null,seq42218__$1);
var seq42218__$2 = cljs.core.next.call(null,seq42218__$1);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__42219,G__42220,seq42218__$2);
});

/**
 * 'Updates a value in the session, where ks is a
 * sequence of keys and f is a function that will
 * take the old value along with any supplied args and return
 * the new value. If any levels do not exist, hash-maps
 * will be created.
 */
reagent.session.update_in_BANG_ = (function reagent$session$update_in_BANG_(var_args){
var args__39351__auto__ = [];
var len__39344__auto___42228 = arguments.length;
var i__39345__auto___42229 = (0);
while(true){
if((i__39345__auto___42229 < len__39344__auto___42228)){
args__39351__auto__.push((arguments[i__39345__auto___42229]));

var G__42230 = (i__39345__auto___42229 + (1));
i__39345__auto___42229 = G__42230;
continue;
} else {
}
break;
}

var argseq__39352__auto__ = ((((2) < args__39351__auto__.length))?(new cljs.core.IndexedSeq(args__39351__auto__.slice((2)),(0),null)):null);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__39352__auto__);
});

reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,f,args){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__42224_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update_in,p1__42224_SHARP_,ks,f),args);
}));
});

reagent.session.update_in_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_in_BANG_.cljs$lang$applyTo = (function (seq42225){
var G__42226 = cljs.core.first.call(null,seq42225);
var seq42225__$1 = cljs.core.next.call(null,seq42225);
var G__42227 = cljs.core.first.call(null,seq42225__$1);
var seq42225__$2 = cljs.core.next.call(null,seq42225__$1);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__42226,G__42227,seq42225__$2);
});


//# sourceMappingURL=session.js.map