import startApp from "./app.mjs";

document.addEventListener("DOMContentLoaded", startApp);

const name = document.querySelector("#name");
let form = document.querySelector("#validate-form");
let image = document.querySelector("#image");
let mtnNetwork = ["0803", "0703", "0903", "0806", "0706", "0813", "0810", "0814", "0816", "0906"];
let gloNetwork = ["0805", "0705", "0905", "0807", "0815", "0811"];
let etisalatNetwork = ["0809", "0909", "0817", "0818", "0908"];
let airtelNetwork = ["0802", "0902", "0701", "0808", "0708", "0812", "0901", "0907"];

 function errorMessage() {
    let message = `Opps, please enter a valid phone number`;
    const msg = document.querySelector("small");
    msg.innerText = message;
    return message;
 }

 function trimNumber234(phoneNumber, firstName) {
    phoneNumber.trim();
    if (phoneNumber.length < 14 || phoneNumber.length > 14) {
        let message = `Opps, please enter a valid phone number`;
        const msg = document.querySelector("small");
        msg.innerText = message;
        return message; 
    } else {
        let newNumber = "0" + phoneNumber.slice(4, phoneNumber.length);
        let testNumber = newNumber.slice(0, 4);
        
        mtnNetwork.forEach((num) => {
            let message = "This is a MTN number";
            let img = document.createElement("img");
            img.src = "./logos/MTN.jpg";
            if (testNumber == num) {
                const msg = document.querySelector("small");
                msg.innerText = message;
                image.appendChild(img);
                img.classList.add("img");
            }
        });

        gloNetwork.forEach((num) => {
            let message = "This is a glo number";
            let img = document.createElement("img");
            img.src = "./logos/Globacom.png";
            if (testNumber == num) {
                const msg = document.querySelector("small");
                msg.innerText = message;
                image.appendChild(img);
                img.classList.add("img");
            }
        });

        airtelNetwork.forEach((num) => {
            let message = "This is an Airtel number";
            let img = document.createElement("img");
            img.src = "./logos/Airtel.png";
            if (testNumber == num) {
                const msg = document.querySelector("small");
                msg.innerText = message;
                image.appendChild(img);
                img.classList.add("img");
            }
        });
    
 

        etisalatNetwork.forEach((num) => {
            let message = "This is a 9mobile number";
            let img = document.createElement("img");
            img.src = "./logos/9mobile.png";
            if (testNumber == num) {
                const msg = document.querySelector("small");
                msg.innerText = message;
                image.appendChild(img);
                img.classList.add("img");
            }
        });
    }
}

function cutNumber(phoneNumber) {
  phoneNumber.trim();
  if (phoneNumber.length < 11 || phoneNumber.length > 11) {
    let message = `Ooopps, please enter a valid phone number`;
    const msg = document.querySelector("small");
    msg.innerText = message;
    return message;
  } else {
    let newNumber = phoneNumber;
    let testNumber = newNumber.slice(0, 4);
    mtnNetwork.forEach((num) => {
      let message = "MTN number, Everywhere you go!";
      let img = document.createElement("img");
      img.src = "./logos/MTN.jpg";
      if (testNumber == num) {
        const msg = document.querySelector("small");
        msg.innerText = message;
        image.appendChild(img);
        img.classList.add("img");
      }
    });

    gloNetwork.forEach((num) => {
      let message = "This is a Glo number!";
      let img = document.createElement("img");
      img.src = "./logos/Globacom.png";
      if (testNumber == num) {
        const msg = document.querySelector("small");
        msg.innerText = message;
        image.appendChild(img);
        img.classList.add("img");
      }
    });

    airtelNetwork.forEach((num) => {
      let message = "This is an Airtel number!";
      let img = document.createElement("img");
      img.src = "./logos/Airtel.png";
      if (testNumber == num) {
        const msg = document.querySelector("small");
        msg.innerText = message;
        image.appendChild(img);
        img.classList.add("img");
      }
    });

    etisalatNetwork.forEach((num) => {
      let message = "This is a 9mobile Number!";
      let img = document.createElement("img");
      img.src = "./logos/9mobile.png";
      if (testNumber == num) {
        const msg = document.querySelector("small");
        msg.innerText = message;
        image.appendChild(img);
        img.classList.add("img");
      }
    });
  }
}

function getPhoneNumber(phoneNumber) {
  if (isNaN(phoneNumber)) {
    return errorMessage();
  } else if (phoneNumber.startsWith("+234")) {
    trimNumber234(phoneNumber);
  } else if (phoneNumber.startsWith("0")) {
    cutNumber(phoneNumber);
  } else {
    let message = `We test for Nigerian numbers only.
    You can try again with a valid Nigerian number`;
    const msg = document.querySelector("small");
    msg.innerText = message;
    return message;
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const firstname = form.elements["firstname"];
  const number = form.elements["phoneNumber"];
  let firstName = firstname.value;
  let phoneNumber = number.value;

  
  getPhoneNumber(phoneNumber, firstName);
  name.innerHTML = firstName;
});
