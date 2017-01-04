(ns sg-app.env
  (:require [clojure.tools.logging :as log]))

(def defaults
  {:init
   (fn []
     (log/info "\n-=[sg-app started successfully]=-"))
   :stop
   (fn []
     (log/info "\n-=[sg-app has shut down successfully]=-"))
   :middleware identity})
