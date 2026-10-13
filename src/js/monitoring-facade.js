
/*
 * Facade (GoF): coordena Factory, Strategy e Observer.
 * A interface precisa chamar apenas initializeTank().
 */
(function (global) {
  "use strict";

  function WaterMonitoringFacade(factory, strategy, observer, search) {
    this.factory = factory;
    this.strategy = strategy;
    this.observer = observer;
    this.search = search || "";
  }

  WaterMonitoringFacade.prototype.initializeTank = function (tankNumber) {
    var tank = this.factory.create(tankNumber, this.search);
    var status = this.strategy.classify(tank.level, "standard");

    this.observer.notify({
      tankNumber: tank.number,
      level: tank.level,
      selector: tank.selector,
      statusSelector: tank.statusSelector,
      status: status
    });
  };

  global.WaterMonitoringFacade = WaterMonitoringFacade;
})(window);
