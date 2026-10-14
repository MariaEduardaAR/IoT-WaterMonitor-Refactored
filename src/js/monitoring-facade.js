
/*
 * Facade (GoF): coordena Factory, Strategy e Observer.
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
    var tank;

    try {
      tank = this.factory.create(tankNumber, this.search);

      var status = this.strategy.classify(tank.level, "standard");

      this.observer.notify({
        type: "tank-ready",
        tankNumber: tank.number,
        level: tank.level,
        selector: tank.selector,
        statusSelector: tank.statusSelector,
        status: status
      });
    } catch (error) {
      if (error instanceof RangeError || error.name === "RangeError") {
        this.observer.notify({
          type: "validation-error",
          tankNumber: tankNumber,
          message:
            "Erro no reservatório " + tankNumber +
            ": o nível da água deve ser um número entre 0 e 100."
        });

        return;
      }

      throw error;
    }
  };

  global.WaterMonitoringFacade = WaterMonitoringFacade;
})(window);
