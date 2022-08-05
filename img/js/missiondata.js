
let missionData = [
    { 
      "id": 1,
      "spot": "김광석 동상",
      "thumbnail": null,
      "title": "김광석 동상과 함께 사진찍기📸",
      "content": "김광석길 입구에 있는 김광석 동상과 같은 포즈로 사진을 찍어주세요.",
      "contentImg": null,
      "latitude": 35.86174,
      "longitude": 128.60790,
      "completion": true
    },
    {
      "id": 2,
      "spot": "정오의 희망곡 ",
      "thumbnail": null,
      "title": "정오의 희망곡 앞에서 사진찍기📸",
      "content": "바람흔적우체통 옆 사연종이를 들고 골목방송스튜디오 앞에서 사진을 찍어주세요.",
      "contentImg": null,
      "latitude": 35.86156,
      "longitude": 128.60765,
      "completion": true
    },
    {
      "id": 3,
      "spot": "꽃밭 의자",
      "thumbnail": null,
      "title": "꽃밭 의자에서 사진찍기📸",
      "content": "꽃밭 의자에 앉아서 꽃밭침을 하고 사진을 찍어주세요..",
      "contentImg": null,
      "latitude": 35.86080,
      "longitude": 128.60722,
      "completion": true
    },
    {
      "id": 4,
      "spot": "내사람이여",
      "thumbnail": null,
      "title": "내사람이여 벽화에서 사진찍기📸",
      "content": "이 벽화가 그려진 장소에서 귀를 기울인 자세로 사진을 찍어주세요..",
      "contentImg": null,
      "latitude": 35.85997, 
      "longitude": 128.60670,
      "completion": false
    },
    {
      "id": 5,
      "spot": "방천시장 입구",
      "thumbnail": null,
      "title": "방천시장 입구 앞에서 사진찍기📸",
      "content": "방천시장 간판이 보이도록 서서 사진을 찍어주세요.",
      "contentImg": null,
      "latitude": 35.86231, 
      "longitude": 128.60602,
      "completion": false
    },
    {
      "id": 6,
      "spot": "콘서트 홀",
      "thumbnail": null,
      "title": "콘서트 홀에서 사진찍기📸",
      "content": "콘서트홀 입구 혹은 콘서트홀 내부에서 손하트를 한 사진을 찍어주세요.",
      "contentImg": null,
      "latitude": 35.85984, 
      "longitude": 128.60667,
      "completion": false
    },
    {
      "id": 7,
      "spot": "기타 벤치",
      "thumbnail": null,
      "title": "기타 벤치에서 사진찍기📸",
      "content": "기타 벤치에 앉아서 기타를 치는 자세로 사진을 찍어주세요..",
      "contentImg": null,
      "latitude": 35.85970, 
      "longitude": 128.60655,
      "completion": false
    },
    {
      "id": 8,
      "spot": "입영 열차 벽화",
      "thumbnail": null,
      "title": "입영 열차 벽화에서 사진찍기📸",
      "content": "이 벽화가 그려진 장소에서 앞 손잡이를 잡고 열차에 오르는 사진을 찍어주세요.",
      "contentImg": null,
      "latitude": 35.85953, 
      "longitude": 128.60631,
      "completion": false
    },
    {
      "id": 9,
      "spot": "김광석 스토리 하우스",
      "thumbnail": null,
      "title": "김광석 스토리 하우스에서 사진찍기📸",
      "content": "김광석 스토리하우스 내부에 있는 김광석 등신대 옆에서 사진을 찍어주세요.",
      "contentImg": null,
      "latitude": 35.85900,
      "longitude": 128.60566,
      "completion": false
    } 
  ]
 let loginValue = false
  window.localStorage.clear();
  let missionDataString = JSON.stringify(missionData)
  let loginValueString = JSON.stringify(loginValue)
  window.localStorage.setItem('missionData', missionDataString);
  window.localStorage.setItem('loginValue', loginValueString);