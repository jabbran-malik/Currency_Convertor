

const updateExchangeRate = async() =>{
    let amount=document.querySelector('amount input');
    let amtval=amount.value;
    if (amtval=== ""|| amtval <1)
    {
        amtval=1;
    amtval='1'    }

}
const url= `${Base_URl}/${fromcurr.value.toLowerCase()}/${tocurr.value.toLowercase()}`
let response=await fetch(url);
let data= await response.json();
let rate= date[tocurr.value.toLowerCase()]

let finalamount=amount*rate;
message.innerText=`${amtval} ${fromcurr.value}=${finalamount}${tocurr.value}`


window.document.addEventListener('load',()=>{
    updateExchangeRate();
})