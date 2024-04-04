let count = 0,
    number = 1,
    counter = document.querySelector(".counter"),
    plusBtn = document.querySelector(".plusBtn"),
    minusBtn = document.querySelector(".minusBtn"),
    input = document.querySelector("input"),
    resetBtn = document.querySelector(".resetBtn");


input.addEventListener("input", (e)=>{
   if(input.value < 1){
        e.preventDefault();
        input.value = 1;
        number = input.value;
   }
   else{
        number = input.value;
   }
});

plusBtn.addEventListener("click", ()=>{
    input.dispatchEvent(new Event('change'))
        count = count + Number(number);
        counter.textContent = count;
});

minusBtn.addEventListener("click", ()=>{
    input.dispatchEvent(new Event('change'));
    count = count - Number(number);
    counter.textContent = count;
});

resetBtn.addEventListener("click", ()=>{
    count = 0;
    counter.textContent = count;
});
