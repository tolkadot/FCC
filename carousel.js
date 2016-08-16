
function slider() {
    var elements = document.getElementsByClassName("hide");
    console.log(elements);
    var switcher = setInterval(change(elements) , 7000);
}


   
   function change(elements) {
       console.log(elements);
    var i=1
    if (i > elements.length -1) {
        i=0
    }
    elements[i-1].style.display = "none"
    elements[i].style.display = "block";
    i++
    console.log(i)
}
    
    
    //elements[makeVisible].style.display = "block";



// function countElements(elements){
//     var el = -1;
//     for(i = 0, i<elements.length, i++){
//      if (elements[i].style.display == "block") {
//             visibleID = i;
//         }
//         return visibleID;
// }
// }



slider();