const form=document.querySelector(".js-form"),
        input=form.querySelector("input"),
        greeting=document.querySelector(".js-greetings");

const USER_LS="currentUser",
SHOWING_CN="showing"

function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText=`Hello &{text}`;
}
function loadName(){
    const cuurentUser=localStorage.getItem(USER_LS);
    if(currentUser===null){
        //user is not
        
    }else{
        paintGreeting(cuurentUser);
        //user is
    }
}
function init(){

}
init();