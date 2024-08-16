const sliderItem = document.querySelectorAll('.slider-item')
for (let index = 0; index < slideritem.length; index++) {
    sliderItem[index].style.left = index * 100 + "%"
}

// const sliderItems = document.querySelector('.slider-items')
const arrowRight = document.querySelector('ri-arrow-right-fill')
const arrowLeft = document.querySelector('ri-arrow-left-fill')
	
arrowRight.addEventListener('click',()=>{alert('ok')})
