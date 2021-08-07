
function runProgram(input) {
    input = input.split("\n")
    var input2 = input[1].trim().split(" ").map(Number)
    // console.log(input2)
    var input3=[...input2]

    for(var i=0 ; i<input2.length ; i++) {
        var min = i
        for(var j=i+1 ; j<input2.length ; j++) {
            if(input2[j]<input2[min]) {
                min=j
            }
        }

        temp=input2[min]
        input2[min]=input2[i]
        input2[i]=temp
    }
    var arr = []

    for(var i=0 ; i< input2.length ; i++) {

        arr.push(input3.indexOf(input2[i]))
    }
    console.log(arr.join(" "))
}



// runProgram(`5
// 4 5 3 7 1`)


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