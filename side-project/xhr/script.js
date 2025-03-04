'use strict';

// ==DOM Element==
const carousel = document.querySelector(".carousel");
const carouselCard = document.querySelector(".carousel-card");
const leftBtn = document.querySelector(".left-button");
const rightBtn = document.querySelector(".right-button");

// ==Constants==
const xhr = new XMLHttpRequest();
// Prepare to limit the direction in which the carousel can slide
const carouselWidth = carousel.offsetWidth;

// ==Variables==
// Count the number of total cards you have
let cardCount = 0;
// Define an offset property to dynamically update by clicking the button controls
// as well as a maxX property so the carousel knows when to stop at the upper limit
let offset = 0;
let maxX = 0;
let url
let status = xhr.status;

// Add the click events
leftBtn.addEventListener("click", function(e) {

    if (offset !== 0) {
        offset += carouselWidth;
        carousel.style.transform = `translateX(${offset}px)`;
    }

    if (offset == 0){
        leftBtn.disabled = true;
    }
    if (offset !== maxX){
        rightBtn.disabled = false;
    }
});
    
rightBtn.addEventListener("click", function() {
    if (offset !== maxX) {
        offset -= carouselWidth;
        carousel.style.transform = `translateX(${offset}px)`;
    }
   
    if(offset !== 0){
        leftBtn.disabled = false;
    }
    if(offset === maxX){
        rightBtn.disabled = true;
    }
});


// Use XHR
window.addEventListener("DOMContentLoaded", readPhoneDetailJson);
function readPhoneDetailJson(e) {
    url = "resources/data/phone.list.json";
    console.log("readyState : ", xhr.readyState);
    xhr.open("GET", url);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send();

    xhr.onreadystatechange = () => {
        let status = xhr.status;
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (status === 0 || (status >= 200 && status < 400)) {
                const result = JSON.parse(xhr.responseText);
                const jsonObject = Object.values(result);

                // create card
                for (let i = 0; i < jsonObject.length; i++) {
                    const element = document.createElement('li');
                    const attr = document.createAttribute('data-id');
                    attr.value = `${i}`;
                    element.setAttributeNode(attr);
                    element.classList.add('carousel-card');
                    element.innerHTML = `<div class="product-img-wrapper">
                                            <img src="resources/images/${jsonObject[i].productImg}" alt="" />
                                        </div>
                                        <div class="product-name-wrapper">
                                            ${jsonObject[i].name}
                                        </div>`;
                    carousel.appendChild(element);
                }

                //set cardCount, maxX
                cardCount = jsonObject.length;
                maxX = -(carouselWidth * Math.floor(cardCount/3));

                //set button
                leftBtn.disabled = true;
            
            } else {
                console.log("error responseText : ", xhr.responseText);
            }
        }
    };
}

// Use Promise
// window.addEventListener("DOMContentLoaded", readPhoneDetailJson);
// function readPhoneDetailJson(e) {
//     // 1. Produce Promise(resolve, reject)
//     return new Promise((resolve, reject) => {
//         url = "resources/data/phone.list.json";
//         console.log("readyState : ", xhr.readyState);
//         xhr.open("GET", url);
//         xhr.setRequestHeader("Content-type", "application/json");
//         xhr.send();

//         xhr.onreadystatechange = function () {
//             if (xhr.readyState !== XMLHttpRequest.DONE) {
//                 return;
//             }
//             if (status === 0 || (status >= 200 && status < 400)) {
//                 resolve(xhr.responseText);
//             } else {
//                 reject(new Error(xhr.status));
//             }
//         };
//     })
//         //2. Consumers: then, catch, finally
//         .then(JSON.parse)
//         .then(Object.values)
//         .then((jsonObject) => {
//                 // create card
//                 for (let i = 0; i < jsonObject.length; i++) {
//                     const element = document.createElement('li');
//                     const attr = document.createAttribute('data-id');
//                     attr.value = `${i}`;
//                     element.setAttributeNode(attr);
//                     element.classList.add('carousel-card');
//                     element.innerHTML = `<div class="product-img-wrapper">
//                                             <img src="resources/images/${jsonObject[i].productImg}" alt="" />
//                                         </div>
//                                         <div class="product-name-wrapper">
//                                             ${jsonObject[i].name}
//                                         </div>`;
//                     carousel.appendChild(element);
//                 }

//                 //set cardCount, maxX
//                 cardCount = jsonObject.length;
//                 maxX = -(carouselWidth * Math.floor(cardCount/3));

//                 //set button
//                 leftBtn.disabled = true;
//         })
//         .catch(console.log);
// }


// Use Fetch Api
// window.addEventListener("DOMContentLoaded", function () {
//     url = "resources/data/phone.list.json";
//     useFetch(url, "GET");
// });

// let useFetch = (url, method) => {
//     return fetch(url, {
//         method: method,
//         headers: {
//             "Content-Type": "application/json",
//         },
//     })
//         .then((data) => data.json())
//         .then((result) => Object.values(result))
//         .then((jsonObject) => {
//             // create card
//             for (let i = 0; i < jsonObject.length; i++) {
//                 const element = document.createElement('li');
//                 const attr = document.createAttribute('data-id');
//                 attr.value = `${i}`;
//                 element.setAttributeNode(attr);
//                 element.classList.add('carousel-card');
//                 element.innerHTML = `<div class="product-img-wrapper">
//                                         <img src="resources/images/${jsonObject[i].productImg}" alt="" />
//                                     </div>
//                                     <div class="product-name-wrapper">
//                                         ${jsonObject[i].name}
//                                     </div>`;
//                 carousel.appendChild(element);
//             }

//             //set cardCount, maxX
//             cardCount = jsonObject.length;
//             maxX = -(carouselWidth * Math.floor(cardCount/3));

//             //set button
//             leftBtn.disabled = true;
//         })
//         .catch((error) => {
//             return console.log(new Error(error));
//         });
// };


// Use async/await
// window.addEventListener("DOMContentLoaded", function () {
//     url = "resources/data/phone.list.json";
//     useAsync(url, "GET");
// });

// // 1. async : return new Promise((resolve, reject)=>{return 'result'})
// let useAsync = async (url, method) => {
//     let data = {
//         method: method,
//         headers: {
//             "Content-Type": "application/json",
//         },
//     };
//     const result = await fetch(url, data);
//     const jsonText = await result.json();
//     const jsonObject = await Object.values(jsonText);

//     // create card
//     for (let i = 0; i < jsonObject.length; i++) {
//         const element = document.createElement('li');
//         const attr = document.createAttribute('data-id');
//         attr.value = `${i}`;
//         element.setAttributeNode(attr);
//         element.classList.add('carousel-card');
//         element.innerHTML = `<div class="product-img-wrapper">
//                                 <img src="resources/images/${jsonObject[i].productImg}" alt="" />
//                             </div>
//                             <div class="product-name-wrapper">
//                                 ${jsonObject[i].name}
//                             </div>`;
//         carousel.appendChild(element);
//     }

//     //set cardCount, maxX
//     cardCount = jsonObject.length;
//     maxX = -(carouselWidth * Math.floor(cardCount/3));

//     //set button
//     leftBtn.disabled = true;
// };


