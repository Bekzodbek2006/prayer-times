let friday_text = document.querySelector(".text");
let now_text = document.querySelector(".now");
let gacha_kun = document.querySelector(".gacha_kun");
let gacha_oy = document.querySelector(".gacha_oy");
let copy = document.querySelector('.copy')
let openModal = document.querySelector('.icon')
let when = document.querySelector('.when')
let modal = document.getElementById('modal')




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

let modal_is = false

openModal.addEventListener('click', function(){
    if(modal_is == false){
        modal.style.display = "block"
        modal_is = true
    }
    else{
        modal.style.display = "none"
        modal_is = false
    }
})



when.style.cursor = 'pointer'
when.addEventListener('click', function(){
    alert(`Keyingi JUMAgacha ${masofa_kun} kun qoldi !`)
    modal.style.display = "none"
})



copy.style.cursor = "pointer"
copy.addEventListener('click', ()=>{
    navigator.clipboard.writeText(document.location.href)
    modal.style.display = "none"
})