const number = document.querySelectorAll('.current-weather .heading');
const overcast = document.querySelectorAll('.current-weather .body-3');

/**
 * 
 * @param {NodeList} elmts selected elements from HTML to add events
 * @param {string} event event type e.g. 'click' , 'mouseenter'...
 * @param {function} callback callback function to be executed when event is triggered
    
*/ 

function eventOnElemts(elmts, event, callback) {
    for(const elmt of elmts){
        elmt.addEventListener(event, callback);
    }
}

function changeColor(){
    number[0].style.color='red';
}

eventOnElemts(number, 'click', changeColor);

