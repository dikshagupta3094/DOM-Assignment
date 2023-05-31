//key press 
  //alert box will pop up when key is pressed
  let input_box = document.getElementById("Keypress");  
  input_box.addEventListener("keypress",()=>{
   alert("you have pressed a key");
  })
 
  //keydown
  //alert box will pop up when key is down first alert box will pop up then we see the text on input filed

  let keydownInput = document.getElementById("Keydown");
  keydownInput.addEventListener("keydown",()=>{
   alert("key down event occur");
  })

  //keyup event
//   first key is pressed then alert box will pop up
  let keyupInput = document.getElementById("Keyup");
  keyupInput.addEventListener("keyup",()=>{
   alert("Key up event occur");
  })