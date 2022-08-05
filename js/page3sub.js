let missionData;
let loginName;
function getMissonData(){
  let getMissonDataString =   window.localStorage.getItem("missionData")
  let getMissonDataObj = JSON.parse(getMissonDataString)
  missionData = getMissonDataObj;
}

function setMissionData(){
    window.localStorage.setItem("missionData", JSON.stringify(missionData))
}

getMissonData()

function getLoginName(){
  let getLoginNameString =   window.localStorage.getItem("loginName")
  console.log(getLoginNameString)
  // let getLoginNameObj = JSON.parse(getLoginNameString)
  loginName = getLoginNameString;
  document.querySelector(".name").innerHTML= `${loginName}님, 안녕하세요😊`
}


getLoginName()
let mymenu = document.querySelectorAll(".aa")
for(let i =1; i<mymenu.length; i++){
  mymenu[i].addEventListener("click", ()=>{
    alert("준비중입니다")
  })
}

function toPage3couponbox(){
  window.parent.postMessage(
      { NextPage : "page3couponbox" }
      , '*' 
      // , 'http://ksyeong0316.dothome.co.kr/project2/index.html' 
      // , 'http://127.0.0.1:5500/index.html' 
  );}

  mymenu[0].addEventListener("click", toPage3couponbox)