window.onload=function(){

    let cartCounter = 0;

    const addButton = document.getElementById('addBtn');
    const minusButton = document.getElementById('minusBtn');
    const cartNo = document.getElementById('cartNo') ;

    addButton.addEventListener('click', () => {
        console.log('plus Button clicked!');
        cartCounter++;
        console.log(cartCounter);

        cartNo.innerHTML = cartCounter ;


        cartNo.classList.add("cartIndicator");
    });

    minusButton.addEventListener('click', () => {
        console.log('minus Button clicked!');
        
        if(cartCounter ==0){
          cartNo.classList.remove("cartIndicator");
          // hide span 
          cartNo.innerHTML ='';
          return;
        }
        cartCounter--;
        cartNo.innerHTML = cartCounter;
    });

  

    
}









       

