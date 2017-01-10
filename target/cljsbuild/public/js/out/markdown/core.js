// Compiled by ClojureScript 1.9.293 {}
goog.provide('markdown.core');
goog.require('cljs.core');
goog.require('markdown.common');
goog.require('markdown.links');
goog.require('markdown.transformers');
markdown.core.init_transformer = (function markdown$core$init_transformer(p__44506){
var map__44518 = p__44506;
var map__44518__$1 = ((((!((map__44518 == null)))?((((map__44518.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44518.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44518):map__44518);
var replacement_transformers = cljs.core.get.call(null,map__44518__$1,new cljs.core.Keyword(null,"replacement-transformers","replacement-transformers",-2028552897));
var custom_transformers = cljs.core.get.call(null,map__44518__$1,new cljs.core.Keyword(null,"custom-transformers","custom-transformers",1440601790));
var inhibit_separator = cljs.core.get.call(null,map__44518__$1,new cljs.core.Keyword(null,"inhibit-separator","inhibit-separator",1268116222));
return ((function (map__44518,map__44518__$1,replacement_transformers,custom_transformers,inhibit_separator){
return (function (html,line,next_line,state){
var _STAR_next_line_STAR_44520 = markdown.transformers._STAR_next_line_STAR_;
var _STAR_inhibit_separator_STAR_44521 = markdown.common._STAR_inhibit_separator_STAR_;
markdown.transformers._STAR_next_line_STAR_ = next_line;

markdown.common._STAR_inhibit_separator_STAR_ = inhibit_separator;

try{var vec__44522 = cljs.core.reduce.call(null,((function (_STAR_next_line_STAR_44520,_STAR_inhibit_separator_STAR_44521,map__44518,map__44518__$1,replacement_transformers,custom_transformers,inhibit_separator){
return (function (p__44525,transformer){
var vec__44526 = p__44525;
var text = cljs.core.nth.call(null,vec__44526,(0),null);
var state__$1 = cljs.core.nth.call(null,vec__44526,(1),null);
return transformer.call(null,text,state__$1);
});})(_STAR_next_line_STAR_44520,_STAR_inhibit_separator_STAR_44521,map__44518,map__44518__$1,replacement_transformers,custom_transformers,inhibit_separator))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,state], null),(function (){var or__37903__auto__ = replacement_transformers;
if(cljs.core.truth_(or__37903__auto__)){
return or__37903__auto__;
} else {
return cljs.core.into.call(null,markdown.transformers.transformer_vector,custom_transformers);
}
})());
var text = cljs.core.nth.call(null,vec__44522,(0),null);
var new_state = cljs.core.nth.call(null,vec__44522,(1),null);
html.append(text);

return new_state;
}finally {markdown.common._STAR_inhibit_separator_STAR_ = _STAR_inhibit_separator_STAR_44521;

markdown.transformers._STAR_next_line_STAR_ = _STAR_next_line_STAR_44520;
}});
;})(map__44518,map__44518__$1,replacement_transformers,custom_transformers,inhibit_separator))
});
/**
 * Removed from cljs.core 0.0-1885, Ref. http://goo.gl/su7Xkj
 */
markdown.core.format = (function markdown$core$format(var_args){
var args__39018__auto__ = [];
var len__39011__auto___44531 = arguments.length;
var i__39012__auto___44532 = (0);
while(true){
if((i__39012__auto___44532 < len__39011__auto___44531)){
args__39018__auto__.push((arguments[i__39012__auto___44532]));

var G__44533 = (i__39012__auto___44532 + (1));
i__39012__auto___44532 = G__44533;
continue;
} else {
}
break;
}

var argseq__39019__auto__ = ((((1) < args__39018__auto__.length))?(new cljs.core.IndexedSeq(args__39018__auto__.slice((1)),(0),null)):null);
return markdown.core.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__39019__auto__);
});

markdown.core.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.call(null,goog.string.format,fmt,args);
});

markdown.core.format.cljs$lang$maxFixedArity = (1);

markdown.core.format.cljs$lang$applyTo = (function (seq44529){
var G__44530 = cljs.core.first.call(null,seq44529);
var seq44529__$1 = cljs.core.next.call(null,seq44529);
return markdown.core.format.cljs$core$IFn$_invoke$arity$variadic(G__44530,seq44529__$1);
});

markdown.core.parse_references = (function markdown$core$parse_references(lines){
var references = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var seq__44538_44542 = cljs.core.seq.call(null,lines);
var chunk__44539_44543 = null;
var count__44540_44544 = (0);
var i__44541_44545 = (0);
while(true){
if((i__44541_44545 < count__44540_44544)){
var line_44546 = cljs.core._nth.call(null,chunk__44539_44543,i__44541_44545);
markdown.links.parse_reference_link.call(null,line_44546,references);

var G__44547 = seq__44538_44542;
var G__44548 = chunk__44539_44543;
var G__44549 = count__44540_44544;
var G__44550 = (i__44541_44545 + (1));
seq__44538_44542 = G__44547;
chunk__44539_44543 = G__44548;
count__44540_44544 = G__44549;
i__44541_44545 = G__44550;
continue;
} else {
var temp__4657__auto___44551 = cljs.core.seq.call(null,seq__44538_44542);
if(temp__4657__auto___44551){
var seq__44538_44552__$1 = temp__4657__auto___44551;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44538_44552__$1)){
var c__38717__auto___44553 = cljs.core.chunk_first.call(null,seq__44538_44552__$1);
var G__44554 = cljs.core.chunk_rest.call(null,seq__44538_44552__$1);
var G__44555 = c__38717__auto___44553;
var G__44556 = cljs.core.count.call(null,c__38717__auto___44553);
var G__44557 = (0);
seq__44538_44542 = G__44554;
chunk__44539_44543 = G__44555;
count__44540_44544 = G__44556;
i__44541_44545 = G__44557;
continue;
} else {
var line_44558 = cljs.core.first.call(null,seq__44538_44552__$1);
markdown.links.parse_reference_link.call(null,line_44558,references);

var G__44559 = cljs.core.next.call(null,seq__44538_44552__$1);
var G__44560 = null;
var G__44561 = (0);
var G__44562 = (0);
seq__44538_44542 = G__44559;
chunk__44539_44543 = G__44560;
count__44540_44544 = G__44561;
i__44541_44545 = G__44562;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,references);
});
markdown.core.parse_footnotes = (function markdown$core$parse_footnotes(lines){
var footnotes = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"next-fn-id","next-fn-id",738579636),(1),new cljs.core.Keyword(null,"processed","processed",800622264),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"unprocessed","unprocessed",766771972),cljs.core.PersistentArrayMap.EMPTY], null));
var seq__44567_44571 = cljs.core.seq.call(null,lines);
var chunk__44568_44572 = null;
var count__44569_44573 = (0);
var i__44570_44574 = (0);
while(true){
if((i__44570_44574 < count__44569_44573)){
var line_44575 = cljs.core._nth.call(null,chunk__44568_44572,i__44570_44574);
markdown.links.parse_footnote_link.call(null,line_44575,footnotes);

var G__44576 = seq__44567_44571;
var G__44577 = chunk__44568_44572;
var G__44578 = count__44569_44573;
var G__44579 = (i__44570_44574 + (1));
seq__44567_44571 = G__44576;
chunk__44568_44572 = G__44577;
count__44569_44573 = G__44578;
i__44570_44574 = G__44579;
continue;
} else {
var temp__4657__auto___44580 = cljs.core.seq.call(null,seq__44567_44571);
if(temp__4657__auto___44580){
var seq__44567_44581__$1 = temp__4657__auto___44580;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44567_44581__$1)){
var c__38717__auto___44582 = cljs.core.chunk_first.call(null,seq__44567_44581__$1);
var G__44583 = cljs.core.chunk_rest.call(null,seq__44567_44581__$1);
var G__44584 = c__38717__auto___44582;
var G__44585 = cljs.core.count.call(null,c__38717__auto___44582);
var G__44586 = (0);
seq__44567_44571 = G__44583;
chunk__44568_44572 = G__44584;
count__44569_44573 = G__44585;
i__44570_44574 = G__44586;
continue;
} else {
var line_44587 = cljs.core.first.call(null,seq__44567_44581__$1);
markdown.links.parse_footnote_link.call(null,line_44587,footnotes);

var G__44588 = cljs.core.next.call(null,seq__44567_44581__$1);
var G__44589 = null;
var G__44590 = (0);
var G__44591 = (0);
seq__44567_44571 = G__44588;
chunk__44568_44572 = G__44589;
count__44569_44573 = G__44590;
i__44570_44574 = G__44591;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,footnotes);
});
markdown.core.parse_metadata = (function markdown$core$parse_metadata(lines){
var vec__44596 = cljs.core.split_with.call(null,(function (p1__44592_SHARP_){
return cljs.core.not_empty.call(null,p1__44592_SHARP_.trim());
}),lines);
var metadata = cljs.core.nth.call(null,vec__44596,(0),null);
var lines__$1 = cljs.core.nth.call(null,vec__44596,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [markdown.transformers.parse_metadata_headers.call(null,metadata),lines__$1], null);
});
/**
 * processes input text line by line and outputs an HTML string
 */
markdown.core.md_to_html_string_STAR_ = (function markdown$core$md_to_html_string_STAR_(text,params){
var _STAR_substring_STAR_44614 = markdown.common._STAR_substring_STAR_;
var formatter44615 = markdown.transformers.formatter;
markdown.common._STAR_substring_STAR_ = ((function (_STAR_substring_STAR_44614,formatter44615){
return (function (s,n){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.drop.call(null,n,s));
});})(_STAR_substring_STAR_44614,formatter44615))
;

markdown.transformers.formatter = markdown.core.format;

try{var params__$1 = (cljs.core.truth_(params)?cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.assoc,cljs.core.PersistentArrayMap.EMPTY),params):null);
var lines = [cljs.core.str(text),cljs.core.str("\n")].join('').split("\n");
var html = (new goog.string.StringBuffer(""));
var references = (cljs.core.truth_(new cljs.core.Keyword(null,"reference-links?","reference-links?",-2003778981).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_references.call(null,lines):null);
var footnotes = (cljs.core.truth_(new cljs.core.Keyword(null,"footnotes?","footnotes?",-1590157845).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_footnotes.call(null,lines):null);
var vec__44616 = (cljs.core.truth_(new cljs.core.Keyword(null,"parse-meta?","parse-meta?",-1938948742).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_metadata.call(null,lines):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,lines], null));
var metadata = cljs.core.nth.call(null,vec__44616,(0),null);
var lines__$1 = cljs.core.nth.call(null,vec__44616,(1),null);
var transformer = markdown.core.init_transformer.call(null,params__$1);
var G__44622_44629 = lines__$1;
var vec__44623_44630 = G__44622_44629;
var seq__44624_44631 = cljs.core.seq.call(null,vec__44623_44630);
var first__44625_44632 = cljs.core.first.call(null,seq__44624_44631);
var seq__44624_44633__$1 = cljs.core.next.call(null,seq__44624_44631);
var line_44634 = first__44625_44632;
var more_44635 = seq__44624_44633__$1;
var state_44636 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"clojurescript","clojurescript",-299769403),true,new cljs.core.Keyword(null,"references","references",882562509),references,new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205),footnotes,new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true], null),params__$1);
var G__44622_44637__$1 = G__44622_44629;
var state_44638__$1 = state_44636;
while(true){
var vec__44626_44639 = G__44622_44637__$1;
var seq__44627_44640 = cljs.core.seq.call(null,vec__44626_44639);
var first__44628_44641 = cljs.core.first.call(null,seq__44627_44640);
var seq__44627_44642__$1 = cljs.core.next.call(null,seq__44627_44640);
var line_44643__$1 = first__44628_44641;
var more_44644__$1 = seq__44627_44642__$1;
var state_44645__$2 = state_44638__$1;
var state_44646__$3 = (cljs.core.truth_(new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_44645__$2))?transformer.call(null,html,new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_44645__$2),cljs.core.first.call(null,more_44644__$1),cljs.core.assoc.call(null,cljs.core.dissoc.call(null,state_44645__$2,new cljs.core.Keyword(null,"buf","buf",-213913340),new cljs.core.Keyword(null,"lists","lists",-884730684)),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true)):state_44645__$2);
if(cljs.core.truth_(cljs.core.not_empty.call(null,more_44644__$1))){
var G__44647 = more_44644__$1;
var G__44648 = cljs.core.assoc.call(null,transformer.call(null,html,line_44643__$1,cljs.core.first.call(null,more_44644__$1),state_44646__$3),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),cljs.core.empty_QMARK_.call(null,line_44643__$1));
G__44622_44637__$1 = G__44647;
state_44638__$1 = G__44648;
continue;
} else {
transformer.call(null,html.append(markdown.transformers.footer.call(null,new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205).cljs$core$IFn$_invoke$arity$1(state_44646__$3))),line_44643__$1,"",cljs.core.assoc.call(null,state_44646__$3,new cljs.core.Keyword(null,"eof","eof",-489063237),true));
}
break;
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"metadata","metadata",1799301597),metadata,new cljs.core.Keyword(null,"html","html",-998796897),html.toString()], null);
}finally {markdown.transformers.formatter = formatter44615;

markdown.common._STAR_substring_STAR_ = _STAR_substring_STAR_44614;
}});
markdown.core.md__GT_html = (function markdown$core$md__GT_html(var_args){
var args__39018__auto__ = [];
var len__39011__auto___44651 = arguments.length;
var i__39012__auto___44652 = (0);
while(true){
if((i__39012__auto___44652 < len__39011__auto___44651)){
args__39018__auto__.push((arguments[i__39012__auto___44652]));

var G__44653 = (i__39012__auto___44652 + (1));
i__39012__auto___44652 = G__44653;
continue;
} else {
}
break;
}

var argseq__39019__auto__ = ((((1) < args__39018__auto__.length))?(new cljs.core.IndexedSeq(args__39018__auto__.slice((1)),(0),null)):null);
return markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__39019__auto__);
});

markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic = (function (text,params){
return new cljs.core.Keyword(null,"html","html",-998796897).cljs$core$IFn$_invoke$arity$1(markdown.core.md_to_html_string_STAR_.call(null,text,params));
});

markdown.core.md__GT_html.cljs$lang$maxFixedArity = (1);

markdown.core.md__GT_html.cljs$lang$applyTo = (function (seq44649){
var G__44650 = cljs.core.first.call(null,seq44649);
var seq44649__$1 = cljs.core.next.call(null,seq44649);
return markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic(G__44650,seq44649__$1);
});

markdown.core.md__GT_html_with_meta = (function markdown$core$md__GT_html_with_meta(var_args){
var args__39018__auto__ = [];
var len__39011__auto___44656 = arguments.length;
var i__39012__auto___44657 = (0);
while(true){
if((i__39012__auto___44657 < len__39011__auto___44656)){
args__39018__auto__.push((arguments[i__39012__auto___44657]));

var G__44658 = (i__39012__auto___44657 + (1));
i__39012__auto___44657 = G__44658;
continue;
} else {
}
break;
}

var argseq__39019__auto__ = ((((1) < args__39018__auto__.length))?(new cljs.core.IndexedSeq(args__39018__auto__.slice((1)),(0),null)):null);
return markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__39019__auto__);
});

markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic = (function (text,params){
return markdown.core.md_to_html_string_STAR_.call(null,text,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parse-meta?","parse-meta?",-1938948742),true], null),params));
});

markdown.core.md__GT_html_with_meta.cljs$lang$maxFixedArity = (1);

markdown.core.md__GT_html_with_meta.cljs$lang$applyTo = (function (seq44654){
var G__44655 = cljs.core.first.call(null,seq44654);
var seq44654__$1 = cljs.core.next.call(null,seq44654);
return markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic(G__44655,seq44654__$1);
});

/**
 * Js accessible wrapper
 */
markdown.core.mdToHtml = (function markdown$core$mdToHtml(var_args){
var args__39018__auto__ = [];
var len__39011__auto___44660 = arguments.length;
var i__39012__auto___44661 = (0);
while(true){
if((i__39012__auto___44661 < len__39011__auto___44660)){
args__39018__auto__.push((arguments[i__39012__auto___44661]));

var G__44662 = (i__39012__auto___44661 + (1));
i__39012__auto___44661 = G__44662;
continue;
} else {
}
break;
}

var argseq__39019__auto__ = ((((0) < args__39018__auto__.length))?(new cljs.core.IndexedSeq(args__39018__auto__.slice((0)),(0),null)):null);
return markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic(argseq__39019__auto__);
});
goog.exportSymbol('markdown.core.mdToHtml', markdown.core.mdToHtml);

markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic = (function (params){
return cljs.core.apply.call(null,markdown.core.md__GT_html,params);
});

markdown.core.mdToHtml.cljs$lang$maxFixedArity = (0);

markdown.core.mdToHtml.cljs$lang$applyTo = (function (seq44659){
return markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44659));
});

/**
 * Js accessible wrapper
 */
markdown.core.mdToHtmlWithMeta = (function markdown$core$mdToHtmlWithMeta(var_args){
var args__39018__auto__ = [];
var len__39011__auto___44664 = arguments.length;
var i__39012__auto___44665 = (0);
while(true){
if((i__39012__auto___44665 < len__39011__auto___44664)){
args__39018__auto__.push((arguments[i__39012__auto___44665]));

var G__44666 = (i__39012__auto___44665 + (1));
i__39012__auto___44665 = G__44666;
continue;
} else {
}
break;
}

var argseq__39019__auto__ = ((((0) < args__39018__auto__.length))?(new cljs.core.IndexedSeq(args__39018__auto__.slice((0)),(0),null)):null);
return markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic(argseq__39019__auto__);
});
goog.exportSymbol('markdown.core.mdToHtmlWithMeta', markdown.core.mdToHtmlWithMeta);

markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic = (function (params){
return cljs.core.apply.call(null,markdown.core.md__GT_html_with_meta,params);
});

markdown.core.mdToHtmlWithMeta.cljs$lang$maxFixedArity = (0);

markdown.core.mdToHtmlWithMeta.cljs$lang$applyTo = (function (seq44663){
return markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44663));
});


//# sourceMappingURL=core.js.map