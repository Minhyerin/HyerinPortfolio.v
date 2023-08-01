/* ==== 오른쪽 버튼 사용 금지 ==== */
window.addEventListener("contextmenu", (e) => {
  e.preventDefault(); 
  this.alert(`오른쪽 버튼을 사용할 수 없습니다.`)
});

/* ==== 한페이지씩 스크롤 ==== */
// window.addEventListener("wheel", function(e){
//   e.preventDefault();
// },{passive : false});

let mHtml = $("html");
let page = 1;

mHtml.animate({scrollTop : 0},10);

$(window).on("wheel", function(e) {
if(mHtml.is(":animated")) return;
if(e.originalEvent.deltaY > 0) {
    if(page == 4) return;
    page++;
} else if(e.originalEvent.deltaY < 0) {
    if(page == 1) return;
    page--;
}
var posTop =(page-1) * $(window).height();
mHtml.animate({scrollTop : posTop});
})

/* ==== Mobile Menu ==== */
const mobileMenu = document.querySelector(".mobile-menu");
const mobileGnb = document.querySelector(".nav");
const mobileA = document.querySelectorAll(".nav a");
mobileMenu.addEventListener("click", (e) => {
  e.preventDefault();
  mobileMenu.classList.toggle("openMenu");
  mobileGnb.classList.toggle("openMenu");  
})
for(let i = 0; i < 3; i++) {
  mobileA[i].addEventListener("click", () => {
    mobileMenu.classList.toggle("openMenu");
    mobileGnb.classList.toggle("openMenu");
  })
}

$(function() {
  /* ==== 스크롤 부드럽게 하는 이벤트 ==== */
  $('.header-inner a, nav a, .go-to-top a').click(function(e) {
    $.scrollTo(this.hash || 0, 900);
  });

  /* ==== About Page accordion ====  */
  $(".about-accordion .accordion-title").click(function() {
    $(this).toggleClass('active');
    $(this).next().slideToggle(300);
    $(".about-accordion .accordion-title").not(this).next().slideUp(300);
    return false;
  });
});

/* ==== Header > work-btn ==== */
let workBtn = document.querySelector(".work-btn");
let worktxt = document.querySelector(".work-txt")
workBtn.addEventListener("mouseover", () => {
  worktxt.innerText = "Hi, I'm working on !";
})
workBtn.addEventListener("mouseout", () => {
  worktxt.innerText = "Available for work";
})

/* ====  Mouse Cursor Event ==== */
const cursor1 = document.querySelector(".cursor1");
//addEventListener를 사용해서 mousemove 이벤트 추가.
document.addEventListener("mousemove",(e) => {
  var x = e.clientX; //x축값
  var y = e.clientY; //y축값
  cursor1.style.cssText = "left:"+x+"px;"+"top:"+y+"px;";//위치를 style로 적용한다.
});

/* ==== Mode Change ==== */
const darkBtn = document.querySelector("#darkMode");
const lightBtn = document.querySelector("#lightMode");

darkBtn.addEventListener("click", () => {
  document.querySelectorAll("label")[0].style.backgroundColor = "rgba(255,255,255,0.5)"
  document.querySelectorAll("label")[1].style.backgroundColor = "rgba(255,255,255,0.5)"

  document.querySelector("#home").style.backgroundColor = "#333";
  document.querySelectorAll(".main-txt span")[0].style.color = "#fff";
  document.querySelectorAll(".main-txt span")[1].style.color = "#fff";
  document.querySelectorAll(".main-txt span")[2].style.color = "#fff";
  document.querySelector(".bar").style.backgroundColor = "#fff";
  
  document.querySelector("#about").style.backgroundColor = "#333";
  document.querySelector(".left-bar").style.backgroundColor = "#333";
  document.querySelector(".left-bar h2").style.color = "#fff";
  document.querySelector(".about-hello h2").style.color = "#fff";
  for(let i = 0; i < 3; i++){
    document.querySelectorAll(".accordion-title")[i].style.color = "#fff";
  }
  for(let i = 0; i < 6; i++){
    document.querySelectorAll(".st span")[i].style.color = "#fff";
  }
  for(let i = 0; i < 4; i++){
    document.querySelectorAll(".exp span")[i].style.color = "#fff";
  }
  for(let i = 0; i < 2; i++){
    document.querySelectorAll(".lan span")[i].style.color = "#fff";
  }
  for(let i = 0; i < 3; i++){
    document.querySelectorAll(".about-btns a")[i].style.color = "#fff";
    document.querySelectorAll(".about-btns a")[i].style.border = "1px solid #fff";
  }

  document.querySelector("#contact").style.backgroundColor = "#333";
  document.querySelector(".contact-btn").style.color = "#fff";
  document.querySelector(".contact-box").style.backgroundColor = "#333";
  document.querySelector(".contact-box").style.border  = "1px solid #fff";
  document.querySelector(".contact-box .header").style.borderBottom  = " 1px solid #fff";
  document.querySelector(".contact-box .header p").style.color  = "#fff";
  document.querySelector(".contact-box .header .close").style.color  = "#fff";
  document.querySelectorAll(".contact-label")[0].style.color  = "#fff";
  document.querySelectorAll(".contact-label")[1].style.color  = "#fff";
  document.querySelectorAll(".contact-input")[0].style.backgroundColor = "#333";
  document.querySelectorAll(".contact-input")[0].style.color = "#fff";
  document.querySelectorAll(".contact-input")[0].style.borderBottom  = " 1px solid #fff";
  document.querySelectorAll(".contact-input")[1].style.backgroundColor = "#333";
  document.querySelectorAll(".contact-input")[1].style.color = "#fff";
  document.querySelectorAll(".contact-input")[1].style.borderBottom  = " 1px solid #fff";
  document.querySelector(".contact-txtarea").style.backgroundColor = "#333"
  document.querySelector(".contact-txtarea").style.color = "#fff";
  document.querySelector(".contact-txtarea").style.borderBottom  = " 1px solid #fff";
  document.querySelector(".send-btn").style.backgroundColor = "#333";
  document.querySelector(".send-btn").style.color = "#fff";
  document.querySelector(".send-btn").style.border  = "1px solid #fff";
});

lightBtn.addEventListener("click", () => {

  document.querySelector("#home").style.backgroundColor = "#fff";
  document.querySelectorAll(".main-txt span")[0].style.color = "#333";
  document.querySelectorAll(".main-txt span")[1].style.color = "#333";
  document.querySelectorAll(".main-txt span")[2].style.color = "#333";
  document.querySelector(".bar").style.backgroundColor = "#333";

  document.querySelector("#about").style.backgroundColor = "#fff";
  document.querySelector(".left-bar").style.backgroundColor = "#fff";
  document.querySelector(".left-bar h2").style.color = "#333";
  document.querySelector(".about-hello h2").style.color = "#333";
  for(let i = 0; i < 3; i++){
    document.querySelectorAll(".accordion-title")[i].style.color = "#333";
  }
  for(let i = 0; i < 6; i++){
    document.querySelectorAll(".st span")[i].style.color = "#333";
  }
  for(let i = 0; i < 4; i++){
    document.querySelectorAll(".exp span")[i].style.color = "#333";
  }
  for(let i = 0; i < 2; i++){
    document.querySelectorAll(".lan span")[i].style.color = "#333";
  }
  for(let i = 0; i < 3; i++){
    document.querySelectorAll(".about-btns a")[i].style.color = "#333";
    document.querySelectorAll(".about-btns a")[i].style.border = "1px solid #333";
  }
  
  document.querySelector("#contact").style.backgroundColor = "#fff";
  document.querySelector(".contact-btn").style.color = "#333";
  document.querySelector(".contact-box").style.backgroundColor = "#fff";
  document.querySelector(".contact-box").style.border  = "1px solid #333";
  document.querySelector(".contact-box .header").style.borderBottom  = " 1px solid #333";
  document.querySelector(".contact-box .header p").style.color  = "#333";
  document.querySelector(".contact-box .header .close").style.color  = "#333";
  document.querySelectorAll(".contact-label")[0].style.color  = "#333";
  document.querySelectorAll(".contact-label")[1].style.color  = "#333";
  document.querySelectorAll(".contact-input")[0].style.backgroundColor = "#fff";
  document.querySelectorAll(".contact-input")[0].style.color = "#333";
  document.querySelectorAll(".contact-input")[0].style.borderBottom  = " 1px solid #333";
  document.querySelectorAll(".contact-input")[1].style.backgroundColor = "#fff";
  document.querySelectorAll(".contact-input")[1].style.color = "#333";
  document.querySelectorAll(".contact-input")[1].style.borderBottom  = " 1px solid #333";
  document.querySelector(".contact-txtarea").style.backgroundColor = "#fff"
  document.querySelector(".contact-txtarea").style.color = "#333";
  document.querySelector(".contact-txtarea").style.borderBottom  = " 1px solid #333";
  document.querySelector(".send-btn").style.backgroundColor = "#fff";
  document.querySelector(".send-btn").style.color = "#333";
  document.querySelector(".send-btn").style.border  = "1px solid #333";
})

/* ==== Nav active ==== */
const navs = document.querySelectorAll(".nav a");
const gotoTop = document.querySelector(".go-to-top");
navs.forEach((a) => {
  a.addEventListener("click", (e) => {
    let target = e.target.dataset.index;
    a_reset();
    if(a.tagName === "A") {
      for(let i = 0; i < navs.length; i++){
        if(target == i) {
          navs[i].classList.add("a-style");
        }
      }
    }
  })
})
gotoTop.addEventListener("click", a_reset)
function a_reset() {
  navs.forEach(function(el, idx){
    navs[idx].classList.remove("a-style");
  })
}

/* ==== work Pannel img ==== */
const frame = document.querySelector("section");
const lists = frame.querySelectorAll("article");
const deg = 45;
const len = lists.length-1;
let i = 0;

for(let el of lists) {
  let pic1 = el.querySelector(".pic");
  let pic2 = el.querySelector(".main_pic");
  el.style.transform = `rotate(${deg*i}deg) translateY(-100vh)`;
  pic1.style.backgroundImage = `url(/img/section-bg-${i+1}.jpg)`;
  pic2.style.backgroundImage = `url(/img/section-pic-${i+1}.png)`;
  i++;
}

/* ==== work Pannel rotation ==== */
const prev = document.querySelector(".btnPrev");
const next = document.querySelector(".btnNext");

let num = 0;


prev.addEventListener("click", () => {
  num++;
  frame.style.transform = `rotate(${deg*num}deg)`;

  (active == 0) ? active = len : active--;
  activation(active, lists)
  
})

next.addEventListener("click", () => {
  num--;
  frame.style.transform = `rotate(${deg*num}deg)`;

  (active == len) ? active = 0 : active++;
  activation(active, lists)

})

/* ==== 가운데 있는 work 패널 활성화 ==== */
let active = 0;

function activation(index, lists) {
  for(let el of lists) {
    el.classList.remove("on");
  }
  lists[index].classList.add("on");
}

/* ==== 버튼 클릭시 패널 배경이미지도함께 변경 ==== */
const workBg = document.querySelector("#work");
const bgPics = ["section-bg-1.jpg","section-bg-2.jpg","section-bg-3.jpg","section-bg-4.jpg","section-bg-5.jpg","section-bg-6.jpg","section-bg-7.jpg","section-bg-8.jpg"];

workBg.style.backgroundImage = `url(/img/${bgPics[0]})`;

let bg = 0;
function changeBgPic(idx) {
  if(idx) {
    bg++;
    if(bg >= bgPics.length) { bg = 0; }
  } else {
    bg--;
    if(bg < 0) { bg = bgPics.length-1;}
  }
  workBg.style.backgroundImage = `url(/img/${bgPics[bg]})`;
}

/* ==== Contact Page ==== */
const contacBtn = document.querySelector(".contact-btn");
const contactBox = document.querySelector(".contact-box");
const closeBtn = document.querySelector(".close");
const sendBtn = document.querySelector(".send-btn")

const newI = document.createElement("i");
newI.innerHTML = `<i class="bi bi-envelope-heart"></i>`;
contacBtn.appendChild(newI);

contacBtn.addEventListener("click", () => {
  contactBox.classList.toggle("open");
  contacBtn.classList.toggle("open")
  contacBtn.appendChild(newI).innerHTML = `<i class="bi bi-envelope-open-heart"></i>`;
});
closeBtn.addEventListener("click", () => {
  contactBox.classList.toggle("open");
  contacBtn.classList.toggle("open")
  contacBtn.appendChild(newI).innerHTML = `<i class="bi bi-envelope-heart"></i>`;
});
sendBtn.addEventListener("click", () => {
  contactBox.classList.toggle("open");
  alert("전송 완료하였습니다! 😊");
})


/* ==== Clock ==== */
setInterval(()=> {
  const today = new Date();
  const date = document.querySelector("#date");
  const now = document.querySelector("#now");

  const day1 = today.getDay();
  let day2 = "";
  switch(day1) {
    case 0 : 
      day2 = "Sun"; break
    case 1 : 
      day2 = "Mon"; break
    case 2 : 
      day2 = "Tue"; break
    case 3 : 
      day2 = "Wed"; break
    case 4 : 
      day2 = "Thu"; break
    case 5 : 
      day2 = "Fri"; break
    case 6 : 
      day2 = "Sat"; break
  }

  date.innerText = `${today.getFullYear()} - ${today.getMonth() + 1} - ${today.getDate()} (${day2})`;
  now.innerText = `${today.getHours()} : ${today.getMinutes()} : ${today.getSeconds()}`;
}, 1000);

/* ==== Modal pop-up === */
const modalBtn = document.querySelector(".modal_btn");
const modal = document.querySelector("#modal");
workBtn.addEventListener("click", () => {
  modal.style.display = "block";
});
modalBtn.addEventListener("click", () => {
  modal.style.display = "none";
});
