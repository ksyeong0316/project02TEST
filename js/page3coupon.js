let missionData;
let loginName;
function getMissonData(){
  let getMissonDataString =   window.localStorage.getItem("missionData")
  let getMissonDataObj = JSON.parse(getMissonDataString)
  missionData = getMissonDataObj;
}


getMissonData()


// 이전페이지 
function prevPageBtn(){
  window.parent.postMessage(
      { prevPage : "page3(coupon_box)" }
      , '*' 
      // , 'http://ksyeong0316.dothome.co.kr/project2/index.html' 
      // , 'http://127.0.0.1:5500/index.html' 
  );}

  let perBtn = document.querySelector("#header_arrow")

  perBtn.addEventListener("click", prevPageBtn)

document.querySelector(".placeCheck").addEventListener("click", ()=>{alert("준비중입니다")})

function changecouponContent(count, money, barcodeImg){

  let aa =document.querySelector(".cpupon")
  aa.innerHTML = `
  <div class="textArea">
  <p>COUPON</p>
  <p>\\ ${money}</p>
  <p>#${count}줄 빙고 완료🎁</p>
</div>
<div class="barcodeArea">
  <img src="./img/barcode.png">
</div>
  `
}


let clickCouponData;

function getClickCouponData(){
  let getClickCouponDataString =   window.localStorage.getItem("ClickCouponData")
  let getClickCouponDataaObj = JSON.parse(getClickCouponDataString)
  clickCouponData = getClickCouponDataaObj;
}
getClickCouponData()
// console.log(clickCouponData)

changecouponContent(clickCouponData.count, clickCouponData.money)