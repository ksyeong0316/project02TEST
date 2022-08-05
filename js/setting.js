// if(navigator.userAgent.match(/iPad/i)){
//   // alert(`아이패드`)
// }
// else if(navigator.userAgent.match(/Tablet/i)){
//   // alert(`안드로이드 테블릿`)
// }
// else if(navigator.userAgent.match(/Android/i)){
//   // alert(`안드로이드 os`)
// }
// else if(navigator.userAgent.match(/iPhone|iPod/i)){
//   // alert(`아이폰 & 아이팟`)
// }
// else{
//   alert(`지원하지 않는 디바이스 입니다`)
//   alert(`지원하지 않는 디바이스 입니다`)
//   window.location.reload()
// }

let page = document.querySelectorAll(`.pages`)
let container = document.querySelector("#container")
let touchstart_x;
let touchend_x;
let touchstop_x;
let touchmove_x;
let dragX;
let pageIndex = 0;
let btns = document.querySelectorAll(".btn")

function setVh() {
let vh = window.innerHeight * 0.01;

document.documentElement.style.setProperty('--vh', `${vh}px`);
console.log(vh)
for(let i = 0; page.length > i ; i++){
    page[i].style.transitionDuration= ``
    page[i].style.transform= `translate(${ page[i].offsetWidth*(-pageIndex)}px)`
}
}

window.addEventListener('resize', setVh);
setVh();



// container.addEventListener("touchstart", touchstart00)
// container.addEventListener("touchend", touchend00)



btns[0].addEventListener("click", btn_changePage)
btns[1].addEventListener("click", btn_changePage)
btns[2].addEventListener("click", btn_changePage)
// container.addEventListener("click", btn_changePage)

let btn1Div =document.querySelectorAll("#btn1 div")
let btn2Div =document.querySelectorAll("#btn2 div")
let btn3Div =document.querySelectorAll("#btn3 div")
for(let t = 0; btn1Div.length > t ;t++){
    btn1Div[t].matchPageIndex = 0
}
for(let y = 0; btn1Div.length > y ; y++){
    btn2Div[y].matchPageIndex = 1
}
for(let u = 0; btn1Div.length > u ; u++){
    btn3Div[u].matchPageIndex = 2
}

btns[0].matchPageIndex = 0
btns[1].matchPageIndex = 1
btns[2].matchPageIndex = 2



// container.addEventListener("touchmove",handleMove);
// function handleMove(e){
//     touchstop_x = e.changedTouches[0].pageX;
//     touchmove_x = touchstart_x - touchstop_x
//     console.log(touchmove_x)
//     for(let k = 0; page.length > k ; k++){page[k].style.transform= `translate(${ page[k].offsetWidth*(-pageIndex)}px)`}
// }

function changePage(dragX){
    // console.log(dragX)// 양수면 오른쪽 전환
    for(let j = 0; page.length > j; j++){page[j].style.transitionDuration=``}
    if(dragX > 50){  pageIndex == page.length-1 ? pageIndex = page.length-1 : pageIndex++}
    if(dragX < -50){ pageIndex == 0 ? pageIndex = 0 : pageIndex--;}
    for(let i = 0; page.length > i ; i++){
        page[i].style.transitionDuration= `1s`
        page[i].style.transform= `translate(${ page[i].offsetWidth*(-pageIndex)}px)`
    }
}
function touchstart00(e){
    for(let j = 0; page.length > j; j++){page[j].style.transitionDuration=``}
    touchstart_x = e.changedTouches[0].pageX;
}
function touchend00(e){
    touchend_x = e.changedTouches[0].pageX;
    dragX=touchstart_x - touchend_x
    changePage()
}

function btnOn(pageIndex){
    btns[pageIndex].classList.add("btnOn")
    btns[pageIndex].children[0].classList.add(`icon0${pageIndex+1}On`)
}
btnOn(0)// 시작 페이지

function btn_changePage(e){
    pageIndex = e.target.matchPageIndex
    

    for(let i = 0; page.length > i ; i++){
        page[i].style.transitionDuration= `1s`
        page[i].style.transform= `translate(${ page[i].offsetWidth*(-pageIndex)}px)`
        btns[i].classList.remove("btnOn")
        btns[i].children[0].classList.remove(`icon0${i+1}On`)
    }
    btnOn(pageIndex)
    console.log(e.target.matchPageIndex)
}

// document.querySelector('#h_main_slider').addEventListener("touchend", (e)=>{
//     e.stopPropagation()
// })
// document.querySelectorAll('#h_middle_container .box_area')[0].addEventListener("touchend", (e)=>{
//     e.stopPropagation()
// })
// document.querySelectorAll('#h_middle_container .box_area')[1].addEventListener("touchend", (e)=>{
//     e.stopPropagation()
// })
// document.querySelectorAll('#h_middle_container .box_area')[2].addEventListener("touchend", (e)=>{
//     e.stopPropagation()
// })


window.addEventListener( 'message', (e) => {
    // 전달 된 데이터 
    console.log(e.data)
    // console.log( e.data.dragX );
    // console.log( e.data.pageIndex );
  
    // 부모창의 함수 실행
    if(e.data.dragX){
    switch(e.data.pageIndex) {
        case 0: 
        pageIndex = 0
          break
        case 1:  
        pageIndex = 1
          break
        case 2: 
        pageIndex = 2
          break
    
        default:
        console.log("err")
          break
      }
      for(let i = 0; page.length > i ; i++){
        btns[i].classList.remove("btnOn")
        btns[i].children[0].classList.remove(`icon0${i+1}On`)
    }
      changePage(e.data.dragX)
      btnOn(e.data.dragX)
    }

    if(e.data.initcouponList){
        console.log(e.data.initcouponList)
        initcouponListMake()
    }
    if(e.data.missionID){
        console.log(e.data.missionID)
        window.localStorage.setItem("missionID", JSON.stringify(e.data.missionID))
        document.querySelector("#page2").src = "./page2sub.html"
    }
    if(e.data.login === true){
        document.querySelector("#page3").src = "./page3sub.html"
    }
    if(e.data.prevPage){
        if(e.data.prevPage == "page2"){document.querySelector("#page2").src = "./page2.html"}
        if(e.data.prevPage == "page2sub"){document.querySelector("#page2").src = "./page2sub.html";}
        if(e.data.prevPage == "page3sub"){document.querySelector("#page3").src = "./page3sub.html";}
        if(e.data.prevPage == "page3(coupon_box)"){document.querySelector("#page3").src = "./page3(coupon_box).html";}
    }
    if(e.data.NextPage){
        if(e.data.NextPage == "page2certification"){document.querySelector("#page2").src = "./page2certification.html";}
        if(e.data.NextPage == "page3couponbox"){document.querySelector("#page3").src = "./page3(coupon_box).html";}
        if(e.data.NextPage == "page3coupon"){document.querySelector("#page3").src = "./page3coupon.html";}
    }
});


