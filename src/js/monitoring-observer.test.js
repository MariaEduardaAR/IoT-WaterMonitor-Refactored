
/* Testes básicos do padrão Observer. */
(function () {
  "use strict";

  var observer = new WaterMonitoringObserver();
  var received = [];

  var unsubscribe = observer.subscribe(function (event) {
    received.push(event.level);
  });

  observer.notify({ level: 20 });
  console.assert(
    received.length === 1 && received[0] === 20,
    "Deve notificar o observador inscrito."
  );

  unsubscribe();
  observer.notify({ level: 72 });

  console.assert(
    received.length === 1,
    "Não deve notificar após cancelar a inscrição."
  );

  var rejected = false;

  try {
    observer.subscribe("não é uma função");
  } catch (error) {
    rejected = error instanceof TypeError;
  }

  console.assert(
    rejected,
    "Deve rejeitar observadores que não sejam funções."
  );

  console.log("Testes do Observer concluídos.");
})();
