let missionData;
let missionID;
let loginValue;

function getMissonData(){
  let getMissonDataString =   window.localStorage.getItem("missionData")
  let getMissonDataObj = JSON.parse(getMissonDataString)
  missionData = getMissonDataObj;
  console.log(missionData)
}
function getMissonID(){
  let getMissonIDString =   window.localStorage.getItem("missionID")
  let getMissonIDObj = JSON.parse(getMissonIDString)
  missionID = getMissonIDObj -1;
}
function getLoginValue(){
  let getLoginValueString =   window.localStorage.getItem("loginValue")
  let getLoginValueObj = JSON.parse(getLoginValueString)
  loginValue = getLoginValueObj
}

function setMissionData(){
    window.localStorage.setItem("missionData", JSON.stringify(missionData))
}

getMissonData()
getMissonID()
getLoginValue()


function makeMap(mp_latitude, mp_longitude){
    let mapContainer = document.querySelector('.mp_map'), // 지도를 표시할 div 
    mapOption = { 
        center: new kakao.maps.LatLng(mp_latitude,  mp_longitude), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };
// 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
let map = new kakao.maps.Map(mapContainer, mapOption); 

// 마커가 표시될 위치입니다 
let markerPosition  = new kakao.maps.LatLng(mp_latitude,  mp_longitude); 

// 마커를 생성합니다
let marker = new kakao.maps.Marker({
    position: markerPosition
});

// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);
}
// makeMap()

let prevPage = document.querySelector(".mp_prevBtn")
let btn = document.querySelector(".mp_btn")


prevPage.addEventListener("click", toprevPage)
btn.addEventListener("click",checkLogin)
// btn.addEventListener("click",getMissonID)


function toprevPage(){
    window.parent.postMessage({prevPage: "page2" }  , 
    '*' )
    // 'http://ksyeong0316.dothome.co.kr/project2/index.html' )
        // 'http://127.0.0.1:5500')
}
function 인증(){
    window.parent.postMessage({NextPage: "page2certification" }, 
    '*' )
    // 'http://ksyeong0316.dothome.co.kr/project2/index.html' )
        // 'http://127.0.0.1:5500')
}
function 알림(){
    alert("로그인을 해주세요!")
    window.parent.postMessage({dragX: 2 , pageIndex:2}, 
        '*' )
        // 'http://ksyeong0316.dothome.co.kr/project2/index.html' )
        // 'http://127.0.0.1:5500')
}

/*
인증버튼 활성화 로직
*/

/*
로그인 확인 로직

*/

function checkLogin() {
    getLoginValue()
    loginValue ? 인증():알림()
}



changeMissionData(missionID)

function changeMissionData(missionID){
    let mp_missionID = document.querySelector(".mp_missionID");
    let mp_missionTitle = document.querySelector(".mp_missionTitle span");
    let mp_mission = document.querySelector(".mp_mission");
    let mp_latitude = missionData[missionID].latitude
    let mp_longitude = missionData[missionID].longitude

    mp_missionID.innerHTML = missionData[missionID].id
    mp_missionTitle.innerHTML = missionData[missionID].spot
    mp_mission.innerHTML = missionData[missionID].content
    
    makeMap(mp_latitude, mp_longitude)
}

