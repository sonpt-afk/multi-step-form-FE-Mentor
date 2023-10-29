// Get the input fields
const nameInput = document.querySelector("#name");
const mailInput = document.querySelector("#email");
const phoneInput = document.querySelector("#phone");


//change  main content by step
let currentStep = 1;
function changeStepMainContent(){
   document.querySelector(".step-"+currentStep).classList.add("hide");
    document.querySelector(".app-sidebar-part-order-"+currentStep).classList.remove("active");
   currentStep++;
   document.querySelector(".step-"+currentStep).classList.remove("hide");
   document.querySelector(".app-sidebar-part-order-"+currentStep).classList.add("active");
      
}


//border active
nameInput.addEventListener("focus", function () {
   this.style.borderColor='var(--Purplish-blue)'
});
nameInput.addEventListener("blur", function () {
   this.style.borderColor=''
})

mailInput.addEventListener("focus", function () {
   this.style.borderColor='var(--Purplish-blue)'
})
mailInput.addEventListener("blur", function () {
   this.style.borderColor=''
})
 
phoneInput.addEventListener("focus", function () {
   this.style.borderColor='var(--Purplish-blue)'
})
phoneInput.addEventListener("blur", function () {
   this.style.borderColor=''
})
// Add a submit event listener to the form
let submitBtn = document.querySelector(".app-main-btn");

function showError(input, message) {
   let parent =input.parentElement;
   let small = parent.querySelector("small");
   parent.classList.add("error");
   small.innerText = message
}



function showSuccess(input) {
   let parent =input.parentElement;
   parent.classList.remove("error");
   let small = parent.querySelector("small");
   small.innerText = ''
}

function checkEmptyError(listInput){
   let isEmptyError = false;
   listInput.forEach(input =>{
      input.value =input.value.trim();
      if(input.value === ''){
         isEmptyError = true;
         showError(input,`Field is required`);
      }else{
         showSuccess(input)
      }
   })
   return isEmptyError;
}

function checkEmailError(input){
   let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/; 
   input.value = input.value.trim();

   let isEmailError = !regexEmail.test(input.value);
   if(regexEmail.test(input.value)){
      showSuccess(input)
   }else{
      showError(input,`Email is not valid`);
   }
   return isEmailError;
}

submitBtn.addEventListener("click", function (e) {
   e.preventDefault();
   let isEmptyError = checkEmptyError([nameInput,mailInput,phoneInput]);
   let isEmailError = checkEmailError(mailInput);


if(isEmailError || isEmptyError) {
   //do nothing
}
else{
   changeStepMainContent()
}
});

//start step 2
let arcade = document.querySelector("#arcade-plan");
let advanced = document.querySelector("#advanced-plan");
let pro = document.querySelector("#pro-plan");

function planClickHandler(plan){
   arcade.classList.remove('selected-plan');
   advanced.classList.remove('selected-plan');
   pro.classList.remove('selected-plan');
         // Add 'selected' class to the clicked div

      plan.classList.add('selected-plan');
}

arcade.addEventListener("click",function(){
   planClickHandler(arcade);
})
advanced.addEventListener("click",function(){
   planClickHandler(advanced);
})
pro.addEventListener("click",function(){
   planClickHandler(pro);
})

//back button 
let backBtn = document.querySelector(".app-main-back");
backBtn.addEventListener("click",function(){
   document.querySelector(".step-"+currentStep).classList.add("hide");
   document.querySelector(".app-sidebar-part-order-"+currentStep).classList.remove("active");
   currentStep--;
   document.querySelector(".step-"+currentStep).classList.remove("hide");
   document.querySelector(".app-sidebar-part-order-"+currentStep).classList.add("active");
})

//swtich button
let switchBtn = document.querySelector(".app-main-subscribe-time-switch{");
let switchBtnCircle = document.querySelector(".app-main-subscribe-time-switch-circle");
let monthText = document.querySelector(".app-main-subscribe-time-month");
let yearText = document.querySelector(".app-main-subscribe-time-year");
switchBtn.addEventListener("click",function(){
   switchBtnCircle.classList.toggle("switch-right");
})

