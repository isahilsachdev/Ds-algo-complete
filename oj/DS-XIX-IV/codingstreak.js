function runProgram(input) {
    input=input.trim().split("\n")
    var lines=Number(input[0])

    var arr=[]
    for(var i=1 ; i<=lines ; i++) {
        var input2=input[i].trim().split("")
        var str=""
        str+=input2
        arr.push(str)
    }
    

    console.log(arr)

    var high=0
    for(var i=0 ; i<lines ; i++) {
        for(var j=0 ; j<arr[i].length ; j++) {
            if(arr[i][j]=="c" ){
                var count=1
                // console.log(arr[i][j])
                for(var k=j+1 ; k<arr[i].length ; k++) {
                    console.log(arr[i][k])
                    if(arr[i][k]=="c") {
                        count++
                    } else {
                        break
                    }
                }    
                if(high<count) {
                    high=count
                }
            }else{
                continue
            }
        }
    }

    console.log(high)
    

    //     4
    // SSSSEEEECCCCEECCCC
    // CCCCCSSSSEEECCCCSS
    // SSSSSEEESSCCCCCCCS
    // EESSSSCCCCCCSSEEEE
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