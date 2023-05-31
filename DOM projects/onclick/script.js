
      const btn = document.getElementById("btn");
      const bulb = document.getElementById("bulb");
      btn.addEventListener("click",() => {
         if(btn.textContent.includes("On")){
              btn.textContent= "Turn Off";
              bulb.src = "glowingBulb.jpg" ;
         }
         else{
          btn.textContent = "Turn On";
          bulb.src = "light-bulb-11371329.jpg";
         }
      })
