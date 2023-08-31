

//let css property or query selector = this var 

//let clicked equal no 

//stretch goal put images in array and then call array position and/or array begin+1 to make location align with position on page


let imageEl = document.querySelector('.gift-img1')
let imageEltwo = document.querySelector('.gift-img2')




let clicked = 0
let clicked2 = 0


function present() {
if (clicked === 0 ) {
imageEl.style.backgroundImage = 'url("images/badass.gif")'
console.log("if called")
clicked = 2

} else if (clicked > 1) 
   { console.log("else called")
    imageEl.style.backgroundImage = 'url("images/gift-cover.jpg")'
    clicked = 0
}
}


function present2() {
    if (clicked2 === 0 ) {
    imageEltwo.style.backgroundImage = 'url("images/badass.gif")'
    console.log("if called")
    clicked2 = 2
    
    } else if (clicked2 > 1) 
       { console.log("else called")
        imageEltwo.style.backgroundImage = 'url("images/gift-cover.jpg")'
        clicked2 = 0
    }
    }



    













//onclick 

//if this var equals no click do this function {} // 

 //} else if this var equals clicked open 
 // { do this function which is make the varquery selector equals the present box}

//this var . some property now equals a new value //

//gift image happy changes to new url 

// let clicked equal yes



