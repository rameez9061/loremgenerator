let number =document.getElementById("digit");
let form = document.getElementById("myform");
let main =document.querySelector(".text")
let heading = document.getElementById("only")

form.addEventListener("submit",(e)=>{

    e.preventDefault();

  heading.style.display = "none";

    let loremIpsum =(count)=>{

          let lorem = `Lorem ipsum dolor sit amet. `;
          return lorem.repeat(count)
    }
    console.log(number.value)
    integer =parseInt(number.value);

    let gotvalue = loremIpsum(integer)
    let lorem = document.createElement("div");
    lorem.className = "box"; 
    lorem.innerHTML =`<p>${gotvalue}</p>`;
    main.appendChild(lorem);

    

})

console.log(number.value)


// window.addEventListener("scroll",()=>{

      
//      if(window.scrollY > 2){

//         form.style.boxShadow = "1px 1px 10px black";
//      }
//      else{

//         form.style.boxShadow = "";
//      }
// })