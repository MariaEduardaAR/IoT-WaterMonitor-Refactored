/* Observer (GoF): notifica os componentes inscritos sobre atualizações. */
(function (global) {
  "use strict";

  function WaterMonitoringObserver() {
    this.listeners = [];
  }

  WaterMonitoringObserver.prototype.subscribe = function (listener) {
    this.listeners.push(listener);
  };

  WaterMonitoringObserver.prototype.notify = function (event) {
    this.listeners.slice().forEach(function (listener) {
      listener(event);
    });
  };

  global.WaterMonitoringObserver = WaterMonitoringObserver;
})(window);
