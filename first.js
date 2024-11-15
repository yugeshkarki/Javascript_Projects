//  alert("hello");
//  for( let i=0;i<=10;i++){
//     console.dir("my name is yugesh karki");
//   }
//   let header= document.getElementById("header");
//   console.log(header);
//   let abc=document.getElementsByClassName("abc");
//   console.dir(abc);

//   console.log(abc);
//  let h2 = document.querySelector("h2");
//  console.dir(h2.innertext);

// let newbtn=document.createElement("button");
//   newbtn.innerText="clickme";
//   newbtn.style.backgroundColor="red";
//   document.querySelector("body").prepend(newbtn);
//   let para=document.querySelector("p");
//     para.getAttribute("class");
//     para.setAttribute("class","newclass");

    // let btn1=document.querySelector("#btn1");
    // btn1.onclick=(e)=>{
    //   console.log("button was clicked");
    //   console.log(e);
    // }
    let modebtn=document.querySelector("#mode");
    let currentmode="light";
    modebtn.addEventListener("click",() => {
     if(currentmode=="light"){
      currentmode="dark";
      document.querySelector("body").style.backgroundColor="black";
     }
     else{
      currentmode="light";
      document.querySelector("body").style.backgroundColor="white";
     }
     console.log(currentmode);
     
    })