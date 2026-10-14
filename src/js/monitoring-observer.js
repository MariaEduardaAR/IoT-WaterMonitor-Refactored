
/*
<<<<<<< HEAD
 * Observer (GoF): permite inscrever, remover e notificar observadores.
=======
 * Observer (GoF): notifica os componentes inscritos
 * sobre eventos do monitoramento.
>>>>>>> 488e83b (feat: atualiza monitoramento dos reservatorios)
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

<<<<<<< HEAD
    var self = this;

    self.listeners.push(listener);

    // Retorna uma função para cancelar a inscrição.
    return function unsubscribe() {
      var index = self.listeners.indexOf(listener);

      if (index !== -1) {
        self.listeners.splice(index, 1);
=======
    this.listeners.push(listener);

    // Permite cancelar a inscrição.
    var observer = this;

    return function unsubscribe() {
      var index = observer.listeners.indexOf(listener);

      if (index !== -1) {
        observer.listeners.splice(index, 1);
>>>>>>> 488e83b (feat: atualiza monitoramento dos reservatorios)
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
