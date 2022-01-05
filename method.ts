

let address :string="biratnagar";

//let newAddress:string =address.toLowerCase();
console.log(address.toLowerCase());
console.log(address.charAt(3));
console.log(address.toUpperCase());


let course;
course="Java full stack web development";
//type assertions technique 1
console.log((<string>course).concat(" FEE: Rs 25000/-"));

let phoneNumber;
phoneNumber = 9814301921;
//type assertions technique2
console.log((phoneNumber as number).valueOf());
