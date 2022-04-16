const inputdata = document.getElementById("userinput");
const encryptbtn = document.getElementById("btn1");
const decryptbtn = document.getElementById("btn2");
const data=document.getElementById("data");
const copybtn = document.getElementById("copy");

var value;

function encryptData(){
  console.log("encryption")
    const temp = {
      text : inputdata.value
    }
    console.log(temp);
    fetch('https://encrypter007.herokuapp.com/encrypt',{
            method: "POST",
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
            },
            body: JSON.stringify(temp)
            })
            .then(function(response) {
              console.log(response);
              return response.json();
            })
            .then((res)=>{
             // console.log(res);
              value = res.cipherText;
             data.innerHTML = value; 
             inputdata.value = "";
            });

        
}

function decryptData(){
   console.log("decryption");
   const temp = {
    cipherText : inputdata.value
   }
  console.log(temp);
  fetch('https://encrypter007.herokuapp.com/decrypt',{
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify(temp)
          })
          .then(function(response) {
            console.log(response);
            return response.json();
          })
          .then((res)=>{
           //console.log(res);
           value = res.plainText;
           data.innerHTML = value; 
           inputdata.value = "";
          });
}

function myFunction() {
   //console.log(inputdata_val);
    navigator.clipboard.writeText(value)
    .then(() => {
    alert("Copied the text: " + value);
    });
  }

copybtn.addEventListener('click',myFunction);
encryptbtn.addEventListener('click',encryptData);
decryptbtn.addEventListener('click',decryptData);

