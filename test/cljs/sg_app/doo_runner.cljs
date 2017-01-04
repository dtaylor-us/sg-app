(ns sg-app.doo-runner
  (:require [doo.runner :refer-macros [doo-tests]]
            [sg-app.core-test]))

(doo-tests 'sg-app.core-test)

