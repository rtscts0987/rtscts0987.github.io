const body = document.querySelector("body");

const images = [
    "img.jpeg", 
    "img (1).jpg", 
    "img (2).jpg", 
    "img (3).jpg", 
    "img (4).jpg", 
    "img (5).jpg", 
    "img (6).jpg", 
    "img (7).jpg", 
    "img (8).jpg", 
    "img (9).jpg", 
    "img (10).jpg", 
    "img (11).jpg", 
    "img (12).jpg", 
    "img (13).jpg", 
    "img (14).jpg", 
    "img (15).jpg", 
    "img (16).jpg", 
    "img (17).jpg", 
    "img (18).jpg", 
    "img (19).jpg", 
    "img (20).jpg", 
    "img (21).jpg", 
    "img (22).jpg", 
    "img (23).jpg", 
    "img (24).jpg", 
    "img (25).jpg", 
    "img (26).jpg", 
    "img (27).jpg", 
    "img (28).jpg", 
    "img (29).jpg", 
    "img (30).jpg", 
    "img (31).jpg", 
    "img (32).jpg", 
    "img (33).jpg", 
    "img (34).jpg"
];
const chosenImage = images[Math.floor(Math.random() * images.length)];
// const bgImage = document.createElement("img");
// bgImage.src = `img/${chosenImage}`;
// document.body.appendChild(bgImage);
// body.style.backgroundImage = url(`img/${chosenImage}`);

body.style.backgroundImage = url("https://www.msn.com/ko-kr/sports/soccer/%EC%86%90%ED%9D%A5%EB%AF%BC-%EB%B6%80%EC%83%81%EC%97%90-%EB%B6%84%EB%85%B8%ED%95%9C-%EC%BD%98%ED%85%8C-11%EC%9B%94-%EC%9B%94%EB%93%9C%EC%BB%B5-%EA%B0%9C%EC%B5%9C%EB%8A%94-%EB%AF%B8%EC%B9%9C-%EC%A7%93/ar-AA13KFPw?ocid=msedgntp&cvid=770c57dd8f6848b4a010d2cd4d8d8265&fullscreen=true#image=1");
