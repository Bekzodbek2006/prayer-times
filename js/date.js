let friday_text = document.querySelector(".text");
let now_text = document.querySelector(".now");
let gacha_kun = document.querySelector(".gacha_kun");
let gacha_oy = document.querySelector(".gacha_oy");




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
    firday_hours = date.getHours()
    friday_minut = date.getMinutes()
    friday_seconds = date.getSeconds()
    let friday_month = date.getMonth();
    // friday_text.innerHTML = friday
    gacha_kun.innerHTML = friday
    gacha_oy.innerHTML = `- ${month[friday_month]}gacha`

    // bugungi kun vaqti
    let nowdate = new Date()
    now_day = nowdate.getDate()
    now_month = nowdate.getMonth()
    now_hour = nowdate.getHours()
    now_minut = nowdate.getMinutes()
    now_seconds = nowdate.getSeconds()
    // now_text.innerHTML = now_day + month[now_month]
    // masofa vaqti
    let  distance_day =  friday - now_day
    masofa_kun =  Math.floor((distance_day % (now_day)))
    console.log(masofa_kun + " kun qoldi");
    if(distance_day < 0){
    }
}

dates()

function start(){
    setTimeout(()=>{
        alert(`Keyingi JUMAgacha ${masofa_kun} kun qoldi !`)
    }, 6000)    
}

