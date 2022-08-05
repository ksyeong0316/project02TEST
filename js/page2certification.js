let missionData;
let missionID;

function getMissonData(){
  let getMissonDataString =   window.localStorage.getItem("missionData")
  let getMissonDataObj = JSON.parse(getMissonDataString)
  missionData = getMissonDataObj;
}
function getMissonID(){
    let getMissonIDString =   window.localStorage.getItem("missionID")
    let getMissonIDObj = JSON.parse(getMissonIDString)
    missionID = getMissonIDObj -1;
  }
function setMissionData(){
    window.localStorage.setItem("missionData", JSON.stringify(missionData))
}

getMissonData()
getMissonID()


let prevPage = document.querySelector(".cp_prevBtn")
let btn = document.querySelectorAll(".cp_btn")

btn[0].addEventListener("click",()=>{
    alert("준비중입니다")
})
btn[1].addEventListener("click", 클릭)

function 클릭(){
    
    missionData[missionID].completion ? alert("이미 등록되어있습니다"):알림2()
    changeData(missionID)
    goBingoPage()
}
function 알림2(){ 
    alert("등록되었습니다")
}

prevPage.addEventListener("click", toprevPage)


function toprevPage(){
    window.parent.postMessage({prevPage: "page2sub" }  , 
    '*' )
    // 'http://ksyeong0316.dothome.co.kr/project2/index.html' )
        // 'http://127.0.0.1:5500')
}


    function changeData(missionID){
        missionData[missionID].completion = true;
        missionData = missionData;
        setMissionData()
    }      

    function goBingoPage(){
        window.parent.postMessage({prevPage: "page2" }  , 
        '*' )
        // 'http://ksyeong0316.dothome.co.kr/project2/index.html' )
        // 'http://127.0.0.1:5500')
    }