const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveAway = document.querySelector('.giveaway')
const deadLine = document.querySelector('.deadLine')
const items = document.querySelectorAll('.deadline-format h4')

let futureDate = new Date(2022 , 4 , 24,15, 30,0); 

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let month = futureDate.getMonth()-1;
month = months[month];

const date = futureDate.getDate();

const weekday = weekdays[futureDate.getDay()];


giveAway.textContent = `giveaway ends on ${weekday} ${date} ${month} ${year} ${hours}:${minutes}`;


// future times in MS

const futureTime = futureDate.getTime();


function getRemainingTime (){

  const today = new Date().getTime();
  const t = futureTime - today
  console.log(t);

  // 1s = 1000ms
  // 1m =  60s
  // 1hr = 60 min
  // 1d = 24 hr

  // values in ms 
  const oneDay = 24*60*60*1000;
  const oneHour = 60*60*1000;
  const oneMinute = 60*1000;
  console.log(oneDay);

  // calculate all values
  let days = Math.floor(t/oneDay);
  let hours = Math.floor((t%oneDay) /oneHour);
  console.log(hours);
  let minutes = Math.floor((t%oneHour)/oneMinute);
  let secondes = Math.floor((t/oneMinute)/1000);

  // set Values array
  const values =[days,hours,minutes,secondes];

  function format(item){
    if(item < 10){
      return item = `0${item}`
    }
    return item
  }

  items.forEach((item,index)=>{
    item.innerHTML= format(values[index]);

  })

}

getRemainingTime();