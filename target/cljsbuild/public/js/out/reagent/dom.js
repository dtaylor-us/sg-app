// Compiled by ClojureScript 1.9.293 {}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.interop');
goog.require('reagent.ratom');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('cljsjs.react.dom');
goog.require('reagent.debug');
if(typeof reagent.dom.imported !== 'undefined'){
} else {
reagent.dom.imported = null;
}
reagent.dom.module = (function reagent$dom$module(){
if(cljs.core.some_QMARK_.call(null,reagent.dom.imported)){
return reagent.dom.imported;
} else {
if(typeof ReactDOM !== 'undefined'){
return reagent.dom.imported = ReactDOM;
} else {
if(typeof require !== 'undefined'){
var or__38236__auto__ = reagent.dom.imported = require("react-dom");
if(cljs.core.truth_(or__38236__auto__)){
return or__38236__auto__;
} else {
throw (new Error("require('react-dom') failed"));
}
} else {
throw (new Error("js/ReactDOM is missing"));

}
}
}
});
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return (reagent.dom.module.call(null)["unmountComponentAtNode"])(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_42054 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.module.call(null)["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_42054){
return (function (){
var _STAR_always_update_STAR_42055 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render.call(null);

if(cljs.core.some_QMARK_.call(null,callback)){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_42055;
}});})(_STAR_always_update_STAR_42054))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_42054;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var args42056 = [];
var len__39344__auto___42059 = arguments.length;
var i__39345__auto___42060 = (0);
while(true){
if((i__39345__auto___42060 < len__39344__auto___42059)){
args42056.push((arguments[i__39345__auto___42060]));

var G__42061 = (i__39345__auto___42060 + (1));
i__39345__auto___42060 = G__42061;
continue;
} else {
}
break;
}

var G__42058 = args42056.length;
switch (G__42058) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42056.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_.call(null);

var f = (function (){
return reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;

reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return (reagent.dom.module.call(null)["findDOMNode"])(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_.call(null);

var seq__42067_42071 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__42068_42072 = null;
var count__42069_42073 = (0);
var i__42070_42074 = (0);
while(true){
if((i__42070_42074 < count__42069_42073)){
var v_42075 = cljs.core._nth.call(null,chunk__42068_42072,i__42070_42074);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_42075);

var G__42076 = seq__42067_42071;
var G__42077 = chunk__42068_42072;
var G__42078 = count__42069_42073;
var G__42079 = (i__42070_42074 + (1));
seq__42067_42071 = G__42076;
chunk__42068_42072 = G__42077;
count__42069_42073 = G__42078;
i__42070_42074 = G__42079;
continue;
} else {
var temp__4657__auto___42080 = cljs.core.seq.call(null,seq__42067_42071);
if(temp__4657__auto___42080){
var seq__42067_42081__$1 = temp__4657__auto___42080;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42067_42081__$1)){
var c__39050__auto___42082 = cljs.core.chunk_first.call(null,seq__42067_42081__$1);
var G__42083 = cljs.core.chunk_rest.call(null,seq__42067_42081__$1);
var G__42084 = c__39050__auto___42082;
var G__42085 = cljs.core.count.call(null,c__39050__auto___42082);
var G__42086 = (0);
seq__42067_42071 = G__42083;
chunk__42068_42072 = G__42084;
count__42069_42073 = G__42085;
i__42070_42074 = G__42086;
continue;
} else {
var v_42087 = cljs.core.first.call(null,seq__42067_42081__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_42087);

var G__42088 = cljs.core.next.call(null,seq__42067_42081__$1);
var G__42089 = null;
var G__42090 = (0);
var G__42091 = (0);
seq__42067_42071 = G__42088;
chunk__42068_42072 = G__42089;
count__42069_42073 = G__42090;
i__42070_42074 = G__42091;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map