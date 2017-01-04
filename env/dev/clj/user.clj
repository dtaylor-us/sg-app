(ns user
  (:require [mount.core :as mount]
            [sg-app.figwheel :refer [start-fw stop-fw cljs]]
            sg-app.core))

(defn start []
  (mount/start-without #'sg-app.core/http-server
                       #'sg-app.core/repl-server))

(defn stop []
  (mount/stop-except #'sg-app.core/http-server
                     #'sg-app.core/repl-server))

(defn restart []
  (stop)
  (start))


