
let missionData;
let couponList;
function getMissonData(){
  let getMissonDataString =   window.localStorage.getItem("missionData")
  let getMissonDataObj = JSON.parse(getMissonDataString)
  missionData = getMissonDataObj;
}
function getcouponList(){
  let getcouponListString =   window.localStorage.getItem("couponList")
  let getcouponListObj = JSON.parse(getcouponListString)
  couponList = getcouponListObj;
  console.log(couponList)
}


getMissonData()
getcouponList()

console.log(couponList)


// 이전페이지 
function prevPageBtn(){
  window.parent.postMessage(
      { prevPage : "page3sub" }
      , '*' 
      // , 'http://ksyeong0316.dothome.co.kr/project2/index.html' 
      // , 'http://127.0.0.1:5500/index.html' 
  );}

  let perBtn = document.querySelector("#header_arrow")

  perBtn.addEventListener("click", prevPageBtn)


  // 닉네임 표시
  function getLoginName(){
    let getLoginNameString =   window.localStorage.getItem("loginName")
    console.log(getLoginNameString)
    // let getLoginNameObj = JSON.parse(getLoginNameString)
    loginName = getLoginNameString;
    document.querySelector("#header_font-2").innerHTML= `${loginName}님, 쿠폰함`
  }
  
  
  getLoginName()

  // 빙고 카운트에 따른 상태바 변경
  // 빙고 카운트
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
    console.log(missionData)
    console.log(count+"dfasda")
    return count
}


  function changeBingoBar(count){
    console.log("aaa")
    if(count >= 5){count=5}
    let checkPoint = document.querySelectorAll(".checkPoint")
    if(count == 0) return
    for(let i = 1; i<count ; i++){
      checkPoint[i-1].classList.add("passpoint")
    }
  }

  changeBingoBar(getBingoNumber())



 // 쿠폰사용체크
 function getClickCouponData(){
  let getClickCouponDataString =   window.localStorage.getItem("ClickCouponData")
  let getClickCouponDataaObj = JSON.parse(getClickCouponDataString)
  if(getClickCouponDataaObj==undefined)return
  console.log(getClickCouponDataaObj.count)
  function aa(getClickCouponDataaObj){
    if(getClickCouponDataaObj.count == 1){ couponList[0].used = true}
    if(getClickCouponDataaObj.count == 3){ couponList[1].used = true}
    if(getClickCouponDataaObj.count == 5){ couponList[2].used = true}
  }
  aa(getClickCouponDataaObj)
}
//  getClickCouponData()

getClickCouponData()



 function couponView(item){
   let couponArea = document.querySelector(".couponArea")
   const {bingoCount, money, used} = item
  //  couponArea.innerHTML = ""
  if(used){   couponArea.innerHTML += `
  <div class="couponBox couponUsed">
  <div class="couponBoxContent">
  <p>${bingoCount}줄 빙고 완료 🎁</p>
  <p>\\ ${money.toLocaleString()}</p>
  </div>
  <div class="couponBoxState">
      <p>쿠폰</p>
      <p>사용완료</p>
  </div>
</div>
 `
  }else{
    couponArea.innerHTML += `
    <div class="couponBox">
    <div class="couponBoxContent">
        <p>${bingoCount}줄 빙고 완료 🎁</p>
        <p>\\ ${money.toLocaleString()}</p>
    </div>
    <div class="couponBoxState">
        <p>쿠폰 사용하기</p>
        <div class="imgBox"></div>
    </div>
 </div>
  `
  }
  useCoupon()
 }


 couponList?.forEach((item)=>{
  couponView(item)
})



 function useCoupon(){
  function toPage3coupon(){
    window.parent.postMessage(
      { NextPage : "page3coupon" }
      , '*' 
      // , 'http://ksyeong0316.dothome.co.kr/project2/index.html' 
      // , 'http://127.0.0.1:5500/index.html' 
  );}

  let couponBox = document.querySelectorAll(".couponBox")
for(let i=0; couponBox.length>i; i++){
  console.log(couponBox[i])
  couponBox[i].addEventListener("click", (e)=>{
    // console.log(e.path.reverse()[5].innerText[0])
clickCouponCheck(e.path.reverse()[5].innerText[0])
toPage3coupon()
  })
  }
}

function clickCouponCheck(num){
 switch(num){
  case "1":
    console.log(num);
    changeUsedCoupon(0)
    setClickCouponData(1,"1,000");
  break;
  case "3":
    console.log(num);
    changeUsedCoupon(1)
    setClickCouponData(3,"5,000");
  break;
  case "5":
    console.log(num);
    changeUsedCoupon(2)
    setClickCouponData(5,"10,000");
  break;
  default :
 }

}

function setClickCouponData(count, money){
  let ClickCouponData = {
    count,money
  }
  
  window.localStorage.setItem("ClickCouponData", JSON.stringify(ClickCouponData))


}

function changeUsedCoupon(inputNumber){
  couponList[inputNumber].used = true
  console.log(couponList)
  window.localStorage.setItem("couponList", JSON.stringify(couponList))
//   window.parent.postMessage(
//     { initcouponList : "couponList" }
//     , '*' 
//     // , 'http://ksyeong0316.dothome.co.kr/project2/index.html' 
//     // , 'http://127.0.0.1:5500/index.html' 
// )
}


function couponBoxrfilter(){
  let couponBox =document.querySelectorAll(".couponBox")
  let count = 0;
  if(missionData[0].completion && missionData[1].completion & missionData[2].completion){count++}
  if(missionData[0].completion && missionData[3].completion & missionData[6].completion){count++}
  if(missionData[0].completion && missionData[4].completion & missionData[8].completion){count++}
  if(missionData[1].completion && missionData[4].completion & missionData[7].completion){count++}
  if(missionData[2].completion && missionData[5].completion & missionData[8].completion){count++}
  if(missionData[2].completion && missionData[4].completion & missionData[6].completion){count++}
  if(missionData[3].completion && missionData[4].completion & missionData[5].completion){count++}
  if(missionData[6].completion && missionData[7].completion & missionData[8].completion){count++}
  if(count < 1){
    couponBox[0].remove()
    couponBox[1].remove()
    couponBox[2].remove()
  }else if(count <3){
    couponBox[1].remove()
    couponBox[2].remove()
  }else if(count < 5){
  couponBox[2].remove()
  }else{
    console.log("bingo!")
  }
}
couponBoxrfilter()