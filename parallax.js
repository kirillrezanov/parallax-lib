/* Kirill Rezanov */

class Parallax {
    constructor(element, speed) {
        this.element = element;
        this.speed = speed;
        this.parallax(this.element, this.speed);
    }
    
    parallax(element, speed) {
        window.addEventListener("scroll", function() {
            var el = element;
            var top = window.pageYOffset;
            if(Object.prototype.toString.call(el) != "[object NodeList]") {
                el.style.transform = "translateY("+top/speed+"px)";
            } else {
                for(let i = 0; i < el.length; i++) {
                    el[i].style.transform = "translateY("+top/speed+"px)";         
                }
            }
        });
    }
}
