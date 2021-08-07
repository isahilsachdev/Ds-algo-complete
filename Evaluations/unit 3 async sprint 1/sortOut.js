function runProgram(input) {
    input=input.trim().split("\n")
    let size=Number(input[0])
    let arr=input[1].trim().split(" ").map(Number)

    let newarr=new Array(size).fill(0).map((el,i)=>el=i);

    for(let i=0;i<size-1;i++){
        for(let j=0;j<size-i-1;j++){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]];
                [newarr[j],newarr[j+1]]=[newarr[j+1],newarr[j]];
            }
        }
    }
    console.log(newarr.join(" "))
}

if (process.env.USERNAME === "ASUS") {
    runProgram(`5
    4 5 3 7 1`);
} else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
        read += input;
    });
    process.stdin.on("end", function () {
        read = read.replace(/\n$/, "");
        read = read.replace(/\n$/, "");
        runProgram(read);
    });
    process.on("SIGINT", function () {
        read = read.replace(/\n$/, "");
        runProgram(read);
        process.exit(0);
    })
};

