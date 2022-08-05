let missionData;

function getMissonData(){
  let getMissonDataString =   window.localStorage.getItem("missionData")
  let getMissonDataObj = JSON.parse(getMissonDataString)
  missionData = getMissonDataObj;
}

function setMissionData(){
    window.localStorage.setItem("missionData", JSON.stringify(missionData))
}

getMissonData()

function login(){
    let loginValueString = true
    window.localStorage.setItem('loginValue', loginValueString);


    function sendLogin(){
        window.parent.postMessage(
            { login : true }
            , '*' 
            // , 'http://ksyeong0316.dothome.co.kr/project2/index.html' 
            // , 'http://127.0.0.1:5500/index.html' 
        );}

        sendLogin()
}

let loginBtn = document.querySelector(".bottom_bnt")
loginBtn.addEventListener("click",login)


