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
// 인증하기 버튼
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
    if(인증버튼활성화){
    getLoginValue()
    loginValue ? 인증():알림()
}else{
    alert("해당 위치로 이동해주세요")
}
}



changeMissionData(missionID)

function changeMissionData(missionID){
    let mp_missionID = document.querySelector(".mp_missionID");
    let mp_missionTitle = document.querySelector(".mp_missionTitle span");
    let mp_mission = document.querySelector(".mp_mission");
    let mp_missionImg = document.querySelector(".mp_missionImg");
    let mp_latitude = missionData[missionID].latitude
    let mp_longitude = missionData[missionID].longitude

    mp_missionID.innerHTML = missionData[missionID].id
    mp_missionTitle.innerHTML = missionData[missionID].spot
    mp_mission.innerHTML = missionData[missionID].content
    mp_missionImg.style.backgroundImage = `url("./img/mission/mission0${missionID+1}.png")`
    
    makeMap(mp_latitude, mp_longitude)
}

let 인증버튼활성화;
let dist;
function success(pos) {
    var crd = pos.coords;
    let myLatitude;
    let mylongitude;
    myLatitude = crd.latitude;
    mylongitude = crd.longitude;
    let missionPosLatitude;
    let missionPoslongitude;
    missionPosLatitude = missionData[missionID].latitude
    missionPoslongitude = missionData[missionID].longitude
    console.log(pos)
    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(getDistance(myLatitude, mylongitude, missionPosLatitude, missionPoslongitude) + "m입니다")
    if (dist < 5) {
      인증버튼활성화 = true
    console.log("인증활성화")
    btn.classList.add("mp_btnON")
    
} else { 
    console.log("인증비활성화")
    인증버튼활성화 = false
    btn.classList.remove("mp_btnON")
     }
  }

  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

//   navigator.geolocation.getCurrentPosition(success, error);


  function getDistance(lat1, lon1, lat2, lon2) {
    if ((lat1 == lat2) && (lon1 == lon2))
      return 0;

    var radLat1 = Math.PI * lat1 / 180;
    var radLat2 = Math.PI * lat2 / 180;
    var theta = lon1 - lon2;
    var radTheta = Math.PI * theta / 180;
    var dist = Math.sin(radLat1) * Math.sin(radLat2) + Math.cos(radLat1) * Math.cos(radLat2) * Math.cos(radTheta);
    if (dist > 1)
      dist = 1;

    dist = Math.acos(dist);
    dist = dist * 180 / Math.PI;
    dist = dist * 60 * 1.1515 * 1.609344 * 1000;
    if (dist < 100) dist = Math.round(dist / 10) * 10;
    else dist = Math.round(dist / 100) * 100;
    return dist;
  }

function 거리계산(){
    navigator.geolocation.getCurrentPosition(success, error);
    console.log("확인1")
}

let 거리조회 = setInterval(()=>{
    거리계산()
}, 1000)


function 현재좌표수정(){
    dist = 3
    거리계산()
    clearInterval(거리조회)
    
}

document.querySelector(".mp_btnTEST").addEventListener("click", 현재좌표수정)