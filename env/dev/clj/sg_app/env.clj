(ns sg-app.env
  (:require [selmer.parser :as parser]
            [clojure.tools.logging :as log]
            [sg-app.dev-middleware :refer [wrap-dev]]))

(def defaults
  {:init
   (fn []
     (parser/cache-off!)
     (log/info "\n-=[sg-app started successfully using the development profile]=-"))
   :stop
   (fn []
     (log/info "\n-=[sg-app has shut down successfully]=-"))
   :middleware wrap-dev})
