// // QNO.1 SOLUTION

let totalvalue=2000;
let discountpercentage=20;
let finalprice=totalvalue-(totalvalue*discountpercentage/100);

console.log("the final price after discount is: Rs."+finalprice );


// // QNO.2 SOLUTION

let username= "admin";
let password="12345"

if( username== "admin" && password=="12345"){
    console.log("login successful");
}
else{
    console.log("nvalid credentials");
}




// // QNO.3 SOLUTION

let ammountInINRinr=850;
let amountInUSD=850/82;
console.log( ammountInINRinr +" is "+amountInUSD +" USD");




// // QNO.4 SOLUTION


let TPChild=100;
let TPAdult=150;
let TPSenior=120;

let numberofchilds=2;
let numberofadults=1;
let numberofSeniors=1;

let tp=(100*2)+(150*1)+(120*1);

console.log("THE TOTAL PRICE IS "+tp);




// // QNO.5 SOLUTION


let package = "express";


switch (package) {
    case "standard":
        console.log("might-take 3-5 days");
        break;

        case "express":
            console.log("1-2 days");

        break;

        case "overnight":
            console.log("overnight");



    default:
        console.log("invalid pacakage please choose a valid oneS");
    
}




// QNO.6 SOLUTION

let name ="mithun";
let email ="mithun.s@pw.live";
let age ="tw"

if (typeof name !== "string") 
{
    console.log("name should be a string");
}
    
    else if(typeof email !=="string")
    {

    console.log("email should be a string");
    }
    else if(typeof age !== "Number")
    {
        console.log("age should be a number");

    }
    else
    {
        console.log("all correct");
        
    }


   
    // QNO.7 SOLUTION

let ItemsList= ["shampoo","pen","pencils","laptop","bag",];


for(let i=0 ;i< ItemsList.length ;i++){
    console.log(ItemsList[i]);
}

   


// // QNO.8 SOLUTION


console.log("counting from 10 to 0");

let i=0;
while (i<=10) {

    console.log(i);
    i=i+1;
}



// QNO.9 SOLUTION

const arr =[1,2,999,56,"mithun",1234,"pw"]

for(let i=0;i<arr.length;i++)
{
      if( typeof arr[i] =="string") ;
      {
        console.log("Found The First string:"+ arr[i]);
        break;

      }
    
  
       
    
}




// QNO.10 SOLUTION

let arrr=[1,2,-3,5,-9,-8,-7,7]

for(let i=0; i< arrr.length ;i++)
{
    if(arr[i]>0){
        console.log(+arrr[i]);
    }
}

