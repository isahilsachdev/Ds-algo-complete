function runProgram(input) {
    var input=input.trim().split("")
    var counta=0 ,countb=0 ,countc=0 ,countd=0,counte=0 ,countf=0,countg=0,counth=0,counti=0,countj=0,countk=0
    ,countl=0,countm=0,countn=0,counto=0,countp=0,countq=0,countr=0,counts=0,countt=0,countu=0
    ,countv=0,countw=0,countx=0,county=0,countz=0
    
    
    for (var i=0 ; i<input.length ; i++ ){
        if(input[i]=="a") {
            counta++
        } else if(input[i]=="b") {
            countb++
        }  else if(input[i]=="c") {
            countc++
        } else if(input[i]=="d") {
            countd++
        } else if(input[i]=="e") {
            counte++
        } else if(input[i]=="f") {
            countf++
        } else if(input[i]=="g") {
            countg++
        } else if(input[i]=="h") {
            counth++
        } else if(input[i]=="i") {
            counti++
        } else if(input[i]=="j") {
            countj++
        } else if(input[i]=="k") {
            countk++
        } else if(input[i]=="l") {
            countl++
        } else if(input[i]=="m") {
            countm++
        } else if(input[i]=="n") {
            countn++
        } else if(input[i]=="o") {
            counto++
        } else if(input[i]=="p") {
            countp++
        } else if(input[i]=="q") {
            countq++
        } else if(input[i]=="r") {
            countr++
        } else if(input[i]=="s") {
            counts++
        } else if(input[i]=="t") {
            countt++
        } else if(input[i]=="u") {
            countu++
        } else if(input[i]=="v") {
            countv++
        } else if(input[i]=="w") {
            countw++
        } else if(input[i]=="x") {
            countx++
        } else if(input[i]=="y") {
            county++
        } else {
            countz++
        }  
    }
    if(counta>0) {
        console.log("a"+" "+counta)
    } if(countb>0) {
        console.log("b"+" "+countb)
    } if(countc>0) {
        console.log("c"+" "+countc)
    } if(countd>0) {
        console.log("d"+" "+countd)
    } if(counte>0) {
        console.log("e"+" "+counte)
    } if(countf>0) {
        console.log("f"+" "+countf)
    } if(countg>0) {
        console.log("g"+" "+countg)
    } if(counth>0) {
        console.log("h"+" "+counth)
    } if(counti>0) {
        console.log("i"+" "+counti)
    } if(countj>0) {
        console.log("j"+" "+countj)
    } if(countk>0) {
        console.log("k"+" "+countk)
    } if(countl>0) {
        console.log("l"+" "+countl)
    } if(countm>0) {
        console.log("m"+" "+countm)
    } if(countn>0) {
        console.log("n"+" "+countn)
    } if(counto>0) {
        console.log("o"+" "+counto)
    } if(countp>0) {
        console.log("p"+" "+countp)
    } if(countq>0) {
        console.log("q"+" "+countq)
    } if(countr>0) {
        console.log("r"+" "+countr)
    } if(counts>0) {
        console.log("s"+" "+counts)
    } if(countt>0) {
        console.log("t"+" "+countt)
    } if(countu>0) {
        console.log("u"+" "+countu)
    } if(countv>0) {
        console.log("v"+" "+countv)
    } if(countw>0) {
        console.log("w"+" "+countw)
    } if(countx>0) {
        console.log("x"+" "+countx)
    } if(county>0) {
        console.log("y"+" "+county)
    } if(countz>0) {
        console.log("z"+" "+countz)
    } 
    
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