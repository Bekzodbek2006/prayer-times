let friday_text = document.querySelector(".text");
let now_text = document.querySelector(".now");

 
const month = [
  "Yanvar",
  "Fevral",
  "Mart",
  "Aprel",
  "May",
  "Iyun",
  "Iyul",
  "Avgust",
  "Sentabr",
  "Oktabr",
  "Nayabr",
  "Dekabr",
];


function dates(date, dayOfWeek){
    // juma kunni topish uchun 👇
    var dayOfWeek = 5;//juma kuni
    var date = new Date();
    var diff = date.getDay() - dayOfWeek;
    if (diff > 0) {
        date.setDate(date.getDate() + 6);
    }
    else if (diff < 0) {
        date.setDate(date.getDate() + ((-1) * diff))
    }
    // juma kuni uchun
    friday = date.getDate()
    let friday_month = date.getMonth();
    friday_text.innerHTML = friday + month[friday_month]

    // bugungi kun vaqti
    let nowdate = new Date()
    now_day = nowdate.getDate()
    now_month = nowdate.getMonth()
    now_text.innerHTML = now_day + month[now_month]

    // masofa vaqti
    let  distance =  friday - now_day
    distance =  Math.floor((distance % (nowdate)))
    console.log(distance + " kun qoldi");
}

dates()