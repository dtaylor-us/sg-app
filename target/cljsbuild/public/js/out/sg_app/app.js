// Compiled by ClojureScript 1.9.293 {}
goog.provide('sg_app.app');
goog.require('cljs.core');
goog.require('sg_app.core');
goog.require('devtools.core');
goog.require('figwheel.client');
cljs.core.enable_console_print_BANG_.call(null);
figwheel.client.watch_and_reload.call(null,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws",new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),sg_app.core.mount_components);
devtools.core.install_BANG_.call(null);
sg_app.core.init_BANG_.call(null);

//# sourceMappingURL=app.js.map