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
    let loginValueString;
       
    if(acountArr.length === 0) return alert("등록된 아이디가 없습니다 회원가입을 해주세요")
   let loginInputBox = document.querySelectorAll("._input > input")
   if(loginInputBox[0].value == "" || loginInputBox[1].value == ""){
    alert("아이디와 비밀번호를 입력해주세요")
   }else{
    acountArr.some((item)=>{
        if(item.id == loginInputBox[0].value && item.pw == loginInputBox[1].value){
            let loginName = item.name
            loginValueString = true
            window.localStorage.setItem('loginName', loginName);
            window.localStorage.setItem('loginValue', loginValueString);
            if(!window.localStorage.getItem("loginName")){window.localStorage.setItem('loginName', loginName);}
            function sendLogin(){
               window.parent.postMessage(
                   { login : true }
                   , '*' 
                   // , 'http://ksyeong0316.dothome.co.kr/project2/index.html' 
                   // , 'http://127.0.0.1:5500/index.html' 
               );}
    
            sendLogin()

         return 
        
     }

     
 })
    if(!loginValueString){alert("아이디와 비밀번호를 확인해주세요") }
   }
//    if(acountArr.length = 0)return 

    



}

let loginBtn = document.querySelector(".bottom_bnt")
loginBtn.addEventListener("click",login)


let searchIDPW = document.querySelector(".bottom_ss div:first-child")
console.log(searchIDPW)
searchIDPW.addEventListener("click", ()=>{
    alert("준비중입니다")
})
let signup = document.querySelector(".bottom_ss div:last-child")
console.log(signup)
signup.addEventListener("click", ()=>{
    createDiv()
})

function singupModal(){
 
}
function createDiv() {
    // 1. <div> element 만들기
    const newModal = document.createElement('div');
    newModal.classList.add("singupModal")
    document.body.appendChild(newModal);
    
    document.querySelector(".singupModal").innerHTML = `
    <div class="singupBG">
    <div class="modalTitle"><p>회원가입</p></div>
    <div class="inputBox input_name"><p>이름</p><input></div>
    <div class="inputBox input_id"><p>아이디</p><input></div>
    <div class="inputBox input_pw"><p>비밀번호</p><input></div>
    <div class="btnArea">
        <div class="closeBtn"> 취소</div>
        <div class="singupBtn"> 확인</div>
    </div>  
    `
    document.querySelector(".closeBtn").addEventListener("click", cancelSingup)
    document.querySelector(".singupBtn").addEventListener("click", singupBtnClick)
    // 4. <body>에 1에서 만든 <div> element 붙이기
  } 

  function cancelSingup(){
    document.querySelector(".singupModal").remove()
}

  const acountArr = [] 
  function singupBtnClick(){
   let inputBox = document.querySelectorAll(".inputBox> input")
    function User(name, id, pw){
        this.name = name;
        this.id = id;
        this.pw = pw;
    }
    let idOverlap = false
    acountArr.some((item)=>{
        if(item.id == inputBox[1].value){
            idOverlap = true;
            return
        }
    })
    if(idOverlap)return alert("아이디가 중복되었습니다")
    acountArr.push(new User(inputBox[0].value, inputBox[1].value, inputBox[2].value))
    inputBox[0].value = ""
    inputBox[1].value = ""
    inputBox[2].value = ""
    console.log(acountArr)
    cancelSingup()
  }