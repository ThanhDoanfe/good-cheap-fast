let good = document.querySelector('.good'),
   fast = document.querySelector('.fast'),
    cheap = document.querySelector('.cheap');

function changed(hazzzz){
  let  isGood = good.checked;
   let isFast = fast.checked;
  let  isCheap = cheap.checked;
    if(isGood && isFast && isCheap && hazzzz == cheap){
        fast.checked = false;
    }
    if(isGood && isCheap && isFast && hazzzz == fast){
        good.checked = false;
    }
    if(isCheap && isFast && isGood && hazzzz == good){
        cheap.checked = false;
    }


}