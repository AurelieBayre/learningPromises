// I PROMISE I'll say HI (resolve) if your number is even!
// NB: it may take a while: Wait for it! (I've set a timeout)
// But I won't say HI (reject) if your number is not even.

document.getElementById("validate").addEventListener("click", function(){
    let yourData = document.getElementById("myForm");
    let yourNum = yourData.elements["userNumber"].value;

    function even(num) {
        return new Promise(function(resolve, reject) {
            if (yourNum% 2 === 0) {
                setTimeout(function(){resolve();}, 2000);
                
            } 
            else{
                reject();
            }
        });
    };

    even(yourNum).then(yeah).catch(no);

    function yeah() {
       alert("Hi!!!\n:)");
    }

    function no() {
        document.getElementById("odd").innerHTML = "Sorry but your number is not even. Try again!"
    }
    
});
