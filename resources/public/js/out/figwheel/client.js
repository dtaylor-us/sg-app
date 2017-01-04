// Compiled by ClojureScript 1.9.229 {}
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
var args46450 = [];
var len__37853__auto___46453 = arguments.length;
var i__37854__auto___46454 = (0);
while(true){
if((i__37854__auto___46454 < len__37853__auto___46453)){
args46450.push((arguments[i__37854__auto___46454]));

var G__46455 = (i__37854__auto___46454 + (1));
i__37854__auto___46454 = G__46455;
continue;
} else {
}
break;
}

var G__46452 = args46450.length;
switch (G__46452) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46450.length)].join('')));

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
var args__37860__auto__ = [];
var len__37853__auto___46458 = arguments.length;
var i__37854__auto___46459 = (0);
while(true){
if((i__37854__auto___46459 < len__37853__auto___46458)){
args__37860__auto__.push((arguments[i__37854__auto___46459]));

var G__46460 = (i__37854__auto___46459 + (1));
i__37854__auto___46459 = G__46460;
continue;
} else {
}
break;
}

var argseq__37861__auto__ = ((((0) < args__37860__auto__.length))?(new cljs.core.IndexedSeq(args__37860__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__37861__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq46457){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46457));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__37860__auto__ = [];
var len__37853__auto___46462 = arguments.length;
var i__37854__auto___46463 = (0);
while(true){
if((i__37854__auto___46463 < len__37853__auto___46462)){
args__37860__auto__.push((arguments[i__37854__auto___46463]));

var G__46464 = (i__37854__auto___46463 + (1));
i__37854__auto___46463 = G__46464;
continue;
} else {
}
break;
}

var argseq__37861__auto__ = ((((0) < args__37860__auto__.length))?(new cljs.core.IndexedSeq(args__37860__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__37861__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq46461){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46461));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__46465 = cljs.core._EQ_;
var expr__46466 = (function (){var or__36778__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e46469){if((e46469 instanceof Error)){
var e = e46469;
return false;
} else {
throw e46469;

}
}})();
if(cljs.core.truth_(or__36778__auto__)){
return or__36778__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__46465.call(null,"true",expr__46466))){
return true;
} else {
if(cljs.core.truth_(pred__46465.call(null,"false",expr__46466))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__46466)].join('')));
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
}catch (e46471){if((e46471 instanceof Error)){
var e = e46471;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e46471;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__46472){
var map__46475 = p__46472;
var map__46475__$1 = ((((!((map__46475 == null)))?((((map__46475.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46475.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46475):map__46475);
var message = cljs.core.get.call(null,map__46475__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__46475__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__36778__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__36778__auto__)){
return or__36778__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__36766__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__36766__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__36766__auto__;
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
var c__38950__auto___46637 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38950__auto___46637,ch){
return (function (){
var f__38951__auto__ = (function (){var switch__38796__auto__ = ((function (c__38950__auto___46637,ch){
return (function (state_46606){
var state_val_46607 = (state_46606[(1)]);
if((state_val_46607 === (7))){
var inst_46602 = (state_46606[(2)]);
var state_46606__$1 = state_46606;
var statearr_46608_46638 = state_46606__$1;
(statearr_46608_46638[(2)] = inst_46602);

(statearr_46608_46638[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46607 === (1))){
var state_46606__$1 = state_46606;
var statearr_46609_46639 = state_46606__$1;
(statearr_46609_46639[(2)] = null);

(statearr_46609_46639[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46607 === (4))){
var inst_46559 = (state_46606[(7)]);
var inst_46559__$1 = (state_46606[(2)]);
var state_46606__$1 = (function (){var statearr_46610 = state_46606;
(statearr_46610[(7)] = inst_46559__$1);

return statearr_46610;
})();
if(cljs.core.truth_(inst_46559__$1)){
var statearr_46611_46640 = state_46606__$1;
(statearr_46611_46640[(1)] = (5));

} else {
var statearr_46612_46641 = state_46606__$1;
(statearr_46612_46641[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46607 === (15))){
var inst_46566 = (state_46606[(8)]);
var inst_46581 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_46566);
var inst_46582 = cljs.core.first.call(null,inst_46581);
var inst_46583 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_46582);
var inst_46584 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_46583)].join('');
var inst_46585 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_46584);
var state_46606__$1 = state_46606;
var statearr_46613_46642 = state_46606__$1;
(statearr_46613_46642[(2)] = inst_46585);

(statearr_46613_46642[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46607 === (13))){
var inst_46590 = (state_46606[(2)]);
var state_46606__$1 = state_46606;
var statearr_46614_46643 = state_46606__$1;
(statearr_46614_46643[(2)] = inst_46590);

(statearr_46614_46643[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46607 === (6))){
var state_46606__$1 = state_46606;
var statearr_46615_46644 = state_46606__$1;
(statearr_46615_46644[(2)] = null);

(statearr_46615_46644[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46607 === (17))){
var inst_46588 = (state_46606[(2)]);
var state_46606__$1 = state_46606;
var statearr_46616_46645 = state_46606__$1;
(statearr_46616_46645[(2)] = inst_46588);

(statearr_46616_46645[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46607 === (3))){
var inst_46604 = (state_46606[(2)]);
var state_46606__$1 = state_46606;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46606__$1,inst_46604);
} else {
if((state_val_46607 === (12))){
var inst_46565 = (state_46606[(9)]);
var inst_46579 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_46565,opts);
var state_46606__$1 = state_46606;
if(cljs.core.truth_(inst_46579)){
var statearr_46617_46646 = state_46606__$1;
(statearr_46617_46646[(1)] = (15));

} else {
var statearr_46618_46647 = state_46606__$1;
(statearr_46618_46647[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46607 === (2))){
var state_46606__$1 = state_46606;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46606__$1,(4),ch);
} else {
if((state_val_46607 === (11))){
var inst_46566 = (state_46606[(8)]);
var inst_46571 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_46572 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_46566);
var inst_46573 = cljs.core.async.timeout.call(null,(1000));
var inst_46574 = [inst_46572,inst_46573];
var inst_46575 = (new cljs.core.PersistentVector(null,2,(5),inst_46571,inst_46574,null));
var state_46606__$1 = state_46606;
return cljs.core.async.ioc_alts_BANG_.call(null,state_46606__$1,(14),inst_46575);
} else {
if((state_val_46607 === (9))){
var inst_46566 = (state_46606[(8)]);
var inst_46592 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_46593 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_46566);
var inst_46594 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_46593);
var inst_46595 = [cljs.core.str("Not loading: "),cljs.core.str(inst_46594)].join('');
var inst_46596 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_46595);
var state_46606__$1 = (function (){var statearr_46619 = state_46606;
(statearr_46619[(10)] = inst_46592);

return statearr_46619;
})();
var statearr_46620_46648 = state_46606__$1;
(statearr_46620_46648[(2)] = inst_46596);

(statearr_46620_46648[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46607 === (5))){
var inst_46559 = (state_46606[(7)]);
var inst_46561 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_46562 = (new cljs.core.PersistentArrayMap(null,2,inst_46561,null));
var inst_46563 = (new cljs.core.PersistentHashSet(null,inst_46562,null));
var inst_46564 = figwheel.client.focus_msgs.call(null,inst_46563,inst_46559);
var inst_46565 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_46564);
var inst_46566 = cljs.core.first.call(null,inst_46564);
var inst_46567 = figwheel.client.autoload_QMARK_.call(null);
var state_46606__$1 = (function (){var statearr_46621 = state_46606;
(statearr_46621[(9)] = inst_46565);

(statearr_46621[(8)] = inst_46566);

return statearr_46621;
})();
if(cljs.core.truth_(inst_46567)){
var statearr_46622_46649 = state_46606__$1;
(statearr_46622_46649[(1)] = (8));

} else {
var statearr_46623_46650 = state_46606__$1;
(statearr_46623_46650[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46607 === (14))){
var inst_46577 = (state_46606[(2)]);
var state_46606__$1 = state_46606;
var statearr_46624_46651 = state_46606__$1;
(statearr_46624_46651[(2)] = inst_46577);

(statearr_46624_46651[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46607 === (16))){
var state_46606__$1 = state_46606;
var statearr_46625_46652 = state_46606__$1;
(statearr_46625_46652[(2)] = null);

(statearr_46625_46652[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46607 === (10))){
var inst_46598 = (state_46606[(2)]);
var state_46606__$1 = (function (){var statearr_46626 = state_46606;
(statearr_46626[(11)] = inst_46598);

return statearr_46626;
})();
var statearr_46627_46653 = state_46606__$1;
(statearr_46627_46653[(2)] = null);

(statearr_46627_46653[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46607 === (8))){
var inst_46565 = (state_46606[(9)]);
var inst_46569 = figwheel.client.reload_file_state_QMARK_.call(null,inst_46565,opts);
var state_46606__$1 = state_46606;
if(cljs.core.truth_(inst_46569)){
var statearr_46628_46654 = state_46606__$1;
(statearr_46628_46654[(1)] = (11));

} else {
var statearr_46629_46655 = state_46606__$1;
(statearr_46629_46655[(1)] = (12));

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
});})(c__38950__auto___46637,ch))
;
return ((function (switch__38796__auto__,c__38950__auto___46637,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__38797__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__38797__auto____0 = (function (){
var statearr_46633 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46633[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__38797__auto__);

(statearr_46633[(1)] = (1));

return statearr_46633;
});
var figwheel$client$file_reloader_plugin_$_state_machine__38797__auto____1 = (function (state_46606){
while(true){
var ret_value__38798__auto__ = (function (){try{while(true){
var result__38799__auto__ = switch__38796__auto__.call(null,state_46606);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38799__auto__;
}
break;
}
}catch (e46634){if((e46634 instanceof Object)){
var ex__38800__auto__ = e46634;
var statearr_46635_46656 = state_46606;
(statearr_46635_46656[(5)] = ex__38800__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46606);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46634;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46657 = state_46606;
state_46606 = G__46657;
continue;
} else {
return ret_value__38798__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__38797__auto__ = function(state_46606){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__38797__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__38797__auto____1.call(this,state_46606);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__38797__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__38797__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__38797__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__38797__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__38797__auto__;
})()
;})(switch__38796__auto__,c__38950__auto___46637,ch))
})();
var state__38952__auto__ = (function (){var statearr_46636 = f__38951__auto__.call(null);
(statearr_46636[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38950__auto___46637);

return statearr_46636;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38952__auto__);
});})(c__38950__auto___46637,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__46658_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__46658_SHARP_));
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
var base_path_46661 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_46661){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e46660){if((e46660 instanceof Error)){
var e = e46660;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_46661], null));
} else {
var e = e46660;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_46661))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__46662){
var map__46671 = p__46662;
var map__46671__$1 = ((((!((map__46671 == null)))?((((map__46671.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46671.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46671):map__46671);
var opts = map__46671__$1;
var build_id = cljs.core.get.call(null,map__46671__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__46671,map__46671__$1,opts,build_id){
return (function (p__46673){
var vec__46674 = p__46673;
var seq__46675 = cljs.core.seq.call(null,vec__46674);
var first__46676 = cljs.core.first.call(null,seq__46675);
var seq__46675__$1 = cljs.core.next.call(null,seq__46675);
var map__46677 = first__46676;
var map__46677__$1 = ((((!((map__46677 == null)))?((((map__46677.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46677.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46677):map__46677);
var msg = map__46677__$1;
var msg_name = cljs.core.get.call(null,map__46677__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__46675__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__46674,seq__46675,first__46676,seq__46675__$1,map__46677,map__46677__$1,msg,msg_name,_,map__46671,map__46671__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__46674,seq__46675,first__46676,seq__46675__$1,map__46677,map__46677__$1,msg,msg_name,_,map__46671,map__46671__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__46671,map__46671__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__46685){
var vec__46686 = p__46685;
var seq__46687 = cljs.core.seq.call(null,vec__46686);
var first__46688 = cljs.core.first.call(null,seq__46687);
var seq__46687__$1 = cljs.core.next.call(null,seq__46687);
var map__46689 = first__46688;
var map__46689__$1 = ((((!((map__46689 == null)))?((((map__46689.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46689.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46689):map__46689);
var msg = map__46689__$1;
var msg_name = cljs.core.get.call(null,map__46689__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__46687__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__46691){
var map__46703 = p__46691;
var map__46703__$1 = ((((!((map__46703 == null)))?((((map__46703.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46703.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46703):map__46703);
var on_compile_warning = cljs.core.get.call(null,map__46703__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__46703__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__46703,map__46703__$1,on_compile_warning,on_compile_fail){
return (function (p__46705){
var vec__46706 = p__46705;
var seq__46707 = cljs.core.seq.call(null,vec__46706);
var first__46708 = cljs.core.first.call(null,seq__46707);
var seq__46707__$1 = cljs.core.next.call(null,seq__46707);
var map__46709 = first__46708;
var map__46709__$1 = ((((!((map__46709 == null)))?((((map__46709.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46709.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46709):map__46709);
var msg = map__46709__$1;
var msg_name = cljs.core.get.call(null,map__46709__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__46707__$1;
var pred__46711 = cljs.core._EQ_;
var expr__46712 = msg_name;
if(cljs.core.truth_(pred__46711.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__46712))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__46711.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__46712))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__46703,map__46703__$1,on_compile_warning,on_compile_fail))
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
var c__38950__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38950__auto__,msg_hist,msg_names,msg){
return (function (){
var f__38951__auto__ = (function (){var switch__38796__auto__ = ((function (c__38950__auto__,msg_hist,msg_names,msg){
return (function (state_46940){
var state_val_46941 = (state_46940[(1)]);
if((state_val_46941 === (7))){
var inst_46860 = (state_46940[(2)]);
var state_46940__$1 = state_46940;
if(cljs.core.truth_(inst_46860)){
var statearr_46942_46992 = state_46940__$1;
(statearr_46942_46992[(1)] = (8));

} else {
var statearr_46943_46993 = state_46940__$1;
(statearr_46943_46993[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46941 === (20))){
var inst_46934 = (state_46940[(2)]);
var state_46940__$1 = state_46940;
var statearr_46944_46994 = state_46940__$1;
(statearr_46944_46994[(2)] = inst_46934);

(statearr_46944_46994[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46941 === (27))){
var inst_46930 = (state_46940[(2)]);
var state_46940__$1 = state_46940;
var statearr_46945_46995 = state_46940__$1;
(statearr_46945_46995[(2)] = inst_46930);

(statearr_46945_46995[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46941 === (1))){
var inst_46853 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_46940__$1 = state_46940;
if(cljs.core.truth_(inst_46853)){
var statearr_46946_46996 = state_46940__$1;
(statearr_46946_46996[(1)] = (2));

} else {
var statearr_46947_46997 = state_46940__$1;
(statearr_46947_46997[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46941 === (24))){
var inst_46932 = (state_46940[(2)]);
var state_46940__$1 = state_46940;
var statearr_46948_46998 = state_46940__$1;
(statearr_46948_46998[(2)] = inst_46932);

(statearr_46948_46998[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46941 === (4))){
var inst_46938 = (state_46940[(2)]);
var state_46940__$1 = state_46940;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46940__$1,inst_46938);
} else {
if((state_val_46941 === (15))){
var inst_46936 = (state_46940[(2)]);
var state_46940__$1 = state_46940;
var statearr_46949_46999 = state_46940__$1;
(statearr_46949_46999[(2)] = inst_46936);

(statearr_46949_46999[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46941 === (21))){
var inst_46889 = (state_46940[(2)]);
var inst_46890 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_46891 = figwheel.client.auto_jump_to_error.call(null,opts,inst_46890);
var state_46940__$1 = (function (){var statearr_46950 = state_46940;
(statearr_46950[(7)] = inst_46889);

return statearr_46950;
})();
var statearr_46951_47000 = state_46940__$1;
(statearr_46951_47000[(2)] = inst_46891);

(statearr_46951_47000[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46941 === (31))){
var inst_46919 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_46940__$1 = state_46940;
if(cljs.core.truth_(inst_46919)){
var statearr_46952_47001 = state_46940__$1;
(statearr_46952_47001[(1)] = (34));

} else {
var statearr_46953_47002 = state_46940__$1;
(statearr_46953_47002[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46941 === (32))){
var inst_46928 = (state_46940[(2)]);
var state_46940__$1 = state_46940;
var statearr_46954_47003 = state_46940__$1;
(statearr_46954_47003[(2)] = inst_46928);

(statearr_46954_47003[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46941 === (33))){
var inst_46915 = (state_46940[(2)]);
var inst_46916 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_46917 = figwheel.client.auto_jump_to_error.call(null,opts,inst_46916);
var state_46940__$1 = (function (){var statearr_46955 = state_46940;
(statearr_46955[(8)] = inst_46915);

return statearr_46955;
})();
var statearr_46956_47004 = state_46940__$1;
(statearr_46956_47004[(2)] = inst_46917);

(statearr_46956_47004[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46941 === (13))){
var inst_46874 = figwheel.client.heads_up.clear.call(null);
var state_46940__$1 = state_46940;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46940__$1,(16),inst_46874);
} else {
if((state_val_46941 === (22))){
var inst_46895 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_46896 = figwheel.client.heads_up.append_warning_message.call(null,inst_46895);
var state_46940__$1 = state_46940;
var statearr_46957_47005 = state_46940__$1;
(statearr_46957_47005[(2)] = inst_46896);

(statearr_46957_47005[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46941 === (36))){
var inst_46926 = (state_46940[(2)]);
var state_46940__$1 = state_46940;
var statearr_46958_47006 = state_46940__$1;
(statearr_46958_47006[(2)] = inst_46926);

(statearr_46958_47006[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46941 === (29))){
var inst_46906 = (state_46940[(2)]);
var inst_46907 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_46908 = figwheel.client.auto_jump_to_error.call(null,opts,inst_46907);
var state_46940__$1 = (function (){var statearr_46959 = state_46940;
(statearr_46959[(9)] = inst_46906);

return statearr_46959;
})();
var statearr_46960_47007 = state_46940__$1;
(statearr_46960_47007[(2)] = inst_46908);

(statearr_46960_47007[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46941 === (6))){
var inst_46855 = (state_46940[(10)]);
var state_46940__$1 = state_46940;
var statearr_46961_47008 = state_46940__$1;
(statearr_46961_47008[(2)] = inst_46855);

(statearr_46961_47008[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46941 === (28))){
var inst_46902 = (state_46940[(2)]);
var inst_46903 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_46904 = figwheel.client.heads_up.display_warning.call(null,inst_46903);
var state_46940__$1 = (function (){var statearr_46962 = state_46940;
(statearr_46962[(11)] = inst_46902);

return statearr_46962;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46940__$1,(29),inst_46904);
} else {
if((state_val_46941 === (25))){
var inst_46900 = figwheel.client.heads_up.clear.call(null);
var state_46940__$1 = state_46940;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46940__$1,(28),inst_46900);
} else {
if((state_val_46941 === (34))){
var inst_46921 = figwheel.client.heads_up.flash_loaded.call(null);
var state_46940__$1 = state_46940;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46940__$1,(37),inst_46921);
} else {
if((state_val_46941 === (17))){
var inst_46880 = (state_46940[(2)]);
var inst_46881 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_46882 = figwheel.client.auto_jump_to_error.call(null,opts,inst_46881);
var state_46940__$1 = (function (){var statearr_46963 = state_46940;
(statearr_46963[(12)] = inst_46880);

return statearr_46963;
})();
var statearr_46964_47009 = state_46940__$1;
(statearr_46964_47009[(2)] = inst_46882);

(statearr_46964_47009[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46941 === (3))){
var inst_46872 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_46940__$1 = state_46940;
if(cljs.core.truth_(inst_46872)){
var statearr_46965_47010 = state_46940__$1;
(statearr_46965_47010[(1)] = (13));

} else {
var statearr_46966_47011 = state_46940__$1;
(statearr_46966_47011[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46941 === (12))){
var inst_46868 = (state_46940[(2)]);
var state_46940__$1 = state_46940;
var statearr_46967_47012 = state_46940__$1;
(statearr_46967_47012[(2)] = inst_46868);

(statearr_46967_47012[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46941 === (2))){
var inst_46855 = (state_46940[(10)]);
var inst_46855__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_46940__$1 = (function (){var statearr_46968 = state_46940;
(statearr_46968[(10)] = inst_46855__$1);

return statearr_46968;
})();
if(cljs.core.truth_(inst_46855__$1)){
var statearr_46969_47013 = state_46940__$1;
(statearr_46969_47013[(1)] = (5));

} else {
var statearr_46970_47014 = state_46940__$1;
(statearr_46970_47014[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46941 === (23))){
var inst_46898 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_46940__$1 = state_46940;
if(cljs.core.truth_(inst_46898)){
var statearr_46971_47015 = state_46940__$1;
(statearr_46971_47015[(1)] = (25));

} else {
var statearr_46972_47016 = state_46940__$1;
(statearr_46972_47016[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46941 === (35))){
var state_46940__$1 = state_46940;
var statearr_46973_47017 = state_46940__$1;
(statearr_46973_47017[(2)] = null);

(statearr_46973_47017[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46941 === (19))){
var inst_46893 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_46940__$1 = state_46940;
if(cljs.core.truth_(inst_46893)){
var statearr_46974_47018 = state_46940__$1;
(statearr_46974_47018[(1)] = (22));

} else {
var statearr_46975_47019 = state_46940__$1;
(statearr_46975_47019[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46941 === (11))){
var inst_46864 = (state_46940[(2)]);
var state_46940__$1 = state_46940;
var statearr_46976_47020 = state_46940__$1;
(statearr_46976_47020[(2)] = inst_46864);

(statearr_46976_47020[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46941 === (9))){
var inst_46866 = figwheel.client.heads_up.clear.call(null);
var state_46940__$1 = state_46940;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46940__$1,(12),inst_46866);
} else {
if((state_val_46941 === (5))){
var inst_46857 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_46940__$1 = state_46940;
var statearr_46977_47021 = state_46940__$1;
(statearr_46977_47021[(2)] = inst_46857);

(statearr_46977_47021[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46941 === (14))){
var inst_46884 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_46940__$1 = state_46940;
if(cljs.core.truth_(inst_46884)){
var statearr_46978_47022 = state_46940__$1;
(statearr_46978_47022[(1)] = (18));

} else {
var statearr_46979_47023 = state_46940__$1;
(statearr_46979_47023[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46941 === (26))){
var inst_46910 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_46940__$1 = state_46940;
if(cljs.core.truth_(inst_46910)){
var statearr_46980_47024 = state_46940__$1;
(statearr_46980_47024[(1)] = (30));

} else {
var statearr_46981_47025 = state_46940__$1;
(statearr_46981_47025[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46941 === (16))){
var inst_46876 = (state_46940[(2)]);
var inst_46877 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_46878 = figwheel.client.heads_up.display_exception.call(null,inst_46877);
var state_46940__$1 = (function (){var statearr_46982 = state_46940;
(statearr_46982[(13)] = inst_46876);

return statearr_46982;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46940__$1,(17),inst_46878);
} else {
if((state_val_46941 === (30))){
var inst_46912 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_46913 = figwheel.client.heads_up.display_warning.call(null,inst_46912);
var state_46940__$1 = state_46940;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46940__$1,(33),inst_46913);
} else {
if((state_val_46941 === (10))){
var inst_46870 = (state_46940[(2)]);
var state_46940__$1 = state_46940;
var statearr_46983_47026 = state_46940__$1;
(statearr_46983_47026[(2)] = inst_46870);

(statearr_46983_47026[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46941 === (18))){
var inst_46886 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_46887 = figwheel.client.heads_up.display_exception.call(null,inst_46886);
var state_46940__$1 = state_46940;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46940__$1,(21),inst_46887);
} else {
if((state_val_46941 === (37))){
var inst_46923 = (state_46940[(2)]);
var state_46940__$1 = state_46940;
var statearr_46984_47027 = state_46940__$1;
(statearr_46984_47027[(2)] = inst_46923);

(statearr_46984_47027[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46941 === (8))){
var inst_46862 = figwheel.client.heads_up.flash_loaded.call(null);
var state_46940__$1 = state_46940;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46940__$1,(11),inst_46862);
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
});})(c__38950__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__38796__auto__,c__38950__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__38797__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__38797__auto____0 = (function (){
var statearr_46988 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46988[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__38797__auto__);

(statearr_46988[(1)] = (1));

return statearr_46988;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__38797__auto____1 = (function (state_46940){
while(true){
var ret_value__38798__auto__ = (function (){try{while(true){
var result__38799__auto__ = switch__38796__auto__.call(null,state_46940);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38799__auto__;
}
break;
}
}catch (e46989){if((e46989 instanceof Object)){
var ex__38800__auto__ = e46989;
var statearr_46990_47028 = state_46940;
(statearr_46990_47028[(5)] = ex__38800__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46940);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46989;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47029 = state_46940;
state_46940 = G__47029;
continue;
} else {
return ret_value__38798__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__38797__auto__ = function(state_46940){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__38797__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__38797__auto____1.call(this,state_46940);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__38797__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__38797__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__38797__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__38797__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__38797__auto__;
})()
;})(switch__38796__auto__,c__38950__auto__,msg_hist,msg_names,msg))
})();
var state__38952__auto__ = (function (){var statearr_46991 = f__38951__auto__.call(null);
(statearr_46991[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38950__auto__);

return statearr_46991;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38952__auto__);
});})(c__38950__auto__,msg_hist,msg_names,msg))
);

return c__38950__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__38950__auto___47092 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38950__auto___47092,ch){
return (function (){
var f__38951__auto__ = (function (){var switch__38796__auto__ = ((function (c__38950__auto___47092,ch){
return (function (state_47075){
var state_val_47076 = (state_47075[(1)]);
if((state_val_47076 === (1))){
var state_47075__$1 = state_47075;
var statearr_47077_47093 = state_47075__$1;
(statearr_47077_47093[(2)] = null);

(statearr_47077_47093[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47076 === (2))){
var state_47075__$1 = state_47075;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47075__$1,(4),ch);
} else {
if((state_val_47076 === (3))){
var inst_47073 = (state_47075[(2)]);
var state_47075__$1 = state_47075;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47075__$1,inst_47073);
} else {
if((state_val_47076 === (4))){
var inst_47063 = (state_47075[(7)]);
var inst_47063__$1 = (state_47075[(2)]);
var state_47075__$1 = (function (){var statearr_47078 = state_47075;
(statearr_47078[(7)] = inst_47063__$1);

return statearr_47078;
})();
if(cljs.core.truth_(inst_47063__$1)){
var statearr_47079_47094 = state_47075__$1;
(statearr_47079_47094[(1)] = (5));

} else {
var statearr_47080_47095 = state_47075__$1;
(statearr_47080_47095[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47076 === (5))){
var inst_47063 = (state_47075[(7)]);
var inst_47065 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_47063);
var state_47075__$1 = state_47075;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47075__$1,(8),inst_47065);
} else {
if((state_val_47076 === (6))){
var state_47075__$1 = state_47075;
var statearr_47081_47096 = state_47075__$1;
(statearr_47081_47096[(2)] = null);

(statearr_47081_47096[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47076 === (7))){
var inst_47071 = (state_47075[(2)]);
var state_47075__$1 = state_47075;
var statearr_47082_47097 = state_47075__$1;
(statearr_47082_47097[(2)] = inst_47071);

(statearr_47082_47097[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47076 === (8))){
var inst_47067 = (state_47075[(2)]);
var state_47075__$1 = (function (){var statearr_47083 = state_47075;
(statearr_47083[(8)] = inst_47067);

return statearr_47083;
})();
var statearr_47084_47098 = state_47075__$1;
(statearr_47084_47098[(2)] = null);

(statearr_47084_47098[(1)] = (2));


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
});})(c__38950__auto___47092,ch))
;
return ((function (switch__38796__auto__,c__38950__auto___47092,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__38797__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__38797__auto____0 = (function (){
var statearr_47088 = [null,null,null,null,null,null,null,null,null];
(statearr_47088[(0)] = figwheel$client$heads_up_plugin_$_state_machine__38797__auto__);

(statearr_47088[(1)] = (1));

return statearr_47088;
});
var figwheel$client$heads_up_plugin_$_state_machine__38797__auto____1 = (function (state_47075){
while(true){
var ret_value__38798__auto__ = (function (){try{while(true){
var result__38799__auto__ = switch__38796__auto__.call(null,state_47075);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38799__auto__;
}
break;
}
}catch (e47089){if((e47089 instanceof Object)){
var ex__38800__auto__ = e47089;
var statearr_47090_47099 = state_47075;
(statearr_47090_47099[(5)] = ex__38800__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47075);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47089;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47100 = state_47075;
state_47075 = G__47100;
continue;
} else {
return ret_value__38798__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__38797__auto__ = function(state_47075){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__38797__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__38797__auto____1.call(this,state_47075);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__38797__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__38797__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__38797__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__38797__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__38797__auto__;
})()
;})(switch__38796__auto__,c__38950__auto___47092,ch))
})();
var state__38952__auto__ = (function (){var statearr_47091 = f__38951__auto__.call(null);
(statearr_47091[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38950__auto___47092);

return statearr_47091;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38952__auto__);
});})(c__38950__auto___47092,ch))
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
var c__38950__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38950__auto__){
return (function (){
var f__38951__auto__ = (function (){var switch__38796__auto__ = ((function (c__38950__auto__){
return (function (state_47121){
var state_val_47122 = (state_47121[(1)]);
if((state_val_47122 === (1))){
var inst_47116 = cljs.core.async.timeout.call(null,(3000));
var state_47121__$1 = state_47121;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47121__$1,(2),inst_47116);
} else {
if((state_val_47122 === (2))){
var inst_47118 = (state_47121[(2)]);
var inst_47119 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_47121__$1 = (function (){var statearr_47123 = state_47121;
(statearr_47123[(7)] = inst_47118);

return statearr_47123;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47121__$1,inst_47119);
} else {
return null;
}
}
});})(c__38950__auto__))
;
return ((function (switch__38796__auto__,c__38950__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__38797__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__38797__auto____0 = (function (){
var statearr_47127 = [null,null,null,null,null,null,null,null];
(statearr_47127[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__38797__auto__);

(statearr_47127[(1)] = (1));

return statearr_47127;
});
var figwheel$client$enforce_project_plugin_$_state_machine__38797__auto____1 = (function (state_47121){
while(true){
var ret_value__38798__auto__ = (function (){try{while(true){
var result__38799__auto__ = switch__38796__auto__.call(null,state_47121);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38799__auto__;
}
break;
}
}catch (e47128){if((e47128 instanceof Object)){
var ex__38800__auto__ = e47128;
var statearr_47129_47131 = state_47121;
(statearr_47129_47131[(5)] = ex__38800__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47121);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47128;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47132 = state_47121;
state_47121 = G__47132;
continue;
} else {
return ret_value__38798__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__38797__auto__ = function(state_47121){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__38797__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__38797__auto____1.call(this,state_47121);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__38797__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__38797__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__38797__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__38797__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__38797__auto__;
})()
;})(switch__38796__auto__,c__38950__auto__))
})();
var state__38952__auto__ = (function (){var statearr_47130 = f__38951__auto__.call(null);
(statearr_47130[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38950__auto__);

return statearr_47130;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38952__auto__);
});})(c__38950__auto__))
);

return c__38950__auto__;
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
var c__38950__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38950__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__38951__auto__ = (function (){var switch__38796__auto__ = ((function (c__38950__auto__,figwheel_version,temp__4657__auto__){
return (function (state_47155){
var state_val_47156 = (state_47155[(1)]);
if((state_val_47156 === (1))){
var inst_47149 = cljs.core.async.timeout.call(null,(2000));
var state_47155__$1 = state_47155;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47155__$1,(2),inst_47149);
} else {
if((state_val_47156 === (2))){
var inst_47151 = (state_47155[(2)]);
var inst_47152 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_47153 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_47152);
var state_47155__$1 = (function (){var statearr_47157 = state_47155;
(statearr_47157[(7)] = inst_47151);

return statearr_47157;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47155__$1,inst_47153);
} else {
return null;
}
}
});})(c__38950__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__38796__auto__,c__38950__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__38797__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__38797__auto____0 = (function (){
var statearr_47161 = [null,null,null,null,null,null,null,null];
(statearr_47161[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__38797__auto__);

(statearr_47161[(1)] = (1));

return statearr_47161;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__38797__auto____1 = (function (state_47155){
while(true){
var ret_value__38798__auto__ = (function (){try{while(true){
var result__38799__auto__ = switch__38796__auto__.call(null,state_47155);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38799__auto__;
}
break;
}
}catch (e47162){if((e47162 instanceof Object)){
var ex__38800__auto__ = e47162;
var statearr_47163_47165 = state_47155;
(statearr_47163_47165[(5)] = ex__38800__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47155);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47162;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47166 = state_47155;
state_47155 = G__47166;
continue;
} else {
return ret_value__38798__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__38797__auto__ = function(state_47155){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__38797__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__38797__auto____1.call(this,state_47155);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__38797__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__38797__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__38797__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__38797__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__38797__auto__;
})()
;})(switch__38796__auto__,c__38950__auto__,figwheel_version,temp__4657__auto__))
})();
var state__38952__auto__ = (function (){var statearr_47164 = f__38951__auto__.call(null);
(statearr_47164[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38950__auto__);

return statearr_47164;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38952__auto__);
});})(c__38950__auto__,figwheel_version,temp__4657__auto__))
);

return c__38950__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__47167){
var map__47171 = p__47167;
var map__47171__$1 = ((((!((map__47171 == null)))?((((map__47171.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47171.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47171):map__47171);
var file = cljs.core.get.call(null,map__47171__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__47171__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__47171__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__47173 = "";
var G__47173__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__47173),cljs.core.str("file "),cljs.core.str(file)].join(''):G__47173);
var G__47173__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__47173__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__47173__$1);
if(cljs.core.truth_((function (){var and__36766__auto__ = line;
if(cljs.core.truth_(and__36766__auto__)){
return column;
} else {
return and__36766__auto__;
}
})())){
return [cljs.core.str(G__47173__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__47173__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__47174){
var map__47181 = p__47174;
var map__47181__$1 = ((((!((map__47181 == null)))?((((map__47181.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47181.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47181):map__47181);
var ed = map__47181__$1;
var formatted_exception = cljs.core.get.call(null,map__47181__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__47181__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__47181__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__47183_47187 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__47184_47188 = null;
var count__47185_47189 = (0);
var i__47186_47190 = (0);
while(true){
if((i__47186_47190 < count__47185_47189)){
var msg_47191 = cljs.core._nth.call(null,chunk__47184_47188,i__47186_47190);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_47191);

var G__47192 = seq__47183_47187;
var G__47193 = chunk__47184_47188;
var G__47194 = count__47185_47189;
var G__47195 = (i__47186_47190 + (1));
seq__47183_47187 = G__47192;
chunk__47184_47188 = G__47193;
count__47185_47189 = G__47194;
i__47186_47190 = G__47195;
continue;
} else {
var temp__4657__auto___47196 = cljs.core.seq.call(null,seq__47183_47187);
if(temp__4657__auto___47196){
var seq__47183_47197__$1 = temp__4657__auto___47196;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47183_47197__$1)){
var c__37589__auto___47198 = cljs.core.chunk_first.call(null,seq__47183_47197__$1);
var G__47199 = cljs.core.chunk_rest.call(null,seq__47183_47197__$1);
var G__47200 = c__37589__auto___47198;
var G__47201 = cljs.core.count.call(null,c__37589__auto___47198);
var G__47202 = (0);
seq__47183_47187 = G__47199;
chunk__47184_47188 = G__47200;
count__47185_47189 = G__47201;
i__47186_47190 = G__47202;
continue;
} else {
var msg_47203 = cljs.core.first.call(null,seq__47183_47197__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_47203);

var G__47204 = cljs.core.next.call(null,seq__47183_47197__$1);
var G__47205 = null;
var G__47206 = (0);
var G__47207 = (0);
seq__47183_47187 = G__47204;
chunk__47184_47188 = G__47205;
count__47185_47189 = G__47206;
i__47186_47190 = G__47207;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__47208){
var map__47211 = p__47208;
var map__47211__$1 = ((((!((map__47211 == null)))?((((map__47211.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47211.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47211):map__47211);
var w = map__47211__$1;
var message = cljs.core.get.call(null,map__47211__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/out/figwheel/client.cljs",33,1,336,336,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/out/figwheel/client.cljs",30,1,328,328,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
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
if(cljs.core.truth_((function (){var and__36766__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__36766__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__36766__auto__;
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
var seq__47223 = cljs.core.seq.call(null,plugins);
var chunk__47224 = null;
var count__47225 = (0);
var i__47226 = (0);
while(true){
if((i__47226 < count__47225)){
var vec__47227 = cljs.core._nth.call(null,chunk__47224,i__47226);
var k = cljs.core.nth.call(null,vec__47227,(0),null);
var plugin = cljs.core.nth.call(null,vec__47227,(1),null);
if(cljs.core.truth_(plugin)){
var pl_47233 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__47223,chunk__47224,count__47225,i__47226,pl_47233,vec__47227,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_47233.call(null,msg_hist);
});})(seq__47223,chunk__47224,count__47225,i__47226,pl_47233,vec__47227,k,plugin))
);
} else {
}

var G__47234 = seq__47223;
var G__47235 = chunk__47224;
var G__47236 = count__47225;
var G__47237 = (i__47226 + (1));
seq__47223 = G__47234;
chunk__47224 = G__47235;
count__47225 = G__47236;
i__47226 = G__47237;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__47223);
if(temp__4657__auto__){
var seq__47223__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47223__$1)){
var c__37589__auto__ = cljs.core.chunk_first.call(null,seq__47223__$1);
var G__47238 = cljs.core.chunk_rest.call(null,seq__47223__$1);
var G__47239 = c__37589__auto__;
var G__47240 = cljs.core.count.call(null,c__37589__auto__);
var G__47241 = (0);
seq__47223 = G__47238;
chunk__47224 = G__47239;
count__47225 = G__47240;
i__47226 = G__47241;
continue;
} else {
var vec__47230 = cljs.core.first.call(null,seq__47223__$1);
var k = cljs.core.nth.call(null,vec__47230,(0),null);
var plugin = cljs.core.nth.call(null,vec__47230,(1),null);
if(cljs.core.truth_(plugin)){
var pl_47242 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__47223,chunk__47224,count__47225,i__47226,pl_47242,vec__47230,k,plugin,seq__47223__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_47242.call(null,msg_hist);
});})(seq__47223,chunk__47224,count__47225,i__47226,pl_47242,vec__47230,k,plugin,seq__47223__$1,temp__4657__auto__))
);
} else {
}

var G__47243 = cljs.core.next.call(null,seq__47223__$1);
var G__47244 = null;
var G__47245 = (0);
var G__47246 = (0);
seq__47223 = G__47243;
chunk__47224 = G__47244;
count__47225 = G__47245;
i__47226 = G__47246;
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
var args47247 = [];
var len__37853__auto___47254 = arguments.length;
var i__37854__auto___47255 = (0);
while(true){
if((i__37854__auto___47255 < len__37853__auto___47254)){
args47247.push((arguments[i__37854__auto___47255]));

var G__47256 = (i__37854__auto___47255 + (1));
i__37854__auto___47255 = G__47256;
continue;
} else {
}
break;
}

var G__47249 = args47247.length;
switch (G__47249) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47247.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__47250_47258 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__47251_47259 = null;
var count__47252_47260 = (0);
var i__47253_47261 = (0);
while(true){
if((i__47253_47261 < count__47252_47260)){
var msg_47262 = cljs.core._nth.call(null,chunk__47251_47259,i__47253_47261);
figwheel.client.socket.handle_incoming_message.call(null,msg_47262);

var G__47263 = seq__47250_47258;
var G__47264 = chunk__47251_47259;
var G__47265 = count__47252_47260;
var G__47266 = (i__47253_47261 + (1));
seq__47250_47258 = G__47263;
chunk__47251_47259 = G__47264;
count__47252_47260 = G__47265;
i__47253_47261 = G__47266;
continue;
} else {
var temp__4657__auto___47267 = cljs.core.seq.call(null,seq__47250_47258);
if(temp__4657__auto___47267){
var seq__47250_47268__$1 = temp__4657__auto___47267;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47250_47268__$1)){
var c__37589__auto___47269 = cljs.core.chunk_first.call(null,seq__47250_47268__$1);
var G__47270 = cljs.core.chunk_rest.call(null,seq__47250_47268__$1);
var G__47271 = c__37589__auto___47269;
var G__47272 = cljs.core.count.call(null,c__37589__auto___47269);
var G__47273 = (0);
seq__47250_47258 = G__47270;
chunk__47251_47259 = G__47271;
count__47252_47260 = G__47272;
i__47253_47261 = G__47273;
continue;
} else {
var msg_47274 = cljs.core.first.call(null,seq__47250_47268__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_47274);

var G__47275 = cljs.core.next.call(null,seq__47250_47268__$1);
var G__47276 = null;
var G__47277 = (0);
var G__47278 = (0);
seq__47250_47258 = G__47275;
chunk__47251_47259 = G__47276;
count__47252_47260 = G__47277;
i__47253_47261 = G__47278;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__37860__auto__ = [];
var len__37853__auto___47283 = arguments.length;
var i__37854__auto___47284 = (0);
while(true){
if((i__37854__auto___47284 < len__37853__auto___47283)){
args__37860__auto__.push((arguments[i__37854__auto___47284]));

var G__47285 = (i__37854__auto___47284 + (1));
i__37854__auto___47284 = G__47285;
continue;
} else {
}
break;
}

var argseq__37861__auto__ = ((((0) < args__37860__auto__.length))?(new cljs.core.IndexedSeq(args__37860__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__37861__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__47280){
var map__47281 = p__47280;
var map__47281__$1 = ((((!((map__47281 == null)))?((((map__47281.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47281.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47281):map__47281);
var opts = map__47281__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq47279){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47279));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e47287){if((e47287 instanceof Error)){
var e = e47287;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e47287;

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
return (function (p__47291){
var map__47292 = p__47291;
var map__47292__$1 = ((((!((map__47292 == null)))?((((map__47292.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47292.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47292):map__47292);
var msg_name = cljs.core.get.call(null,map__47292__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1483514369978