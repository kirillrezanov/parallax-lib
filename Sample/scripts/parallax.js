/* Parallax sample */

class Parallax {
    constructor(element, speed, direction) {
        this.parallax(element, speed, direction);
    }
    
    parallax(element, speed, direction) {
        if(direction === false) {
            if(Object.prototype.toString.call(element) != "[object NodeList]" && Object.prototype.toString.call(element) != "[object Array]") {
                window.addEventListener("scroll", function() {
                    var top = window.pageYOffset;
                    element.style.transform = "translateY(-"+top/speed+"px)";
                });
            } else {
                window.addEventListener("scroll", function() {
                    for(let i = 0; i < element.length; i++) {
                        var top = window.pageYOffset;
                        if(top >= (element[i].getBoundingClientRect().top + document.body.scrollTop)) {
                            element[i].style.transform = "translateY(-"+(top - element[i].getBoundingClientRect().top + document.body.scrollTop)/speed+"px)"; 
                        } else if(top >= (element[i].getBoundingClientRect().bottom - document.body.scrollTop)) {
                            window.addEventListener("scroll", function() {
                                return;
                            });
                        }   
                    }
                });
            }
        } else {
            if(Object.prototype.toString.call(element) != "[object NodeList]" && Object.prototype.toString.call(element) != "[object Array]") {
                window.addEventListener("scroll", function() {
                    var top = window.pageYOffset;
                    element.style.transform = "translateY("+top/speed+"px)";
                });
            } else {
                window.addEventListener("scroll", function() {
                    for(let i = 0; i < element.length; i++) {
                        var top = window.pageYOffset;
                        if(top >= (element[i].getBoundingClientRect().top + document.body.scrollTop)) {
                            element[i].style.transform = "translateY("+(top - element[i].getBoundingClientRect().top + document.body.scrollTop)/speed+"px)";     
                        } else if(top >= (element[i].getBoundingClientRect().bottom - document.body.scrollTop)) {
                            window.addEventListener("scroll", function() {
                                return;
                            });
                        } 
                    }
                });
            }
        }
    }
}