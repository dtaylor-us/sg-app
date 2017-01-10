// Compiled by ClojureScript 1.9.293 {}
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
var or__38236__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__38236__auto__){
return or__38236__auto__;
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
var or__38236__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__38236__auto__)){
return or__38236__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__45970_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__45970_SHARP_));
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
var seq__45975 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__45976 = null;
var count__45977 = (0);
var i__45978 = (0);
while(true){
if((i__45978 < count__45977)){
var n = cljs.core._nth.call(null,chunk__45976,i__45978);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__45979 = seq__45975;
var G__45980 = chunk__45976;
var G__45981 = count__45977;
var G__45982 = (i__45978 + (1));
seq__45975 = G__45979;
chunk__45976 = G__45980;
count__45977 = G__45981;
i__45978 = G__45982;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__45975);
if(temp__4657__auto__){
var seq__45975__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45975__$1)){
var c__39050__auto__ = cljs.core.chunk_first.call(null,seq__45975__$1);
var G__45983 = cljs.core.chunk_rest.call(null,seq__45975__$1);
var G__45984 = c__39050__auto__;
var G__45985 = cljs.core.count.call(null,c__39050__auto__);
var G__45986 = (0);
seq__45975 = G__45983;
chunk__45976 = G__45984;
count__45977 = G__45985;
i__45978 = G__45986;
continue;
} else {
var n = cljs.core.first.call(null,seq__45975__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__45987 = cljs.core.next.call(null,seq__45975__$1);
var G__45988 = null;
var G__45989 = (0);
var G__45990 = (0);
seq__45975 = G__45987;
chunk__45976 = G__45988;
count__45977 = G__45989;
i__45978 = G__45990;
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

var seq__46041_46052 = cljs.core.seq.call(null,deps);
var chunk__46042_46053 = null;
var count__46043_46054 = (0);
var i__46044_46055 = (0);
while(true){
if((i__46044_46055 < count__46043_46054)){
var dep_46056 = cljs.core._nth.call(null,chunk__46042_46053,i__46044_46055);
topo_sort_helper_STAR_.call(null,dep_46056,(depth + (1)),state);

var G__46057 = seq__46041_46052;
var G__46058 = chunk__46042_46053;
var G__46059 = count__46043_46054;
var G__46060 = (i__46044_46055 + (1));
seq__46041_46052 = G__46057;
chunk__46042_46053 = G__46058;
count__46043_46054 = G__46059;
i__46044_46055 = G__46060;
continue;
} else {
var temp__4657__auto___46061 = cljs.core.seq.call(null,seq__46041_46052);
if(temp__4657__auto___46061){
var seq__46041_46062__$1 = temp__4657__auto___46061;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46041_46062__$1)){
var c__39050__auto___46063 = cljs.core.chunk_first.call(null,seq__46041_46062__$1);
var G__46064 = cljs.core.chunk_rest.call(null,seq__46041_46062__$1);
var G__46065 = c__39050__auto___46063;
var G__46066 = cljs.core.count.call(null,c__39050__auto___46063);
var G__46067 = (0);
seq__46041_46052 = G__46064;
chunk__46042_46053 = G__46065;
count__46043_46054 = G__46066;
i__46044_46055 = G__46067;
continue;
} else {
var dep_46068 = cljs.core.first.call(null,seq__46041_46062__$1);
topo_sort_helper_STAR_.call(null,dep_46068,(depth + (1)),state);

var G__46069 = cljs.core.next.call(null,seq__46041_46062__$1);
var G__46070 = null;
var G__46071 = (0);
var G__46072 = (0);
seq__46041_46052 = G__46069;
chunk__46042_46053 = G__46070;
count__46043_46054 = G__46071;
i__46044_46055 = G__46072;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__46045){
var vec__46049 = p__46045;
var seq__46050 = cljs.core.seq.call(null,vec__46049);
var first__46051 = cljs.core.first.call(null,seq__46050);
var seq__46050__$1 = cljs.core.next.call(null,seq__46050);
var x = first__46051;
var xs = seq__46050__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__46049,seq__46050,first__46051,seq__46050__$1,x,xs,get_deps__$1){
return (function (p1__45991_SHARP_){
return clojure.set.difference.call(null,p1__45991_SHARP_,x);
});})(vec__46049,seq__46050,first__46051,seq__46050__$1,x,xs,get_deps__$1))
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
var seq__46085 = cljs.core.seq.call(null,provides);
var chunk__46086 = null;
var count__46087 = (0);
var i__46088 = (0);
while(true){
if((i__46088 < count__46087)){
var prov = cljs.core._nth.call(null,chunk__46086,i__46088);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__46089_46097 = cljs.core.seq.call(null,requires);
var chunk__46090_46098 = null;
var count__46091_46099 = (0);
var i__46092_46100 = (0);
while(true){
if((i__46092_46100 < count__46091_46099)){
var req_46101 = cljs.core._nth.call(null,chunk__46090_46098,i__46092_46100);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_46101,prov);

var G__46102 = seq__46089_46097;
var G__46103 = chunk__46090_46098;
var G__46104 = count__46091_46099;
var G__46105 = (i__46092_46100 + (1));
seq__46089_46097 = G__46102;
chunk__46090_46098 = G__46103;
count__46091_46099 = G__46104;
i__46092_46100 = G__46105;
continue;
} else {
var temp__4657__auto___46106 = cljs.core.seq.call(null,seq__46089_46097);
if(temp__4657__auto___46106){
var seq__46089_46107__$1 = temp__4657__auto___46106;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46089_46107__$1)){
var c__39050__auto___46108 = cljs.core.chunk_first.call(null,seq__46089_46107__$1);
var G__46109 = cljs.core.chunk_rest.call(null,seq__46089_46107__$1);
var G__46110 = c__39050__auto___46108;
var G__46111 = cljs.core.count.call(null,c__39050__auto___46108);
var G__46112 = (0);
seq__46089_46097 = G__46109;
chunk__46090_46098 = G__46110;
count__46091_46099 = G__46111;
i__46092_46100 = G__46112;
continue;
} else {
var req_46113 = cljs.core.first.call(null,seq__46089_46107__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_46113,prov);

var G__46114 = cljs.core.next.call(null,seq__46089_46107__$1);
var G__46115 = null;
var G__46116 = (0);
var G__46117 = (0);
seq__46089_46097 = G__46114;
chunk__46090_46098 = G__46115;
count__46091_46099 = G__46116;
i__46092_46100 = G__46117;
continue;
}
} else {
}
}
break;
}

var G__46118 = seq__46085;
var G__46119 = chunk__46086;
var G__46120 = count__46087;
var G__46121 = (i__46088 + (1));
seq__46085 = G__46118;
chunk__46086 = G__46119;
count__46087 = G__46120;
i__46088 = G__46121;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__46085);
if(temp__4657__auto__){
var seq__46085__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46085__$1)){
var c__39050__auto__ = cljs.core.chunk_first.call(null,seq__46085__$1);
var G__46122 = cljs.core.chunk_rest.call(null,seq__46085__$1);
var G__46123 = c__39050__auto__;
var G__46124 = cljs.core.count.call(null,c__39050__auto__);
var G__46125 = (0);
seq__46085 = G__46122;
chunk__46086 = G__46123;
count__46087 = G__46124;
i__46088 = G__46125;
continue;
} else {
var prov = cljs.core.first.call(null,seq__46085__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__46093_46126 = cljs.core.seq.call(null,requires);
var chunk__46094_46127 = null;
var count__46095_46128 = (0);
var i__46096_46129 = (0);
while(true){
if((i__46096_46129 < count__46095_46128)){
var req_46130 = cljs.core._nth.call(null,chunk__46094_46127,i__46096_46129);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_46130,prov);

var G__46131 = seq__46093_46126;
var G__46132 = chunk__46094_46127;
var G__46133 = count__46095_46128;
var G__46134 = (i__46096_46129 + (1));
seq__46093_46126 = G__46131;
chunk__46094_46127 = G__46132;
count__46095_46128 = G__46133;
i__46096_46129 = G__46134;
continue;
} else {
var temp__4657__auto___46135__$1 = cljs.core.seq.call(null,seq__46093_46126);
if(temp__4657__auto___46135__$1){
var seq__46093_46136__$1 = temp__4657__auto___46135__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46093_46136__$1)){
var c__39050__auto___46137 = cljs.core.chunk_first.call(null,seq__46093_46136__$1);
var G__46138 = cljs.core.chunk_rest.call(null,seq__46093_46136__$1);
var G__46139 = c__39050__auto___46137;
var G__46140 = cljs.core.count.call(null,c__39050__auto___46137);
var G__46141 = (0);
seq__46093_46126 = G__46138;
chunk__46094_46127 = G__46139;
count__46095_46128 = G__46140;
i__46096_46129 = G__46141;
continue;
} else {
var req_46142 = cljs.core.first.call(null,seq__46093_46136__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_46142,prov);

var G__46143 = cljs.core.next.call(null,seq__46093_46136__$1);
var G__46144 = null;
var G__46145 = (0);
var G__46146 = (0);
seq__46093_46126 = G__46143;
chunk__46094_46127 = G__46144;
count__46095_46128 = G__46145;
i__46096_46129 = G__46146;
continue;
}
} else {
}
}
break;
}

var G__46147 = cljs.core.next.call(null,seq__46085__$1);
var G__46148 = null;
var G__46149 = (0);
var G__46150 = (0);
seq__46085 = G__46147;
chunk__46086 = G__46148;
count__46087 = G__46149;
i__46088 = G__46150;
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
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__46155_46159 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__46156_46160 = null;
var count__46157_46161 = (0);
var i__46158_46162 = (0);
while(true){
if((i__46158_46162 < count__46157_46161)){
var ns_46163 = cljs.core._nth.call(null,chunk__46156_46160,i__46158_46162);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_46163);

var G__46164 = seq__46155_46159;
var G__46165 = chunk__46156_46160;
var G__46166 = count__46157_46161;
var G__46167 = (i__46158_46162 + (1));
seq__46155_46159 = G__46164;
chunk__46156_46160 = G__46165;
count__46157_46161 = G__46166;
i__46158_46162 = G__46167;
continue;
} else {
var temp__4657__auto___46168 = cljs.core.seq.call(null,seq__46155_46159);
if(temp__4657__auto___46168){
var seq__46155_46169__$1 = temp__4657__auto___46168;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46155_46169__$1)){
var c__39050__auto___46170 = cljs.core.chunk_first.call(null,seq__46155_46169__$1);
var G__46171 = cljs.core.chunk_rest.call(null,seq__46155_46169__$1);
var G__46172 = c__39050__auto___46170;
var G__46173 = cljs.core.count.call(null,c__39050__auto___46170);
var G__46174 = (0);
seq__46155_46159 = G__46171;
chunk__46156_46160 = G__46172;
count__46157_46161 = G__46173;
i__46158_46162 = G__46174;
continue;
} else {
var ns_46175 = cljs.core.first.call(null,seq__46155_46169__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_46175);

var G__46176 = cljs.core.next.call(null,seq__46155_46169__$1);
var G__46177 = null;
var G__46178 = (0);
var G__46179 = (0);
seq__46155_46159 = G__46176;
chunk__46156_46160 = G__46177;
count__46157_46161 = G__46178;
i__46158_46162 = G__46179;
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
goog.require_figwheel_backup_ = (function (){var or__38236__auto__ = goog.require__;
if(cljs.core.truth_(or__38236__auto__)){
return or__38236__auto__;
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
var G__46180__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__46180 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46181__i = 0, G__46181__a = new Array(arguments.length -  0);
while (G__46181__i < G__46181__a.length) {G__46181__a[G__46181__i] = arguments[G__46181__i + 0]; ++G__46181__i;}
  args = new cljs.core.IndexedSeq(G__46181__a,0);
} 
return G__46180__delegate.call(this,args);};
G__46180.cljs$lang$maxFixedArity = 0;
G__46180.cljs$lang$applyTo = (function (arglist__46182){
var args = cljs.core.seq(arglist__46182);
return G__46180__delegate(args);
});
G__46180.cljs$core$IFn$_invoke$arity$variadic = G__46180__delegate;
return G__46180;
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
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__46184 = cljs.core._EQ_;
var expr__46185 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__46184.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__46185))){
var path_parts = ((function (pred__46184,expr__46185){
return (function (p1__46183_SHARP_){
return clojure.string.split.call(null,p1__46183_SHARP_,/[\/\\]/);
});})(pred__46184,expr__46185))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__46184,expr__46185){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e46187){if((e46187 instanceof Error)){
var e = e46187;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e46187;

}
}})());
});
;})(path_parts,sep,root,pred__46184,expr__46185))
} else {
if(cljs.core.truth_(pred__46184.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__46185))){
return ((function (pred__46184,expr__46185){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__46184,expr__46185){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__46184,expr__46185))
);

return deferred.addErrback(((function (deferred,pred__46184,expr__46185){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__46184,expr__46185))
);
});
;})(pred__46184,expr__46185))
} else {
return ((function (pred__46184,expr__46185){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__46184,expr__46185))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__46188,callback){
var map__46191 = p__46188;
var map__46191__$1 = ((((!((map__46191 == null)))?((((map__46191.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46191.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46191):map__46191);
var file_msg = map__46191__$1;
var request_url = cljs.core.get.call(null,map__46191__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__46191,map__46191__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__46191,map__46191__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__43136__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43136__auto__){
return (function (){
var f__43137__auto__ = (function (){var switch__43115__auto__ = ((function (c__43136__auto__){
return (function (state_46215){
var state_val_46216 = (state_46215[(1)]);
if((state_val_46216 === (7))){
var inst_46211 = (state_46215[(2)]);
var state_46215__$1 = state_46215;
var statearr_46217_46237 = state_46215__$1;
(statearr_46217_46237[(2)] = inst_46211);

(statearr_46217_46237[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46216 === (1))){
var state_46215__$1 = state_46215;
var statearr_46218_46238 = state_46215__$1;
(statearr_46218_46238[(2)] = null);

(statearr_46218_46238[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46216 === (4))){
var inst_46195 = (state_46215[(7)]);
var inst_46195__$1 = (state_46215[(2)]);
var state_46215__$1 = (function (){var statearr_46219 = state_46215;
(statearr_46219[(7)] = inst_46195__$1);

return statearr_46219;
})();
if(cljs.core.truth_(inst_46195__$1)){
var statearr_46220_46239 = state_46215__$1;
(statearr_46220_46239[(1)] = (5));

} else {
var statearr_46221_46240 = state_46215__$1;
(statearr_46221_46240[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46216 === (6))){
var state_46215__$1 = state_46215;
var statearr_46222_46241 = state_46215__$1;
(statearr_46222_46241[(2)] = null);

(statearr_46222_46241[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46216 === (3))){
var inst_46213 = (state_46215[(2)]);
var state_46215__$1 = state_46215;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46215__$1,inst_46213);
} else {
if((state_val_46216 === (2))){
var state_46215__$1 = state_46215;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46215__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_46216 === (11))){
var inst_46207 = (state_46215[(2)]);
var state_46215__$1 = (function (){var statearr_46223 = state_46215;
(statearr_46223[(8)] = inst_46207);

return statearr_46223;
})();
var statearr_46224_46242 = state_46215__$1;
(statearr_46224_46242[(2)] = null);

(statearr_46224_46242[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46216 === (9))){
var inst_46201 = (state_46215[(9)]);
var inst_46199 = (state_46215[(10)]);
var inst_46203 = inst_46201.call(null,inst_46199);
var state_46215__$1 = state_46215;
var statearr_46225_46243 = state_46215__$1;
(statearr_46225_46243[(2)] = inst_46203);

(statearr_46225_46243[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46216 === (5))){
var inst_46195 = (state_46215[(7)]);
var inst_46197 = figwheel.client.file_reloading.blocking_load.call(null,inst_46195);
var state_46215__$1 = state_46215;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46215__$1,(8),inst_46197);
} else {
if((state_val_46216 === (10))){
var inst_46199 = (state_46215[(10)]);
var inst_46205 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_46199);
var state_46215__$1 = state_46215;
var statearr_46226_46244 = state_46215__$1;
(statearr_46226_46244[(2)] = inst_46205);

(statearr_46226_46244[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46216 === (8))){
var inst_46195 = (state_46215[(7)]);
var inst_46201 = (state_46215[(9)]);
var inst_46199 = (state_46215[(2)]);
var inst_46200 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_46201__$1 = cljs.core.get.call(null,inst_46200,inst_46195);
var state_46215__$1 = (function (){var statearr_46227 = state_46215;
(statearr_46227[(9)] = inst_46201__$1);

(statearr_46227[(10)] = inst_46199);

return statearr_46227;
})();
if(cljs.core.truth_(inst_46201__$1)){
var statearr_46228_46245 = state_46215__$1;
(statearr_46228_46245[(1)] = (9));

} else {
var statearr_46229_46246 = state_46215__$1;
(statearr_46229_46246[(1)] = (10));

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
});})(c__43136__auto__))
;
return ((function (switch__43115__auto__,c__43136__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__43116__auto__ = null;
var figwheel$client$file_reloading$state_machine__43116__auto____0 = (function (){
var statearr_46233 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46233[(0)] = figwheel$client$file_reloading$state_machine__43116__auto__);

(statearr_46233[(1)] = (1));

return statearr_46233;
});
var figwheel$client$file_reloading$state_machine__43116__auto____1 = (function (state_46215){
while(true){
var ret_value__43117__auto__ = (function (){try{while(true){
var result__43118__auto__ = switch__43115__auto__.call(null,state_46215);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43118__auto__;
}
break;
}
}catch (e46234){if((e46234 instanceof Object)){
var ex__43119__auto__ = e46234;
var statearr_46235_46247 = state_46215;
(statearr_46235_46247[(5)] = ex__43119__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46215);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46234;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46248 = state_46215;
state_46215 = G__46248;
continue;
} else {
return ret_value__43117__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__43116__auto__ = function(state_46215){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__43116__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__43116__auto____1.call(this,state_46215);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__43116__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__43116__auto____0;
figwheel$client$file_reloading$state_machine__43116__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__43116__auto____1;
return figwheel$client$file_reloading$state_machine__43116__auto__;
})()
;})(switch__43115__auto__,c__43136__auto__))
})();
var state__43138__auto__ = (function (){var statearr_46236 = f__43137__auto__.call(null);
(statearr_46236[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43136__auto__);

return statearr_46236;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43138__auto__);
});})(c__43136__auto__))
);

return c__43136__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__46249,callback){
var map__46252 = p__46249;
var map__46252__$1 = ((((!((map__46252 == null)))?((((map__46252.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46252.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46252):map__46252);
var file_msg = map__46252__$1;
var namespace = cljs.core.get.call(null,map__46252__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__46252,map__46252__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__46252,map__46252__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__46254){
var map__46257 = p__46254;
var map__46257__$1 = ((((!((map__46257 == null)))?((((map__46257.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46257.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46257):map__46257);
var file_msg = map__46257__$1;
var namespace = cljs.core.get.call(null,map__46257__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__38224__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__38224__auto__){
var or__38236__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__38236__auto__)){
return or__38236__auto__;
} else {
var or__38236__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__38236__auto____$1)){
return or__38236__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__38224__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__46259,callback){
var map__46262 = p__46259;
var map__46262__$1 = ((((!((map__46262 == null)))?((((map__46262.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46262.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46262):map__46262);
var file_msg = map__46262__$1;
var request_url = cljs.core.get.call(null,map__46262__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__46262__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__43136__auto___46366 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43136__auto___46366,out){
return (function (){
var f__43137__auto__ = (function (){var switch__43115__auto__ = ((function (c__43136__auto___46366,out){
return (function (state_46348){
var state_val_46349 = (state_46348[(1)]);
if((state_val_46349 === (1))){
var inst_46322 = cljs.core.seq.call(null,files);
var inst_46323 = cljs.core.first.call(null,inst_46322);
var inst_46324 = cljs.core.next.call(null,inst_46322);
var inst_46325 = files;
var state_46348__$1 = (function (){var statearr_46350 = state_46348;
(statearr_46350[(7)] = inst_46325);

(statearr_46350[(8)] = inst_46323);

(statearr_46350[(9)] = inst_46324);

return statearr_46350;
})();
var statearr_46351_46367 = state_46348__$1;
(statearr_46351_46367[(2)] = null);

(statearr_46351_46367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46349 === (2))){
var inst_46331 = (state_46348[(10)]);
var inst_46325 = (state_46348[(7)]);
var inst_46330 = cljs.core.seq.call(null,inst_46325);
var inst_46331__$1 = cljs.core.first.call(null,inst_46330);
var inst_46332 = cljs.core.next.call(null,inst_46330);
var inst_46333 = (inst_46331__$1 == null);
var inst_46334 = cljs.core.not.call(null,inst_46333);
var state_46348__$1 = (function (){var statearr_46352 = state_46348;
(statearr_46352[(10)] = inst_46331__$1);

(statearr_46352[(11)] = inst_46332);

return statearr_46352;
})();
if(inst_46334){
var statearr_46353_46368 = state_46348__$1;
(statearr_46353_46368[(1)] = (4));

} else {
var statearr_46354_46369 = state_46348__$1;
(statearr_46354_46369[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46349 === (3))){
var inst_46346 = (state_46348[(2)]);
var state_46348__$1 = state_46348;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46348__$1,inst_46346);
} else {
if((state_val_46349 === (4))){
var inst_46331 = (state_46348[(10)]);
var inst_46336 = figwheel.client.file_reloading.reload_js_file.call(null,inst_46331);
var state_46348__$1 = state_46348;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46348__$1,(7),inst_46336);
} else {
if((state_val_46349 === (5))){
var inst_46342 = cljs.core.async.close_BANG_.call(null,out);
var state_46348__$1 = state_46348;
var statearr_46355_46370 = state_46348__$1;
(statearr_46355_46370[(2)] = inst_46342);

(statearr_46355_46370[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46349 === (6))){
var inst_46344 = (state_46348[(2)]);
var state_46348__$1 = state_46348;
var statearr_46356_46371 = state_46348__$1;
(statearr_46356_46371[(2)] = inst_46344);

(statearr_46356_46371[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46349 === (7))){
var inst_46332 = (state_46348[(11)]);
var inst_46338 = (state_46348[(2)]);
var inst_46339 = cljs.core.async.put_BANG_.call(null,out,inst_46338);
var inst_46325 = inst_46332;
var state_46348__$1 = (function (){var statearr_46357 = state_46348;
(statearr_46357[(12)] = inst_46339);

(statearr_46357[(7)] = inst_46325);

return statearr_46357;
})();
var statearr_46358_46372 = state_46348__$1;
(statearr_46358_46372[(2)] = null);

(statearr_46358_46372[(1)] = (2));


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
});})(c__43136__auto___46366,out))
;
return ((function (switch__43115__auto__,c__43136__auto___46366,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__43116__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__43116__auto____0 = (function (){
var statearr_46362 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46362[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__43116__auto__);

(statearr_46362[(1)] = (1));

return statearr_46362;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__43116__auto____1 = (function (state_46348){
while(true){
var ret_value__43117__auto__ = (function (){try{while(true){
var result__43118__auto__ = switch__43115__auto__.call(null,state_46348);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43118__auto__;
}
break;
}
}catch (e46363){if((e46363 instanceof Object)){
var ex__43119__auto__ = e46363;
var statearr_46364_46373 = state_46348;
(statearr_46364_46373[(5)] = ex__43119__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46348);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46363;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46374 = state_46348;
state_46348 = G__46374;
continue;
} else {
return ret_value__43117__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__43116__auto__ = function(state_46348){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__43116__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__43116__auto____1.call(this,state_46348);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__43116__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__43116__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__43116__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__43116__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__43116__auto__;
})()
;})(switch__43115__auto__,c__43136__auto___46366,out))
})();
var state__43138__auto__ = (function (){var statearr_46365 = f__43137__auto__.call(null);
(statearr_46365[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43136__auto___46366);

return statearr_46365;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43138__auto__);
});})(c__43136__auto___46366,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__46375,opts){
var map__46379 = p__46375;
var map__46379__$1 = ((((!((map__46379 == null)))?((((map__46379.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46379.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46379):map__46379);
var eval_body = cljs.core.get.call(null,map__46379__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__46379__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__38224__auto__ = eval_body;
if(cljs.core.truth_(and__38224__auto__)){
return typeof eval_body === 'string';
} else {
return and__38224__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e46381){var e = e46381;
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
return (function (p1__46382_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__46382_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__46391){
var vec__46392 = p__46391;
var k = cljs.core.nth.call(null,vec__46392,(0),null);
var v = cljs.core.nth.call(null,vec__46392,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__46395){
var vec__46396 = p__46395;
var k = cljs.core.nth.call(null,vec__46396,(0),null);
var v = cljs.core.nth.call(null,vec__46396,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__46402,p__46403){
var map__46651 = p__46402;
var map__46651__$1 = ((((!((map__46651 == null)))?((((map__46651.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46651.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46651):map__46651);
var opts = map__46651__$1;
var before_jsload = cljs.core.get.call(null,map__46651__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__46651__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__46651__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__46652 = p__46403;
var map__46652__$1 = ((((!((map__46652 == null)))?((((map__46652.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46652.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46652):map__46652);
var msg = map__46652__$1;
var files = cljs.core.get.call(null,map__46652__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__46652__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__46652__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__43136__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43136__auto__,map__46651,map__46651__$1,opts,before_jsload,on_jsload,reload_dependents,map__46652,map__46652__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__43137__auto__ = (function (){var switch__43115__auto__ = ((function (c__43136__auto__,map__46651,map__46651__$1,opts,before_jsload,on_jsload,reload_dependents,map__46652,map__46652__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_46806){
var state_val_46807 = (state_46806[(1)]);
if((state_val_46807 === (7))){
var inst_46669 = (state_46806[(7)]);
var inst_46667 = (state_46806[(8)]);
var inst_46668 = (state_46806[(9)]);
var inst_46666 = (state_46806[(10)]);
var inst_46674 = cljs.core._nth.call(null,inst_46667,inst_46669);
var inst_46675 = figwheel.client.file_reloading.eval_body.call(null,inst_46674,opts);
var inst_46676 = (inst_46669 + (1));
var tmp46808 = inst_46667;
var tmp46809 = inst_46668;
var tmp46810 = inst_46666;
var inst_46666__$1 = tmp46810;
var inst_46667__$1 = tmp46808;
var inst_46668__$1 = tmp46809;
var inst_46669__$1 = inst_46676;
var state_46806__$1 = (function (){var statearr_46811 = state_46806;
(statearr_46811[(7)] = inst_46669__$1);

(statearr_46811[(8)] = inst_46667__$1);

(statearr_46811[(9)] = inst_46668__$1);

(statearr_46811[(11)] = inst_46675);

(statearr_46811[(10)] = inst_46666__$1);

return statearr_46811;
})();
var statearr_46812_46898 = state_46806__$1;
(statearr_46812_46898[(2)] = null);

(statearr_46812_46898[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46807 === (20))){
var inst_46709 = (state_46806[(12)]);
var inst_46717 = figwheel.client.file_reloading.sort_files.call(null,inst_46709);
var state_46806__$1 = state_46806;
var statearr_46813_46899 = state_46806__$1;
(statearr_46813_46899[(2)] = inst_46717);

(statearr_46813_46899[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46807 === (27))){
var state_46806__$1 = state_46806;
var statearr_46814_46900 = state_46806__$1;
(statearr_46814_46900[(2)] = null);

(statearr_46814_46900[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46807 === (1))){
var inst_46658 = (state_46806[(13)]);
var inst_46655 = before_jsload.call(null,files);
var inst_46656 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_46657 = (function (){return ((function (inst_46658,inst_46655,inst_46656,state_val_46807,c__43136__auto__,map__46651,map__46651__$1,opts,before_jsload,on_jsload,reload_dependents,map__46652,map__46652__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__46399_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__46399_SHARP_);
});
;})(inst_46658,inst_46655,inst_46656,state_val_46807,c__43136__auto__,map__46651,map__46651__$1,opts,before_jsload,on_jsload,reload_dependents,map__46652,map__46652__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_46658__$1 = cljs.core.filter.call(null,inst_46657,files);
var inst_46659 = cljs.core.not_empty.call(null,inst_46658__$1);
var state_46806__$1 = (function (){var statearr_46815 = state_46806;
(statearr_46815[(13)] = inst_46658__$1);

(statearr_46815[(14)] = inst_46656);

(statearr_46815[(15)] = inst_46655);

return statearr_46815;
})();
if(cljs.core.truth_(inst_46659)){
var statearr_46816_46901 = state_46806__$1;
(statearr_46816_46901[(1)] = (2));

} else {
var statearr_46817_46902 = state_46806__$1;
(statearr_46817_46902[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46807 === (24))){
var state_46806__$1 = state_46806;
var statearr_46818_46903 = state_46806__$1;
(statearr_46818_46903[(2)] = null);

(statearr_46818_46903[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46807 === (39))){
var inst_46759 = (state_46806[(16)]);
var state_46806__$1 = state_46806;
var statearr_46819_46904 = state_46806__$1;
(statearr_46819_46904[(2)] = inst_46759);

(statearr_46819_46904[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46807 === (46))){
var inst_46801 = (state_46806[(2)]);
var state_46806__$1 = state_46806;
var statearr_46820_46905 = state_46806__$1;
(statearr_46820_46905[(2)] = inst_46801);

(statearr_46820_46905[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46807 === (4))){
var inst_46703 = (state_46806[(2)]);
var inst_46704 = cljs.core.List.EMPTY;
var inst_46705 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_46704);
var inst_46706 = (function (){return ((function (inst_46703,inst_46704,inst_46705,state_val_46807,c__43136__auto__,map__46651,map__46651__$1,opts,before_jsload,on_jsload,reload_dependents,map__46652,map__46652__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__46400_SHARP_){
var and__38224__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__46400_SHARP_);
if(cljs.core.truth_(and__38224__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__46400_SHARP_));
} else {
return and__38224__auto__;
}
});
;})(inst_46703,inst_46704,inst_46705,state_val_46807,c__43136__auto__,map__46651,map__46651__$1,opts,before_jsload,on_jsload,reload_dependents,map__46652,map__46652__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_46707 = cljs.core.filter.call(null,inst_46706,files);
var inst_46708 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_46709 = cljs.core.concat.call(null,inst_46707,inst_46708);
var state_46806__$1 = (function (){var statearr_46821 = state_46806;
(statearr_46821[(17)] = inst_46703);

(statearr_46821[(12)] = inst_46709);

(statearr_46821[(18)] = inst_46705);

return statearr_46821;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_46822_46906 = state_46806__$1;
(statearr_46822_46906[(1)] = (16));

} else {
var statearr_46823_46907 = state_46806__$1;
(statearr_46823_46907[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46807 === (15))){
var inst_46693 = (state_46806[(2)]);
var state_46806__$1 = state_46806;
var statearr_46824_46908 = state_46806__$1;
(statearr_46824_46908[(2)] = inst_46693);

(statearr_46824_46908[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46807 === (21))){
var inst_46719 = (state_46806[(19)]);
var inst_46719__$1 = (state_46806[(2)]);
var inst_46720 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_46719__$1);
var state_46806__$1 = (function (){var statearr_46825 = state_46806;
(statearr_46825[(19)] = inst_46719__$1);

return statearr_46825;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46806__$1,(22),inst_46720);
} else {
if((state_val_46807 === (31))){
var inst_46804 = (state_46806[(2)]);
var state_46806__$1 = state_46806;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46806__$1,inst_46804);
} else {
if((state_val_46807 === (32))){
var inst_46759 = (state_46806[(16)]);
var inst_46764 = inst_46759.cljs$lang$protocol_mask$partition0$;
var inst_46765 = (inst_46764 & (64));
var inst_46766 = inst_46759.cljs$core$ISeq$;
var inst_46767 = (cljs.core.PROTOCOL_SENTINEL === inst_46766);
var inst_46768 = (inst_46765) || (inst_46767);
var state_46806__$1 = state_46806;
if(cljs.core.truth_(inst_46768)){
var statearr_46826_46909 = state_46806__$1;
(statearr_46826_46909[(1)] = (35));

} else {
var statearr_46827_46910 = state_46806__$1;
(statearr_46827_46910[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46807 === (40))){
var inst_46781 = (state_46806[(20)]);
var inst_46780 = (state_46806[(2)]);
var inst_46781__$1 = cljs.core.get.call(null,inst_46780,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_46782 = cljs.core.get.call(null,inst_46780,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_46783 = cljs.core.not_empty.call(null,inst_46781__$1);
var state_46806__$1 = (function (){var statearr_46828 = state_46806;
(statearr_46828[(21)] = inst_46782);

(statearr_46828[(20)] = inst_46781__$1);

return statearr_46828;
})();
if(cljs.core.truth_(inst_46783)){
var statearr_46829_46911 = state_46806__$1;
(statearr_46829_46911[(1)] = (41));

} else {
var statearr_46830_46912 = state_46806__$1;
(statearr_46830_46912[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46807 === (33))){
var state_46806__$1 = state_46806;
var statearr_46831_46913 = state_46806__$1;
(statearr_46831_46913[(2)] = false);

(statearr_46831_46913[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46807 === (13))){
var inst_46679 = (state_46806[(22)]);
var inst_46683 = cljs.core.chunk_first.call(null,inst_46679);
var inst_46684 = cljs.core.chunk_rest.call(null,inst_46679);
var inst_46685 = cljs.core.count.call(null,inst_46683);
var inst_46666 = inst_46684;
var inst_46667 = inst_46683;
var inst_46668 = inst_46685;
var inst_46669 = (0);
var state_46806__$1 = (function (){var statearr_46832 = state_46806;
(statearr_46832[(7)] = inst_46669);

(statearr_46832[(8)] = inst_46667);

(statearr_46832[(9)] = inst_46668);

(statearr_46832[(10)] = inst_46666);

return statearr_46832;
})();
var statearr_46833_46914 = state_46806__$1;
(statearr_46833_46914[(2)] = null);

(statearr_46833_46914[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46807 === (22))){
var inst_46723 = (state_46806[(23)]);
var inst_46719 = (state_46806[(19)]);
var inst_46727 = (state_46806[(24)]);
var inst_46722 = (state_46806[(25)]);
var inst_46722__$1 = (state_46806[(2)]);
var inst_46723__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_46722__$1);
var inst_46724 = (function (){var all_files = inst_46719;
var res_SINGLEQUOTE_ = inst_46722__$1;
var res = inst_46723__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_46723,inst_46719,inst_46727,inst_46722,inst_46722__$1,inst_46723__$1,state_val_46807,c__43136__auto__,map__46651,map__46651__$1,opts,before_jsload,on_jsload,reload_dependents,map__46652,map__46652__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__46401_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__46401_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_46723,inst_46719,inst_46727,inst_46722,inst_46722__$1,inst_46723__$1,state_val_46807,c__43136__auto__,map__46651,map__46651__$1,opts,before_jsload,on_jsload,reload_dependents,map__46652,map__46652__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_46725 = cljs.core.filter.call(null,inst_46724,inst_46722__$1);
var inst_46726 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_46727__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_46726);
var inst_46728 = cljs.core.not_empty.call(null,inst_46727__$1);
var state_46806__$1 = (function (){var statearr_46834 = state_46806;
(statearr_46834[(23)] = inst_46723__$1);

(statearr_46834[(24)] = inst_46727__$1);

(statearr_46834[(25)] = inst_46722__$1);

(statearr_46834[(26)] = inst_46725);

return statearr_46834;
})();
if(cljs.core.truth_(inst_46728)){
var statearr_46835_46915 = state_46806__$1;
(statearr_46835_46915[(1)] = (23));

} else {
var statearr_46836_46916 = state_46806__$1;
(statearr_46836_46916[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46807 === (36))){
var state_46806__$1 = state_46806;
var statearr_46837_46917 = state_46806__$1;
(statearr_46837_46917[(2)] = false);

(statearr_46837_46917[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46807 === (41))){
var inst_46781 = (state_46806[(20)]);
var inst_46785 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_46786 = cljs.core.map.call(null,inst_46785,inst_46781);
var inst_46787 = cljs.core.pr_str.call(null,inst_46786);
var inst_46788 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_46787)].join('');
var inst_46789 = figwheel.client.utils.log.call(null,inst_46788);
var state_46806__$1 = state_46806;
var statearr_46838_46918 = state_46806__$1;
(statearr_46838_46918[(2)] = inst_46789);

(statearr_46838_46918[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46807 === (43))){
var inst_46782 = (state_46806[(21)]);
var inst_46792 = (state_46806[(2)]);
var inst_46793 = cljs.core.not_empty.call(null,inst_46782);
var state_46806__$1 = (function (){var statearr_46839 = state_46806;
(statearr_46839[(27)] = inst_46792);

return statearr_46839;
})();
if(cljs.core.truth_(inst_46793)){
var statearr_46840_46919 = state_46806__$1;
(statearr_46840_46919[(1)] = (44));

} else {
var statearr_46841_46920 = state_46806__$1;
(statearr_46841_46920[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46807 === (29))){
var inst_46759 = (state_46806[(16)]);
var inst_46723 = (state_46806[(23)]);
var inst_46719 = (state_46806[(19)]);
var inst_46727 = (state_46806[(24)]);
var inst_46722 = (state_46806[(25)]);
var inst_46725 = (state_46806[(26)]);
var inst_46755 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_46758 = (function (){var all_files = inst_46719;
var res_SINGLEQUOTE_ = inst_46722;
var res = inst_46723;
var files_not_loaded = inst_46725;
var dependencies_that_loaded = inst_46727;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_46759,inst_46723,inst_46719,inst_46727,inst_46722,inst_46725,inst_46755,state_val_46807,c__43136__auto__,map__46651,map__46651__$1,opts,before_jsload,on_jsload,reload_dependents,map__46652,map__46652__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__46757){
var map__46842 = p__46757;
var map__46842__$1 = ((((!((map__46842 == null)))?((((map__46842.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46842.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46842):map__46842);
var namespace = cljs.core.get.call(null,map__46842__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_46759,inst_46723,inst_46719,inst_46727,inst_46722,inst_46725,inst_46755,state_val_46807,c__43136__auto__,map__46651,map__46651__$1,opts,before_jsload,on_jsload,reload_dependents,map__46652,map__46652__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_46759__$1 = cljs.core.group_by.call(null,inst_46758,inst_46725);
var inst_46761 = (inst_46759__$1 == null);
var inst_46762 = cljs.core.not.call(null,inst_46761);
var state_46806__$1 = (function (){var statearr_46844 = state_46806;
(statearr_46844[(16)] = inst_46759__$1);

(statearr_46844[(28)] = inst_46755);

return statearr_46844;
})();
if(inst_46762){
var statearr_46845_46921 = state_46806__$1;
(statearr_46845_46921[(1)] = (32));

} else {
var statearr_46846_46922 = state_46806__$1;
(statearr_46846_46922[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46807 === (44))){
var inst_46782 = (state_46806[(21)]);
var inst_46795 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_46782);
var inst_46796 = cljs.core.pr_str.call(null,inst_46795);
var inst_46797 = [cljs.core.str("not required: "),cljs.core.str(inst_46796)].join('');
var inst_46798 = figwheel.client.utils.log.call(null,inst_46797);
var state_46806__$1 = state_46806;
var statearr_46847_46923 = state_46806__$1;
(statearr_46847_46923[(2)] = inst_46798);

(statearr_46847_46923[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46807 === (6))){
var inst_46700 = (state_46806[(2)]);
var state_46806__$1 = state_46806;
var statearr_46848_46924 = state_46806__$1;
(statearr_46848_46924[(2)] = inst_46700);

(statearr_46848_46924[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46807 === (28))){
var inst_46725 = (state_46806[(26)]);
var inst_46752 = (state_46806[(2)]);
var inst_46753 = cljs.core.not_empty.call(null,inst_46725);
var state_46806__$1 = (function (){var statearr_46849 = state_46806;
(statearr_46849[(29)] = inst_46752);

return statearr_46849;
})();
if(cljs.core.truth_(inst_46753)){
var statearr_46850_46925 = state_46806__$1;
(statearr_46850_46925[(1)] = (29));

} else {
var statearr_46851_46926 = state_46806__$1;
(statearr_46851_46926[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46807 === (25))){
var inst_46723 = (state_46806[(23)]);
var inst_46739 = (state_46806[(2)]);
var inst_46740 = cljs.core.not_empty.call(null,inst_46723);
var state_46806__$1 = (function (){var statearr_46852 = state_46806;
(statearr_46852[(30)] = inst_46739);

return statearr_46852;
})();
if(cljs.core.truth_(inst_46740)){
var statearr_46853_46927 = state_46806__$1;
(statearr_46853_46927[(1)] = (26));

} else {
var statearr_46854_46928 = state_46806__$1;
(statearr_46854_46928[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46807 === (34))){
var inst_46775 = (state_46806[(2)]);
var state_46806__$1 = state_46806;
if(cljs.core.truth_(inst_46775)){
var statearr_46855_46929 = state_46806__$1;
(statearr_46855_46929[(1)] = (38));

} else {
var statearr_46856_46930 = state_46806__$1;
(statearr_46856_46930[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46807 === (17))){
var state_46806__$1 = state_46806;
var statearr_46857_46931 = state_46806__$1;
(statearr_46857_46931[(2)] = recompile_dependents);

(statearr_46857_46931[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46807 === (3))){
var state_46806__$1 = state_46806;
var statearr_46858_46932 = state_46806__$1;
(statearr_46858_46932[(2)] = null);

(statearr_46858_46932[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46807 === (12))){
var inst_46696 = (state_46806[(2)]);
var state_46806__$1 = state_46806;
var statearr_46859_46933 = state_46806__$1;
(statearr_46859_46933[(2)] = inst_46696);

(statearr_46859_46933[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46807 === (2))){
var inst_46658 = (state_46806[(13)]);
var inst_46665 = cljs.core.seq.call(null,inst_46658);
var inst_46666 = inst_46665;
var inst_46667 = null;
var inst_46668 = (0);
var inst_46669 = (0);
var state_46806__$1 = (function (){var statearr_46860 = state_46806;
(statearr_46860[(7)] = inst_46669);

(statearr_46860[(8)] = inst_46667);

(statearr_46860[(9)] = inst_46668);

(statearr_46860[(10)] = inst_46666);

return statearr_46860;
})();
var statearr_46861_46934 = state_46806__$1;
(statearr_46861_46934[(2)] = null);

(statearr_46861_46934[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46807 === (23))){
var inst_46723 = (state_46806[(23)]);
var inst_46719 = (state_46806[(19)]);
var inst_46727 = (state_46806[(24)]);
var inst_46722 = (state_46806[(25)]);
var inst_46725 = (state_46806[(26)]);
var inst_46730 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_46732 = (function (){var all_files = inst_46719;
var res_SINGLEQUOTE_ = inst_46722;
var res = inst_46723;
var files_not_loaded = inst_46725;
var dependencies_that_loaded = inst_46727;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_46723,inst_46719,inst_46727,inst_46722,inst_46725,inst_46730,state_val_46807,c__43136__auto__,map__46651,map__46651__$1,opts,before_jsload,on_jsload,reload_dependents,map__46652,map__46652__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__46731){
var map__46862 = p__46731;
var map__46862__$1 = ((((!((map__46862 == null)))?((((map__46862.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46862.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46862):map__46862);
var request_url = cljs.core.get.call(null,map__46862__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_46723,inst_46719,inst_46727,inst_46722,inst_46725,inst_46730,state_val_46807,c__43136__auto__,map__46651,map__46651__$1,opts,before_jsload,on_jsload,reload_dependents,map__46652,map__46652__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_46733 = cljs.core.reverse.call(null,inst_46727);
var inst_46734 = cljs.core.map.call(null,inst_46732,inst_46733);
var inst_46735 = cljs.core.pr_str.call(null,inst_46734);
var inst_46736 = figwheel.client.utils.log.call(null,inst_46735);
var state_46806__$1 = (function (){var statearr_46864 = state_46806;
(statearr_46864[(31)] = inst_46730);

return statearr_46864;
})();
var statearr_46865_46935 = state_46806__$1;
(statearr_46865_46935[(2)] = inst_46736);

(statearr_46865_46935[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46807 === (35))){
var state_46806__$1 = state_46806;
var statearr_46866_46936 = state_46806__$1;
(statearr_46866_46936[(2)] = true);

(statearr_46866_46936[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46807 === (19))){
var inst_46709 = (state_46806[(12)]);
var inst_46715 = figwheel.client.file_reloading.expand_files.call(null,inst_46709);
var state_46806__$1 = state_46806;
var statearr_46867_46937 = state_46806__$1;
(statearr_46867_46937[(2)] = inst_46715);

(statearr_46867_46937[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46807 === (11))){
var state_46806__$1 = state_46806;
var statearr_46868_46938 = state_46806__$1;
(statearr_46868_46938[(2)] = null);

(statearr_46868_46938[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46807 === (9))){
var inst_46698 = (state_46806[(2)]);
var state_46806__$1 = state_46806;
var statearr_46869_46939 = state_46806__$1;
(statearr_46869_46939[(2)] = inst_46698);

(statearr_46869_46939[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46807 === (5))){
var inst_46669 = (state_46806[(7)]);
var inst_46668 = (state_46806[(9)]);
var inst_46671 = (inst_46669 < inst_46668);
var inst_46672 = inst_46671;
var state_46806__$1 = state_46806;
if(cljs.core.truth_(inst_46672)){
var statearr_46870_46940 = state_46806__$1;
(statearr_46870_46940[(1)] = (7));

} else {
var statearr_46871_46941 = state_46806__$1;
(statearr_46871_46941[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46807 === (14))){
var inst_46679 = (state_46806[(22)]);
var inst_46688 = cljs.core.first.call(null,inst_46679);
var inst_46689 = figwheel.client.file_reloading.eval_body.call(null,inst_46688,opts);
var inst_46690 = cljs.core.next.call(null,inst_46679);
var inst_46666 = inst_46690;
var inst_46667 = null;
var inst_46668 = (0);
var inst_46669 = (0);
var state_46806__$1 = (function (){var statearr_46872 = state_46806;
(statearr_46872[(7)] = inst_46669);

(statearr_46872[(8)] = inst_46667);

(statearr_46872[(9)] = inst_46668);

(statearr_46872[(32)] = inst_46689);

(statearr_46872[(10)] = inst_46666);

return statearr_46872;
})();
var statearr_46873_46942 = state_46806__$1;
(statearr_46873_46942[(2)] = null);

(statearr_46873_46942[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46807 === (45))){
var state_46806__$1 = state_46806;
var statearr_46874_46943 = state_46806__$1;
(statearr_46874_46943[(2)] = null);

(statearr_46874_46943[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46807 === (26))){
var inst_46723 = (state_46806[(23)]);
var inst_46719 = (state_46806[(19)]);
var inst_46727 = (state_46806[(24)]);
var inst_46722 = (state_46806[(25)]);
var inst_46725 = (state_46806[(26)]);
var inst_46742 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_46744 = (function (){var all_files = inst_46719;
var res_SINGLEQUOTE_ = inst_46722;
var res = inst_46723;
var files_not_loaded = inst_46725;
var dependencies_that_loaded = inst_46727;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_46723,inst_46719,inst_46727,inst_46722,inst_46725,inst_46742,state_val_46807,c__43136__auto__,map__46651,map__46651__$1,opts,before_jsload,on_jsload,reload_dependents,map__46652,map__46652__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__46743){
var map__46875 = p__46743;
var map__46875__$1 = ((((!((map__46875 == null)))?((((map__46875.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46875.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46875):map__46875);
var namespace = cljs.core.get.call(null,map__46875__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__46875__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_46723,inst_46719,inst_46727,inst_46722,inst_46725,inst_46742,state_val_46807,c__43136__auto__,map__46651,map__46651__$1,opts,before_jsload,on_jsload,reload_dependents,map__46652,map__46652__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_46745 = cljs.core.map.call(null,inst_46744,inst_46723);
var inst_46746 = cljs.core.pr_str.call(null,inst_46745);
var inst_46747 = figwheel.client.utils.log.call(null,inst_46746);
var inst_46748 = (function (){var all_files = inst_46719;
var res_SINGLEQUOTE_ = inst_46722;
var res = inst_46723;
var files_not_loaded = inst_46725;
var dependencies_that_loaded = inst_46727;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_46723,inst_46719,inst_46727,inst_46722,inst_46725,inst_46742,inst_46744,inst_46745,inst_46746,inst_46747,state_val_46807,c__43136__auto__,map__46651,map__46651__$1,opts,before_jsload,on_jsload,reload_dependents,map__46652,map__46652__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_46723,inst_46719,inst_46727,inst_46722,inst_46725,inst_46742,inst_46744,inst_46745,inst_46746,inst_46747,state_val_46807,c__43136__auto__,map__46651,map__46651__$1,opts,before_jsload,on_jsload,reload_dependents,map__46652,map__46652__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_46749 = setTimeout(inst_46748,(10));
var state_46806__$1 = (function (){var statearr_46877 = state_46806;
(statearr_46877[(33)] = inst_46747);

(statearr_46877[(34)] = inst_46742);

return statearr_46877;
})();
var statearr_46878_46944 = state_46806__$1;
(statearr_46878_46944[(2)] = inst_46749);

(statearr_46878_46944[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46807 === (16))){
var state_46806__$1 = state_46806;
var statearr_46879_46945 = state_46806__$1;
(statearr_46879_46945[(2)] = reload_dependents);

(statearr_46879_46945[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46807 === (38))){
var inst_46759 = (state_46806[(16)]);
var inst_46777 = cljs.core.apply.call(null,cljs.core.hash_map,inst_46759);
var state_46806__$1 = state_46806;
var statearr_46880_46946 = state_46806__$1;
(statearr_46880_46946[(2)] = inst_46777);

(statearr_46880_46946[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46807 === (30))){
var state_46806__$1 = state_46806;
var statearr_46881_46947 = state_46806__$1;
(statearr_46881_46947[(2)] = null);

(statearr_46881_46947[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46807 === (10))){
var inst_46679 = (state_46806[(22)]);
var inst_46681 = cljs.core.chunked_seq_QMARK_.call(null,inst_46679);
var state_46806__$1 = state_46806;
if(inst_46681){
var statearr_46882_46948 = state_46806__$1;
(statearr_46882_46948[(1)] = (13));

} else {
var statearr_46883_46949 = state_46806__$1;
(statearr_46883_46949[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46807 === (18))){
var inst_46713 = (state_46806[(2)]);
var state_46806__$1 = state_46806;
if(cljs.core.truth_(inst_46713)){
var statearr_46884_46950 = state_46806__$1;
(statearr_46884_46950[(1)] = (19));

} else {
var statearr_46885_46951 = state_46806__$1;
(statearr_46885_46951[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46807 === (42))){
var state_46806__$1 = state_46806;
var statearr_46886_46952 = state_46806__$1;
(statearr_46886_46952[(2)] = null);

(statearr_46886_46952[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46807 === (37))){
var inst_46772 = (state_46806[(2)]);
var state_46806__$1 = state_46806;
var statearr_46887_46953 = state_46806__$1;
(statearr_46887_46953[(2)] = inst_46772);

(statearr_46887_46953[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46807 === (8))){
var inst_46679 = (state_46806[(22)]);
var inst_46666 = (state_46806[(10)]);
var inst_46679__$1 = cljs.core.seq.call(null,inst_46666);
var state_46806__$1 = (function (){var statearr_46888 = state_46806;
(statearr_46888[(22)] = inst_46679__$1);

return statearr_46888;
})();
if(inst_46679__$1){
var statearr_46889_46954 = state_46806__$1;
(statearr_46889_46954[(1)] = (10));

} else {
var statearr_46890_46955 = state_46806__$1;
(statearr_46890_46955[(1)] = (11));

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
});})(c__43136__auto__,map__46651,map__46651__$1,opts,before_jsload,on_jsload,reload_dependents,map__46652,map__46652__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__43115__auto__,c__43136__auto__,map__46651,map__46651__$1,opts,before_jsload,on_jsload,reload_dependents,map__46652,map__46652__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__43116__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__43116__auto____0 = (function (){
var statearr_46894 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46894[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__43116__auto__);

(statearr_46894[(1)] = (1));

return statearr_46894;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__43116__auto____1 = (function (state_46806){
while(true){
var ret_value__43117__auto__ = (function (){try{while(true){
var result__43118__auto__ = switch__43115__auto__.call(null,state_46806);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43118__auto__;
}
break;
}
}catch (e46895){if((e46895 instanceof Object)){
var ex__43119__auto__ = e46895;
var statearr_46896_46956 = state_46806;
(statearr_46896_46956[(5)] = ex__43119__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46806);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46895;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46957 = state_46806;
state_46806 = G__46957;
continue;
} else {
return ret_value__43117__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__43116__auto__ = function(state_46806){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__43116__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__43116__auto____1.call(this,state_46806);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__43116__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__43116__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__43116__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__43116__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__43116__auto__;
})()
;})(switch__43115__auto__,c__43136__auto__,map__46651,map__46651__$1,opts,before_jsload,on_jsload,reload_dependents,map__46652,map__46652__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__43138__auto__ = (function (){var statearr_46897 = f__43137__auto__.call(null);
(statearr_46897[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43136__auto__);

return statearr_46897;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43138__auto__);
});})(c__43136__auto__,map__46651,map__46651__$1,opts,before_jsload,on_jsload,reload_dependents,map__46652,map__46652__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__43136__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__46960,link){
var map__46963 = p__46960;
var map__46963__$1 = ((((!((map__46963 == null)))?((((map__46963.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46963.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46963):map__46963);
var file = cljs.core.get.call(null,map__46963__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__46963,map__46963__$1,file){
return (function (p1__46958_SHARP_,p2__46959_SHARP_){
if(cljs.core._EQ_.call(null,p1__46958_SHARP_,p2__46959_SHARP_)){
return p1__46958_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__46963,map__46963__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__46969){
var map__46970 = p__46969;
var map__46970__$1 = ((((!((map__46970 == null)))?((((map__46970.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46970.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46970):map__46970);
var match_length = cljs.core.get.call(null,map__46970__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__46970__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__46965_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__46965_SHARP_);
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
var args46972 = [];
var len__39344__auto___46975 = arguments.length;
var i__39345__auto___46976 = (0);
while(true){
if((i__39345__auto___46976 < len__39344__auto___46975)){
args46972.push((arguments[i__39345__auto___46976]));

var G__46977 = (i__39345__auto___46976 + (1));
i__39345__auto___46976 = G__46977;
continue;
} else {
}
break;
}

var G__46974 = args46972.length;
switch (G__46974) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46972.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__46979_SHARP_,p2__46980_SHARP_){
return cljs.core.assoc.call(null,p1__46979_SHARP_,cljs.core.get.call(null,p2__46980_SHARP_,key),p2__46980_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__46981){
var map__46984 = p__46981;
var map__46984__$1 = ((((!((map__46984 == null)))?((((map__46984.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46984.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46984):map__46984);
var f_data = map__46984__$1;
var file = cljs.core.get.call(null,map__46984__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__46986,p__46987){
var map__46996 = p__46986;
var map__46996__$1 = ((((!((map__46996 == null)))?((((map__46996.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46996.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46996):map__46996);
var opts = map__46996__$1;
var on_cssload = cljs.core.get.call(null,map__46996__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__46997 = p__46987;
var map__46997__$1 = ((((!((map__46997 == null)))?((((map__46997.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46997.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46997):map__46997);
var files_msg = map__46997__$1;
var files = cljs.core.get.call(null,map__46997__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__47000_47004 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
var chunk__47001_47005 = null;
var count__47002_47006 = (0);
var i__47003_47007 = (0);
while(true){
if((i__47003_47007 < count__47002_47006)){
var f_47008 = cljs.core._nth.call(null,chunk__47001_47005,i__47003_47007);
figwheel.client.file_reloading.reload_css_file.call(null,f_47008);

var G__47009 = seq__47000_47004;
var G__47010 = chunk__47001_47005;
var G__47011 = count__47002_47006;
var G__47012 = (i__47003_47007 + (1));
seq__47000_47004 = G__47009;
chunk__47001_47005 = G__47010;
count__47002_47006 = G__47011;
i__47003_47007 = G__47012;
continue;
} else {
var temp__4657__auto___47013 = cljs.core.seq.call(null,seq__47000_47004);
if(temp__4657__auto___47013){
var seq__47000_47014__$1 = temp__4657__auto___47013;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47000_47014__$1)){
var c__39050__auto___47015 = cljs.core.chunk_first.call(null,seq__47000_47014__$1);
var G__47016 = cljs.core.chunk_rest.call(null,seq__47000_47014__$1);
var G__47017 = c__39050__auto___47015;
var G__47018 = cljs.core.count.call(null,c__39050__auto___47015);
var G__47019 = (0);
seq__47000_47004 = G__47016;
chunk__47001_47005 = G__47017;
count__47002_47006 = G__47018;
i__47003_47007 = G__47019;
continue;
} else {
var f_47020 = cljs.core.first.call(null,seq__47000_47014__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_47020);

var G__47021 = cljs.core.next.call(null,seq__47000_47014__$1);
var G__47022 = null;
var G__47023 = (0);
var G__47024 = (0);
seq__47000_47004 = G__47021;
chunk__47001_47005 = G__47022;
count__47002_47006 = G__47023;
i__47003_47007 = G__47024;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__46996,map__46996__$1,opts,on_cssload,map__46997,map__46997__$1,files_msg,files){
return (function (){
figwheel.client.file_reloading.on_cssload_custom_event.call(null,files);

return on_cssload.call(null,files);
});})(map__46996,map__46996__$1,opts,on_cssload,map__46997,map__46997__$1,files_msg,files))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map