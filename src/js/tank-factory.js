/*
 * Factory (GoF): centraliza a criação da configuração de cada reservatório.
 * A tela não precisa conhecer detalhes de seletores, parâmetros ou valores padrão.
 */
(function (global) {
  "use strict";

  function readLevel(search, tankNumber) {
    var params = new URLSearchParams(search || "");
    var raw = params.get("tank" + tankNumber);
    var level = raw === null || raw.trim() === "" ? 50 : Number(raw);

    if (!Number.isFinite(level)) level = 50;
    return Math.max(0, Math.min(100, level));
  }

  global.WaterTankFactory = {
    create: function (tankNumber, search) {
      if (!Number.isInteger(tankNumber) || tankNumber < 1 || tankNumber > 4) {
        throw new RangeError("Número de reservatório inválido: " + tankNumber);
      }

      return {
        number: tankNumber,
        selector: ".tank" + tankNumber,
        statusSelector: "#tank" + tankNumber + "-status",
        level: readLevel(search, tankNumber)
      };
    }
  };
})(window);
