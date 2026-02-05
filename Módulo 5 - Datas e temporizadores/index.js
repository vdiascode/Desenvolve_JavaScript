const form = document.querySelector("form");

const diasSpan = document.getElementById("dias");
const horasSpan = document.getElementById("horas");
const minutosSpan = document.getElementById("minutos");
const segundosSpan = document.getElementById("segundos");

let intervalo;

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const data = document.getElementById("data-final").value;
  const horario = document.getElementById("horario-final").value;

  const dataFuturaString = data + "T" + horario;
  const dataFutura = new Date(dataFuturaString);

  if (!validarData(dataFutura)) return;

  atualizarTemporizador(dataFutura);
});

function validarData(dataFutura) {
  const dataAtual = new Date();
  if (dataFutura <= dataAtual) {
    alert("Por favor, escolha uma data e horário futuros!");
    return false;
  }
  return true;
}

function calcularTempoRestante(dataFutura) {
  const dataAtual = new Date();
  const tempoRestante = dataFutura - dataAtual;

  const dias = Math.floor(tempoRestante / (1000 * 60 * 60 * 24));
  const horas = Math.floor((tempoRestante / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((tempoRestante / (1000 * 60)) % 60);
  const segundos = Math.floor((tempoRestante / 1000) % 60);

  return { total: tempoRestante, dias, horas, minutos, segundos };
}

function atualizarTemporizador(dataFutura) {
  if (intervalo) clearInterval(intervalo);

  intervalo = setInterval(() => {
    const tempo = calcularTempoRestante(dataFutura);

    if (tempo.total <= 0) {
      clearInterval(intervalo);
      diasSpan.textContent = "00";
      horasSpan.textContent = "00";
      minutosSpan.textContent = "00";
      segundosSpan.textContent = "00";
      alert("Contagem finalizada!");
      return;
    }

    diasSpan.textContent = String(tempo.dias).padStart(2, "0");
    horasSpan.textContent = String(tempo.horas).padStart(2, "0");
    minutosSpan.textContent = String(tempo.minutos).padStart(2, "0");
    segundosSpan.textContent = String(tempo.segundos).padStart(2, "0");
  }, 1000);
}
