const btnHeader = document.querySelector("#btn-header")
const btnHeaderIconMenu = document.querySelector(".menu")
const btnHeaderIconCloseMenu = document.querySelector(".close-menu")
const modalMobile = document.querySelector(".modal-wrapper")

const btnLeft = document.querySelector(".display-btn-left")
const btnRight = document.querySelector(".display-btn-right")

const imgCarosel = document.querySelector(".displayimgsdesktop")
const imgSlider = Array.from(imgCarosel.children)

let imgDispleyed = 0

//Modal expansivo mobile
btnHeader.addEventListener("click", expandModal)

function expandModal() {
  btnHeaderIconMenu.classList.toggle("hide")
  btnHeaderIconCloseMenu.classList.toggle("hide")
  modalMobile.classList.toggle("hide")
}

//Carosel image slider

btnLeft.addEventListener("click", sliderLeft)
btnRight.addEventListener("click", sliderRight)

function sliderLeft() {
  if (imgDispleyed === 0) {
    hideLeft()
    return
  }
  if (imgDispleyed > 0) {
    showRight()
    imgSlider[imgDispleyed].classList.add("hide")
    --imgDispleyed
    imgSlider[imgDispleyed].classList.remove("hide")
  }
}
function sliderRight() {
  if (imgDispleyed === imgSlider.length - 1) {
    hideRight()
    return
  }
  if (imgDispleyed < imgSlider.length) {
    showLeft()
    imgSlider[imgDispleyed].classList.add("hide")
    ++imgDispleyed
    imgSlider[imgDispleyed].classList.remove("hide")
  }
}

function showRight() {
  btnRight.classList.remove("display-btn-focus")
  btnRight.classList.add("display-btn-right")
}
function showLeft() {
  btnLeft.classList.remove("display-btn-focus")
  btnLeft.classList.add("display-btn-left")
}

function hideLeft() {
  btnLeft.classList.remove("display-btn-left")
  btnLeft.classList.add("display-btn-focus")
}
function hideRight() {
  btnRight.classList.remove("display-btn-right")
  btnRight.classList.add("display-btn-focus")
}
