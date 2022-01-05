//function in typescript

console.log("Functions in TypeScript");

function add(num1:number,num2:number){
    return num1+num2;
}
function simpleInterest(p:number,t:number,r:number){
    let si:number;
    si  =(p*t*r)/100;
    return si;    
}
function areaOfcircle(r:number){
    const pi  = 3.14;
    let area :number ;
    area=pi*r*r;
    return area;

}

function average(a:number,b:number,c?:number){
    console.log("First Number "+a);
    console.log("Second Number "+b);
    let avg:number;
    if( c === undefined){
        avg = (a+b)/2;
        return avg;
        
    }
    if (c != undefined){
        
        console.log("Third number "+c);
        
        avg=(a+b+c)/3;
        return avg;
    }
    
}
console.log();
console.log("--------***---------");
console.log();
console.log("Average of two numbers: "+average(3,4));
console.log();
console.log("--------***---------");
console.log();
console.log("Average of three number is "+average(4,2,3));
console.log();
console.log("--------***---------");
console.log();
console.log("The area of circle is "+areaOfcircle(7));
console.log();
console.log("--------***---------");
console.log();
console.log("The simple interest is "+simpleInterest(10000,2,10));
console.log();
console.log("--------***---------");
console.log();
console.log("The sum of two number is "+add(14,20));

