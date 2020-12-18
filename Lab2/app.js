var calcBtn = document.querySelector("#calcBtn");

calcBtn.addEventListener("click", function () {
  let sideFirst = document.getElementById("sideFirst").value;
  let sideSecond = document.getElementById("sideSecond").value;
  let resultTag = document.querySelector("#result");

  if(sideFirst==0 || sideSecond==0){
    resultTag.innerHTML = 'Сторона не може бути рівна 0';
    return;
  }

  if(sideFirst<0 || sideSecond<0){
    resultTag.innerHTML = 'Сторона не може бути менша 0';
    return;
  }

  if(sideFirst==sideSecond){
    resultTag.innerHTML = 'Сторони не можуть бути рівними';
    return;
  }

  if(sideFirst>sideSecond){
      [sideFirst, sideSecond] = [sideSecond, sideFirst];
  }

  
  let result = Math.sqrt(Math.pow(parseInt(sideSecond), 2) - Math.pow(parseInt(sideFirst), 2)).toFixed(2);

  resultTag.innerHTML = 'Результат= ' + result;
});
