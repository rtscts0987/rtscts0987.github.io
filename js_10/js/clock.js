const clock = document.querySelector("h2#clock");

function timer() {
  const date    = new Date();
  const hours   = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  clock.innerText = `${hours}시 ${minutes}분 ${seconds}초`;
}

timer();
setInterval(timer, 1000);
