
const $ = (selector, root = document) => root.querySelector(selector);
let form = $("#myform");
let msg = $("#msg");

form.username.value = "mmmm";

const $$ = (selector, root = document) => root.querySelectorAll(selector);



const start = () => {
    // console.log(form.gender.value);

    // form.remember.checked = true;
    // form.username.focus();
    // form.pass.disabled();
    // form.reset();
    // form.username.focus();
    // form.username.blur();
    form.username.select();
}

// msg.hidden = true;
// msg.hidden = false;

form.addEventListener("submit", function (e) {
    e.preventDefault();
    msg.innerText = "فرم ارسال شد ";
});

form.username.addEventListener( "input" , function(){
    msg.innerText = " در حال تایپ";
});

form.pass.addEventListener( "focus" , function(){
    msg.innerText="پسورد فوکوس گرفت";
});