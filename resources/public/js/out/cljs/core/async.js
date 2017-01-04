// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args38995 = [];
var len__37853__auto___39001 = arguments.length;
var i__37854__auto___39002 = (0);
while(true){
if((i__37854__auto___39002 < len__37853__auto___39001)){
args38995.push((arguments[i__37854__auto___39002]));

var G__39003 = (i__37854__auto___39002 + (1));
i__37854__auto___39002 = G__39003;
continue;
} else {
}
break;
}

var G__38997 = args38995.length;
switch (G__38997) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38995.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async38998 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38998 = (function (f,blockable,meta38999){
this.f = f;
this.blockable = blockable;
this.meta38999 = meta38999;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async38998.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39000,meta38999__$1){
var self__ = this;
var _39000__$1 = this;
return (new cljs.core.async.t_cljs$core$async38998(self__.f,self__.blockable,meta38999__$1));
});

cljs.core.async.t_cljs$core$async38998.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39000){
var self__ = this;
var _39000__$1 = this;
return self__.meta38999;
});

cljs.core.async.t_cljs$core$async38998.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async38998.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async38998.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async38998.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async38998.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta38999","meta38999",310879177,null)], null);
});

cljs.core.async.t_cljs$core$async38998.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38998.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38998";

cljs.core.async.t_cljs$core$async38998.cljs$lang$ctorPrWriter = (function (this__37384__auto__,writer__37385__auto__,opt__37386__auto__){
return cljs.core._write.call(null,writer__37385__auto__,"cljs.core.async/t_cljs$core$async38998");
});

cljs.core.async.__GT_t_cljs$core$async38998 = (function cljs$core$async$__GT_t_cljs$core$async38998(f__$1,blockable__$1,meta38999){
return (new cljs.core.async.t_cljs$core$async38998(f__$1,blockable__$1,meta38999));
});

}

return (new cljs.core.async.t_cljs$core$async38998(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args39007 = [];
var len__37853__auto___39010 = arguments.length;
var i__37854__auto___39011 = (0);
while(true){
if((i__37854__auto___39011 < len__37853__auto___39010)){
args39007.push((arguments[i__37854__auto___39011]));

var G__39012 = (i__37854__auto___39011 + (1));
i__37854__auto___39011 = G__39012;
continue;
} else {
}
break;
}

var G__39009 = args39007.length;
switch (G__39009) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39007.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args39014 = [];
var len__37853__auto___39017 = arguments.length;
var i__37854__auto___39018 = (0);
while(true){
if((i__37854__auto___39018 < len__37853__auto___39017)){
args39014.push((arguments[i__37854__auto___39018]));

var G__39019 = (i__37854__auto___39018 + (1));
i__37854__auto___39018 = G__39019;
continue;
} else {
}
break;
}

var G__39016 = args39014.length;
switch (G__39016) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39014.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args39021 = [];
var len__37853__auto___39024 = arguments.length;
var i__37854__auto___39025 = (0);
while(true){
if((i__37854__auto___39025 < len__37853__auto___39024)){
args39021.push((arguments[i__37854__auto___39025]));

var G__39026 = (i__37854__auto___39025 + (1));
i__37854__auto___39025 = G__39026;
continue;
} else {
}
break;
}

var G__39023 = args39021.length;
switch (G__39023) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39021.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_39028 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_39028);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_39028,ret){
return (function (){
return fn1.call(null,val_39028);
});})(val_39028,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args39029 = [];
var len__37853__auto___39032 = arguments.length;
var i__37854__auto___39033 = (0);
while(true){
if((i__37854__auto___39033 < len__37853__auto___39032)){
args39029.push((arguments[i__37854__auto___39033]));

var G__39034 = (i__37854__auto___39033 + (1));
i__37854__auto___39033 = G__39034;
continue;
} else {
}
break;
}

var G__39031 = args39029.length;
switch (G__39031) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39029.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__37693__auto___39036 = n;
var x_39037 = (0);
while(true){
if((x_39037 < n__37693__auto___39036)){
(a[x_39037] = (0));

var G__39038 = (x_39037 + (1));
x_39037 = G__39038;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__39039 = (i + (1));
i = G__39039;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async39043 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39043 = (function (alt_flag,flag,meta39044){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta39044 = meta39044;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async39043.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_39045,meta39044__$1){
var self__ = this;
var _39045__$1 = this;
return (new cljs.core.async.t_cljs$core$async39043(self__.alt_flag,self__.flag,meta39044__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async39043.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_39045){
var self__ = this;
var _39045__$1 = this;
return self__.meta39044;
});})(flag))
;

cljs.core.async.t_cljs$core$async39043.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async39043.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async39043.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async39043.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async39043.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta39044","meta39044",-619688672,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async39043.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39043.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39043";

cljs.core.async.t_cljs$core$async39043.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__37384__auto__,writer__37385__auto__,opt__37386__auto__){
return cljs.core._write.call(null,writer__37385__auto__,"cljs.core.async/t_cljs$core$async39043");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async39043 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async39043(alt_flag__$1,flag__$1,meta39044){
return (new cljs.core.async.t_cljs$core$async39043(alt_flag__$1,flag__$1,meta39044));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async39043(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async39049 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39049 = (function (alt_handler,flag,cb,meta39050){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta39050 = meta39050;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async39049.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39051,meta39050__$1){
var self__ = this;
var _39051__$1 = this;
return (new cljs.core.async.t_cljs$core$async39049(self__.alt_handler,self__.flag,self__.cb,meta39050__$1));
});

cljs.core.async.t_cljs$core$async39049.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39051){
var self__ = this;
var _39051__$1 = this;
return self__.meta39050;
});

cljs.core.async.t_cljs$core$async39049.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async39049.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async39049.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async39049.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async39049.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta39050","meta39050",-928796361,null)], null);
});

cljs.core.async.t_cljs$core$async39049.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39049.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39049";

cljs.core.async.t_cljs$core$async39049.cljs$lang$ctorPrWriter = (function (this__37384__auto__,writer__37385__auto__,opt__37386__auto__){
return cljs.core._write.call(null,writer__37385__auto__,"cljs.core.async/t_cljs$core$async39049");
});

cljs.core.async.__GT_t_cljs$core$async39049 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async39049(alt_handler__$1,flag__$1,cb__$1,meta39050){
return (new cljs.core.async.t_cljs$core$async39049(alt_handler__$1,flag__$1,cb__$1,meta39050));
});

}

return (new cljs.core.async.t_cljs$core$async39049(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__39052_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__39052_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__39053_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__39053_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__36778__auto__ = wport;
if(cljs.core.truth_(or__36778__auto__)){
return or__36778__auto__;
} else {
return port;
}
})()], null));
} else {
var G__39054 = (i + (1));
i = G__39054;
continue;
}
} else {
return null;
}
break;
}
})();
var or__36778__auto__ = ret;
if(cljs.core.truth_(or__36778__auto__)){
return or__36778__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__36766__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__36766__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__36766__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__37860__auto__ = [];
var len__37853__auto___39060 = arguments.length;
var i__37854__auto___39061 = (0);
while(true){
if((i__37854__auto___39061 < len__37853__auto___39060)){
args__37860__auto__.push((arguments[i__37854__auto___39061]));

var G__39062 = (i__37854__auto___39061 + (1));
i__37854__auto___39061 = G__39062;
continue;
} else {
}
break;
}

var argseq__37861__auto__ = ((((1) < args__37860__auto__.length))?(new cljs.core.IndexedSeq(args__37860__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37861__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__39057){
var map__39058 = p__39057;
var map__39058__$1 = ((((!((map__39058 == null)))?((((map__39058.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39058.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39058):map__39058);
var opts = map__39058__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq39055){
var G__39056 = cljs.core.first.call(null,seq39055);
var seq39055__$1 = cljs.core.next.call(null,seq39055);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__39056,seq39055__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args39063 = [];
var len__37853__auto___39113 = arguments.length;
var i__37854__auto___39114 = (0);
while(true){
if((i__37854__auto___39114 < len__37853__auto___39113)){
args39063.push((arguments[i__37854__auto___39114]));

var G__39115 = (i__37854__auto___39114 + (1));
i__37854__auto___39114 = G__39115;
continue;
} else {
}
break;
}

var G__39065 = args39063.length;
switch (G__39065) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39063.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__38950__auto___39117 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38950__auto___39117){
return (function (){
var f__38951__auto__ = (function (){var switch__38796__auto__ = ((function (c__38950__auto___39117){
return (function (state_39089){
var state_val_39090 = (state_39089[(1)]);
if((state_val_39090 === (7))){
var inst_39085 = (state_39089[(2)]);
var state_39089__$1 = state_39089;
var statearr_39091_39118 = state_39089__$1;
(statearr_39091_39118[(2)] = inst_39085);

(statearr_39091_39118[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39090 === (1))){
var state_39089__$1 = state_39089;
var statearr_39092_39119 = state_39089__$1;
(statearr_39092_39119[(2)] = null);

(statearr_39092_39119[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39090 === (4))){
var inst_39068 = (state_39089[(7)]);
var inst_39068__$1 = (state_39089[(2)]);
var inst_39069 = (inst_39068__$1 == null);
var state_39089__$1 = (function (){var statearr_39093 = state_39089;
(statearr_39093[(7)] = inst_39068__$1);

return statearr_39093;
})();
if(cljs.core.truth_(inst_39069)){
var statearr_39094_39120 = state_39089__$1;
(statearr_39094_39120[(1)] = (5));

} else {
var statearr_39095_39121 = state_39089__$1;
(statearr_39095_39121[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39090 === (13))){
var state_39089__$1 = state_39089;
var statearr_39096_39122 = state_39089__$1;
(statearr_39096_39122[(2)] = null);

(statearr_39096_39122[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39090 === (6))){
var inst_39068 = (state_39089[(7)]);
var state_39089__$1 = state_39089;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39089__$1,(11),to,inst_39068);
} else {
if((state_val_39090 === (3))){
var inst_39087 = (state_39089[(2)]);
var state_39089__$1 = state_39089;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39089__$1,inst_39087);
} else {
if((state_val_39090 === (12))){
var state_39089__$1 = state_39089;
var statearr_39097_39123 = state_39089__$1;
(statearr_39097_39123[(2)] = null);

(statearr_39097_39123[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39090 === (2))){
var state_39089__$1 = state_39089;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39089__$1,(4),from);
} else {
if((state_val_39090 === (11))){
var inst_39078 = (state_39089[(2)]);
var state_39089__$1 = state_39089;
if(cljs.core.truth_(inst_39078)){
var statearr_39098_39124 = state_39089__$1;
(statearr_39098_39124[(1)] = (12));

} else {
var statearr_39099_39125 = state_39089__$1;
(statearr_39099_39125[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39090 === (9))){
var state_39089__$1 = state_39089;
var statearr_39100_39126 = state_39089__$1;
(statearr_39100_39126[(2)] = null);

(statearr_39100_39126[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39090 === (5))){
var state_39089__$1 = state_39089;
if(cljs.core.truth_(close_QMARK_)){
var statearr_39101_39127 = state_39089__$1;
(statearr_39101_39127[(1)] = (8));

} else {
var statearr_39102_39128 = state_39089__$1;
(statearr_39102_39128[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39090 === (14))){
var inst_39083 = (state_39089[(2)]);
var state_39089__$1 = state_39089;
var statearr_39103_39129 = state_39089__$1;
(statearr_39103_39129[(2)] = inst_39083);

(statearr_39103_39129[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39090 === (10))){
var inst_39075 = (state_39089[(2)]);
var state_39089__$1 = state_39089;
var statearr_39104_39130 = state_39089__$1;
(statearr_39104_39130[(2)] = inst_39075);

(statearr_39104_39130[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39090 === (8))){
var inst_39072 = cljs.core.async.close_BANG_.call(null,to);
var state_39089__$1 = state_39089;
var statearr_39105_39131 = state_39089__$1;
(statearr_39105_39131[(2)] = inst_39072);

(statearr_39105_39131[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__38950__auto___39117))
;
return ((function (switch__38796__auto__,c__38950__auto___39117){
return (function() {
var cljs$core$async$state_machine__38797__auto__ = null;
var cljs$core$async$state_machine__38797__auto____0 = (function (){
var statearr_39109 = [null,null,null,null,null,null,null,null];
(statearr_39109[(0)] = cljs$core$async$state_machine__38797__auto__);

(statearr_39109[(1)] = (1));

return statearr_39109;
});
var cljs$core$async$state_machine__38797__auto____1 = (function (state_39089){
while(true){
var ret_value__38798__auto__ = (function (){try{while(true){
var result__38799__auto__ = switch__38796__auto__.call(null,state_39089);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38799__auto__;
}
break;
}
}catch (e39110){if((e39110 instanceof Object)){
var ex__38800__auto__ = e39110;
var statearr_39111_39132 = state_39089;
(statearr_39111_39132[(5)] = ex__38800__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39089);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39110;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39133 = state_39089;
state_39089 = G__39133;
continue;
} else {
return ret_value__38798__auto__;
}
break;
}
});
cljs$core$async$state_machine__38797__auto__ = function(state_39089){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38797__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38797__auto____1.call(this,state_39089);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38797__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38797__auto____0;
cljs$core$async$state_machine__38797__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38797__auto____1;
return cljs$core$async$state_machine__38797__auto__;
})()
;})(switch__38796__auto__,c__38950__auto___39117))
})();
var state__38952__auto__ = (function (){var statearr_39112 = f__38951__auto__.call(null);
(statearr_39112[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38950__auto___39117);

return statearr_39112;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38952__auto__);
});})(c__38950__auto___39117))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__39321){
var vec__39322 = p__39321;
var v = cljs.core.nth.call(null,vec__39322,(0),null);
var p = cljs.core.nth.call(null,vec__39322,(1),null);
var job = vec__39322;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__38950__auto___39508 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38950__auto___39508,res,vec__39322,v,p,job,jobs,results){
return (function (){
var f__38951__auto__ = (function (){var switch__38796__auto__ = ((function (c__38950__auto___39508,res,vec__39322,v,p,job,jobs,results){
return (function (state_39329){
var state_val_39330 = (state_39329[(1)]);
if((state_val_39330 === (1))){
var state_39329__$1 = state_39329;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39329__$1,(2),res,v);
} else {
if((state_val_39330 === (2))){
var inst_39326 = (state_39329[(2)]);
var inst_39327 = cljs.core.async.close_BANG_.call(null,res);
var state_39329__$1 = (function (){var statearr_39331 = state_39329;
(statearr_39331[(7)] = inst_39326);

return statearr_39331;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39329__$1,inst_39327);
} else {
return null;
}
}
});})(c__38950__auto___39508,res,vec__39322,v,p,job,jobs,results))
;
return ((function (switch__38796__auto__,c__38950__auto___39508,res,vec__39322,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__38797__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38797__auto____0 = (function (){
var statearr_39335 = [null,null,null,null,null,null,null,null];
(statearr_39335[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38797__auto__);

(statearr_39335[(1)] = (1));

return statearr_39335;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38797__auto____1 = (function (state_39329){
while(true){
var ret_value__38798__auto__ = (function (){try{while(true){
var result__38799__auto__ = switch__38796__auto__.call(null,state_39329);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38799__auto__;
}
break;
}
}catch (e39336){if((e39336 instanceof Object)){
var ex__38800__auto__ = e39336;
var statearr_39337_39509 = state_39329;
(statearr_39337_39509[(5)] = ex__38800__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39329);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39336;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39510 = state_39329;
state_39329 = G__39510;
continue;
} else {
return ret_value__38798__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38797__auto__ = function(state_39329){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38797__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38797__auto____1.call(this,state_39329);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__38797__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38797__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38797__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38797__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38797__auto__;
})()
;})(switch__38796__auto__,c__38950__auto___39508,res,vec__39322,v,p,job,jobs,results))
})();
var state__38952__auto__ = (function (){var statearr_39338 = f__38951__auto__.call(null);
(statearr_39338[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38950__auto___39508);

return statearr_39338;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38952__auto__);
});})(c__38950__auto___39508,res,vec__39322,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__39339){
var vec__39340 = p__39339;
var v = cljs.core.nth.call(null,vec__39340,(0),null);
var p = cljs.core.nth.call(null,vec__39340,(1),null);
var job = vec__39340;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__37693__auto___39511 = n;
var __39512 = (0);
while(true){
if((__39512 < n__37693__auto___39511)){
var G__39343_39513 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__39343_39513) {
case "compute":
var c__38950__auto___39515 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__39512,c__38950__auto___39515,G__39343_39513,n__37693__auto___39511,jobs,results,process,async){
return (function (){
var f__38951__auto__ = (function (){var switch__38796__auto__ = ((function (__39512,c__38950__auto___39515,G__39343_39513,n__37693__auto___39511,jobs,results,process,async){
return (function (state_39356){
var state_val_39357 = (state_39356[(1)]);
if((state_val_39357 === (1))){
var state_39356__$1 = state_39356;
var statearr_39358_39516 = state_39356__$1;
(statearr_39358_39516[(2)] = null);

(statearr_39358_39516[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39357 === (2))){
var state_39356__$1 = state_39356;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39356__$1,(4),jobs);
} else {
if((state_val_39357 === (3))){
var inst_39354 = (state_39356[(2)]);
var state_39356__$1 = state_39356;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39356__$1,inst_39354);
} else {
if((state_val_39357 === (4))){
var inst_39346 = (state_39356[(2)]);
var inst_39347 = process.call(null,inst_39346);
var state_39356__$1 = state_39356;
if(cljs.core.truth_(inst_39347)){
var statearr_39359_39517 = state_39356__$1;
(statearr_39359_39517[(1)] = (5));

} else {
var statearr_39360_39518 = state_39356__$1;
(statearr_39360_39518[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39357 === (5))){
var state_39356__$1 = state_39356;
var statearr_39361_39519 = state_39356__$1;
(statearr_39361_39519[(2)] = null);

(statearr_39361_39519[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39357 === (6))){
var state_39356__$1 = state_39356;
var statearr_39362_39520 = state_39356__$1;
(statearr_39362_39520[(2)] = null);

(statearr_39362_39520[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39357 === (7))){
var inst_39352 = (state_39356[(2)]);
var state_39356__$1 = state_39356;
var statearr_39363_39521 = state_39356__$1;
(statearr_39363_39521[(2)] = inst_39352);

(statearr_39363_39521[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__39512,c__38950__auto___39515,G__39343_39513,n__37693__auto___39511,jobs,results,process,async))
;
return ((function (__39512,switch__38796__auto__,c__38950__auto___39515,G__39343_39513,n__37693__auto___39511,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__38797__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38797__auto____0 = (function (){
var statearr_39367 = [null,null,null,null,null,null,null];
(statearr_39367[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38797__auto__);

(statearr_39367[(1)] = (1));

return statearr_39367;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38797__auto____1 = (function (state_39356){
while(true){
var ret_value__38798__auto__ = (function (){try{while(true){
var result__38799__auto__ = switch__38796__auto__.call(null,state_39356);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38799__auto__;
}
break;
}
}catch (e39368){if((e39368 instanceof Object)){
var ex__38800__auto__ = e39368;
var statearr_39369_39522 = state_39356;
(statearr_39369_39522[(5)] = ex__38800__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39356);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39368;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39523 = state_39356;
state_39356 = G__39523;
continue;
} else {
return ret_value__38798__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38797__auto__ = function(state_39356){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38797__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38797__auto____1.call(this,state_39356);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__38797__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38797__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38797__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38797__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38797__auto__;
})()
;})(__39512,switch__38796__auto__,c__38950__auto___39515,G__39343_39513,n__37693__auto___39511,jobs,results,process,async))
})();
var state__38952__auto__ = (function (){var statearr_39370 = f__38951__auto__.call(null);
(statearr_39370[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38950__auto___39515);

return statearr_39370;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38952__auto__);
});})(__39512,c__38950__auto___39515,G__39343_39513,n__37693__auto___39511,jobs,results,process,async))
);


break;
case "async":
var c__38950__auto___39524 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__39512,c__38950__auto___39524,G__39343_39513,n__37693__auto___39511,jobs,results,process,async){
return (function (){
var f__38951__auto__ = (function (){var switch__38796__auto__ = ((function (__39512,c__38950__auto___39524,G__39343_39513,n__37693__auto___39511,jobs,results,process,async){
return (function (state_39383){
var state_val_39384 = (state_39383[(1)]);
if((state_val_39384 === (1))){
var state_39383__$1 = state_39383;
var statearr_39385_39525 = state_39383__$1;
(statearr_39385_39525[(2)] = null);

(statearr_39385_39525[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39384 === (2))){
var state_39383__$1 = state_39383;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39383__$1,(4),jobs);
} else {
if((state_val_39384 === (3))){
var inst_39381 = (state_39383[(2)]);
var state_39383__$1 = state_39383;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39383__$1,inst_39381);
} else {
if((state_val_39384 === (4))){
var inst_39373 = (state_39383[(2)]);
var inst_39374 = async.call(null,inst_39373);
var state_39383__$1 = state_39383;
if(cljs.core.truth_(inst_39374)){
var statearr_39386_39526 = state_39383__$1;
(statearr_39386_39526[(1)] = (5));

} else {
var statearr_39387_39527 = state_39383__$1;
(statearr_39387_39527[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39384 === (5))){
var state_39383__$1 = state_39383;
var statearr_39388_39528 = state_39383__$1;
(statearr_39388_39528[(2)] = null);

(statearr_39388_39528[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39384 === (6))){
var state_39383__$1 = state_39383;
var statearr_39389_39529 = state_39383__$1;
(statearr_39389_39529[(2)] = null);

(statearr_39389_39529[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39384 === (7))){
var inst_39379 = (state_39383[(2)]);
var state_39383__$1 = state_39383;
var statearr_39390_39530 = state_39383__$1;
(statearr_39390_39530[(2)] = inst_39379);

(statearr_39390_39530[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__39512,c__38950__auto___39524,G__39343_39513,n__37693__auto___39511,jobs,results,process,async))
;
return ((function (__39512,switch__38796__auto__,c__38950__auto___39524,G__39343_39513,n__37693__auto___39511,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__38797__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38797__auto____0 = (function (){
var statearr_39394 = [null,null,null,null,null,null,null];
(statearr_39394[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38797__auto__);

(statearr_39394[(1)] = (1));

return statearr_39394;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38797__auto____1 = (function (state_39383){
while(true){
var ret_value__38798__auto__ = (function (){try{while(true){
var result__38799__auto__ = switch__38796__auto__.call(null,state_39383);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38799__auto__;
}
break;
}
}catch (e39395){if((e39395 instanceof Object)){
var ex__38800__auto__ = e39395;
var statearr_39396_39531 = state_39383;
(statearr_39396_39531[(5)] = ex__38800__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39383);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39395;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39532 = state_39383;
state_39383 = G__39532;
continue;
} else {
return ret_value__38798__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38797__auto__ = function(state_39383){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38797__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38797__auto____1.call(this,state_39383);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__38797__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38797__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38797__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38797__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38797__auto__;
})()
;})(__39512,switch__38796__auto__,c__38950__auto___39524,G__39343_39513,n__37693__auto___39511,jobs,results,process,async))
})();
var state__38952__auto__ = (function (){var statearr_39397 = f__38951__auto__.call(null);
(statearr_39397[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38950__auto___39524);

return statearr_39397;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38952__auto__);
});})(__39512,c__38950__auto___39524,G__39343_39513,n__37693__auto___39511,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__39533 = (__39512 + (1));
__39512 = G__39533;
continue;
} else {
}
break;
}

var c__38950__auto___39534 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38950__auto___39534,jobs,results,process,async){
return (function (){
var f__38951__auto__ = (function (){var switch__38796__auto__ = ((function (c__38950__auto___39534,jobs,results,process,async){
return (function (state_39419){
var state_val_39420 = (state_39419[(1)]);
if((state_val_39420 === (1))){
var state_39419__$1 = state_39419;
var statearr_39421_39535 = state_39419__$1;
(statearr_39421_39535[(2)] = null);

(statearr_39421_39535[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39420 === (2))){
var state_39419__$1 = state_39419;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39419__$1,(4),from);
} else {
if((state_val_39420 === (3))){
var inst_39417 = (state_39419[(2)]);
var state_39419__$1 = state_39419;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39419__$1,inst_39417);
} else {
if((state_val_39420 === (4))){
var inst_39400 = (state_39419[(7)]);
var inst_39400__$1 = (state_39419[(2)]);
var inst_39401 = (inst_39400__$1 == null);
var state_39419__$1 = (function (){var statearr_39422 = state_39419;
(statearr_39422[(7)] = inst_39400__$1);

return statearr_39422;
})();
if(cljs.core.truth_(inst_39401)){
var statearr_39423_39536 = state_39419__$1;
(statearr_39423_39536[(1)] = (5));

} else {
var statearr_39424_39537 = state_39419__$1;
(statearr_39424_39537[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39420 === (5))){
var inst_39403 = cljs.core.async.close_BANG_.call(null,jobs);
var state_39419__$1 = state_39419;
var statearr_39425_39538 = state_39419__$1;
(statearr_39425_39538[(2)] = inst_39403);

(statearr_39425_39538[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39420 === (6))){
var inst_39400 = (state_39419[(7)]);
var inst_39405 = (state_39419[(8)]);
var inst_39405__$1 = cljs.core.async.chan.call(null,(1));
var inst_39406 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_39407 = [inst_39400,inst_39405__$1];
var inst_39408 = (new cljs.core.PersistentVector(null,2,(5),inst_39406,inst_39407,null));
var state_39419__$1 = (function (){var statearr_39426 = state_39419;
(statearr_39426[(8)] = inst_39405__$1);

return statearr_39426;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39419__$1,(8),jobs,inst_39408);
} else {
if((state_val_39420 === (7))){
var inst_39415 = (state_39419[(2)]);
var state_39419__$1 = state_39419;
var statearr_39427_39539 = state_39419__$1;
(statearr_39427_39539[(2)] = inst_39415);

(statearr_39427_39539[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39420 === (8))){
var inst_39405 = (state_39419[(8)]);
var inst_39410 = (state_39419[(2)]);
var state_39419__$1 = (function (){var statearr_39428 = state_39419;
(statearr_39428[(9)] = inst_39410);

return statearr_39428;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39419__$1,(9),results,inst_39405);
} else {
if((state_val_39420 === (9))){
var inst_39412 = (state_39419[(2)]);
var state_39419__$1 = (function (){var statearr_39429 = state_39419;
(statearr_39429[(10)] = inst_39412);

return statearr_39429;
})();
var statearr_39430_39540 = state_39419__$1;
(statearr_39430_39540[(2)] = null);

(statearr_39430_39540[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__38950__auto___39534,jobs,results,process,async))
;
return ((function (switch__38796__auto__,c__38950__auto___39534,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__38797__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38797__auto____0 = (function (){
var statearr_39434 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39434[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38797__auto__);

(statearr_39434[(1)] = (1));

return statearr_39434;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38797__auto____1 = (function (state_39419){
while(true){
var ret_value__38798__auto__ = (function (){try{while(true){
var result__38799__auto__ = switch__38796__auto__.call(null,state_39419);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38799__auto__;
}
break;
}
}catch (e39435){if((e39435 instanceof Object)){
var ex__38800__auto__ = e39435;
var statearr_39436_39541 = state_39419;
(statearr_39436_39541[(5)] = ex__38800__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39419);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39435;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39542 = state_39419;
state_39419 = G__39542;
continue;
} else {
return ret_value__38798__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38797__auto__ = function(state_39419){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38797__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38797__auto____1.call(this,state_39419);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__38797__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38797__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38797__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38797__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38797__auto__;
})()
;})(switch__38796__auto__,c__38950__auto___39534,jobs,results,process,async))
})();
var state__38952__auto__ = (function (){var statearr_39437 = f__38951__auto__.call(null);
(statearr_39437[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38950__auto___39534);

return statearr_39437;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38952__auto__);
});})(c__38950__auto___39534,jobs,results,process,async))
);


var c__38950__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38950__auto__,jobs,results,process,async){
return (function (){
var f__38951__auto__ = (function (){var switch__38796__auto__ = ((function (c__38950__auto__,jobs,results,process,async){
return (function (state_39475){
var state_val_39476 = (state_39475[(1)]);
if((state_val_39476 === (7))){
var inst_39471 = (state_39475[(2)]);
var state_39475__$1 = state_39475;
var statearr_39477_39543 = state_39475__$1;
(statearr_39477_39543[(2)] = inst_39471);

(statearr_39477_39543[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39476 === (20))){
var state_39475__$1 = state_39475;
var statearr_39478_39544 = state_39475__$1;
(statearr_39478_39544[(2)] = null);

(statearr_39478_39544[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39476 === (1))){
var state_39475__$1 = state_39475;
var statearr_39479_39545 = state_39475__$1;
(statearr_39479_39545[(2)] = null);

(statearr_39479_39545[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39476 === (4))){
var inst_39440 = (state_39475[(7)]);
var inst_39440__$1 = (state_39475[(2)]);
var inst_39441 = (inst_39440__$1 == null);
var state_39475__$1 = (function (){var statearr_39480 = state_39475;
(statearr_39480[(7)] = inst_39440__$1);

return statearr_39480;
})();
if(cljs.core.truth_(inst_39441)){
var statearr_39481_39546 = state_39475__$1;
(statearr_39481_39546[(1)] = (5));

} else {
var statearr_39482_39547 = state_39475__$1;
(statearr_39482_39547[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39476 === (15))){
var inst_39453 = (state_39475[(8)]);
var state_39475__$1 = state_39475;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39475__$1,(18),to,inst_39453);
} else {
if((state_val_39476 === (21))){
var inst_39466 = (state_39475[(2)]);
var state_39475__$1 = state_39475;
var statearr_39483_39548 = state_39475__$1;
(statearr_39483_39548[(2)] = inst_39466);

(statearr_39483_39548[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39476 === (13))){
var inst_39468 = (state_39475[(2)]);
var state_39475__$1 = (function (){var statearr_39484 = state_39475;
(statearr_39484[(9)] = inst_39468);

return statearr_39484;
})();
var statearr_39485_39549 = state_39475__$1;
(statearr_39485_39549[(2)] = null);

(statearr_39485_39549[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39476 === (6))){
var inst_39440 = (state_39475[(7)]);
var state_39475__$1 = state_39475;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39475__$1,(11),inst_39440);
} else {
if((state_val_39476 === (17))){
var inst_39461 = (state_39475[(2)]);
var state_39475__$1 = state_39475;
if(cljs.core.truth_(inst_39461)){
var statearr_39486_39550 = state_39475__$1;
(statearr_39486_39550[(1)] = (19));

} else {
var statearr_39487_39551 = state_39475__$1;
(statearr_39487_39551[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39476 === (3))){
var inst_39473 = (state_39475[(2)]);
var state_39475__$1 = state_39475;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39475__$1,inst_39473);
} else {
if((state_val_39476 === (12))){
var inst_39450 = (state_39475[(10)]);
var state_39475__$1 = state_39475;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39475__$1,(14),inst_39450);
} else {
if((state_val_39476 === (2))){
var state_39475__$1 = state_39475;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39475__$1,(4),results);
} else {
if((state_val_39476 === (19))){
var state_39475__$1 = state_39475;
var statearr_39488_39552 = state_39475__$1;
(statearr_39488_39552[(2)] = null);

(statearr_39488_39552[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39476 === (11))){
var inst_39450 = (state_39475[(2)]);
var state_39475__$1 = (function (){var statearr_39489 = state_39475;
(statearr_39489[(10)] = inst_39450);

return statearr_39489;
})();
var statearr_39490_39553 = state_39475__$1;
(statearr_39490_39553[(2)] = null);

(statearr_39490_39553[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39476 === (9))){
var state_39475__$1 = state_39475;
var statearr_39491_39554 = state_39475__$1;
(statearr_39491_39554[(2)] = null);

(statearr_39491_39554[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39476 === (5))){
var state_39475__$1 = state_39475;
if(cljs.core.truth_(close_QMARK_)){
var statearr_39492_39555 = state_39475__$1;
(statearr_39492_39555[(1)] = (8));

} else {
var statearr_39493_39556 = state_39475__$1;
(statearr_39493_39556[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39476 === (14))){
var inst_39455 = (state_39475[(11)]);
var inst_39453 = (state_39475[(8)]);
var inst_39453__$1 = (state_39475[(2)]);
var inst_39454 = (inst_39453__$1 == null);
var inst_39455__$1 = cljs.core.not.call(null,inst_39454);
var state_39475__$1 = (function (){var statearr_39494 = state_39475;
(statearr_39494[(11)] = inst_39455__$1);

(statearr_39494[(8)] = inst_39453__$1);

return statearr_39494;
})();
if(inst_39455__$1){
var statearr_39495_39557 = state_39475__$1;
(statearr_39495_39557[(1)] = (15));

} else {
var statearr_39496_39558 = state_39475__$1;
(statearr_39496_39558[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39476 === (16))){
var inst_39455 = (state_39475[(11)]);
var state_39475__$1 = state_39475;
var statearr_39497_39559 = state_39475__$1;
(statearr_39497_39559[(2)] = inst_39455);

(statearr_39497_39559[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39476 === (10))){
var inst_39447 = (state_39475[(2)]);
var state_39475__$1 = state_39475;
var statearr_39498_39560 = state_39475__$1;
(statearr_39498_39560[(2)] = inst_39447);

(statearr_39498_39560[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39476 === (18))){
var inst_39458 = (state_39475[(2)]);
var state_39475__$1 = state_39475;
var statearr_39499_39561 = state_39475__$1;
(statearr_39499_39561[(2)] = inst_39458);

(statearr_39499_39561[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39476 === (8))){
var inst_39444 = cljs.core.async.close_BANG_.call(null,to);
var state_39475__$1 = state_39475;
var statearr_39500_39562 = state_39475__$1;
(statearr_39500_39562[(2)] = inst_39444);

(statearr_39500_39562[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__38950__auto__,jobs,results,process,async))
;
return ((function (switch__38796__auto__,c__38950__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__38797__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38797__auto____0 = (function (){
var statearr_39504 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39504[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38797__auto__);

(statearr_39504[(1)] = (1));

return statearr_39504;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38797__auto____1 = (function (state_39475){
while(true){
var ret_value__38798__auto__ = (function (){try{while(true){
var result__38799__auto__ = switch__38796__auto__.call(null,state_39475);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38799__auto__;
}
break;
}
}catch (e39505){if((e39505 instanceof Object)){
var ex__38800__auto__ = e39505;
var statearr_39506_39563 = state_39475;
(statearr_39506_39563[(5)] = ex__38800__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39475);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39505;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39564 = state_39475;
state_39475 = G__39564;
continue;
} else {
return ret_value__38798__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38797__auto__ = function(state_39475){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38797__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38797__auto____1.call(this,state_39475);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__38797__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38797__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38797__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38797__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38797__auto__;
})()
;})(switch__38796__auto__,c__38950__auto__,jobs,results,process,async))
})();
var state__38952__auto__ = (function (){var statearr_39507 = f__38951__auto__.call(null);
(statearr_39507[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38950__auto__);

return statearr_39507;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38952__auto__);
});})(c__38950__auto__,jobs,results,process,async))
);

return c__38950__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args39565 = [];
var len__37853__auto___39568 = arguments.length;
var i__37854__auto___39569 = (0);
while(true){
if((i__37854__auto___39569 < len__37853__auto___39568)){
args39565.push((arguments[i__37854__auto___39569]));

var G__39570 = (i__37854__auto___39569 + (1));
i__37854__auto___39569 = G__39570;
continue;
} else {
}
break;
}

var G__39567 = args39565.length;
switch (G__39567) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39565.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args39572 = [];
var len__37853__auto___39575 = arguments.length;
var i__37854__auto___39576 = (0);
while(true){
if((i__37854__auto___39576 < len__37853__auto___39575)){
args39572.push((arguments[i__37854__auto___39576]));

var G__39577 = (i__37854__auto___39576 + (1));
i__37854__auto___39576 = G__39577;
continue;
} else {
}
break;
}

var G__39574 = args39572.length;
switch (G__39574) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39572.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args39579 = [];
var len__37853__auto___39632 = arguments.length;
var i__37854__auto___39633 = (0);
while(true){
if((i__37854__auto___39633 < len__37853__auto___39632)){
args39579.push((arguments[i__37854__auto___39633]));

var G__39634 = (i__37854__auto___39633 + (1));
i__37854__auto___39633 = G__39634;
continue;
} else {
}
break;
}

var G__39581 = args39579.length;
switch (G__39581) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39579.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__38950__auto___39636 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38950__auto___39636,tc,fc){
return (function (){
var f__38951__auto__ = (function (){var switch__38796__auto__ = ((function (c__38950__auto___39636,tc,fc){
return (function (state_39607){
var state_val_39608 = (state_39607[(1)]);
if((state_val_39608 === (7))){
var inst_39603 = (state_39607[(2)]);
var state_39607__$1 = state_39607;
var statearr_39609_39637 = state_39607__$1;
(statearr_39609_39637[(2)] = inst_39603);

(statearr_39609_39637[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39608 === (1))){
var state_39607__$1 = state_39607;
var statearr_39610_39638 = state_39607__$1;
(statearr_39610_39638[(2)] = null);

(statearr_39610_39638[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39608 === (4))){
var inst_39584 = (state_39607[(7)]);
var inst_39584__$1 = (state_39607[(2)]);
var inst_39585 = (inst_39584__$1 == null);
var state_39607__$1 = (function (){var statearr_39611 = state_39607;
(statearr_39611[(7)] = inst_39584__$1);

return statearr_39611;
})();
if(cljs.core.truth_(inst_39585)){
var statearr_39612_39639 = state_39607__$1;
(statearr_39612_39639[(1)] = (5));

} else {
var statearr_39613_39640 = state_39607__$1;
(statearr_39613_39640[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39608 === (13))){
var state_39607__$1 = state_39607;
var statearr_39614_39641 = state_39607__$1;
(statearr_39614_39641[(2)] = null);

(statearr_39614_39641[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39608 === (6))){
var inst_39584 = (state_39607[(7)]);
var inst_39590 = p.call(null,inst_39584);
var state_39607__$1 = state_39607;
if(cljs.core.truth_(inst_39590)){
var statearr_39615_39642 = state_39607__$1;
(statearr_39615_39642[(1)] = (9));

} else {
var statearr_39616_39643 = state_39607__$1;
(statearr_39616_39643[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39608 === (3))){
var inst_39605 = (state_39607[(2)]);
var state_39607__$1 = state_39607;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39607__$1,inst_39605);
} else {
if((state_val_39608 === (12))){
var state_39607__$1 = state_39607;
var statearr_39617_39644 = state_39607__$1;
(statearr_39617_39644[(2)] = null);

(statearr_39617_39644[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39608 === (2))){
var state_39607__$1 = state_39607;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39607__$1,(4),ch);
} else {
if((state_val_39608 === (11))){
var inst_39584 = (state_39607[(7)]);
var inst_39594 = (state_39607[(2)]);
var state_39607__$1 = state_39607;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39607__$1,(8),inst_39594,inst_39584);
} else {
if((state_val_39608 === (9))){
var state_39607__$1 = state_39607;
var statearr_39618_39645 = state_39607__$1;
(statearr_39618_39645[(2)] = tc);

(statearr_39618_39645[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39608 === (5))){
var inst_39587 = cljs.core.async.close_BANG_.call(null,tc);
var inst_39588 = cljs.core.async.close_BANG_.call(null,fc);
var state_39607__$1 = (function (){var statearr_39619 = state_39607;
(statearr_39619[(8)] = inst_39587);

return statearr_39619;
})();
var statearr_39620_39646 = state_39607__$1;
(statearr_39620_39646[(2)] = inst_39588);

(statearr_39620_39646[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39608 === (14))){
var inst_39601 = (state_39607[(2)]);
var state_39607__$1 = state_39607;
var statearr_39621_39647 = state_39607__$1;
(statearr_39621_39647[(2)] = inst_39601);

(statearr_39621_39647[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39608 === (10))){
var state_39607__$1 = state_39607;
var statearr_39622_39648 = state_39607__$1;
(statearr_39622_39648[(2)] = fc);

(statearr_39622_39648[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39608 === (8))){
var inst_39596 = (state_39607[(2)]);
var state_39607__$1 = state_39607;
if(cljs.core.truth_(inst_39596)){
var statearr_39623_39649 = state_39607__$1;
(statearr_39623_39649[(1)] = (12));

} else {
var statearr_39624_39650 = state_39607__$1;
(statearr_39624_39650[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__38950__auto___39636,tc,fc))
;
return ((function (switch__38796__auto__,c__38950__auto___39636,tc,fc){
return (function() {
var cljs$core$async$state_machine__38797__auto__ = null;
var cljs$core$async$state_machine__38797__auto____0 = (function (){
var statearr_39628 = [null,null,null,null,null,null,null,null,null];
(statearr_39628[(0)] = cljs$core$async$state_machine__38797__auto__);

(statearr_39628[(1)] = (1));

return statearr_39628;
});
var cljs$core$async$state_machine__38797__auto____1 = (function (state_39607){
while(true){
var ret_value__38798__auto__ = (function (){try{while(true){
var result__38799__auto__ = switch__38796__auto__.call(null,state_39607);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38799__auto__;
}
break;
}
}catch (e39629){if((e39629 instanceof Object)){
var ex__38800__auto__ = e39629;
var statearr_39630_39651 = state_39607;
(statearr_39630_39651[(5)] = ex__38800__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39607);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39629;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39652 = state_39607;
state_39607 = G__39652;
continue;
} else {
return ret_value__38798__auto__;
}
break;
}
});
cljs$core$async$state_machine__38797__auto__ = function(state_39607){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38797__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38797__auto____1.call(this,state_39607);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38797__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38797__auto____0;
cljs$core$async$state_machine__38797__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38797__auto____1;
return cljs$core$async$state_machine__38797__auto__;
})()
;})(switch__38796__auto__,c__38950__auto___39636,tc,fc))
})();
var state__38952__auto__ = (function (){var statearr_39631 = f__38951__auto__.call(null);
(statearr_39631[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38950__auto___39636);

return statearr_39631;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38952__auto__);
});})(c__38950__auto___39636,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__38950__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38950__auto__){
return (function (){
var f__38951__auto__ = (function (){var switch__38796__auto__ = ((function (c__38950__auto__){
return (function (state_39716){
var state_val_39717 = (state_39716[(1)]);
if((state_val_39717 === (7))){
var inst_39712 = (state_39716[(2)]);
var state_39716__$1 = state_39716;
var statearr_39718_39739 = state_39716__$1;
(statearr_39718_39739[(2)] = inst_39712);

(statearr_39718_39739[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39717 === (1))){
var inst_39696 = init;
var state_39716__$1 = (function (){var statearr_39719 = state_39716;
(statearr_39719[(7)] = inst_39696);

return statearr_39719;
})();
var statearr_39720_39740 = state_39716__$1;
(statearr_39720_39740[(2)] = null);

(statearr_39720_39740[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39717 === (4))){
var inst_39699 = (state_39716[(8)]);
var inst_39699__$1 = (state_39716[(2)]);
var inst_39700 = (inst_39699__$1 == null);
var state_39716__$1 = (function (){var statearr_39721 = state_39716;
(statearr_39721[(8)] = inst_39699__$1);

return statearr_39721;
})();
if(cljs.core.truth_(inst_39700)){
var statearr_39722_39741 = state_39716__$1;
(statearr_39722_39741[(1)] = (5));

} else {
var statearr_39723_39742 = state_39716__$1;
(statearr_39723_39742[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39717 === (6))){
var inst_39703 = (state_39716[(9)]);
var inst_39696 = (state_39716[(7)]);
var inst_39699 = (state_39716[(8)]);
var inst_39703__$1 = f.call(null,inst_39696,inst_39699);
var inst_39704 = cljs.core.reduced_QMARK_.call(null,inst_39703__$1);
var state_39716__$1 = (function (){var statearr_39724 = state_39716;
(statearr_39724[(9)] = inst_39703__$1);

return statearr_39724;
})();
if(inst_39704){
var statearr_39725_39743 = state_39716__$1;
(statearr_39725_39743[(1)] = (8));

} else {
var statearr_39726_39744 = state_39716__$1;
(statearr_39726_39744[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39717 === (3))){
var inst_39714 = (state_39716[(2)]);
var state_39716__$1 = state_39716;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39716__$1,inst_39714);
} else {
if((state_val_39717 === (2))){
var state_39716__$1 = state_39716;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39716__$1,(4),ch);
} else {
if((state_val_39717 === (9))){
var inst_39703 = (state_39716[(9)]);
var inst_39696 = inst_39703;
var state_39716__$1 = (function (){var statearr_39727 = state_39716;
(statearr_39727[(7)] = inst_39696);

return statearr_39727;
})();
var statearr_39728_39745 = state_39716__$1;
(statearr_39728_39745[(2)] = null);

(statearr_39728_39745[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39717 === (5))){
var inst_39696 = (state_39716[(7)]);
var state_39716__$1 = state_39716;
var statearr_39729_39746 = state_39716__$1;
(statearr_39729_39746[(2)] = inst_39696);

(statearr_39729_39746[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39717 === (10))){
var inst_39710 = (state_39716[(2)]);
var state_39716__$1 = state_39716;
var statearr_39730_39747 = state_39716__$1;
(statearr_39730_39747[(2)] = inst_39710);

(statearr_39730_39747[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39717 === (8))){
var inst_39703 = (state_39716[(9)]);
var inst_39706 = cljs.core.deref.call(null,inst_39703);
var state_39716__$1 = state_39716;
var statearr_39731_39748 = state_39716__$1;
(statearr_39731_39748[(2)] = inst_39706);

(statearr_39731_39748[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__38950__auto__))
;
return ((function (switch__38796__auto__,c__38950__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__38797__auto__ = null;
var cljs$core$async$reduce_$_state_machine__38797__auto____0 = (function (){
var statearr_39735 = [null,null,null,null,null,null,null,null,null,null];
(statearr_39735[(0)] = cljs$core$async$reduce_$_state_machine__38797__auto__);

(statearr_39735[(1)] = (1));

return statearr_39735;
});
var cljs$core$async$reduce_$_state_machine__38797__auto____1 = (function (state_39716){
while(true){
var ret_value__38798__auto__ = (function (){try{while(true){
var result__38799__auto__ = switch__38796__auto__.call(null,state_39716);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38799__auto__;
}
break;
}
}catch (e39736){if((e39736 instanceof Object)){
var ex__38800__auto__ = e39736;
var statearr_39737_39749 = state_39716;
(statearr_39737_39749[(5)] = ex__38800__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39716);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39736;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39750 = state_39716;
state_39716 = G__39750;
continue;
} else {
return ret_value__38798__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__38797__auto__ = function(state_39716){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__38797__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__38797__auto____1.call(this,state_39716);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__38797__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__38797__auto____0;
cljs$core$async$reduce_$_state_machine__38797__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__38797__auto____1;
return cljs$core$async$reduce_$_state_machine__38797__auto__;
})()
;})(switch__38796__auto__,c__38950__auto__))
})();
var state__38952__auto__ = (function (){var statearr_39738 = f__38951__auto__.call(null);
(statearr_39738[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38950__auto__);

return statearr_39738;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38952__auto__);
});})(c__38950__auto__))
);

return c__38950__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args39751 = [];
var len__37853__auto___39803 = arguments.length;
var i__37854__auto___39804 = (0);
while(true){
if((i__37854__auto___39804 < len__37853__auto___39803)){
args39751.push((arguments[i__37854__auto___39804]));

var G__39805 = (i__37854__auto___39804 + (1));
i__37854__auto___39804 = G__39805;
continue;
} else {
}
break;
}

var G__39753 = args39751.length;
switch (G__39753) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39751.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__38950__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38950__auto__){
return (function (){
var f__38951__auto__ = (function (){var switch__38796__auto__ = ((function (c__38950__auto__){
return (function (state_39778){
var state_val_39779 = (state_39778[(1)]);
if((state_val_39779 === (7))){
var inst_39760 = (state_39778[(2)]);
var state_39778__$1 = state_39778;
var statearr_39780_39807 = state_39778__$1;
(statearr_39780_39807[(2)] = inst_39760);

(statearr_39780_39807[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39779 === (1))){
var inst_39754 = cljs.core.seq.call(null,coll);
var inst_39755 = inst_39754;
var state_39778__$1 = (function (){var statearr_39781 = state_39778;
(statearr_39781[(7)] = inst_39755);

return statearr_39781;
})();
var statearr_39782_39808 = state_39778__$1;
(statearr_39782_39808[(2)] = null);

(statearr_39782_39808[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39779 === (4))){
var inst_39755 = (state_39778[(7)]);
var inst_39758 = cljs.core.first.call(null,inst_39755);
var state_39778__$1 = state_39778;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39778__$1,(7),ch,inst_39758);
} else {
if((state_val_39779 === (13))){
var inst_39772 = (state_39778[(2)]);
var state_39778__$1 = state_39778;
var statearr_39783_39809 = state_39778__$1;
(statearr_39783_39809[(2)] = inst_39772);

(statearr_39783_39809[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39779 === (6))){
var inst_39763 = (state_39778[(2)]);
var state_39778__$1 = state_39778;
if(cljs.core.truth_(inst_39763)){
var statearr_39784_39810 = state_39778__$1;
(statearr_39784_39810[(1)] = (8));

} else {
var statearr_39785_39811 = state_39778__$1;
(statearr_39785_39811[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39779 === (3))){
var inst_39776 = (state_39778[(2)]);
var state_39778__$1 = state_39778;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39778__$1,inst_39776);
} else {
if((state_val_39779 === (12))){
var state_39778__$1 = state_39778;
var statearr_39786_39812 = state_39778__$1;
(statearr_39786_39812[(2)] = null);

(statearr_39786_39812[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39779 === (2))){
var inst_39755 = (state_39778[(7)]);
var state_39778__$1 = state_39778;
if(cljs.core.truth_(inst_39755)){
var statearr_39787_39813 = state_39778__$1;
(statearr_39787_39813[(1)] = (4));

} else {
var statearr_39788_39814 = state_39778__$1;
(statearr_39788_39814[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39779 === (11))){
var inst_39769 = cljs.core.async.close_BANG_.call(null,ch);
var state_39778__$1 = state_39778;
var statearr_39789_39815 = state_39778__$1;
(statearr_39789_39815[(2)] = inst_39769);

(statearr_39789_39815[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39779 === (9))){
var state_39778__$1 = state_39778;
if(cljs.core.truth_(close_QMARK_)){
var statearr_39790_39816 = state_39778__$1;
(statearr_39790_39816[(1)] = (11));

} else {
var statearr_39791_39817 = state_39778__$1;
(statearr_39791_39817[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39779 === (5))){
var inst_39755 = (state_39778[(7)]);
var state_39778__$1 = state_39778;
var statearr_39792_39818 = state_39778__$1;
(statearr_39792_39818[(2)] = inst_39755);

(statearr_39792_39818[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39779 === (10))){
var inst_39774 = (state_39778[(2)]);
var state_39778__$1 = state_39778;
var statearr_39793_39819 = state_39778__$1;
(statearr_39793_39819[(2)] = inst_39774);

(statearr_39793_39819[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39779 === (8))){
var inst_39755 = (state_39778[(7)]);
var inst_39765 = cljs.core.next.call(null,inst_39755);
var inst_39755__$1 = inst_39765;
var state_39778__$1 = (function (){var statearr_39794 = state_39778;
(statearr_39794[(7)] = inst_39755__$1);

return statearr_39794;
})();
var statearr_39795_39820 = state_39778__$1;
(statearr_39795_39820[(2)] = null);

(statearr_39795_39820[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__38950__auto__))
;
return ((function (switch__38796__auto__,c__38950__auto__){
return (function() {
var cljs$core$async$state_machine__38797__auto__ = null;
var cljs$core$async$state_machine__38797__auto____0 = (function (){
var statearr_39799 = [null,null,null,null,null,null,null,null];
(statearr_39799[(0)] = cljs$core$async$state_machine__38797__auto__);

(statearr_39799[(1)] = (1));

return statearr_39799;
});
var cljs$core$async$state_machine__38797__auto____1 = (function (state_39778){
while(true){
var ret_value__38798__auto__ = (function (){try{while(true){
var result__38799__auto__ = switch__38796__auto__.call(null,state_39778);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38799__auto__;
}
break;
}
}catch (e39800){if((e39800 instanceof Object)){
var ex__38800__auto__ = e39800;
var statearr_39801_39821 = state_39778;
(statearr_39801_39821[(5)] = ex__38800__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39778);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39800;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39822 = state_39778;
state_39778 = G__39822;
continue;
} else {
return ret_value__38798__auto__;
}
break;
}
});
cljs$core$async$state_machine__38797__auto__ = function(state_39778){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38797__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38797__auto____1.call(this,state_39778);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38797__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38797__auto____0;
cljs$core$async$state_machine__38797__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38797__auto____1;
return cljs$core$async$state_machine__38797__auto__;
})()
;})(switch__38796__auto__,c__38950__auto__))
})();
var state__38952__auto__ = (function (){var statearr_39802 = f__38951__auto__.call(null);
(statearr_39802[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38950__auto__);

return statearr_39802;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38952__auto__);
});})(c__38950__auto__))
);

return c__38950__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__37441__auto__ = (((_ == null))?null:_);
var m__37442__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__37441__auto__)]);
if(!((m__37442__auto__ == null))){
return m__37442__auto__.call(null,_);
} else {
var m__37442__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__37442__auto____$1 == null))){
return m__37442__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__37441__auto__ = (((m == null))?null:m);
var m__37442__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__37441__auto__)]);
if(!((m__37442__auto__ == null))){
return m__37442__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__37442__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__37442__auto____$1 == null))){
return m__37442__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__37441__auto__ = (((m == null))?null:m);
var m__37442__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__37441__auto__)]);
if(!((m__37442__auto__ == null))){
return m__37442__auto__.call(null,m,ch);
} else {
var m__37442__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__37442__auto____$1 == null))){
return m__37442__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__37441__auto__ = (((m == null))?null:m);
var m__37442__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__37441__auto__)]);
if(!((m__37442__auto__ == null))){
return m__37442__auto__.call(null,m);
} else {
var m__37442__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__37442__auto____$1 == null))){
return m__37442__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async40048 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40048 = (function (mult,ch,cs,meta40049){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta40049 = meta40049;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async40048.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_40050,meta40049__$1){
var self__ = this;
var _40050__$1 = this;
return (new cljs.core.async.t_cljs$core$async40048(self__.mult,self__.ch,self__.cs,meta40049__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async40048.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_40050){
var self__ = this;
var _40050__$1 = this;
return self__.meta40049;
});})(cs))
;

cljs.core.async.t_cljs$core$async40048.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async40048.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async40048.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async40048.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async40048.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async40048.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async40048.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta40049","meta40049",1419803616,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async40048.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40048.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40048";

cljs.core.async.t_cljs$core$async40048.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__37384__auto__,writer__37385__auto__,opt__37386__auto__){
return cljs.core._write.call(null,writer__37385__auto__,"cljs.core.async/t_cljs$core$async40048");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async40048 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async40048(mult__$1,ch__$1,cs__$1,meta40049){
return (new cljs.core.async.t_cljs$core$async40048(mult__$1,ch__$1,cs__$1,meta40049));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async40048(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__38950__auto___40273 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38950__auto___40273,cs,m,dchan,dctr,done){
return (function (){
var f__38951__auto__ = (function (){var switch__38796__auto__ = ((function (c__38950__auto___40273,cs,m,dchan,dctr,done){
return (function (state_40185){
var state_val_40186 = (state_40185[(1)]);
if((state_val_40186 === (7))){
var inst_40181 = (state_40185[(2)]);
var state_40185__$1 = state_40185;
var statearr_40187_40274 = state_40185__$1;
(statearr_40187_40274[(2)] = inst_40181);

(statearr_40187_40274[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40186 === (20))){
var inst_40084 = (state_40185[(7)]);
var inst_40096 = cljs.core.first.call(null,inst_40084);
var inst_40097 = cljs.core.nth.call(null,inst_40096,(0),null);
var inst_40098 = cljs.core.nth.call(null,inst_40096,(1),null);
var state_40185__$1 = (function (){var statearr_40188 = state_40185;
(statearr_40188[(8)] = inst_40097);

return statearr_40188;
})();
if(cljs.core.truth_(inst_40098)){
var statearr_40189_40275 = state_40185__$1;
(statearr_40189_40275[(1)] = (22));

} else {
var statearr_40190_40276 = state_40185__$1;
(statearr_40190_40276[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40186 === (27))){
var inst_40133 = (state_40185[(9)]);
var inst_40128 = (state_40185[(10)]);
var inst_40053 = (state_40185[(11)]);
var inst_40126 = (state_40185[(12)]);
var inst_40133__$1 = cljs.core._nth.call(null,inst_40126,inst_40128);
var inst_40134 = cljs.core.async.put_BANG_.call(null,inst_40133__$1,inst_40053,done);
var state_40185__$1 = (function (){var statearr_40191 = state_40185;
(statearr_40191[(9)] = inst_40133__$1);

return statearr_40191;
})();
if(cljs.core.truth_(inst_40134)){
var statearr_40192_40277 = state_40185__$1;
(statearr_40192_40277[(1)] = (30));

} else {
var statearr_40193_40278 = state_40185__$1;
(statearr_40193_40278[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40186 === (1))){
var state_40185__$1 = state_40185;
var statearr_40194_40279 = state_40185__$1;
(statearr_40194_40279[(2)] = null);

(statearr_40194_40279[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40186 === (24))){
var inst_40084 = (state_40185[(7)]);
var inst_40103 = (state_40185[(2)]);
var inst_40104 = cljs.core.next.call(null,inst_40084);
var inst_40062 = inst_40104;
var inst_40063 = null;
var inst_40064 = (0);
var inst_40065 = (0);
var state_40185__$1 = (function (){var statearr_40195 = state_40185;
(statearr_40195[(13)] = inst_40064);

(statearr_40195[(14)] = inst_40062);

(statearr_40195[(15)] = inst_40065);

(statearr_40195[(16)] = inst_40063);

(statearr_40195[(17)] = inst_40103);

return statearr_40195;
})();
var statearr_40196_40280 = state_40185__$1;
(statearr_40196_40280[(2)] = null);

(statearr_40196_40280[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40186 === (39))){
var state_40185__$1 = state_40185;
var statearr_40200_40281 = state_40185__$1;
(statearr_40200_40281[(2)] = null);

(statearr_40200_40281[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40186 === (4))){
var inst_40053 = (state_40185[(11)]);
var inst_40053__$1 = (state_40185[(2)]);
var inst_40054 = (inst_40053__$1 == null);
var state_40185__$1 = (function (){var statearr_40201 = state_40185;
(statearr_40201[(11)] = inst_40053__$1);

return statearr_40201;
})();
if(cljs.core.truth_(inst_40054)){
var statearr_40202_40282 = state_40185__$1;
(statearr_40202_40282[(1)] = (5));

} else {
var statearr_40203_40283 = state_40185__$1;
(statearr_40203_40283[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40186 === (15))){
var inst_40064 = (state_40185[(13)]);
var inst_40062 = (state_40185[(14)]);
var inst_40065 = (state_40185[(15)]);
var inst_40063 = (state_40185[(16)]);
var inst_40080 = (state_40185[(2)]);
var inst_40081 = (inst_40065 + (1));
var tmp40197 = inst_40064;
var tmp40198 = inst_40062;
var tmp40199 = inst_40063;
var inst_40062__$1 = tmp40198;
var inst_40063__$1 = tmp40199;
var inst_40064__$1 = tmp40197;
var inst_40065__$1 = inst_40081;
var state_40185__$1 = (function (){var statearr_40204 = state_40185;
(statearr_40204[(13)] = inst_40064__$1);

(statearr_40204[(14)] = inst_40062__$1);

(statearr_40204[(15)] = inst_40065__$1);

(statearr_40204[(18)] = inst_40080);

(statearr_40204[(16)] = inst_40063__$1);

return statearr_40204;
})();
var statearr_40205_40284 = state_40185__$1;
(statearr_40205_40284[(2)] = null);

(statearr_40205_40284[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40186 === (21))){
var inst_40107 = (state_40185[(2)]);
var state_40185__$1 = state_40185;
var statearr_40209_40285 = state_40185__$1;
(statearr_40209_40285[(2)] = inst_40107);

(statearr_40209_40285[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40186 === (31))){
var inst_40133 = (state_40185[(9)]);
var inst_40137 = done.call(null,null);
var inst_40138 = cljs.core.async.untap_STAR_.call(null,m,inst_40133);
var state_40185__$1 = (function (){var statearr_40210 = state_40185;
(statearr_40210[(19)] = inst_40137);

return statearr_40210;
})();
var statearr_40211_40286 = state_40185__$1;
(statearr_40211_40286[(2)] = inst_40138);

(statearr_40211_40286[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40186 === (32))){
var inst_40127 = (state_40185[(20)]);
var inst_40128 = (state_40185[(10)]);
var inst_40125 = (state_40185[(21)]);
var inst_40126 = (state_40185[(12)]);
var inst_40140 = (state_40185[(2)]);
var inst_40141 = (inst_40128 + (1));
var tmp40206 = inst_40127;
var tmp40207 = inst_40125;
var tmp40208 = inst_40126;
var inst_40125__$1 = tmp40207;
var inst_40126__$1 = tmp40208;
var inst_40127__$1 = tmp40206;
var inst_40128__$1 = inst_40141;
var state_40185__$1 = (function (){var statearr_40212 = state_40185;
(statearr_40212[(20)] = inst_40127__$1);

(statearr_40212[(10)] = inst_40128__$1);

(statearr_40212[(21)] = inst_40125__$1);

(statearr_40212[(22)] = inst_40140);

(statearr_40212[(12)] = inst_40126__$1);

return statearr_40212;
})();
var statearr_40213_40287 = state_40185__$1;
(statearr_40213_40287[(2)] = null);

(statearr_40213_40287[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40186 === (40))){
var inst_40153 = (state_40185[(23)]);
var inst_40157 = done.call(null,null);
var inst_40158 = cljs.core.async.untap_STAR_.call(null,m,inst_40153);
var state_40185__$1 = (function (){var statearr_40214 = state_40185;
(statearr_40214[(24)] = inst_40157);

return statearr_40214;
})();
var statearr_40215_40288 = state_40185__$1;
(statearr_40215_40288[(2)] = inst_40158);

(statearr_40215_40288[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40186 === (33))){
var inst_40144 = (state_40185[(25)]);
var inst_40146 = cljs.core.chunked_seq_QMARK_.call(null,inst_40144);
var state_40185__$1 = state_40185;
if(inst_40146){
var statearr_40216_40289 = state_40185__$1;
(statearr_40216_40289[(1)] = (36));

} else {
var statearr_40217_40290 = state_40185__$1;
(statearr_40217_40290[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40186 === (13))){
var inst_40074 = (state_40185[(26)]);
var inst_40077 = cljs.core.async.close_BANG_.call(null,inst_40074);
var state_40185__$1 = state_40185;
var statearr_40218_40291 = state_40185__$1;
(statearr_40218_40291[(2)] = inst_40077);

(statearr_40218_40291[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40186 === (22))){
var inst_40097 = (state_40185[(8)]);
var inst_40100 = cljs.core.async.close_BANG_.call(null,inst_40097);
var state_40185__$1 = state_40185;
var statearr_40219_40292 = state_40185__$1;
(statearr_40219_40292[(2)] = inst_40100);

(statearr_40219_40292[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40186 === (36))){
var inst_40144 = (state_40185[(25)]);
var inst_40148 = cljs.core.chunk_first.call(null,inst_40144);
var inst_40149 = cljs.core.chunk_rest.call(null,inst_40144);
var inst_40150 = cljs.core.count.call(null,inst_40148);
var inst_40125 = inst_40149;
var inst_40126 = inst_40148;
var inst_40127 = inst_40150;
var inst_40128 = (0);
var state_40185__$1 = (function (){var statearr_40220 = state_40185;
(statearr_40220[(20)] = inst_40127);

(statearr_40220[(10)] = inst_40128);

(statearr_40220[(21)] = inst_40125);

(statearr_40220[(12)] = inst_40126);

return statearr_40220;
})();
var statearr_40221_40293 = state_40185__$1;
(statearr_40221_40293[(2)] = null);

(statearr_40221_40293[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40186 === (41))){
var inst_40144 = (state_40185[(25)]);
var inst_40160 = (state_40185[(2)]);
var inst_40161 = cljs.core.next.call(null,inst_40144);
var inst_40125 = inst_40161;
var inst_40126 = null;
var inst_40127 = (0);
var inst_40128 = (0);
var state_40185__$1 = (function (){var statearr_40222 = state_40185;
(statearr_40222[(20)] = inst_40127);

(statearr_40222[(10)] = inst_40128);

(statearr_40222[(21)] = inst_40125);

(statearr_40222[(27)] = inst_40160);

(statearr_40222[(12)] = inst_40126);

return statearr_40222;
})();
var statearr_40223_40294 = state_40185__$1;
(statearr_40223_40294[(2)] = null);

(statearr_40223_40294[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40186 === (43))){
var state_40185__$1 = state_40185;
var statearr_40224_40295 = state_40185__$1;
(statearr_40224_40295[(2)] = null);

(statearr_40224_40295[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40186 === (29))){
var inst_40169 = (state_40185[(2)]);
var state_40185__$1 = state_40185;
var statearr_40225_40296 = state_40185__$1;
(statearr_40225_40296[(2)] = inst_40169);

(statearr_40225_40296[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40186 === (44))){
var inst_40178 = (state_40185[(2)]);
var state_40185__$1 = (function (){var statearr_40226 = state_40185;
(statearr_40226[(28)] = inst_40178);

return statearr_40226;
})();
var statearr_40227_40297 = state_40185__$1;
(statearr_40227_40297[(2)] = null);

(statearr_40227_40297[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40186 === (6))){
var inst_40117 = (state_40185[(29)]);
var inst_40116 = cljs.core.deref.call(null,cs);
var inst_40117__$1 = cljs.core.keys.call(null,inst_40116);
var inst_40118 = cljs.core.count.call(null,inst_40117__$1);
var inst_40119 = cljs.core.reset_BANG_.call(null,dctr,inst_40118);
var inst_40124 = cljs.core.seq.call(null,inst_40117__$1);
var inst_40125 = inst_40124;
var inst_40126 = null;
var inst_40127 = (0);
var inst_40128 = (0);
var state_40185__$1 = (function (){var statearr_40228 = state_40185;
(statearr_40228[(20)] = inst_40127);

(statearr_40228[(10)] = inst_40128);

(statearr_40228[(21)] = inst_40125);

(statearr_40228[(30)] = inst_40119);

(statearr_40228[(29)] = inst_40117__$1);

(statearr_40228[(12)] = inst_40126);

return statearr_40228;
})();
var statearr_40229_40298 = state_40185__$1;
(statearr_40229_40298[(2)] = null);

(statearr_40229_40298[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40186 === (28))){
var inst_40125 = (state_40185[(21)]);
var inst_40144 = (state_40185[(25)]);
var inst_40144__$1 = cljs.core.seq.call(null,inst_40125);
var state_40185__$1 = (function (){var statearr_40230 = state_40185;
(statearr_40230[(25)] = inst_40144__$1);

return statearr_40230;
})();
if(inst_40144__$1){
var statearr_40231_40299 = state_40185__$1;
(statearr_40231_40299[(1)] = (33));

} else {
var statearr_40232_40300 = state_40185__$1;
(statearr_40232_40300[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40186 === (25))){
var inst_40127 = (state_40185[(20)]);
var inst_40128 = (state_40185[(10)]);
var inst_40130 = (inst_40128 < inst_40127);
var inst_40131 = inst_40130;
var state_40185__$1 = state_40185;
if(cljs.core.truth_(inst_40131)){
var statearr_40233_40301 = state_40185__$1;
(statearr_40233_40301[(1)] = (27));

} else {
var statearr_40234_40302 = state_40185__$1;
(statearr_40234_40302[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40186 === (34))){
var state_40185__$1 = state_40185;
var statearr_40235_40303 = state_40185__$1;
(statearr_40235_40303[(2)] = null);

(statearr_40235_40303[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40186 === (17))){
var state_40185__$1 = state_40185;
var statearr_40236_40304 = state_40185__$1;
(statearr_40236_40304[(2)] = null);

(statearr_40236_40304[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40186 === (3))){
var inst_40183 = (state_40185[(2)]);
var state_40185__$1 = state_40185;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40185__$1,inst_40183);
} else {
if((state_val_40186 === (12))){
var inst_40112 = (state_40185[(2)]);
var state_40185__$1 = state_40185;
var statearr_40237_40305 = state_40185__$1;
(statearr_40237_40305[(2)] = inst_40112);

(statearr_40237_40305[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40186 === (2))){
var state_40185__$1 = state_40185;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40185__$1,(4),ch);
} else {
if((state_val_40186 === (23))){
var state_40185__$1 = state_40185;
var statearr_40238_40306 = state_40185__$1;
(statearr_40238_40306[(2)] = null);

(statearr_40238_40306[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40186 === (35))){
var inst_40167 = (state_40185[(2)]);
var state_40185__$1 = state_40185;
var statearr_40239_40307 = state_40185__$1;
(statearr_40239_40307[(2)] = inst_40167);

(statearr_40239_40307[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40186 === (19))){
var inst_40084 = (state_40185[(7)]);
var inst_40088 = cljs.core.chunk_first.call(null,inst_40084);
var inst_40089 = cljs.core.chunk_rest.call(null,inst_40084);
var inst_40090 = cljs.core.count.call(null,inst_40088);
var inst_40062 = inst_40089;
var inst_40063 = inst_40088;
var inst_40064 = inst_40090;
var inst_40065 = (0);
var state_40185__$1 = (function (){var statearr_40240 = state_40185;
(statearr_40240[(13)] = inst_40064);

(statearr_40240[(14)] = inst_40062);

(statearr_40240[(15)] = inst_40065);

(statearr_40240[(16)] = inst_40063);

return statearr_40240;
})();
var statearr_40241_40308 = state_40185__$1;
(statearr_40241_40308[(2)] = null);

(statearr_40241_40308[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40186 === (11))){
var inst_40084 = (state_40185[(7)]);
var inst_40062 = (state_40185[(14)]);
var inst_40084__$1 = cljs.core.seq.call(null,inst_40062);
var state_40185__$1 = (function (){var statearr_40242 = state_40185;
(statearr_40242[(7)] = inst_40084__$1);

return statearr_40242;
})();
if(inst_40084__$1){
var statearr_40243_40309 = state_40185__$1;
(statearr_40243_40309[(1)] = (16));

} else {
var statearr_40244_40310 = state_40185__$1;
(statearr_40244_40310[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40186 === (9))){
var inst_40114 = (state_40185[(2)]);
var state_40185__$1 = state_40185;
var statearr_40245_40311 = state_40185__$1;
(statearr_40245_40311[(2)] = inst_40114);

(statearr_40245_40311[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40186 === (5))){
var inst_40060 = cljs.core.deref.call(null,cs);
var inst_40061 = cljs.core.seq.call(null,inst_40060);
var inst_40062 = inst_40061;
var inst_40063 = null;
var inst_40064 = (0);
var inst_40065 = (0);
var state_40185__$1 = (function (){var statearr_40246 = state_40185;
(statearr_40246[(13)] = inst_40064);

(statearr_40246[(14)] = inst_40062);

(statearr_40246[(15)] = inst_40065);

(statearr_40246[(16)] = inst_40063);

return statearr_40246;
})();
var statearr_40247_40312 = state_40185__$1;
(statearr_40247_40312[(2)] = null);

(statearr_40247_40312[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40186 === (14))){
var state_40185__$1 = state_40185;
var statearr_40248_40313 = state_40185__$1;
(statearr_40248_40313[(2)] = null);

(statearr_40248_40313[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40186 === (45))){
var inst_40175 = (state_40185[(2)]);
var state_40185__$1 = state_40185;
var statearr_40249_40314 = state_40185__$1;
(statearr_40249_40314[(2)] = inst_40175);

(statearr_40249_40314[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40186 === (26))){
var inst_40117 = (state_40185[(29)]);
var inst_40171 = (state_40185[(2)]);
var inst_40172 = cljs.core.seq.call(null,inst_40117);
var state_40185__$1 = (function (){var statearr_40250 = state_40185;
(statearr_40250[(31)] = inst_40171);

return statearr_40250;
})();
if(inst_40172){
var statearr_40251_40315 = state_40185__$1;
(statearr_40251_40315[(1)] = (42));

} else {
var statearr_40252_40316 = state_40185__$1;
(statearr_40252_40316[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40186 === (16))){
var inst_40084 = (state_40185[(7)]);
var inst_40086 = cljs.core.chunked_seq_QMARK_.call(null,inst_40084);
var state_40185__$1 = state_40185;
if(inst_40086){
var statearr_40253_40317 = state_40185__$1;
(statearr_40253_40317[(1)] = (19));

} else {
var statearr_40254_40318 = state_40185__$1;
(statearr_40254_40318[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40186 === (38))){
var inst_40164 = (state_40185[(2)]);
var state_40185__$1 = state_40185;
var statearr_40255_40319 = state_40185__$1;
(statearr_40255_40319[(2)] = inst_40164);

(statearr_40255_40319[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40186 === (30))){
var state_40185__$1 = state_40185;
var statearr_40256_40320 = state_40185__$1;
(statearr_40256_40320[(2)] = null);

(statearr_40256_40320[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40186 === (10))){
var inst_40065 = (state_40185[(15)]);
var inst_40063 = (state_40185[(16)]);
var inst_40073 = cljs.core._nth.call(null,inst_40063,inst_40065);
var inst_40074 = cljs.core.nth.call(null,inst_40073,(0),null);
var inst_40075 = cljs.core.nth.call(null,inst_40073,(1),null);
var state_40185__$1 = (function (){var statearr_40257 = state_40185;
(statearr_40257[(26)] = inst_40074);

return statearr_40257;
})();
if(cljs.core.truth_(inst_40075)){
var statearr_40258_40321 = state_40185__$1;
(statearr_40258_40321[(1)] = (13));

} else {
var statearr_40259_40322 = state_40185__$1;
(statearr_40259_40322[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40186 === (18))){
var inst_40110 = (state_40185[(2)]);
var state_40185__$1 = state_40185;
var statearr_40260_40323 = state_40185__$1;
(statearr_40260_40323[(2)] = inst_40110);

(statearr_40260_40323[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40186 === (42))){
var state_40185__$1 = state_40185;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40185__$1,(45),dchan);
} else {
if((state_val_40186 === (37))){
var inst_40153 = (state_40185[(23)]);
var inst_40053 = (state_40185[(11)]);
var inst_40144 = (state_40185[(25)]);
var inst_40153__$1 = cljs.core.first.call(null,inst_40144);
var inst_40154 = cljs.core.async.put_BANG_.call(null,inst_40153__$1,inst_40053,done);
var state_40185__$1 = (function (){var statearr_40261 = state_40185;
(statearr_40261[(23)] = inst_40153__$1);

return statearr_40261;
})();
if(cljs.core.truth_(inst_40154)){
var statearr_40262_40324 = state_40185__$1;
(statearr_40262_40324[(1)] = (39));

} else {
var statearr_40263_40325 = state_40185__$1;
(statearr_40263_40325[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40186 === (8))){
var inst_40064 = (state_40185[(13)]);
var inst_40065 = (state_40185[(15)]);
var inst_40067 = (inst_40065 < inst_40064);
var inst_40068 = inst_40067;
var state_40185__$1 = state_40185;
if(cljs.core.truth_(inst_40068)){
var statearr_40264_40326 = state_40185__$1;
(statearr_40264_40326[(1)] = (10));

} else {
var statearr_40265_40327 = state_40185__$1;
(statearr_40265_40327[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__38950__auto___40273,cs,m,dchan,dctr,done))
;
return ((function (switch__38796__auto__,c__38950__auto___40273,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__38797__auto__ = null;
var cljs$core$async$mult_$_state_machine__38797__auto____0 = (function (){
var statearr_40269 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40269[(0)] = cljs$core$async$mult_$_state_machine__38797__auto__);

(statearr_40269[(1)] = (1));

return statearr_40269;
});
var cljs$core$async$mult_$_state_machine__38797__auto____1 = (function (state_40185){
while(true){
var ret_value__38798__auto__ = (function (){try{while(true){
var result__38799__auto__ = switch__38796__auto__.call(null,state_40185);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38799__auto__;
}
break;
}
}catch (e40270){if((e40270 instanceof Object)){
var ex__38800__auto__ = e40270;
var statearr_40271_40328 = state_40185;
(statearr_40271_40328[(5)] = ex__38800__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40185);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40270;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40329 = state_40185;
state_40185 = G__40329;
continue;
} else {
return ret_value__38798__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__38797__auto__ = function(state_40185){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__38797__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__38797__auto____1.call(this,state_40185);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__38797__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__38797__auto____0;
cljs$core$async$mult_$_state_machine__38797__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__38797__auto____1;
return cljs$core$async$mult_$_state_machine__38797__auto__;
})()
;})(switch__38796__auto__,c__38950__auto___40273,cs,m,dchan,dctr,done))
})();
var state__38952__auto__ = (function (){var statearr_40272 = f__38951__auto__.call(null);
(statearr_40272[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38950__auto___40273);

return statearr_40272;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38952__auto__);
});})(c__38950__auto___40273,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args40330 = [];
var len__37853__auto___40333 = arguments.length;
var i__37854__auto___40334 = (0);
while(true){
if((i__37854__auto___40334 < len__37853__auto___40333)){
args40330.push((arguments[i__37854__auto___40334]));

var G__40335 = (i__37854__auto___40334 + (1));
i__37854__auto___40334 = G__40335;
continue;
} else {
}
break;
}

var G__40332 = args40330.length;
switch (G__40332) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40330.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__37441__auto__ = (((m == null))?null:m);
var m__37442__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__37441__auto__)]);
if(!((m__37442__auto__ == null))){
return m__37442__auto__.call(null,m,ch);
} else {
var m__37442__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__37442__auto____$1 == null))){
return m__37442__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__37441__auto__ = (((m == null))?null:m);
var m__37442__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__37441__auto__)]);
if(!((m__37442__auto__ == null))){
return m__37442__auto__.call(null,m,ch);
} else {
var m__37442__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__37442__auto____$1 == null))){
return m__37442__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__37441__auto__ = (((m == null))?null:m);
var m__37442__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__37441__auto__)]);
if(!((m__37442__auto__ == null))){
return m__37442__auto__.call(null,m);
} else {
var m__37442__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__37442__auto____$1 == null))){
return m__37442__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__37441__auto__ = (((m == null))?null:m);
var m__37442__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__37441__auto__)]);
if(!((m__37442__auto__ == null))){
return m__37442__auto__.call(null,m,state_map);
} else {
var m__37442__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__37442__auto____$1 == null))){
return m__37442__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__37441__auto__ = (((m == null))?null:m);
var m__37442__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__37441__auto__)]);
if(!((m__37442__auto__ == null))){
return m__37442__auto__.call(null,m,mode);
} else {
var m__37442__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__37442__auto____$1 == null))){
return m__37442__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__37860__auto__ = [];
var len__37853__auto___40347 = arguments.length;
var i__37854__auto___40348 = (0);
while(true){
if((i__37854__auto___40348 < len__37853__auto___40347)){
args__37860__auto__.push((arguments[i__37854__auto___40348]));

var G__40349 = (i__37854__auto___40348 + (1));
i__37854__auto___40348 = G__40349;
continue;
} else {
}
break;
}

var argseq__37861__auto__ = ((((3) < args__37860__auto__.length))?(new cljs.core.IndexedSeq(args__37860__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__37861__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__40341){
var map__40342 = p__40341;
var map__40342__$1 = ((((!((map__40342 == null)))?((((map__40342.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40342.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40342):map__40342);
var opts = map__40342__$1;
var statearr_40344_40350 = state;
(statearr_40344_40350[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__40342,map__40342__$1,opts){
return (function (val){
var statearr_40345_40351 = state;
(statearr_40345_40351[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__40342,map__40342__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_40346_40352 = state;
(statearr_40346_40352[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq40337){
var G__40338 = cljs.core.first.call(null,seq40337);
var seq40337__$1 = cljs.core.next.call(null,seq40337);
var G__40339 = cljs.core.first.call(null,seq40337__$1);
var seq40337__$2 = cljs.core.next.call(null,seq40337__$1);
var G__40340 = cljs.core.first.call(null,seq40337__$2);
var seq40337__$3 = cljs.core.next.call(null,seq40337__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__40338,G__40339,G__40340,seq40337__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async40518 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40518 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta40519){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta40519 = meta40519;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async40518.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_40520,meta40519__$1){
var self__ = this;
var _40520__$1 = this;
return (new cljs.core.async.t_cljs$core$async40518(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta40519__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40518.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_40520){
var self__ = this;
var _40520__$1 = this;
return self__.meta40519;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40518.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async40518.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40518.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async40518.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40518.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40518.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40518.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40518.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40518.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta40519","meta40519",-1511070876,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40518.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40518.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40518";

cljs.core.async.t_cljs$core$async40518.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__37384__auto__,writer__37385__auto__,opt__37386__auto__){
return cljs.core._write.call(null,writer__37385__auto__,"cljs.core.async/t_cljs$core$async40518");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async40518 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async40518(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta40519){
return (new cljs.core.async.t_cljs$core$async40518(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta40519));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async40518(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__38950__auto___40683 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38950__auto___40683,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__38951__auto__ = (function (){var switch__38796__auto__ = ((function (c__38950__auto___40683,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_40620){
var state_val_40621 = (state_40620[(1)]);
if((state_val_40621 === (7))){
var inst_40536 = (state_40620[(2)]);
var state_40620__$1 = state_40620;
var statearr_40622_40684 = state_40620__$1;
(statearr_40622_40684[(2)] = inst_40536);

(statearr_40622_40684[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40621 === (20))){
var inst_40548 = (state_40620[(7)]);
var state_40620__$1 = state_40620;
var statearr_40623_40685 = state_40620__$1;
(statearr_40623_40685[(2)] = inst_40548);

(statearr_40623_40685[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40621 === (27))){
var state_40620__$1 = state_40620;
var statearr_40624_40686 = state_40620__$1;
(statearr_40624_40686[(2)] = null);

(statearr_40624_40686[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40621 === (1))){
var inst_40524 = (state_40620[(8)]);
var inst_40524__$1 = calc_state.call(null);
var inst_40526 = (inst_40524__$1 == null);
var inst_40527 = cljs.core.not.call(null,inst_40526);
var state_40620__$1 = (function (){var statearr_40625 = state_40620;
(statearr_40625[(8)] = inst_40524__$1);

return statearr_40625;
})();
if(inst_40527){
var statearr_40626_40687 = state_40620__$1;
(statearr_40626_40687[(1)] = (2));

} else {
var statearr_40627_40688 = state_40620__$1;
(statearr_40627_40688[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40621 === (24))){
var inst_40594 = (state_40620[(9)]);
var inst_40571 = (state_40620[(10)]);
var inst_40580 = (state_40620[(11)]);
var inst_40594__$1 = inst_40571.call(null,inst_40580);
var state_40620__$1 = (function (){var statearr_40628 = state_40620;
(statearr_40628[(9)] = inst_40594__$1);

return statearr_40628;
})();
if(cljs.core.truth_(inst_40594__$1)){
var statearr_40629_40689 = state_40620__$1;
(statearr_40629_40689[(1)] = (29));

} else {
var statearr_40630_40690 = state_40620__$1;
(statearr_40630_40690[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40621 === (4))){
var inst_40539 = (state_40620[(2)]);
var state_40620__$1 = state_40620;
if(cljs.core.truth_(inst_40539)){
var statearr_40631_40691 = state_40620__$1;
(statearr_40631_40691[(1)] = (8));

} else {
var statearr_40632_40692 = state_40620__$1;
(statearr_40632_40692[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40621 === (15))){
var inst_40565 = (state_40620[(2)]);
var state_40620__$1 = state_40620;
if(cljs.core.truth_(inst_40565)){
var statearr_40633_40693 = state_40620__$1;
(statearr_40633_40693[(1)] = (19));

} else {
var statearr_40634_40694 = state_40620__$1;
(statearr_40634_40694[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40621 === (21))){
var inst_40570 = (state_40620[(12)]);
var inst_40570__$1 = (state_40620[(2)]);
var inst_40571 = cljs.core.get.call(null,inst_40570__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_40572 = cljs.core.get.call(null,inst_40570__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_40573 = cljs.core.get.call(null,inst_40570__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_40620__$1 = (function (){var statearr_40635 = state_40620;
(statearr_40635[(12)] = inst_40570__$1);

(statearr_40635[(13)] = inst_40572);

(statearr_40635[(10)] = inst_40571);

return statearr_40635;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_40620__$1,(22),inst_40573);
} else {
if((state_val_40621 === (31))){
var inst_40602 = (state_40620[(2)]);
var state_40620__$1 = state_40620;
if(cljs.core.truth_(inst_40602)){
var statearr_40636_40695 = state_40620__$1;
(statearr_40636_40695[(1)] = (32));

} else {
var statearr_40637_40696 = state_40620__$1;
(statearr_40637_40696[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40621 === (32))){
var inst_40579 = (state_40620[(14)]);
var state_40620__$1 = state_40620;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40620__$1,(35),out,inst_40579);
} else {
if((state_val_40621 === (33))){
var inst_40570 = (state_40620[(12)]);
var inst_40548 = inst_40570;
var state_40620__$1 = (function (){var statearr_40638 = state_40620;
(statearr_40638[(7)] = inst_40548);

return statearr_40638;
})();
var statearr_40639_40697 = state_40620__$1;
(statearr_40639_40697[(2)] = null);

(statearr_40639_40697[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40621 === (13))){
var inst_40548 = (state_40620[(7)]);
var inst_40555 = inst_40548.cljs$lang$protocol_mask$partition0$;
var inst_40556 = (inst_40555 & (64));
var inst_40557 = inst_40548.cljs$core$ISeq$;
var inst_40558 = (inst_40556) || (inst_40557);
var state_40620__$1 = state_40620;
if(cljs.core.truth_(inst_40558)){
var statearr_40640_40698 = state_40620__$1;
(statearr_40640_40698[(1)] = (16));

} else {
var statearr_40641_40699 = state_40620__$1;
(statearr_40641_40699[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40621 === (22))){
var inst_40580 = (state_40620[(11)]);
var inst_40579 = (state_40620[(14)]);
var inst_40578 = (state_40620[(2)]);
var inst_40579__$1 = cljs.core.nth.call(null,inst_40578,(0),null);
var inst_40580__$1 = cljs.core.nth.call(null,inst_40578,(1),null);
var inst_40581 = (inst_40579__$1 == null);
var inst_40582 = cljs.core._EQ_.call(null,inst_40580__$1,change);
var inst_40583 = (inst_40581) || (inst_40582);
var state_40620__$1 = (function (){var statearr_40642 = state_40620;
(statearr_40642[(11)] = inst_40580__$1);

(statearr_40642[(14)] = inst_40579__$1);

return statearr_40642;
})();
if(cljs.core.truth_(inst_40583)){
var statearr_40643_40700 = state_40620__$1;
(statearr_40643_40700[(1)] = (23));

} else {
var statearr_40644_40701 = state_40620__$1;
(statearr_40644_40701[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40621 === (36))){
var inst_40570 = (state_40620[(12)]);
var inst_40548 = inst_40570;
var state_40620__$1 = (function (){var statearr_40645 = state_40620;
(statearr_40645[(7)] = inst_40548);

return statearr_40645;
})();
var statearr_40646_40702 = state_40620__$1;
(statearr_40646_40702[(2)] = null);

(statearr_40646_40702[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40621 === (29))){
var inst_40594 = (state_40620[(9)]);
var state_40620__$1 = state_40620;
var statearr_40647_40703 = state_40620__$1;
(statearr_40647_40703[(2)] = inst_40594);

(statearr_40647_40703[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40621 === (6))){
var state_40620__$1 = state_40620;
var statearr_40648_40704 = state_40620__$1;
(statearr_40648_40704[(2)] = false);

(statearr_40648_40704[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40621 === (28))){
var inst_40590 = (state_40620[(2)]);
var inst_40591 = calc_state.call(null);
var inst_40548 = inst_40591;
var state_40620__$1 = (function (){var statearr_40649 = state_40620;
(statearr_40649[(7)] = inst_40548);

(statearr_40649[(15)] = inst_40590);

return statearr_40649;
})();
var statearr_40650_40705 = state_40620__$1;
(statearr_40650_40705[(2)] = null);

(statearr_40650_40705[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40621 === (25))){
var inst_40616 = (state_40620[(2)]);
var state_40620__$1 = state_40620;
var statearr_40651_40706 = state_40620__$1;
(statearr_40651_40706[(2)] = inst_40616);

(statearr_40651_40706[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40621 === (34))){
var inst_40614 = (state_40620[(2)]);
var state_40620__$1 = state_40620;
var statearr_40652_40707 = state_40620__$1;
(statearr_40652_40707[(2)] = inst_40614);

(statearr_40652_40707[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40621 === (17))){
var state_40620__$1 = state_40620;
var statearr_40653_40708 = state_40620__$1;
(statearr_40653_40708[(2)] = false);

(statearr_40653_40708[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40621 === (3))){
var state_40620__$1 = state_40620;
var statearr_40654_40709 = state_40620__$1;
(statearr_40654_40709[(2)] = false);

(statearr_40654_40709[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40621 === (12))){
var inst_40618 = (state_40620[(2)]);
var state_40620__$1 = state_40620;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40620__$1,inst_40618);
} else {
if((state_val_40621 === (2))){
var inst_40524 = (state_40620[(8)]);
var inst_40529 = inst_40524.cljs$lang$protocol_mask$partition0$;
var inst_40530 = (inst_40529 & (64));
var inst_40531 = inst_40524.cljs$core$ISeq$;
var inst_40532 = (inst_40530) || (inst_40531);
var state_40620__$1 = state_40620;
if(cljs.core.truth_(inst_40532)){
var statearr_40655_40710 = state_40620__$1;
(statearr_40655_40710[(1)] = (5));

} else {
var statearr_40656_40711 = state_40620__$1;
(statearr_40656_40711[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40621 === (23))){
var inst_40579 = (state_40620[(14)]);
var inst_40585 = (inst_40579 == null);
var state_40620__$1 = state_40620;
if(cljs.core.truth_(inst_40585)){
var statearr_40657_40712 = state_40620__$1;
(statearr_40657_40712[(1)] = (26));

} else {
var statearr_40658_40713 = state_40620__$1;
(statearr_40658_40713[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40621 === (35))){
var inst_40605 = (state_40620[(2)]);
var state_40620__$1 = state_40620;
if(cljs.core.truth_(inst_40605)){
var statearr_40659_40714 = state_40620__$1;
(statearr_40659_40714[(1)] = (36));

} else {
var statearr_40660_40715 = state_40620__$1;
(statearr_40660_40715[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40621 === (19))){
var inst_40548 = (state_40620[(7)]);
var inst_40567 = cljs.core.apply.call(null,cljs.core.hash_map,inst_40548);
var state_40620__$1 = state_40620;
var statearr_40661_40716 = state_40620__$1;
(statearr_40661_40716[(2)] = inst_40567);

(statearr_40661_40716[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40621 === (11))){
var inst_40548 = (state_40620[(7)]);
var inst_40552 = (inst_40548 == null);
var inst_40553 = cljs.core.not.call(null,inst_40552);
var state_40620__$1 = state_40620;
if(inst_40553){
var statearr_40662_40717 = state_40620__$1;
(statearr_40662_40717[(1)] = (13));

} else {
var statearr_40663_40718 = state_40620__$1;
(statearr_40663_40718[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40621 === (9))){
var inst_40524 = (state_40620[(8)]);
var state_40620__$1 = state_40620;
var statearr_40664_40719 = state_40620__$1;
(statearr_40664_40719[(2)] = inst_40524);

(statearr_40664_40719[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40621 === (5))){
var state_40620__$1 = state_40620;
var statearr_40665_40720 = state_40620__$1;
(statearr_40665_40720[(2)] = true);

(statearr_40665_40720[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40621 === (14))){
var state_40620__$1 = state_40620;
var statearr_40666_40721 = state_40620__$1;
(statearr_40666_40721[(2)] = false);

(statearr_40666_40721[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40621 === (26))){
var inst_40580 = (state_40620[(11)]);
var inst_40587 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_40580);
var state_40620__$1 = state_40620;
var statearr_40667_40722 = state_40620__$1;
(statearr_40667_40722[(2)] = inst_40587);

(statearr_40667_40722[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40621 === (16))){
var state_40620__$1 = state_40620;
var statearr_40668_40723 = state_40620__$1;
(statearr_40668_40723[(2)] = true);

(statearr_40668_40723[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40621 === (38))){
var inst_40610 = (state_40620[(2)]);
var state_40620__$1 = state_40620;
var statearr_40669_40724 = state_40620__$1;
(statearr_40669_40724[(2)] = inst_40610);

(statearr_40669_40724[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40621 === (30))){
var inst_40572 = (state_40620[(13)]);
var inst_40571 = (state_40620[(10)]);
var inst_40580 = (state_40620[(11)]);
var inst_40597 = cljs.core.empty_QMARK_.call(null,inst_40571);
var inst_40598 = inst_40572.call(null,inst_40580);
var inst_40599 = cljs.core.not.call(null,inst_40598);
var inst_40600 = (inst_40597) && (inst_40599);
var state_40620__$1 = state_40620;
var statearr_40670_40725 = state_40620__$1;
(statearr_40670_40725[(2)] = inst_40600);

(statearr_40670_40725[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40621 === (10))){
var inst_40524 = (state_40620[(8)]);
var inst_40544 = (state_40620[(2)]);
var inst_40545 = cljs.core.get.call(null,inst_40544,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_40546 = cljs.core.get.call(null,inst_40544,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_40547 = cljs.core.get.call(null,inst_40544,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_40548 = inst_40524;
var state_40620__$1 = (function (){var statearr_40671 = state_40620;
(statearr_40671[(7)] = inst_40548);

(statearr_40671[(16)] = inst_40547);

(statearr_40671[(17)] = inst_40546);

(statearr_40671[(18)] = inst_40545);

return statearr_40671;
})();
var statearr_40672_40726 = state_40620__$1;
(statearr_40672_40726[(2)] = null);

(statearr_40672_40726[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40621 === (18))){
var inst_40562 = (state_40620[(2)]);
var state_40620__$1 = state_40620;
var statearr_40673_40727 = state_40620__$1;
(statearr_40673_40727[(2)] = inst_40562);

(statearr_40673_40727[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40621 === (37))){
var state_40620__$1 = state_40620;
var statearr_40674_40728 = state_40620__$1;
(statearr_40674_40728[(2)] = null);

(statearr_40674_40728[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40621 === (8))){
var inst_40524 = (state_40620[(8)]);
var inst_40541 = cljs.core.apply.call(null,cljs.core.hash_map,inst_40524);
var state_40620__$1 = state_40620;
var statearr_40675_40729 = state_40620__$1;
(statearr_40675_40729[(2)] = inst_40541);

(statearr_40675_40729[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__38950__auto___40683,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__38796__auto__,c__38950__auto___40683,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__38797__auto__ = null;
var cljs$core$async$mix_$_state_machine__38797__auto____0 = (function (){
var statearr_40679 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40679[(0)] = cljs$core$async$mix_$_state_machine__38797__auto__);

(statearr_40679[(1)] = (1));

return statearr_40679;
});
var cljs$core$async$mix_$_state_machine__38797__auto____1 = (function (state_40620){
while(true){
var ret_value__38798__auto__ = (function (){try{while(true){
var result__38799__auto__ = switch__38796__auto__.call(null,state_40620);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38799__auto__;
}
break;
}
}catch (e40680){if((e40680 instanceof Object)){
var ex__38800__auto__ = e40680;
var statearr_40681_40730 = state_40620;
(statearr_40681_40730[(5)] = ex__38800__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40620);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40680;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40731 = state_40620;
state_40620 = G__40731;
continue;
} else {
return ret_value__38798__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__38797__auto__ = function(state_40620){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__38797__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__38797__auto____1.call(this,state_40620);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__38797__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__38797__auto____0;
cljs$core$async$mix_$_state_machine__38797__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__38797__auto____1;
return cljs$core$async$mix_$_state_machine__38797__auto__;
})()
;})(switch__38796__auto__,c__38950__auto___40683,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__38952__auto__ = (function (){var statearr_40682 = f__38951__auto__.call(null);
(statearr_40682[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38950__auto___40683);

return statearr_40682;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38952__auto__);
});})(c__38950__auto___40683,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__37441__auto__ = (((p == null))?null:p);
var m__37442__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__37441__auto__)]);
if(!((m__37442__auto__ == null))){
return m__37442__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__37442__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__37442__auto____$1 == null))){
return m__37442__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__37441__auto__ = (((p == null))?null:p);
var m__37442__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__37441__auto__)]);
if(!((m__37442__auto__ == null))){
return m__37442__auto__.call(null,p,v,ch);
} else {
var m__37442__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__37442__auto____$1 == null))){
return m__37442__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args40732 = [];
var len__37853__auto___40735 = arguments.length;
var i__37854__auto___40736 = (0);
while(true){
if((i__37854__auto___40736 < len__37853__auto___40735)){
args40732.push((arguments[i__37854__auto___40736]));

var G__40737 = (i__37854__auto___40736 + (1));
i__37854__auto___40736 = G__40737;
continue;
} else {
}
break;
}

var G__40734 = args40732.length;
switch (G__40734) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40732.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__37441__auto__ = (((p == null))?null:p);
var m__37442__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__37441__auto__)]);
if(!((m__37442__auto__ == null))){
return m__37442__auto__.call(null,p);
} else {
var m__37442__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__37442__auto____$1 == null))){
return m__37442__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__37441__auto__ = (((p == null))?null:p);
var m__37442__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__37441__auto__)]);
if(!((m__37442__auto__ == null))){
return m__37442__auto__.call(null,p,v);
} else {
var m__37442__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__37442__auto____$1 == null))){
return m__37442__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args40740 = [];
var len__37853__auto___40865 = arguments.length;
var i__37854__auto___40866 = (0);
while(true){
if((i__37854__auto___40866 < len__37853__auto___40865)){
args40740.push((arguments[i__37854__auto___40866]));

var G__40867 = (i__37854__auto___40866 + (1));
i__37854__auto___40866 = G__40867;
continue;
} else {
}
break;
}

var G__40742 = args40740.length;
switch (G__40742) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40740.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__36778__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__36778__auto__)){
return or__36778__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__36778__auto__,mults){
return (function (p1__40739_SHARP_){
if(cljs.core.truth_(p1__40739_SHARP_.call(null,topic))){
return p1__40739_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__40739_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__36778__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async40743 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40743 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta40744){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta40744 = meta40744;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async40743.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_40745,meta40744__$1){
var self__ = this;
var _40745__$1 = this;
return (new cljs.core.async.t_cljs$core$async40743(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta40744__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40743.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_40745){
var self__ = this;
var _40745__$1 = this;
return self__.meta40744;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40743.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async40743.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40743.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async40743.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40743.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40743.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40743.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40743.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta40744","meta40744",1862533061,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40743.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40743.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40743";

cljs.core.async.t_cljs$core$async40743.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__37384__auto__,writer__37385__auto__,opt__37386__auto__){
return cljs.core._write.call(null,writer__37385__auto__,"cljs.core.async/t_cljs$core$async40743");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async40743 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async40743(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta40744){
return (new cljs.core.async.t_cljs$core$async40743(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta40744));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async40743(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__38950__auto___40869 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38950__auto___40869,mults,ensure_mult,p){
return (function (){
var f__38951__auto__ = (function (){var switch__38796__auto__ = ((function (c__38950__auto___40869,mults,ensure_mult,p){
return (function (state_40817){
var state_val_40818 = (state_40817[(1)]);
if((state_val_40818 === (7))){
var inst_40813 = (state_40817[(2)]);
var state_40817__$1 = state_40817;
var statearr_40819_40870 = state_40817__$1;
(statearr_40819_40870[(2)] = inst_40813);

(statearr_40819_40870[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40818 === (20))){
var state_40817__$1 = state_40817;
var statearr_40820_40871 = state_40817__$1;
(statearr_40820_40871[(2)] = null);

(statearr_40820_40871[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40818 === (1))){
var state_40817__$1 = state_40817;
var statearr_40821_40872 = state_40817__$1;
(statearr_40821_40872[(2)] = null);

(statearr_40821_40872[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40818 === (24))){
var inst_40796 = (state_40817[(7)]);
var inst_40805 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_40796);
var state_40817__$1 = state_40817;
var statearr_40822_40873 = state_40817__$1;
(statearr_40822_40873[(2)] = inst_40805);

(statearr_40822_40873[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40818 === (4))){
var inst_40748 = (state_40817[(8)]);
var inst_40748__$1 = (state_40817[(2)]);
var inst_40749 = (inst_40748__$1 == null);
var state_40817__$1 = (function (){var statearr_40823 = state_40817;
(statearr_40823[(8)] = inst_40748__$1);

return statearr_40823;
})();
if(cljs.core.truth_(inst_40749)){
var statearr_40824_40874 = state_40817__$1;
(statearr_40824_40874[(1)] = (5));

} else {
var statearr_40825_40875 = state_40817__$1;
(statearr_40825_40875[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40818 === (15))){
var inst_40790 = (state_40817[(2)]);
var state_40817__$1 = state_40817;
var statearr_40826_40876 = state_40817__$1;
(statearr_40826_40876[(2)] = inst_40790);

(statearr_40826_40876[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40818 === (21))){
var inst_40810 = (state_40817[(2)]);
var state_40817__$1 = (function (){var statearr_40827 = state_40817;
(statearr_40827[(9)] = inst_40810);

return statearr_40827;
})();
var statearr_40828_40877 = state_40817__$1;
(statearr_40828_40877[(2)] = null);

(statearr_40828_40877[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40818 === (13))){
var inst_40772 = (state_40817[(10)]);
var inst_40774 = cljs.core.chunked_seq_QMARK_.call(null,inst_40772);
var state_40817__$1 = state_40817;
if(inst_40774){
var statearr_40829_40878 = state_40817__$1;
(statearr_40829_40878[(1)] = (16));

} else {
var statearr_40830_40879 = state_40817__$1;
(statearr_40830_40879[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40818 === (22))){
var inst_40802 = (state_40817[(2)]);
var state_40817__$1 = state_40817;
if(cljs.core.truth_(inst_40802)){
var statearr_40831_40880 = state_40817__$1;
(statearr_40831_40880[(1)] = (23));

} else {
var statearr_40832_40881 = state_40817__$1;
(statearr_40832_40881[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40818 === (6))){
var inst_40748 = (state_40817[(8)]);
var inst_40796 = (state_40817[(7)]);
var inst_40798 = (state_40817[(11)]);
var inst_40796__$1 = topic_fn.call(null,inst_40748);
var inst_40797 = cljs.core.deref.call(null,mults);
var inst_40798__$1 = cljs.core.get.call(null,inst_40797,inst_40796__$1);
var state_40817__$1 = (function (){var statearr_40833 = state_40817;
(statearr_40833[(7)] = inst_40796__$1);

(statearr_40833[(11)] = inst_40798__$1);

return statearr_40833;
})();
if(cljs.core.truth_(inst_40798__$1)){
var statearr_40834_40882 = state_40817__$1;
(statearr_40834_40882[(1)] = (19));

} else {
var statearr_40835_40883 = state_40817__$1;
(statearr_40835_40883[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40818 === (25))){
var inst_40807 = (state_40817[(2)]);
var state_40817__$1 = state_40817;
var statearr_40836_40884 = state_40817__$1;
(statearr_40836_40884[(2)] = inst_40807);

(statearr_40836_40884[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40818 === (17))){
var inst_40772 = (state_40817[(10)]);
var inst_40781 = cljs.core.first.call(null,inst_40772);
var inst_40782 = cljs.core.async.muxch_STAR_.call(null,inst_40781);
var inst_40783 = cljs.core.async.close_BANG_.call(null,inst_40782);
var inst_40784 = cljs.core.next.call(null,inst_40772);
var inst_40758 = inst_40784;
var inst_40759 = null;
var inst_40760 = (0);
var inst_40761 = (0);
var state_40817__$1 = (function (){var statearr_40837 = state_40817;
(statearr_40837[(12)] = inst_40783);

(statearr_40837[(13)] = inst_40760);

(statearr_40837[(14)] = inst_40759);

(statearr_40837[(15)] = inst_40761);

(statearr_40837[(16)] = inst_40758);

return statearr_40837;
})();
var statearr_40838_40885 = state_40817__$1;
(statearr_40838_40885[(2)] = null);

(statearr_40838_40885[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40818 === (3))){
var inst_40815 = (state_40817[(2)]);
var state_40817__$1 = state_40817;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40817__$1,inst_40815);
} else {
if((state_val_40818 === (12))){
var inst_40792 = (state_40817[(2)]);
var state_40817__$1 = state_40817;
var statearr_40839_40886 = state_40817__$1;
(statearr_40839_40886[(2)] = inst_40792);

(statearr_40839_40886[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40818 === (2))){
var state_40817__$1 = state_40817;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40817__$1,(4),ch);
} else {
if((state_val_40818 === (23))){
var state_40817__$1 = state_40817;
var statearr_40840_40887 = state_40817__$1;
(statearr_40840_40887[(2)] = null);

(statearr_40840_40887[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40818 === (19))){
var inst_40748 = (state_40817[(8)]);
var inst_40798 = (state_40817[(11)]);
var inst_40800 = cljs.core.async.muxch_STAR_.call(null,inst_40798);
var state_40817__$1 = state_40817;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40817__$1,(22),inst_40800,inst_40748);
} else {
if((state_val_40818 === (11))){
var inst_40772 = (state_40817[(10)]);
var inst_40758 = (state_40817[(16)]);
var inst_40772__$1 = cljs.core.seq.call(null,inst_40758);
var state_40817__$1 = (function (){var statearr_40841 = state_40817;
(statearr_40841[(10)] = inst_40772__$1);

return statearr_40841;
})();
if(inst_40772__$1){
var statearr_40842_40888 = state_40817__$1;
(statearr_40842_40888[(1)] = (13));

} else {
var statearr_40843_40889 = state_40817__$1;
(statearr_40843_40889[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40818 === (9))){
var inst_40794 = (state_40817[(2)]);
var state_40817__$1 = state_40817;
var statearr_40844_40890 = state_40817__$1;
(statearr_40844_40890[(2)] = inst_40794);

(statearr_40844_40890[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40818 === (5))){
var inst_40755 = cljs.core.deref.call(null,mults);
var inst_40756 = cljs.core.vals.call(null,inst_40755);
var inst_40757 = cljs.core.seq.call(null,inst_40756);
var inst_40758 = inst_40757;
var inst_40759 = null;
var inst_40760 = (0);
var inst_40761 = (0);
var state_40817__$1 = (function (){var statearr_40845 = state_40817;
(statearr_40845[(13)] = inst_40760);

(statearr_40845[(14)] = inst_40759);

(statearr_40845[(15)] = inst_40761);

(statearr_40845[(16)] = inst_40758);

return statearr_40845;
})();
var statearr_40846_40891 = state_40817__$1;
(statearr_40846_40891[(2)] = null);

(statearr_40846_40891[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40818 === (14))){
var state_40817__$1 = state_40817;
var statearr_40850_40892 = state_40817__$1;
(statearr_40850_40892[(2)] = null);

(statearr_40850_40892[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40818 === (16))){
var inst_40772 = (state_40817[(10)]);
var inst_40776 = cljs.core.chunk_first.call(null,inst_40772);
var inst_40777 = cljs.core.chunk_rest.call(null,inst_40772);
var inst_40778 = cljs.core.count.call(null,inst_40776);
var inst_40758 = inst_40777;
var inst_40759 = inst_40776;
var inst_40760 = inst_40778;
var inst_40761 = (0);
var state_40817__$1 = (function (){var statearr_40851 = state_40817;
(statearr_40851[(13)] = inst_40760);

(statearr_40851[(14)] = inst_40759);

(statearr_40851[(15)] = inst_40761);

(statearr_40851[(16)] = inst_40758);

return statearr_40851;
})();
var statearr_40852_40893 = state_40817__$1;
(statearr_40852_40893[(2)] = null);

(statearr_40852_40893[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40818 === (10))){
var inst_40760 = (state_40817[(13)]);
var inst_40759 = (state_40817[(14)]);
var inst_40761 = (state_40817[(15)]);
var inst_40758 = (state_40817[(16)]);
var inst_40766 = cljs.core._nth.call(null,inst_40759,inst_40761);
var inst_40767 = cljs.core.async.muxch_STAR_.call(null,inst_40766);
var inst_40768 = cljs.core.async.close_BANG_.call(null,inst_40767);
var inst_40769 = (inst_40761 + (1));
var tmp40847 = inst_40760;
var tmp40848 = inst_40759;
var tmp40849 = inst_40758;
var inst_40758__$1 = tmp40849;
var inst_40759__$1 = tmp40848;
var inst_40760__$1 = tmp40847;
var inst_40761__$1 = inst_40769;
var state_40817__$1 = (function (){var statearr_40853 = state_40817;
(statearr_40853[(13)] = inst_40760__$1);

(statearr_40853[(14)] = inst_40759__$1);

(statearr_40853[(17)] = inst_40768);

(statearr_40853[(15)] = inst_40761__$1);

(statearr_40853[(16)] = inst_40758__$1);

return statearr_40853;
})();
var statearr_40854_40894 = state_40817__$1;
(statearr_40854_40894[(2)] = null);

(statearr_40854_40894[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40818 === (18))){
var inst_40787 = (state_40817[(2)]);
var state_40817__$1 = state_40817;
var statearr_40855_40895 = state_40817__$1;
(statearr_40855_40895[(2)] = inst_40787);

(statearr_40855_40895[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40818 === (8))){
var inst_40760 = (state_40817[(13)]);
var inst_40761 = (state_40817[(15)]);
var inst_40763 = (inst_40761 < inst_40760);
var inst_40764 = inst_40763;
var state_40817__$1 = state_40817;
if(cljs.core.truth_(inst_40764)){
var statearr_40856_40896 = state_40817__$1;
(statearr_40856_40896[(1)] = (10));

} else {
var statearr_40857_40897 = state_40817__$1;
(statearr_40857_40897[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__38950__auto___40869,mults,ensure_mult,p))
;
return ((function (switch__38796__auto__,c__38950__auto___40869,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__38797__auto__ = null;
var cljs$core$async$state_machine__38797__auto____0 = (function (){
var statearr_40861 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40861[(0)] = cljs$core$async$state_machine__38797__auto__);

(statearr_40861[(1)] = (1));

return statearr_40861;
});
var cljs$core$async$state_machine__38797__auto____1 = (function (state_40817){
while(true){
var ret_value__38798__auto__ = (function (){try{while(true){
var result__38799__auto__ = switch__38796__auto__.call(null,state_40817);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38799__auto__;
}
break;
}
}catch (e40862){if((e40862 instanceof Object)){
var ex__38800__auto__ = e40862;
var statearr_40863_40898 = state_40817;
(statearr_40863_40898[(5)] = ex__38800__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40817);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40862;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40899 = state_40817;
state_40817 = G__40899;
continue;
} else {
return ret_value__38798__auto__;
}
break;
}
});
cljs$core$async$state_machine__38797__auto__ = function(state_40817){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38797__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38797__auto____1.call(this,state_40817);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38797__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38797__auto____0;
cljs$core$async$state_machine__38797__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38797__auto____1;
return cljs$core$async$state_machine__38797__auto__;
})()
;})(switch__38796__auto__,c__38950__auto___40869,mults,ensure_mult,p))
})();
var state__38952__auto__ = (function (){var statearr_40864 = f__38951__auto__.call(null);
(statearr_40864[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38950__auto___40869);

return statearr_40864;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38952__auto__);
});})(c__38950__auto___40869,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args40900 = [];
var len__37853__auto___40903 = arguments.length;
var i__37854__auto___40904 = (0);
while(true){
if((i__37854__auto___40904 < len__37853__auto___40903)){
args40900.push((arguments[i__37854__auto___40904]));

var G__40905 = (i__37854__auto___40904 + (1));
i__37854__auto___40904 = G__40905;
continue;
} else {
}
break;
}

var G__40902 = args40900.length;
switch (G__40902) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40900.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args40907 = [];
var len__37853__auto___40910 = arguments.length;
var i__37854__auto___40911 = (0);
while(true){
if((i__37854__auto___40911 < len__37853__auto___40910)){
args40907.push((arguments[i__37854__auto___40911]));

var G__40912 = (i__37854__auto___40911 + (1));
i__37854__auto___40911 = G__40912;
continue;
} else {
}
break;
}

var G__40909 = args40907.length;
switch (G__40909) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40907.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args40914 = [];
var len__37853__auto___40985 = arguments.length;
var i__37854__auto___40986 = (0);
while(true){
if((i__37854__auto___40986 < len__37853__auto___40985)){
args40914.push((arguments[i__37854__auto___40986]));

var G__40987 = (i__37854__auto___40986 + (1));
i__37854__auto___40986 = G__40987;
continue;
} else {
}
break;
}

var G__40916 = args40914.length;
switch (G__40916) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40914.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__38950__auto___40989 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38950__auto___40989,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__38951__auto__ = (function (){var switch__38796__auto__ = ((function (c__38950__auto___40989,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_40955){
var state_val_40956 = (state_40955[(1)]);
if((state_val_40956 === (7))){
var state_40955__$1 = state_40955;
var statearr_40957_40990 = state_40955__$1;
(statearr_40957_40990[(2)] = null);

(statearr_40957_40990[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40956 === (1))){
var state_40955__$1 = state_40955;
var statearr_40958_40991 = state_40955__$1;
(statearr_40958_40991[(2)] = null);

(statearr_40958_40991[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40956 === (4))){
var inst_40919 = (state_40955[(7)]);
var inst_40921 = (inst_40919 < cnt);
var state_40955__$1 = state_40955;
if(cljs.core.truth_(inst_40921)){
var statearr_40959_40992 = state_40955__$1;
(statearr_40959_40992[(1)] = (6));

} else {
var statearr_40960_40993 = state_40955__$1;
(statearr_40960_40993[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40956 === (15))){
var inst_40951 = (state_40955[(2)]);
var state_40955__$1 = state_40955;
var statearr_40961_40994 = state_40955__$1;
(statearr_40961_40994[(2)] = inst_40951);

(statearr_40961_40994[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40956 === (13))){
var inst_40944 = cljs.core.async.close_BANG_.call(null,out);
var state_40955__$1 = state_40955;
var statearr_40962_40995 = state_40955__$1;
(statearr_40962_40995[(2)] = inst_40944);

(statearr_40962_40995[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40956 === (6))){
var state_40955__$1 = state_40955;
var statearr_40963_40996 = state_40955__$1;
(statearr_40963_40996[(2)] = null);

(statearr_40963_40996[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40956 === (3))){
var inst_40953 = (state_40955[(2)]);
var state_40955__$1 = state_40955;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40955__$1,inst_40953);
} else {
if((state_val_40956 === (12))){
var inst_40941 = (state_40955[(8)]);
var inst_40941__$1 = (state_40955[(2)]);
var inst_40942 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_40941__$1);
var state_40955__$1 = (function (){var statearr_40964 = state_40955;
(statearr_40964[(8)] = inst_40941__$1);

return statearr_40964;
})();
if(cljs.core.truth_(inst_40942)){
var statearr_40965_40997 = state_40955__$1;
(statearr_40965_40997[(1)] = (13));

} else {
var statearr_40966_40998 = state_40955__$1;
(statearr_40966_40998[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40956 === (2))){
var inst_40918 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_40919 = (0);
var state_40955__$1 = (function (){var statearr_40967 = state_40955;
(statearr_40967[(9)] = inst_40918);

(statearr_40967[(7)] = inst_40919);

return statearr_40967;
})();
var statearr_40968_40999 = state_40955__$1;
(statearr_40968_40999[(2)] = null);

(statearr_40968_40999[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40956 === (11))){
var inst_40919 = (state_40955[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_40955,(10),Object,null,(9));
var inst_40928 = chs__$1.call(null,inst_40919);
var inst_40929 = done.call(null,inst_40919);
var inst_40930 = cljs.core.async.take_BANG_.call(null,inst_40928,inst_40929);
var state_40955__$1 = state_40955;
var statearr_40969_41000 = state_40955__$1;
(statearr_40969_41000[(2)] = inst_40930);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40955__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40956 === (9))){
var inst_40919 = (state_40955[(7)]);
var inst_40932 = (state_40955[(2)]);
var inst_40933 = (inst_40919 + (1));
var inst_40919__$1 = inst_40933;
var state_40955__$1 = (function (){var statearr_40970 = state_40955;
(statearr_40970[(7)] = inst_40919__$1);

(statearr_40970[(10)] = inst_40932);

return statearr_40970;
})();
var statearr_40971_41001 = state_40955__$1;
(statearr_40971_41001[(2)] = null);

(statearr_40971_41001[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40956 === (5))){
var inst_40939 = (state_40955[(2)]);
var state_40955__$1 = (function (){var statearr_40972 = state_40955;
(statearr_40972[(11)] = inst_40939);

return statearr_40972;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40955__$1,(12),dchan);
} else {
if((state_val_40956 === (14))){
var inst_40941 = (state_40955[(8)]);
var inst_40946 = cljs.core.apply.call(null,f,inst_40941);
var state_40955__$1 = state_40955;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40955__$1,(16),out,inst_40946);
} else {
if((state_val_40956 === (16))){
var inst_40948 = (state_40955[(2)]);
var state_40955__$1 = (function (){var statearr_40973 = state_40955;
(statearr_40973[(12)] = inst_40948);

return statearr_40973;
})();
var statearr_40974_41002 = state_40955__$1;
(statearr_40974_41002[(2)] = null);

(statearr_40974_41002[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40956 === (10))){
var inst_40923 = (state_40955[(2)]);
var inst_40924 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_40955__$1 = (function (){var statearr_40975 = state_40955;
(statearr_40975[(13)] = inst_40923);

return statearr_40975;
})();
var statearr_40976_41003 = state_40955__$1;
(statearr_40976_41003[(2)] = inst_40924);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40955__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40956 === (8))){
var inst_40937 = (state_40955[(2)]);
var state_40955__$1 = state_40955;
var statearr_40977_41004 = state_40955__$1;
(statearr_40977_41004[(2)] = inst_40937);

(statearr_40977_41004[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__38950__auto___40989,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__38796__auto__,c__38950__auto___40989,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__38797__auto__ = null;
var cljs$core$async$state_machine__38797__auto____0 = (function (){
var statearr_40981 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40981[(0)] = cljs$core$async$state_machine__38797__auto__);

(statearr_40981[(1)] = (1));

return statearr_40981;
});
var cljs$core$async$state_machine__38797__auto____1 = (function (state_40955){
while(true){
var ret_value__38798__auto__ = (function (){try{while(true){
var result__38799__auto__ = switch__38796__auto__.call(null,state_40955);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38799__auto__;
}
break;
}
}catch (e40982){if((e40982 instanceof Object)){
var ex__38800__auto__ = e40982;
var statearr_40983_41005 = state_40955;
(statearr_40983_41005[(5)] = ex__38800__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40955);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40982;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41006 = state_40955;
state_40955 = G__41006;
continue;
} else {
return ret_value__38798__auto__;
}
break;
}
});
cljs$core$async$state_machine__38797__auto__ = function(state_40955){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38797__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38797__auto____1.call(this,state_40955);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38797__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38797__auto____0;
cljs$core$async$state_machine__38797__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38797__auto____1;
return cljs$core$async$state_machine__38797__auto__;
})()
;})(switch__38796__auto__,c__38950__auto___40989,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__38952__auto__ = (function (){var statearr_40984 = f__38951__auto__.call(null);
(statearr_40984[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38950__auto___40989);

return statearr_40984;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38952__auto__);
});})(c__38950__auto___40989,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args41008 = [];
var len__37853__auto___41066 = arguments.length;
var i__37854__auto___41067 = (0);
while(true){
if((i__37854__auto___41067 < len__37853__auto___41066)){
args41008.push((arguments[i__37854__auto___41067]));

var G__41068 = (i__37854__auto___41067 + (1));
i__37854__auto___41067 = G__41068;
continue;
} else {
}
break;
}

var G__41010 = args41008.length;
switch (G__41010) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41008.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__38950__auto___41070 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38950__auto___41070,out){
return (function (){
var f__38951__auto__ = (function (){var switch__38796__auto__ = ((function (c__38950__auto___41070,out){
return (function (state_41042){
var state_val_41043 = (state_41042[(1)]);
if((state_val_41043 === (7))){
var inst_41021 = (state_41042[(7)]);
var inst_41022 = (state_41042[(8)]);
var inst_41021__$1 = (state_41042[(2)]);
var inst_41022__$1 = cljs.core.nth.call(null,inst_41021__$1,(0),null);
var inst_41023 = cljs.core.nth.call(null,inst_41021__$1,(1),null);
var inst_41024 = (inst_41022__$1 == null);
var state_41042__$1 = (function (){var statearr_41044 = state_41042;
(statearr_41044[(7)] = inst_41021__$1);

(statearr_41044[(9)] = inst_41023);

(statearr_41044[(8)] = inst_41022__$1);

return statearr_41044;
})();
if(cljs.core.truth_(inst_41024)){
var statearr_41045_41071 = state_41042__$1;
(statearr_41045_41071[(1)] = (8));

} else {
var statearr_41046_41072 = state_41042__$1;
(statearr_41046_41072[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41043 === (1))){
var inst_41011 = cljs.core.vec.call(null,chs);
var inst_41012 = inst_41011;
var state_41042__$1 = (function (){var statearr_41047 = state_41042;
(statearr_41047[(10)] = inst_41012);

return statearr_41047;
})();
var statearr_41048_41073 = state_41042__$1;
(statearr_41048_41073[(2)] = null);

(statearr_41048_41073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41043 === (4))){
var inst_41012 = (state_41042[(10)]);
var state_41042__$1 = state_41042;
return cljs.core.async.ioc_alts_BANG_.call(null,state_41042__$1,(7),inst_41012);
} else {
if((state_val_41043 === (6))){
var inst_41038 = (state_41042[(2)]);
var state_41042__$1 = state_41042;
var statearr_41049_41074 = state_41042__$1;
(statearr_41049_41074[(2)] = inst_41038);

(statearr_41049_41074[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41043 === (3))){
var inst_41040 = (state_41042[(2)]);
var state_41042__$1 = state_41042;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41042__$1,inst_41040);
} else {
if((state_val_41043 === (2))){
var inst_41012 = (state_41042[(10)]);
var inst_41014 = cljs.core.count.call(null,inst_41012);
var inst_41015 = (inst_41014 > (0));
var state_41042__$1 = state_41042;
if(cljs.core.truth_(inst_41015)){
var statearr_41051_41075 = state_41042__$1;
(statearr_41051_41075[(1)] = (4));

} else {
var statearr_41052_41076 = state_41042__$1;
(statearr_41052_41076[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41043 === (11))){
var inst_41012 = (state_41042[(10)]);
var inst_41031 = (state_41042[(2)]);
var tmp41050 = inst_41012;
var inst_41012__$1 = tmp41050;
var state_41042__$1 = (function (){var statearr_41053 = state_41042;
(statearr_41053[(10)] = inst_41012__$1);

(statearr_41053[(11)] = inst_41031);

return statearr_41053;
})();
var statearr_41054_41077 = state_41042__$1;
(statearr_41054_41077[(2)] = null);

(statearr_41054_41077[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41043 === (9))){
var inst_41022 = (state_41042[(8)]);
var state_41042__$1 = state_41042;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41042__$1,(11),out,inst_41022);
} else {
if((state_val_41043 === (5))){
var inst_41036 = cljs.core.async.close_BANG_.call(null,out);
var state_41042__$1 = state_41042;
var statearr_41055_41078 = state_41042__$1;
(statearr_41055_41078[(2)] = inst_41036);

(statearr_41055_41078[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41043 === (10))){
var inst_41034 = (state_41042[(2)]);
var state_41042__$1 = state_41042;
var statearr_41056_41079 = state_41042__$1;
(statearr_41056_41079[(2)] = inst_41034);

(statearr_41056_41079[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41043 === (8))){
var inst_41012 = (state_41042[(10)]);
var inst_41021 = (state_41042[(7)]);
var inst_41023 = (state_41042[(9)]);
var inst_41022 = (state_41042[(8)]);
var inst_41026 = (function (){var cs = inst_41012;
var vec__41017 = inst_41021;
var v = inst_41022;
var c = inst_41023;
return ((function (cs,vec__41017,v,c,inst_41012,inst_41021,inst_41023,inst_41022,state_val_41043,c__38950__auto___41070,out){
return (function (p1__41007_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__41007_SHARP_);
});
;})(cs,vec__41017,v,c,inst_41012,inst_41021,inst_41023,inst_41022,state_val_41043,c__38950__auto___41070,out))
})();
var inst_41027 = cljs.core.filterv.call(null,inst_41026,inst_41012);
var inst_41012__$1 = inst_41027;
var state_41042__$1 = (function (){var statearr_41057 = state_41042;
(statearr_41057[(10)] = inst_41012__$1);

return statearr_41057;
})();
var statearr_41058_41080 = state_41042__$1;
(statearr_41058_41080[(2)] = null);

(statearr_41058_41080[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__38950__auto___41070,out))
;
return ((function (switch__38796__auto__,c__38950__auto___41070,out){
return (function() {
var cljs$core$async$state_machine__38797__auto__ = null;
var cljs$core$async$state_machine__38797__auto____0 = (function (){
var statearr_41062 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41062[(0)] = cljs$core$async$state_machine__38797__auto__);

(statearr_41062[(1)] = (1));

return statearr_41062;
});
var cljs$core$async$state_machine__38797__auto____1 = (function (state_41042){
while(true){
var ret_value__38798__auto__ = (function (){try{while(true){
var result__38799__auto__ = switch__38796__auto__.call(null,state_41042);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38799__auto__;
}
break;
}
}catch (e41063){if((e41063 instanceof Object)){
var ex__38800__auto__ = e41063;
var statearr_41064_41081 = state_41042;
(statearr_41064_41081[(5)] = ex__38800__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41042);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41063;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41082 = state_41042;
state_41042 = G__41082;
continue;
} else {
return ret_value__38798__auto__;
}
break;
}
});
cljs$core$async$state_machine__38797__auto__ = function(state_41042){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38797__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38797__auto____1.call(this,state_41042);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38797__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38797__auto____0;
cljs$core$async$state_machine__38797__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38797__auto____1;
return cljs$core$async$state_machine__38797__auto__;
})()
;})(switch__38796__auto__,c__38950__auto___41070,out))
})();
var state__38952__auto__ = (function (){var statearr_41065 = f__38951__auto__.call(null);
(statearr_41065[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38950__auto___41070);

return statearr_41065;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38952__auto__);
});})(c__38950__auto___41070,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args41083 = [];
var len__37853__auto___41132 = arguments.length;
var i__37854__auto___41133 = (0);
while(true){
if((i__37854__auto___41133 < len__37853__auto___41132)){
args41083.push((arguments[i__37854__auto___41133]));

var G__41134 = (i__37854__auto___41133 + (1));
i__37854__auto___41133 = G__41134;
continue;
} else {
}
break;
}

var G__41085 = args41083.length;
switch (G__41085) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41083.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__38950__auto___41136 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38950__auto___41136,out){
return (function (){
var f__38951__auto__ = (function (){var switch__38796__auto__ = ((function (c__38950__auto___41136,out){
return (function (state_41109){
var state_val_41110 = (state_41109[(1)]);
if((state_val_41110 === (7))){
var inst_41091 = (state_41109[(7)]);
var inst_41091__$1 = (state_41109[(2)]);
var inst_41092 = (inst_41091__$1 == null);
var inst_41093 = cljs.core.not.call(null,inst_41092);
var state_41109__$1 = (function (){var statearr_41111 = state_41109;
(statearr_41111[(7)] = inst_41091__$1);

return statearr_41111;
})();
if(inst_41093){
var statearr_41112_41137 = state_41109__$1;
(statearr_41112_41137[(1)] = (8));

} else {
var statearr_41113_41138 = state_41109__$1;
(statearr_41113_41138[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41110 === (1))){
var inst_41086 = (0);
var state_41109__$1 = (function (){var statearr_41114 = state_41109;
(statearr_41114[(8)] = inst_41086);

return statearr_41114;
})();
var statearr_41115_41139 = state_41109__$1;
(statearr_41115_41139[(2)] = null);

(statearr_41115_41139[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41110 === (4))){
var state_41109__$1 = state_41109;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41109__$1,(7),ch);
} else {
if((state_val_41110 === (6))){
var inst_41104 = (state_41109[(2)]);
var state_41109__$1 = state_41109;
var statearr_41116_41140 = state_41109__$1;
(statearr_41116_41140[(2)] = inst_41104);

(statearr_41116_41140[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41110 === (3))){
var inst_41106 = (state_41109[(2)]);
var inst_41107 = cljs.core.async.close_BANG_.call(null,out);
var state_41109__$1 = (function (){var statearr_41117 = state_41109;
(statearr_41117[(9)] = inst_41106);

return statearr_41117;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41109__$1,inst_41107);
} else {
if((state_val_41110 === (2))){
var inst_41086 = (state_41109[(8)]);
var inst_41088 = (inst_41086 < n);
var state_41109__$1 = state_41109;
if(cljs.core.truth_(inst_41088)){
var statearr_41118_41141 = state_41109__$1;
(statearr_41118_41141[(1)] = (4));

} else {
var statearr_41119_41142 = state_41109__$1;
(statearr_41119_41142[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41110 === (11))){
var inst_41086 = (state_41109[(8)]);
var inst_41096 = (state_41109[(2)]);
var inst_41097 = (inst_41086 + (1));
var inst_41086__$1 = inst_41097;
var state_41109__$1 = (function (){var statearr_41120 = state_41109;
(statearr_41120[(8)] = inst_41086__$1);

(statearr_41120[(10)] = inst_41096);

return statearr_41120;
})();
var statearr_41121_41143 = state_41109__$1;
(statearr_41121_41143[(2)] = null);

(statearr_41121_41143[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41110 === (9))){
var state_41109__$1 = state_41109;
var statearr_41122_41144 = state_41109__$1;
(statearr_41122_41144[(2)] = null);

(statearr_41122_41144[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41110 === (5))){
var state_41109__$1 = state_41109;
var statearr_41123_41145 = state_41109__$1;
(statearr_41123_41145[(2)] = null);

(statearr_41123_41145[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41110 === (10))){
var inst_41101 = (state_41109[(2)]);
var state_41109__$1 = state_41109;
var statearr_41124_41146 = state_41109__$1;
(statearr_41124_41146[(2)] = inst_41101);

(statearr_41124_41146[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41110 === (8))){
var inst_41091 = (state_41109[(7)]);
var state_41109__$1 = state_41109;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41109__$1,(11),out,inst_41091);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__38950__auto___41136,out))
;
return ((function (switch__38796__auto__,c__38950__auto___41136,out){
return (function() {
var cljs$core$async$state_machine__38797__auto__ = null;
var cljs$core$async$state_machine__38797__auto____0 = (function (){
var statearr_41128 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_41128[(0)] = cljs$core$async$state_machine__38797__auto__);

(statearr_41128[(1)] = (1));

return statearr_41128;
});
var cljs$core$async$state_machine__38797__auto____1 = (function (state_41109){
while(true){
var ret_value__38798__auto__ = (function (){try{while(true){
var result__38799__auto__ = switch__38796__auto__.call(null,state_41109);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38799__auto__;
}
break;
}
}catch (e41129){if((e41129 instanceof Object)){
var ex__38800__auto__ = e41129;
var statearr_41130_41147 = state_41109;
(statearr_41130_41147[(5)] = ex__38800__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41109);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41129;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41148 = state_41109;
state_41109 = G__41148;
continue;
} else {
return ret_value__38798__auto__;
}
break;
}
});
cljs$core$async$state_machine__38797__auto__ = function(state_41109){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38797__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38797__auto____1.call(this,state_41109);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38797__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38797__auto____0;
cljs$core$async$state_machine__38797__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38797__auto____1;
return cljs$core$async$state_machine__38797__auto__;
})()
;})(switch__38796__auto__,c__38950__auto___41136,out))
})();
var state__38952__auto__ = (function (){var statearr_41131 = f__38951__auto__.call(null);
(statearr_41131[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38950__auto___41136);

return statearr_41131;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38952__auto__);
});})(c__38950__auto___41136,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async41156 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41156 = (function (map_LT_,f,ch,meta41157){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta41157 = meta41157;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async41156.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41158,meta41157__$1){
var self__ = this;
var _41158__$1 = this;
return (new cljs.core.async.t_cljs$core$async41156(self__.map_LT_,self__.f,self__.ch,meta41157__$1));
});

cljs.core.async.t_cljs$core$async41156.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41158){
var self__ = this;
var _41158__$1 = this;
return self__.meta41157;
});

cljs.core.async.t_cljs$core$async41156.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async41156.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async41156.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async41156.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async41156.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async41159 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41159 = (function (map_LT_,f,ch,meta41157,_,fn1,meta41160){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta41157 = meta41157;
this._ = _;
this.fn1 = fn1;
this.meta41160 = meta41160;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async41159.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_41161,meta41160__$1){
var self__ = this;
var _41161__$1 = this;
return (new cljs.core.async.t_cljs$core$async41159(self__.map_LT_,self__.f,self__.ch,self__.meta41157,self__._,self__.fn1,meta41160__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async41159.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_41161){
var self__ = this;
var _41161__$1 = this;
return self__.meta41160;
});})(___$1))
;

cljs.core.async.t_cljs$core$async41159.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async41159.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async41159.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async41159.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__41149_SHARP_){
return f1.call(null,(((p1__41149_SHARP_ == null))?null:self__.f.call(null,p1__41149_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async41159.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta41157","meta41157",-378705411,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async41156","cljs.core.async/t_cljs$core$async41156",365157623,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta41160","meta41160",1476521487,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async41159.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41159.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41159";

cljs.core.async.t_cljs$core$async41159.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__37384__auto__,writer__37385__auto__,opt__37386__auto__){
return cljs.core._write.call(null,writer__37385__auto__,"cljs.core.async/t_cljs$core$async41159");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async41159 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async41159(map_LT___$1,f__$1,ch__$1,meta41157__$1,___$2,fn1__$1,meta41160){
return (new cljs.core.async.t_cljs$core$async41159(map_LT___$1,f__$1,ch__$1,meta41157__$1,___$2,fn1__$1,meta41160));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async41159(self__.map_LT_,self__.f,self__.ch,self__.meta41157,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__36766__auto__ = ret;
if(cljs.core.truth_(and__36766__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__36766__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async41156.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async41156.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async41156.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta41157","meta41157",-378705411,null)], null);
});

cljs.core.async.t_cljs$core$async41156.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41156.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41156";

cljs.core.async.t_cljs$core$async41156.cljs$lang$ctorPrWriter = (function (this__37384__auto__,writer__37385__auto__,opt__37386__auto__){
return cljs.core._write.call(null,writer__37385__auto__,"cljs.core.async/t_cljs$core$async41156");
});

cljs.core.async.__GT_t_cljs$core$async41156 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async41156(map_LT___$1,f__$1,ch__$1,meta41157){
return (new cljs.core.async.t_cljs$core$async41156(map_LT___$1,f__$1,ch__$1,meta41157));
});

}

return (new cljs.core.async.t_cljs$core$async41156(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async41165 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41165 = (function (map_GT_,f,ch,meta41166){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta41166 = meta41166;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async41165.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41167,meta41166__$1){
var self__ = this;
var _41167__$1 = this;
return (new cljs.core.async.t_cljs$core$async41165(self__.map_GT_,self__.f,self__.ch,meta41166__$1));
});

cljs.core.async.t_cljs$core$async41165.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41167){
var self__ = this;
var _41167__$1 = this;
return self__.meta41166;
});

cljs.core.async.t_cljs$core$async41165.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async41165.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async41165.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async41165.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async41165.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async41165.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async41165.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta41166","meta41166",-474164420,null)], null);
});

cljs.core.async.t_cljs$core$async41165.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41165.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41165";

cljs.core.async.t_cljs$core$async41165.cljs$lang$ctorPrWriter = (function (this__37384__auto__,writer__37385__auto__,opt__37386__auto__){
return cljs.core._write.call(null,writer__37385__auto__,"cljs.core.async/t_cljs$core$async41165");
});

cljs.core.async.__GT_t_cljs$core$async41165 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async41165(map_GT___$1,f__$1,ch__$1,meta41166){
return (new cljs.core.async.t_cljs$core$async41165(map_GT___$1,f__$1,ch__$1,meta41166));
});

}

return (new cljs.core.async.t_cljs$core$async41165(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async41171 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41171 = (function (filter_GT_,p,ch,meta41172){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta41172 = meta41172;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async41171.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41173,meta41172__$1){
var self__ = this;
var _41173__$1 = this;
return (new cljs.core.async.t_cljs$core$async41171(self__.filter_GT_,self__.p,self__.ch,meta41172__$1));
});

cljs.core.async.t_cljs$core$async41171.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41173){
var self__ = this;
var _41173__$1 = this;
return self__.meta41172;
});

cljs.core.async.t_cljs$core$async41171.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async41171.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async41171.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async41171.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async41171.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async41171.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async41171.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async41171.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta41172","meta41172",370008485,null)], null);
});

cljs.core.async.t_cljs$core$async41171.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41171.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41171";

cljs.core.async.t_cljs$core$async41171.cljs$lang$ctorPrWriter = (function (this__37384__auto__,writer__37385__auto__,opt__37386__auto__){
return cljs.core._write.call(null,writer__37385__auto__,"cljs.core.async/t_cljs$core$async41171");
});

cljs.core.async.__GT_t_cljs$core$async41171 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async41171(filter_GT___$1,p__$1,ch__$1,meta41172){
return (new cljs.core.async.t_cljs$core$async41171(filter_GT___$1,p__$1,ch__$1,meta41172));
});

}

return (new cljs.core.async.t_cljs$core$async41171(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args41174 = [];
var len__37853__auto___41218 = arguments.length;
var i__37854__auto___41219 = (0);
while(true){
if((i__37854__auto___41219 < len__37853__auto___41218)){
args41174.push((arguments[i__37854__auto___41219]));

var G__41220 = (i__37854__auto___41219 + (1));
i__37854__auto___41219 = G__41220;
continue;
} else {
}
break;
}

var G__41176 = args41174.length;
switch (G__41176) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41174.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__38950__auto___41222 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38950__auto___41222,out){
return (function (){
var f__38951__auto__ = (function (){var switch__38796__auto__ = ((function (c__38950__auto___41222,out){
return (function (state_41197){
var state_val_41198 = (state_41197[(1)]);
if((state_val_41198 === (7))){
var inst_41193 = (state_41197[(2)]);
var state_41197__$1 = state_41197;
var statearr_41199_41223 = state_41197__$1;
(statearr_41199_41223[(2)] = inst_41193);

(statearr_41199_41223[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41198 === (1))){
var state_41197__$1 = state_41197;
var statearr_41200_41224 = state_41197__$1;
(statearr_41200_41224[(2)] = null);

(statearr_41200_41224[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41198 === (4))){
var inst_41179 = (state_41197[(7)]);
var inst_41179__$1 = (state_41197[(2)]);
var inst_41180 = (inst_41179__$1 == null);
var state_41197__$1 = (function (){var statearr_41201 = state_41197;
(statearr_41201[(7)] = inst_41179__$1);

return statearr_41201;
})();
if(cljs.core.truth_(inst_41180)){
var statearr_41202_41225 = state_41197__$1;
(statearr_41202_41225[(1)] = (5));

} else {
var statearr_41203_41226 = state_41197__$1;
(statearr_41203_41226[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41198 === (6))){
var inst_41179 = (state_41197[(7)]);
var inst_41184 = p.call(null,inst_41179);
var state_41197__$1 = state_41197;
if(cljs.core.truth_(inst_41184)){
var statearr_41204_41227 = state_41197__$1;
(statearr_41204_41227[(1)] = (8));

} else {
var statearr_41205_41228 = state_41197__$1;
(statearr_41205_41228[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41198 === (3))){
var inst_41195 = (state_41197[(2)]);
var state_41197__$1 = state_41197;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41197__$1,inst_41195);
} else {
if((state_val_41198 === (2))){
var state_41197__$1 = state_41197;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41197__$1,(4),ch);
} else {
if((state_val_41198 === (11))){
var inst_41187 = (state_41197[(2)]);
var state_41197__$1 = state_41197;
var statearr_41206_41229 = state_41197__$1;
(statearr_41206_41229[(2)] = inst_41187);

(statearr_41206_41229[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41198 === (9))){
var state_41197__$1 = state_41197;
var statearr_41207_41230 = state_41197__$1;
(statearr_41207_41230[(2)] = null);

(statearr_41207_41230[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41198 === (5))){
var inst_41182 = cljs.core.async.close_BANG_.call(null,out);
var state_41197__$1 = state_41197;
var statearr_41208_41231 = state_41197__$1;
(statearr_41208_41231[(2)] = inst_41182);

(statearr_41208_41231[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41198 === (10))){
var inst_41190 = (state_41197[(2)]);
var state_41197__$1 = (function (){var statearr_41209 = state_41197;
(statearr_41209[(8)] = inst_41190);

return statearr_41209;
})();
var statearr_41210_41232 = state_41197__$1;
(statearr_41210_41232[(2)] = null);

(statearr_41210_41232[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41198 === (8))){
var inst_41179 = (state_41197[(7)]);
var state_41197__$1 = state_41197;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41197__$1,(11),out,inst_41179);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__38950__auto___41222,out))
;
return ((function (switch__38796__auto__,c__38950__auto___41222,out){
return (function() {
var cljs$core$async$state_machine__38797__auto__ = null;
var cljs$core$async$state_machine__38797__auto____0 = (function (){
var statearr_41214 = [null,null,null,null,null,null,null,null,null];
(statearr_41214[(0)] = cljs$core$async$state_machine__38797__auto__);

(statearr_41214[(1)] = (1));

return statearr_41214;
});
var cljs$core$async$state_machine__38797__auto____1 = (function (state_41197){
while(true){
var ret_value__38798__auto__ = (function (){try{while(true){
var result__38799__auto__ = switch__38796__auto__.call(null,state_41197);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38799__auto__;
}
break;
}
}catch (e41215){if((e41215 instanceof Object)){
var ex__38800__auto__ = e41215;
var statearr_41216_41233 = state_41197;
(statearr_41216_41233[(5)] = ex__38800__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41197);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41215;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41234 = state_41197;
state_41197 = G__41234;
continue;
} else {
return ret_value__38798__auto__;
}
break;
}
});
cljs$core$async$state_machine__38797__auto__ = function(state_41197){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38797__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38797__auto____1.call(this,state_41197);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38797__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38797__auto____0;
cljs$core$async$state_machine__38797__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38797__auto____1;
return cljs$core$async$state_machine__38797__auto__;
})()
;})(switch__38796__auto__,c__38950__auto___41222,out))
})();
var state__38952__auto__ = (function (){var statearr_41217 = f__38951__auto__.call(null);
(statearr_41217[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38950__auto___41222);

return statearr_41217;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38952__auto__);
});})(c__38950__auto___41222,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args41235 = [];
var len__37853__auto___41238 = arguments.length;
var i__37854__auto___41239 = (0);
while(true){
if((i__37854__auto___41239 < len__37853__auto___41238)){
args41235.push((arguments[i__37854__auto___41239]));

var G__41240 = (i__37854__auto___41239 + (1));
i__37854__auto___41239 = G__41240;
continue;
} else {
}
break;
}

var G__41237 = args41235.length;
switch (G__41237) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41235.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__38950__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38950__auto__){
return (function (){
var f__38951__auto__ = (function (){var switch__38796__auto__ = ((function (c__38950__auto__){
return (function (state_41407){
var state_val_41408 = (state_41407[(1)]);
if((state_val_41408 === (7))){
var inst_41403 = (state_41407[(2)]);
var state_41407__$1 = state_41407;
var statearr_41409_41450 = state_41407__$1;
(statearr_41409_41450[(2)] = inst_41403);

(statearr_41409_41450[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41408 === (20))){
var inst_41373 = (state_41407[(7)]);
var inst_41384 = (state_41407[(2)]);
var inst_41385 = cljs.core.next.call(null,inst_41373);
var inst_41359 = inst_41385;
var inst_41360 = null;
var inst_41361 = (0);
var inst_41362 = (0);
var state_41407__$1 = (function (){var statearr_41410 = state_41407;
(statearr_41410[(8)] = inst_41359);

(statearr_41410[(9)] = inst_41362);

(statearr_41410[(10)] = inst_41360);

(statearr_41410[(11)] = inst_41361);

(statearr_41410[(12)] = inst_41384);

return statearr_41410;
})();
var statearr_41411_41451 = state_41407__$1;
(statearr_41411_41451[(2)] = null);

(statearr_41411_41451[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41408 === (1))){
var state_41407__$1 = state_41407;
var statearr_41412_41452 = state_41407__$1;
(statearr_41412_41452[(2)] = null);

(statearr_41412_41452[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41408 === (4))){
var inst_41348 = (state_41407[(13)]);
var inst_41348__$1 = (state_41407[(2)]);
var inst_41349 = (inst_41348__$1 == null);
var state_41407__$1 = (function (){var statearr_41413 = state_41407;
(statearr_41413[(13)] = inst_41348__$1);

return statearr_41413;
})();
if(cljs.core.truth_(inst_41349)){
var statearr_41414_41453 = state_41407__$1;
(statearr_41414_41453[(1)] = (5));

} else {
var statearr_41415_41454 = state_41407__$1;
(statearr_41415_41454[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41408 === (15))){
var state_41407__$1 = state_41407;
var statearr_41419_41455 = state_41407__$1;
(statearr_41419_41455[(2)] = null);

(statearr_41419_41455[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41408 === (21))){
var state_41407__$1 = state_41407;
var statearr_41420_41456 = state_41407__$1;
(statearr_41420_41456[(2)] = null);

(statearr_41420_41456[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41408 === (13))){
var inst_41359 = (state_41407[(8)]);
var inst_41362 = (state_41407[(9)]);
var inst_41360 = (state_41407[(10)]);
var inst_41361 = (state_41407[(11)]);
var inst_41369 = (state_41407[(2)]);
var inst_41370 = (inst_41362 + (1));
var tmp41416 = inst_41359;
var tmp41417 = inst_41360;
var tmp41418 = inst_41361;
var inst_41359__$1 = tmp41416;
var inst_41360__$1 = tmp41417;
var inst_41361__$1 = tmp41418;
var inst_41362__$1 = inst_41370;
var state_41407__$1 = (function (){var statearr_41421 = state_41407;
(statearr_41421[(8)] = inst_41359__$1);

(statearr_41421[(14)] = inst_41369);

(statearr_41421[(9)] = inst_41362__$1);

(statearr_41421[(10)] = inst_41360__$1);

(statearr_41421[(11)] = inst_41361__$1);

return statearr_41421;
})();
var statearr_41422_41457 = state_41407__$1;
(statearr_41422_41457[(2)] = null);

(statearr_41422_41457[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41408 === (22))){
var state_41407__$1 = state_41407;
var statearr_41423_41458 = state_41407__$1;
(statearr_41423_41458[(2)] = null);

(statearr_41423_41458[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41408 === (6))){
var inst_41348 = (state_41407[(13)]);
var inst_41357 = f.call(null,inst_41348);
var inst_41358 = cljs.core.seq.call(null,inst_41357);
var inst_41359 = inst_41358;
var inst_41360 = null;
var inst_41361 = (0);
var inst_41362 = (0);
var state_41407__$1 = (function (){var statearr_41424 = state_41407;
(statearr_41424[(8)] = inst_41359);

(statearr_41424[(9)] = inst_41362);

(statearr_41424[(10)] = inst_41360);

(statearr_41424[(11)] = inst_41361);

return statearr_41424;
})();
var statearr_41425_41459 = state_41407__$1;
(statearr_41425_41459[(2)] = null);

(statearr_41425_41459[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41408 === (17))){
var inst_41373 = (state_41407[(7)]);
var inst_41377 = cljs.core.chunk_first.call(null,inst_41373);
var inst_41378 = cljs.core.chunk_rest.call(null,inst_41373);
var inst_41379 = cljs.core.count.call(null,inst_41377);
var inst_41359 = inst_41378;
var inst_41360 = inst_41377;
var inst_41361 = inst_41379;
var inst_41362 = (0);
var state_41407__$1 = (function (){var statearr_41426 = state_41407;
(statearr_41426[(8)] = inst_41359);

(statearr_41426[(9)] = inst_41362);

(statearr_41426[(10)] = inst_41360);

(statearr_41426[(11)] = inst_41361);

return statearr_41426;
})();
var statearr_41427_41460 = state_41407__$1;
(statearr_41427_41460[(2)] = null);

(statearr_41427_41460[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41408 === (3))){
var inst_41405 = (state_41407[(2)]);
var state_41407__$1 = state_41407;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41407__$1,inst_41405);
} else {
if((state_val_41408 === (12))){
var inst_41393 = (state_41407[(2)]);
var state_41407__$1 = state_41407;
var statearr_41428_41461 = state_41407__$1;
(statearr_41428_41461[(2)] = inst_41393);

(statearr_41428_41461[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41408 === (2))){
var state_41407__$1 = state_41407;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41407__$1,(4),in$);
} else {
if((state_val_41408 === (23))){
var inst_41401 = (state_41407[(2)]);
var state_41407__$1 = state_41407;
var statearr_41429_41462 = state_41407__$1;
(statearr_41429_41462[(2)] = inst_41401);

(statearr_41429_41462[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41408 === (19))){
var inst_41388 = (state_41407[(2)]);
var state_41407__$1 = state_41407;
var statearr_41430_41463 = state_41407__$1;
(statearr_41430_41463[(2)] = inst_41388);

(statearr_41430_41463[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41408 === (11))){
var inst_41373 = (state_41407[(7)]);
var inst_41359 = (state_41407[(8)]);
var inst_41373__$1 = cljs.core.seq.call(null,inst_41359);
var state_41407__$1 = (function (){var statearr_41431 = state_41407;
(statearr_41431[(7)] = inst_41373__$1);

return statearr_41431;
})();
if(inst_41373__$1){
var statearr_41432_41464 = state_41407__$1;
(statearr_41432_41464[(1)] = (14));

} else {
var statearr_41433_41465 = state_41407__$1;
(statearr_41433_41465[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41408 === (9))){
var inst_41395 = (state_41407[(2)]);
var inst_41396 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_41407__$1 = (function (){var statearr_41434 = state_41407;
(statearr_41434[(15)] = inst_41395);

return statearr_41434;
})();
if(cljs.core.truth_(inst_41396)){
var statearr_41435_41466 = state_41407__$1;
(statearr_41435_41466[(1)] = (21));

} else {
var statearr_41436_41467 = state_41407__$1;
(statearr_41436_41467[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41408 === (5))){
var inst_41351 = cljs.core.async.close_BANG_.call(null,out);
var state_41407__$1 = state_41407;
var statearr_41437_41468 = state_41407__$1;
(statearr_41437_41468[(2)] = inst_41351);

(statearr_41437_41468[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41408 === (14))){
var inst_41373 = (state_41407[(7)]);
var inst_41375 = cljs.core.chunked_seq_QMARK_.call(null,inst_41373);
var state_41407__$1 = state_41407;
if(inst_41375){
var statearr_41438_41469 = state_41407__$1;
(statearr_41438_41469[(1)] = (17));

} else {
var statearr_41439_41470 = state_41407__$1;
(statearr_41439_41470[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41408 === (16))){
var inst_41391 = (state_41407[(2)]);
var state_41407__$1 = state_41407;
var statearr_41440_41471 = state_41407__$1;
(statearr_41440_41471[(2)] = inst_41391);

(statearr_41440_41471[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41408 === (10))){
var inst_41362 = (state_41407[(9)]);
var inst_41360 = (state_41407[(10)]);
var inst_41367 = cljs.core._nth.call(null,inst_41360,inst_41362);
var state_41407__$1 = state_41407;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41407__$1,(13),out,inst_41367);
} else {
if((state_val_41408 === (18))){
var inst_41373 = (state_41407[(7)]);
var inst_41382 = cljs.core.first.call(null,inst_41373);
var state_41407__$1 = state_41407;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41407__$1,(20),out,inst_41382);
} else {
if((state_val_41408 === (8))){
var inst_41362 = (state_41407[(9)]);
var inst_41361 = (state_41407[(11)]);
var inst_41364 = (inst_41362 < inst_41361);
var inst_41365 = inst_41364;
var state_41407__$1 = state_41407;
if(cljs.core.truth_(inst_41365)){
var statearr_41441_41472 = state_41407__$1;
(statearr_41441_41472[(1)] = (10));

} else {
var statearr_41442_41473 = state_41407__$1;
(statearr_41442_41473[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__38950__auto__))
;
return ((function (switch__38796__auto__,c__38950__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__38797__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__38797__auto____0 = (function (){
var statearr_41446 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41446[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__38797__auto__);

(statearr_41446[(1)] = (1));

return statearr_41446;
});
var cljs$core$async$mapcat_STAR__$_state_machine__38797__auto____1 = (function (state_41407){
while(true){
var ret_value__38798__auto__ = (function (){try{while(true){
var result__38799__auto__ = switch__38796__auto__.call(null,state_41407);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38799__auto__;
}
break;
}
}catch (e41447){if((e41447 instanceof Object)){
var ex__38800__auto__ = e41447;
var statearr_41448_41474 = state_41407;
(statearr_41448_41474[(5)] = ex__38800__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41407);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41447;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41475 = state_41407;
state_41407 = G__41475;
continue;
} else {
return ret_value__38798__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__38797__auto__ = function(state_41407){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__38797__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__38797__auto____1.call(this,state_41407);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__38797__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__38797__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__38797__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__38797__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__38797__auto__;
})()
;})(switch__38796__auto__,c__38950__auto__))
})();
var state__38952__auto__ = (function (){var statearr_41449 = f__38951__auto__.call(null);
(statearr_41449[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38950__auto__);

return statearr_41449;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38952__auto__);
});})(c__38950__auto__))
);

return c__38950__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args41476 = [];
var len__37853__auto___41479 = arguments.length;
var i__37854__auto___41480 = (0);
while(true){
if((i__37854__auto___41480 < len__37853__auto___41479)){
args41476.push((arguments[i__37854__auto___41480]));

var G__41481 = (i__37854__auto___41480 + (1));
i__37854__auto___41480 = G__41481;
continue;
} else {
}
break;
}

var G__41478 = args41476.length;
switch (G__41478) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41476.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args41483 = [];
var len__37853__auto___41486 = arguments.length;
var i__37854__auto___41487 = (0);
while(true){
if((i__37854__auto___41487 < len__37853__auto___41486)){
args41483.push((arguments[i__37854__auto___41487]));

var G__41488 = (i__37854__auto___41487 + (1));
i__37854__auto___41487 = G__41488;
continue;
} else {
}
break;
}

var G__41485 = args41483.length;
switch (G__41485) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41483.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args41490 = [];
var len__37853__auto___41541 = arguments.length;
var i__37854__auto___41542 = (0);
while(true){
if((i__37854__auto___41542 < len__37853__auto___41541)){
args41490.push((arguments[i__37854__auto___41542]));

var G__41543 = (i__37854__auto___41542 + (1));
i__37854__auto___41542 = G__41543;
continue;
} else {
}
break;
}

var G__41492 = args41490.length;
switch (G__41492) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41490.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__38950__auto___41545 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38950__auto___41545,out){
return (function (){
var f__38951__auto__ = (function (){var switch__38796__auto__ = ((function (c__38950__auto___41545,out){
return (function (state_41516){
var state_val_41517 = (state_41516[(1)]);
if((state_val_41517 === (7))){
var inst_41511 = (state_41516[(2)]);
var state_41516__$1 = state_41516;
var statearr_41518_41546 = state_41516__$1;
(statearr_41518_41546[(2)] = inst_41511);

(statearr_41518_41546[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41517 === (1))){
var inst_41493 = null;
var state_41516__$1 = (function (){var statearr_41519 = state_41516;
(statearr_41519[(7)] = inst_41493);

return statearr_41519;
})();
var statearr_41520_41547 = state_41516__$1;
(statearr_41520_41547[(2)] = null);

(statearr_41520_41547[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41517 === (4))){
var inst_41496 = (state_41516[(8)]);
var inst_41496__$1 = (state_41516[(2)]);
var inst_41497 = (inst_41496__$1 == null);
var inst_41498 = cljs.core.not.call(null,inst_41497);
var state_41516__$1 = (function (){var statearr_41521 = state_41516;
(statearr_41521[(8)] = inst_41496__$1);

return statearr_41521;
})();
if(inst_41498){
var statearr_41522_41548 = state_41516__$1;
(statearr_41522_41548[(1)] = (5));

} else {
var statearr_41523_41549 = state_41516__$1;
(statearr_41523_41549[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41517 === (6))){
var state_41516__$1 = state_41516;
var statearr_41524_41550 = state_41516__$1;
(statearr_41524_41550[(2)] = null);

(statearr_41524_41550[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41517 === (3))){
var inst_41513 = (state_41516[(2)]);
var inst_41514 = cljs.core.async.close_BANG_.call(null,out);
var state_41516__$1 = (function (){var statearr_41525 = state_41516;
(statearr_41525[(9)] = inst_41513);

return statearr_41525;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41516__$1,inst_41514);
} else {
if((state_val_41517 === (2))){
var state_41516__$1 = state_41516;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41516__$1,(4),ch);
} else {
if((state_val_41517 === (11))){
var inst_41496 = (state_41516[(8)]);
var inst_41505 = (state_41516[(2)]);
var inst_41493 = inst_41496;
var state_41516__$1 = (function (){var statearr_41526 = state_41516;
(statearr_41526[(7)] = inst_41493);

(statearr_41526[(10)] = inst_41505);

return statearr_41526;
})();
var statearr_41527_41551 = state_41516__$1;
(statearr_41527_41551[(2)] = null);

(statearr_41527_41551[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41517 === (9))){
var inst_41496 = (state_41516[(8)]);
var state_41516__$1 = state_41516;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41516__$1,(11),out,inst_41496);
} else {
if((state_val_41517 === (5))){
var inst_41496 = (state_41516[(8)]);
var inst_41493 = (state_41516[(7)]);
var inst_41500 = cljs.core._EQ_.call(null,inst_41496,inst_41493);
var state_41516__$1 = state_41516;
if(inst_41500){
var statearr_41529_41552 = state_41516__$1;
(statearr_41529_41552[(1)] = (8));

} else {
var statearr_41530_41553 = state_41516__$1;
(statearr_41530_41553[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41517 === (10))){
var inst_41508 = (state_41516[(2)]);
var state_41516__$1 = state_41516;
var statearr_41531_41554 = state_41516__$1;
(statearr_41531_41554[(2)] = inst_41508);

(statearr_41531_41554[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41517 === (8))){
var inst_41493 = (state_41516[(7)]);
var tmp41528 = inst_41493;
var inst_41493__$1 = tmp41528;
var state_41516__$1 = (function (){var statearr_41532 = state_41516;
(statearr_41532[(7)] = inst_41493__$1);

return statearr_41532;
})();
var statearr_41533_41555 = state_41516__$1;
(statearr_41533_41555[(2)] = null);

(statearr_41533_41555[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__38950__auto___41545,out))
;
return ((function (switch__38796__auto__,c__38950__auto___41545,out){
return (function() {
var cljs$core$async$state_machine__38797__auto__ = null;
var cljs$core$async$state_machine__38797__auto____0 = (function (){
var statearr_41537 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_41537[(0)] = cljs$core$async$state_machine__38797__auto__);

(statearr_41537[(1)] = (1));

return statearr_41537;
});
var cljs$core$async$state_machine__38797__auto____1 = (function (state_41516){
while(true){
var ret_value__38798__auto__ = (function (){try{while(true){
var result__38799__auto__ = switch__38796__auto__.call(null,state_41516);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38799__auto__;
}
break;
}
}catch (e41538){if((e41538 instanceof Object)){
var ex__38800__auto__ = e41538;
var statearr_41539_41556 = state_41516;
(statearr_41539_41556[(5)] = ex__38800__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41516);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41538;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41557 = state_41516;
state_41516 = G__41557;
continue;
} else {
return ret_value__38798__auto__;
}
break;
}
});
cljs$core$async$state_machine__38797__auto__ = function(state_41516){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38797__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38797__auto____1.call(this,state_41516);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38797__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38797__auto____0;
cljs$core$async$state_machine__38797__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38797__auto____1;
return cljs$core$async$state_machine__38797__auto__;
})()
;})(switch__38796__auto__,c__38950__auto___41545,out))
})();
var state__38952__auto__ = (function (){var statearr_41540 = f__38951__auto__.call(null);
(statearr_41540[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38950__auto___41545);

return statearr_41540;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38952__auto__);
});})(c__38950__auto___41545,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args41558 = [];
var len__37853__auto___41628 = arguments.length;
var i__37854__auto___41629 = (0);
while(true){
if((i__37854__auto___41629 < len__37853__auto___41628)){
args41558.push((arguments[i__37854__auto___41629]));

var G__41630 = (i__37854__auto___41629 + (1));
i__37854__auto___41629 = G__41630;
continue;
} else {
}
break;
}

var G__41560 = args41558.length;
switch (G__41560) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41558.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__38950__auto___41632 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38950__auto___41632,out){
return (function (){
var f__38951__auto__ = (function (){var switch__38796__auto__ = ((function (c__38950__auto___41632,out){
return (function (state_41598){
var state_val_41599 = (state_41598[(1)]);
if((state_val_41599 === (7))){
var inst_41594 = (state_41598[(2)]);
var state_41598__$1 = state_41598;
var statearr_41600_41633 = state_41598__$1;
(statearr_41600_41633[(2)] = inst_41594);

(statearr_41600_41633[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41599 === (1))){
var inst_41561 = (new Array(n));
var inst_41562 = inst_41561;
var inst_41563 = (0);
var state_41598__$1 = (function (){var statearr_41601 = state_41598;
(statearr_41601[(7)] = inst_41563);

(statearr_41601[(8)] = inst_41562);

return statearr_41601;
})();
var statearr_41602_41634 = state_41598__$1;
(statearr_41602_41634[(2)] = null);

(statearr_41602_41634[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41599 === (4))){
var inst_41566 = (state_41598[(9)]);
var inst_41566__$1 = (state_41598[(2)]);
var inst_41567 = (inst_41566__$1 == null);
var inst_41568 = cljs.core.not.call(null,inst_41567);
var state_41598__$1 = (function (){var statearr_41603 = state_41598;
(statearr_41603[(9)] = inst_41566__$1);

return statearr_41603;
})();
if(inst_41568){
var statearr_41604_41635 = state_41598__$1;
(statearr_41604_41635[(1)] = (5));

} else {
var statearr_41605_41636 = state_41598__$1;
(statearr_41605_41636[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41599 === (15))){
var inst_41588 = (state_41598[(2)]);
var state_41598__$1 = state_41598;
var statearr_41606_41637 = state_41598__$1;
(statearr_41606_41637[(2)] = inst_41588);

(statearr_41606_41637[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41599 === (13))){
var state_41598__$1 = state_41598;
var statearr_41607_41638 = state_41598__$1;
(statearr_41607_41638[(2)] = null);

(statearr_41607_41638[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41599 === (6))){
var inst_41563 = (state_41598[(7)]);
var inst_41584 = (inst_41563 > (0));
var state_41598__$1 = state_41598;
if(cljs.core.truth_(inst_41584)){
var statearr_41608_41639 = state_41598__$1;
(statearr_41608_41639[(1)] = (12));

} else {
var statearr_41609_41640 = state_41598__$1;
(statearr_41609_41640[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41599 === (3))){
var inst_41596 = (state_41598[(2)]);
var state_41598__$1 = state_41598;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41598__$1,inst_41596);
} else {
if((state_val_41599 === (12))){
var inst_41562 = (state_41598[(8)]);
var inst_41586 = cljs.core.vec.call(null,inst_41562);
var state_41598__$1 = state_41598;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41598__$1,(15),out,inst_41586);
} else {
if((state_val_41599 === (2))){
var state_41598__$1 = state_41598;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41598__$1,(4),ch);
} else {
if((state_val_41599 === (11))){
var inst_41578 = (state_41598[(2)]);
var inst_41579 = (new Array(n));
var inst_41562 = inst_41579;
var inst_41563 = (0);
var state_41598__$1 = (function (){var statearr_41610 = state_41598;
(statearr_41610[(7)] = inst_41563);

(statearr_41610[(8)] = inst_41562);

(statearr_41610[(10)] = inst_41578);

return statearr_41610;
})();
var statearr_41611_41641 = state_41598__$1;
(statearr_41611_41641[(2)] = null);

(statearr_41611_41641[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41599 === (9))){
var inst_41562 = (state_41598[(8)]);
var inst_41576 = cljs.core.vec.call(null,inst_41562);
var state_41598__$1 = state_41598;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41598__$1,(11),out,inst_41576);
} else {
if((state_val_41599 === (5))){
var inst_41563 = (state_41598[(7)]);
var inst_41566 = (state_41598[(9)]);
var inst_41562 = (state_41598[(8)]);
var inst_41571 = (state_41598[(11)]);
var inst_41570 = (inst_41562[inst_41563] = inst_41566);
var inst_41571__$1 = (inst_41563 + (1));
var inst_41572 = (inst_41571__$1 < n);
var state_41598__$1 = (function (){var statearr_41612 = state_41598;
(statearr_41612[(11)] = inst_41571__$1);

(statearr_41612[(12)] = inst_41570);

return statearr_41612;
})();
if(cljs.core.truth_(inst_41572)){
var statearr_41613_41642 = state_41598__$1;
(statearr_41613_41642[(1)] = (8));

} else {
var statearr_41614_41643 = state_41598__$1;
(statearr_41614_41643[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41599 === (14))){
var inst_41591 = (state_41598[(2)]);
var inst_41592 = cljs.core.async.close_BANG_.call(null,out);
var state_41598__$1 = (function (){var statearr_41616 = state_41598;
(statearr_41616[(13)] = inst_41591);

return statearr_41616;
})();
var statearr_41617_41644 = state_41598__$1;
(statearr_41617_41644[(2)] = inst_41592);

(statearr_41617_41644[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41599 === (10))){
var inst_41582 = (state_41598[(2)]);
var state_41598__$1 = state_41598;
var statearr_41618_41645 = state_41598__$1;
(statearr_41618_41645[(2)] = inst_41582);

(statearr_41618_41645[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41599 === (8))){
var inst_41562 = (state_41598[(8)]);
var inst_41571 = (state_41598[(11)]);
var tmp41615 = inst_41562;
var inst_41562__$1 = tmp41615;
var inst_41563 = inst_41571;
var state_41598__$1 = (function (){var statearr_41619 = state_41598;
(statearr_41619[(7)] = inst_41563);

(statearr_41619[(8)] = inst_41562__$1);

return statearr_41619;
})();
var statearr_41620_41646 = state_41598__$1;
(statearr_41620_41646[(2)] = null);

(statearr_41620_41646[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__38950__auto___41632,out))
;
return ((function (switch__38796__auto__,c__38950__auto___41632,out){
return (function() {
var cljs$core$async$state_machine__38797__auto__ = null;
var cljs$core$async$state_machine__38797__auto____0 = (function (){
var statearr_41624 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41624[(0)] = cljs$core$async$state_machine__38797__auto__);

(statearr_41624[(1)] = (1));

return statearr_41624;
});
var cljs$core$async$state_machine__38797__auto____1 = (function (state_41598){
while(true){
var ret_value__38798__auto__ = (function (){try{while(true){
var result__38799__auto__ = switch__38796__auto__.call(null,state_41598);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38799__auto__;
}
break;
}
}catch (e41625){if((e41625 instanceof Object)){
var ex__38800__auto__ = e41625;
var statearr_41626_41647 = state_41598;
(statearr_41626_41647[(5)] = ex__38800__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41598);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41625;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41648 = state_41598;
state_41598 = G__41648;
continue;
} else {
return ret_value__38798__auto__;
}
break;
}
});
cljs$core$async$state_machine__38797__auto__ = function(state_41598){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38797__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38797__auto____1.call(this,state_41598);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38797__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38797__auto____0;
cljs$core$async$state_machine__38797__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38797__auto____1;
return cljs$core$async$state_machine__38797__auto__;
})()
;})(switch__38796__auto__,c__38950__auto___41632,out))
})();
var state__38952__auto__ = (function (){var statearr_41627 = f__38951__auto__.call(null);
(statearr_41627[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38950__auto___41632);

return statearr_41627;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38952__auto__);
});})(c__38950__auto___41632,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args41649 = [];
var len__37853__auto___41723 = arguments.length;
var i__37854__auto___41724 = (0);
while(true){
if((i__37854__auto___41724 < len__37853__auto___41723)){
args41649.push((arguments[i__37854__auto___41724]));

var G__41725 = (i__37854__auto___41724 + (1));
i__37854__auto___41724 = G__41725;
continue;
} else {
}
break;
}

var G__41651 = args41649.length;
switch (G__41651) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41649.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__38950__auto___41727 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38950__auto___41727,out){
return (function (){
var f__38951__auto__ = (function (){var switch__38796__auto__ = ((function (c__38950__auto___41727,out){
return (function (state_41693){
var state_val_41694 = (state_41693[(1)]);
if((state_val_41694 === (7))){
var inst_41689 = (state_41693[(2)]);
var state_41693__$1 = state_41693;
var statearr_41695_41728 = state_41693__$1;
(statearr_41695_41728[(2)] = inst_41689);

(statearr_41695_41728[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41694 === (1))){
var inst_41652 = [];
var inst_41653 = inst_41652;
var inst_41654 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_41693__$1 = (function (){var statearr_41696 = state_41693;
(statearr_41696[(7)] = inst_41654);

(statearr_41696[(8)] = inst_41653);

return statearr_41696;
})();
var statearr_41697_41729 = state_41693__$1;
(statearr_41697_41729[(2)] = null);

(statearr_41697_41729[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41694 === (4))){
var inst_41657 = (state_41693[(9)]);
var inst_41657__$1 = (state_41693[(2)]);
var inst_41658 = (inst_41657__$1 == null);
var inst_41659 = cljs.core.not.call(null,inst_41658);
var state_41693__$1 = (function (){var statearr_41698 = state_41693;
(statearr_41698[(9)] = inst_41657__$1);

return statearr_41698;
})();
if(inst_41659){
var statearr_41699_41730 = state_41693__$1;
(statearr_41699_41730[(1)] = (5));

} else {
var statearr_41700_41731 = state_41693__$1;
(statearr_41700_41731[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41694 === (15))){
var inst_41683 = (state_41693[(2)]);
var state_41693__$1 = state_41693;
var statearr_41701_41732 = state_41693__$1;
(statearr_41701_41732[(2)] = inst_41683);

(statearr_41701_41732[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41694 === (13))){
var state_41693__$1 = state_41693;
var statearr_41702_41733 = state_41693__$1;
(statearr_41702_41733[(2)] = null);

(statearr_41702_41733[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41694 === (6))){
var inst_41653 = (state_41693[(8)]);
var inst_41678 = inst_41653.length;
var inst_41679 = (inst_41678 > (0));
var state_41693__$1 = state_41693;
if(cljs.core.truth_(inst_41679)){
var statearr_41703_41734 = state_41693__$1;
(statearr_41703_41734[(1)] = (12));

} else {
var statearr_41704_41735 = state_41693__$1;
(statearr_41704_41735[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41694 === (3))){
var inst_41691 = (state_41693[(2)]);
var state_41693__$1 = state_41693;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41693__$1,inst_41691);
} else {
if((state_val_41694 === (12))){
var inst_41653 = (state_41693[(8)]);
var inst_41681 = cljs.core.vec.call(null,inst_41653);
var state_41693__$1 = state_41693;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41693__$1,(15),out,inst_41681);
} else {
if((state_val_41694 === (2))){
var state_41693__$1 = state_41693;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41693__$1,(4),ch);
} else {
if((state_val_41694 === (11))){
var inst_41661 = (state_41693[(10)]);
var inst_41657 = (state_41693[(9)]);
var inst_41671 = (state_41693[(2)]);
var inst_41672 = [];
var inst_41673 = inst_41672.push(inst_41657);
var inst_41653 = inst_41672;
var inst_41654 = inst_41661;
var state_41693__$1 = (function (){var statearr_41705 = state_41693;
(statearr_41705[(11)] = inst_41671);

(statearr_41705[(12)] = inst_41673);

(statearr_41705[(7)] = inst_41654);

(statearr_41705[(8)] = inst_41653);

return statearr_41705;
})();
var statearr_41706_41736 = state_41693__$1;
(statearr_41706_41736[(2)] = null);

(statearr_41706_41736[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41694 === (9))){
var inst_41653 = (state_41693[(8)]);
var inst_41669 = cljs.core.vec.call(null,inst_41653);
var state_41693__$1 = state_41693;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41693__$1,(11),out,inst_41669);
} else {
if((state_val_41694 === (5))){
var inst_41661 = (state_41693[(10)]);
var inst_41654 = (state_41693[(7)]);
var inst_41657 = (state_41693[(9)]);
var inst_41661__$1 = f.call(null,inst_41657);
var inst_41662 = cljs.core._EQ_.call(null,inst_41661__$1,inst_41654);
var inst_41663 = cljs.core.keyword_identical_QMARK_.call(null,inst_41654,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_41664 = (inst_41662) || (inst_41663);
var state_41693__$1 = (function (){var statearr_41707 = state_41693;
(statearr_41707[(10)] = inst_41661__$1);

return statearr_41707;
})();
if(cljs.core.truth_(inst_41664)){
var statearr_41708_41737 = state_41693__$1;
(statearr_41708_41737[(1)] = (8));

} else {
var statearr_41709_41738 = state_41693__$1;
(statearr_41709_41738[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41694 === (14))){
var inst_41686 = (state_41693[(2)]);
var inst_41687 = cljs.core.async.close_BANG_.call(null,out);
var state_41693__$1 = (function (){var statearr_41711 = state_41693;
(statearr_41711[(13)] = inst_41686);

return statearr_41711;
})();
var statearr_41712_41739 = state_41693__$1;
(statearr_41712_41739[(2)] = inst_41687);

(statearr_41712_41739[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41694 === (10))){
var inst_41676 = (state_41693[(2)]);
var state_41693__$1 = state_41693;
var statearr_41713_41740 = state_41693__$1;
(statearr_41713_41740[(2)] = inst_41676);

(statearr_41713_41740[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41694 === (8))){
var inst_41661 = (state_41693[(10)]);
var inst_41653 = (state_41693[(8)]);
var inst_41657 = (state_41693[(9)]);
var inst_41666 = inst_41653.push(inst_41657);
var tmp41710 = inst_41653;
var inst_41653__$1 = tmp41710;
var inst_41654 = inst_41661;
var state_41693__$1 = (function (){var statearr_41714 = state_41693;
(statearr_41714[(14)] = inst_41666);

(statearr_41714[(7)] = inst_41654);

(statearr_41714[(8)] = inst_41653__$1);

return statearr_41714;
})();
var statearr_41715_41741 = state_41693__$1;
(statearr_41715_41741[(2)] = null);

(statearr_41715_41741[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__38950__auto___41727,out))
;
return ((function (switch__38796__auto__,c__38950__auto___41727,out){
return (function() {
var cljs$core$async$state_machine__38797__auto__ = null;
var cljs$core$async$state_machine__38797__auto____0 = (function (){
var statearr_41719 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41719[(0)] = cljs$core$async$state_machine__38797__auto__);

(statearr_41719[(1)] = (1));

return statearr_41719;
});
var cljs$core$async$state_machine__38797__auto____1 = (function (state_41693){
while(true){
var ret_value__38798__auto__ = (function (){try{while(true){
var result__38799__auto__ = switch__38796__auto__.call(null,state_41693);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38799__auto__;
}
break;
}
}catch (e41720){if((e41720 instanceof Object)){
var ex__38800__auto__ = e41720;
var statearr_41721_41742 = state_41693;
(statearr_41721_41742[(5)] = ex__38800__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41693);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41720;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41743 = state_41693;
state_41693 = G__41743;
continue;
} else {
return ret_value__38798__auto__;
}
break;
}
});
cljs$core$async$state_machine__38797__auto__ = function(state_41693){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38797__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38797__auto____1.call(this,state_41693);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38797__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38797__auto____0;
cljs$core$async$state_machine__38797__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38797__auto____1;
return cljs$core$async$state_machine__38797__auto__;
})()
;})(switch__38796__auto__,c__38950__auto___41727,out))
})();
var state__38952__auto__ = (function (){var statearr_41722 = f__38951__auto__.call(null);
(statearr_41722[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38950__auto___41727);

return statearr_41722;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38952__auto__);
});})(c__38950__auto___41727,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1483514357462