// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__36778__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__36778__auto__){
return or__36778__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__36778__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__36778__auto__)){
return or__36778__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__41927_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__41927_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__41932 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__41933 = null;
var count__41934 = (0);
var i__41935 = (0);
while(true){
if((i__41935 < count__41934)){
var n = cljs.core._nth.call(null,chunk__41933,i__41935);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__41936 = seq__41932;
var G__41937 = chunk__41933;
var G__41938 = count__41934;
var G__41939 = (i__41935 + (1));
seq__41932 = G__41936;
chunk__41933 = G__41937;
count__41934 = G__41938;
i__41935 = G__41939;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__41932);
if(temp__4657__auto__){
var seq__41932__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41932__$1)){
var c__37589__auto__ = cljs.core.chunk_first.call(null,seq__41932__$1);
var G__41940 = cljs.core.chunk_rest.call(null,seq__41932__$1);
var G__41941 = c__37589__auto__;
var G__41942 = cljs.core.count.call(null,c__37589__auto__);
var G__41943 = (0);
seq__41932 = G__41940;
chunk__41933 = G__41941;
count__41934 = G__41942;
i__41935 = G__41943;
continue;
} else {
var n = cljs.core.first.call(null,seq__41932__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__41944 = cljs.core.next.call(null,seq__41932__$1);
var G__41945 = null;
var G__41946 = (0);
var G__41947 = (0);
seq__41932 = G__41944;
chunk__41933 = G__41945;
count__41934 = G__41946;
i__41935 = G__41947;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__41998_42009 = cljs.core.seq.call(null,deps);
var chunk__41999_42010 = null;
var count__42000_42011 = (0);
var i__42001_42012 = (0);
while(true){
if((i__42001_42012 < count__42000_42011)){
var dep_42013 = cljs.core._nth.call(null,chunk__41999_42010,i__42001_42012);
topo_sort_helper_STAR_.call(null,dep_42013,(depth + (1)),state);

var G__42014 = seq__41998_42009;
var G__42015 = chunk__41999_42010;
var G__42016 = count__42000_42011;
var G__42017 = (i__42001_42012 + (1));
seq__41998_42009 = G__42014;
chunk__41999_42010 = G__42015;
count__42000_42011 = G__42016;
i__42001_42012 = G__42017;
continue;
} else {
var temp__4657__auto___42018 = cljs.core.seq.call(null,seq__41998_42009);
if(temp__4657__auto___42018){
var seq__41998_42019__$1 = temp__4657__auto___42018;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41998_42019__$1)){
var c__37589__auto___42020 = cljs.core.chunk_first.call(null,seq__41998_42019__$1);
var G__42021 = cljs.core.chunk_rest.call(null,seq__41998_42019__$1);
var G__42022 = c__37589__auto___42020;
var G__42023 = cljs.core.count.call(null,c__37589__auto___42020);
var G__42024 = (0);
seq__41998_42009 = G__42021;
chunk__41999_42010 = G__42022;
count__42000_42011 = G__42023;
i__42001_42012 = G__42024;
continue;
} else {
var dep_42025 = cljs.core.first.call(null,seq__41998_42019__$1);
topo_sort_helper_STAR_.call(null,dep_42025,(depth + (1)),state);

var G__42026 = cljs.core.next.call(null,seq__41998_42019__$1);
var G__42027 = null;
var G__42028 = (0);
var G__42029 = (0);
seq__41998_42009 = G__42026;
chunk__41999_42010 = G__42027;
count__42000_42011 = G__42028;
i__42001_42012 = G__42029;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__42002){
var vec__42006 = p__42002;
var seq__42007 = cljs.core.seq.call(null,vec__42006);
var first__42008 = cljs.core.first.call(null,seq__42007);
var seq__42007__$1 = cljs.core.next.call(null,seq__42007);
var x = first__42008;
var xs = seq__42007__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__42006,seq__42007,first__42008,seq__42007__$1,x,xs,get_deps__$1){
return (function (p1__41948_SHARP_){
return clojure.set.difference.call(null,p1__41948_SHARP_,x);
});})(vec__42006,seq__42007,first__42008,seq__42007__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__42042 = cljs.core.seq.call(null,provides);
var chunk__42043 = null;
var count__42044 = (0);
var i__42045 = (0);
while(true){
if((i__42045 < count__42044)){
var prov = cljs.core._nth.call(null,chunk__42043,i__42045);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__42046_42054 = cljs.core.seq.call(null,requires);
var chunk__42047_42055 = null;
var count__42048_42056 = (0);
var i__42049_42057 = (0);
while(true){
if((i__42049_42057 < count__42048_42056)){
var req_42058 = cljs.core._nth.call(null,chunk__42047_42055,i__42049_42057);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_42058,prov);

var G__42059 = seq__42046_42054;
var G__42060 = chunk__42047_42055;
var G__42061 = count__42048_42056;
var G__42062 = (i__42049_42057 + (1));
seq__42046_42054 = G__42059;
chunk__42047_42055 = G__42060;
count__42048_42056 = G__42061;
i__42049_42057 = G__42062;
continue;
} else {
var temp__4657__auto___42063 = cljs.core.seq.call(null,seq__42046_42054);
if(temp__4657__auto___42063){
var seq__42046_42064__$1 = temp__4657__auto___42063;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42046_42064__$1)){
var c__37589__auto___42065 = cljs.core.chunk_first.call(null,seq__42046_42064__$1);
var G__42066 = cljs.core.chunk_rest.call(null,seq__42046_42064__$1);
var G__42067 = c__37589__auto___42065;
var G__42068 = cljs.core.count.call(null,c__37589__auto___42065);
var G__42069 = (0);
seq__42046_42054 = G__42066;
chunk__42047_42055 = G__42067;
count__42048_42056 = G__42068;
i__42049_42057 = G__42069;
continue;
} else {
var req_42070 = cljs.core.first.call(null,seq__42046_42064__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_42070,prov);

var G__42071 = cljs.core.next.call(null,seq__42046_42064__$1);
var G__42072 = null;
var G__42073 = (0);
var G__42074 = (0);
seq__42046_42054 = G__42071;
chunk__42047_42055 = G__42072;
count__42048_42056 = G__42073;
i__42049_42057 = G__42074;
continue;
}
} else {
}
}
break;
}

var G__42075 = seq__42042;
var G__42076 = chunk__42043;
var G__42077 = count__42044;
var G__42078 = (i__42045 + (1));
seq__42042 = G__42075;
chunk__42043 = G__42076;
count__42044 = G__42077;
i__42045 = G__42078;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__42042);
if(temp__4657__auto__){
var seq__42042__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42042__$1)){
var c__37589__auto__ = cljs.core.chunk_first.call(null,seq__42042__$1);
var G__42079 = cljs.core.chunk_rest.call(null,seq__42042__$1);
var G__42080 = c__37589__auto__;
var G__42081 = cljs.core.count.call(null,c__37589__auto__);
var G__42082 = (0);
seq__42042 = G__42079;
chunk__42043 = G__42080;
count__42044 = G__42081;
i__42045 = G__42082;
continue;
} else {
var prov = cljs.core.first.call(null,seq__42042__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__42050_42083 = cljs.core.seq.call(null,requires);
var chunk__42051_42084 = null;
var count__42052_42085 = (0);
var i__42053_42086 = (0);
while(true){
if((i__42053_42086 < count__42052_42085)){
var req_42087 = cljs.core._nth.call(null,chunk__42051_42084,i__42053_42086);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_42087,prov);

var G__42088 = seq__42050_42083;
var G__42089 = chunk__42051_42084;
var G__42090 = count__42052_42085;
var G__42091 = (i__42053_42086 + (1));
seq__42050_42083 = G__42088;
chunk__42051_42084 = G__42089;
count__42052_42085 = G__42090;
i__42053_42086 = G__42091;
continue;
} else {
var temp__4657__auto___42092__$1 = cljs.core.seq.call(null,seq__42050_42083);
if(temp__4657__auto___42092__$1){
var seq__42050_42093__$1 = temp__4657__auto___42092__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42050_42093__$1)){
var c__37589__auto___42094 = cljs.core.chunk_first.call(null,seq__42050_42093__$1);
var G__42095 = cljs.core.chunk_rest.call(null,seq__42050_42093__$1);
var G__42096 = c__37589__auto___42094;
var G__42097 = cljs.core.count.call(null,c__37589__auto___42094);
var G__42098 = (0);
seq__42050_42083 = G__42095;
chunk__42051_42084 = G__42096;
count__42052_42085 = G__42097;
i__42053_42086 = G__42098;
continue;
} else {
var req_42099 = cljs.core.first.call(null,seq__42050_42093__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_42099,prov);

var G__42100 = cljs.core.next.call(null,seq__42050_42093__$1);
var G__42101 = null;
var G__42102 = (0);
var G__42103 = (0);
seq__42050_42083 = G__42100;
chunk__42051_42084 = G__42101;
count__42052_42085 = G__42102;
i__42053_42086 = G__42103;
continue;
}
} else {
}
}
break;
}

var G__42104 = cljs.core.next.call(null,seq__42042__$1);
var G__42105 = null;
var G__42106 = (0);
var G__42107 = (0);
seq__42042 = G__42104;
chunk__42043 = G__42105;
count__42044 = G__42106;
i__42045 = G__42107;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__42112_42116 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__42113_42117 = null;
var count__42114_42118 = (0);
var i__42115_42119 = (0);
while(true){
if((i__42115_42119 < count__42114_42118)){
var ns_42120 = cljs.core._nth.call(null,chunk__42113_42117,i__42115_42119);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_42120);

var G__42121 = seq__42112_42116;
var G__42122 = chunk__42113_42117;
var G__42123 = count__42114_42118;
var G__42124 = (i__42115_42119 + (1));
seq__42112_42116 = G__42121;
chunk__42113_42117 = G__42122;
count__42114_42118 = G__42123;
i__42115_42119 = G__42124;
continue;
} else {
var temp__4657__auto___42125 = cljs.core.seq.call(null,seq__42112_42116);
if(temp__4657__auto___42125){
var seq__42112_42126__$1 = temp__4657__auto___42125;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42112_42126__$1)){
var c__37589__auto___42127 = cljs.core.chunk_first.call(null,seq__42112_42126__$1);
var G__42128 = cljs.core.chunk_rest.call(null,seq__42112_42126__$1);
var G__42129 = c__37589__auto___42127;
var G__42130 = cljs.core.count.call(null,c__37589__auto___42127);
var G__42131 = (0);
seq__42112_42116 = G__42128;
chunk__42113_42117 = G__42129;
count__42114_42118 = G__42130;
i__42115_42119 = G__42131;
continue;
} else {
var ns_42132 = cljs.core.first.call(null,seq__42112_42126__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_42132);

var G__42133 = cljs.core.next.call(null,seq__42112_42126__$1);
var G__42134 = null;
var G__42135 = (0);
var G__42136 = (0);
seq__42112_42116 = G__42133;
chunk__42113_42117 = G__42134;
count__42114_42118 = G__42135;
i__42115_42119 = G__42136;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__36778__auto__ = goog.require__;
if(cljs.core.truth_(or__36778__auto__)){
return or__36778__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__42137__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__42137 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42138__i = 0, G__42138__a = new Array(arguments.length -  0);
while (G__42138__i < G__42138__a.length) {G__42138__a[G__42138__i] = arguments[G__42138__i + 0]; ++G__42138__i;}
  args = new cljs.core.IndexedSeq(G__42138__a,0);
} 
return G__42137__delegate.call(this,args);};
G__42137.cljs$lang$maxFixedArity = 0;
G__42137.cljs$lang$applyTo = (function (arglist__42139){
var args = cljs.core.seq(arglist__42139);
return G__42137__delegate(args);
});
G__42137.cljs$core$IFn$_invoke$arity$variadic = G__42137__delegate;
return G__42137;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__42141 = cljs.core._EQ_;
var expr__42142 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__42141.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__42142))){
var path_parts = ((function (pred__42141,expr__42142){
return (function (p1__42140_SHARP_){
return clojure.string.split.call(null,p1__42140_SHARP_,/[\/\\]/);
});})(pred__42141,expr__42142))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__42141,expr__42142){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e42144){if((e42144 instanceof Error)){
var e = e42144;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e42144;

}
}})());
});
;})(path_parts,sep,root,pred__42141,expr__42142))
} else {
if(cljs.core.truth_(pred__42141.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__42142))){
return ((function (pred__42141,expr__42142){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__42141,expr__42142){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__42141,expr__42142))
);

return deferred.addErrback(((function (deferred,pred__42141,expr__42142){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__42141,expr__42142))
);
});
;})(pred__42141,expr__42142))
} else {
return ((function (pred__42141,expr__42142){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__42141,expr__42142))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__42145,callback){
var map__42148 = p__42145;
var map__42148__$1 = ((((!((map__42148 == null)))?((((map__42148.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42148.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42148):map__42148);
var file_msg = map__42148__$1;
var request_url = cljs.core.get.call(null,map__42148__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__42148,map__42148__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__42148,map__42148__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__38950__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38950__auto__){
return (function (){
var f__38951__auto__ = (function (){var switch__38796__auto__ = ((function (c__38950__auto__){
return (function (state_42172){
var state_val_42173 = (state_42172[(1)]);
if((state_val_42173 === (7))){
var inst_42168 = (state_42172[(2)]);
var state_42172__$1 = state_42172;
var statearr_42174_42194 = state_42172__$1;
(statearr_42174_42194[(2)] = inst_42168);

(statearr_42174_42194[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42173 === (1))){
var state_42172__$1 = state_42172;
var statearr_42175_42195 = state_42172__$1;
(statearr_42175_42195[(2)] = null);

(statearr_42175_42195[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42173 === (4))){
var inst_42152 = (state_42172[(7)]);
var inst_42152__$1 = (state_42172[(2)]);
var state_42172__$1 = (function (){var statearr_42176 = state_42172;
(statearr_42176[(7)] = inst_42152__$1);

return statearr_42176;
})();
if(cljs.core.truth_(inst_42152__$1)){
var statearr_42177_42196 = state_42172__$1;
(statearr_42177_42196[(1)] = (5));

} else {
var statearr_42178_42197 = state_42172__$1;
(statearr_42178_42197[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42173 === (6))){
var state_42172__$1 = state_42172;
var statearr_42179_42198 = state_42172__$1;
(statearr_42179_42198[(2)] = null);

(statearr_42179_42198[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42173 === (3))){
var inst_42170 = (state_42172[(2)]);
var state_42172__$1 = state_42172;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42172__$1,inst_42170);
} else {
if((state_val_42173 === (2))){
var state_42172__$1 = state_42172;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42172__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_42173 === (11))){
var inst_42164 = (state_42172[(2)]);
var state_42172__$1 = (function (){var statearr_42180 = state_42172;
(statearr_42180[(8)] = inst_42164);

return statearr_42180;
})();
var statearr_42181_42199 = state_42172__$1;
(statearr_42181_42199[(2)] = null);

(statearr_42181_42199[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42173 === (9))){
var inst_42158 = (state_42172[(9)]);
var inst_42156 = (state_42172[(10)]);
var inst_42160 = inst_42158.call(null,inst_42156);
var state_42172__$1 = state_42172;
var statearr_42182_42200 = state_42172__$1;
(statearr_42182_42200[(2)] = inst_42160);

(statearr_42182_42200[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42173 === (5))){
var inst_42152 = (state_42172[(7)]);
var inst_42154 = figwheel.client.file_reloading.blocking_load.call(null,inst_42152);
var state_42172__$1 = state_42172;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42172__$1,(8),inst_42154);
} else {
if((state_val_42173 === (10))){
var inst_42156 = (state_42172[(10)]);
var inst_42162 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_42156);
var state_42172__$1 = state_42172;
var statearr_42183_42201 = state_42172__$1;
(statearr_42183_42201[(2)] = inst_42162);

(statearr_42183_42201[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42173 === (8))){
var inst_42152 = (state_42172[(7)]);
var inst_42158 = (state_42172[(9)]);
var inst_42156 = (state_42172[(2)]);
var inst_42157 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_42158__$1 = cljs.core.get.call(null,inst_42157,inst_42152);
var state_42172__$1 = (function (){var statearr_42184 = state_42172;
(statearr_42184[(9)] = inst_42158__$1);

(statearr_42184[(10)] = inst_42156);

return statearr_42184;
})();
if(cljs.core.truth_(inst_42158__$1)){
var statearr_42185_42202 = state_42172__$1;
(statearr_42185_42202[(1)] = (9));

} else {
var statearr_42186_42203 = state_42172__$1;
(statearr_42186_42203[(1)] = (10));

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
});})(c__38950__auto__))
;
return ((function (switch__38796__auto__,c__38950__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__38797__auto__ = null;
var figwheel$client$file_reloading$state_machine__38797__auto____0 = (function (){
var statearr_42190 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42190[(0)] = figwheel$client$file_reloading$state_machine__38797__auto__);

(statearr_42190[(1)] = (1));

return statearr_42190;
});
var figwheel$client$file_reloading$state_machine__38797__auto____1 = (function (state_42172){
while(true){
var ret_value__38798__auto__ = (function (){try{while(true){
var result__38799__auto__ = switch__38796__auto__.call(null,state_42172);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38799__auto__;
}
break;
}
}catch (e42191){if((e42191 instanceof Object)){
var ex__38800__auto__ = e42191;
var statearr_42192_42204 = state_42172;
(statearr_42192_42204[(5)] = ex__38800__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42172);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42191;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42205 = state_42172;
state_42172 = G__42205;
continue;
} else {
return ret_value__38798__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__38797__auto__ = function(state_42172){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__38797__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__38797__auto____1.call(this,state_42172);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__38797__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__38797__auto____0;
figwheel$client$file_reloading$state_machine__38797__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__38797__auto____1;
return figwheel$client$file_reloading$state_machine__38797__auto__;
})()
;})(switch__38796__auto__,c__38950__auto__))
})();
var state__38952__auto__ = (function (){var statearr_42193 = f__38951__auto__.call(null);
(statearr_42193[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38950__auto__);

return statearr_42193;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38952__auto__);
});})(c__38950__auto__))
);

return c__38950__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__42206,callback){
var map__42209 = p__42206;
var map__42209__$1 = ((((!((map__42209 == null)))?((((map__42209.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42209.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42209):map__42209);
var file_msg = map__42209__$1;
var namespace = cljs.core.get.call(null,map__42209__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__42209,map__42209__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__42209,map__42209__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__42211){
var map__42214 = p__42211;
var map__42214__$1 = ((((!((map__42214 == null)))?((((map__42214.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42214.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42214):map__42214);
var file_msg = map__42214__$1;
var namespace = cljs.core.get.call(null,map__42214__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__36766__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__36766__auto__){
var or__36778__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__36778__auto__)){
return or__36778__auto__;
} else {
var or__36778__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__36778__auto____$1)){
return or__36778__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__36766__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__42216,callback){
var map__42219 = p__42216;
var map__42219__$1 = ((((!((map__42219 == null)))?((((map__42219.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42219.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42219):map__42219);
var file_msg = map__42219__$1;
var request_url = cljs.core.get.call(null,map__42219__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__42219__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__38950__auto___42323 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38950__auto___42323,out){
return (function (){
var f__38951__auto__ = (function (){var switch__38796__auto__ = ((function (c__38950__auto___42323,out){
return (function (state_42305){
var state_val_42306 = (state_42305[(1)]);
if((state_val_42306 === (1))){
var inst_42279 = cljs.core.seq.call(null,files);
var inst_42280 = cljs.core.first.call(null,inst_42279);
var inst_42281 = cljs.core.next.call(null,inst_42279);
var inst_42282 = files;
var state_42305__$1 = (function (){var statearr_42307 = state_42305;
(statearr_42307[(7)] = inst_42281);

(statearr_42307[(8)] = inst_42280);

(statearr_42307[(9)] = inst_42282);

return statearr_42307;
})();
var statearr_42308_42324 = state_42305__$1;
(statearr_42308_42324[(2)] = null);

(statearr_42308_42324[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42306 === (2))){
var inst_42288 = (state_42305[(10)]);
var inst_42282 = (state_42305[(9)]);
var inst_42287 = cljs.core.seq.call(null,inst_42282);
var inst_42288__$1 = cljs.core.first.call(null,inst_42287);
var inst_42289 = cljs.core.next.call(null,inst_42287);
var inst_42290 = (inst_42288__$1 == null);
var inst_42291 = cljs.core.not.call(null,inst_42290);
var state_42305__$1 = (function (){var statearr_42309 = state_42305;
(statearr_42309[(11)] = inst_42289);

(statearr_42309[(10)] = inst_42288__$1);

return statearr_42309;
})();
if(inst_42291){
var statearr_42310_42325 = state_42305__$1;
(statearr_42310_42325[(1)] = (4));

} else {
var statearr_42311_42326 = state_42305__$1;
(statearr_42311_42326[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42306 === (3))){
var inst_42303 = (state_42305[(2)]);
var state_42305__$1 = state_42305;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42305__$1,inst_42303);
} else {
if((state_val_42306 === (4))){
var inst_42288 = (state_42305[(10)]);
var inst_42293 = figwheel.client.file_reloading.reload_js_file.call(null,inst_42288);
var state_42305__$1 = state_42305;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42305__$1,(7),inst_42293);
} else {
if((state_val_42306 === (5))){
var inst_42299 = cljs.core.async.close_BANG_.call(null,out);
var state_42305__$1 = state_42305;
var statearr_42312_42327 = state_42305__$1;
(statearr_42312_42327[(2)] = inst_42299);

(statearr_42312_42327[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42306 === (6))){
var inst_42301 = (state_42305[(2)]);
var state_42305__$1 = state_42305;
var statearr_42313_42328 = state_42305__$1;
(statearr_42313_42328[(2)] = inst_42301);

(statearr_42313_42328[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42306 === (7))){
var inst_42289 = (state_42305[(11)]);
var inst_42295 = (state_42305[(2)]);
var inst_42296 = cljs.core.async.put_BANG_.call(null,out,inst_42295);
var inst_42282 = inst_42289;
var state_42305__$1 = (function (){var statearr_42314 = state_42305;
(statearr_42314[(12)] = inst_42296);

(statearr_42314[(9)] = inst_42282);

return statearr_42314;
})();
var statearr_42315_42329 = state_42305__$1;
(statearr_42315_42329[(2)] = null);

(statearr_42315_42329[(1)] = (2));


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
});})(c__38950__auto___42323,out))
;
return ((function (switch__38796__auto__,c__38950__auto___42323,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__38797__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__38797__auto____0 = (function (){
var statearr_42319 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42319[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__38797__auto__);

(statearr_42319[(1)] = (1));

return statearr_42319;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__38797__auto____1 = (function (state_42305){
while(true){
var ret_value__38798__auto__ = (function (){try{while(true){
var result__38799__auto__ = switch__38796__auto__.call(null,state_42305);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38799__auto__;
}
break;
}
}catch (e42320){if((e42320 instanceof Object)){
var ex__38800__auto__ = e42320;
var statearr_42321_42330 = state_42305;
(statearr_42321_42330[(5)] = ex__38800__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42305);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42320;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42331 = state_42305;
state_42305 = G__42331;
continue;
} else {
return ret_value__38798__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__38797__auto__ = function(state_42305){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__38797__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__38797__auto____1.call(this,state_42305);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__38797__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__38797__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__38797__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__38797__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__38797__auto__;
})()
;})(switch__38796__auto__,c__38950__auto___42323,out))
})();
var state__38952__auto__ = (function (){var statearr_42322 = f__38951__auto__.call(null);
(statearr_42322[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38950__auto___42323);

return statearr_42322;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38952__auto__);
});})(c__38950__auto___42323,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__42332,opts){
var map__42336 = p__42332;
var map__42336__$1 = ((((!((map__42336 == null)))?((((map__42336.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42336.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42336):map__42336);
var eval_body__$1 = cljs.core.get.call(null,map__42336__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__42336__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__36766__auto__ = eval_body__$1;
if(cljs.core.truth_(and__36766__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__36766__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e42338){var e = e42338;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__42339_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__42339_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__42348){
var vec__42349 = p__42348;
var k = cljs.core.nth.call(null,vec__42349,(0),null);
var v = cljs.core.nth.call(null,vec__42349,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__42352){
var vec__42353 = p__42352;
var k = cljs.core.nth.call(null,vec__42353,(0),null);
var v = cljs.core.nth.call(null,vec__42353,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__42359,p__42360){
var map__42607 = p__42359;
var map__42607__$1 = ((((!((map__42607 == null)))?((((map__42607.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42607.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42607):map__42607);
var opts = map__42607__$1;
var before_jsload = cljs.core.get.call(null,map__42607__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__42607__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__42607__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__42608 = p__42360;
var map__42608__$1 = ((((!((map__42608 == null)))?((((map__42608.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42608.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42608):map__42608);
var msg = map__42608__$1;
var files = cljs.core.get.call(null,map__42608__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__42608__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__42608__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__38950__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38950__auto__,map__42607,map__42607__$1,opts,before_jsload,on_jsload,reload_dependents,map__42608,map__42608__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__38951__auto__ = (function (){var switch__38796__auto__ = ((function (c__38950__auto__,map__42607,map__42607__$1,opts,before_jsload,on_jsload,reload_dependents,map__42608,map__42608__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_42761){
var state_val_42762 = (state_42761[(1)]);
if((state_val_42762 === (7))){
var inst_42623 = (state_42761[(7)]);
var inst_42622 = (state_42761[(8)]);
var inst_42624 = (state_42761[(9)]);
var inst_42625 = (state_42761[(10)]);
var inst_42630 = cljs.core._nth.call(null,inst_42623,inst_42625);
var inst_42631 = figwheel.client.file_reloading.eval_body.call(null,inst_42630,opts);
var inst_42632 = (inst_42625 + (1));
var tmp42763 = inst_42623;
var tmp42764 = inst_42622;
var tmp42765 = inst_42624;
var inst_42622__$1 = tmp42764;
var inst_42623__$1 = tmp42763;
var inst_42624__$1 = tmp42765;
var inst_42625__$1 = inst_42632;
var state_42761__$1 = (function (){var statearr_42766 = state_42761;
(statearr_42766[(7)] = inst_42623__$1);

(statearr_42766[(11)] = inst_42631);

(statearr_42766[(8)] = inst_42622__$1);

(statearr_42766[(9)] = inst_42624__$1);

(statearr_42766[(10)] = inst_42625__$1);

return statearr_42766;
})();
var statearr_42767_42853 = state_42761__$1;
(statearr_42767_42853[(2)] = null);

(statearr_42767_42853[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42762 === (20))){
var inst_42665 = (state_42761[(12)]);
var inst_42673 = figwheel.client.file_reloading.sort_files.call(null,inst_42665);
var state_42761__$1 = state_42761;
var statearr_42768_42854 = state_42761__$1;
(statearr_42768_42854[(2)] = inst_42673);

(statearr_42768_42854[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42762 === (27))){
var state_42761__$1 = state_42761;
var statearr_42769_42855 = state_42761__$1;
(statearr_42769_42855[(2)] = null);

(statearr_42769_42855[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42762 === (1))){
var inst_42614 = (state_42761[(13)]);
var inst_42611 = before_jsload.call(null,files);
var inst_42612 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_42613 = (function (){return ((function (inst_42614,inst_42611,inst_42612,state_val_42762,c__38950__auto__,map__42607,map__42607__$1,opts,before_jsload,on_jsload,reload_dependents,map__42608,map__42608__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__42356_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__42356_SHARP_);
});
;})(inst_42614,inst_42611,inst_42612,state_val_42762,c__38950__auto__,map__42607,map__42607__$1,opts,before_jsload,on_jsload,reload_dependents,map__42608,map__42608__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_42614__$1 = cljs.core.filter.call(null,inst_42613,files);
var inst_42615 = cljs.core.not_empty.call(null,inst_42614__$1);
var state_42761__$1 = (function (){var statearr_42770 = state_42761;
(statearr_42770[(13)] = inst_42614__$1);

(statearr_42770[(14)] = inst_42612);

(statearr_42770[(15)] = inst_42611);

return statearr_42770;
})();
if(cljs.core.truth_(inst_42615)){
var statearr_42771_42856 = state_42761__$1;
(statearr_42771_42856[(1)] = (2));

} else {
var statearr_42772_42857 = state_42761__$1;
(statearr_42772_42857[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42762 === (24))){
var state_42761__$1 = state_42761;
var statearr_42773_42858 = state_42761__$1;
(statearr_42773_42858[(2)] = null);

(statearr_42773_42858[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42762 === (39))){
var inst_42715 = (state_42761[(16)]);
var state_42761__$1 = state_42761;
var statearr_42774_42859 = state_42761__$1;
(statearr_42774_42859[(2)] = inst_42715);

(statearr_42774_42859[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42762 === (46))){
var inst_42756 = (state_42761[(2)]);
var state_42761__$1 = state_42761;
var statearr_42775_42860 = state_42761__$1;
(statearr_42775_42860[(2)] = inst_42756);

(statearr_42775_42860[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42762 === (4))){
var inst_42659 = (state_42761[(2)]);
var inst_42660 = cljs.core.List.EMPTY;
var inst_42661 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_42660);
var inst_42662 = (function (){return ((function (inst_42659,inst_42660,inst_42661,state_val_42762,c__38950__auto__,map__42607,map__42607__$1,opts,before_jsload,on_jsload,reload_dependents,map__42608,map__42608__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__42357_SHARP_){
var and__36766__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__42357_SHARP_);
if(cljs.core.truth_(and__36766__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__42357_SHARP_));
} else {
return and__36766__auto__;
}
});
;})(inst_42659,inst_42660,inst_42661,state_val_42762,c__38950__auto__,map__42607,map__42607__$1,opts,before_jsload,on_jsload,reload_dependents,map__42608,map__42608__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_42663 = cljs.core.filter.call(null,inst_42662,files);
var inst_42664 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_42665 = cljs.core.concat.call(null,inst_42663,inst_42664);
var state_42761__$1 = (function (){var statearr_42776 = state_42761;
(statearr_42776[(17)] = inst_42659);

(statearr_42776[(12)] = inst_42665);

(statearr_42776[(18)] = inst_42661);

return statearr_42776;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_42777_42861 = state_42761__$1;
(statearr_42777_42861[(1)] = (16));

} else {
var statearr_42778_42862 = state_42761__$1;
(statearr_42778_42862[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42762 === (15))){
var inst_42649 = (state_42761[(2)]);
var state_42761__$1 = state_42761;
var statearr_42779_42863 = state_42761__$1;
(statearr_42779_42863[(2)] = inst_42649);

(statearr_42779_42863[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42762 === (21))){
var inst_42675 = (state_42761[(19)]);
var inst_42675__$1 = (state_42761[(2)]);
var inst_42676 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_42675__$1);
var state_42761__$1 = (function (){var statearr_42780 = state_42761;
(statearr_42780[(19)] = inst_42675__$1);

return statearr_42780;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42761__$1,(22),inst_42676);
} else {
if((state_val_42762 === (31))){
var inst_42759 = (state_42761[(2)]);
var state_42761__$1 = state_42761;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42761__$1,inst_42759);
} else {
if((state_val_42762 === (32))){
var inst_42715 = (state_42761[(16)]);
var inst_42720 = inst_42715.cljs$lang$protocol_mask$partition0$;
var inst_42721 = (inst_42720 & (64));
var inst_42722 = inst_42715.cljs$core$ISeq$;
var inst_42723 = (inst_42721) || (inst_42722);
var state_42761__$1 = state_42761;
if(cljs.core.truth_(inst_42723)){
var statearr_42781_42864 = state_42761__$1;
(statearr_42781_42864[(1)] = (35));

} else {
var statearr_42782_42865 = state_42761__$1;
(statearr_42782_42865[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42762 === (40))){
var inst_42736 = (state_42761[(20)]);
var inst_42735 = (state_42761[(2)]);
var inst_42736__$1 = cljs.core.get.call(null,inst_42735,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_42737 = cljs.core.get.call(null,inst_42735,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_42738 = cljs.core.not_empty.call(null,inst_42736__$1);
var state_42761__$1 = (function (){var statearr_42783 = state_42761;
(statearr_42783[(21)] = inst_42737);

(statearr_42783[(20)] = inst_42736__$1);

return statearr_42783;
})();
if(cljs.core.truth_(inst_42738)){
var statearr_42784_42866 = state_42761__$1;
(statearr_42784_42866[(1)] = (41));

} else {
var statearr_42785_42867 = state_42761__$1;
(statearr_42785_42867[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42762 === (33))){
var state_42761__$1 = state_42761;
var statearr_42786_42868 = state_42761__$1;
(statearr_42786_42868[(2)] = false);

(statearr_42786_42868[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42762 === (13))){
var inst_42635 = (state_42761[(22)]);
var inst_42639 = cljs.core.chunk_first.call(null,inst_42635);
var inst_42640 = cljs.core.chunk_rest.call(null,inst_42635);
var inst_42641 = cljs.core.count.call(null,inst_42639);
var inst_42622 = inst_42640;
var inst_42623 = inst_42639;
var inst_42624 = inst_42641;
var inst_42625 = (0);
var state_42761__$1 = (function (){var statearr_42787 = state_42761;
(statearr_42787[(7)] = inst_42623);

(statearr_42787[(8)] = inst_42622);

(statearr_42787[(9)] = inst_42624);

(statearr_42787[(10)] = inst_42625);

return statearr_42787;
})();
var statearr_42788_42869 = state_42761__$1;
(statearr_42788_42869[(2)] = null);

(statearr_42788_42869[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42762 === (22))){
var inst_42675 = (state_42761[(19)]);
var inst_42679 = (state_42761[(23)]);
var inst_42683 = (state_42761[(24)]);
var inst_42678 = (state_42761[(25)]);
var inst_42678__$1 = (state_42761[(2)]);
var inst_42679__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_42678__$1);
var inst_42680 = (function (){var all_files = inst_42675;
var res_SINGLEQUOTE_ = inst_42678__$1;
var res = inst_42679__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_42675,inst_42679,inst_42683,inst_42678,inst_42678__$1,inst_42679__$1,state_val_42762,c__38950__auto__,map__42607,map__42607__$1,opts,before_jsload,on_jsload,reload_dependents,map__42608,map__42608__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__42358_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__42358_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_42675,inst_42679,inst_42683,inst_42678,inst_42678__$1,inst_42679__$1,state_val_42762,c__38950__auto__,map__42607,map__42607__$1,opts,before_jsload,on_jsload,reload_dependents,map__42608,map__42608__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_42681 = cljs.core.filter.call(null,inst_42680,inst_42678__$1);
var inst_42682 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_42683__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_42682);
var inst_42684 = cljs.core.not_empty.call(null,inst_42683__$1);
var state_42761__$1 = (function (){var statearr_42789 = state_42761;
(statearr_42789[(23)] = inst_42679__$1);

(statearr_42789[(26)] = inst_42681);

(statearr_42789[(24)] = inst_42683__$1);

(statearr_42789[(25)] = inst_42678__$1);

return statearr_42789;
})();
if(cljs.core.truth_(inst_42684)){
var statearr_42790_42870 = state_42761__$1;
(statearr_42790_42870[(1)] = (23));

} else {
var statearr_42791_42871 = state_42761__$1;
(statearr_42791_42871[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42762 === (36))){
var state_42761__$1 = state_42761;
var statearr_42792_42872 = state_42761__$1;
(statearr_42792_42872[(2)] = false);

(statearr_42792_42872[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42762 === (41))){
var inst_42736 = (state_42761[(20)]);
var inst_42740 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_42741 = cljs.core.map.call(null,inst_42740,inst_42736);
var inst_42742 = cljs.core.pr_str.call(null,inst_42741);
var inst_42743 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_42742)].join('');
var inst_42744 = figwheel.client.utils.log.call(null,inst_42743);
var state_42761__$1 = state_42761;
var statearr_42793_42873 = state_42761__$1;
(statearr_42793_42873[(2)] = inst_42744);

(statearr_42793_42873[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42762 === (43))){
var inst_42737 = (state_42761[(21)]);
var inst_42747 = (state_42761[(2)]);
var inst_42748 = cljs.core.not_empty.call(null,inst_42737);
var state_42761__$1 = (function (){var statearr_42794 = state_42761;
(statearr_42794[(27)] = inst_42747);

return statearr_42794;
})();
if(cljs.core.truth_(inst_42748)){
var statearr_42795_42874 = state_42761__$1;
(statearr_42795_42874[(1)] = (44));

} else {
var statearr_42796_42875 = state_42761__$1;
(statearr_42796_42875[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42762 === (29))){
var inst_42715 = (state_42761[(16)]);
var inst_42675 = (state_42761[(19)]);
var inst_42679 = (state_42761[(23)]);
var inst_42681 = (state_42761[(26)]);
var inst_42683 = (state_42761[(24)]);
var inst_42678 = (state_42761[(25)]);
var inst_42711 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_42714 = (function (){var all_files = inst_42675;
var res_SINGLEQUOTE_ = inst_42678;
var res = inst_42679;
var files_not_loaded = inst_42681;
var dependencies_that_loaded = inst_42683;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_42715,inst_42675,inst_42679,inst_42681,inst_42683,inst_42678,inst_42711,state_val_42762,c__38950__auto__,map__42607,map__42607__$1,opts,before_jsload,on_jsload,reload_dependents,map__42608,map__42608__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__42713){
var map__42797 = p__42713;
var map__42797__$1 = ((((!((map__42797 == null)))?((((map__42797.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42797.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42797):map__42797);
var namespace = cljs.core.get.call(null,map__42797__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_42715,inst_42675,inst_42679,inst_42681,inst_42683,inst_42678,inst_42711,state_val_42762,c__38950__auto__,map__42607,map__42607__$1,opts,before_jsload,on_jsload,reload_dependents,map__42608,map__42608__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_42715__$1 = cljs.core.group_by.call(null,inst_42714,inst_42681);
var inst_42717 = (inst_42715__$1 == null);
var inst_42718 = cljs.core.not.call(null,inst_42717);
var state_42761__$1 = (function (){var statearr_42799 = state_42761;
(statearr_42799[(16)] = inst_42715__$1);

(statearr_42799[(28)] = inst_42711);

return statearr_42799;
})();
if(inst_42718){
var statearr_42800_42876 = state_42761__$1;
(statearr_42800_42876[(1)] = (32));

} else {
var statearr_42801_42877 = state_42761__$1;
(statearr_42801_42877[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42762 === (44))){
var inst_42737 = (state_42761[(21)]);
var inst_42750 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_42737);
var inst_42751 = cljs.core.pr_str.call(null,inst_42750);
var inst_42752 = [cljs.core.str("not required: "),cljs.core.str(inst_42751)].join('');
var inst_42753 = figwheel.client.utils.log.call(null,inst_42752);
var state_42761__$1 = state_42761;
var statearr_42802_42878 = state_42761__$1;
(statearr_42802_42878[(2)] = inst_42753);

(statearr_42802_42878[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42762 === (6))){
var inst_42656 = (state_42761[(2)]);
var state_42761__$1 = state_42761;
var statearr_42803_42879 = state_42761__$1;
(statearr_42803_42879[(2)] = inst_42656);

(statearr_42803_42879[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42762 === (28))){
var inst_42681 = (state_42761[(26)]);
var inst_42708 = (state_42761[(2)]);
var inst_42709 = cljs.core.not_empty.call(null,inst_42681);
var state_42761__$1 = (function (){var statearr_42804 = state_42761;
(statearr_42804[(29)] = inst_42708);

return statearr_42804;
})();
if(cljs.core.truth_(inst_42709)){
var statearr_42805_42880 = state_42761__$1;
(statearr_42805_42880[(1)] = (29));

} else {
var statearr_42806_42881 = state_42761__$1;
(statearr_42806_42881[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42762 === (25))){
var inst_42679 = (state_42761[(23)]);
var inst_42695 = (state_42761[(2)]);
var inst_42696 = cljs.core.not_empty.call(null,inst_42679);
var state_42761__$1 = (function (){var statearr_42807 = state_42761;
(statearr_42807[(30)] = inst_42695);

return statearr_42807;
})();
if(cljs.core.truth_(inst_42696)){
var statearr_42808_42882 = state_42761__$1;
(statearr_42808_42882[(1)] = (26));

} else {
var statearr_42809_42883 = state_42761__$1;
(statearr_42809_42883[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42762 === (34))){
var inst_42730 = (state_42761[(2)]);
var state_42761__$1 = state_42761;
if(cljs.core.truth_(inst_42730)){
var statearr_42810_42884 = state_42761__$1;
(statearr_42810_42884[(1)] = (38));

} else {
var statearr_42811_42885 = state_42761__$1;
(statearr_42811_42885[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42762 === (17))){
var state_42761__$1 = state_42761;
var statearr_42812_42886 = state_42761__$1;
(statearr_42812_42886[(2)] = recompile_dependents);

(statearr_42812_42886[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42762 === (3))){
var state_42761__$1 = state_42761;
var statearr_42813_42887 = state_42761__$1;
(statearr_42813_42887[(2)] = null);

(statearr_42813_42887[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42762 === (12))){
var inst_42652 = (state_42761[(2)]);
var state_42761__$1 = state_42761;
var statearr_42814_42888 = state_42761__$1;
(statearr_42814_42888[(2)] = inst_42652);

(statearr_42814_42888[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42762 === (2))){
var inst_42614 = (state_42761[(13)]);
var inst_42621 = cljs.core.seq.call(null,inst_42614);
var inst_42622 = inst_42621;
var inst_42623 = null;
var inst_42624 = (0);
var inst_42625 = (0);
var state_42761__$1 = (function (){var statearr_42815 = state_42761;
(statearr_42815[(7)] = inst_42623);

(statearr_42815[(8)] = inst_42622);

(statearr_42815[(9)] = inst_42624);

(statearr_42815[(10)] = inst_42625);

return statearr_42815;
})();
var statearr_42816_42889 = state_42761__$1;
(statearr_42816_42889[(2)] = null);

(statearr_42816_42889[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42762 === (23))){
var inst_42675 = (state_42761[(19)]);
var inst_42679 = (state_42761[(23)]);
var inst_42681 = (state_42761[(26)]);
var inst_42683 = (state_42761[(24)]);
var inst_42678 = (state_42761[(25)]);
var inst_42686 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_42688 = (function (){var all_files = inst_42675;
var res_SINGLEQUOTE_ = inst_42678;
var res = inst_42679;
var files_not_loaded = inst_42681;
var dependencies_that_loaded = inst_42683;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_42675,inst_42679,inst_42681,inst_42683,inst_42678,inst_42686,state_val_42762,c__38950__auto__,map__42607,map__42607__$1,opts,before_jsload,on_jsload,reload_dependents,map__42608,map__42608__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__42687){
var map__42817 = p__42687;
var map__42817__$1 = ((((!((map__42817 == null)))?((((map__42817.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42817.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42817):map__42817);
var request_url = cljs.core.get.call(null,map__42817__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_42675,inst_42679,inst_42681,inst_42683,inst_42678,inst_42686,state_val_42762,c__38950__auto__,map__42607,map__42607__$1,opts,before_jsload,on_jsload,reload_dependents,map__42608,map__42608__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_42689 = cljs.core.reverse.call(null,inst_42683);
var inst_42690 = cljs.core.map.call(null,inst_42688,inst_42689);
var inst_42691 = cljs.core.pr_str.call(null,inst_42690);
var inst_42692 = figwheel.client.utils.log.call(null,inst_42691);
var state_42761__$1 = (function (){var statearr_42819 = state_42761;
(statearr_42819[(31)] = inst_42686);

return statearr_42819;
})();
var statearr_42820_42890 = state_42761__$1;
(statearr_42820_42890[(2)] = inst_42692);

(statearr_42820_42890[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42762 === (35))){
var state_42761__$1 = state_42761;
var statearr_42821_42891 = state_42761__$1;
(statearr_42821_42891[(2)] = true);

(statearr_42821_42891[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42762 === (19))){
var inst_42665 = (state_42761[(12)]);
var inst_42671 = figwheel.client.file_reloading.expand_files.call(null,inst_42665);
var state_42761__$1 = state_42761;
var statearr_42822_42892 = state_42761__$1;
(statearr_42822_42892[(2)] = inst_42671);

(statearr_42822_42892[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42762 === (11))){
var state_42761__$1 = state_42761;
var statearr_42823_42893 = state_42761__$1;
(statearr_42823_42893[(2)] = null);

(statearr_42823_42893[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42762 === (9))){
var inst_42654 = (state_42761[(2)]);
var state_42761__$1 = state_42761;
var statearr_42824_42894 = state_42761__$1;
(statearr_42824_42894[(2)] = inst_42654);

(statearr_42824_42894[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42762 === (5))){
var inst_42624 = (state_42761[(9)]);
var inst_42625 = (state_42761[(10)]);
var inst_42627 = (inst_42625 < inst_42624);
var inst_42628 = inst_42627;
var state_42761__$1 = state_42761;
if(cljs.core.truth_(inst_42628)){
var statearr_42825_42895 = state_42761__$1;
(statearr_42825_42895[(1)] = (7));

} else {
var statearr_42826_42896 = state_42761__$1;
(statearr_42826_42896[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42762 === (14))){
var inst_42635 = (state_42761[(22)]);
var inst_42644 = cljs.core.first.call(null,inst_42635);
var inst_42645 = figwheel.client.file_reloading.eval_body.call(null,inst_42644,opts);
var inst_42646 = cljs.core.next.call(null,inst_42635);
var inst_42622 = inst_42646;
var inst_42623 = null;
var inst_42624 = (0);
var inst_42625 = (0);
var state_42761__$1 = (function (){var statearr_42827 = state_42761;
(statearr_42827[(7)] = inst_42623);

(statearr_42827[(8)] = inst_42622);

(statearr_42827[(9)] = inst_42624);

(statearr_42827[(32)] = inst_42645);

(statearr_42827[(10)] = inst_42625);

return statearr_42827;
})();
var statearr_42828_42897 = state_42761__$1;
(statearr_42828_42897[(2)] = null);

(statearr_42828_42897[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42762 === (45))){
var state_42761__$1 = state_42761;
var statearr_42829_42898 = state_42761__$1;
(statearr_42829_42898[(2)] = null);

(statearr_42829_42898[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42762 === (26))){
var inst_42675 = (state_42761[(19)]);
var inst_42679 = (state_42761[(23)]);
var inst_42681 = (state_42761[(26)]);
var inst_42683 = (state_42761[(24)]);
var inst_42678 = (state_42761[(25)]);
var inst_42698 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_42700 = (function (){var all_files = inst_42675;
var res_SINGLEQUOTE_ = inst_42678;
var res = inst_42679;
var files_not_loaded = inst_42681;
var dependencies_that_loaded = inst_42683;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_42675,inst_42679,inst_42681,inst_42683,inst_42678,inst_42698,state_val_42762,c__38950__auto__,map__42607,map__42607__$1,opts,before_jsload,on_jsload,reload_dependents,map__42608,map__42608__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__42699){
var map__42830 = p__42699;
var map__42830__$1 = ((((!((map__42830 == null)))?((((map__42830.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42830.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42830):map__42830);
var namespace = cljs.core.get.call(null,map__42830__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__42830__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_42675,inst_42679,inst_42681,inst_42683,inst_42678,inst_42698,state_val_42762,c__38950__auto__,map__42607,map__42607__$1,opts,before_jsload,on_jsload,reload_dependents,map__42608,map__42608__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_42701 = cljs.core.map.call(null,inst_42700,inst_42679);
var inst_42702 = cljs.core.pr_str.call(null,inst_42701);
var inst_42703 = figwheel.client.utils.log.call(null,inst_42702);
var inst_42704 = (function (){var all_files = inst_42675;
var res_SINGLEQUOTE_ = inst_42678;
var res = inst_42679;
var files_not_loaded = inst_42681;
var dependencies_that_loaded = inst_42683;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_42675,inst_42679,inst_42681,inst_42683,inst_42678,inst_42698,inst_42700,inst_42701,inst_42702,inst_42703,state_val_42762,c__38950__auto__,map__42607,map__42607__$1,opts,before_jsload,on_jsload,reload_dependents,map__42608,map__42608__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_42675,inst_42679,inst_42681,inst_42683,inst_42678,inst_42698,inst_42700,inst_42701,inst_42702,inst_42703,state_val_42762,c__38950__auto__,map__42607,map__42607__$1,opts,before_jsload,on_jsload,reload_dependents,map__42608,map__42608__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_42705 = setTimeout(inst_42704,(10));
var state_42761__$1 = (function (){var statearr_42832 = state_42761;
(statearr_42832[(33)] = inst_42703);

(statearr_42832[(34)] = inst_42698);

return statearr_42832;
})();
var statearr_42833_42899 = state_42761__$1;
(statearr_42833_42899[(2)] = inst_42705);

(statearr_42833_42899[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42762 === (16))){
var state_42761__$1 = state_42761;
var statearr_42834_42900 = state_42761__$1;
(statearr_42834_42900[(2)] = reload_dependents);

(statearr_42834_42900[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42762 === (38))){
var inst_42715 = (state_42761[(16)]);
var inst_42732 = cljs.core.apply.call(null,cljs.core.hash_map,inst_42715);
var state_42761__$1 = state_42761;
var statearr_42835_42901 = state_42761__$1;
(statearr_42835_42901[(2)] = inst_42732);

(statearr_42835_42901[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42762 === (30))){
var state_42761__$1 = state_42761;
var statearr_42836_42902 = state_42761__$1;
(statearr_42836_42902[(2)] = null);

(statearr_42836_42902[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42762 === (10))){
var inst_42635 = (state_42761[(22)]);
var inst_42637 = cljs.core.chunked_seq_QMARK_.call(null,inst_42635);
var state_42761__$1 = state_42761;
if(inst_42637){
var statearr_42837_42903 = state_42761__$1;
(statearr_42837_42903[(1)] = (13));

} else {
var statearr_42838_42904 = state_42761__$1;
(statearr_42838_42904[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42762 === (18))){
var inst_42669 = (state_42761[(2)]);
var state_42761__$1 = state_42761;
if(cljs.core.truth_(inst_42669)){
var statearr_42839_42905 = state_42761__$1;
(statearr_42839_42905[(1)] = (19));

} else {
var statearr_42840_42906 = state_42761__$1;
(statearr_42840_42906[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42762 === (42))){
var state_42761__$1 = state_42761;
var statearr_42841_42907 = state_42761__$1;
(statearr_42841_42907[(2)] = null);

(statearr_42841_42907[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42762 === (37))){
var inst_42727 = (state_42761[(2)]);
var state_42761__$1 = state_42761;
var statearr_42842_42908 = state_42761__$1;
(statearr_42842_42908[(2)] = inst_42727);

(statearr_42842_42908[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42762 === (8))){
var inst_42622 = (state_42761[(8)]);
var inst_42635 = (state_42761[(22)]);
var inst_42635__$1 = cljs.core.seq.call(null,inst_42622);
var state_42761__$1 = (function (){var statearr_42843 = state_42761;
(statearr_42843[(22)] = inst_42635__$1);

return statearr_42843;
})();
if(inst_42635__$1){
var statearr_42844_42909 = state_42761__$1;
(statearr_42844_42909[(1)] = (10));

} else {
var statearr_42845_42910 = state_42761__$1;
(statearr_42845_42910[(1)] = (11));

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
}
});})(c__38950__auto__,map__42607,map__42607__$1,opts,before_jsload,on_jsload,reload_dependents,map__42608,map__42608__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__38796__auto__,c__38950__auto__,map__42607,map__42607__$1,opts,before_jsload,on_jsload,reload_dependents,map__42608,map__42608__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__38797__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__38797__auto____0 = (function (){
var statearr_42849 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42849[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__38797__auto__);

(statearr_42849[(1)] = (1));

return statearr_42849;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__38797__auto____1 = (function (state_42761){
while(true){
var ret_value__38798__auto__ = (function (){try{while(true){
var result__38799__auto__ = switch__38796__auto__.call(null,state_42761);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38799__auto__;
}
break;
}
}catch (e42850){if((e42850 instanceof Object)){
var ex__38800__auto__ = e42850;
var statearr_42851_42911 = state_42761;
(statearr_42851_42911[(5)] = ex__38800__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42761);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42850;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42912 = state_42761;
state_42761 = G__42912;
continue;
} else {
return ret_value__38798__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__38797__auto__ = function(state_42761){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__38797__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__38797__auto____1.call(this,state_42761);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__38797__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__38797__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__38797__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__38797__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__38797__auto__;
})()
;})(switch__38796__auto__,c__38950__auto__,map__42607,map__42607__$1,opts,before_jsload,on_jsload,reload_dependents,map__42608,map__42608__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__38952__auto__ = (function (){var statearr_42852 = f__38951__auto__.call(null);
(statearr_42852[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38950__auto__);

return statearr_42852;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38952__auto__);
});})(c__38950__auto__,map__42607,map__42607__$1,opts,before_jsload,on_jsload,reload_dependents,map__42608,map__42608__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__38950__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__42915,link){
var map__42918 = p__42915;
var map__42918__$1 = ((((!((map__42918 == null)))?((((map__42918.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42918.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42918):map__42918);
var file = cljs.core.get.call(null,map__42918__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__42918,map__42918__$1,file){
return (function (p1__42913_SHARP_,p2__42914_SHARP_){
if(cljs.core._EQ_.call(null,p1__42913_SHARP_,p2__42914_SHARP_)){
return p1__42913_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__42918,map__42918__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__42924){
var map__42925 = p__42924;
var map__42925__$1 = ((((!((map__42925 == null)))?((((map__42925.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42925.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42925):map__42925);
var match_length = cljs.core.get.call(null,map__42925__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__42925__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__42920_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__42920_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args42927 = [];
var len__37853__auto___42930 = arguments.length;
var i__37854__auto___42931 = (0);
while(true){
if((i__37854__auto___42931 < len__37853__auto___42930)){
args42927.push((arguments[i__37854__auto___42931]));

var G__42932 = (i__37854__auto___42931 + (1));
i__37854__auto___42931 = G__42932;
continue;
} else {
}
break;
}

var G__42929 = args42927.length;
switch (G__42929) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42927.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__42934_SHARP_,p2__42935_SHARP_){
return cljs.core.assoc.call(null,p1__42934_SHARP_,cljs.core.get.call(null,p2__42935_SHARP_,key),p2__42935_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__42936){
var map__42939 = p__42936;
var map__42939__$1 = ((((!((map__42939 == null)))?((((map__42939.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42939.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42939):map__42939);
var f_data = map__42939__$1;
var file = cljs.core.get.call(null,map__42939__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__42941,p__42942){
var map__42951 = p__42941;
var map__42951__$1 = ((((!((map__42951 == null)))?((((map__42951.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42951.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42951):map__42951);
var opts = map__42951__$1;
var on_cssload = cljs.core.get.call(null,map__42951__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__42952 = p__42942;
var map__42952__$1 = ((((!((map__42952 == null)))?((((map__42952.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42952.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42952):map__42952);
var files_msg = map__42952__$1;
var files = cljs.core.get.call(null,map__42952__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__42955_42959 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
var chunk__42956_42960 = null;
var count__42957_42961 = (0);
var i__42958_42962 = (0);
while(true){
if((i__42958_42962 < count__42957_42961)){
var f_42963 = cljs.core._nth.call(null,chunk__42956_42960,i__42958_42962);
figwheel.client.file_reloading.reload_css_file.call(null,f_42963);

var G__42964 = seq__42955_42959;
var G__42965 = chunk__42956_42960;
var G__42966 = count__42957_42961;
var G__42967 = (i__42958_42962 + (1));
seq__42955_42959 = G__42964;
chunk__42956_42960 = G__42965;
count__42957_42961 = G__42966;
i__42958_42962 = G__42967;
continue;
} else {
var temp__4657__auto___42968 = cljs.core.seq.call(null,seq__42955_42959);
if(temp__4657__auto___42968){
var seq__42955_42969__$1 = temp__4657__auto___42968;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42955_42969__$1)){
var c__37589__auto___42970 = cljs.core.chunk_first.call(null,seq__42955_42969__$1);
var G__42971 = cljs.core.chunk_rest.call(null,seq__42955_42969__$1);
var G__42972 = c__37589__auto___42970;
var G__42973 = cljs.core.count.call(null,c__37589__auto___42970);
var G__42974 = (0);
seq__42955_42959 = G__42971;
chunk__42956_42960 = G__42972;
count__42957_42961 = G__42973;
i__42958_42962 = G__42974;
continue;
} else {
var f_42975 = cljs.core.first.call(null,seq__42955_42969__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_42975);

var G__42976 = cljs.core.next.call(null,seq__42955_42969__$1);
var G__42977 = null;
var G__42978 = (0);
var G__42979 = (0);
seq__42955_42959 = G__42976;
chunk__42956_42960 = G__42977;
count__42957_42961 = G__42978;
i__42958_42962 = G__42979;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__42951,map__42951__$1,opts,on_cssload,map__42952,map__42952__$1,files_msg,files){
return (function (){
figwheel.client.file_reloading.on_cssload_custom_event.call(null,files);

return on_cssload.call(null,files);
});})(map__42951,map__42951__$1,opts,on_cssload,map__42952,map__42952__$1,files_msg,files))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1483514359941