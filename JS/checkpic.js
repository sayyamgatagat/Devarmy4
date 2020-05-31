const counter = document.getElementById("img1");
let count = localStorage.getItem("count");

if(count == null)
{
    count = 0;
}
count = parseInt(count, 10);
document.getElementById("count_det").innerHTML = "This Image has been clicked " + count + " times";
counter.onclick = function() {
    count += 1;
    localStorage.setItem("count",count);
    document.getElementById("count_det").innerHTML = "This Image has been clicked " + count + " times";
  };
