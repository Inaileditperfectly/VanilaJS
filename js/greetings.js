// const loginForm = document.querySelector("#login-form"); //html element
// const loginInput = loginForm.querySelector("input"); 
// const loginInput = loginForm.querySelector("button");
// 위의 방법처럼 1.아예 div안에서 인풋과 버튼을 찾거나 2.아래처럼 div 과정 생략하고 직접 input이나 button 지정하거나
// window.onload = function(){ //이거 없으니까 Cannot read properties of null (reading 'addEventListener') 에러 뜸 
// 아.. 첨에 addEventListener 에러 뜬 이유,, html 내부 오타 떄문.. 강의(4-1) 댓글에도 있음
// login-form을 class로 줘놓고 id로 착각해서 #붙여서 그런거였음

const loginForm = document.querySelector("#login-form");
  const loginInput = document.querySelector("#login-form input"); 
  // const loginButton = document.querySelector("#login-form button");

const greeting = document.querySelector("#greeting"); 
  // const link = document.querySelector("a"); 
  const HIDDEN_CLASSNAME = "hidden" //변수이름 대문자 관습 : string만 포함된 변수는
  //대문자로 표시하고 string을 표시하고 싶을 때 사용함 첨 알았네, 중요 정보 담은게 아니라 대문자 표시
  const USERNAME_KEY = "username"


// 모든 EventListener function의 첫번째 argument는 항상 event에 대한 정보다.
// js가 그걸 제공함. 우린 argument만 함수에 넣어주면 됨- 아래의 event, 없어도 됨 그럼 어떤 정보도 받지 않겠단 말
  function onLoginSubmit(event) {  //강의에선 함수 이름 handleLoginBtnClick
    event.preventDefault();  //이벤트의 기본행동이 발동되지 못하게 함
    // 여기선 form을 submit할 때의 자동 새로고침을 못하게 함
    // console.log(event);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    // greeting.innerText = "Hello " + username;
    localStorage.setItem(USERNAME_KEY,username) // 진짜 충격적 아래 설명 참고,,새로고침해도 유지됨
    paintGreetings(username);
    // console.log(username);

    //local storage는 브라우저에 뭔가를 저장할 수 있게 해줌. 나중에 가져다 쓸 수 있음
    // 헐 개발자도구의 Application 들어가서 탐색기의 local storage 클릭
    // 다른것도 유저 정보 저장하지만 쟤가 건드리기 제일 쉬움 local storage API 검색
    // localStorage.setItem("username","오오"); 와씨 진짜 충격적
    // 유저가 이름 제출시 그걸 저장하기



    // if(username === '' ){  //input값을 이렇게 검사하기보다 html 내장 기능 이용(form)
    //   alert('이름을 입력해주세요.');
    // } else if(username.length >  15 ) {
    //   alert('14자 이내로 입력.');
    // }
  }

  function paintGreetings(username) {
    greeting.innerText = `안녕하세요 ${username}님`;
    greeting.classList.remove(HIDDEN_CLASSNAME); 
  }


  // function handleLinkClick(event) {  
  //   event.preventDefault(); 
  //   const username = loginInput.value;
  //   console.log(username);
  // }

  // loginButton.addEventListener("click", clickBtn);

 
  const savedUsername = localStorage.getItem(USERNAME_KEY);
  // console.log(savedUsername);

  if(savedUsername === null ) {
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME); 
    loginForm.addEventListener("submit", onLoginSubmit); //여기서 함수 이름에 () 붙이면 안됨.
    // () 보자마자 브라우저가 바로 실행할 것임. 그러면 이벤트리스너의 의미가 없음.
  } else {
    // show the greetings
    paintGreetings(savedUsername)
  }

  // link.addEventListener("click", handleLinkClick);
// };
