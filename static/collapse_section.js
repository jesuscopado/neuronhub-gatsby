var coll = document.getElementsByClassName("collapsible");
var i;

console.log("YO!!");
console.log(coll.length);

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.parentElement.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
      console.log("if");
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      console.log(content.scrollHeight);
    }
  });
}