var i=0;
var digits=[];
while(i<3){

    digits.push(window.prompt('Enter "${i}". digit:'))
    i++;

}

alert("Here you are, numerically ordered of your numbers..." + digits.sort((a,b)=>a-b));