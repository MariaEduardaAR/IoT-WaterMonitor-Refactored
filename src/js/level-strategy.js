/*
 * Strategy (GoF): encapsula as regras de classificação do nível da água.
 * Cada estratégia recebe um percentual e devolve um status consistente.
 */
(function (global) {
  "use strict";

  function ensureValidLevel(level) {
    var value = Number(level);
    if (!Number.isFinite(value) || value < 0 || value > 100) {
      throw new RangeError("O nível da água deve ser um número entre 0 e 100.");
    }
    return value;
  }

  var strategies = {
    standard: {
      classify: function (level) {
        var value = ensureValidLevel(level);
        if (value < 30 || value >= 90) {
          return { code: "critical", label: "Crítico", color: "#fe5e21" };
        }
        if (value < 60 || value >= 80) {
          return { code: "attention", label: "Atenção", color: "#ffb30c" };
        }
        return { code: "safe", label: "Seguro", color: "#2ed351" };
      }
    }
  };

  global.WaterLevelStrategy = {
    classify: function (level, strategyName) {
      var strategy = strategies[strategyName || "standard"];
      if (!strategy) throw new Error("Estratégia desconhecida: " + strategyName);
      return strategy.classify(level);
    }
  };
})(window);
