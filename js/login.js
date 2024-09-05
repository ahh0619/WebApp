const loginForm = document.querySelector(".userinfobox");
const loginInput = document.querySelector(".userinput");
const loginUserName = document.querySelector('.loginname');

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    loginInput.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username) {
    loginUserName.innerText = `${username}님, 안녕하세요:)`;
    loginUserName.classList.remove(HIDDEN_CLASSNAME);
    loginForm.classList.add(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    loginInput.classList.add(HIDDEN_CLASSNAME);
    paintGreetings(savedUsername);
}