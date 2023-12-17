let count = 10;

let disp = document.getElementById("count");

function reduceVariable() {
  count--;
  disp.innerHTML = count;
  console.log(count);
  if (count < 0) {
   // clearInterval(interval);
     disp.innerHTML = "Over!";
     console.log(count)
 }
}
  
