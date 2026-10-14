
/*
 * Factory (GoF): centraliza a configuração dos reservatórios.
 * Preserva os valores informados para que a Strategy possa validá-los.
 */
(function (global) {
  "use strict";

  function readLevel(search, tankNumber) {
    var params = new URLSearchParams(search || "");
    var raw = params.get("tank" + tankNumber);

    // Quando o parâmetro não existe, utiliza o padrão de 50%.
    if (raw === null) {
      return 50;
    }

    // Não limitar valores inválidos: a Strategy deve validá-los.
    if (raw.trim() === "") {
      return NaN;
    }

    return Number(raw);
  }

  global.WaterTankFactory = {
    create: function (tankNumber, search) {
      if (
        !Number.isInteger(tankNumber) ||
        tankNumber < 1 ||
        tankNumber > 4
      ) {
        throw new RangeError(
          "Número de reservatório inválido: " + tankNumber
        );
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
