function currentDate() {
  let date = new Date();
  let days = [
    "sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "friday",
    "saturday",
  ];

  let day = days[date.getDay()];
  let hours = date.getHours();
  if (hours < 10) {
    let hours = `0 ${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    let minutes = `0 ${minutes}`;
  }
  return `${day} ${hours} : ${minutes}`;
}
let clock = document.querySelector("#hour");
clock.innerHTML = currentDate();

function currentMonth() {
  let date = new Date();
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "Octobor",
    "November",
    "December",
  ];
  let month = months[date.getMonth()];
  let year = date.getFullYear();
  let day = date.getDate();
  return `${year} ${day} ${month}`;
}
let period = document.querySelector("#month");
period.innerHTML = currentMonth();
