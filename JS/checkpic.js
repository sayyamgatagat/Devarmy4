var counter1 = document.getElementById("img1");
var count1 = localStorage.getItem("count");
var counter2 = document.getElementById("img2");
var count2 = localStorage.getItem("count2");

if(count1 == null)
{
    count1 = 0;
}
if(count2 == null)
  {
      count2 = 0;
  }
  
count1 = parseInt(count1, 10);
document.getElementById("count_det1").innerHTML = "This Image has been clicked " + count1 + " times";
count2 = parseInt(count2, 10);
document.getElementById("count_det2").innerHTML = "This Image has been clicked " + count2 + " times";

counter1.onclick = function() {
    count1 += 1;
    localStorage.setItem("count",count1);
    document.getElementById("count_det1").innerHTML = "This Image has been clicked " + count1 + " times";
  };

counter2.onclick = function() {
    count2 += 1;
    localStorage.setItem("count2",count2);
    document.getElementById("count_det2").innerHTML = "This Image has been clicked " + count2 + " times";
    };
