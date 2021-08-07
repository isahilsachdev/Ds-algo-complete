function runProgram(input) {
    var input=input.trim().split(/[\r\n]+/)
    var total=0
    var input2=input[0].split(" ")
    var row=input2[0]
    var col=input2[1]
    var sum=input2[2]

    var org=[]
    for(var i=1 ; i<=input[0][0] ; i++ ) {
        input3=input[i].split(" ").map(Number)
        org.push(input3)
    }

    
    // 4 4 4 
    // 3 2 1 2
    // 1 1 1 1
    // 0 1 0 1
    // 0 0 2 0


    //horizontal    
    for(var i=0 ; i<row ; i++ ) {
        
        for(var j=0 ; j<col-2 ; j++ ) {
            var count=1;
            count*=org[i][j]*org[i][j+1]*org[i][j+2]
            if (count==sum) {
                total++
            }
        }
    }

    //vertical
    for(var i=0 ; i<row ; i++ ) {    

        for(var j=0 ; j<col-2 ; j++ ) {
            var count1=1;
            count1*=org[j][i]*org[j+1][i]*org[j+2][i]

            if (count1==sum) {
                total++
            }
        }     
    }
    //4 4 11
    // 1 2 1 8
    // 2 2 8 6
    // 8 1 2 5
    // 2 5 8 6

    //down diagonal 
    for(var i=0 ; i<row-2 ; i++ ) {
        for(var j=0 ; j<col-2 ; j++ ) {
            var count3=1
            count3*=org[i][j] * org[i+1][j+1] * org[i+2][j+2]
            if(count3==sum) {
                total++
            }
        }
    }

    //up diagonal
    for(var i=row-1 ; i>1 ; i-- ) {
        for(var j=0 ; j<col-2 ; j++ ) {
            var count4=1
            count4*=org[i][j] * org[i-1][j+1] * org[i-2][j+2]
            if(count4==sum) {
                total++
            }
        }
    }
    console.log(total)
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