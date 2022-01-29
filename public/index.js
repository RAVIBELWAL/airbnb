window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if ( document.documentElement.scrollTop > 650) {
    document.getElementById("nav").style.backgroundColor = "#ffffff";
    
    document.getElementById("nav").style.color = "#000000";
    document.getElementById("logo").style.color = "#fd1943";
    document.getElementById("nav").style.paddingTop = "10px";
    document.getElementById("nav").style.paddingBottom = "10px";
    
  } 
if(document.documentElement.scrollTop < 35)
  {
      document.getElementById("nav").style.backgroundColor = "Black";
      document.getElementById("nav").style.color = "#000000";
      document.getElementById("logo").style.color = "#ffffff";
      document.getElementById("nav").style.paddingTop = "4vh";
      document.getElementById("nav").style.paddingBottom = "4vh";
    }
}
/*document.body.scrollTop > 50 || document.documentElement.scrollTop > 50
document.getElementById("nav").style.height = "6vh";
*/