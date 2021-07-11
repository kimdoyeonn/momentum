const clock = document.querySelector("h2#clock");
const today = document.querySelector("#date");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;

  const year = String(date.getFullYear());
  const month = String(date.getMonth() + 1);
  const day = String(date.getDate());
  const dayOfWeek = String(date.getDay());
  const week = ["일", "월", "화", "수", "목", "금", "토"];
  today.innerText = `${year}년 ${month}월 ${day}일 ${week[dayOfWeek]}요일`;
}

getClock();
setInterval(getClock, 1000);
