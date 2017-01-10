// Compiled by ClojureScript 1.9.293 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
cljs.core.UUID.prototype.cljs$core$IComparable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = cljs.core.PROTOCOL_SENTINEL;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.hash.call(null,this$__$1.toString());
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__43487_43491 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__43488_43492 = null;
var count__43489_43493 = (0);
var i__43490_43494 = (0);
while(true){
if((i__43490_43494 < count__43489_43493)){
var k_43495 = cljs.core._nth.call(null,chunk__43488_43492,i__43490_43494);
var v_43496 = (b[k_43495]);
(a[k_43495] = v_43496);

var G__43497 = seq__43487_43491;
var G__43498 = chunk__43488_43492;
var G__43499 = count__43489_43493;
var G__43500 = (i__43490_43494 + (1));
seq__43487_43491 = G__43497;
chunk__43488_43492 = G__43498;
count__43489_43493 = G__43499;
i__43490_43494 = G__43500;
continue;
} else {
var temp__4657__auto___43501 = cljs.core.seq.call(null,seq__43487_43491);
if(temp__4657__auto___43501){
var seq__43487_43502__$1 = temp__4657__auto___43501;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43487_43502__$1)){
var c__38717__auto___43503 = cljs.core.chunk_first.call(null,seq__43487_43502__$1);
var G__43504 = cljs.core.chunk_rest.call(null,seq__43487_43502__$1);
var G__43505 = c__38717__auto___43503;
var G__43506 = cljs.core.count.call(null,c__38717__auto___43503);
var G__43507 = (0);
seq__43487_43491 = G__43504;
chunk__43488_43492 = G__43505;
count__43489_43493 = G__43506;
i__43490_43494 = G__43507;
continue;
} else {
var k_43508 = cljs.core.first.call(null,seq__43487_43502__$1);
var v_43509 = (b[k_43508]);
(a[k_43508] = v_43509);

var G__43510 = cljs.core.next.call(null,seq__43487_43502__$1);
var G__43511 = null;
var G__43512 = (0);
var G__43513 = (0);
seq__43487_43491 = G__43510;
chunk__43488_43492 = G__43511;
count__43489_43493 = G__43512;
i__43490_43494 = G__43513;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__38509__auto__,writer__38510__auto__,opt__38511__auto__){
return cljs.core._write.call(null,writer__38510__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__38509__auto__,writer__38510__auto__,opt__38511__auto__){
return cljs.core._write.call(null,writer__38510__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
var args43514 = [];
var len__39011__auto___43517 = arguments.length;
var i__39012__auto___43518 = (0);
while(true){
if((i__39012__auto___43518 < len__39011__auto___43517)){
args43514.push((arguments[i__39012__auto___43518]));

var G__43519 = (i__39012__auto___43518 + (1));
i__39012__auto___43518 = G__43519;
continue;
} else {
}
break;
}

var G__43516 = args43514.length;
switch (G__43516) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43514.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,({"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__43521 = (i + (2));
var G__43522 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__43521;
ret = G__43522;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false}),cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;

/**
 * Read a transit encoded string into ClojureScript values given a 
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__38509__auto__,writer__38510__auto__,opt__38511__auto__){
return cljs.core._write.call(null,writer__38510__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__38509__auto__,writer__38510__auto__,opt__38511__auto__){
return cljs.core._write.call(null,writer__38510__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__43523_43527 = cljs.core.seq.call(null,v);
var chunk__43524_43528 = null;
var count__43525_43529 = (0);
var i__43526_43530 = (0);
while(true){
if((i__43526_43530 < count__43525_43529)){
var x_43531 = cljs.core._nth.call(null,chunk__43524_43528,i__43526_43530);
ret.push(x_43531);

var G__43532 = seq__43523_43527;
var G__43533 = chunk__43524_43528;
var G__43534 = count__43525_43529;
var G__43535 = (i__43526_43530 + (1));
seq__43523_43527 = G__43532;
chunk__43524_43528 = G__43533;
count__43525_43529 = G__43534;
i__43526_43530 = G__43535;
continue;
} else {
var temp__4657__auto___43536 = cljs.core.seq.call(null,seq__43523_43527);
if(temp__4657__auto___43536){
var seq__43523_43537__$1 = temp__4657__auto___43536;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43523_43537__$1)){
var c__38717__auto___43538 = cljs.core.chunk_first.call(null,seq__43523_43537__$1);
var G__43539 = cljs.core.chunk_rest.call(null,seq__43523_43537__$1);
var G__43540 = c__38717__auto___43538;
var G__43541 = cljs.core.count.call(null,c__38717__auto___43538);
var G__43542 = (0);
seq__43523_43527 = G__43539;
chunk__43524_43528 = G__43540;
count__43525_43529 = G__43541;
i__43526_43530 = G__43542;
continue;
} else {
var x_43543 = cljs.core.first.call(null,seq__43523_43537__$1);
ret.push(x_43543);

var G__43544 = cljs.core.next.call(null,seq__43523_43537__$1);
var G__43545 = null;
var G__43546 = (0);
var G__43547 = (0);
seq__43523_43527 = G__43544;
chunk__43524_43528 = G__43545;
count__43525_43529 = G__43546;
i__43526_43530 = G__43547;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__38509__auto__,writer__38510__auto__,opt__38511__auto__){
return cljs.core._write.call(null,writer__38510__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__38509__auto__,writer__38510__auto__,opt__38511__auto__){
return cljs.core._write.call(null,writer__38510__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__43548_43552 = cljs.core.seq.call(null,v);
var chunk__43549_43553 = null;
var count__43550_43554 = (0);
var i__43551_43555 = (0);
while(true){
if((i__43551_43555 < count__43550_43554)){
var x_43556 = cljs.core._nth.call(null,chunk__43549_43553,i__43551_43555);
ret.push(x_43556);

var G__43557 = seq__43548_43552;
var G__43558 = chunk__43549_43553;
var G__43559 = count__43550_43554;
var G__43560 = (i__43551_43555 + (1));
seq__43548_43552 = G__43557;
chunk__43549_43553 = G__43558;
count__43550_43554 = G__43559;
i__43551_43555 = G__43560;
continue;
} else {
var temp__4657__auto___43561 = cljs.core.seq.call(null,seq__43548_43552);
if(temp__4657__auto___43561){
var seq__43548_43562__$1 = temp__4657__auto___43561;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43548_43562__$1)){
var c__38717__auto___43563 = cljs.core.chunk_first.call(null,seq__43548_43562__$1);
var G__43564 = cljs.core.chunk_rest.call(null,seq__43548_43562__$1);
var G__43565 = c__38717__auto___43563;
var G__43566 = cljs.core.count.call(null,c__38717__auto___43563);
var G__43567 = (0);
seq__43548_43552 = G__43564;
chunk__43549_43553 = G__43565;
count__43550_43554 = G__43566;
i__43551_43555 = G__43567;
continue;
} else {
var x_43568 = cljs.core.first.call(null,seq__43548_43562__$1);
ret.push(x_43568);

var G__43569 = cljs.core.next.call(null,seq__43548_43562__$1);
var G__43570 = null;
var G__43571 = (0);
var G__43572 = (0);
seq__43548_43552 = G__43569;
chunk__43549_43553 = G__43570;
count__43550_43554 = G__43571;
i__43551_43555 = G__43572;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__38509__auto__,writer__38510__auto__,opt__38511__auto__){
return cljs.core._write.call(null,writer__38510__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__43573_43577 = cljs.core.seq.call(null,v);
var chunk__43574_43578 = null;
var count__43575_43579 = (0);
var i__43576_43580 = (0);
while(true){
if((i__43576_43580 < count__43575_43579)){
var x_43581 = cljs.core._nth.call(null,chunk__43574_43578,i__43576_43580);
ret.push(x_43581);

var G__43582 = seq__43573_43577;
var G__43583 = chunk__43574_43578;
var G__43584 = count__43575_43579;
var G__43585 = (i__43576_43580 + (1));
seq__43573_43577 = G__43582;
chunk__43574_43578 = G__43583;
count__43575_43579 = G__43584;
i__43576_43580 = G__43585;
continue;
} else {
var temp__4657__auto___43586 = cljs.core.seq.call(null,seq__43573_43577);
if(temp__4657__auto___43586){
var seq__43573_43587__$1 = temp__4657__auto___43586;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43573_43587__$1)){
var c__38717__auto___43588 = cljs.core.chunk_first.call(null,seq__43573_43587__$1);
var G__43589 = cljs.core.chunk_rest.call(null,seq__43573_43587__$1);
var G__43590 = c__38717__auto___43588;
var G__43591 = cljs.core.count.call(null,c__38717__auto___43588);
var G__43592 = (0);
seq__43573_43577 = G__43589;
chunk__43574_43578 = G__43590;
count__43575_43579 = G__43591;
i__43576_43580 = G__43592;
continue;
} else {
var x_43593 = cljs.core.first.call(null,seq__43573_43587__$1);
ret.push(x_43593);

var G__43594 = cljs.core.next.call(null,seq__43573_43587__$1);
var G__43595 = null;
var G__43596 = (0);
var G__43597 = (0);
seq__43573_43577 = G__43594;
chunk__43574_43578 = G__43595;
count__43575_43579 = G__43596;
i__43576_43580 = G__43597;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__38509__auto__,writer__38510__auto__,opt__38511__auto__){
return cljs.core._write.call(null,writer__38510__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__38509__auto__,writer__38510__auto__,opt__38511__auto__){
return cljs.core._write.call(null,writer__38510__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 *   opts is a map containing a :handlers entry. :handlers is a map of
 *   type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
var args43598 = [];
var len__39011__auto___43613 = arguments.length;
var i__39012__auto___43614 = (0);
while(true){
if((i__39012__auto___43614 < len__39011__auto___43613)){
args43598.push((arguments[i__39012__auto___43614]));

var G__43615 = (i__39012__auto___43614 + (1));
i__39012__auto___43614 = G__43615;
continue;
} else {
}
break;
}

var G__43600 = args43598.length;
switch (G__43600) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43598.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,({"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__43601 = obj;
G__43601.push(kfn.call(null,k),vfn.call(null,v));

return G__43601;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x43602 = cljs.core.clone.call(null,handlers);
x43602.forEach = ((function (x43602,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__43603 = cljs.core.seq.call(null,coll);
var chunk__43604 = null;
var count__43605 = (0);
var i__43606 = (0);
while(true){
if((i__43606 < count__43605)){
var vec__43607 = cljs.core._nth.call(null,chunk__43604,i__43606);
var k = cljs.core.nth.call(null,vec__43607,(0),null);
var v = cljs.core.nth.call(null,vec__43607,(1),null);
f.call(null,v,k);

var G__43617 = seq__43603;
var G__43618 = chunk__43604;
var G__43619 = count__43605;
var G__43620 = (i__43606 + (1));
seq__43603 = G__43617;
chunk__43604 = G__43618;
count__43605 = G__43619;
i__43606 = G__43620;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__43603);
if(temp__4657__auto__){
var seq__43603__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43603__$1)){
var c__38717__auto__ = cljs.core.chunk_first.call(null,seq__43603__$1);
var G__43621 = cljs.core.chunk_rest.call(null,seq__43603__$1);
var G__43622 = c__38717__auto__;
var G__43623 = cljs.core.count.call(null,c__38717__auto__);
var G__43624 = (0);
seq__43603 = G__43621;
chunk__43604 = G__43622;
count__43605 = G__43623;
i__43606 = G__43624;
continue;
} else {
var vec__43610 = cljs.core.first.call(null,seq__43603__$1);
var k = cljs.core.nth.call(null,vec__43610,(0),null);
var v = cljs.core.nth.call(null,vec__43610,(1),null);
f.call(null,v,k);

var G__43625 = cljs.core.next.call(null,seq__43603__$1);
var G__43626 = null;
var G__43627 = (0);
var G__43628 = (0);
seq__43603 = G__43625;
chunk__43604 = G__43626;
count__43605 = G__43627;
i__43606 = G__43628;
continue;
}
} else {
return null;
}
}
break;
}
});})(x43602,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x43602;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
}),cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;

/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
var args43629 = [];
var len__39011__auto___43635 = arguments.length;
var i__39012__auto___43636 = (0);
while(true){
if((i__39012__auto___43636 < len__39011__auto___43635)){
args43629.push((arguments[i__39012__auto___43636]));

var G__43637 = (i__39012__auto___43636 + (1));
i__39012__auto___43636 = G__43637;
continue;
} else {
}
break;
}

var G__43631 = args43629.length;
switch (G__43631) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43629.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit43632 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit43632 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta43633){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta43633 = meta43633;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit43632.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43634,meta43633__$1){
var self__ = this;
var _43634__$1 = this;
return (new cognitect.transit.t_cognitect$transit43632(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta43633__$1));
});

cognitect.transit.t_cognitect$transit43632.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43634){
var self__ = this;
var _43634__$1 = this;
return self__.meta43633;
});

cognitect.transit.t_cognitect$transit43632.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit43632.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit43632.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit43632.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit43632.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta43633","meta43633",1369516219,null)], null);
});

cognitect.transit.t_cognitect$transit43632.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit43632.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit43632";

cognitect.transit.t_cognitect$transit43632.cljs$lang$ctorPrWriter = (function (this__38509__auto__,writer__38510__auto__,opt__38511__auto__){
return cljs.core._write.call(null,writer__38510__auto__,"cognitect.transit/t_cognitect$transit43632");
});

cognitect.transit.__GT_t_cognitect$transit43632 = (function cognitect$transit$__GT_t_cognitect$transit43632(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta43633){
return (new cognitect.transit.t_cognitect$transit43632(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta43633));
});

}

return (new cognitect.transit.t_cognitect$transit43632(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;

/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.intValue.call(null,s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
var or__37903__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__37903__auto__)){
return or__37903__auto__;
} else {
return (x instanceof cljs.core.UUID);
}
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map