/* Kirill Rezanov */

class Parallax {
    constructor(element, speed, direction) {
        this.parallax(element, speed, direction);
    }
    
    parallax(element, speed, direction) {
        window.addEventListener("scroll", function() {
            if(direction === false) {
                var top = window.pageYOffset;
                if(Object.prototype.toString.call(element) != "[object NodeList]") {
                    element.style.transform = "translateY(-"+top/speed+"px)";
                } else {
                    for(let i = 0; i < element.length; i++) {
                        element[i].style.transform = "translateY(-"+top/speed+"px)";         
                    }
                }
            } else {
                var top = window.pageYOffset;
                if(Object.prototype.toString.call(element) != "[object NodeList]") {
                    element.style.transform = "translateY("+top/speed+"px)";
                } else {
                    for(let i = 0; i < element.length; i++) {
                        element[i].style.transform = "translateY("+top/speed+"px)";         
                    }
                }
            }
        });
    }
}
