const left = document.querySelector('.left')
const right = document.querySelector('.right')
const slider = document.querySelector('.slider')
const images = document.querySelectorAll('.image')

let sliderNumber = 1;
const length = images.length;

const nextSlider = ()=>{
    slider.style.transform = `translateX(-${sliderNumber*800}px)`;
    sliderNumber++
}
const previousSlider = ()=>{
    slider.style.transform = `translateX(-${(sliderNumber-2)*800}px)`;
    sliderNumber--;
}

const getFirstSlider = ()=>{
    slider.style.transform = `translateX(0px)`;
    sliderNumber = 1;
}
const getLastSlider = ()=>{
    slider.style.transform = `translateX(-${(length-1)*800}px)`;
    sliderNumber = length;
}

right.addEventListener( 'click' , ()=>{
    sliderNumber < length ? nextSlider() : getFirstSlider();
})
left.addEventListener( 'click' , ()=>{
    sliderNumber > 1 ? previousSlider() : getLastSlider();
})