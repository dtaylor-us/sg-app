// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args43181 = [];
var len__39344__auto___43187 = arguments.length;
var i__39345__auto___43188 = (0);
while(true){
if((i__39345__auto___43188 < len__39344__auto___43187)){
args43181.push((arguments[i__39345__auto___43188]));

var G__43189 = (i__39345__auto___43188 + (1));
i__39345__auto___43188 = G__43189;
continue;
} else {
}
break;
}

var G__43183 = args43181.length;
switch (G__43183) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43181.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async43184 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43184 = (function (f,blockable,meta43185){
this.f = f;
this.blockable = blockable;
this.meta43185 = meta43185;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async43184.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43186,meta43185__$1){
var self__ = this;
var _43186__$1 = this;
return (new cljs.core.async.t_cljs$core$async43184(self__.f,self__.blockable,meta43185__$1));
});

cljs.core.async.t_cljs$core$async43184.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43186){
var self__ = this;
var _43186__$1 = this;
return self__.meta43185;
});

cljs.core.async.t_cljs$core$async43184.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43184.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async43184.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async43184.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async43184.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta43185","meta43185",-536433121,null)], null);
});

cljs.core.async.t_cljs$core$async43184.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43184.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43184";

cljs.core.async.t_cljs$core$async43184.cljs$lang$ctorPrWriter = (function (this__38842__auto__,writer__38843__auto__,opt__38844__auto__){
return cljs.core._write.call(null,writer__38843__auto__,"cljs.core.async/t_cljs$core$async43184");
});

cljs.core.async.__GT_t_cljs$core$async43184 = (function cljs$core$async$__GT_t_cljs$core$async43184(f__$1,blockable__$1,meta43185){
return (new cljs.core.async.t_cljs$core$async43184(f__$1,blockable__$1,meta43185));
});

}

return (new cljs.core.async.t_cljs$core$async43184(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
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
var args43193 = [];
var len__39344__auto___43196 = arguments.length;
var i__39345__auto___43197 = (0);
while(true){
if((i__39345__auto___43197 < len__39344__auto___43196)){
args43193.push((arguments[i__39345__auto___43197]));

var G__43198 = (i__39345__auto___43197 + (1));
i__39345__auto___43197 = G__43198;
continue;
} else {
}
break;
}

var G__43195 = args43193.length;
switch (G__43195) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43193.length)].join('')));

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
var args43200 = [];
var len__39344__auto___43203 = arguments.length;
var i__39345__auto___43204 = (0);
while(true){
if((i__39345__auto___43204 < len__39344__auto___43203)){
args43200.push((arguments[i__39345__auto___43204]));

var G__43205 = (i__39345__auto___43204 + (1));
i__39345__auto___43204 = G__43205;
continue;
} else {
}
break;
}

var G__43202 = args43200.length;
switch (G__43202) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43200.length)].join('')));

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
var args43207 = [];
var len__39344__auto___43210 = arguments.length;
var i__39345__auto___43211 = (0);
while(true){
if((i__39345__auto___43211 < len__39344__auto___43210)){
args43207.push((arguments[i__39345__auto___43211]));

var G__43212 = (i__39345__auto___43211 + (1));
i__39345__auto___43211 = G__43212;
continue;
} else {
}
break;
}

var G__43209 = args43207.length;
switch (G__43209) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43207.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_43214 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_43214);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_43214,ret){
return (function (){
return fn1.call(null,val_43214);
});})(val_43214,ret))
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
var args43215 = [];
var len__39344__auto___43218 = arguments.length;
var i__39345__auto___43219 = (0);
while(true){
if((i__39345__auto___43219 < len__39344__auto___43218)){
args43215.push((arguments[i__39345__auto___43219]));

var G__43220 = (i__39345__auto___43219 + (1));
i__39345__auto___43219 = G__43220;
continue;
} else {
}
break;
}

var G__43217 = args43215.length;
switch (G__43217) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43215.length)].join('')));

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
var n__39154__auto___43222 = n;
var x_43223 = (0);
while(true){
if((x_43223 < n__39154__auto___43222)){
(a[x_43223] = (0));

var G__43224 = (x_43223 + (1));
x_43223 = G__43224;
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

var G__43225 = (i + (1));
i = G__43225;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async43229 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43229 = (function (flag,meta43230){
this.flag = flag;
this.meta43230 = meta43230;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async43229.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_43231,meta43230__$1){
var self__ = this;
var _43231__$1 = this;
return (new cljs.core.async.t_cljs$core$async43229(self__.flag,meta43230__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async43229.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_43231){
var self__ = this;
var _43231__$1 = this;
return self__.meta43230;
});})(flag))
;

cljs.core.async.t_cljs$core$async43229.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43229.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async43229.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async43229.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async43229.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta43230","meta43230",-514129191,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async43229.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43229.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43229";

cljs.core.async.t_cljs$core$async43229.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__38842__auto__,writer__38843__auto__,opt__38844__auto__){
return cljs.core._write.call(null,writer__38843__auto__,"cljs.core.async/t_cljs$core$async43229");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async43229 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async43229(flag__$1,meta43230){
return (new cljs.core.async.t_cljs$core$async43229(flag__$1,meta43230));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async43229(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async43235 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43235 = (function (flag,cb,meta43236){
this.flag = flag;
this.cb = cb;
this.meta43236 = meta43236;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async43235.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43237,meta43236__$1){
var self__ = this;
var _43237__$1 = this;
return (new cljs.core.async.t_cljs$core$async43235(self__.flag,self__.cb,meta43236__$1));
});

cljs.core.async.t_cljs$core$async43235.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43237){
var self__ = this;
var _43237__$1 = this;
return self__.meta43236;
});

cljs.core.async.t_cljs$core$async43235.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43235.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async43235.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async43235.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async43235.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta43236","meta43236",794540075,null)], null);
});

cljs.core.async.t_cljs$core$async43235.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43235.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43235";

cljs.core.async.t_cljs$core$async43235.cljs$lang$ctorPrWriter = (function (this__38842__auto__,writer__38843__auto__,opt__38844__auto__){
return cljs.core._write.call(null,writer__38843__auto__,"cljs.core.async/t_cljs$core$async43235");
});

cljs.core.async.__GT_t_cljs$core$async43235 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async43235(flag__$1,cb__$1,meta43236){
return (new cljs.core.async.t_cljs$core$async43235(flag__$1,cb__$1,meta43236));
});

}

return (new cljs.core.async.t_cljs$core$async43235(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__43238_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__43238_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__43239_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__43239_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__38236__auto__ = wport;
if(cljs.core.truth_(or__38236__auto__)){
return or__38236__auto__;
} else {
return port;
}
})()], null));
} else {
var G__43240 = (i + (1));
i = G__43240;
continue;
}
} else {
return null;
}
break;
}
})();
var or__38236__auto__ = ret;
if(cljs.core.truth_(or__38236__auto__)){
return or__38236__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__38224__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__38224__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__38224__auto__;
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
var args__39351__auto__ = [];
var len__39344__auto___43246 = arguments.length;
var i__39345__auto___43247 = (0);
while(true){
if((i__39345__auto___43247 < len__39344__auto___43246)){
args__39351__auto__.push((arguments[i__39345__auto___43247]));

var G__43248 = (i__39345__auto___43247 + (1));
i__39345__auto___43247 = G__43248;
continue;
} else {
}
break;
}

var argseq__39352__auto__ = ((((1) < args__39351__auto__.length))?(new cljs.core.IndexedSeq(args__39351__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__39352__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__43243){
var map__43244 = p__43243;
var map__43244__$1 = ((((!((map__43244 == null)))?((((map__43244.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43244.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43244):map__43244);
var opts = map__43244__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq43241){
var G__43242 = cljs.core.first.call(null,seq43241);
var seq43241__$1 = cljs.core.next.call(null,seq43241);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__43242,seq43241__$1);
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
var args43249 = [];
var len__39344__auto___43299 = arguments.length;
var i__39345__auto___43300 = (0);
while(true){
if((i__39345__auto___43300 < len__39344__auto___43299)){
args43249.push((arguments[i__39345__auto___43300]));

var G__43301 = (i__39345__auto___43300 + (1));
i__39345__auto___43300 = G__43301;
continue;
} else {
}
break;
}

var G__43251 = args43249.length;
switch (G__43251) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43249.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__43136__auto___43303 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43136__auto___43303){
return (function (){
var f__43137__auto__ = (function (){var switch__43115__auto__ = ((function (c__43136__auto___43303){
return (function (state_43275){
var state_val_43276 = (state_43275[(1)]);
if((state_val_43276 === (7))){
var inst_43271 = (state_43275[(2)]);
var state_43275__$1 = state_43275;
var statearr_43277_43304 = state_43275__$1;
(statearr_43277_43304[(2)] = inst_43271);

(statearr_43277_43304[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43276 === (1))){
var state_43275__$1 = state_43275;
var statearr_43278_43305 = state_43275__$1;
(statearr_43278_43305[(2)] = null);

(statearr_43278_43305[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43276 === (4))){
var inst_43254 = (state_43275[(7)]);
var inst_43254__$1 = (state_43275[(2)]);
var inst_43255 = (inst_43254__$1 == null);
var state_43275__$1 = (function (){var statearr_43279 = state_43275;
(statearr_43279[(7)] = inst_43254__$1);

return statearr_43279;
})();
if(cljs.core.truth_(inst_43255)){
var statearr_43280_43306 = state_43275__$1;
(statearr_43280_43306[(1)] = (5));

} else {
var statearr_43281_43307 = state_43275__$1;
(statearr_43281_43307[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43276 === (13))){
var state_43275__$1 = state_43275;
var statearr_43282_43308 = state_43275__$1;
(statearr_43282_43308[(2)] = null);

(statearr_43282_43308[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43276 === (6))){
var inst_43254 = (state_43275[(7)]);
var state_43275__$1 = state_43275;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43275__$1,(11),to,inst_43254);
} else {
if((state_val_43276 === (3))){
var inst_43273 = (state_43275[(2)]);
var state_43275__$1 = state_43275;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43275__$1,inst_43273);
} else {
if((state_val_43276 === (12))){
var state_43275__$1 = state_43275;
var statearr_43283_43309 = state_43275__$1;
(statearr_43283_43309[(2)] = null);

(statearr_43283_43309[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43276 === (2))){
var state_43275__$1 = state_43275;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43275__$1,(4),from);
} else {
if((state_val_43276 === (11))){
var inst_43264 = (state_43275[(2)]);
var state_43275__$1 = state_43275;
if(cljs.core.truth_(inst_43264)){
var statearr_43284_43310 = state_43275__$1;
(statearr_43284_43310[(1)] = (12));

} else {
var statearr_43285_43311 = state_43275__$1;
(statearr_43285_43311[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43276 === (9))){
var state_43275__$1 = state_43275;
var statearr_43286_43312 = state_43275__$1;
(statearr_43286_43312[(2)] = null);

(statearr_43286_43312[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43276 === (5))){
var state_43275__$1 = state_43275;
if(cljs.core.truth_(close_QMARK_)){
var statearr_43287_43313 = state_43275__$1;
(statearr_43287_43313[(1)] = (8));

} else {
var statearr_43288_43314 = state_43275__$1;
(statearr_43288_43314[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43276 === (14))){
var inst_43269 = (state_43275[(2)]);
var state_43275__$1 = state_43275;
var statearr_43289_43315 = state_43275__$1;
(statearr_43289_43315[(2)] = inst_43269);

(statearr_43289_43315[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43276 === (10))){
var inst_43261 = (state_43275[(2)]);
var state_43275__$1 = state_43275;
var statearr_43290_43316 = state_43275__$1;
(statearr_43290_43316[(2)] = inst_43261);

(statearr_43290_43316[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43276 === (8))){
var inst_43258 = cljs.core.async.close_BANG_.call(null,to);
var state_43275__$1 = state_43275;
var statearr_43291_43317 = state_43275__$1;
(statearr_43291_43317[(2)] = inst_43258);

(statearr_43291_43317[(1)] = (10));


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
});})(c__43136__auto___43303))
;
return ((function (switch__43115__auto__,c__43136__auto___43303){
return (function() {
var cljs$core$async$state_machine__43116__auto__ = null;
var cljs$core$async$state_machine__43116__auto____0 = (function (){
var statearr_43295 = [null,null,null,null,null,null,null,null];
(statearr_43295[(0)] = cljs$core$async$state_machine__43116__auto__);

(statearr_43295[(1)] = (1));

return statearr_43295;
});
var cljs$core$async$state_machine__43116__auto____1 = (function (state_43275){
while(true){
var ret_value__43117__auto__ = (function (){try{while(true){
var result__43118__auto__ = switch__43115__auto__.call(null,state_43275);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43118__auto__;
}
break;
}
}catch (e43296){if((e43296 instanceof Object)){
var ex__43119__auto__ = e43296;
var statearr_43297_43318 = state_43275;
(statearr_43297_43318[(5)] = ex__43119__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43275);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43296;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43319 = state_43275;
state_43275 = G__43319;
continue;
} else {
return ret_value__43117__auto__;
}
break;
}
});
cljs$core$async$state_machine__43116__auto__ = function(state_43275){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43116__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43116__auto____1.call(this,state_43275);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43116__auto____0;
cljs$core$async$state_machine__43116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43116__auto____1;
return cljs$core$async$state_machine__43116__auto__;
})()
;})(switch__43115__auto__,c__43136__auto___43303))
})();
var state__43138__auto__ = (function (){var statearr_43298 = f__43137__auto__.call(null);
(statearr_43298[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43136__auto___43303);

return statearr_43298;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43138__auto__);
});})(c__43136__auto___43303))
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
return (function (p__43507){
var vec__43508 = p__43507;
var v = cljs.core.nth.call(null,vec__43508,(0),null);
var p = cljs.core.nth.call(null,vec__43508,(1),null);
var job = vec__43508;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__43136__auto___43694 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43136__auto___43694,res,vec__43508,v,p,job,jobs,results){
return (function (){
var f__43137__auto__ = (function (){var switch__43115__auto__ = ((function (c__43136__auto___43694,res,vec__43508,v,p,job,jobs,results){
return (function (state_43515){
var state_val_43516 = (state_43515[(1)]);
if((state_val_43516 === (1))){
var state_43515__$1 = state_43515;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43515__$1,(2),res,v);
} else {
if((state_val_43516 === (2))){
var inst_43512 = (state_43515[(2)]);
var inst_43513 = cljs.core.async.close_BANG_.call(null,res);
var state_43515__$1 = (function (){var statearr_43517 = state_43515;
(statearr_43517[(7)] = inst_43512);

return statearr_43517;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43515__$1,inst_43513);
} else {
return null;
}
}
});})(c__43136__auto___43694,res,vec__43508,v,p,job,jobs,results))
;
return ((function (switch__43115__auto__,c__43136__auto___43694,res,vec__43508,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43116__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43116__auto____0 = (function (){
var statearr_43521 = [null,null,null,null,null,null,null,null];
(statearr_43521[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43116__auto__);

(statearr_43521[(1)] = (1));

return statearr_43521;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43116__auto____1 = (function (state_43515){
while(true){
var ret_value__43117__auto__ = (function (){try{while(true){
var result__43118__auto__ = switch__43115__auto__.call(null,state_43515);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43118__auto__;
}
break;
}
}catch (e43522){if((e43522 instanceof Object)){
var ex__43119__auto__ = e43522;
var statearr_43523_43695 = state_43515;
(statearr_43523_43695[(5)] = ex__43119__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43515);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43522;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43696 = state_43515;
state_43515 = G__43696;
continue;
} else {
return ret_value__43117__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43116__auto__ = function(state_43515){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43116__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43116__auto____1.call(this,state_43515);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43116__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43116__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43116__auto__;
})()
;})(switch__43115__auto__,c__43136__auto___43694,res,vec__43508,v,p,job,jobs,results))
})();
var state__43138__auto__ = (function (){var statearr_43524 = f__43137__auto__.call(null);
(statearr_43524[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43136__auto___43694);

return statearr_43524;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43138__auto__);
});})(c__43136__auto___43694,res,vec__43508,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__43525){
var vec__43526 = p__43525;
var v = cljs.core.nth.call(null,vec__43526,(0),null);
var p = cljs.core.nth.call(null,vec__43526,(1),null);
var job = vec__43526;
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
var n__39154__auto___43697 = n;
var __43698 = (0);
while(true){
if((__43698 < n__39154__auto___43697)){
var G__43529_43699 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__43529_43699) {
case "compute":
var c__43136__auto___43701 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__43698,c__43136__auto___43701,G__43529_43699,n__39154__auto___43697,jobs,results,process,async){
return (function (){
var f__43137__auto__ = (function (){var switch__43115__auto__ = ((function (__43698,c__43136__auto___43701,G__43529_43699,n__39154__auto___43697,jobs,results,process,async){
return (function (state_43542){
var state_val_43543 = (state_43542[(1)]);
if((state_val_43543 === (1))){
var state_43542__$1 = state_43542;
var statearr_43544_43702 = state_43542__$1;
(statearr_43544_43702[(2)] = null);

(statearr_43544_43702[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43543 === (2))){
var state_43542__$1 = state_43542;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43542__$1,(4),jobs);
} else {
if((state_val_43543 === (3))){
var inst_43540 = (state_43542[(2)]);
var state_43542__$1 = state_43542;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43542__$1,inst_43540);
} else {
if((state_val_43543 === (4))){
var inst_43532 = (state_43542[(2)]);
var inst_43533 = process.call(null,inst_43532);
var state_43542__$1 = state_43542;
if(cljs.core.truth_(inst_43533)){
var statearr_43545_43703 = state_43542__$1;
(statearr_43545_43703[(1)] = (5));

} else {
var statearr_43546_43704 = state_43542__$1;
(statearr_43546_43704[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43543 === (5))){
var state_43542__$1 = state_43542;
var statearr_43547_43705 = state_43542__$1;
(statearr_43547_43705[(2)] = null);

(statearr_43547_43705[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43543 === (6))){
var state_43542__$1 = state_43542;
var statearr_43548_43706 = state_43542__$1;
(statearr_43548_43706[(2)] = null);

(statearr_43548_43706[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43543 === (7))){
var inst_43538 = (state_43542[(2)]);
var state_43542__$1 = state_43542;
var statearr_43549_43707 = state_43542__$1;
(statearr_43549_43707[(2)] = inst_43538);

(statearr_43549_43707[(1)] = (3));


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
});})(__43698,c__43136__auto___43701,G__43529_43699,n__39154__auto___43697,jobs,results,process,async))
;
return ((function (__43698,switch__43115__auto__,c__43136__auto___43701,G__43529_43699,n__39154__auto___43697,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43116__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43116__auto____0 = (function (){
var statearr_43553 = [null,null,null,null,null,null,null];
(statearr_43553[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43116__auto__);

(statearr_43553[(1)] = (1));

return statearr_43553;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43116__auto____1 = (function (state_43542){
while(true){
var ret_value__43117__auto__ = (function (){try{while(true){
var result__43118__auto__ = switch__43115__auto__.call(null,state_43542);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43118__auto__;
}
break;
}
}catch (e43554){if((e43554 instanceof Object)){
var ex__43119__auto__ = e43554;
var statearr_43555_43708 = state_43542;
(statearr_43555_43708[(5)] = ex__43119__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43542);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43554;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43709 = state_43542;
state_43542 = G__43709;
continue;
} else {
return ret_value__43117__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43116__auto__ = function(state_43542){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43116__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43116__auto____1.call(this,state_43542);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43116__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43116__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43116__auto__;
})()
;})(__43698,switch__43115__auto__,c__43136__auto___43701,G__43529_43699,n__39154__auto___43697,jobs,results,process,async))
})();
var state__43138__auto__ = (function (){var statearr_43556 = f__43137__auto__.call(null);
(statearr_43556[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43136__auto___43701);

return statearr_43556;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43138__auto__);
});})(__43698,c__43136__auto___43701,G__43529_43699,n__39154__auto___43697,jobs,results,process,async))
);


break;
case "async":
var c__43136__auto___43710 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__43698,c__43136__auto___43710,G__43529_43699,n__39154__auto___43697,jobs,results,process,async){
return (function (){
var f__43137__auto__ = (function (){var switch__43115__auto__ = ((function (__43698,c__43136__auto___43710,G__43529_43699,n__39154__auto___43697,jobs,results,process,async){
return (function (state_43569){
var state_val_43570 = (state_43569[(1)]);
if((state_val_43570 === (1))){
var state_43569__$1 = state_43569;
var statearr_43571_43711 = state_43569__$1;
(statearr_43571_43711[(2)] = null);

(statearr_43571_43711[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43570 === (2))){
var state_43569__$1 = state_43569;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43569__$1,(4),jobs);
} else {
if((state_val_43570 === (3))){
var inst_43567 = (state_43569[(2)]);
var state_43569__$1 = state_43569;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43569__$1,inst_43567);
} else {
if((state_val_43570 === (4))){
var inst_43559 = (state_43569[(2)]);
var inst_43560 = async.call(null,inst_43559);
var state_43569__$1 = state_43569;
if(cljs.core.truth_(inst_43560)){
var statearr_43572_43712 = state_43569__$1;
(statearr_43572_43712[(1)] = (5));

} else {
var statearr_43573_43713 = state_43569__$1;
(statearr_43573_43713[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43570 === (5))){
var state_43569__$1 = state_43569;
var statearr_43574_43714 = state_43569__$1;
(statearr_43574_43714[(2)] = null);

(statearr_43574_43714[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43570 === (6))){
var state_43569__$1 = state_43569;
var statearr_43575_43715 = state_43569__$1;
(statearr_43575_43715[(2)] = null);

(statearr_43575_43715[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43570 === (7))){
var inst_43565 = (state_43569[(2)]);
var state_43569__$1 = state_43569;
var statearr_43576_43716 = state_43569__$1;
(statearr_43576_43716[(2)] = inst_43565);

(statearr_43576_43716[(1)] = (3));


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
});})(__43698,c__43136__auto___43710,G__43529_43699,n__39154__auto___43697,jobs,results,process,async))
;
return ((function (__43698,switch__43115__auto__,c__43136__auto___43710,G__43529_43699,n__39154__auto___43697,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43116__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43116__auto____0 = (function (){
var statearr_43580 = [null,null,null,null,null,null,null];
(statearr_43580[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43116__auto__);

(statearr_43580[(1)] = (1));

return statearr_43580;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43116__auto____1 = (function (state_43569){
while(true){
var ret_value__43117__auto__ = (function (){try{while(true){
var result__43118__auto__ = switch__43115__auto__.call(null,state_43569);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43118__auto__;
}
break;
}
}catch (e43581){if((e43581 instanceof Object)){
var ex__43119__auto__ = e43581;
var statearr_43582_43717 = state_43569;
(statearr_43582_43717[(5)] = ex__43119__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43569);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43581;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43718 = state_43569;
state_43569 = G__43718;
continue;
} else {
return ret_value__43117__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43116__auto__ = function(state_43569){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43116__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43116__auto____1.call(this,state_43569);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43116__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43116__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43116__auto__;
})()
;})(__43698,switch__43115__auto__,c__43136__auto___43710,G__43529_43699,n__39154__auto___43697,jobs,results,process,async))
})();
var state__43138__auto__ = (function (){var statearr_43583 = f__43137__auto__.call(null);
(statearr_43583[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43136__auto___43710);

return statearr_43583;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43138__auto__);
});})(__43698,c__43136__auto___43710,G__43529_43699,n__39154__auto___43697,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__43719 = (__43698 + (1));
__43698 = G__43719;
continue;
} else {
}
break;
}

var c__43136__auto___43720 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43136__auto___43720,jobs,results,process,async){
return (function (){
var f__43137__auto__ = (function (){var switch__43115__auto__ = ((function (c__43136__auto___43720,jobs,results,process,async){
return (function (state_43605){
var state_val_43606 = (state_43605[(1)]);
if((state_val_43606 === (1))){
var state_43605__$1 = state_43605;
var statearr_43607_43721 = state_43605__$1;
(statearr_43607_43721[(2)] = null);

(statearr_43607_43721[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43606 === (2))){
var state_43605__$1 = state_43605;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43605__$1,(4),from);
} else {
if((state_val_43606 === (3))){
var inst_43603 = (state_43605[(2)]);
var state_43605__$1 = state_43605;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43605__$1,inst_43603);
} else {
if((state_val_43606 === (4))){
var inst_43586 = (state_43605[(7)]);
var inst_43586__$1 = (state_43605[(2)]);
var inst_43587 = (inst_43586__$1 == null);
var state_43605__$1 = (function (){var statearr_43608 = state_43605;
(statearr_43608[(7)] = inst_43586__$1);

return statearr_43608;
})();
if(cljs.core.truth_(inst_43587)){
var statearr_43609_43722 = state_43605__$1;
(statearr_43609_43722[(1)] = (5));

} else {
var statearr_43610_43723 = state_43605__$1;
(statearr_43610_43723[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43606 === (5))){
var inst_43589 = cljs.core.async.close_BANG_.call(null,jobs);
var state_43605__$1 = state_43605;
var statearr_43611_43724 = state_43605__$1;
(statearr_43611_43724[(2)] = inst_43589);

(statearr_43611_43724[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43606 === (6))){
var inst_43586 = (state_43605[(7)]);
var inst_43591 = (state_43605[(8)]);
var inst_43591__$1 = cljs.core.async.chan.call(null,(1));
var inst_43592 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_43593 = [inst_43586,inst_43591__$1];
var inst_43594 = (new cljs.core.PersistentVector(null,2,(5),inst_43592,inst_43593,null));
var state_43605__$1 = (function (){var statearr_43612 = state_43605;
(statearr_43612[(8)] = inst_43591__$1);

return statearr_43612;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43605__$1,(8),jobs,inst_43594);
} else {
if((state_val_43606 === (7))){
var inst_43601 = (state_43605[(2)]);
var state_43605__$1 = state_43605;
var statearr_43613_43725 = state_43605__$1;
(statearr_43613_43725[(2)] = inst_43601);

(statearr_43613_43725[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43606 === (8))){
var inst_43591 = (state_43605[(8)]);
var inst_43596 = (state_43605[(2)]);
var state_43605__$1 = (function (){var statearr_43614 = state_43605;
(statearr_43614[(9)] = inst_43596);

return statearr_43614;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43605__$1,(9),results,inst_43591);
} else {
if((state_val_43606 === (9))){
var inst_43598 = (state_43605[(2)]);
var state_43605__$1 = (function (){var statearr_43615 = state_43605;
(statearr_43615[(10)] = inst_43598);

return statearr_43615;
})();
var statearr_43616_43726 = state_43605__$1;
(statearr_43616_43726[(2)] = null);

(statearr_43616_43726[(1)] = (2));


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
});})(c__43136__auto___43720,jobs,results,process,async))
;
return ((function (switch__43115__auto__,c__43136__auto___43720,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43116__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43116__auto____0 = (function (){
var statearr_43620 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43620[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43116__auto__);

(statearr_43620[(1)] = (1));

return statearr_43620;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43116__auto____1 = (function (state_43605){
while(true){
var ret_value__43117__auto__ = (function (){try{while(true){
var result__43118__auto__ = switch__43115__auto__.call(null,state_43605);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43118__auto__;
}
break;
}
}catch (e43621){if((e43621 instanceof Object)){
var ex__43119__auto__ = e43621;
var statearr_43622_43727 = state_43605;
(statearr_43622_43727[(5)] = ex__43119__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43605);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43621;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43728 = state_43605;
state_43605 = G__43728;
continue;
} else {
return ret_value__43117__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43116__auto__ = function(state_43605){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43116__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43116__auto____1.call(this,state_43605);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43116__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43116__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43116__auto__;
})()
;})(switch__43115__auto__,c__43136__auto___43720,jobs,results,process,async))
})();
var state__43138__auto__ = (function (){var statearr_43623 = f__43137__auto__.call(null);
(statearr_43623[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43136__auto___43720);

return statearr_43623;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43138__auto__);
});})(c__43136__auto___43720,jobs,results,process,async))
);


var c__43136__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43136__auto__,jobs,results,process,async){
return (function (){
var f__43137__auto__ = (function (){var switch__43115__auto__ = ((function (c__43136__auto__,jobs,results,process,async){
return (function (state_43661){
var state_val_43662 = (state_43661[(1)]);
if((state_val_43662 === (7))){
var inst_43657 = (state_43661[(2)]);
var state_43661__$1 = state_43661;
var statearr_43663_43729 = state_43661__$1;
(statearr_43663_43729[(2)] = inst_43657);

(statearr_43663_43729[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43662 === (20))){
var state_43661__$1 = state_43661;
var statearr_43664_43730 = state_43661__$1;
(statearr_43664_43730[(2)] = null);

(statearr_43664_43730[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43662 === (1))){
var state_43661__$1 = state_43661;
var statearr_43665_43731 = state_43661__$1;
(statearr_43665_43731[(2)] = null);

(statearr_43665_43731[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43662 === (4))){
var inst_43626 = (state_43661[(7)]);
var inst_43626__$1 = (state_43661[(2)]);
var inst_43627 = (inst_43626__$1 == null);
var state_43661__$1 = (function (){var statearr_43666 = state_43661;
(statearr_43666[(7)] = inst_43626__$1);

return statearr_43666;
})();
if(cljs.core.truth_(inst_43627)){
var statearr_43667_43732 = state_43661__$1;
(statearr_43667_43732[(1)] = (5));

} else {
var statearr_43668_43733 = state_43661__$1;
(statearr_43668_43733[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43662 === (15))){
var inst_43639 = (state_43661[(8)]);
var state_43661__$1 = state_43661;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43661__$1,(18),to,inst_43639);
} else {
if((state_val_43662 === (21))){
var inst_43652 = (state_43661[(2)]);
var state_43661__$1 = state_43661;
var statearr_43669_43734 = state_43661__$1;
(statearr_43669_43734[(2)] = inst_43652);

(statearr_43669_43734[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43662 === (13))){
var inst_43654 = (state_43661[(2)]);
var state_43661__$1 = (function (){var statearr_43670 = state_43661;
(statearr_43670[(9)] = inst_43654);

return statearr_43670;
})();
var statearr_43671_43735 = state_43661__$1;
(statearr_43671_43735[(2)] = null);

(statearr_43671_43735[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43662 === (6))){
var inst_43626 = (state_43661[(7)]);
var state_43661__$1 = state_43661;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43661__$1,(11),inst_43626);
} else {
if((state_val_43662 === (17))){
var inst_43647 = (state_43661[(2)]);
var state_43661__$1 = state_43661;
if(cljs.core.truth_(inst_43647)){
var statearr_43672_43736 = state_43661__$1;
(statearr_43672_43736[(1)] = (19));

} else {
var statearr_43673_43737 = state_43661__$1;
(statearr_43673_43737[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43662 === (3))){
var inst_43659 = (state_43661[(2)]);
var state_43661__$1 = state_43661;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43661__$1,inst_43659);
} else {
if((state_val_43662 === (12))){
var inst_43636 = (state_43661[(10)]);
var state_43661__$1 = state_43661;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43661__$1,(14),inst_43636);
} else {
if((state_val_43662 === (2))){
var state_43661__$1 = state_43661;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43661__$1,(4),results);
} else {
if((state_val_43662 === (19))){
var state_43661__$1 = state_43661;
var statearr_43674_43738 = state_43661__$1;
(statearr_43674_43738[(2)] = null);

(statearr_43674_43738[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43662 === (11))){
var inst_43636 = (state_43661[(2)]);
var state_43661__$1 = (function (){var statearr_43675 = state_43661;
(statearr_43675[(10)] = inst_43636);

return statearr_43675;
})();
var statearr_43676_43739 = state_43661__$1;
(statearr_43676_43739[(2)] = null);

(statearr_43676_43739[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43662 === (9))){
var state_43661__$1 = state_43661;
var statearr_43677_43740 = state_43661__$1;
(statearr_43677_43740[(2)] = null);

(statearr_43677_43740[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43662 === (5))){
var state_43661__$1 = state_43661;
if(cljs.core.truth_(close_QMARK_)){
var statearr_43678_43741 = state_43661__$1;
(statearr_43678_43741[(1)] = (8));

} else {
var statearr_43679_43742 = state_43661__$1;
(statearr_43679_43742[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43662 === (14))){
var inst_43641 = (state_43661[(11)]);
var inst_43639 = (state_43661[(8)]);
var inst_43639__$1 = (state_43661[(2)]);
var inst_43640 = (inst_43639__$1 == null);
var inst_43641__$1 = cljs.core.not.call(null,inst_43640);
var state_43661__$1 = (function (){var statearr_43680 = state_43661;
(statearr_43680[(11)] = inst_43641__$1);

(statearr_43680[(8)] = inst_43639__$1);

return statearr_43680;
})();
if(inst_43641__$1){
var statearr_43681_43743 = state_43661__$1;
(statearr_43681_43743[(1)] = (15));

} else {
var statearr_43682_43744 = state_43661__$1;
(statearr_43682_43744[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43662 === (16))){
var inst_43641 = (state_43661[(11)]);
var state_43661__$1 = state_43661;
var statearr_43683_43745 = state_43661__$1;
(statearr_43683_43745[(2)] = inst_43641);

(statearr_43683_43745[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43662 === (10))){
var inst_43633 = (state_43661[(2)]);
var state_43661__$1 = state_43661;
var statearr_43684_43746 = state_43661__$1;
(statearr_43684_43746[(2)] = inst_43633);

(statearr_43684_43746[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43662 === (18))){
var inst_43644 = (state_43661[(2)]);
var state_43661__$1 = state_43661;
var statearr_43685_43747 = state_43661__$1;
(statearr_43685_43747[(2)] = inst_43644);

(statearr_43685_43747[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43662 === (8))){
var inst_43630 = cljs.core.async.close_BANG_.call(null,to);
var state_43661__$1 = state_43661;
var statearr_43686_43748 = state_43661__$1;
(statearr_43686_43748[(2)] = inst_43630);

(statearr_43686_43748[(1)] = (10));


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
});})(c__43136__auto__,jobs,results,process,async))
;
return ((function (switch__43115__auto__,c__43136__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43116__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43116__auto____0 = (function (){
var statearr_43690 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43690[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43116__auto__);

(statearr_43690[(1)] = (1));

return statearr_43690;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43116__auto____1 = (function (state_43661){
while(true){
var ret_value__43117__auto__ = (function (){try{while(true){
var result__43118__auto__ = switch__43115__auto__.call(null,state_43661);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43118__auto__;
}
break;
}
}catch (e43691){if((e43691 instanceof Object)){
var ex__43119__auto__ = e43691;
var statearr_43692_43749 = state_43661;
(statearr_43692_43749[(5)] = ex__43119__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43661);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43691;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43750 = state_43661;
state_43661 = G__43750;
continue;
} else {
return ret_value__43117__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43116__auto__ = function(state_43661){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43116__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43116__auto____1.call(this,state_43661);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43116__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43116__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43116__auto__;
})()
;})(switch__43115__auto__,c__43136__auto__,jobs,results,process,async))
})();
var state__43138__auto__ = (function (){var statearr_43693 = f__43137__auto__.call(null);
(statearr_43693[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43136__auto__);

return statearr_43693;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43138__auto__);
});})(c__43136__auto__,jobs,results,process,async))
);

return c__43136__auto__;
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
var args43751 = [];
var len__39344__auto___43754 = arguments.length;
var i__39345__auto___43755 = (0);
while(true){
if((i__39345__auto___43755 < len__39344__auto___43754)){
args43751.push((arguments[i__39345__auto___43755]));

var G__43756 = (i__39345__auto___43755 + (1));
i__39345__auto___43755 = G__43756;
continue;
} else {
}
break;
}

var G__43753 = args43751.length;
switch (G__43753) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43751.length)].join('')));

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
var args43758 = [];
var len__39344__auto___43761 = arguments.length;
var i__39345__auto___43762 = (0);
while(true){
if((i__39345__auto___43762 < len__39344__auto___43761)){
args43758.push((arguments[i__39345__auto___43762]));

var G__43763 = (i__39345__auto___43762 + (1));
i__39345__auto___43762 = G__43763;
continue;
} else {
}
break;
}

var G__43760 = args43758.length;
switch (G__43760) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43758.length)].join('')));

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
var args43765 = [];
var len__39344__auto___43818 = arguments.length;
var i__39345__auto___43819 = (0);
while(true){
if((i__39345__auto___43819 < len__39344__auto___43818)){
args43765.push((arguments[i__39345__auto___43819]));

var G__43820 = (i__39345__auto___43819 + (1));
i__39345__auto___43819 = G__43820;
continue;
} else {
}
break;
}

var G__43767 = args43765.length;
switch (G__43767) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43765.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__43136__auto___43822 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43136__auto___43822,tc,fc){
return (function (){
var f__43137__auto__ = (function (){var switch__43115__auto__ = ((function (c__43136__auto___43822,tc,fc){
return (function (state_43793){
var state_val_43794 = (state_43793[(1)]);
if((state_val_43794 === (7))){
var inst_43789 = (state_43793[(2)]);
var state_43793__$1 = state_43793;
var statearr_43795_43823 = state_43793__$1;
(statearr_43795_43823[(2)] = inst_43789);

(statearr_43795_43823[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43794 === (1))){
var state_43793__$1 = state_43793;
var statearr_43796_43824 = state_43793__$1;
(statearr_43796_43824[(2)] = null);

(statearr_43796_43824[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43794 === (4))){
var inst_43770 = (state_43793[(7)]);
var inst_43770__$1 = (state_43793[(2)]);
var inst_43771 = (inst_43770__$1 == null);
var state_43793__$1 = (function (){var statearr_43797 = state_43793;
(statearr_43797[(7)] = inst_43770__$1);

return statearr_43797;
})();
if(cljs.core.truth_(inst_43771)){
var statearr_43798_43825 = state_43793__$1;
(statearr_43798_43825[(1)] = (5));

} else {
var statearr_43799_43826 = state_43793__$1;
(statearr_43799_43826[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43794 === (13))){
var state_43793__$1 = state_43793;
var statearr_43800_43827 = state_43793__$1;
(statearr_43800_43827[(2)] = null);

(statearr_43800_43827[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43794 === (6))){
var inst_43770 = (state_43793[(7)]);
var inst_43776 = p.call(null,inst_43770);
var state_43793__$1 = state_43793;
if(cljs.core.truth_(inst_43776)){
var statearr_43801_43828 = state_43793__$1;
(statearr_43801_43828[(1)] = (9));

} else {
var statearr_43802_43829 = state_43793__$1;
(statearr_43802_43829[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43794 === (3))){
var inst_43791 = (state_43793[(2)]);
var state_43793__$1 = state_43793;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43793__$1,inst_43791);
} else {
if((state_val_43794 === (12))){
var state_43793__$1 = state_43793;
var statearr_43803_43830 = state_43793__$1;
(statearr_43803_43830[(2)] = null);

(statearr_43803_43830[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43794 === (2))){
var state_43793__$1 = state_43793;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43793__$1,(4),ch);
} else {
if((state_val_43794 === (11))){
var inst_43770 = (state_43793[(7)]);
var inst_43780 = (state_43793[(2)]);
var state_43793__$1 = state_43793;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43793__$1,(8),inst_43780,inst_43770);
} else {
if((state_val_43794 === (9))){
var state_43793__$1 = state_43793;
var statearr_43804_43831 = state_43793__$1;
(statearr_43804_43831[(2)] = tc);

(statearr_43804_43831[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43794 === (5))){
var inst_43773 = cljs.core.async.close_BANG_.call(null,tc);
var inst_43774 = cljs.core.async.close_BANG_.call(null,fc);
var state_43793__$1 = (function (){var statearr_43805 = state_43793;
(statearr_43805[(8)] = inst_43773);

return statearr_43805;
})();
var statearr_43806_43832 = state_43793__$1;
(statearr_43806_43832[(2)] = inst_43774);

(statearr_43806_43832[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43794 === (14))){
var inst_43787 = (state_43793[(2)]);
var state_43793__$1 = state_43793;
var statearr_43807_43833 = state_43793__$1;
(statearr_43807_43833[(2)] = inst_43787);

(statearr_43807_43833[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43794 === (10))){
var state_43793__$1 = state_43793;
var statearr_43808_43834 = state_43793__$1;
(statearr_43808_43834[(2)] = fc);

(statearr_43808_43834[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43794 === (8))){
var inst_43782 = (state_43793[(2)]);
var state_43793__$1 = state_43793;
if(cljs.core.truth_(inst_43782)){
var statearr_43809_43835 = state_43793__$1;
(statearr_43809_43835[(1)] = (12));

} else {
var statearr_43810_43836 = state_43793__$1;
(statearr_43810_43836[(1)] = (13));

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
});})(c__43136__auto___43822,tc,fc))
;
return ((function (switch__43115__auto__,c__43136__auto___43822,tc,fc){
return (function() {
var cljs$core$async$state_machine__43116__auto__ = null;
var cljs$core$async$state_machine__43116__auto____0 = (function (){
var statearr_43814 = [null,null,null,null,null,null,null,null,null];
(statearr_43814[(0)] = cljs$core$async$state_machine__43116__auto__);

(statearr_43814[(1)] = (1));

return statearr_43814;
});
var cljs$core$async$state_machine__43116__auto____1 = (function (state_43793){
while(true){
var ret_value__43117__auto__ = (function (){try{while(true){
var result__43118__auto__ = switch__43115__auto__.call(null,state_43793);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43118__auto__;
}
break;
}
}catch (e43815){if((e43815 instanceof Object)){
var ex__43119__auto__ = e43815;
var statearr_43816_43837 = state_43793;
(statearr_43816_43837[(5)] = ex__43119__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43793);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43815;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43838 = state_43793;
state_43793 = G__43838;
continue;
} else {
return ret_value__43117__auto__;
}
break;
}
});
cljs$core$async$state_machine__43116__auto__ = function(state_43793){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43116__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43116__auto____1.call(this,state_43793);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43116__auto____0;
cljs$core$async$state_machine__43116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43116__auto____1;
return cljs$core$async$state_machine__43116__auto__;
})()
;})(switch__43115__auto__,c__43136__auto___43822,tc,fc))
})();
var state__43138__auto__ = (function (){var statearr_43817 = f__43137__auto__.call(null);
(statearr_43817[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43136__auto___43822);

return statearr_43817;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43138__auto__);
});})(c__43136__auto___43822,tc,fc))
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
var c__43136__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43136__auto__){
return (function (){
var f__43137__auto__ = (function (){var switch__43115__auto__ = ((function (c__43136__auto__){
return (function (state_43902){
var state_val_43903 = (state_43902[(1)]);
if((state_val_43903 === (7))){
var inst_43898 = (state_43902[(2)]);
var state_43902__$1 = state_43902;
var statearr_43904_43925 = state_43902__$1;
(statearr_43904_43925[(2)] = inst_43898);

(statearr_43904_43925[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43903 === (1))){
var inst_43882 = init;
var state_43902__$1 = (function (){var statearr_43905 = state_43902;
(statearr_43905[(7)] = inst_43882);

return statearr_43905;
})();
var statearr_43906_43926 = state_43902__$1;
(statearr_43906_43926[(2)] = null);

(statearr_43906_43926[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43903 === (4))){
var inst_43885 = (state_43902[(8)]);
var inst_43885__$1 = (state_43902[(2)]);
var inst_43886 = (inst_43885__$1 == null);
var state_43902__$1 = (function (){var statearr_43907 = state_43902;
(statearr_43907[(8)] = inst_43885__$1);

return statearr_43907;
})();
if(cljs.core.truth_(inst_43886)){
var statearr_43908_43927 = state_43902__$1;
(statearr_43908_43927[(1)] = (5));

} else {
var statearr_43909_43928 = state_43902__$1;
(statearr_43909_43928[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43903 === (6))){
var inst_43889 = (state_43902[(9)]);
var inst_43882 = (state_43902[(7)]);
var inst_43885 = (state_43902[(8)]);
var inst_43889__$1 = f.call(null,inst_43882,inst_43885);
var inst_43890 = cljs.core.reduced_QMARK_.call(null,inst_43889__$1);
var state_43902__$1 = (function (){var statearr_43910 = state_43902;
(statearr_43910[(9)] = inst_43889__$1);

return statearr_43910;
})();
if(inst_43890){
var statearr_43911_43929 = state_43902__$1;
(statearr_43911_43929[(1)] = (8));

} else {
var statearr_43912_43930 = state_43902__$1;
(statearr_43912_43930[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43903 === (3))){
var inst_43900 = (state_43902[(2)]);
var state_43902__$1 = state_43902;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43902__$1,inst_43900);
} else {
if((state_val_43903 === (2))){
var state_43902__$1 = state_43902;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43902__$1,(4),ch);
} else {
if((state_val_43903 === (9))){
var inst_43889 = (state_43902[(9)]);
var inst_43882 = inst_43889;
var state_43902__$1 = (function (){var statearr_43913 = state_43902;
(statearr_43913[(7)] = inst_43882);

return statearr_43913;
})();
var statearr_43914_43931 = state_43902__$1;
(statearr_43914_43931[(2)] = null);

(statearr_43914_43931[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43903 === (5))){
var inst_43882 = (state_43902[(7)]);
var state_43902__$1 = state_43902;
var statearr_43915_43932 = state_43902__$1;
(statearr_43915_43932[(2)] = inst_43882);

(statearr_43915_43932[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43903 === (10))){
var inst_43896 = (state_43902[(2)]);
var state_43902__$1 = state_43902;
var statearr_43916_43933 = state_43902__$1;
(statearr_43916_43933[(2)] = inst_43896);

(statearr_43916_43933[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43903 === (8))){
var inst_43889 = (state_43902[(9)]);
var inst_43892 = cljs.core.deref.call(null,inst_43889);
var state_43902__$1 = state_43902;
var statearr_43917_43934 = state_43902__$1;
(statearr_43917_43934[(2)] = inst_43892);

(statearr_43917_43934[(1)] = (10));


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
});})(c__43136__auto__))
;
return ((function (switch__43115__auto__,c__43136__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__43116__auto__ = null;
var cljs$core$async$reduce_$_state_machine__43116__auto____0 = (function (){
var statearr_43921 = [null,null,null,null,null,null,null,null,null,null];
(statearr_43921[(0)] = cljs$core$async$reduce_$_state_machine__43116__auto__);

(statearr_43921[(1)] = (1));

return statearr_43921;
});
var cljs$core$async$reduce_$_state_machine__43116__auto____1 = (function (state_43902){
while(true){
var ret_value__43117__auto__ = (function (){try{while(true){
var result__43118__auto__ = switch__43115__auto__.call(null,state_43902);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43118__auto__;
}
break;
}
}catch (e43922){if((e43922 instanceof Object)){
var ex__43119__auto__ = e43922;
var statearr_43923_43935 = state_43902;
(statearr_43923_43935[(5)] = ex__43119__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43902);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43922;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43936 = state_43902;
state_43902 = G__43936;
continue;
} else {
return ret_value__43117__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__43116__auto__ = function(state_43902){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__43116__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__43116__auto____1.call(this,state_43902);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__43116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__43116__auto____0;
cljs$core$async$reduce_$_state_machine__43116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__43116__auto____1;
return cljs$core$async$reduce_$_state_machine__43116__auto__;
})()
;})(switch__43115__auto__,c__43136__auto__))
})();
var state__43138__auto__ = (function (){var statearr_43924 = f__43137__auto__.call(null);
(statearr_43924[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43136__auto__);

return statearr_43924;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43138__auto__);
});})(c__43136__auto__))
);

return c__43136__auto__;
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
var args43937 = [];
var len__39344__auto___43989 = arguments.length;
var i__39345__auto___43990 = (0);
while(true){
if((i__39345__auto___43990 < len__39344__auto___43989)){
args43937.push((arguments[i__39345__auto___43990]));

var G__43991 = (i__39345__auto___43990 + (1));
i__39345__auto___43990 = G__43991;
continue;
} else {
}
break;
}

var G__43939 = args43937.length;
switch (G__43939) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43937.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__43136__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43136__auto__){
return (function (){
var f__43137__auto__ = (function (){var switch__43115__auto__ = ((function (c__43136__auto__){
return (function (state_43964){
var state_val_43965 = (state_43964[(1)]);
if((state_val_43965 === (7))){
var inst_43946 = (state_43964[(2)]);
var state_43964__$1 = state_43964;
var statearr_43966_43993 = state_43964__$1;
(statearr_43966_43993[(2)] = inst_43946);

(statearr_43966_43993[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43965 === (1))){
var inst_43940 = cljs.core.seq.call(null,coll);
var inst_43941 = inst_43940;
var state_43964__$1 = (function (){var statearr_43967 = state_43964;
(statearr_43967[(7)] = inst_43941);

return statearr_43967;
})();
var statearr_43968_43994 = state_43964__$1;
(statearr_43968_43994[(2)] = null);

(statearr_43968_43994[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43965 === (4))){
var inst_43941 = (state_43964[(7)]);
var inst_43944 = cljs.core.first.call(null,inst_43941);
var state_43964__$1 = state_43964;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43964__$1,(7),ch,inst_43944);
} else {
if((state_val_43965 === (13))){
var inst_43958 = (state_43964[(2)]);
var state_43964__$1 = state_43964;
var statearr_43969_43995 = state_43964__$1;
(statearr_43969_43995[(2)] = inst_43958);

(statearr_43969_43995[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43965 === (6))){
var inst_43949 = (state_43964[(2)]);
var state_43964__$1 = state_43964;
if(cljs.core.truth_(inst_43949)){
var statearr_43970_43996 = state_43964__$1;
(statearr_43970_43996[(1)] = (8));

} else {
var statearr_43971_43997 = state_43964__$1;
(statearr_43971_43997[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43965 === (3))){
var inst_43962 = (state_43964[(2)]);
var state_43964__$1 = state_43964;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43964__$1,inst_43962);
} else {
if((state_val_43965 === (12))){
var state_43964__$1 = state_43964;
var statearr_43972_43998 = state_43964__$1;
(statearr_43972_43998[(2)] = null);

(statearr_43972_43998[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43965 === (2))){
var inst_43941 = (state_43964[(7)]);
var state_43964__$1 = state_43964;
if(cljs.core.truth_(inst_43941)){
var statearr_43973_43999 = state_43964__$1;
(statearr_43973_43999[(1)] = (4));

} else {
var statearr_43974_44000 = state_43964__$1;
(statearr_43974_44000[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43965 === (11))){
var inst_43955 = cljs.core.async.close_BANG_.call(null,ch);
var state_43964__$1 = state_43964;
var statearr_43975_44001 = state_43964__$1;
(statearr_43975_44001[(2)] = inst_43955);

(statearr_43975_44001[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43965 === (9))){
var state_43964__$1 = state_43964;
if(cljs.core.truth_(close_QMARK_)){
var statearr_43976_44002 = state_43964__$1;
(statearr_43976_44002[(1)] = (11));

} else {
var statearr_43977_44003 = state_43964__$1;
(statearr_43977_44003[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43965 === (5))){
var inst_43941 = (state_43964[(7)]);
var state_43964__$1 = state_43964;
var statearr_43978_44004 = state_43964__$1;
(statearr_43978_44004[(2)] = inst_43941);

(statearr_43978_44004[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43965 === (10))){
var inst_43960 = (state_43964[(2)]);
var state_43964__$1 = state_43964;
var statearr_43979_44005 = state_43964__$1;
(statearr_43979_44005[(2)] = inst_43960);

(statearr_43979_44005[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43965 === (8))){
var inst_43941 = (state_43964[(7)]);
var inst_43951 = cljs.core.next.call(null,inst_43941);
var inst_43941__$1 = inst_43951;
var state_43964__$1 = (function (){var statearr_43980 = state_43964;
(statearr_43980[(7)] = inst_43941__$1);

return statearr_43980;
})();
var statearr_43981_44006 = state_43964__$1;
(statearr_43981_44006[(2)] = null);

(statearr_43981_44006[(1)] = (2));


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
});})(c__43136__auto__))
;
return ((function (switch__43115__auto__,c__43136__auto__){
return (function() {
var cljs$core$async$state_machine__43116__auto__ = null;
var cljs$core$async$state_machine__43116__auto____0 = (function (){
var statearr_43985 = [null,null,null,null,null,null,null,null];
(statearr_43985[(0)] = cljs$core$async$state_machine__43116__auto__);

(statearr_43985[(1)] = (1));

return statearr_43985;
});
var cljs$core$async$state_machine__43116__auto____1 = (function (state_43964){
while(true){
var ret_value__43117__auto__ = (function (){try{while(true){
var result__43118__auto__ = switch__43115__auto__.call(null,state_43964);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43118__auto__;
}
break;
}
}catch (e43986){if((e43986 instanceof Object)){
var ex__43119__auto__ = e43986;
var statearr_43987_44007 = state_43964;
(statearr_43987_44007[(5)] = ex__43119__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43964);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43986;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44008 = state_43964;
state_43964 = G__44008;
continue;
} else {
return ret_value__43117__auto__;
}
break;
}
});
cljs$core$async$state_machine__43116__auto__ = function(state_43964){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43116__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43116__auto____1.call(this,state_43964);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43116__auto____0;
cljs$core$async$state_machine__43116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43116__auto____1;
return cljs$core$async$state_machine__43116__auto__;
})()
;})(switch__43115__auto__,c__43136__auto__))
})();
var state__43138__auto__ = (function (){var statearr_43988 = f__43137__auto__.call(null);
(statearr_43988[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43136__auto__);

return statearr_43988;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43138__auto__);
});})(c__43136__auto__))
);

return c__43136__auto__;
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
var x__38899__auto__ = (((_ == null))?null:_);
var m__38900__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__38899__auto__)]);
if(!((m__38900__auto__ == null))){
return m__38900__auto__.call(null,_);
} else {
var m__38900__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__38900__auto____$1 == null))){
return m__38900__auto____$1.call(null,_);
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
var x__38899__auto__ = (((m == null))?null:m);
var m__38900__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__38899__auto__)]);
if(!((m__38900__auto__ == null))){
return m__38900__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__38900__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__38900__auto____$1 == null))){
return m__38900__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__38899__auto__ = (((m == null))?null:m);
var m__38900__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__38899__auto__)]);
if(!((m__38900__auto__ == null))){
return m__38900__auto__.call(null,m,ch);
} else {
var m__38900__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__38900__auto____$1 == null))){
return m__38900__auto____$1.call(null,m,ch);
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
var x__38899__auto__ = (((m == null))?null:m);
var m__38900__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__38899__auto__)]);
if(!((m__38900__auto__ == null))){
return m__38900__auto__.call(null,m);
} else {
var m__38900__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__38900__auto____$1 == null))){
return m__38900__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async44234 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44234 = (function (ch,cs,meta44235){
this.ch = ch;
this.cs = cs;
this.meta44235 = meta44235;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async44234.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_44236,meta44235__$1){
var self__ = this;
var _44236__$1 = this;
return (new cljs.core.async.t_cljs$core$async44234(self__.ch,self__.cs,meta44235__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async44234.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_44236){
var self__ = this;
var _44236__$1 = this;
return self__.meta44235;
});})(cs))
;

cljs.core.async.t_cljs$core$async44234.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44234.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async44234.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44234.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async44234.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async44234.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async44234.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta44235","meta44235",410225985,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async44234.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44234.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44234";

cljs.core.async.t_cljs$core$async44234.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__38842__auto__,writer__38843__auto__,opt__38844__auto__){
return cljs.core._write.call(null,writer__38843__auto__,"cljs.core.async/t_cljs$core$async44234");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async44234 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async44234(ch__$1,cs__$1,meta44235){
return (new cljs.core.async.t_cljs$core$async44234(ch__$1,cs__$1,meta44235));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async44234(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__43136__auto___44459 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43136__auto___44459,cs,m,dchan,dctr,done){
return (function (){
var f__43137__auto__ = (function (){var switch__43115__auto__ = ((function (c__43136__auto___44459,cs,m,dchan,dctr,done){
return (function (state_44371){
var state_val_44372 = (state_44371[(1)]);
if((state_val_44372 === (7))){
var inst_44367 = (state_44371[(2)]);
var state_44371__$1 = state_44371;
var statearr_44373_44460 = state_44371__$1;
(statearr_44373_44460[(2)] = inst_44367);

(statearr_44373_44460[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44372 === (20))){
var inst_44270 = (state_44371[(7)]);
var inst_44282 = cljs.core.first.call(null,inst_44270);
var inst_44283 = cljs.core.nth.call(null,inst_44282,(0),null);
var inst_44284 = cljs.core.nth.call(null,inst_44282,(1),null);
var state_44371__$1 = (function (){var statearr_44374 = state_44371;
(statearr_44374[(8)] = inst_44283);

return statearr_44374;
})();
if(cljs.core.truth_(inst_44284)){
var statearr_44375_44461 = state_44371__$1;
(statearr_44375_44461[(1)] = (22));

} else {
var statearr_44376_44462 = state_44371__$1;
(statearr_44376_44462[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44372 === (27))){
var inst_44319 = (state_44371[(9)]);
var inst_44312 = (state_44371[(10)]);
var inst_44314 = (state_44371[(11)]);
var inst_44239 = (state_44371[(12)]);
var inst_44319__$1 = cljs.core._nth.call(null,inst_44312,inst_44314);
var inst_44320 = cljs.core.async.put_BANG_.call(null,inst_44319__$1,inst_44239,done);
var state_44371__$1 = (function (){var statearr_44377 = state_44371;
(statearr_44377[(9)] = inst_44319__$1);

return statearr_44377;
})();
if(cljs.core.truth_(inst_44320)){
var statearr_44378_44463 = state_44371__$1;
(statearr_44378_44463[(1)] = (30));

} else {
var statearr_44379_44464 = state_44371__$1;
(statearr_44379_44464[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44372 === (1))){
var state_44371__$1 = state_44371;
var statearr_44380_44465 = state_44371__$1;
(statearr_44380_44465[(2)] = null);

(statearr_44380_44465[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44372 === (24))){
var inst_44270 = (state_44371[(7)]);
var inst_44289 = (state_44371[(2)]);
var inst_44290 = cljs.core.next.call(null,inst_44270);
var inst_44248 = inst_44290;
var inst_44249 = null;
var inst_44250 = (0);
var inst_44251 = (0);
var state_44371__$1 = (function (){var statearr_44381 = state_44371;
(statearr_44381[(13)] = inst_44249);

(statearr_44381[(14)] = inst_44248);

(statearr_44381[(15)] = inst_44289);

(statearr_44381[(16)] = inst_44250);

(statearr_44381[(17)] = inst_44251);

return statearr_44381;
})();
var statearr_44382_44466 = state_44371__$1;
(statearr_44382_44466[(2)] = null);

(statearr_44382_44466[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44372 === (39))){
var state_44371__$1 = state_44371;
var statearr_44386_44467 = state_44371__$1;
(statearr_44386_44467[(2)] = null);

(statearr_44386_44467[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44372 === (4))){
var inst_44239 = (state_44371[(12)]);
var inst_44239__$1 = (state_44371[(2)]);
var inst_44240 = (inst_44239__$1 == null);
var state_44371__$1 = (function (){var statearr_44387 = state_44371;
(statearr_44387[(12)] = inst_44239__$1);

return statearr_44387;
})();
if(cljs.core.truth_(inst_44240)){
var statearr_44388_44468 = state_44371__$1;
(statearr_44388_44468[(1)] = (5));

} else {
var statearr_44389_44469 = state_44371__$1;
(statearr_44389_44469[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44372 === (15))){
var inst_44249 = (state_44371[(13)]);
var inst_44248 = (state_44371[(14)]);
var inst_44250 = (state_44371[(16)]);
var inst_44251 = (state_44371[(17)]);
var inst_44266 = (state_44371[(2)]);
var inst_44267 = (inst_44251 + (1));
var tmp44383 = inst_44249;
var tmp44384 = inst_44248;
var tmp44385 = inst_44250;
var inst_44248__$1 = tmp44384;
var inst_44249__$1 = tmp44383;
var inst_44250__$1 = tmp44385;
var inst_44251__$1 = inst_44267;
var state_44371__$1 = (function (){var statearr_44390 = state_44371;
(statearr_44390[(13)] = inst_44249__$1);

(statearr_44390[(14)] = inst_44248__$1);

(statearr_44390[(16)] = inst_44250__$1);

(statearr_44390[(18)] = inst_44266);

(statearr_44390[(17)] = inst_44251__$1);

return statearr_44390;
})();
var statearr_44391_44470 = state_44371__$1;
(statearr_44391_44470[(2)] = null);

(statearr_44391_44470[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44372 === (21))){
var inst_44293 = (state_44371[(2)]);
var state_44371__$1 = state_44371;
var statearr_44395_44471 = state_44371__$1;
(statearr_44395_44471[(2)] = inst_44293);

(statearr_44395_44471[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44372 === (31))){
var inst_44319 = (state_44371[(9)]);
var inst_44323 = done.call(null,null);
var inst_44324 = cljs.core.async.untap_STAR_.call(null,m,inst_44319);
var state_44371__$1 = (function (){var statearr_44396 = state_44371;
(statearr_44396[(19)] = inst_44323);

return statearr_44396;
})();
var statearr_44397_44472 = state_44371__$1;
(statearr_44397_44472[(2)] = inst_44324);

(statearr_44397_44472[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44372 === (32))){
var inst_44312 = (state_44371[(10)]);
var inst_44311 = (state_44371[(20)]);
var inst_44313 = (state_44371[(21)]);
var inst_44314 = (state_44371[(11)]);
var inst_44326 = (state_44371[(2)]);
var inst_44327 = (inst_44314 + (1));
var tmp44392 = inst_44312;
var tmp44393 = inst_44311;
var tmp44394 = inst_44313;
var inst_44311__$1 = tmp44393;
var inst_44312__$1 = tmp44392;
var inst_44313__$1 = tmp44394;
var inst_44314__$1 = inst_44327;
var state_44371__$1 = (function (){var statearr_44398 = state_44371;
(statearr_44398[(10)] = inst_44312__$1);

(statearr_44398[(20)] = inst_44311__$1);

(statearr_44398[(22)] = inst_44326);

(statearr_44398[(21)] = inst_44313__$1);

(statearr_44398[(11)] = inst_44314__$1);

return statearr_44398;
})();
var statearr_44399_44473 = state_44371__$1;
(statearr_44399_44473[(2)] = null);

(statearr_44399_44473[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44372 === (40))){
var inst_44339 = (state_44371[(23)]);
var inst_44343 = done.call(null,null);
var inst_44344 = cljs.core.async.untap_STAR_.call(null,m,inst_44339);
var state_44371__$1 = (function (){var statearr_44400 = state_44371;
(statearr_44400[(24)] = inst_44343);

return statearr_44400;
})();
var statearr_44401_44474 = state_44371__$1;
(statearr_44401_44474[(2)] = inst_44344);

(statearr_44401_44474[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44372 === (33))){
var inst_44330 = (state_44371[(25)]);
var inst_44332 = cljs.core.chunked_seq_QMARK_.call(null,inst_44330);
var state_44371__$1 = state_44371;
if(inst_44332){
var statearr_44402_44475 = state_44371__$1;
(statearr_44402_44475[(1)] = (36));

} else {
var statearr_44403_44476 = state_44371__$1;
(statearr_44403_44476[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44372 === (13))){
var inst_44260 = (state_44371[(26)]);
var inst_44263 = cljs.core.async.close_BANG_.call(null,inst_44260);
var state_44371__$1 = state_44371;
var statearr_44404_44477 = state_44371__$1;
(statearr_44404_44477[(2)] = inst_44263);

(statearr_44404_44477[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44372 === (22))){
var inst_44283 = (state_44371[(8)]);
var inst_44286 = cljs.core.async.close_BANG_.call(null,inst_44283);
var state_44371__$1 = state_44371;
var statearr_44405_44478 = state_44371__$1;
(statearr_44405_44478[(2)] = inst_44286);

(statearr_44405_44478[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44372 === (36))){
var inst_44330 = (state_44371[(25)]);
var inst_44334 = cljs.core.chunk_first.call(null,inst_44330);
var inst_44335 = cljs.core.chunk_rest.call(null,inst_44330);
var inst_44336 = cljs.core.count.call(null,inst_44334);
var inst_44311 = inst_44335;
var inst_44312 = inst_44334;
var inst_44313 = inst_44336;
var inst_44314 = (0);
var state_44371__$1 = (function (){var statearr_44406 = state_44371;
(statearr_44406[(10)] = inst_44312);

(statearr_44406[(20)] = inst_44311);

(statearr_44406[(21)] = inst_44313);

(statearr_44406[(11)] = inst_44314);

return statearr_44406;
})();
var statearr_44407_44479 = state_44371__$1;
(statearr_44407_44479[(2)] = null);

(statearr_44407_44479[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44372 === (41))){
var inst_44330 = (state_44371[(25)]);
var inst_44346 = (state_44371[(2)]);
var inst_44347 = cljs.core.next.call(null,inst_44330);
var inst_44311 = inst_44347;
var inst_44312 = null;
var inst_44313 = (0);
var inst_44314 = (0);
var state_44371__$1 = (function (){var statearr_44408 = state_44371;
(statearr_44408[(10)] = inst_44312);

(statearr_44408[(20)] = inst_44311);

(statearr_44408[(21)] = inst_44313);

(statearr_44408[(11)] = inst_44314);

(statearr_44408[(27)] = inst_44346);

return statearr_44408;
})();
var statearr_44409_44480 = state_44371__$1;
(statearr_44409_44480[(2)] = null);

(statearr_44409_44480[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44372 === (43))){
var state_44371__$1 = state_44371;
var statearr_44410_44481 = state_44371__$1;
(statearr_44410_44481[(2)] = null);

(statearr_44410_44481[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44372 === (29))){
var inst_44355 = (state_44371[(2)]);
var state_44371__$1 = state_44371;
var statearr_44411_44482 = state_44371__$1;
(statearr_44411_44482[(2)] = inst_44355);

(statearr_44411_44482[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44372 === (44))){
var inst_44364 = (state_44371[(2)]);
var state_44371__$1 = (function (){var statearr_44412 = state_44371;
(statearr_44412[(28)] = inst_44364);

return statearr_44412;
})();
var statearr_44413_44483 = state_44371__$1;
(statearr_44413_44483[(2)] = null);

(statearr_44413_44483[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44372 === (6))){
var inst_44303 = (state_44371[(29)]);
var inst_44302 = cljs.core.deref.call(null,cs);
var inst_44303__$1 = cljs.core.keys.call(null,inst_44302);
var inst_44304 = cljs.core.count.call(null,inst_44303__$1);
var inst_44305 = cljs.core.reset_BANG_.call(null,dctr,inst_44304);
var inst_44310 = cljs.core.seq.call(null,inst_44303__$1);
var inst_44311 = inst_44310;
var inst_44312 = null;
var inst_44313 = (0);
var inst_44314 = (0);
var state_44371__$1 = (function (){var statearr_44414 = state_44371;
(statearr_44414[(29)] = inst_44303__$1);

(statearr_44414[(10)] = inst_44312);

(statearr_44414[(20)] = inst_44311);

(statearr_44414[(21)] = inst_44313);

(statearr_44414[(30)] = inst_44305);

(statearr_44414[(11)] = inst_44314);

return statearr_44414;
})();
var statearr_44415_44484 = state_44371__$1;
(statearr_44415_44484[(2)] = null);

(statearr_44415_44484[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44372 === (28))){
var inst_44330 = (state_44371[(25)]);
var inst_44311 = (state_44371[(20)]);
var inst_44330__$1 = cljs.core.seq.call(null,inst_44311);
var state_44371__$1 = (function (){var statearr_44416 = state_44371;
(statearr_44416[(25)] = inst_44330__$1);

return statearr_44416;
})();
if(inst_44330__$1){
var statearr_44417_44485 = state_44371__$1;
(statearr_44417_44485[(1)] = (33));

} else {
var statearr_44418_44486 = state_44371__$1;
(statearr_44418_44486[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44372 === (25))){
var inst_44313 = (state_44371[(21)]);
var inst_44314 = (state_44371[(11)]);
var inst_44316 = (inst_44314 < inst_44313);
var inst_44317 = inst_44316;
var state_44371__$1 = state_44371;
if(cljs.core.truth_(inst_44317)){
var statearr_44419_44487 = state_44371__$1;
(statearr_44419_44487[(1)] = (27));

} else {
var statearr_44420_44488 = state_44371__$1;
(statearr_44420_44488[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44372 === (34))){
var state_44371__$1 = state_44371;
var statearr_44421_44489 = state_44371__$1;
(statearr_44421_44489[(2)] = null);

(statearr_44421_44489[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44372 === (17))){
var state_44371__$1 = state_44371;
var statearr_44422_44490 = state_44371__$1;
(statearr_44422_44490[(2)] = null);

(statearr_44422_44490[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44372 === (3))){
var inst_44369 = (state_44371[(2)]);
var state_44371__$1 = state_44371;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44371__$1,inst_44369);
} else {
if((state_val_44372 === (12))){
var inst_44298 = (state_44371[(2)]);
var state_44371__$1 = state_44371;
var statearr_44423_44491 = state_44371__$1;
(statearr_44423_44491[(2)] = inst_44298);

(statearr_44423_44491[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44372 === (2))){
var state_44371__$1 = state_44371;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44371__$1,(4),ch);
} else {
if((state_val_44372 === (23))){
var state_44371__$1 = state_44371;
var statearr_44424_44492 = state_44371__$1;
(statearr_44424_44492[(2)] = null);

(statearr_44424_44492[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44372 === (35))){
var inst_44353 = (state_44371[(2)]);
var state_44371__$1 = state_44371;
var statearr_44425_44493 = state_44371__$1;
(statearr_44425_44493[(2)] = inst_44353);

(statearr_44425_44493[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44372 === (19))){
var inst_44270 = (state_44371[(7)]);
var inst_44274 = cljs.core.chunk_first.call(null,inst_44270);
var inst_44275 = cljs.core.chunk_rest.call(null,inst_44270);
var inst_44276 = cljs.core.count.call(null,inst_44274);
var inst_44248 = inst_44275;
var inst_44249 = inst_44274;
var inst_44250 = inst_44276;
var inst_44251 = (0);
var state_44371__$1 = (function (){var statearr_44426 = state_44371;
(statearr_44426[(13)] = inst_44249);

(statearr_44426[(14)] = inst_44248);

(statearr_44426[(16)] = inst_44250);

(statearr_44426[(17)] = inst_44251);

return statearr_44426;
})();
var statearr_44427_44494 = state_44371__$1;
(statearr_44427_44494[(2)] = null);

(statearr_44427_44494[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44372 === (11))){
var inst_44248 = (state_44371[(14)]);
var inst_44270 = (state_44371[(7)]);
var inst_44270__$1 = cljs.core.seq.call(null,inst_44248);
var state_44371__$1 = (function (){var statearr_44428 = state_44371;
(statearr_44428[(7)] = inst_44270__$1);

return statearr_44428;
})();
if(inst_44270__$1){
var statearr_44429_44495 = state_44371__$1;
(statearr_44429_44495[(1)] = (16));

} else {
var statearr_44430_44496 = state_44371__$1;
(statearr_44430_44496[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44372 === (9))){
var inst_44300 = (state_44371[(2)]);
var state_44371__$1 = state_44371;
var statearr_44431_44497 = state_44371__$1;
(statearr_44431_44497[(2)] = inst_44300);

(statearr_44431_44497[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44372 === (5))){
var inst_44246 = cljs.core.deref.call(null,cs);
var inst_44247 = cljs.core.seq.call(null,inst_44246);
var inst_44248 = inst_44247;
var inst_44249 = null;
var inst_44250 = (0);
var inst_44251 = (0);
var state_44371__$1 = (function (){var statearr_44432 = state_44371;
(statearr_44432[(13)] = inst_44249);

(statearr_44432[(14)] = inst_44248);

(statearr_44432[(16)] = inst_44250);

(statearr_44432[(17)] = inst_44251);

return statearr_44432;
})();
var statearr_44433_44498 = state_44371__$1;
(statearr_44433_44498[(2)] = null);

(statearr_44433_44498[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44372 === (14))){
var state_44371__$1 = state_44371;
var statearr_44434_44499 = state_44371__$1;
(statearr_44434_44499[(2)] = null);

(statearr_44434_44499[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44372 === (45))){
var inst_44361 = (state_44371[(2)]);
var state_44371__$1 = state_44371;
var statearr_44435_44500 = state_44371__$1;
(statearr_44435_44500[(2)] = inst_44361);

(statearr_44435_44500[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44372 === (26))){
var inst_44303 = (state_44371[(29)]);
var inst_44357 = (state_44371[(2)]);
var inst_44358 = cljs.core.seq.call(null,inst_44303);
var state_44371__$1 = (function (){var statearr_44436 = state_44371;
(statearr_44436[(31)] = inst_44357);

return statearr_44436;
})();
if(inst_44358){
var statearr_44437_44501 = state_44371__$1;
(statearr_44437_44501[(1)] = (42));

} else {
var statearr_44438_44502 = state_44371__$1;
(statearr_44438_44502[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44372 === (16))){
var inst_44270 = (state_44371[(7)]);
var inst_44272 = cljs.core.chunked_seq_QMARK_.call(null,inst_44270);
var state_44371__$1 = state_44371;
if(inst_44272){
var statearr_44439_44503 = state_44371__$1;
(statearr_44439_44503[(1)] = (19));

} else {
var statearr_44440_44504 = state_44371__$1;
(statearr_44440_44504[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44372 === (38))){
var inst_44350 = (state_44371[(2)]);
var state_44371__$1 = state_44371;
var statearr_44441_44505 = state_44371__$1;
(statearr_44441_44505[(2)] = inst_44350);

(statearr_44441_44505[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44372 === (30))){
var state_44371__$1 = state_44371;
var statearr_44442_44506 = state_44371__$1;
(statearr_44442_44506[(2)] = null);

(statearr_44442_44506[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44372 === (10))){
var inst_44249 = (state_44371[(13)]);
var inst_44251 = (state_44371[(17)]);
var inst_44259 = cljs.core._nth.call(null,inst_44249,inst_44251);
var inst_44260 = cljs.core.nth.call(null,inst_44259,(0),null);
var inst_44261 = cljs.core.nth.call(null,inst_44259,(1),null);
var state_44371__$1 = (function (){var statearr_44443 = state_44371;
(statearr_44443[(26)] = inst_44260);

return statearr_44443;
})();
if(cljs.core.truth_(inst_44261)){
var statearr_44444_44507 = state_44371__$1;
(statearr_44444_44507[(1)] = (13));

} else {
var statearr_44445_44508 = state_44371__$1;
(statearr_44445_44508[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44372 === (18))){
var inst_44296 = (state_44371[(2)]);
var state_44371__$1 = state_44371;
var statearr_44446_44509 = state_44371__$1;
(statearr_44446_44509[(2)] = inst_44296);

(statearr_44446_44509[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44372 === (42))){
var state_44371__$1 = state_44371;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44371__$1,(45),dchan);
} else {
if((state_val_44372 === (37))){
var inst_44330 = (state_44371[(25)]);
var inst_44339 = (state_44371[(23)]);
var inst_44239 = (state_44371[(12)]);
var inst_44339__$1 = cljs.core.first.call(null,inst_44330);
var inst_44340 = cljs.core.async.put_BANG_.call(null,inst_44339__$1,inst_44239,done);
var state_44371__$1 = (function (){var statearr_44447 = state_44371;
(statearr_44447[(23)] = inst_44339__$1);

return statearr_44447;
})();
if(cljs.core.truth_(inst_44340)){
var statearr_44448_44510 = state_44371__$1;
(statearr_44448_44510[(1)] = (39));

} else {
var statearr_44449_44511 = state_44371__$1;
(statearr_44449_44511[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44372 === (8))){
var inst_44250 = (state_44371[(16)]);
var inst_44251 = (state_44371[(17)]);
var inst_44253 = (inst_44251 < inst_44250);
var inst_44254 = inst_44253;
var state_44371__$1 = state_44371;
if(cljs.core.truth_(inst_44254)){
var statearr_44450_44512 = state_44371__$1;
(statearr_44450_44512[(1)] = (10));

} else {
var statearr_44451_44513 = state_44371__$1;
(statearr_44451_44513[(1)] = (11));

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
});})(c__43136__auto___44459,cs,m,dchan,dctr,done))
;
return ((function (switch__43115__auto__,c__43136__auto___44459,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__43116__auto__ = null;
var cljs$core$async$mult_$_state_machine__43116__auto____0 = (function (){
var statearr_44455 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44455[(0)] = cljs$core$async$mult_$_state_machine__43116__auto__);

(statearr_44455[(1)] = (1));

return statearr_44455;
});
var cljs$core$async$mult_$_state_machine__43116__auto____1 = (function (state_44371){
while(true){
var ret_value__43117__auto__ = (function (){try{while(true){
var result__43118__auto__ = switch__43115__auto__.call(null,state_44371);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43118__auto__;
}
break;
}
}catch (e44456){if((e44456 instanceof Object)){
var ex__43119__auto__ = e44456;
var statearr_44457_44514 = state_44371;
(statearr_44457_44514[(5)] = ex__43119__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44371);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44456;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44515 = state_44371;
state_44371 = G__44515;
continue;
} else {
return ret_value__43117__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__43116__auto__ = function(state_44371){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__43116__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__43116__auto____1.call(this,state_44371);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__43116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__43116__auto____0;
cljs$core$async$mult_$_state_machine__43116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__43116__auto____1;
return cljs$core$async$mult_$_state_machine__43116__auto__;
})()
;})(switch__43115__auto__,c__43136__auto___44459,cs,m,dchan,dctr,done))
})();
var state__43138__auto__ = (function (){var statearr_44458 = f__43137__auto__.call(null);
(statearr_44458[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43136__auto___44459);

return statearr_44458;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43138__auto__);
});})(c__43136__auto___44459,cs,m,dchan,dctr,done))
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
var args44516 = [];
var len__39344__auto___44519 = arguments.length;
var i__39345__auto___44520 = (0);
while(true){
if((i__39345__auto___44520 < len__39344__auto___44519)){
args44516.push((arguments[i__39345__auto___44520]));

var G__44521 = (i__39345__auto___44520 + (1));
i__39345__auto___44520 = G__44521;
continue;
} else {
}
break;
}

var G__44518 = args44516.length;
switch (G__44518) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44516.length)].join('')));

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
var x__38899__auto__ = (((m == null))?null:m);
var m__38900__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__38899__auto__)]);
if(!((m__38900__auto__ == null))){
return m__38900__auto__.call(null,m,ch);
} else {
var m__38900__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__38900__auto____$1 == null))){
return m__38900__auto____$1.call(null,m,ch);
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
var x__38899__auto__ = (((m == null))?null:m);
var m__38900__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__38899__auto__)]);
if(!((m__38900__auto__ == null))){
return m__38900__auto__.call(null,m,ch);
} else {
var m__38900__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__38900__auto____$1 == null))){
return m__38900__auto____$1.call(null,m,ch);
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
var x__38899__auto__ = (((m == null))?null:m);
var m__38900__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__38899__auto__)]);
if(!((m__38900__auto__ == null))){
return m__38900__auto__.call(null,m);
} else {
var m__38900__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__38900__auto____$1 == null))){
return m__38900__auto____$1.call(null,m);
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
var x__38899__auto__ = (((m == null))?null:m);
var m__38900__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__38899__auto__)]);
if(!((m__38900__auto__ == null))){
return m__38900__auto__.call(null,m,state_map);
} else {
var m__38900__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__38900__auto____$1 == null))){
return m__38900__auto____$1.call(null,m,state_map);
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
var x__38899__auto__ = (((m == null))?null:m);
var m__38900__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__38899__auto__)]);
if(!((m__38900__auto__ == null))){
return m__38900__auto__.call(null,m,mode);
} else {
var m__38900__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__38900__auto____$1 == null))){
return m__38900__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__39351__auto__ = [];
var len__39344__auto___44533 = arguments.length;
var i__39345__auto___44534 = (0);
while(true){
if((i__39345__auto___44534 < len__39344__auto___44533)){
args__39351__auto__.push((arguments[i__39345__auto___44534]));

var G__44535 = (i__39345__auto___44534 + (1));
i__39345__auto___44534 = G__44535;
continue;
} else {
}
break;
}

var argseq__39352__auto__ = ((((3) < args__39351__auto__.length))?(new cljs.core.IndexedSeq(args__39351__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__39352__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__44527){
var map__44528 = p__44527;
var map__44528__$1 = ((((!((map__44528 == null)))?((((map__44528.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44528.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44528):map__44528);
var opts = map__44528__$1;
var statearr_44530_44536 = state;
(statearr_44530_44536[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__44528,map__44528__$1,opts){
return (function (val){
var statearr_44531_44537 = state;
(statearr_44531_44537[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__44528,map__44528__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_44532_44538 = state;
(statearr_44532_44538[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq44523){
var G__44524 = cljs.core.first.call(null,seq44523);
var seq44523__$1 = cljs.core.next.call(null,seq44523);
var G__44525 = cljs.core.first.call(null,seq44523__$1);
var seq44523__$2 = cljs.core.next.call(null,seq44523__$1);
var G__44526 = cljs.core.first.call(null,seq44523__$2);
var seq44523__$3 = cljs.core.next.call(null,seq44523__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__44524,G__44525,G__44526,seq44523__$3);
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
if(typeof cljs.core.async.t_cljs$core$async44706 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44706 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta44707){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta44707 = meta44707;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async44706.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_44708,meta44707__$1){
var self__ = this;
var _44708__$1 = this;
return (new cljs.core.async.t_cljs$core$async44706(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta44707__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async44706.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_44708){
var self__ = this;
var _44708__$1 = this;
return self__.meta44707;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async44706.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44706.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async44706.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44706.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async44706.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async44706.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async44706.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async44706.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async44706.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta44707","meta44707",-1219306946,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async44706.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44706.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44706";

cljs.core.async.t_cljs$core$async44706.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__38842__auto__,writer__38843__auto__,opt__38844__auto__){
return cljs.core._write.call(null,writer__38843__auto__,"cljs.core.async/t_cljs$core$async44706");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async44706 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async44706(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta44707){
return (new cljs.core.async.t_cljs$core$async44706(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta44707));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async44706(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__43136__auto___44873 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43136__auto___44873,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__43137__auto__ = (function (){var switch__43115__auto__ = ((function (c__43136__auto___44873,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_44810){
var state_val_44811 = (state_44810[(1)]);
if((state_val_44811 === (7))){
var inst_44725 = (state_44810[(2)]);
var state_44810__$1 = state_44810;
var statearr_44812_44874 = state_44810__$1;
(statearr_44812_44874[(2)] = inst_44725);

(statearr_44812_44874[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44811 === (20))){
var inst_44737 = (state_44810[(7)]);
var state_44810__$1 = state_44810;
var statearr_44813_44875 = state_44810__$1;
(statearr_44813_44875[(2)] = inst_44737);

(statearr_44813_44875[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44811 === (27))){
var state_44810__$1 = state_44810;
var statearr_44814_44876 = state_44810__$1;
(statearr_44814_44876[(2)] = null);

(statearr_44814_44876[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44811 === (1))){
var inst_44712 = (state_44810[(8)]);
var inst_44712__$1 = calc_state.call(null);
var inst_44714 = (inst_44712__$1 == null);
var inst_44715 = cljs.core.not.call(null,inst_44714);
var state_44810__$1 = (function (){var statearr_44815 = state_44810;
(statearr_44815[(8)] = inst_44712__$1);

return statearr_44815;
})();
if(inst_44715){
var statearr_44816_44877 = state_44810__$1;
(statearr_44816_44877[(1)] = (2));

} else {
var statearr_44817_44878 = state_44810__$1;
(statearr_44817_44878[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44811 === (24))){
var inst_44761 = (state_44810[(9)]);
var inst_44770 = (state_44810[(10)]);
var inst_44784 = (state_44810[(11)]);
var inst_44784__$1 = inst_44761.call(null,inst_44770);
var state_44810__$1 = (function (){var statearr_44818 = state_44810;
(statearr_44818[(11)] = inst_44784__$1);

return statearr_44818;
})();
if(cljs.core.truth_(inst_44784__$1)){
var statearr_44819_44879 = state_44810__$1;
(statearr_44819_44879[(1)] = (29));

} else {
var statearr_44820_44880 = state_44810__$1;
(statearr_44820_44880[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44811 === (4))){
var inst_44728 = (state_44810[(2)]);
var state_44810__$1 = state_44810;
if(cljs.core.truth_(inst_44728)){
var statearr_44821_44881 = state_44810__$1;
(statearr_44821_44881[(1)] = (8));

} else {
var statearr_44822_44882 = state_44810__$1;
(statearr_44822_44882[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44811 === (15))){
var inst_44755 = (state_44810[(2)]);
var state_44810__$1 = state_44810;
if(cljs.core.truth_(inst_44755)){
var statearr_44823_44883 = state_44810__$1;
(statearr_44823_44883[(1)] = (19));

} else {
var statearr_44824_44884 = state_44810__$1;
(statearr_44824_44884[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44811 === (21))){
var inst_44760 = (state_44810[(12)]);
var inst_44760__$1 = (state_44810[(2)]);
var inst_44761 = cljs.core.get.call(null,inst_44760__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_44762 = cljs.core.get.call(null,inst_44760__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_44763 = cljs.core.get.call(null,inst_44760__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_44810__$1 = (function (){var statearr_44825 = state_44810;
(statearr_44825[(13)] = inst_44762);

(statearr_44825[(9)] = inst_44761);

(statearr_44825[(12)] = inst_44760__$1);

return statearr_44825;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_44810__$1,(22),inst_44763);
} else {
if((state_val_44811 === (31))){
var inst_44792 = (state_44810[(2)]);
var state_44810__$1 = state_44810;
if(cljs.core.truth_(inst_44792)){
var statearr_44826_44885 = state_44810__$1;
(statearr_44826_44885[(1)] = (32));

} else {
var statearr_44827_44886 = state_44810__$1;
(statearr_44827_44886[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44811 === (32))){
var inst_44769 = (state_44810[(14)]);
var state_44810__$1 = state_44810;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44810__$1,(35),out,inst_44769);
} else {
if((state_val_44811 === (33))){
var inst_44760 = (state_44810[(12)]);
var inst_44737 = inst_44760;
var state_44810__$1 = (function (){var statearr_44828 = state_44810;
(statearr_44828[(7)] = inst_44737);

return statearr_44828;
})();
var statearr_44829_44887 = state_44810__$1;
(statearr_44829_44887[(2)] = null);

(statearr_44829_44887[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44811 === (13))){
var inst_44737 = (state_44810[(7)]);
var inst_44744 = inst_44737.cljs$lang$protocol_mask$partition0$;
var inst_44745 = (inst_44744 & (64));
var inst_44746 = inst_44737.cljs$core$ISeq$;
var inst_44747 = (cljs.core.PROTOCOL_SENTINEL === inst_44746);
var inst_44748 = (inst_44745) || (inst_44747);
var state_44810__$1 = state_44810;
if(cljs.core.truth_(inst_44748)){
var statearr_44830_44888 = state_44810__$1;
(statearr_44830_44888[(1)] = (16));

} else {
var statearr_44831_44889 = state_44810__$1;
(statearr_44831_44889[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44811 === (22))){
var inst_44769 = (state_44810[(14)]);
var inst_44770 = (state_44810[(10)]);
var inst_44768 = (state_44810[(2)]);
var inst_44769__$1 = cljs.core.nth.call(null,inst_44768,(0),null);
var inst_44770__$1 = cljs.core.nth.call(null,inst_44768,(1),null);
var inst_44771 = (inst_44769__$1 == null);
var inst_44772 = cljs.core._EQ_.call(null,inst_44770__$1,change);
var inst_44773 = (inst_44771) || (inst_44772);
var state_44810__$1 = (function (){var statearr_44832 = state_44810;
(statearr_44832[(14)] = inst_44769__$1);

(statearr_44832[(10)] = inst_44770__$1);

return statearr_44832;
})();
if(cljs.core.truth_(inst_44773)){
var statearr_44833_44890 = state_44810__$1;
(statearr_44833_44890[(1)] = (23));

} else {
var statearr_44834_44891 = state_44810__$1;
(statearr_44834_44891[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44811 === (36))){
var inst_44760 = (state_44810[(12)]);
var inst_44737 = inst_44760;
var state_44810__$1 = (function (){var statearr_44835 = state_44810;
(statearr_44835[(7)] = inst_44737);

return statearr_44835;
})();
var statearr_44836_44892 = state_44810__$1;
(statearr_44836_44892[(2)] = null);

(statearr_44836_44892[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44811 === (29))){
var inst_44784 = (state_44810[(11)]);
var state_44810__$1 = state_44810;
var statearr_44837_44893 = state_44810__$1;
(statearr_44837_44893[(2)] = inst_44784);

(statearr_44837_44893[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44811 === (6))){
var state_44810__$1 = state_44810;
var statearr_44838_44894 = state_44810__$1;
(statearr_44838_44894[(2)] = false);

(statearr_44838_44894[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44811 === (28))){
var inst_44780 = (state_44810[(2)]);
var inst_44781 = calc_state.call(null);
var inst_44737 = inst_44781;
var state_44810__$1 = (function (){var statearr_44839 = state_44810;
(statearr_44839[(15)] = inst_44780);

(statearr_44839[(7)] = inst_44737);

return statearr_44839;
})();
var statearr_44840_44895 = state_44810__$1;
(statearr_44840_44895[(2)] = null);

(statearr_44840_44895[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44811 === (25))){
var inst_44806 = (state_44810[(2)]);
var state_44810__$1 = state_44810;
var statearr_44841_44896 = state_44810__$1;
(statearr_44841_44896[(2)] = inst_44806);

(statearr_44841_44896[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44811 === (34))){
var inst_44804 = (state_44810[(2)]);
var state_44810__$1 = state_44810;
var statearr_44842_44897 = state_44810__$1;
(statearr_44842_44897[(2)] = inst_44804);

(statearr_44842_44897[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44811 === (17))){
var state_44810__$1 = state_44810;
var statearr_44843_44898 = state_44810__$1;
(statearr_44843_44898[(2)] = false);

(statearr_44843_44898[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44811 === (3))){
var state_44810__$1 = state_44810;
var statearr_44844_44899 = state_44810__$1;
(statearr_44844_44899[(2)] = false);

(statearr_44844_44899[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44811 === (12))){
var inst_44808 = (state_44810[(2)]);
var state_44810__$1 = state_44810;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44810__$1,inst_44808);
} else {
if((state_val_44811 === (2))){
var inst_44712 = (state_44810[(8)]);
var inst_44717 = inst_44712.cljs$lang$protocol_mask$partition0$;
var inst_44718 = (inst_44717 & (64));
var inst_44719 = inst_44712.cljs$core$ISeq$;
var inst_44720 = (cljs.core.PROTOCOL_SENTINEL === inst_44719);
var inst_44721 = (inst_44718) || (inst_44720);
var state_44810__$1 = state_44810;
if(cljs.core.truth_(inst_44721)){
var statearr_44845_44900 = state_44810__$1;
(statearr_44845_44900[(1)] = (5));

} else {
var statearr_44846_44901 = state_44810__$1;
(statearr_44846_44901[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44811 === (23))){
var inst_44769 = (state_44810[(14)]);
var inst_44775 = (inst_44769 == null);
var state_44810__$1 = state_44810;
if(cljs.core.truth_(inst_44775)){
var statearr_44847_44902 = state_44810__$1;
(statearr_44847_44902[(1)] = (26));

} else {
var statearr_44848_44903 = state_44810__$1;
(statearr_44848_44903[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44811 === (35))){
var inst_44795 = (state_44810[(2)]);
var state_44810__$1 = state_44810;
if(cljs.core.truth_(inst_44795)){
var statearr_44849_44904 = state_44810__$1;
(statearr_44849_44904[(1)] = (36));

} else {
var statearr_44850_44905 = state_44810__$1;
(statearr_44850_44905[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44811 === (19))){
var inst_44737 = (state_44810[(7)]);
var inst_44757 = cljs.core.apply.call(null,cljs.core.hash_map,inst_44737);
var state_44810__$1 = state_44810;
var statearr_44851_44906 = state_44810__$1;
(statearr_44851_44906[(2)] = inst_44757);

(statearr_44851_44906[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44811 === (11))){
var inst_44737 = (state_44810[(7)]);
var inst_44741 = (inst_44737 == null);
var inst_44742 = cljs.core.not.call(null,inst_44741);
var state_44810__$1 = state_44810;
if(inst_44742){
var statearr_44852_44907 = state_44810__$1;
(statearr_44852_44907[(1)] = (13));

} else {
var statearr_44853_44908 = state_44810__$1;
(statearr_44853_44908[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44811 === (9))){
var inst_44712 = (state_44810[(8)]);
var state_44810__$1 = state_44810;
var statearr_44854_44909 = state_44810__$1;
(statearr_44854_44909[(2)] = inst_44712);

(statearr_44854_44909[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44811 === (5))){
var state_44810__$1 = state_44810;
var statearr_44855_44910 = state_44810__$1;
(statearr_44855_44910[(2)] = true);

(statearr_44855_44910[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44811 === (14))){
var state_44810__$1 = state_44810;
var statearr_44856_44911 = state_44810__$1;
(statearr_44856_44911[(2)] = false);

(statearr_44856_44911[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44811 === (26))){
var inst_44770 = (state_44810[(10)]);
var inst_44777 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_44770);
var state_44810__$1 = state_44810;
var statearr_44857_44912 = state_44810__$1;
(statearr_44857_44912[(2)] = inst_44777);

(statearr_44857_44912[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44811 === (16))){
var state_44810__$1 = state_44810;
var statearr_44858_44913 = state_44810__$1;
(statearr_44858_44913[(2)] = true);

(statearr_44858_44913[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44811 === (38))){
var inst_44800 = (state_44810[(2)]);
var state_44810__$1 = state_44810;
var statearr_44859_44914 = state_44810__$1;
(statearr_44859_44914[(2)] = inst_44800);

(statearr_44859_44914[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44811 === (30))){
var inst_44762 = (state_44810[(13)]);
var inst_44761 = (state_44810[(9)]);
var inst_44770 = (state_44810[(10)]);
var inst_44787 = cljs.core.empty_QMARK_.call(null,inst_44761);
var inst_44788 = inst_44762.call(null,inst_44770);
var inst_44789 = cljs.core.not.call(null,inst_44788);
var inst_44790 = (inst_44787) && (inst_44789);
var state_44810__$1 = state_44810;
var statearr_44860_44915 = state_44810__$1;
(statearr_44860_44915[(2)] = inst_44790);

(statearr_44860_44915[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44811 === (10))){
var inst_44712 = (state_44810[(8)]);
var inst_44733 = (state_44810[(2)]);
var inst_44734 = cljs.core.get.call(null,inst_44733,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_44735 = cljs.core.get.call(null,inst_44733,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_44736 = cljs.core.get.call(null,inst_44733,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_44737 = inst_44712;
var state_44810__$1 = (function (){var statearr_44861 = state_44810;
(statearr_44861[(7)] = inst_44737);

(statearr_44861[(16)] = inst_44735);

(statearr_44861[(17)] = inst_44736);

(statearr_44861[(18)] = inst_44734);

return statearr_44861;
})();
var statearr_44862_44916 = state_44810__$1;
(statearr_44862_44916[(2)] = null);

(statearr_44862_44916[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44811 === (18))){
var inst_44752 = (state_44810[(2)]);
var state_44810__$1 = state_44810;
var statearr_44863_44917 = state_44810__$1;
(statearr_44863_44917[(2)] = inst_44752);

(statearr_44863_44917[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44811 === (37))){
var state_44810__$1 = state_44810;
var statearr_44864_44918 = state_44810__$1;
(statearr_44864_44918[(2)] = null);

(statearr_44864_44918[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44811 === (8))){
var inst_44712 = (state_44810[(8)]);
var inst_44730 = cljs.core.apply.call(null,cljs.core.hash_map,inst_44712);
var state_44810__$1 = state_44810;
var statearr_44865_44919 = state_44810__$1;
(statearr_44865_44919[(2)] = inst_44730);

(statearr_44865_44919[(1)] = (10));


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
});})(c__43136__auto___44873,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__43115__auto__,c__43136__auto___44873,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__43116__auto__ = null;
var cljs$core$async$mix_$_state_machine__43116__auto____0 = (function (){
var statearr_44869 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44869[(0)] = cljs$core$async$mix_$_state_machine__43116__auto__);

(statearr_44869[(1)] = (1));

return statearr_44869;
});
var cljs$core$async$mix_$_state_machine__43116__auto____1 = (function (state_44810){
while(true){
var ret_value__43117__auto__ = (function (){try{while(true){
var result__43118__auto__ = switch__43115__auto__.call(null,state_44810);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43118__auto__;
}
break;
}
}catch (e44870){if((e44870 instanceof Object)){
var ex__43119__auto__ = e44870;
var statearr_44871_44920 = state_44810;
(statearr_44871_44920[(5)] = ex__43119__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44810);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44870;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44921 = state_44810;
state_44810 = G__44921;
continue;
} else {
return ret_value__43117__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__43116__auto__ = function(state_44810){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__43116__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__43116__auto____1.call(this,state_44810);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__43116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__43116__auto____0;
cljs$core$async$mix_$_state_machine__43116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__43116__auto____1;
return cljs$core$async$mix_$_state_machine__43116__auto__;
})()
;})(switch__43115__auto__,c__43136__auto___44873,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__43138__auto__ = (function (){var statearr_44872 = f__43137__auto__.call(null);
(statearr_44872[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43136__auto___44873);

return statearr_44872;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43138__auto__);
});})(c__43136__auto___44873,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__38899__auto__ = (((p == null))?null:p);
var m__38900__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__38899__auto__)]);
if(!((m__38900__auto__ == null))){
return m__38900__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__38900__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__38900__auto____$1 == null))){
return m__38900__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__38899__auto__ = (((p == null))?null:p);
var m__38900__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__38899__auto__)]);
if(!((m__38900__auto__ == null))){
return m__38900__auto__.call(null,p,v,ch);
} else {
var m__38900__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__38900__auto____$1 == null))){
return m__38900__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args44922 = [];
var len__39344__auto___44925 = arguments.length;
var i__39345__auto___44926 = (0);
while(true){
if((i__39345__auto___44926 < len__39344__auto___44925)){
args44922.push((arguments[i__39345__auto___44926]));

var G__44927 = (i__39345__auto___44926 + (1));
i__39345__auto___44926 = G__44927;
continue;
} else {
}
break;
}

var G__44924 = args44922.length;
switch (G__44924) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44922.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__38899__auto__ = (((p == null))?null:p);
var m__38900__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__38899__auto__)]);
if(!((m__38900__auto__ == null))){
return m__38900__auto__.call(null,p);
} else {
var m__38900__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__38900__auto____$1 == null))){
return m__38900__auto____$1.call(null,p);
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
var x__38899__auto__ = (((p == null))?null:p);
var m__38900__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__38899__auto__)]);
if(!((m__38900__auto__ == null))){
return m__38900__auto__.call(null,p,v);
} else {
var m__38900__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__38900__auto____$1 == null))){
return m__38900__auto____$1.call(null,p,v);
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
var args44930 = [];
var len__39344__auto___45055 = arguments.length;
var i__39345__auto___45056 = (0);
while(true){
if((i__39345__auto___45056 < len__39344__auto___45055)){
args44930.push((arguments[i__39345__auto___45056]));

var G__45057 = (i__39345__auto___45056 + (1));
i__39345__auto___45056 = G__45057;
continue;
} else {
}
break;
}

var G__44932 = args44930.length;
switch (G__44932) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44930.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__38236__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__38236__auto__)){
return or__38236__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__38236__auto__,mults){
return (function (p1__44929_SHARP_){
if(cljs.core.truth_(p1__44929_SHARP_.call(null,topic))){
return p1__44929_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__44929_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__38236__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async44933 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44933 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta44934){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta44934 = meta44934;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async44933.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_44935,meta44934__$1){
var self__ = this;
var _44935__$1 = this;
return (new cljs.core.async.t_cljs$core$async44933(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta44934__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async44933.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_44935){
var self__ = this;
var _44935__$1 = this;
return self__.meta44934;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async44933.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44933.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async44933.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44933.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async44933.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async44933.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async44933.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async44933.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta44934","meta44934",968588611,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async44933.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44933.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44933";

cljs.core.async.t_cljs$core$async44933.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__38842__auto__,writer__38843__auto__,opt__38844__auto__){
return cljs.core._write.call(null,writer__38843__auto__,"cljs.core.async/t_cljs$core$async44933");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async44933 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async44933(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta44934){
return (new cljs.core.async.t_cljs$core$async44933(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta44934));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async44933(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__43136__auto___45059 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43136__auto___45059,mults,ensure_mult,p){
return (function (){
var f__43137__auto__ = (function (){var switch__43115__auto__ = ((function (c__43136__auto___45059,mults,ensure_mult,p){
return (function (state_45007){
var state_val_45008 = (state_45007[(1)]);
if((state_val_45008 === (7))){
var inst_45003 = (state_45007[(2)]);
var state_45007__$1 = state_45007;
var statearr_45009_45060 = state_45007__$1;
(statearr_45009_45060[(2)] = inst_45003);

(statearr_45009_45060[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45008 === (20))){
var state_45007__$1 = state_45007;
var statearr_45010_45061 = state_45007__$1;
(statearr_45010_45061[(2)] = null);

(statearr_45010_45061[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45008 === (1))){
var state_45007__$1 = state_45007;
var statearr_45011_45062 = state_45007__$1;
(statearr_45011_45062[(2)] = null);

(statearr_45011_45062[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45008 === (24))){
var inst_44986 = (state_45007[(7)]);
var inst_44995 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_44986);
var state_45007__$1 = state_45007;
var statearr_45012_45063 = state_45007__$1;
(statearr_45012_45063[(2)] = inst_44995);

(statearr_45012_45063[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45008 === (4))){
var inst_44938 = (state_45007[(8)]);
var inst_44938__$1 = (state_45007[(2)]);
var inst_44939 = (inst_44938__$1 == null);
var state_45007__$1 = (function (){var statearr_45013 = state_45007;
(statearr_45013[(8)] = inst_44938__$1);

return statearr_45013;
})();
if(cljs.core.truth_(inst_44939)){
var statearr_45014_45064 = state_45007__$1;
(statearr_45014_45064[(1)] = (5));

} else {
var statearr_45015_45065 = state_45007__$1;
(statearr_45015_45065[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45008 === (15))){
var inst_44980 = (state_45007[(2)]);
var state_45007__$1 = state_45007;
var statearr_45016_45066 = state_45007__$1;
(statearr_45016_45066[(2)] = inst_44980);

(statearr_45016_45066[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45008 === (21))){
var inst_45000 = (state_45007[(2)]);
var state_45007__$1 = (function (){var statearr_45017 = state_45007;
(statearr_45017[(9)] = inst_45000);

return statearr_45017;
})();
var statearr_45018_45067 = state_45007__$1;
(statearr_45018_45067[(2)] = null);

(statearr_45018_45067[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45008 === (13))){
var inst_44962 = (state_45007[(10)]);
var inst_44964 = cljs.core.chunked_seq_QMARK_.call(null,inst_44962);
var state_45007__$1 = state_45007;
if(inst_44964){
var statearr_45019_45068 = state_45007__$1;
(statearr_45019_45068[(1)] = (16));

} else {
var statearr_45020_45069 = state_45007__$1;
(statearr_45020_45069[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45008 === (22))){
var inst_44992 = (state_45007[(2)]);
var state_45007__$1 = state_45007;
if(cljs.core.truth_(inst_44992)){
var statearr_45021_45070 = state_45007__$1;
(statearr_45021_45070[(1)] = (23));

} else {
var statearr_45022_45071 = state_45007__$1;
(statearr_45022_45071[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45008 === (6))){
var inst_44938 = (state_45007[(8)]);
var inst_44988 = (state_45007[(11)]);
var inst_44986 = (state_45007[(7)]);
var inst_44986__$1 = topic_fn.call(null,inst_44938);
var inst_44987 = cljs.core.deref.call(null,mults);
var inst_44988__$1 = cljs.core.get.call(null,inst_44987,inst_44986__$1);
var state_45007__$1 = (function (){var statearr_45023 = state_45007;
(statearr_45023[(11)] = inst_44988__$1);

(statearr_45023[(7)] = inst_44986__$1);

return statearr_45023;
})();
if(cljs.core.truth_(inst_44988__$1)){
var statearr_45024_45072 = state_45007__$1;
(statearr_45024_45072[(1)] = (19));

} else {
var statearr_45025_45073 = state_45007__$1;
(statearr_45025_45073[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45008 === (25))){
var inst_44997 = (state_45007[(2)]);
var state_45007__$1 = state_45007;
var statearr_45026_45074 = state_45007__$1;
(statearr_45026_45074[(2)] = inst_44997);

(statearr_45026_45074[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45008 === (17))){
var inst_44962 = (state_45007[(10)]);
var inst_44971 = cljs.core.first.call(null,inst_44962);
var inst_44972 = cljs.core.async.muxch_STAR_.call(null,inst_44971);
var inst_44973 = cljs.core.async.close_BANG_.call(null,inst_44972);
var inst_44974 = cljs.core.next.call(null,inst_44962);
var inst_44948 = inst_44974;
var inst_44949 = null;
var inst_44950 = (0);
var inst_44951 = (0);
var state_45007__$1 = (function (){var statearr_45027 = state_45007;
(statearr_45027[(12)] = inst_44949);

(statearr_45027[(13)] = inst_44950);

(statearr_45027[(14)] = inst_44973);

(statearr_45027[(15)] = inst_44948);

(statearr_45027[(16)] = inst_44951);

return statearr_45027;
})();
var statearr_45028_45075 = state_45007__$1;
(statearr_45028_45075[(2)] = null);

(statearr_45028_45075[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45008 === (3))){
var inst_45005 = (state_45007[(2)]);
var state_45007__$1 = state_45007;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45007__$1,inst_45005);
} else {
if((state_val_45008 === (12))){
var inst_44982 = (state_45007[(2)]);
var state_45007__$1 = state_45007;
var statearr_45029_45076 = state_45007__$1;
(statearr_45029_45076[(2)] = inst_44982);

(statearr_45029_45076[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45008 === (2))){
var state_45007__$1 = state_45007;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45007__$1,(4),ch);
} else {
if((state_val_45008 === (23))){
var state_45007__$1 = state_45007;
var statearr_45030_45077 = state_45007__$1;
(statearr_45030_45077[(2)] = null);

(statearr_45030_45077[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45008 === (19))){
var inst_44938 = (state_45007[(8)]);
var inst_44988 = (state_45007[(11)]);
var inst_44990 = cljs.core.async.muxch_STAR_.call(null,inst_44988);
var state_45007__$1 = state_45007;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45007__$1,(22),inst_44990,inst_44938);
} else {
if((state_val_45008 === (11))){
var inst_44962 = (state_45007[(10)]);
var inst_44948 = (state_45007[(15)]);
var inst_44962__$1 = cljs.core.seq.call(null,inst_44948);
var state_45007__$1 = (function (){var statearr_45031 = state_45007;
(statearr_45031[(10)] = inst_44962__$1);

return statearr_45031;
})();
if(inst_44962__$1){
var statearr_45032_45078 = state_45007__$1;
(statearr_45032_45078[(1)] = (13));

} else {
var statearr_45033_45079 = state_45007__$1;
(statearr_45033_45079[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45008 === (9))){
var inst_44984 = (state_45007[(2)]);
var state_45007__$1 = state_45007;
var statearr_45034_45080 = state_45007__$1;
(statearr_45034_45080[(2)] = inst_44984);

(statearr_45034_45080[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45008 === (5))){
var inst_44945 = cljs.core.deref.call(null,mults);
var inst_44946 = cljs.core.vals.call(null,inst_44945);
var inst_44947 = cljs.core.seq.call(null,inst_44946);
var inst_44948 = inst_44947;
var inst_44949 = null;
var inst_44950 = (0);
var inst_44951 = (0);
var state_45007__$1 = (function (){var statearr_45035 = state_45007;
(statearr_45035[(12)] = inst_44949);

(statearr_45035[(13)] = inst_44950);

(statearr_45035[(15)] = inst_44948);

(statearr_45035[(16)] = inst_44951);

return statearr_45035;
})();
var statearr_45036_45081 = state_45007__$1;
(statearr_45036_45081[(2)] = null);

(statearr_45036_45081[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45008 === (14))){
var state_45007__$1 = state_45007;
var statearr_45040_45082 = state_45007__$1;
(statearr_45040_45082[(2)] = null);

(statearr_45040_45082[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45008 === (16))){
var inst_44962 = (state_45007[(10)]);
var inst_44966 = cljs.core.chunk_first.call(null,inst_44962);
var inst_44967 = cljs.core.chunk_rest.call(null,inst_44962);
var inst_44968 = cljs.core.count.call(null,inst_44966);
var inst_44948 = inst_44967;
var inst_44949 = inst_44966;
var inst_44950 = inst_44968;
var inst_44951 = (0);
var state_45007__$1 = (function (){var statearr_45041 = state_45007;
(statearr_45041[(12)] = inst_44949);

(statearr_45041[(13)] = inst_44950);

(statearr_45041[(15)] = inst_44948);

(statearr_45041[(16)] = inst_44951);

return statearr_45041;
})();
var statearr_45042_45083 = state_45007__$1;
(statearr_45042_45083[(2)] = null);

(statearr_45042_45083[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45008 === (10))){
var inst_44949 = (state_45007[(12)]);
var inst_44950 = (state_45007[(13)]);
var inst_44948 = (state_45007[(15)]);
var inst_44951 = (state_45007[(16)]);
var inst_44956 = cljs.core._nth.call(null,inst_44949,inst_44951);
var inst_44957 = cljs.core.async.muxch_STAR_.call(null,inst_44956);
var inst_44958 = cljs.core.async.close_BANG_.call(null,inst_44957);
var inst_44959 = (inst_44951 + (1));
var tmp45037 = inst_44949;
var tmp45038 = inst_44950;
var tmp45039 = inst_44948;
var inst_44948__$1 = tmp45039;
var inst_44949__$1 = tmp45037;
var inst_44950__$1 = tmp45038;
var inst_44951__$1 = inst_44959;
var state_45007__$1 = (function (){var statearr_45043 = state_45007;
(statearr_45043[(17)] = inst_44958);

(statearr_45043[(12)] = inst_44949__$1);

(statearr_45043[(13)] = inst_44950__$1);

(statearr_45043[(15)] = inst_44948__$1);

(statearr_45043[(16)] = inst_44951__$1);

return statearr_45043;
})();
var statearr_45044_45084 = state_45007__$1;
(statearr_45044_45084[(2)] = null);

(statearr_45044_45084[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45008 === (18))){
var inst_44977 = (state_45007[(2)]);
var state_45007__$1 = state_45007;
var statearr_45045_45085 = state_45007__$1;
(statearr_45045_45085[(2)] = inst_44977);

(statearr_45045_45085[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45008 === (8))){
var inst_44950 = (state_45007[(13)]);
var inst_44951 = (state_45007[(16)]);
var inst_44953 = (inst_44951 < inst_44950);
var inst_44954 = inst_44953;
var state_45007__$1 = state_45007;
if(cljs.core.truth_(inst_44954)){
var statearr_45046_45086 = state_45007__$1;
(statearr_45046_45086[(1)] = (10));

} else {
var statearr_45047_45087 = state_45007__$1;
(statearr_45047_45087[(1)] = (11));

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
});})(c__43136__auto___45059,mults,ensure_mult,p))
;
return ((function (switch__43115__auto__,c__43136__auto___45059,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__43116__auto__ = null;
var cljs$core$async$state_machine__43116__auto____0 = (function (){
var statearr_45051 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45051[(0)] = cljs$core$async$state_machine__43116__auto__);

(statearr_45051[(1)] = (1));

return statearr_45051;
});
var cljs$core$async$state_machine__43116__auto____1 = (function (state_45007){
while(true){
var ret_value__43117__auto__ = (function (){try{while(true){
var result__43118__auto__ = switch__43115__auto__.call(null,state_45007);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43118__auto__;
}
break;
}
}catch (e45052){if((e45052 instanceof Object)){
var ex__43119__auto__ = e45052;
var statearr_45053_45088 = state_45007;
(statearr_45053_45088[(5)] = ex__43119__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45007);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45052;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45089 = state_45007;
state_45007 = G__45089;
continue;
} else {
return ret_value__43117__auto__;
}
break;
}
});
cljs$core$async$state_machine__43116__auto__ = function(state_45007){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43116__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43116__auto____1.call(this,state_45007);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43116__auto____0;
cljs$core$async$state_machine__43116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43116__auto____1;
return cljs$core$async$state_machine__43116__auto__;
})()
;})(switch__43115__auto__,c__43136__auto___45059,mults,ensure_mult,p))
})();
var state__43138__auto__ = (function (){var statearr_45054 = f__43137__auto__.call(null);
(statearr_45054[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43136__auto___45059);

return statearr_45054;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43138__auto__);
});})(c__43136__auto___45059,mults,ensure_mult,p))
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
var args45090 = [];
var len__39344__auto___45093 = arguments.length;
var i__39345__auto___45094 = (0);
while(true){
if((i__39345__auto___45094 < len__39344__auto___45093)){
args45090.push((arguments[i__39345__auto___45094]));

var G__45095 = (i__39345__auto___45094 + (1));
i__39345__auto___45094 = G__45095;
continue;
} else {
}
break;
}

var G__45092 = args45090.length;
switch (G__45092) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45090.length)].join('')));

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
var args45097 = [];
var len__39344__auto___45100 = arguments.length;
var i__39345__auto___45101 = (0);
while(true){
if((i__39345__auto___45101 < len__39344__auto___45100)){
args45097.push((arguments[i__39345__auto___45101]));

var G__45102 = (i__39345__auto___45101 + (1));
i__39345__auto___45101 = G__45102;
continue;
} else {
}
break;
}

var G__45099 = args45097.length;
switch (G__45099) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45097.length)].join('')));

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
var args45104 = [];
var len__39344__auto___45175 = arguments.length;
var i__39345__auto___45176 = (0);
while(true){
if((i__39345__auto___45176 < len__39344__auto___45175)){
args45104.push((arguments[i__39345__auto___45176]));

var G__45177 = (i__39345__auto___45176 + (1));
i__39345__auto___45176 = G__45177;
continue;
} else {
}
break;
}

var G__45106 = args45104.length;
switch (G__45106) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45104.length)].join('')));

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
var c__43136__auto___45179 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43136__auto___45179,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__43137__auto__ = (function (){var switch__43115__auto__ = ((function (c__43136__auto___45179,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_45145){
var state_val_45146 = (state_45145[(1)]);
if((state_val_45146 === (7))){
var state_45145__$1 = state_45145;
var statearr_45147_45180 = state_45145__$1;
(statearr_45147_45180[(2)] = null);

(statearr_45147_45180[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45146 === (1))){
var state_45145__$1 = state_45145;
var statearr_45148_45181 = state_45145__$1;
(statearr_45148_45181[(2)] = null);

(statearr_45148_45181[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45146 === (4))){
var inst_45109 = (state_45145[(7)]);
var inst_45111 = (inst_45109 < cnt);
var state_45145__$1 = state_45145;
if(cljs.core.truth_(inst_45111)){
var statearr_45149_45182 = state_45145__$1;
(statearr_45149_45182[(1)] = (6));

} else {
var statearr_45150_45183 = state_45145__$1;
(statearr_45150_45183[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45146 === (15))){
var inst_45141 = (state_45145[(2)]);
var state_45145__$1 = state_45145;
var statearr_45151_45184 = state_45145__$1;
(statearr_45151_45184[(2)] = inst_45141);

(statearr_45151_45184[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45146 === (13))){
var inst_45134 = cljs.core.async.close_BANG_.call(null,out);
var state_45145__$1 = state_45145;
var statearr_45152_45185 = state_45145__$1;
(statearr_45152_45185[(2)] = inst_45134);

(statearr_45152_45185[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45146 === (6))){
var state_45145__$1 = state_45145;
var statearr_45153_45186 = state_45145__$1;
(statearr_45153_45186[(2)] = null);

(statearr_45153_45186[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45146 === (3))){
var inst_45143 = (state_45145[(2)]);
var state_45145__$1 = state_45145;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45145__$1,inst_45143);
} else {
if((state_val_45146 === (12))){
var inst_45131 = (state_45145[(8)]);
var inst_45131__$1 = (state_45145[(2)]);
var inst_45132 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_45131__$1);
var state_45145__$1 = (function (){var statearr_45154 = state_45145;
(statearr_45154[(8)] = inst_45131__$1);

return statearr_45154;
})();
if(cljs.core.truth_(inst_45132)){
var statearr_45155_45187 = state_45145__$1;
(statearr_45155_45187[(1)] = (13));

} else {
var statearr_45156_45188 = state_45145__$1;
(statearr_45156_45188[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45146 === (2))){
var inst_45108 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_45109 = (0);
var state_45145__$1 = (function (){var statearr_45157 = state_45145;
(statearr_45157[(9)] = inst_45108);

(statearr_45157[(7)] = inst_45109);

return statearr_45157;
})();
var statearr_45158_45189 = state_45145__$1;
(statearr_45158_45189[(2)] = null);

(statearr_45158_45189[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45146 === (11))){
var inst_45109 = (state_45145[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_45145,(10),Object,null,(9));
var inst_45118 = chs__$1.call(null,inst_45109);
var inst_45119 = done.call(null,inst_45109);
var inst_45120 = cljs.core.async.take_BANG_.call(null,inst_45118,inst_45119);
var state_45145__$1 = state_45145;
var statearr_45159_45190 = state_45145__$1;
(statearr_45159_45190[(2)] = inst_45120);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45145__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45146 === (9))){
var inst_45109 = (state_45145[(7)]);
var inst_45122 = (state_45145[(2)]);
var inst_45123 = (inst_45109 + (1));
var inst_45109__$1 = inst_45123;
var state_45145__$1 = (function (){var statearr_45160 = state_45145;
(statearr_45160[(10)] = inst_45122);

(statearr_45160[(7)] = inst_45109__$1);

return statearr_45160;
})();
var statearr_45161_45191 = state_45145__$1;
(statearr_45161_45191[(2)] = null);

(statearr_45161_45191[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45146 === (5))){
var inst_45129 = (state_45145[(2)]);
var state_45145__$1 = (function (){var statearr_45162 = state_45145;
(statearr_45162[(11)] = inst_45129);

return statearr_45162;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45145__$1,(12),dchan);
} else {
if((state_val_45146 === (14))){
var inst_45131 = (state_45145[(8)]);
var inst_45136 = cljs.core.apply.call(null,f,inst_45131);
var state_45145__$1 = state_45145;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45145__$1,(16),out,inst_45136);
} else {
if((state_val_45146 === (16))){
var inst_45138 = (state_45145[(2)]);
var state_45145__$1 = (function (){var statearr_45163 = state_45145;
(statearr_45163[(12)] = inst_45138);

return statearr_45163;
})();
var statearr_45164_45192 = state_45145__$1;
(statearr_45164_45192[(2)] = null);

(statearr_45164_45192[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45146 === (10))){
var inst_45113 = (state_45145[(2)]);
var inst_45114 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_45145__$1 = (function (){var statearr_45165 = state_45145;
(statearr_45165[(13)] = inst_45113);

return statearr_45165;
})();
var statearr_45166_45193 = state_45145__$1;
(statearr_45166_45193[(2)] = inst_45114);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45145__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45146 === (8))){
var inst_45127 = (state_45145[(2)]);
var state_45145__$1 = state_45145;
var statearr_45167_45194 = state_45145__$1;
(statearr_45167_45194[(2)] = inst_45127);

(statearr_45167_45194[(1)] = (5));


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
});})(c__43136__auto___45179,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__43115__auto__,c__43136__auto___45179,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__43116__auto__ = null;
var cljs$core$async$state_machine__43116__auto____0 = (function (){
var statearr_45171 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45171[(0)] = cljs$core$async$state_machine__43116__auto__);

(statearr_45171[(1)] = (1));

return statearr_45171;
});
var cljs$core$async$state_machine__43116__auto____1 = (function (state_45145){
while(true){
var ret_value__43117__auto__ = (function (){try{while(true){
var result__43118__auto__ = switch__43115__auto__.call(null,state_45145);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43118__auto__;
}
break;
}
}catch (e45172){if((e45172 instanceof Object)){
var ex__43119__auto__ = e45172;
var statearr_45173_45195 = state_45145;
(statearr_45173_45195[(5)] = ex__43119__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45145);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45172;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45196 = state_45145;
state_45145 = G__45196;
continue;
} else {
return ret_value__43117__auto__;
}
break;
}
});
cljs$core$async$state_machine__43116__auto__ = function(state_45145){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43116__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43116__auto____1.call(this,state_45145);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43116__auto____0;
cljs$core$async$state_machine__43116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43116__auto____1;
return cljs$core$async$state_machine__43116__auto__;
})()
;})(switch__43115__auto__,c__43136__auto___45179,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__43138__auto__ = (function (){var statearr_45174 = f__43137__auto__.call(null);
(statearr_45174[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43136__auto___45179);

return statearr_45174;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43138__auto__);
});})(c__43136__auto___45179,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args45198 = [];
var len__39344__auto___45256 = arguments.length;
var i__39345__auto___45257 = (0);
while(true){
if((i__39345__auto___45257 < len__39344__auto___45256)){
args45198.push((arguments[i__39345__auto___45257]));

var G__45258 = (i__39345__auto___45257 + (1));
i__39345__auto___45257 = G__45258;
continue;
} else {
}
break;
}

var G__45200 = args45198.length;
switch (G__45200) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45198.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__43136__auto___45260 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43136__auto___45260,out){
return (function (){
var f__43137__auto__ = (function (){var switch__43115__auto__ = ((function (c__43136__auto___45260,out){
return (function (state_45232){
var state_val_45233 = (state_45232[(1)]);
if((state_val_45233 === (7))){
var inst_45212 = (state_45232[(7)]);
var inst_45211 = (state_45232[(8)]);
var inst_45211__$1 = (state_45232[(2)]);
var inst_45212__$1 = cljs.core.nth.call(null,inst_45211__$1,(0),null);
var inst_45213 = cljs.core.nth.call(null,inst_45211__$1,(1),null);
var inst_45214 = (inst_45212__$1 == null);
var state_45232__$1 = (function (){var statearr_45234 = state_45232;
(statearr_45234[(7)] = inst_45212__$1);

(statearr_45234[(9)] = inst_45213);

(statearr_45234[(8)] = inst_45211__$1);

return statearr_45234;
})();
if(cljs.core.truth_(inst_45214)){
var statearr_45235_45261 = state_45232__$1;
(statearr_45235_45261[(1)] = (8));

} else {
var statearr_45236_45262 = state_45232__$1;
(statearr_45236_45262[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45233 === (1))){
var inst_45201 = cljs.core.vec.call(null,chs);
var inst_45202 = inst_45201;
var state_45232__$1 = (function (){var statearr_45237 = state_45232;
(statearr_45237[(10)] = inst_45202);

return statearr_45237;
})();
var statearr_45238_45263 = state_45232__$1;
(statearr_45238_45263[(2)] = null);

(statearr_45238_45263[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45233 === (4))){
var inst_45202 = (state_45232[(10)]);
var state_45232__$1 = state_45232;
return cljs.core.async.ioc_alts_BANG_.call(null,state_45232__$1,(7),inst_45202);
} else {
if((state_val_45233 === (6))){
var inst_45228 = (state_45232[(2)]);
var state_45232__$1 = state_45232;
var statearr_45239_45264 = state_45232__$1;
(statearr_45239_45264[(2)] = inst_45228);

(statearr_45239_45264[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45233 === (3))){
var inst_45230 = (state_45232[(2)]);
var state_45232__$1 = state_45232;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45232__$1,inst_45230);
} else {
if((state_val_45233 === (2))){
var inst_45202 = (state_45232[(10)]);
var inst_45204 = cljs.core.count.call(null,inst_45202);
var inst_45205 = (inst_45204 > (0));
var state_45232__$1 = state_45232;
if(cljs.core.truth_(inst_45205)){
var statearr_45241_45265 = state_45232__$1;
(statearr_45241_45265[(1)] = (4));

} else {
var statearr_45242_45266 = state_45232__$1;
(statearr_45242_45266[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45233 === (11))){
var inst_45202 = (state_45232[(10)]);
var inst_45221 = (state_45232[(2)]);
var tmp45240 = inst_45202;
var inst_45202__$1 = tmp45240;
var state_45232__$1 = (function (){var statearr_45243 = state_45232;
(statearr_45243[(11)] = inst_45221);

(statearr_45243[(10)] = inst_45202__$1);

return statearr_45243;
})();
var statearr_45244_45267 = state_45232__$1;
(statearr_45244_45267[(2)] = null);

(statearr_45244_45267[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45233 === (9))){
var inst_45212 = (state_45232[(7)]);
var state_45232__$1 = state_45232;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45232__$1,(11),out,inst_45212);
} else {
if((state_val_45233 === (5))){
var inst_45226 = cljs.core.async.close_BANG_.call(null,out);
var state_45232__$1 = state_45232;
var statearr_45245_45268 = state_45232__$1;
(statearr_45245_45268[(2)] = inst_45226);

(statearr_45245_45268[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45233 === (10))){
var inst_45224 = (state_45232[(2)]);
var state_45232__$1 = state_45232;
var statearr_45246_45269 = state_45232__$1;
(statearr_45246_45269[(2)] = inst_45224);

(statearr_45246_45269[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45233 === (8))){
var inst_45212 = (state_45232[(7)]);
var inst_45213 = (state_45232[(9)]);
var inst_45202 = (state_45232[(10)]);
var inst_45211 = (state_45232[(8)]);
var inst_45216 = (function (){var cs = inst_45202;
var vec__45207 = inst_45211;
var v = inst_45212;
var c = inst_45213;
return ((function (cs,vec__45207,v,c,inst_45212,inst_45213,inst_45202,inst_45211,state_val_45233,c__43136__auto___45260,out){
return (function (p1__45197_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__45197_SHARP_);
});
;})(cs,vec__45207,v,c,inst_45212,inst_45213,inst_45202,inst_45211,state_val_45233,c__43136__auto___45260,out))
})();
var inst_45217 = cljs.core.filterv.call(null,inst_45216,inst_45202);
var inst_45202__$1 = inst_45217;
var state_45232__$1 = (function (){var statearr_45247 = state_45232;
(statearr_45247[(10)] = inst_45202__$1);

return statearr_45247;
})();
var statearr_45248_45270 = state_45232__$1;
(statearr_45248_45270[(2)] = null);

(statearr_45248_45270[(1)] = (2));


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
});})(c__43136__auto___45260,out))
;
return ((function (switch__43115__auto__,c__43136__auto___45260,out){
return (function() {
var cljs$core$async$state_machine__43116__auto__ = null;
var cljs$core$async$state_machine__43116__auto____0 = (function (){
var statearr_45252 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45252[(0)] = cljs$core$async$state_machine__43116__auto__);

(statearr_45252[(1)] = (1));

return statearr_45252;
});
var cljs$core$async$state_machine__43116__auto____1 = (function (state_45232){
while(true){
var ret_value__43117__auto__ = (function (){try{while(true){
var result__43118__auto__ = switch__43115__auto__.call(null,state_45232);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43118__auto__;
}
break;
}
}catch (e45253){if((e45253 instanceof Object)){
var ex__43119__auto__ = e45253;
var statearr_45254_45271 = state_45232;
(statearr_45254_45271[(5)] = ex__43119__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45232);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45253;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45272 = state_45232;
state_45232 = G__45272;
continue;
} else {
return ret_value__43117__auto__;
}
break;
}
});
cljs$core$async$state_machine__43116__auto__ = function(state_45232){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43116__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43116__auto____1.call(this,state_45232);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43116__auto____0;
cljs$core$async$state_machine__43116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43116__auto____1;
return cljs$core$async$state_machine__43116__auto__;
})()
;})(switch__43115__auto__,c__43136__auto___45260,out))
})();
var state__43138__auto__ = (function (){var statearr_45255 = f__43137__auto__.call(null);
(statearr_45255[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43136__auto___45260);

return statearr_45255;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43138__auto__);
});})(c__43136__auto___45260,out))
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
var args45273 = [];
var len__39344__auto___45322 = arguments.length;
var i__39345__auto___45323 = (0);
while(true){
if((i__39345__auto___45323 < len__39344__auto___45322)){
args45273.push((arguments[i__39345__auto___45323]));

var G__45324 = (i__39345__auto___45323 + (1));
i__39345__auto___45323 = G__45324;
continue;
} else {
}
break;
}

var G__45275 = args45273.length;
switch (G__45275) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45273.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__43136__auto___45326 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43136__auto___45326,out){
return (function (){
var f__43137__auto__ = (function (){var switch__43115__auto__ = ((function (c__43136__auto___45326,out){
return (function (state_45299){
var state_val_45300 = (state_45299[(1)]);
if((state_val_45300 === (7))){
var inst_45281 = (state_45299[(7)]);
var inst_45281__$1 = (state_45299[(2)]);
var inst_45282 = (inst_45281__$1 == null);
var inst_45283 = cljs.core.not.call(null,inst_45282);
var state_45299__$1 = (function (){var statearr_45301 = state_45299;
(statearr_45301[(7)] = inst_45281__$1);

return statearr_45301;
})();
if(inst_45283){
var statearr_45302_45327 = state_45299__$1;
(statearr_45302_45327[(1)] = (8));

} else {
var statearr_45303_45328 = state_45299__$1;
(statearr_45303_45328[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45300 === (1))){
var inst_45276 = (0);
var state_45299__$1 = (function (){var statearr_45304 = state_45299;
(statearr_45304[(8)] = inst_45276);

return statearr_45304;
})();
var statearr_45305_45329 = state_45299__$1;
(statearr_45305_45329[(2)] = null);

(statearr_45305_45329[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45300 === (4))){
var state_45299__$1 = state_45299;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45299__$1,(7),ch);
} else {
if((state_val_45300 === (6))){
var inst_45294 = (state_45299[(2)]);
var state_45299__$1 = state_45299;
var statearr_45306_45330 = state_45299__$1;
(statearr_45306_45330[(2)] = inst_45294);

(statearr_45306_45330[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45300 === (3))){
var inst_45296 = (state_45299[(2)]);
var inst_45297 = cljs.core.async.close_BANG_.call(null,out);
var state_45299__$1 = (function (){var statearr_45307 = state_45299;
(statearr_45307[(9)] = inst_45296);

return statearr_45307;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45299__$1,inst_45297);
} else {
if((state_val_45300 === (2))){
var inst_45276 = (state_45299[(8)]);
var inst_45278 = (inst_45276 < n);
var state_45299__$1 = state_45299;
if(cljs.core.truth_(inst_45278)){
var statearr_45308_45331 = state_45299__$1;
(statearr_45308_45331[(1)] = (4));

} else {
var statearr_45309_45332 = state_45299__$1;
(statearr_45309_45332[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45300 === (11))){
var inst_45276 = (state_45299[(8)]);
var inst_45286 = (state_45299[(2)]);
var inst_45287 = (inst_45276 + (1));
var inst_45276__$1 = inst_45287;
var state_45299__$1 = (function (){var statearr_45310 = state_45299;
(statearr_45310[(10)] = inst_45286);

(statearr_45310[(8)] = inst_45276__$1);

return statearr_45310;
})();
var statearr_45311_45333 = state_45299__$1;
(statearr_45311_45333[(2)] = null);

(statearr_45311_45333[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45300 === (9))){
var state_45299__$1 = state_45299;
var statearr_45312_45334 = state_45299__$1;
(statearr_45312_45334[(2)] = null);

(statearr_45312_45334[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45300 === (5))){
var state_45299__$1 = state_45299;
var statearr_45313_45335 = state_45299__$1;
(statearr_45313_45335[(2)] = null);

(statearr_45313_45335[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45300 === (10))){
var inst_45291 = (state_45299[(2)]);
var state_45299__$1 = state_45299;
var statearr_45314_45336 = state_45299__$1;
(statearr_45314_45336[(2)] = inst_45291);

(statearr_45314_45336[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45300 === (8))){
var inst_45281 = (state_45299[(7)]);
var state_45299__$1 = state_45299;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45299__$1,(11),out,inst_45281);
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
});})(c__43136__auto___45326,out))
;
return ((function (switch__43115__auto__,c__43136__auto___45326,out){
return (function() {
var cljs$core$async$state_machine__43116__auto__ = null;
var cljs$core$async$state_machine__43116__auto____0 = (function (){
var statearr_45318 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_45318[(0)] = cljs$core$async$state_machine__43116__auto__);

(statearr_45318[(1)] = (1));

return statearr_45318;
});
var cljs$core$async$state_machine__43116__auto____1 = (function (state_45299){
while(true){
var ret_value__43117__auto__ = (function (){try{while(true){
var result__43118__auto__ = switch__43115__auto__.call(null,state_45299);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43118__auto__;
}
break;
}
}catch (e45319){if((e45319 instanceof Object)){
var ex__43119__auto__ = e45319;
var statearr_45320_45337 = state_45299;
(statearr_45320_45337[(5)] = ex__43119__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45299);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45319;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45338 = state_45299;
state_45299 = G__45338;
continue;
} else {
return ret_value__43117__auto__;
}
break;
}
});
cljs$core$async$state_machine__43116__auto__ = function(state_45299){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43116__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43116__auto____1.call(this,state_45299);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43116__auto____0;
cljs$core$async$state_machine__43116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43116__auto____1;
return cljs$core$async$state_machine__43116__auto__;
})()
;})(switch__43115__auto__,c__43136__auto___45326,out))
})();
var state__43138__auto__ = (function (){var statearr_45321 = f__43137__auto__.call(null);
(statearr_45321[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43136__auto___45326);

return statearr_45321;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43138__auto__);
});})(c__43136__auto___45326,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async45346 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45346 = (function (f,ch,meta45347){
this.f = f;
this.ch = ch;
this.meta45347 = meta45347;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async45346.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45348,meta45347__$1){
var self__ = this;
var _45348__$1 = this;
return (new cljs.core.async.t_cljs$core$async45346(self__.f,self__.ch,meta45347__$1));
});

cljs.core.async.t_cljs$core$async45346.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45348){
var self__ = this;
var _45348__$1 = this;
return self__.meta45347;
});

cljs.core.async.t_cljs$core$async45346.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45346.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async45346.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async45346.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45346.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async45349 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45349 = (function (f,ch,meta45347,_,fn1,meta45350){
this.f = f;
this.ch = ch;
this.meta45347 = meta45347;
this._ = _;
this.fn1 = fn1;
this.meta45350 = meta45350;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async45349.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_45351,meta45350__$1){
var self__ = this;
var _45351__$1 = this;
return (new cljs.core.async.t_cljs$core$async45349(self__.f,self__.ch,self__.meta45347,self__._,self__.fn1,meta45350__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async45349.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_45351){
var self__ = this;
var _45351__$1 = this;
return self__.meta45350;
});})(___$1))
;

cljs.core.async.t_cljs$core$async45349.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45349.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async45349.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async45349.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__45339_SHARP_){
return f1.call(null,(((p1__45339_SHARP_ == null))?null:self__.f.call(null,p1__45339_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async45349.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45347","meta45347",-1303606883,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async45346","cljs.core.async/t_cljs$core$async45346",660655235,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta45350","meta45350",-675989570,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async45349.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45349.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45349";

cljs.core.async.t_cljs$core$async45349.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__38842__auto__,writer__38843__auto__,opt__38844__auto__){
return cljs.core._write.call(null,writer__38843__auto__,"cljs.core.async/t_cljs$core$async45349");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async45349 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async45349(f__$1,ch__$1,meta45347__$1,___$2,fn1__$1,meta45350){
return (new cljs.core.async.t_cljs$core$async45349(f__$1,ch__$1,meta45347__$1,___$2,fn1__$1,meta45350));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async45349(self__.f,self__.ch,self__.meta45347,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__38224__auto__ = ret;
if(cljs.core.truth_(and__38224__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__38224__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async45346.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45346.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async45346.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45347","meta45347",-1303606883,null)], null);
});

cljs.core.async.t_cljs$core$async45346.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45346.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45346";

cljs.core.async.t_cljs$core$async45346.cljs$lang$ctorPrWriter = (function (this__38842__auto__,writer__38843__auto__,opt__38844__auto__){
return cljs.core._write.call(null,writer__38843__auto__,"cljs.core.async/t_cljs$core$async45346");
});

cljs.core.async.__GT_t_cljs$core$async45346 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async45346(f__$1,ch__$1,meta45347){
return (new cljs.core.async.t_cljs$core$async45346(f__$1,ch__$1,meta45347));
});

}

return (new cljs.core.async.t_cljs$core$async45346(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async45355 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45355 = (function (f,ch,meta45356){
this.f = f;
this.ch = ch;
this.meta45356 = meta45356;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async45355.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45357,meta45356__$1){
var self__ = this;
var _45357__$1 = this;
return (new cljs.core.async.t_cljs$core$async45355(self__.f,self__.ch,meta45356__$1));
});

cljs.core.async.t_cljs$core$async45355.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45357){
var self__ = this;
var _45357__$1 = this;
return self__.meta45356;
});

cljs.core.async.t_cljs$core$async45355.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45355.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async45355.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45355.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async45355.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45355.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async45355.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45356","meta45356",418294162,null)], null);
});

cljs.core.async.t_cljs$core$async45355.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45355.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45355";

cljs.core.async.t_cljs$core$async45355.cljs$lang$ctorPrWriter = (function (this__38842__auto__,writer__38843__auto__,opt__38844__auto__){
return cljs.core._write.call(null,writer__38843__auto__,"cljs.core.async/t_cljs$core$async45355");
});

cljs.core.async.__GT_t_cljs$core$async45355 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async45355(f__$1,ch__$1,meta45356){
return (new cljs.core.async.t_cljs$core$async45355(f__$1,ch__$1,meta45356));
});

}

return (new cljs.core.async.t_cljs$core$async45355(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async45361 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45361 = (function (p,ch,meta45362){
this.p = p;
this.ch = ch;
this.meta45362 = meta45362;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async45361.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45363,meta45362__$1){
var self__ = this;
var _45363__$1 = this;
return (new cljs.core.async.t_cljs$core$async45361(self__.p,self__.ch,meta45362__$1));
});

cljs.core.async.t_cljs$core$async45361.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45363){
var self__ = this;
var _45363__$1 = this;
return self__.meta45362;
});

cljs.core.async.t_cljs$core$async45361.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45361.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async45361.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async45361.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45361.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async45361.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45361.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async45361.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45362","meta45362",-1183272245,null)], null);
});

cljs.core.async.t_cljs$core$async45361.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45361.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45361";

cljs.core.async.t_cljs$core$async45361.cljs$lang$ctorPrWriter = (function (this__38842__auto__,writer__38843__auto__,opt__38844__auto__){
return cljs.core._write.call(null,writer__38843__auto__,"cljs.core.async/t_cljs$core$async45361");
});

cljs.core.async.__GT_t_cljs$core$async45361 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async45361(p__$1,ch__$1,meta45362){
return (new cljs.core.async.t_cljs$core$async45361(p__$1,ch__$1,meta45362));
});

}

return (new cljs.core.async.t_cljs$core$async45361(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args45364 = [];
var len__39344__auto___45408 = arguments.length;
var i__39345__auto___45409 = (0);
while(true){
if((i__39345__auto___45409 < len__39344__auto___45408)){
args45364.push((arguments[i__39345__auto___45409]));

var G__45410 = (i__39345__auto___45409 + (1));
i__39345__auto___45409 = G__45410;
continue;
} else {
}
break;
}

var G__45366 = args45364.length;
switch (G__45366) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45364.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__43136__auto___45412 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43136__auto___45412,out){
return (function (){
var f__43137__auto__ = (function (){var switch__43115__auto__ = ((function (c__43136__auto___45412,out){
return (function (state_45387){
var state_val_45388 = (state_45387[(1)]);
if((state_val_45388 === (7))){
var inst_45383 = (state_45387[(2)]);
var state_45387__$1 = state_45387;
var statearr_45389_45413 = state_45387__$1;
(statearr_45389_45413[(2)] = inst_45383);

(statearr_45389_45413[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45388 === (1))){
var state_45387__$1 = state_45387;
var statearr_45390_45414 = state_45387__$1;
(statearr_45390_45414[(2)] = null);

(statearr_45390_45414[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45388 === (4))){
var inst_45369 = (state_45387[(7)]);
var inst_45369__$1 = (state_45387[(2)]);
var inst_45370 = (inst_45369__$1 == null);
var state_45387__$1 = (function (){var statearr_45391 = state_45387;
(statearr_45391[(7)] = inst_45369__$1);

return statearr_45391;
})();
if(cljs.core.truth_(inst_45370)){
var statearr_45392_45415 = state_45387__$1;
(statearr_45392_45415[(1)] = (5));

} else {
var statearr_45393_45416 = state_45387__$1;
(statearr_45393_45416[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45388 === (6))){
var inst_45369 = (state_45387[(7)]);
var inst_45374 = p.call(null,inst_45369);
var state_45387__$1 = state_45387;
if(cljs.core.truth_(inst_45374)){
var statearr_45394_45417 = state_45387__$1;
(statearr_45394_45417[(1)] = (8));

} else {
var statearr_45395_45418 = state_45387__$1;
(statearr_45395_45418[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45388 === (3))){
var inst_45385 = (state_45387[(2)]);
var state_45387__$1 = state_45387;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45387__$1,inst_45385);
} else {
if((state_val_45388 === (2))){
var state_45387__$1 = state_45387;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45387__$1,(4),ch);
} else {
if((state_val_45388 === (11))){
var inst_45377 = (state_45387[(2)]);
var state_45387__$1 = state_45387;
var statearr_45396_45419 = state_45387__$1;
(statearr_45396_45419[(2)] = inst_45377);

(statearr_45396_45419[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45388 === (9))){
var state_45387__$1 = state_45387;
var statearr_45397_45420 = state_45387__$1;
(statearr_45397_45420[(2)] = null);

(statearr_45397_45420[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45388 === (5))){
var inst_45372 = cljs.core.async.close_BANG_.call(null,out);
var state_45387__$1 = state_45387;
var statearr_45398_45421 = state_45387__$1;
(statearr_45398_45421[(2)] = inst_45372);

(statearr_45398_45421[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45388 === (10))){
var inst_45380 = (state_45387[(2)]);
var state_45387__$1 = (function (){var statearr_45399 = state_45387;
(statearr_45399[(8)] = inst_45380);

return statearr_45399;
})();
var statearr_45400_45422 = state_45387__$1;
(statearr_45400_45422[(2)] = null);

(statearr_45400_45422[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45388 === (8))){
var inst_45369 = (state_45387[(7)]);
var state_45387__$1 = state_45387;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45387__$1,(11),out,inst_45369);
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
});})(c__43136__auto___45412,out))
;
return ((function (switch__43115__auto__,c__43136__auto___45412,out){
return (function() {
var cljs$core$async$state_machine__43116__auto__ = null;
var cljs$core$async$state_machine__43116__auto____0 = (function (){
var statearr_45404 = [null,null,null,null,null,null,null,null,null];
(statearr_45404[(0)] = cljs$core$async$state_machine__43116__auto__);

(statearr_45404[(1)] = (1));

return statearr_45404;
});
var cljs$core$async$state_machine__43116__auto____1 = (function (state_45387){
while(true){
var ret_value__43117__auto__ = (function (){try{while(true){
var result__43118__auto__ = switch__43115__auto__.call(null,state_45387);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43118__auto__;
}
break;
}
}catch (e45405){if((e45405 instanceof Object)){
var ex__43119__auto__ = e45405;
var statearr_45406_45423 = state_45387;
(statearr_45406_45423[(5)] = ex__43119__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45387);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45405;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45424 = state_45387;
state_45387 = G__45424;
continue;
} else {
return ret_value__43117__auto__;
}
break;
}
});
cljs$core$async$state_machine__43116__auto__ = function(state_45387){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43116__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43116__auto____1.call(this,state_45387);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43116__auto____0;
cljs$core$async$state_machine__43116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43116__auto____1;
return cljs$core$async$state_machine__43116__auto__;
})()
;})(switch__43115__auto__,c__43136__auto___45412,out))
})();
var state__43138__auto__ = (function (){var statearr_45407 = f__43137__auto__.call(null);
(statearr_45407[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43136__auto___45412);

return statearr_45407;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43138__auto__);
});})(c__43136__auto___45412,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args45425 = [];
var len__39344__auto___45428 = arguments.length;
var i__39345__auto___45429 = (0);
while(true){
if((i__39345__auto___45429 < len__39344__auto___45428)){
args45425.push((arguments[i__39345__auto___45429]));

var G__45430 = (i__39345__auto___45429 + (1));
i__39345__auto___45429 = G__45430;
continue;
} else {
}
break;
}

var G__45427 = args45425.length;
switch (G__45427) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45425.length)].join('')));

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
var c__43136__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43136__auto__){
return (function (){
var f__43137__auto__ = (function (){var switch__43115__auto__ = ((function (c__43136__auto__){
return (function (state_45597){
var state_val_45598 = (state_45597[(1)]);
if((state_val_45598 === (7))){
var inst_45593 = (state_45597[(2)]);
var state_45597__$1 = state_45597;
var statearr_45599_45640 = state_45597__$1;
(statearr_45599_45640[(2)] = inst_45593);

(statearr_45599_45640[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45598 === (20))){
var inst_45563 = (state_45597[(7)]);
var inst_45574 = (state_45597[(2)]);
var inst_45575 = cljs.core.next.call(null,inst_45563);
var inst_45549 = inst_45575;
var inst_45550 = null;
var inst_45551 = (0);
var inst_45552 = (0);
var state_45597__$1 = (function (){var statearr_45600 = state_45597;
(statearr_45600[(8)] = inst_45552);

(statearr_45600[(9)] = inst_45549);

(statearr_45600[(10)] = inst_45551);

(statearr_45600[(11)] = inst_45574);

(statearr_45600[(12)] = inst_45550);

return statearr_45600;
})();
var statearr_45601_45641 = state_45597__$1;
(statearr_45601_45641[(2)] = null);

(statearr_45601_45641[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45598 === (1))){
var state_45597__$1 = state_45597;
var statearr_45602_45642 = state_45597__$1;
(statearr_45602_45642[(2)] = null);

(statearr_45602_45642[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45598 === (4))){
var inst_45538 = (state_45597[(13)]);
var inst_45538__$1 = (state_45597[(2)]);
var inst_45539 = (inst_45538__$1 == null);
var state_45597__$1 = (function (){var statearr_45603 = state_45597;
(statearr_45603[(13)] = inst_45538__$1);

return statearr_45603;
})();
if(cljs.core.truth_(inst_45539)){
var statearr_45604_45643 = state_45597__$1;
(statearr_45604_45643[(1)] = (5));

} else {
var statearr_45605_45644 = state_45597__$1;
(statearr_45605_45644[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45598 === (15))){
var state_45597__$1 = state_45597;
var statearr_45609_45645 = state_45597__$1;
(statearr_45609_45645[(2)] = null);

(statearr_45609_45645[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45598 === (21))){
var state_45597__$1 = state_45597;
var statearr_45610_45646 = state_45597__$1;
(statearr_45610_45646[(2)] = null);

(statearr_45610_45646[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45598 === (13))){
var inst_45552 = (state_45597[(8)]);
var inst_45549 = (state_45597[(9)]);
var inst_45551 = (state_45597[(10)]);
var inst_45550 = (state_45597[(12)]);
var inst_45559 = (state_45597[(2)]);
var inst_45560 = (inst_45552 + (1));
var tmp45606 = inst_45549;
var tmp45607 = inst_45551;
var tmp45608 = inst_45550;
var inst_45549__$1 = tmp45606;
var inst_45550__$1 = tmp45608;
var inst_45551__$1 = tmp45607;
var inst_45552__$1 = inst_45560;
var state_45597__$1 = (function (){var statearr_45611 = state_45597;
(statearr_45611[(8)] = inst_45552__$1);

(statearr_45611[(9)] = inst_45549__$1);

(statearr_45611[(10)] = inst_45551__$1);

(statearr_45611[(14)] = inst_45559);

(statearr_45611[(12)] = inst_45550__$1);

return statearr_45611;
})();
var statearr_45612_45647 = state_45597__$1;
(statearr_45612_45647[(2)] = null);

(statearr_45612_45647[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45598 === (22))){
var state_45597__$1 = state_45597;
var statearr_45613_45648 = state_45597__$1;
(statearr_45613_45648[(2)] = null);

(statearr_45613_45648[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45598 === (6))){
var inst_45538 = (state_45597[(13)]);
var inst_45547 = f.call(null,inst_45538);
var inst_45548 = cljs.core.seq.call(null,inst_45547);
var inst_45549 = inst_45548;
var inst_45550 = null;
var inst_45551 = (0);
var inst_45552 = (0);
var state_45597__$1 = (function (){var statearr_45614 = state_45597;
(statearr_45614[(8)] = inst_45552);

(statearr_45614[(9)] = inst_45549);

(statearr_45614[(10)] = inst_45551);

(statearr_45614[(12)] = inst_45550);

return statearr_45614;
})();
var statearr_45615_45649 = state_45597__$1;
(statearr_45615_45649[(2)] = null);

(statearr_45615_45649[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45598 === (17))){
var inst_45563 = (state_45597[(7)]);
var inst_45567 = cljs.core.chunk_first.call(null,inst_45563);
var inst_45568 = cljs.core.chunk_rest.call(null,inst_45563);
var inst_45569 = cljs.core.count.call(null,inst_45567);
var inst_45549 = inst_45568;
var inst_45550 = inst_45567;
var inst_45551 = inst_45569;
var inst_45552 = (0);
var state_45597__$1 = (function (){var statearr_45616 = state_45597;
(statearr_45616[(8)] = inst_45552);

(statearr_45616[(9)] = inst_45549);

(statearr_45616[(10)] = inst_45551);

(statearr_45616[(12)] = inst_45550);

return statearr_45616;
})();
var statearr_45617_45650 = state_45597__$1;
(statearr_45617_45650[(2)] = null);

(statearr_45617_45650[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45598 === (3))){
var inst_45595 = (state_45597[(2)]);
var state_45597__$1 = state_45597;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45597__$1,inst_45595);
} else {
if((state_val_45598 === (12))){
var inst_45583 = (state_45597[(2)]);
var state_45597__$1 = state_45597;
var statearr_45618_45651 = state_45597__$1;
(statearr_45618_45651[(2)] = inst_45583);

(statearr_45618_45651[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45598 === (2))){
var state_45597__$1 = state_45597;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45597__$1,(4),in$);
} else {
if((state_val_45598 === (23))){
var inst_45591 = (state_45597[(2)]);
var state_45597__$1 = state_45597;
var statearr_45619_45652 = state_45597__$1;
(statearr_45619_45652[(2)] = inst_45591);

(statearr_45619_45652[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45598 === (19))){
var inst_45578 = (state_45597[(2)]);
var state_45597__$1 = state_45597;
var statearr_45620_45653 = state_45597__$1;
(statearr_45620_45653[(2)] = inst_45578);

(statearr_45620_45653[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45598 === (11))){
var inst_45563 = (state_45597[(7)]);
var inst_45549 = (state_45597[(9)]);
var inst_45563__$1 = cljs.core.seq.call(null,inst_45549);
var state_45597__$1 = (function (){var statearr_45621 = state_45597;
(statearr_45621[(7)] = inst_45563__$1);

return statearr_45621;
})();
if(inst_45563__$1){
var statearr_45622_45654 = state_45597__$1;
(statearr_45622_45654[(1)] = (14));

} else {
var statearr_45623_45655 = state_45597__$1;
(statearr_45623_45655[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45598 === (9))){
var inst_45585 = (state_45597[(2)]);
var inst_45586 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_45597__$1 = (function (){var statearr_45624 = state_45597;
(statearr_45624[(15)] = inst_45585);

return statearr_45624;
})();
if(cljs.core.truth_(inst_45586)){
var statearr_45625_45656 = state_45597__$1;
(statearr_45625_45656[(1)] = (21));

} else {
var statearr_45626_45657 = state_45597__$1;
(statearr_45626_45657[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45598 === (5))){
var inst_45541 = cljs.core.async.close_BANG_.call(null,out);
var state_45597__$1 = state_45597;
var statearr_45627_45658 = state_45597__$1;
(statearr_45627_45658[(2)] = inst_45541);

(statearr_45627_45658[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45598 === (14))){
var inst_45563 = (state_45597[(7)]);
var inst_45565 = cljs.core.chunked_seq_QMARK_.call(null,inst_45563);
var state_45597__$1 = state_45597;
if(inst_45565){
var statearr_45628_45659 = state_45597__$1;
(statearr_45628_45659[(1)] = (17));

} else {
var statearr_45629_45660 = state_45597__$1;
(statearr_45629_45660[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45598 === (16))){
var inst_45581 = (state_45597[(2)]);
var state_45597__$1 = state_45597;
var statearr_45630_45661 = state_45597__$1;
(statearr_45630_45661[(2)] = inst_45581);

(statearr_45630_45661[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45598 === (10))){
var inst_45552 = (state_45597[(8)]);
var inst_45550 = (state_45597[(12)]);
var inst_45557 = cljs.core._nth.call(null,inst_45550,inst_45552);
var state_45597__$1 = state_45597;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45597__$1,(13),out,inst_45557);
} else {
if((state_val_45598 === (18))){
var inst_45563 = (state_45597[(7)]);
var inst_45572 = cljs.core.first.call(null,inst_45563);
var state_45597__$1 = state_45597;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45597__$1,(20),out,inst_45572);
} else {
if((state_val_45598 === (8))){
var inst_45552 = (state_45597[(8)]);
var inst_45551 = (state_45597[(10)]);
var inst_45554 = (inst_45552 < inst_45551);
var inst_45555 = inst_45554;
var state_45597__$1 = state_45597;
if(cljs.core.truth_(inst_45555)){
var statearr_45631_45662 = state_45597__$1;
(statearr_45631_45662[(1)] = (10));

} else {
var statearr_45632_45663 = state_45597__$1;
(statearr_45632_45663[(1)] = (11));

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
});})(c__43136__auto__))
;
return ((function (switch__43115__auto__,c__43136__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__43116__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__43116__auto____0 = (function (){
var statearr_45636 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45636[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__43116__auto__);

(statearr_45636[(1)] = (1));

return statearr_45636;
});
var cljs$core$async$mapcat_STAR__$_state_machine__43116__auto____1 = (function (state_45597){
while(true){
var ret_value__43117__auto__ = (function (){try{while(true){
var result__43118__auto__ = switch__43115__auto__.call(null,state_45597);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43118__auto__;
}
break;
}
}catch (e45637){if((e45637 instanceof Object)){
var ex__43119__auto__ = e45637;
var statearr_45638_45664 = state_45597;
(statearr_45638_45664[(5)] = ex__43119__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45597);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45637;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45665 = state_45597;
state_45597 = G__45665;
continue;
} else {
return ret_value__43117__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__43116__auto__ = function(state_45597){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__43116__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__43116__auto____1.call(this,state_45597);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__43116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__43116__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__43116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__43116__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__43116__auto__;
})()
;})(switch__43115__auto__,c__43136__auto__))
})();
var state__43138__auto__ = (function (){var statearr_45639 = f__43137__auto__.call(null);
(statearr_45639[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43136__auto__);

return statearr_45639;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43138__auto__);
});})(c__43136__auto__))
);

return c__43136__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args45666 = [];
var len__39344__auto___45669 = arguments.length;
var i__39345__auto___45670 = (0);
while(true){
if((i__39345__auto___45670 < len__39344__auto___45669)){
args45666.push((arguments[i__39345__auto___45670]));

var G__45671 = (i__39345__auto___45670 + (1));
i__39345__auto___45670 = G__45671;
continue;
} else {
}
break;
}

var G__45668 = args45666.length;
switch (G__45668) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45666.length)].join('')));

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
var args45673 = [];
var len__39344__auto___45676 = arguments.length;
var i__39345__auto___45677 = (0);
while(true){
if((i__39345__auto___45677 < len__39344__auto___45676)){
args45673.push((arguments[i__39345__auto___45677]));

var G__45678 = (i__39345__auto___45677 + (1));
i__39345__auto___45677 = G__45678;
continue;
} else {
}
break;
}

var G__45675 = args45673.length;
switch (G__45675) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45673.length)].join('')));

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
var args45680 = [];
var len__39344__auto___45731 = arguments.length;
var i__39345__auto___45732 = (0);
while(true){
if((i__39345__auto___45732 < len__39344__auto___45731)){
args45680.push((arguments[i__39345__auto___45732]));

var G__45733 = (i__39345__auto___45732 + (1));
i__39345__auto___45732 = G__45733;
continue;
} else {
}
break;
}

var G__45682 = args45680.length;
switch (G__45682) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45680.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__43136__auto___45735 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43136__auto___45735,out){
return (function (){
var f__43137__auto__ = (function (){var switch__43115__auto__ = ((function (c__43136__auto___45735,out){
return (function (state_45706){
var state_val_45707 = (state_45706[(1)]);
if((state_val_45707 === (7))){
var inst_45701 = (state_45706[(2)]);
var state_45706__$1 = state_45706;
var statearr_45708_45736 = state_45706__$1;
(statearr_45708_45736[(2)] = inst_45701);

(statearr_45708_45736[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45707 === (1))){
var inst_45683 = null;
var state_45706__$1 = (function (){var statearr_45709 = state_45706;
(statearr_45709[(7)] = inst_45683);

return statearr_45709;
})();
var statearr_45710_45737 = state_45706__$1;
(statearr_45710_45737[(2)] = null);

(statearr_45710_45737[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45707 === (4))){
var inst_45686 = (state_45706[(8)]);
var inst_45686__$1 = (state_45706[(2)]);
var inst_45687 = (inst_45686__$1 == null);
var inst_45688 = cljs.core.not.call(null,inst_45687);
var state_45706__$1 = (function (){var statearr_45711 = state_45706;
(statearr_45711[(8)] = inst_45686__$1);

return statearr_45711;
})();
if(inst_45688){
var statearr_45712_45738 = state_45706__$1;
(statearr_45712_45738[(1)] = (5));

} else {
var statearr_45713_45739 = state_45706__$1;
(statearr_45713_45739[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45707 === (6))){
var state_45706__$1 = state_45706;
var statearr_45714_45740 = state_45706__$1;
(statearr_45714_45740[(2)] = null);

(statearr_45714_45740[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45707 === (3))){
var inst_45703 = (state_45706[(2)]);
var inst_45704 = cljs.core.async.close_BANG_.call(null,out);
var state_45706__$1 = (function (){var statearr_45715 = state_45706;
(statearr_45715[(9)] = inst_45703);

return statearr_45715;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45706__$1,inst_45704);
} else {
if((state_val_45707 === (2))){
var state_45706__$1 = state_45706;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45706__$1,(4),ch);
} else {
if((state_val_45707 === (11))){
var inst_45686 = (state_45706[(8)]);
var inst_45695 = (state_45706[(2)]);
var inst_45683 = inst_45686;
var state_45706__$1 = (function (){var statearr_45716 = state_45706;
(statearr_45716[(10)] = inst_45695);

(statearr_45716[(7)] = inst_45683);

return statearr_45716;
})();
var statearr_45717_45741 = state_45706__$1;
(statearr_45717_45741[(2)] = null);

(statearr_45717_45741[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45707 === (9))){
var inst_45686 = (state_45706[(8)]);
var state_45706__$1 = state_45706;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45706__$1,(11),out,inst_45686);
} else {
if((state_val_45707 === (5))){
var inst_45686 = (state_45706[(8)]);
var inst_45683 = (state_45706[(7)]);
var inst_45690 = cljs.core._EQ_.call(null,inst_45686,inst_45683);
var state_45706__$1 = state_45706;
if(inst_45690){
var statearr_45719_45742 = state_45706__$1;
(statearr_45719_45742[(1)] = (8));

} else {
var statearr_45720_45743 = state_45706__$1;
(statearr_45720_45743[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45707 === (10))){
var inst_45698 = (state_45706[(2)]);
var state_45706__$1 = state_45706;
var statearr_45721_45744 = state_45706__$1;
(statearr_45721_45744[(2)] = inst_45698);

(statearr_45721_45744[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45707 === (8))){
var inst_45683 = (state_45706[(7)]);
var tmp45718 = inst_45683;
var inst_45683__$1 = tmp45718;
var state_45706__$1 = (function (){var statearr_45722 = state_45706;
(statearr_45722[(7)] = inst_45683__$1);

return statearr_45722;
})();
var statearr_45723_45745 = state_45706__$1;
(statearr_45723_45745[(2)] = null);

(statearr_45723_45745[(1)] = (2));


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
});})(c__43136__auto___45735,out))
;
return ((function (switch__43115__auto__,c__43136__auto___45735,out){
return (function() {
var cljs$core$async$state_machine__43116__auto__ = null;
var cljs$core$async$state_machine__43116__auto____0 = (function (){
var statearr_45727 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_45727[(0)] = cljs$core$async$state_machine__43116__auto__);

(statearr_45727[(1)] = (1));

return statearr_45727;
});
var cljs$core$async$state_machine__43116__auto____1 = (function (state_45706){
while(true){
var ret_value__43117__auto__ = (function (){try{while(true){
var result__43118__auto__ = switch__43115__auto__.call(null,state_45706);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43118__auto__;
}
break;
}
}catch (e45728){if((e45728 instanceof Object)){
var ex__43119__auto__ = e45728;
var statearr_45729_45746 = state_45706;
(statearr_45729_45746[(5)] = ex__43119__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45706);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45728;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45747 = state_45706;
state_45706 = G__45747;
continue;
} else {
return ret_value__43117__auto__;
}
break;
}
});
cljs$core$async$state_machine__43116__auto__ = function(state_45706){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43116__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43116__auto____1.call(this,state_45706);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43116__auto____0;
cljs$core$async$state_machine__43116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43116__auto____1;
return cljs$core$async$state_machine__43116__auto__;
})()
;})(switch__43115__auto__,c__43136__auto___45735,out))
})();
var state__43138__auto__ = (function (){var statearr_45730 = f__43137__auto__.call(null);
(statearr_45730[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43136__auto___45735);

return statearr_45730;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43138__auto__);
});})(c__43136__auto___45735,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args45748 = [];
var len__39344__auto___45818 = arguments.length;
var i__39345__auto___45819 = (0);
while(true){
if((i__39345__auto___45819 < len__39344__auto___45818)){
args45748.push((arguments[i__39345__auto___45819]));

var G__45820 = (i__39345__auto___45819 + (1));
i__39345__auto___45819 = G__45820;
continue;
} else {
}
break;
}

var G__45750 = args45748.length;
switch (G__45750) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45748.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__43136__auto___45822 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43136__auto___45822,out){
return (function (){
var f__43137__auto__ = (function (){var switch__43115__auto__ = ((function (c__43136__auto___45822,out){
return (function (state_45788){
var state_val_45789 = (state_45788[(1)]);
if((state_val_45789 === (7))){
var inst_45784 = (state_45788[(2)]);
var state_45788__$1 = state_45788;
var statearr_45790_45823 = state_45788__$1;
(statearr_45790_45823[(2)] = inst_45784);

(statearr_45790_45823[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45789 === (1))){
var inst_45751 = (new Array(n));
var inst_45752 = inst_45751;
var inst_45753 = (0);
var state_45788__$1 = (function (){var statearr_45791 = state_45788;
(statearr_45791[(7)] = inst_45752);

(statearr_45791[(8)] = inst_45753);

return statearr_45791;
})();
var statearr_45792_45824 = state_45788__$1;
(statearr_45792_45824[(2)] = null);

(statearr_45792_45824[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45789 === (4))){
var inst_45756 = (state_45788[(9)]);
var inst_45756__$1 = (state_45788[(2)]);
var inst_45757 = (inst_45756__$1 == null);
var inst_45758 = cljs.core.not.call(null,inst_45757);
var state_45788__$1 = (function (){var statearr_45793 = state_45788;
(statearr_45793[(9)] = inst_45756__$1);

return statearr_45793;
})();
if(inst_45758){
var statearr_45794_45825 = state_45788__$1;
(statearr_45794_45825[(1)] = (5));

} else {
var statearr_45795_45826 = state_45788__$1;
(statearr_45795_45826[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45789 === (15))){
var inst_45778 = (state_45788[(2)]);
var state_45788__$1 = state_45788;
var statearr_45796_45827 = state_45788__$1;
(statearr_45796_45827[(2)] = inst_45778);

(statearr_45796_45827[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45789 === (13))){
var state_45788__$1 = state_45788;
var statearr_45797_45828 = state_45788__$1;
(statearr_45797_45828[(2)] = null);

(statearr_45797_45828[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45789 === (6))){
var inst_45753 = (state_45788[(8)]);
var inst_45774 = (inst_45753 > (0));
var state_45788__$1 = state_45788;
if(cljs.core.truth_(inst_45774)){
var statearr_45798_45829 = state_45788__$1;
(statearr_45798_45829[(1)] = (12));

} else {
var statearr_45799_45830 = state_45788__$1;
(statearr_45799_45830[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45789 === (3))){
var inst_45786 = (state_45788[(2)]);
var state_45788__$1 = state_45788;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45788__$1,inst_45786);
} else {
if((state_val_45789 === (12))){
var inst_45752 = (state_45788[(7)]);
var inst_45776 = cljs.core.vec.call(null,inst_45752);
var state_45788__$1 = state_45788;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45788__$1,(15),out,inst_45776);
} else {
if((state_val_45789 === (2))){
var state_45788__$1 = state_45788;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45788__$1,(4),ch);
} else {
if((state_val_45789 === (11))){
var inst_45768 = (state_45788[(2)]);
var inst_45769 = (new Array(n));
var inst_45752 = inst_45769;
var inst_45753 = (0);
var state_45788__$1 = (function (){var statearr_45800 = state_45788;
(statearr_45800[(10)] = inst_45768);

(statearr_45800[(7)] = inst_45752);

(statearr_45800[(8)] = inst_45753);

return statearr_45800;
})();
var statearr_45801_45831 = state_45788__$1;
(statearr_45801_45831[(2)] = null);

(statearr_45801_45831[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45789 === (9))){
var inst_45752 = (state_45788[(7)]);
var inst_45766 = cljs.core.vec.call(null,inst_45752);
var state_45788__$1 = state_45788;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45788__$1,(11),out,inst_45766);
} else {
if((state_val_45789 === (5))){
var inst_45752 = (state_45788[(7)]);
var inst_45761 = (state_45788[(11)]);
var inst_45753 = (state_45788[(8)]);
var inst_45756 = (state_45788[(9)]);
var inst_45760 = (inst_45752[inst_45753] = inst_45756);
var inst_45761__$1 = (inst_45753 + (1));
var inst_45762 = (inst_45761__$1 < n);
var state_45788__$1 = (function (){var statearr_45802 = state_45788;
(statearr_45802[(11)] = inst_45761__$1);

(statearr_45802[(12)] = inst_45760);

return statearr_45802;
})();
if(cljs.core.truth_(inst_45762)){
var statearr_45803_45832 = state_45788__$1;
(statearr_45803_45832[(1)] = (8));

} else {
var statearr_45804_45833 = state_45788__$1;
(statearr_45804_45833[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45789 === (14))){
var inst_45781 = (state_45788[(2)]);
var inst_45782 = cljs.core.async.close_BANG_.call(null,out);
var state_45788__$1 = (function (){var statearr_45806 = state_45788;
(statearr_45806[(13)] = inst_45781);

return statearr_45806;
})();
var statearr_45807_45834 = state_45788__$1;
(statearr_45807_45834[(2)] = inst_45782);

(statearr_45807_45834[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45789 === (10))){
var inst_45772 = (state_45788[(2)]);
var state_45788__$1 = state_45788;
var statearr_45808_45835 = state_45788__$1;
(statearr_45808_45835[(2)] = inst_45772);

(statearr_45808_45835[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45789 === (8))){
var inst_45752 = (state_45788[(7)]);
var inst_45761 = (state_45788[(11)]);
var tmp45805 = inst_45752;
var inst_45752__$1 = tmp45805;
var inst_45753 = inst_45761;
var state_45788__$1 = (function (){var statearr_45809 = state_45788;
(statearr_45809[(7)] = inst_45752__$1);

(statearr_45809[(8)] = inst_45753);

return statearr_45809;
})();
var statearr_45810_45836 = state_45788__$1;
(statearr_45810_45836[(2)] = null);

(statearr_45810_45836[(1)] = (2));


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
});})(c__43136__auto___45822,out))
;
return ((function (switch__43115__auto__,c__43136__auto___45822,out){
return (function() {
var cljs$core$async$state_machine__43116__auto__ = null;
var cljs$core$async$state_machine__43116__auto____0 = (function (){
var statearr_45814 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45814[(0)] = cljs$core$async$state_machine__43116__auto__);

(statearr_45814[(1)] = (1));

return statearr_45814;
});
var cljs$core$async$state_machine__43116__auto____1 = (function (state_45788){
while(true){
var ret_value__43117__auto__ = (function (){try{while(true){
var result__43118__auto__ = switch__43115__auto__.call(null,state_45788);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43118__auto__;
}
break;
}
}catch (e45815){if((e45815 instanceof Object)){
var ex__43119__auto__ = e45815;
var statearr_45816_45837 = state_45788;
(statearr_45816_45837[(5)] = ex__43119__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45788);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45815;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45838 = state_45788;
state_45788 = G__45838;
continue;
} else {
return ret_value__43117__auto__;
}
break;
}
});
cljs$core$async$state_machine__43116__auto__ = function(state_45788){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43116__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43116__auto____1.call(this,state_45788);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43116__auto____0;
cljs$core$async$state_machine__43116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43116__auto____1;
return cljs$core$async$state_machine__43116__auto__;
})()
;})(switch__43115__auto__,c__43136__auto___45822,out))
})();
var state__43138__auto__ = (function (){var statearr_45817 = f__43137__auto__.call(null);
(statearr_45817[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43136__auto___45822);

return statearr_45817;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43138__auto__);
});})(c__43136__auto___45822,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args45839 = [];
var len__39344__auto___45913 = arguments.length;
var i__39345__auto___45914 = (0);
while(true){
if((i__39345__auto___45914 < len__39344__auto___45913)){
args45839.push((arguments[i__39345__auto___45914]));

var G__45915 = (i__39345__auto___45914 + (1));
i__39345__auto___45914 = G__45915;
continue;
} else {
}
break;
}

var G__45841 = args45839.length;
switch (G__45841) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45839.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__43136__auto___45917 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43136__auto___45917,out){
return (function (){
var f__43137__auto__ = (function (){var switch__43115__auto__ = ((function (c__43136__auto___45917,out){
return (function (state_45883){
var state_val_45884 = (state_45883[(1)]);
if((state_val_45884 === (7))){
var inst_45879 = (state_45883[(2)]);
var state_45883__$1 = state_45883;
var statearr_45885_45918 = state_45883__$1;
(statearr_45885_45918[(2)] = inst_45879);

(statearr_45885_45918[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45884 === (1))){
var inst_45842 = [];
var inst_45843 = inst_45842;
var inst_45844 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_45883__$1 = (function (){var statearr_45886 = state_45883;
(statearr_45886[(7)] = inst_45843);

(statearr_45886[(8)] = inst_45844);

return statearr_45886;
})();
var statearr_45887_45919 = state_45883__$1;
(statearr_45887_45919[(2)] = null);

(statearr_45887_45919[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45884 === (4))){
var inst_45847 = (state_45883[(9)]);
var inst_45847__$1 = (state_45883[(2)]);
var inst_45848 = (inst_45847__$1 == null);
var inst_45849 = cljs.core.not.call(null,inst_45848);
var state_45883__$1 = (function (){var statearr_45888 = state_45883;
(statearr_45888[(9)] = inst_45847__$1);

return statearr_45888;
})();
if(inst_45849){
var statearr_45889_45920 = state_45883__$1;
(statearr_45889_45920[(1)] = (5));

} else {
var statearr_45890_45921 = state_45883__$1;
(statearr_45890_45921[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45884 === (15))){
var inst_45873 = (state_45883[(2)]);
var state_45883__$1 = state_45883;
var statearr_45891_45922 = state_45883__$1;
(statearr_45891_45922[(2)] = inst_45873);

(statearr_45891_45922[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45884 === (13))){
var state_45883__$1 = state_45883;
var statearr_45892_45923 = state_45883__$1;
(statearr_45892_45923[(2)] = null);

(statearr_45892_45923[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45884 === (6))){
var inst_45843 = (state_45883[(7)]);
var inst_45868 = inst_45843.length;
var inst_45869 = (inst_45868 > (0));
var state_45883__$1 = state_45883;
if(cljs.core.truth_(inst_45869)){
var statearr_45893_45924 = state_45883__$1;
(statearr_45893_45924[(1)] = (12));

} else {
var statearr_45894_45925 = state_45883__$1;
(statearr_45894_45925[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45884 === (3))){
var inst_45881 = (state_45883[(2)]);
var state_45883__$1 = state_45883;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45883__$1,inst_45881);
} else {
if((state_val_45884 === (12))){
var inst_45843 = (state_45883[(7)]);
var inst_45871 = cljs.core.vec.call(null,inst_45843);
var state_45883__$1 = state_45883;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45883__$1,(15),out,inst_45871);
} else {
if((state_val_45884 === (2))){
var state_45883__$1 = state_45883;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45883__$1,(4),ch);
} else {
if((state_val_45884 === (11))){
var inst_45847 = (state_45883[(9)]);
var inst_45851 = (state_45883[(10)]);
var inst_45861 = (state_45883[(2)]);
var inst_45862 = [];
var inst_45863 = inst_45862.push(inst_45847);
var inst_45843 = inst_45862;
var inst_45844 = inst_45851;
var state_45883__$1 = (function (){var statearr_45895 = state_45883;
(statearr_45895[(11)] = inst_45861);

(statearr_45895[(7)] = inst_45843);

(statearr_45895[(12)] = inst_45863);

(statearr_45895[(8)] = inst_45844);

return statearr_45895;
})();
var statearr_45896_45926 = state_45883__$1;
(statearr_45896_45926[(2)] = null);

(statearr_45896_45926[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45884 === (9))){
var inst_45843 = (state_45883[(7)]);
var inst_45859 = cljs.core.vec.call(null,inst_45843);
var state_45883__$1 = state_45883;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45883__$1,(11),out,inst_45859);
} else {
if((state_val_45884 === (5))){
var inst_45844 = (state_45883[(8)]);
var inst_45847 = (state_45883[(9)]);
var inst_45851 = (state_45883[(10)]);
var inst_45851__$1 = f.call(null,inst_45847);
var inst_45852 = cljs.core._EQ_.call(null,inst_45851__$1,inst_45844);
var inst_45853 = cljs.core.keyword_identical_QMARK_.call(null,inst_45844,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_45854 = (inst_45852) || (inst_45853);
var state_45883__$1 = (function (){var statearr_45897 = state_45883;
(statearr_45897[(10)] = inst_45851__$1);

return statearr_45897;
})();
if(cljs.core.truth_(inst_45854)){
var statearr_45898_45927 = state_45883__$1;
(statearr_45898_45927[(1)] = (8));

} else {
var statearr_45899_45928 = state_45883__$1;
(statearr_45899_45928[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45884 === (14))){
var inst_45876 = (state_45883[(2)]);
var inst_45877 = cljs.core.async.close_BANG_.call(null,out);
var state_45883__$1 = (function (){var statearr_45901 = state_45883;
(statearr_45901[(13)] = inst_45876);

return statearr_45901;
})();
var statearr_45902_45929 = state_45883__$1;
(statearr_45902_45929[(2)] = inst_45877);

(statearr_45902_45929[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45884 === (10))){
var inst_45866 = (state_45883[(2)]);
var state_45883__$1 = state_45883;
var statearr_45903_45930 = state_45883__$1;
(statearr_45903_45930[(2)] = inst_45866);

(statearr_45903_45930[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45884 === (8))){
var inst_45843 = (state_45883[(7)]);
var inst_45847 = (state_45883[(9)]);
var inst_45851 = (state_45883[(10)]);
var inst_45856 = inst_45843.push(inst_45847);
var tmp45900 = inst_45843;
var inst_45843__$1 = tmp45900;
var inst_45844 = inst_45851;
var state_45883__$1 = (function (){var statearr_45904 = state_45883;
(statearr_45904[(7)] = inst_45843__$1);

(statearr_45904[(8)] = inst_45844);

(statearr_45904[(14)] = inst_45856);

return statearr_45904;
})();
var statearr_45905_45931 = state_45883__$1;
(statearr_45905_45931[(2)] = null);

(statearr_45905_45931[(1)] = (2));


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
});})(c__43136__auto___45917,out))
;
return ((function (switch__43115__auto__,c__43136__auto___45917,out){
return (function() {
var cljs$core$async$state_machine__43116__auto__ = null;
var cljs$core$async$state_machine__43116__auto____0 = (function (){
var statearr_45909 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45909[(0)] = cljs$core$async$state_machine__43116__auto__);

(statearr_45909[(1)] = (1));

return statearr_45909;
});
var cljs$core$async$state_machine__43116__auto____1 = (function (state_45883){
while(true){
var ret_value__43117__auto__ = (function (){try{while(true){
var result__43118__auto__ = switch__43115__auto__.call(null,state_45883);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43118__auto__;
}
break;
}
}catch (e45910){if((e45910 instanceof Object)){
var ex__43119__auto__ = e45910;
var statearr_45911_45932 = state_45883;
(statearr_45911_45932[(5)] = ex__43119__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45883);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45910;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45933 = state_45883;
state_45883 = G__45933;
continue;
} else {
return ret_value__43117__auto__;
}
break;
}
});
cljs$core$async$state_machine__43116__auto__ = function(state_45883){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43116__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43116__auto____1.call(this,state_45883);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43116__auto____0;
cljs$core$async$state_machine__43116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43116__auto____1;
return cljs$core$async$state_machine__43116__auto__;
})()
;})(switch__43115__auto__,c__43136__auto___45917,out))
})();
var state__43138__auto__ = (function (){var statearr_45912 = f__43137__auto__.call(null);
(statearr_45912[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43136__auto___45917);

return statearr_45912;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43138__auto__);
});})(c__43136__auto___45917,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.mapp