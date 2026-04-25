function validateForm(){
  var name = document.getElementById("uesrName").value;
  var email = document.getElementById("userEmail").value;

  if(name === "" || email === ""){
    alert("Please fill in all fields.");
    return false;
  }
  return true;
} 

function toggleDescription(elementId) {
    var description = document.getElementById(elementId);
    if (description.style.display === "none") {
        description.style.display = "block";
    } else {
        description.style.display = "none";
    }
}

window.addEventListener('load', function() {
    var quote = document.getElementById("myQuote");
    if (quote) {
        quote.addEventListener("mouseover", function() {
            quote.style.backgroundColor = "#333";
            quote.style.fontStyle = "italic";
        });

        quote.addEventListener("mouseout", function() {
            quote.style.backgroundColor = "transparent";
            quote.style.fontStyle = "normal";
        });
    }
});


window.onload = function() {
    // التحقق من أننا في الصفحة الرئيسية
    var footer = document.querySelector(".footer");
    if (footer && document.title === "Home") {
        var newP = document.createElement("p");
        var currentTime = new Date();
        var textNode = document.createTextNode("Page loaded on: " + currentTime.toLocaleString());
        
        newP.appendChild(textNode);
        footer.appendChild(newP);
    }
    
    // ملاحظة: إذا كنت تستخدم window.onload لأكثر من وظيفة، يفضل دمجها
};

