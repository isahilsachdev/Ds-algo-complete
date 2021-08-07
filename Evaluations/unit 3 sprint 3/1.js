function runProgram(input) {
    var open=["(","{","["]
    var close=[")","}","]"]
    var arr=[]
    var arr2=[]

    for (var i=0 ; i<input.length ; i++) {
        if(input[i]=="(" || input[i]=="{" || input[i] =="[") {
            arr.push(input[i])
        }
        else {
            arr2.push(input[i])
        }
    }

    var flag = true
    if(arr.length != arr2.length) {
        flag=false
        console.log("unbalanced")            
    }
    if(flag) {
        for(var i=0 ;i<arr.length ; i++) {
            if( (arr[i]=="(" && arr2[arr2.length-1-i]==")") ||
            (arr[i]=="{" && arr2[arr2.length-1-i]=="}") ||
            (arr[i]=="[" && arr2[arr2.length-1-i]=="]") ) {
               continue
           } 
           else {
               flag=false
               console.log("unbalanced")
               break
           }
        }
    }

    if(flag) {
        console.log("balanced")
    }
}

// runProgram(`(((((`) 

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