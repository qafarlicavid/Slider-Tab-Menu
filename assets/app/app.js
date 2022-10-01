// TAB //

// var btns = document.querySelectorAll('.tab-links button')
// console.log(btns);
// for(var btn of btns){
//     btn.addEventListener('click',function(e) {

//         var active = document.querySelector('.active-btn')
//         // console.log(active);
//         active.classList.remove('active-btn')

//         this.classList.add('active-btn');
//     })
// }

// Slider //

var SlideImages = [
    'assets/images/image2.jpg',
    'assets/images/image4.jpg',
    'assets/images/image5.jpg',
    'assets/images/image3.jpg',
]


var index = 0;
var img = document.querySelector('.slider img')
img.src = SlideImages[index];

var next = document.querySelector('.next')
var prev = document.querySelector('.prev')

function AutoPlay(){
    index++;

    if(index > SlideImages.length-1){
        index = 0;
    }
    img.src=SlideImages[index]
}

next.addEventListener('click',function(){
    index++;

    if(index > SlideImages.length-1){
        index = 0;
    }
    img.src=SlideImages[index]
})

prev.addEventListener('click',function(){
    index--;
    if(index < 0){
        index = SlideImages.length-1;
    }
    img.src=SlideImages[index]
})

setInterval(() => {
    AutoPlay();

}, 2000);

for (var i = 0; i < SlideImages.length; i++) {
    
    var icon = document.createElement('i');
    icon.setAttribute('class',  `fa-solid fa-circle ${i}`);
    icon.setAttribute('id',  `${i}`);
  
    document.getElementById('slidedots').appendChild(icon);
}


var all=document.querySelectorAll('.dots i')
 for(var k = 0; k < all.length; k++){
    all[k].addEventListener('click',function(e){
        var id=this.id
        img.src=SlideImages[id]
        
    })
    
 }
