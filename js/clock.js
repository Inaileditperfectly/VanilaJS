const clock = document.querySelector("#clock");
// clock.innerText = "ss"

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2,"0");
  const minutes = String(date.getMinutes()).padStart(2,"0");
  const seconds = String(date.getSeconds()).padStart(2,"0");
  
  // clock.innerText= `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  // clock.innerText= new Date().toLocaleTimeString(); //pad안쓰고 가능-그래도 시간은 1자리네..
  clock.innerText= `${hours}:${minutes}:${seconds}`;
}

// setInterval(sayHello,5000); //ms초 이후 ms초 간격으로 반복 실행
// setTimeout(sayHello,5000); //ms초 이후 1번만 실행
getClock();
setInterval(getClock,1000);








