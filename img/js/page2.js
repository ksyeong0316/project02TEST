// 1. 데이터 받아오기
// 2. 데이터 받아온걸 바탕으로 화면의 랜더링
// 3. 랜더링한 데이터 클릭시 페이지 이동

let missionData;
let filterBtn= document.querySelectorAll(".bingoFilter>div")
filterBtn[0].addEventListener("click", filterEntire)
filterBtn[1].addEventListener("click", filterIng)
filterBtn[2].addEventListener("click", filterClear)


function getMissonData(){
  let getMissonDataString =   window.localStorage.getItem("missionData")
  let getMissonDataObj = JSON.parse(getMissonDataString)
  missionData = getMissonDataObj;
}

function setMissionData(){
    window.localStorage.setItem("missionData", JSON.stringify(missionData))
}

getMissonData()




let missionArr = document.querySelectorAll(".binggo_all")
for(let i = 0; missionArr.length>i ; i++){
    // missionArr[i].addEventListener("click",changeData)
    missionArr[i].addEventListener("click",(e)=>sendPagedata(e))
}


/*
1. 미션의 id 값  정보 전송
2. 경로 변경
3.
*/


function test010101(){
console.log(missionData[0].completion)
}

function sendPagedata(e){
    // console.log(e)
    window.parent.postMessage({missionID: e.path.reverse()[5].id.slice(e.path.reverse()[5].id.length-1) }  , 
    '*' )
    // 'http://ksyeong0316.dothome.co.kr/project2/index.html' )
        // 'http://127.0.0.1:5500')
}

function setConstructor(){
    // console.log(missionArr)
    for(let i = 0; missionArr.length>i ; i++){
        missionArr[i].querySelector(".binggo_text").innerHTML = missionData[i].title
        if(missionData[i].completion){
        document.querySelectorAll(".binggo_all")[i].classList.add("bingo_clear")
        document.querySelectorAll(".binggo_img")[i].classList.add("bingo_clear_img")
        document.querySelectorAll(".binggo_img")[i].innerHTML = "<div>완료!</div>"
        document.querySelectorAll(".binggo_layer-all")[i].classList.add("binggo_Check")
        document.querySelectorAll(".binggo_layer-all")[i].innerHTML = `<img src="./img/그룹 818.png">`
        }}}
setConstructor()
filterEntire()
function filterEntire(){
    for(let i = 0; missionArr.length>i ; i++){
        missionArr[i].classList.remove("clearFilter")
    }

    for(let j = 0; filterBtn.length>j; j++ ){filterBtn[j].classList.remove("onFIlter")}
    filterBtn[0].classList.add("onFIlter")
}
function filterIng(){
    for(let i = 0; missionArr.length>i ; i++){
        missionData[i].completion ? missionArr[i].classList.add("clearFilter") : missionArr[i].classList.remove("clearFilter")
    }
    for(let j = 0; filterBtn.length>j; j++ ){filterBtn[j].classList.remove("onFIlter")}
    filterBtn[1].classList.add("onFIlter")
}
function filterClear(){
    for(let i = 0; missionArr.length>i ; i++){
        missionData[i].completion ? missionArr[i].classList.remove("clearFilter"): missionArr[i].classList.add("clearFilter") 
    }
    for(let j = 0; filterBtn.length>j; j++ ){filterBtn[j].classList.remove("onFIlter")}
    filterBtn[2].classList.add("onFIlter")
}

function getBingoNumber(){
    let count = 0;
    if(missionData[0].completion && missionData[1].completion & missionData[2].completion){count++}
    if(missionData[0].completion && missionData[3].completion & missionData[6].completion){count++}
    if(missionData[0].completion && missionData[4].completion & missionData[8].completion){count++}
    if(missionData[1].completion && missionData[4].completion & missionData[7].completion){count++}
    if(missionData[2].completion && missionData[5].completion & missionData[8].completion){count++}
    if(missionData[2].completion && missionData[4].completion & missionData[6].completion){count++}
    if(missionData[3].completion && missionData[4].completion & missionData[5].completion){count++}
    if(missionData[6].completion && missionData[7].completion & missionData[8].completion){count++}
    console.log(count+"dfasda")
    getBingoCount(count)
}
getBingoNumber()

function getBingoCount(count){
    let bingoCount = document.querySelector(".bingoCount")
    bingoCount.innerHTML= `<p>${count}</p>`
}
