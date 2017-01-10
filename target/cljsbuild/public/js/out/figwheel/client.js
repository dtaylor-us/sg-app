// Compiled by ClojureScript 1.9.293 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
goog.require('cljs.reader');
figwheel.client._figwheel_version_ = "0.5.8";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args48692 = [];
var len__39344__auto___48695 = arguments.length;
var i__39345__auto___48696 = (0);
while(true){
if((i__39345__auto___48696 < len__39344__auto___48695)){
args48692.push((arguments[i__39345__auto___48696]));

var G__48697 = (i__39345__auto___48696 + (1));
i__39345__auto___48696 = G__48697;
continue;
} else {
}
break;
}

var G__48694 = args48692.length;
switch (G__48694) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48692.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__39351__auto__ = [];
var len__39344__auto___48700 = arguments.length;
var i__39345__auto___48701 = (0);
while(true){
if((i__39345__auto___48701 < len__39344__auto___48700)){
args__39351__auto__.push((arguments[i__39345__auto___48701]));

var G__48702 = (i__39345__auto___48701 + (1));
i__39345__auto___48701 = G__48702;
continue;
} else {
}
break;
}

var argseq__39352__auto__ = ((((0) < args__39351__auto__.length))?(new cljs.core.IndexedSeq(args__39351__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__39352__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq48699){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48699));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__39351__auto__ = [];
var len__39344__auto___48704 = arguments.length;
var i__39345__auto___48705 = (0);
while(true){
if((i__39345__auto___48705 < len__39344__auto___48704)){
args__39351__auto__.push((arguments[i__39345__auto___48705]));

var G__48706 = (i__39345__auto___48705 + (1));
i__39345__auto___48705 = G__48706;
continue;
} else {
}
break;
}

var argseq__39352__auto__ = ((((0) < args__39351__auto__.length))?(new cljs.core.IndexedSeq(args__39351__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__39352__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq48703){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48703));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__48707 = cljs.core._EQ_;
var expr__48708 = (function (){var or__38236__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e48711){if((e48711 instanceof Error)){
var e = e48711;
return false;
} else {
throw e48711;

}
}})();
if(cljs.core.truth_(or__38236__auto__)){
return or__38236__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__48707.call(null,"true",expr__48708))){
return true;
} else {
if(cljs.core.truth_(pred__48707.call(null,"false",expr__48708))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__48708)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e48713){if((e48713 instanceof Error)){
var e = e48713;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e48713;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__48714){
var map__48717 = p__48714;
var map__48717__$1 = ((((!((map__48717 == null)))?((((map__48717.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48717.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48717):map__48717);
var message = cljs.core.get.call(null,map__48717__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__48717__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__38236__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__38236__auto__)){
return or__38236__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__38224__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__38224__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__38224__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__43136__auto___48879 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43136__auto___48879,ch){
return (function (){
var f__43137__auto__ = (function (){var switch__43115__auto__ = ((function (c__43136__auto___48879,ch){
return (function (state_48848){
var state_val_48849 = (state_48848[(1)]);
if((state_val_48849 === (7))){
var inst_48844 = (state_48848[(2)]);
var state_48848__$1 = state_48848;
var statearr_48850_48880 = state_48848__$1;
(statearr_48850_48880[(2)] = inst_48844);

(statearr_48850_48880[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48849 === (1))){
var state_48848__$1 = state_48848;
var statearr_48851_48881 = state_48848__$1;
(statearr_48851_48881[(2)] = null);

(statearr_48851_48881[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48849 === (4))){
var inst_48801 = (state_48848[(7)]);
var inst_48801__$1 = (state_48848[(2)]);
var state_48848__$1 = (function (){var statearr_48852 = state_48848;
(statearr_48852[(7)] = inst_48801__$1);

return statearr_48852;
})();
if(cljs.core.truth_(inst_48801__$1)){
var statearr_48853_48882 = state_48848__$1;
(statearr_48853_48882[(1)] = (5));

} else {
var statearr_48854_48883 = state_48848__$1;
(statearr_48854_48883[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48849 === (15))){
var inst_48808 = (state_48848[(8)]);
var inst_48823 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_48808);
var inst_48824 = cljs.core.first.call(null,inst_48823);
var inst_48825 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_48824);
var inst_48826 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_48825)].join('');
var inst_48827 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_48826);
var state_48848__$1 = state_48848;
var statearr_48855_48884 = state_48848__$1;
(statearr_48855_48884[(2)] = inst_48827);

(statearr_48855_48884[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48849 === (13))){
var inst_48832 = (state_48848[(2)]);
var state_48848__$1 = state_48848;
var statearr_48856_48885 = state_48848__$1;
(statearr_48856_48885[(2)] = inst_48832);

(statearr_48856_48885[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48849 === (6))){
var state_48848__$1 = state_48848;
var statearr_48857_48886 = state_48848__$1;
(statearr_48857_48886[(2)] = null);

(statearr_48857_48886[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48849 === (17))){
var inst_48830 = (state_48848[(2)]);
var state_48848__$1 = state_48848;
var statearr_48858_48887 = state_48848__$1;
(statearr_48858_48887[(2)] = inst_48830);

(statearr_48858_48887[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48849 === (3))){
var inst_48846 = (state_48848[(2)]);
var state_48848__$1 = state_48848;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48848__$1,inst_48846);
} else {
if((state_val_48849 === (12))){
var inst_48807 = (state_48848[(9)]);
var inst_48821 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_48807,opts);
var state_48848__$1 = state_48848;
if(cljs.core.truth_(inst_48821)){
var statearr_48859_48888 = state_48848__$1;
(statearr_48859_48888[(1)] = (15));

} else {
var statearr_48860_48889 = state_48848__$1;
(statearr_48860_48889[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48849 === (2))){
var state_48848__$1 = state_48848;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48848__$1,(4),ch);
} else {
if((state_val_48849 === (11))){
var inst_48808 = (state_48848[(8)]);
var inst_48813 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_48814 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_48808);
var inst_48815 = cljs.core.async.timeout.call(null,(1000));
var inst_48816 = [inst_48814,inst_48815];
var inst_48817 = (new cljs.core.PersistentVector(null,2,(5),inst_48813,inst_48816,null));
var state_48848__$1 = state_48848;
return cljs.core.async.ioc_alts_BANG_.call(null,state_48848__$1,(14),inst_48817);
} else {
if((state_val_48849 === (9))){
var inst_48808 = (state_48848[(8)]);
var inst_48834 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_48835 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_48808);
var inst_48836 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_48835);
var inst_48837 = [cljs.core.str("Not loading: "),cljs.core.str(inst_48836)].join('');
var inst_48838 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_48837);
var state_48848__$1 = (function (){var statearr_48861 = state_48848;
(statearr_48861[(10)] = inst_48834);

return statearr_48861;
})();
var statearr_48862_48890 = state_48848__$1;
(statearr_48862_48890[(2)] = inst_48838);

(statearr_48862_48890[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48849 === (5))){
var inst_48801 = (state_48848[(7)]);
var inst_48803 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_48804 = (new cljs.core.PersistentArrayMap(null,2,inst_48803,null));
var inst_48805 = (new cljs.core.PersistentHashSet(null,inst_48804,null));
var inst_48806 = figwheel.client.focus_msgs.call(null,inst_48805,inst_48801);
var inst_48807 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_48806);
var inst_48808 = cljs.core.first.call(null,inst_48806);
var inst_48809 = figwheel.client.autoload_QMARK_.call(null);
var state_48848__$1 = (function (){var statearr_48863 = state_48848;
(statearr_48863[(8)] = inst_48808);

(statearr_48863[(9)] = inst_48807);

return statearr_48863;
})();
if(cljs.core.truth_(inst_48809)){
var statearr_48864_48891 = state_48848__$1;
(statearr_48864_48891[(1)] = (8));

} else {
var statearr_48865_48892 = state_48848__$1;
(statearr_48865_48892[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48849 === (14))){
var inst_48819 = (state_48848[(2)]);
var state_48848__$1 = state_48848;
var statearr_48866_48893 = state_48848__$1;
(statearr_48866_48893[(2)] = inst_48819);

(statearr_48866_48893[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48849 === (16))){
var state_48848__$1 = state_48848;
var statearr_48867_48894 = state_48848__$1;
(statearr_48867_48894[(2)] = null);

(statearr_48867_48894[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48849 === (10))){
var inst_48840 = (state_48848[(2)]);
var state_48848__$1 = (function (){var statearr_48868 = state_48848;
(statearr_48868[(11)] = inst_48840);

return statearr_48868;
})();
var statearr_48869_48895 = state_48848__$1;
(statearr_48869_48895[(2)] = null);

(statearr_48869_48895[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48849 === (8))){
var inst_48807 = (state_48848[(9)]);
var inst_48811 = figwheel.client.reload_file_state_QMARK_.call(null,inst_48807,opts);
var state_48848__$1 = state_48848;
if(cljs.core.truth_(inst_48811)){
var statearr_48870_48896 = state_48848__$1;
(statearr_48870_48896[(1)] = (11));

} else {
var statearr_48871_48897 = state_48848__$1;
(statearr_48871_48897[(1)] = (12));

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
});})(c__43136__auto___48879,ch))
;
return ((function (switch__43115__auto__,c__43136__auto___48879,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__43116__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__43116__auto____0 = (function (){
var statearr_48875 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48875[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__43116__auto__);

(statearr_48875[(1)] = (1));

return statearr_48875;
});
var figwheel$client$file_reloader_plugin_$_state_machine__43116__auto____1 = (function (state_48848){
while(true){
var ret_value__43117__auto__ = (function (){try{while(true){
var result__43118__auto__ = switch__43115__auto__.call(null,state_48848);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43118__auto__;
}
break;
}
}catch (e48876){if((e48876 instanceof Object)){
var ex__43119__auto__ = e48876;
var statearr_48877_48898 = state_48848;
(statearr_48877_48898[(5)] = ex__43119__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48848);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48876;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48899 = state_48848;
state_48848 = G__48899;
continue;
} else {
return ret_value__43117__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__43116__auto__ = function(state_48848){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__43116__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__43116__auto____1.call(this,state_48848);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__43116__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__43116__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__43116__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__43116__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__43116__auto__;
})()
;})(switch__43115__auto__,c__43136__auto___48879,ch))
})();
var state__43138__auto__ = (function (){var statearr_48878 = f__43137__auto__.call(null);
(statearr_48878[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43136__auto___48879);

return statearr_48878;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43138__auto__);
});})(c__43136__auto___48879,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__48900_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__48900_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_48903 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_48903){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e48902){if((e48902 instanceof Error)){
var e = e48902;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_48903], null));
} else {
var e = e48902;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_48903))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__48904){
var map__48913 = p__48904;
var map__48913__$1 = ((((!((map__48913 == null)))?((((map__48913.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48913.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48913):map__48913);
var opts = map__48913__$1;
var build_id = cljs.core.get.call(null,map__48913__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__48913,map__48913__$1,opts,build_id){
return (function (p__48915){
var vec__48916 = p__48915;
var seq__48917 = cljs.core.seq.call(null,vec__48916);
var first__48918 = cljs.core.first.call(null,seq__48917);
var seq__48917__$1 = cljs.core.next.call(null,seq__48917);
var map__48919 = first__48918;
var map__48919__$1 = ((((!((map__48919 == null)))?((((map__48919.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48919.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48919):map__48919);
var msg = map__48919__$1;
var msg_name = cljs.core.get.call(null,map__48919__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__48917__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__48916,seq__48917,first__48918,seq__48917__$1,map__48919,map__48919__$1,msg,msg_name,_,map__48913,map__48913__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__48916,seq__48917,first__48918,seq__48917__$1,map__48919,map__48919__$1,msg,msg_name,_,map__48913,map__48913__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__48913,map__48913__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__48927){
var vec__48928 = p__48927;
var seq__48929 = cljs.core.seq.call(null,vec__48928);
var first__48930 = cljs.core.first.call(null,seq__48929);
var seq__48929__$1 = cljs.core.next.call(null,seq__48929);
var map__48931 = first__48930;
var map__48931__$1 = ((((!((map__48931 == null)))?((((map__48931.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48931.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48931):map__48931);
var msg = map__48931__$1;
var msg_name = cljs.core.get.call(null,map__48931__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__48929__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__48933){
var map__48945 = p__48933;
var map__48945__$1 = ((((!((map__48945 == null)))?((((map__48945.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48945.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48945):map__48945);
var on_compile_warning = cljs.core.get.call(null,map__48945__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__48945__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__48945,map__48945__$1,on_compile_warning,on_compile_fail){
return (function (p__48947){
var vec__48948 = p__48947;
var seq__48949 = cljs.core.seq.call(null,vec__48948);
var first__48950 = cljs.core.first.call(null,seq__48949);
var seq__48949__$1 = cljs.core.next.call(null,seq__48949);
var map__48951 = first__48950;
var map__48951__$1 = ((((!((map__48951 == null)))?((((map__48951.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48951.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48951):map__48951);
var msg = map__48951__$1;
var msg_name = cljs.core.get.call(null,map__48951__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__48949__$1;
var pred__48953 = cljs.core._EQ_;
var expr__48954 = msg_name;
if(cljs.core.truth_(pred__48953.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__48954))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__48953.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__48954))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__48945,map__48945__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__43136__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43136__auto__,msg_hist,msg_names,msg){
return (function (){
var f__43137__auto__ = (function (){var switch__43115__auto__ = ((function (c__43136__auto__,msg_hist,msg_names,msg){
return (function (state_49182){
var state_val_49183 = (state_49182[(1)]);
if((state_val_49183 === (7))){
var inst_49102 = (state_49182[(2)]);
var state_49182__$1 = state_49182;
if(cljs.core.truth_(inst_49102)){
var statearr_49184_49234 = state_49182__$1;
(statearr_49184_49234[(1)] = (8));

} else {
var statearr_49185_49235 = state_49182__$1;
(statearr_49185_49235[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49183 === (20))){
var inst_49176 = (state_49182[(2)]);
var state_49182__$1 = state_49182;
var statearr_49186_49236 = state_49182__$1;
(statearr_49186_49236[(2)] = inst_49176);

(statearr_49186_49236[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49183 === (27))){
var inst_49172 = (state_49182[(2)]);
var state_49182__$1 = state_49182;
var statearr_49187_49237 = state_49182__$1;
(statearr_49187_49237[(2)] = inst_49172);

(statearr_49187_49237[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49183 === (1))){
var inst_49095 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_49182__$1 = state_49182;
if(cljs.core.truth_(inst_49095)){
var statearr_49188_49238 = state_49182__$1;
(statearr_49188_49238[(1)] = (2));

} else {
var statearr_49189_49239 = state_49182__$1;
(statearr_49189_49239[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49183 === (24))){
var inst_49174 = (state_49182[(2)]);
var state_49182__$1 = state_49182;
var statearr_49190_49240 = state_49182__$1;
(statearr_49190_49240[(2)] = inst_49174);

(statearr_49190_49240[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49183 === (4))){
var inst_49180 = (state_49182[(2)]);
var state_49182__$1 = state_49182;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49182__$1,inst_49180);
} else {
if((state_val_49183 === (15))){
var inst_49178 = (state_49182[(2)]);
var state_49182__$1 = state_49182;
var statearr_49191_49241 = state_49182__$1;
(statearr_49191_49241[(2)] = inst_49178);

(statearr_49191_49241[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49183 === (21))){
var inst_49131 = (state_49182[(2)]);
var inst_49132 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_49133 = figwheel.client.auto_jump_to_error.call(null,opts,inst_49132);
var state_49182__$1 = (function (){var statearr_49192 = state_49182;
(statearr_49192[(7)] = inst_49131);

return statearr_49192;
})();
var statearr_49193_49242 = state_49182__$1;
(statearr_49193_49242[(2)] = inst_49133);

(statearr_49193_49242[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49183 === (31))){
var inst_49161 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_49182__$1 = state_49182;
if(cljs.core.truth_(inst_49161)){
var statearr_49194_49243 = state_49182__$1;
(statearr_49194_49243[(1)] = (34));

} else {
var statearr_49195_49244 = state_49182__$1;
(statearr_49195_49244[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49183 === (32))){
var inst_49170 = (state_49182[(2)]);
var state_49182__$1 = state_49182;
var statearr_49196_49245 = state_49182__$1;
(statearr_49196_49245[(2)] = inst_49170);

(statearr_49196_49245[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49183 === (33))){
var inst_49157 = (state_49182[(2)]);
var inst_49158 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_49159 = figwheel.client.auto_jump_to_error.call(null,opts,inst_49158);
var state_49182__$1 = (function (){var statearr_49197 = state_49182;
(statearr_49197[(8)] = inst_49157);

return statearr_49197;
})();
var statearr_49198_49246 = state_49182__$1;
(statearr_49198_49246[(2)] = inst_49159);

(statearr_49198_49246[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49183 === (13))){
var inst_49116 = figwheel.client.heads_up.clear.call(null);
var state_49182__$1 = state_49182;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49182__$1,(16),inst_49116);
} else {
if((state_val_49183 === (22))){
var inst_49137 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_49138 = figwheel.client.heads_up.append_warning_message.call(null,inst_49137);
var state_49182__$1 = state_49182;
var statearr_49199_49247 = state_49182__$1;
(statearr_49199_49247[(2)] = inst_49138);

(statearr_49199_49247[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49183 === (36))){
var inst_49168 = (state_49182[(2)]);
var state_49182__$1 = state_49182;
var statearr_49200_49248 = state_49182__$1;
(statearr_49200_49248[(2)] = inst_49168);

(statearr_49200_49248[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49183 === (29))){
var inst_49148 = (state_49182[(2)]);
var inst_49149 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_49150 = figwheel.client.auto_jump_to_error.call(null,opts,inst_49149);
var state_49182__$1 = (function (){var statearr_49201 = state_49182;
(statearr_49201[(9)] = inst_49148);

return statearr_49201;
})();
var statearr_49202_49249 = state_49182__$1;
(statearr_49202_49249[(2)] = inst_49150);

(statearr_49202_49249[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49183 === (6))){
var inst_49097 = (state_49182[(10)]);
var state_49182__$1 = state_49182;
var statearr_49203_49250 = state_49182__$1;
(statearr_49203_49250[(2)] = inst_49097);

(statearr_49203_49250[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49183 === (28))){
var inst_49144 = (state_49182[(2)]);
var inst_49145 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_49146 = figwheel.client.heads_up.display_warning.call(null,inst_49145);
var state_49182__$1 = (function (){var statearr_49204 = state_49182;
(statearr_49204[(11)] = inst_49144);

return statearr_49204;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49182__$1,(29),inst_49146);
} else {
if((state_val_49183 === (25))){
var inst_49142 = figwheel.client.heads_up.clear.call(null);
var state_49182__$1 = state_49182;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49182__$1,(28),inst_49142);
} else {
if((state_val_49183 === (34))){
var inst_49163 = figwheel.client.heads_up.flash_loaded.call(null);
var state_49182__$1 = state_49182;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49182__$1,(37),inst_49163);
} else {
if((state_val_49183 === (17))){
var inst_49122 = (state_49182[(2)]);
var inst_49123 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_49124 = figwheel.client.auto_jump_to_error.call(null,opts,inst_49123);
var state_49182__$1 = (function (){var statearr_49205 = state_49182;
(statearr_49205[(12)] = inst_49122);

return statearr_49205;
})();
var statearr_49206_49251 = state_49182__$1;
(statearr_49206_49251[(2)] = inst_49124);

(statearr_49206_49251[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49183 === (3))){
var inst_49114 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_49182__$1 = state_49182;
if(cljs.core.truth_(inst_49114)){
var statearr_49207_49252 = state_49182__$1;
(statearr_49207_49252[(1)] = (13));

} else {
var statearr_49208_49253 = state_49182__$1;
(statearr_49208_49253[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49183 === (12))){
var inst_49110 = (state_49182[(2)]);
var state_49182__$1 = state_49182;
var statearr_49209_49254 = state_49182__$1;
(statearr_49209_49254[(2)] = inst_49110);

(statearr_49209_49254[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49183 === (2))){
var inst_49097 = (state_49182[(10)]);
var inst_49097__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_49182__$1 = (function (){var statearr_49210 = state_49182;
(statearr_49210[(10)] = inst_49097__$1);

return statearr_49210;
})();
if(cljs.core.truth_(inst_49097__$1)){
var statearr_49211_49255 = state_49182__$1;
(statearr_49211_49255[(1)] = (5));

} else {
var statearr_49212_49256 = state_49182__$1;
(statearr_49212_49256[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49183 === (23))){
var inst_49140 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_49182__$1 = state_49182;
if(cljs.core.truth_(inst_49140)){
var statearr_49213_49257 = state_49182__$1;
(statearr_49213_49257[(1)] = (25));

} else {
var statearr_49214_49258 = state_49182__$1;
(statearr_49214_49258[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49183 === (35))){
var state_49182__$1 = state_49182;
var statearr_49215_49259 = state_49182__$1;
(statearr_49215_49259[(2)] = null);

(statearr_49215_49259[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49183 === (19))){
var inst_49135 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_49182__$1 = state_49182;
if(cljs.core.truth_(inst_49135)){
var statearr_49216_49260 = state_49182__$1;
(statearr_49216_49260[(1)] = (22));

} else {
var statearr_49217_49261 = state_49182__$1;
(statearr_49217_49261[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49183 === (11))){
var inst_49106 = (state_49182[(2)]);
var state_49182__$1 = state_49182;
var statearr_49218_49262 = state_49182__$1;
(statearr_49218_49262[(2)] = inst_49106);

(statearr_49218_49262[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49183 === (9))){
var inst_49108 = figwheel.client.heads_up.clear.call(null);
var state_49182__$1 = state_49182;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49182__$1,(12),inst_49108);
} else {
if((state_val_49183 === (5))){
var inst_49099 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_49182__$1 = state_49182;
var statearr_49219_49263 = state_49182__$1;
(statearr_49219_49263[(2)] = inst_49099);

(statearr_49219_49263[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49183 === (14))){
var inst_49126 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_49182__$1 = state_49182;
if(cljs.core.truth_(inst_49126)){
var statearr_49220_49264 = state_49182__$1;
(statearr_49220_49264[(1)] = (18));

} else {
var statearr_49221_49265 = state_49182__$1;
(statearr_49221_49265[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49183 === (26))){
var inst_49152 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_49182__$1 = state_49182;
if(cljs.core.truth_(inst_49152)){
var statearr_49222_49266 = state_49182__$1;
(statearr_49222_49266[(1)] = (30));

} else {
var statearr_49223_49267 = state_49182__$1;
(statearr_49223_49267[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49183 === (16))){
var inst_49118 = (state_49182[(2)]);
var inst_49119 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_49120 = figwheel.client.heads_up.display_exception.call(null,inst_49119);
var state_49182__$1 = (function (){var statearr_49224 = state_49182;
(statearr_49224[(13)] = inst_49118);

return statearr_49224;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49182__$1,(17),inst_49120);
} else {
if((state_val_49183 === (30))){
var inst_49154 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_49155 = figwheel.client.heads_up.display_warning.call(null,inst_49154);
var state_49182__$1 = state_49182;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49182__$1,(33),inst_49155);
} else {
if((state_val_49183 === (10))){
var inst_49112 = (state_49182[(2)]);
var state_49182__$1 = state_49182;
var statearr_49225_49268 = state_49182__$1;
(statearr_49225_49268[(2)] = inst_49112);

(statearr_49225_49268[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49183 === (18))){
var inst_49128 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_49129 = figwheel.client.heads_up.display_exception.call(null,inst_49128);
var state_49182__$1 = state_49182;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49182__$1,(21),inst_49129);
} else {
if((state_val_49183 === (37))){
var inst_49165 = (state_49182[(2)]);
var state_49182__$1 = state_49182;
var statearr_49226_49269 = state_49182__$1;
(statearr_49226_49269[(2)] = inst_49165);

(statearr_49226_49269[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49183 === (8))){
var inst_49104 = figwheel.client.heads_up.flash_loaded.call(null);
var state_49182__$1 = state_49182;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49182__$1,(11),inst_49104);
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
});})(c__43136__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__43115__auto__,c__43136__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__43116__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__43116__auto____0 = (function (){
var statearr_49230 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49230[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__43116__auto__);

(statearr_49230[(1)] = (1));

return statearr_49230;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__43116__auto____1 = (function (state_49182){
while(true){
var ret_value__43117__auto__ = (function (){try{while(true){
var result__43118__auto__ = switch__43115__auto__.call(null,state_49182);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43118__auto__;
}
break;
}
}catch (e49231){if((e49231 instanceof Object)){
var ex__43119__auto__ = e49231;
var statearr_49232_49270 = state_49182;
(statearr_49232_49270[(5)] = ex__43119__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49182);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49231;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49271 = state_49182;
state_49182 = G__49271;
continue;
} else {
return ret_value__43117__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__43116__auto__ = function(state_49182){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__43116__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__43116__auto____1.call(this,state_49182);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__43116__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__43116__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__43116__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__43116__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__43116__auto__;
})()
;})(switch__43115__auto__,c__43136__auto__,msg_hist,msg_names,msg))
})();
var state__43138__auto__ = (function (){var statearr_49233 = f__43137__auto__.call(null);
(statearr_49233[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43136__auto__);

return statearr_49233;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43138__auto__);
});})(c__43136__auto__,msg_hist,msg_names,msg))
);

return c__43136__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__43136__auto___49334 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43136__auto___49334,ch){
return (function (){
var f__43137__auto__ = (function (){var switch__43115__auto__ = ((function (c__43136__auto___49334,ch){
return (function (state_49317){
var state_val_49318 = (state_49317[(1)]);
if((state_val_49318 === (1))){
var state_49317__$1 = state_49317;
var statearr_49319_49335 = state_49317__$1;
(statearr_49319_49335[(2)] = null);

(statearr_49319_49335[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49318 === (2))){
var state_49317__$1 = state_49317;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49317__$1,(4),ch);
} else {
if((state_val_49318 === (3))){
var inst_49315 = (state_49317[(2)]);
var state_49317__$1 = state_49317;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49317__$1,inst_49315);
} else {
if((state_val_49318 === (4))){
var inst_49305 = (state_49317[(7)]);
var inst_49305__$1 = (state_49317[(2)]);
var state_49317__$1 = (function (){var statearr_49320 = state_49317;
(statearr_49320[(7)] = inst_49305__$1);

return statearr_49320;
})();
if(cljs.core.truth_(inst_49305__$1)){
var statearr_49321_49336 = state_49317__$1;
(statearr_49321_49336[(1)] = (5));

} else {
var statearr_49322_49337 = state_49317__$1;
(statearr_49322_49337[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49318 === (5))){
var inst_49305 = (state_49317[(7)]);
var inst_49307 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_49305);
var state_49317__$1 = state_49317;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49317__$1,(8),inst_49307);
} else {
if((state_val_49318 === (6))){
var state_49317__$1 = state_49317;
var statearr_49323_49338 = state_49317__$1;
(statearr_49323_49338[(2)] = null);

(statearr_49323_49338[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49318 === (7))){
var inst_49313 = (state_49317[(2)]);
var state_49317__$1 = state_49317;
var statearr_49324_49339 = state_49317__$1;
(statearr_49324_49339[(2)] = inst_49313);

(statearr_49324_49339[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49318 === (8))){
var inst_49309 = (state_49317[(2)]);
var state_49317__$1 = (function (){var statearr_49325 = state_49317;
(statearr_49325[(8)] = inst_49309);

return statearr_49325;
})();
var statearr_49326_49340 = state_49317__$1;
(statearr_49326_49340[(2)] = null);

(statearr_49326_49340[(1)] = (2));


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
});})(c__43136__auto___49334,ch))
;
return ((function (switch__43115__auto__,c__43136__auto___49334,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__43116__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__43116__auto____0 = (function (){
var statearr_49330 = [null,null,null,null,null,null,null,null,null];
(statearr_49330[(0)] = figwheel$client$heads_up_plugin_$_state_machine__43116__auto__);

(statearr_49330[(1)] = (1));

return statearr_49330;
});
var figwheel$client$heads_up_plugin_$_state_machine__43116__auto____1 = (function (state_49317){
while(true){
var ret_value__43117__auto__ = (function (){try{while(true){
var result__43118__auto__ = switch__43115__auto__.call(null,state_49317);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43118__auto__;
}
break;
}
}catch (e49331){if((e49331 instanceof Object)){
var ex__43119__auto__ = e49331;
var statearr_49332_49341 = state_49317;
(statearr_49332_49341[(5)] = ex__43119__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49317);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49331;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49342 = state_49317;
state_49317 = G__49342;
continue;
} else {
return ret_value__43117__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__43116__auto__ = function(state_49317){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__43116__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__43116__auto____1.call(this,state_49317);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__43116__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__43116__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__43116__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__43116__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__43116__auto__;
})()
;})(switch__43115__auto__,c__43136__auto___49334,ch))
})();
var state__43138__auto__ = (function (){var statearr_49333 = f__43137__auto__.call(null);
(statearr_49333[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43136__auto___49334);

return statearr_49333;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43138__auto__);
});})(c__43136__auto___49334,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__43136__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43136__auto__){
return (function (){
var f__43137__auto__ = (function (){var switch__43115__auto__ = ((function (c__43136__auto__){
return (function (state_49363){
var state_val_49364 = (state_49363[(1)]);
if((state_val_49364 === (1))){
var inst_49358 = cljs.core.async.timeout.call(null,(3000));
var state_49363__$1 = state_49363;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49363__$1,(2),inst_49358);
} else {
if((state_val_49364 === (2))){
var inst_49360 = (state_49363[(2)]);
var inst_49361 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_49363__$1 = (function (){var statearr_49365 = state_49363;
(statearr_49365[(7)] = inst_49360);

return statearr_49365;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49363__$1,inst_49361);
} else {
return null;
}
}
});})(c__43136__auto__))
;
return ((function (switch__43115__auto__,c__43136__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__43116__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__43116__auto____0 = (function (){
var statearr_49369 = [null,null,null,null,null,null,null,null];
(statearr_49369[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__43116__auto__);

(statearr_49369[(1)] = (1));

return statearr_49369;
});
var figwheel$client$enforce_project_plugin_$_state_machine__43116__auto____1 = (function (state_49363){
while(true){
var ret_value__43117__auto__ = (function (){try{while(true){
var result__43118__auto__ = switch__43115__auto__.call(null,state_49363);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43118__auto__;
}
break;
}
}catch (e49370){if((e49370 instanceof Object)){
var ex__43119__auto__ = e49370;
var statearr_49371_49373 = state_49363;
(statearr_49371_49373[(5)] = ex__43119__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49363);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49370;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49374 = state_49363;
state_49363 = G__49374;
continue;
} else {
return ret_value__43117__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__43116__auto__ = function(state_49363){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__43116__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__43116__auto____1.call(this,state_49363);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__43116__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__43116__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__43116__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__43116__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__43116__auto__;
})()
;})(switch__43115__auto__,c__43136__auto__))
})();
var state__43138__auto__ = (function (){var statearr_49372 = f__43137__auto__.call(null);
(statearr_49372[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43136__auto__);

return statearr_49372;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43138__auto__);
});})(c__43136__auto__))
);

return c__43136__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__43136__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43136__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__43137__auto__ = (function (){var switch__43115__auto__ = ((function (c__43136__auto__,figwheel_version,temp__4657__auto__){
return (function (state_49397){
var state_val_49398 = (state_49397[(1)]);
if((state_val_49398 === (1))){
var inst_49391 = cljs.core.async.timeout.call(null,(2000));
var state_49397__$1 = state_49397;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49397__$1,(2),inst_49391);
} else {
if((state_val_49398 === (2))){
var inst_49393 = (state_49397[(2)]);
var inst_49394 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_49395 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_49394);
var state_49397__$1 = (function (){var statearr_49399 = state_49397;
(statearr_49399[(7)] = inst_49393);

return statearr_49399;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49397__$1,inst_49395);
} else {
return null;
}
}
});})(c__43136__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__43115__auto__,c__43136__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__43116__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__43116__auto____0 = (function (){
var statearr_49403 = [null,null,null,null,null,null,null,null];
(statearr_49403[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__43116__auto__);

(statearr_49403[(1)] = (1));

return statearr_49403;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__43116__auto____1 = (function (state_49397){
while(true){
var ret_value__43117__auto__ = (function (){try{while(true){
var result__43118__auto__ = switch__43115__auto__.call(null,state_49397);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43118__auto__;
}
break;
}
}catch (e49404){if((e49404 instanceof Object)){
var ex__43119__auto__ = e49404;
var statearr_49405_49407 = state_49397;
(statearr_49405_49407[(5)] = ex__43119__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49397);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49404;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49408 = state_49397;
state_49397 = G__49408;
continue;
} else {
return ret_value__43117__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__43116__auto__ = function(state_49397){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__43116__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__43116__auto____1.call(this,state_49397);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__43116__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__43116__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__43116__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__43116__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__43116__auto__;
})()
;})(switch__43115__auto__,c__43136__auto__,figwheel_version,temp__4657__auto__))
})();
var state__43138__auto__ = (function (){var statearr_49406 = f__43137__auto__.call(null);
(statearr_49406[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43136__auto__);

return statearr_49406;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43138__auto__);
});})(c__43136__auto__,figwheel_version,temp__4657__auto__))
);

return c__43136__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__49409){
var map__49413 = p__49409;
var map__49413__$1 = ((((!((map__49413 == null)))?((((map__49413.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49413.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49413):map__49413);
var file = cljs.core.get.call(null,map__49413__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__49413__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__49413__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__49415 = "";
var G__49415__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__49415),cljs.core.str("file "),cljs.core.str(file)].join(''):G__49415);
var G__49415__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__49415__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__49415__$1);
if(cljs.core.truth_((function (){var and__38224__auto__ = line;
if(cljs.core.truth_(and__38224__auto__)){
return column;
} else {
return and__38224__auto__;
}
})())){
return [cljs.core.str(G__49415__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__49415__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__49416){
var map__49423 = p__49416;
var map__49423__$1 = ((((!((map__49423 == null)))?((((map__49423.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49423.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49423):map__49423);
var ed = map__49423__$1;
var formatted_exception = cljs.core.get.call(null,map__49423__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__49423__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__49423__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__49425_49429 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__49426_49430 = null;
var count__49427_49431 = (0);
var i__49428_49432 = (0);
while(true){
if((i__49428_49432 < count__49427_49431)){
var msg_49433 = cljs.core._nth.call(null,chunk__49426_49430,i__49428_49432);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_49433);

var G__49434 = seq__49425_49429;
var G__49435 = chunk__49426_49430;
var G__49436 = count__49427_49431;
var G__49437 = (i__49428_49432 + (1));
seq__49425_49429 = G__49434;
chunk__49426_49430 = G__49435;
count__49427_49431 = G__49436;
i__49428_49432 = G__49437;
continue;
} else {
var temp__4657__auto___49438 = cljs.core.seq.call(null,seq__49425_49429);
if(temp__4657__auto___49438){
var seq__49425_49439__$1 = temp__4657__auto___49438;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49425_49439__$1)){
var c__39050__auto___49440 = cljs.core.chunk_first.call(null,seq__49425_49439__$1);
var G__49441 = cljs.core.chunk_rest.call(null,seq__49425_49439__$1);
var G__49442 = c__39050__auto___49440;
var G__49443 = cljs.core.count.call(null,c__39050__auto___49440);
var G__49444 = (0);
seq__49425_49429 = G__49441;
chunk__49426_49430 = G__49442;
count__49427_49431 = G__49443;
i__49428_49432 = G__49444;
continue;
} else {
var msg_49445 = cljs.core.first.call(null,seq__49425_49439__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_49445);

var G__49446 = cljs.core.next.call(null,seq__49425_49439__$1);
var G__49447 = null;
var G__49448 = (0);
var G__49449 = (0);
seq__49425_49429 = G__49446;
chunk__49426_49430 = G__49447;
count__49427_49431 = G__49448;
i__49428_49432 = G__49449;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on "),cljs.core.str(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__49450){
var map__49453 = p__49450;
var map__49453__$1 = ((((!((map__49453 == null)))?((((map__49453.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49453.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49453):map__49453);
var w = map__49453__$1;
var message = cljs.core.get.call(null,map__49453__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str(" in "),cljs.core.str(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"target/cljsbuild/public/js/out/figwheel/client.cljs",33,1,336,336,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"target/cljsbuild/public/js/out/figwheel/client.cljs",30,1,328,328,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__38224__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__38224__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__38224__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__49465 = cljs.core.seq.call(null,plugins);
var chunk__49466 = null;
var count__49467 = (0);
var i__49468 = (0);
while(true){
if((i__49468 < count__49467)){
var vec__49469 = cljs.core._nth.call(null,chunk__49466,i__49468);
var k = cljs.core.nth.call(null,vec__49469,(0),null);
var plugin = cljs.core.nth.call(null,vec__49469,(1),null);
if(cljs.core.truth_(plugin)){
var pl_49475 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__49465,chunk__49466,count__49467,i__49468,pl_49475,vec__49469,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_49475.call(null,msg_hist);
});})(seq__49465,chunk__49466,count__49467,i__49468,pl_49475,vec__49469,k,plugin))
);
} else {
}

var G__49476 = seq__49465;
var G__49477 = chunk__49466;
var G__49478 = count__49467;
var G__49479 = (i__49468 + (1));
seq__49465 = G__49476;
chunk__49466 = G__49477;
count__49467 = G__49478;
i__49468 = G__49479;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__49465);
if(temp__4657__auto__){
var seq__49465__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49465__$1)){
var c__39050__auto__ = cljs.core.chunk_first.call(null,seq__49465__$1);
var G__49480 = cljs.core.chunk_rest.call(null,seq__49465__$1);
var G__49481 = c__39050__auto__;
var G__49482 = cljs.core.count.call(null,c__39050__auto__);
var G__49483 = (0);
seq__49465 = G__49480;
chunk__49466 = G__49481;
count__49467 = G__49482;
i__49468 = G__49483;
continue;
} else {
var vec__49472 = cljs.core.first.call(null,seq__49465__$1);
var k = cljs.core.nth.call(null,vec__49472,(0),null);
var plugin = cljs.core.nth.call(null,vec__49472,(1),null);
if(cljs.core.truth_(plugin)){
var pl_49484 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__49465,chunk__49466,count__49467,i__49468,pl_49484,vec__49472,k,plugin,seq__49465__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_49484.call(null,msg_hist);
});})(seq__49465,chunk__49466,count__49467,i__49468,pl_49484,vec__49472,k,plugin,seq__49465__$1,temp__4657__auto__))
);
} else {
}

var G__49485 = cljs.core.next.call(null,seq__49465__$1);
var G__49486 = null;
var G__49487 = (0);
var G__49488 = (0);
seq__49465 = G__49485;
chunk__49466 = G__49486;
count__49467 = G__49487;
i__49468 = G__49488;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args49489 = [];
var len__39344__auto___49496 = arguments.length;
var i__39345__auto___49497 = (0);
while(true){
if((i__39345__auto___49497 < len__39344__auto___49496)){
args49489.push((arguments[i__39345__auto___49497]));

var G__49498 = (i__39345__auto___49497 + (1));
i__39345__auto___49497 = G__49498;
continue;
} else {
}
break;
}

var G__49491 = args49489.length;
switch (G__49491) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49489.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__49492_49500 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__49493_49501 = null;
var count__49494_49502 = (0);
var i__49495_49503 = (0);
while(true){
if((i__49495_49503 < count__49494_49502)){
var msg_49504 = cljs.core._nth.call(null,chunk__49493_49501,i__49495_49503);
figwheel.client.socket.handle_incoming_message.call(null,msg_49504);

var G__49505 = seq__49492_49500;
var G__49506 = chunk__49493_49501;
var G__49507 = count__49494_49502;
var G__49508 = (i__49495_49503 + (1));
seq__49492_49500 = G__49505;
chunk__49493_49501 = G__49506;
count__49494_49502 = G__49507;
i__49495_49503 = G__49508;
continue;
} else {
var temp__4657__auto___49509 = cljs.core.seq.call(null,seq__49492_49500);
if(temp__4657__auto___49509){
var seq__49492_49510__$1 = temp__4657__auto___49509;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49492_49510__$1)){
var c__39050__auto___49511 = cljs.core.chunk_first.call(null,seq__49492_49510__$1);
var G__49512 = cljs.core.chunk_rest.call(null,seq__49492_49510__$1);
var G__49513 = c__39050__auto___49511;
var G__49514 = cljs.core.count.call(null,c__39050__auto___49511);
var G__49515 = (0);
seq__49492_49500 = G__49512;
chunk__49493_49501 = G__49513;
count__49494_49502 = G__49514;
i__49495_49503 = G__49515;
continue;
} else {
var msg_49516 = cljs.core.first.call(null,seq__49492_49510__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_49516);

var G__49517 = cljs.core.next.call(null,seq__49492_49510__$1);
var G__49518 = null;
var G__49519 = (0);
var G__49520 = (0);
seq__49492_49500 = G__49517;
chunk__49493_49501 = G__49518;
count__49494_49502 = G__49519;
i__49495_49503 = G__49520;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__39351__auto__ = [];
var len__39344__auto___49525 = arguments.length;
var i__39345__auto___49526 = (0);
while(true){
if((i__39345__auto___49526 < len__39344__auto___49525)){
args__39351__auto__.push((arguments[i__39345__auto___49526]));

var G__49527 = (i__39345__auto___49526 + (1));
i__39345__auto___49526 = G__49527;
continue;
} else {
}
break;
}

var argseq__39352__auto__ = ((((0) < args__39351__auto__.length))?(new cljs.core.IndexedSeq(args__39351__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__39352__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__49522){
var map__49523 = p__49522;
var map__49523__$1 = ((((!((map__49523 == null)))?((((map__49523.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49523.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49523):map__49523);
var opts = map__49523__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq49521){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49521));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e49529){if((e49529 instanceof Error)){
var e = e49529;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e49529;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__49533){
var map__49534 = p__49533;
var map__49534__$1 = ((((!((map__49534 == null)))?((((map__49534.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49534.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49534):map__49534);
var msg_name = cljs.core.get.call(null,map__49534__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map