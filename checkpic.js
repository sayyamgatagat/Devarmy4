var counter = document.getElementById("img1");
var count = localStorage.getItem("count2");

if(count == null)
{
    count = 0;
}
count = parseInt(count, 10);
document.getElementById("count_det").innerHTML = "This Image has been clicked " + count + " times";
counter.onclick = function() {
    count += 1;
    localStorage.setItem("count2",count);
    document.getElementById("count_det").innerHTML = "This Image has been clicked " + count + " times";
  };
