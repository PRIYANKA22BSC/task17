let addItem=document.querySelector(".addItem");
let skip=document.querySelector(".skip"); 
let servicimg=document.querySelector(".servicimg"); 
let servicePrice=document.querySelector(".servicePrice");
let serviceName=document.querySelector(".serviceName");
let totalAmountValue=document.querySelector("#totalAmountValue");
let tablebody=document.querySelector("tbody");
let inputemail=document.querySelector(".email");
let inputname=document.querySelector(".userName");
let inputphone=document.querySelector(".phoneNo");
let booknow=document.querySelector(".submit");


let services=[
  {name:"Wash and Iron",
   price:"350",
   img:"wash-and-iron.jpg"
  },
   {name:"QuickClean Laundary",
    price:"500",
    img:"quick laundary.png"
   },
   {name:"Wash and Fold",
    price:"150",
    img:"washAndFold.jpg"
   },
   {name:"Stain Removal",
    price:"550",
    img:"strainRemoval.jpg"
   },
   {name:"Ironing",
    price:"30",
    img:"ironing.jpg"
   },
   {name:"Wedding dress cleaning",
    price:"3000",
    img:"wedding-dress-dry-cleaners-1.jpg"
   }, 
   {name:"Dry-Cleaning",
    price:"200",
    img:"Dry-Cleaning.png"
   },];


  let i=0;
  let totalAmt=0;  
function cart(){
let row = addedItemTable.insertRow();
row.insertCell(0).innerText=i+1; 
row.insertCell(1).innerText =services[i].name;
row.insertCell(2).innerText =`₹${services[i].price}`;
totalAmt += parseInt(services[i].price);
totalAmountValue.innerText = `₹${totalAmt}`; 
}

    addItem.addEventListener("click",()=>{
      servicePrice.innerText=`₹${services[i].price}`;
      servicimg.src=services[i].img;
      serviceName.innerText=services[i].name;  
      cart();  
      i++;
      if(i>services.length-1){
        i=0;
      }
      
    });

    skip.addEventListener("click",()=>{
      servicePrice.innerText=`₹${services[i].price}`;
      servicimg.src=services[i].img;
      serviceName.innerText=services[i].name;    
      i++;
      if(i>services.length-1){
        i=0;
      }
  
    }); 


   booknow.addEventListener("click",()=>{
     if(inputemail.value!=="" &&
        inputname.value!=="" &&
        inputphone.value!=="")
     {
      alert("Service Booked Successfully");
      inputemail.value="";
      inputname.value="" ;
      inputphone.value="";
     }
     else{
      alert("Please Enter all details and add items to the cart");

     }
    });
 


 
















