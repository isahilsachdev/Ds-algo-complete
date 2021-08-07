function runProgram(input) {
    var input=input.trim().split("\n")
    var input1=input[0].split(" ").map(Number)
    var row=input1[0]
    var col=input1[1]

    var arr=[]
    for(var i=1 ; i<input.length ; i++) {
        arr.push(input[i].trim().split(""))
    }
    //5 5
    // safer
    // amjad
    // babol
    // aaron
    // songs

    var count=0
    for(var i=0 ; i<row ; i++) {
        for (var j=0 ; j<col-3 ; j++) {
            if(arr[i][j]=="s" && arr[i][j+1]=="a" && arr[i][j+2]=="b" && arr[i][j+3]=="a" ) {
                count++
            }
        }
    }
    for(var i=0 ; i<col ; i++) {
        for (var j=0 ; j<row-3 ; j++) {
            if(arr[j][i]=="s" && arr[j+1][i]=="a" && arr[j+2][i]=="b" && arr[j+3][i]=="a" ) {
                count++
            }
        }
    }
    for(var i=0 ; i<row-3 ; i++) {
        for (var j=0 ; j<col-3 ; j++) {
            if(arr[i][j]=="s" && arr[i+1][j+1]=="a" && arr[i+2][j+2]=="b" && arr[i+3][j+3]=="a" ) {
                count++
            }
        }
    }
    for(var i=row-1 ; i>2 ; i--) {
        for (var j=0 ; j<col-3 ; j++) { 
            if(arr[i][j]=="s" && arr[i-1][j+1]=="a" && arr[i-2][j+2]=="b" && arr[i-3][j+3]=="a" ) {
                count++
            }
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