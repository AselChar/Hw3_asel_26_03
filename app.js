
for(var i = 0 ;i<=100;i++){
    if(i%3===0 && i%5===0){
        console.log("FizzBuzz")
    }else if(i%5===0){
        console.log("Buzz")
    }else if(i%3===0 ){
        console.log("Fizz")
    }
    else{
        console.log(i)
    }
}

var massiv = ['milk', 'beer', 'beer', 'milk', 'milk' , "cheese"]

for(j of massiv){
    if(j === "milk"){
        console.log("good")
    }else if(j==="beer"){
        console.log("bad")
    }else{
        console.log("error")
    }
}


