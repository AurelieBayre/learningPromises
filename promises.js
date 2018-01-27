// I PROMISE I'll say HI (resolve) if your number is even!
// NB: it may take a while: Wait for it! (I've set a timeout)
// But I won't say HI (reject) if your number is not even.

document.getElementById("validate").addEventListener("click", function(){
     document.getElementById("odd").innerHTML = "Processing..."
    let yourData = document.getElementById("myForm");
    let yourNum = yourData.elements["userNumber"].value;

    function even(num) {
        return new Promise(function(resolve, reject) {
            if (yourNum% 2 === 0) {
                setTimeout(function(){resolve();}, 2000);
                
            } 
            else{
                setTimeout(function(){reject();}, 2000);            
            }
        });
    };

    even(yourNum).then(yeah).catch(no);

    function yeah() {
       alert("Hi!!!\n:)\nyour number is even. Promise resolved!");
    }

    function no() {
        document.getElementById("odd").innerHTML = "Sorry but your number is not even. Try again!"
    }
    
});
