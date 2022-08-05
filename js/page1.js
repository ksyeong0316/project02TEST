let missionData;

function getMissonData(){
  let getMissonDataString =   window.localStorage.getItem("missionData")
  let getMissonDataObj = JSON.parse(getMissonDataString)
  missionData = getMissonDataObj;
}

function setMissionData(){
    window.localStorage.setItem("missionData", JSON.stringify(missionData))
}


