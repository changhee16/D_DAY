const clock = document.querySelector("#clock");

function getClock() {
  const date = new Date();
  const cristmas = new Date("2021-09-08:20:00:00");
  const count = (cristmas - date) / 1000;
  const days = String(Math.floor(count / 60 / 60 / 24)).padStart(1, "0");
  const hours = String(Math.floor(count / 60 / 60) % 24).padStart(2, "0");
  const minutes = String(Math.floor(count / 60) % 60).padStart(2, "0");
  const seconds = String(Math.floor(count) % 60).padStart(2, "0");
  clock.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

getClock();
setInterval(getClock, 1000);