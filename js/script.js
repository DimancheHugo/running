const btn = document.getElementById('menu-btn');
const overlay = document.getElementById('overlay');
const menu = document.getElementById('mobile-menu');
const counters = document.querySelectorAll('.counter');
let scrollStarted = false;




btn.addEventListener('click', navToggle);
document.addEventListener('scroll', scrollPage);

function navToggle() {
  btn.classList.toggle('open');
  overlay.classList.toggle('overlay-show');
  document.body.classList.toggle('stop-scrolling');
  menu.classList.toggle('show-menu');
}

function scrollPage() {
  const scrollPos = window.scrollY;

  if (scrollPos > 100 && !scrollStarted) {
    countUp();
    scrollStarted = true;
  } else if (scrollPos < 100 && scrollStarted) {
    reset();
    scrollStarted = false;
  }
}

function countUp() {
  counters.forEach((counter) => {
    counter.innerText = '0';

    const updateCounter = () => {
      // Get count target
      const target = +counter.getAttribute('data-target');
      // Get current counter value
      const c = +counter.innerText;

      // Create an increment
      const increment = target / 100;

      // If counter is less than target, add increment
      if (c < target) {
        // Round up and set counter value
        counter.innerText = `${Math.ceil(c + increment)}`;

        setTimeout(updateCounter, 75);
      } else {
        counter.innerText = target;
      }
    };

    updateCounter();
  });
}

function reset() {
  counters.forEach((counter) => (counter.innerHTML = '0'));
}
let psswd = document.querySelector("#mdp");
let psswdin = document.querySelector("#mdp");
let inv = document.querySelectorAll("small");
let invin = document.querySelectorAll("small");
let n = document.querySelector("#nom");
let nF = document.querySelector("#nomF");
let admail = document.querySelector("#mail");
let admailin = document.querySelector("#mail");
let mess = document.querySelector("#Message");
let age = document.querySelector("#age");
let check = document.querySelector("#formCheck-1");
let buup = document.querySelector(".btn.btn-primary");
let buin = document.querySelector(".btn.btn-primary");
buup.addEventListener("click",verifierFormulaireup);
buin.addEventListener("click",verifierFormulairein);  


function verifmdp(){
  if(psswd.value.length <= 8 ){
    psswd.classList.add("is-invalid");
    inv[3].classList.remove("invisible");
    psswd.classList.add("text-danger");
    psswd.classList.remove("is-valid");
  }else{
    psswd.classList.add("is-valid");
    psswd.classList.remove("is-invalid");
    psswd.classList.remove("text-danger");
    inv[3].classList.add("invisible");
  }
}

function verifmdpin(){
  if(psswd.value.length <= 8 ){
    psswdin.classList.add("is-invalid");
    inv[1].classList.remove("invisible");
    psswdin.classList.add("text-danger");
    psswdin.classList.remove("is-valid");
  }else{
    psswdin.classList.add("is-valid");
    psswdin.classList.remove("is-invalid");
    psswdin.classList.remove("text-danger");
    inv[1].classList.add("invisible");
  }
}

function verifname(){
  if(n.value.length < 3 ){
    n.classList.add("is-invalid");
    inv[0].classList.remove("invisible");
    n.classList.add("text-danger");
    n.classList.remove("is-valid");
  }else{
    n.classList.add("is-valid");
    inv[0].classList.add("invisible");
    n.classList.remove("text-danger");
    n.classList.remove("is-invalid");
  }
}

function verifnameF(){
  if(nF.value.length == 0 ){
    nF.classList.add("is-invalid");
    inv[1].classList.remove("invisible");
    nF.classList.add("text-danger");
    nF.classList.remove("is-valid");
  }else{
    nF.classList.add("is-valid");
    inv[1].classList.add("invisible");
    nF.classList.remove("text-danger");
    nF.classList.remove("is-invalid");
  }
}

function verifadmail(){
  if(admail.value.length <3 ){
    admail.classList.add("is-invalid");
    inv[2].classList.remove("invisible");
    admail.classList.add("text-danger");
    admail.classList.remove("is-valid");
  }else{
    admail.classList.add("is-valid");
    admail.classList.remove("is-invalid");
    admail.classList.remove("text-danger");
    inv[2].classList.add("invisible");
  }
}

function verifadmailin(){
  if(admail.value.length <3 ){
    admailin.classList.add("is-invalid");
    inv[0].classList.remove("invisible");
    admailin.classList.add("text-danger");
    admailin.classList.remove("is-valid");
  }else{
    admailin.classList.add("is-valid");
    admailin.classList.remove("is-invalid");
    admailin.classList.remove("text-danger");
    inv[0].classList.add("invisible");
  }
}

function verifmessage(){
  if(mess.value.length == 0 ){
    mess.classList.add("is-invalid");
    inv[4].classList.remove("invisible");
    mess.classList.add("text-danger");
    mess.classList.remove("is-valid");
  }else{
    mess.classList.add("is-valid");
    inv[4].classList.add("invisible");
    mess.classList.remove("text-danger");
    mess.classList.remove("is-invalid");
  }
}

function verifage(){
  if(check.checked === false ){
    age.classList.add("nul");
    age.classList.remove("bien");
    inv[5].classList.remove("invisible");
    age.classList.add("text-danger");
  }else{
    age.classList.add("bien");
    age.classList.remove("nul");
    inv[5].classList.add("invisible");
    age.classList.remove("text-danger");
  }
}

function verifierFormulaireup(){
  verifmdp()
  verifname()
  verifnameF()
  verifadmail()
  verifmessage()
  verifage()
}

function verifierFormulairein(){
  verifmdpin()
  verifadmailin()
}
// function verifmdp(){
  //  for( let i = 0; i < i.length; i++){
  //  if(i <= 8){
    //  this.classList.add("text-danger")
    // this.classList.add("is-invalid")
  // }else{
    // this.classList.add("is-valid")
    // }
  // }
// }

// let bu = document.querySelector(".btn.btn-primary");
// bu.addEventListener("click",verifierFormulaire);

// function verifierFormulaire(){
    // verifmdp()

// }
 

