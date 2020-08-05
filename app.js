let inputText = document.querySelector('.inputText').value;

console.log(inputText);

function palindrome(str) {

  str= str.replace(/[^\w\s]|_/g,"").replace(/\s+/g,"").toLowerCase();
  var strArr= str.split("");
  var n=strArr.length
  var b=Math.floor(n/2);
  var c=strArr.slice(0,b).join("");
  var d=strArr.slice(b+1,n).reverse().join("");

  if(n%2===0){
    if(strArr.slice(0,b).join("")==strArr.slice(b,n).reverse().join("")){
      return true;
    }else{
      return false;
    }
  }else{
      if(strArr.slice(0,b).join("")==strArr.slice(b+1,n).reverse().join("")){
      return true;
    }else{
      return false;
    }
  }

}

  function result(){
      var checkButton = document.querySelector(".check");
      checkButton.addEventListener("click", function() {

        var inputText = document.querySelector('.inputText').value;
        var result = document.getElementById("result");
    
        if(palindrome(inputText)) {
          result.innerHTML = "Yay!palindrome";
          result.className = "alert success";
        } else {
          result.innerHTML = "Nay! Not palindrome";
          result.className = "alert danger";
        }
        inputText.value(" ");
    })

  }

  result();



