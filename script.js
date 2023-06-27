var i = 0
var txt = "Driven by curiosity and a hunger for knowledge, I'm Passionate about turning ideas into reality through clean and efficient code and Constantly learning and evolving to stay ahead in the ever-changing tech landscape. "
var speed = 25
function type(){
  document.getElementById("type").innerHTML += txt.charAt(i)
  i++
  setTimeout(type, speed)
}
type();

window.HTMLElement.prototype.scrollIntoView = function() {};

const heroSection = document.querySelector('.hero-div')
const scrollElement = document.getElementById('scrolltop')

const scrollTop = () => {
    heroSection.scrollIntoView({behavior: "smooth"})
}

scrollElement.addEventListener("click", scrollTop)
