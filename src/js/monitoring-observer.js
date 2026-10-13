
/*
 * Observer (GoF): permite inscrever, remover e notificar observadores.
 */
(function (global) {
  "use strict";

  function WaterMonitoringObserver() {
    this.listeners = [];
  }

  WaterMonitoringObserver.prototype.subscribe = function (listener) {
    if (typeof listener !== "function") {
      throw new TypeError("O observador deve ser uma função.");
    }

    var self = this;

    self.listeners.push(listener);

    // Retorna uma função para cancelar a inscrição.
    return function unsubscribe() {
      var index = self.listeners.indexOf(listener);

      if (index !== -1) {
        self.listeners.splice(index, 1);
      }
    };
  };

  WaterMonitoringObserver.prototype.notify = function (event) {
    this.listeners.slice().forEach(function (listener) {
      listener(event);
    });
  };

  global.WaterMonitoringObserver = WaterMonitoringObserver;
})(window);
