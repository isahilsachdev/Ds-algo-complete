function runProgram(input) {
    input=input.trim().split("")
    
    var count=0
    for(var i=0 ; i<input.length ; i++) {
        var counta=0 , counti=0 ,  counto=0 ,  countu=0

        for(var j=i ; j<input.length ; j++) {
            if(input[j]=="a")  {
                counta++
            } else if(input[j]=="i") {
                counti++
            } else if(input[j]=="o") {
                counto++
            } else if (input[j]=="u") {
                countu++
            }
        }
        if(counta>=1 && counti>=1 && counto>=1 && countu>=1 ) {
            count++
        }
    }
    
    for(var i=0 ; i<input.length-1 ; i++) {
    var counta=0 , counti=0 ,  counto=0 ,  countu=0

        for(var k=input.length-2 ; k>=i ; k--) {
            if(input[k]=="a")  {
                counta++
            } else if(input[k]=="i") {
                counti++
            } else if(input[k]=="o") {
                counto++
            } else if (input[k]=="u") {
                countu++
            }
        }
        if(counta>=1 && counti>=1 && counto>=1 && countu>=1 ) {
            count++
        }
    }   
    console.log(count)
}
process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
    read += input;
});
process.stdin.on("end", function () {
    read = read.replace(/\n$/,"")
   runProgram(read);
});

process.on("SIGINT", function () {
    read = read.replace(/\n$/,"")
    runProgram(read);
    process.exit(0);
});