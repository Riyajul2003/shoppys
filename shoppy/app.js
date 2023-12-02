let icon = document.querySelector(".icon");
let ul = document.querySelector("ul")

icon.addEventListener("click", () =>{
    ul.classList.toggle("showData");
   
    if(ul.className == "showData"){
        document.getElementById("bar").className = "fa fa-bars";
    }else{
        document.getElementById("bar").className = "fa fa-bars";
    }

})

let crd = document.querySelectorAll(".crd");
let itempage = document.querySelector(".itempage");
let container = document.querySelector(".container");
let itemimage = document.getElementById("itemimage");
let buybtn = document.getElementById("buybtn")


console.log(crd)


crd.forEach( (curvalue)=>{
    curvalue.addEventListener("click", ()=>{
        itempage.style.display= "flex";
        container.style.display = "none";


        let imgsrc = curvalue.firstElementChild.src ;
        itemimage.src = imgsrc;

        let buytext = document.querySelector(".buytext");
        buybtn .addEventListener("click", () =>{
            document.querySelector(".buypage").style.display="block"
            document.querySelector(".buytext").innerHTML=` <h3>Enter details :</h3>
            <input type="text" placeholder="Enter your name" id="name"><br>
            <input type="text" placeholder="Enter your mobile no" id="number"><br>
            <input type="text" placeholder="Enter your Address" id="address"><br><br>
            <h3>payment option :</h3>
            <select>
                <option value="google-pay">Google-pay</option>
                <option value="phone-pay">Phone-pay</option>
                <option value="paytm-pay">Paytm</option>
                <option value="bharat-pay">Bharat-pay</option>
                <option value="cash on delivery">Cash-on-delivery</option>
            </select><br>
            `
            
            let button = document.createElement("button");
            button.innerText ="submit";
            buytext.appendChild(button);


            button.addEventListener("click", () =>{
                let name = document.getElementById("name");

                if(name.value == "" && address.value == "" && number.value == ""){
                    alert("please Enter your Detail")
                }else{
                    alert("your response Recorded ")
                    document.querySelector(".buypage").style.display="none";

                }
            })


            let cross = document.querySelector(".cross");
            cross.addEventListener("click", function (){
            document.querySelector(".buypage").style.display="none";
                
            })

        
        })
        

    })


    
})


function conncet(){
    let names = document.getElementById("names");
    let num = document.getElementById("num");
    if(names.value == "" && num.value == ""){
        alert("Enter your Email and Name")
    }else{
        alert("Thanks for connecting our web site ")
    }
}

