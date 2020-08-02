// let bio = document.getElementById('bio');
// bio.onmouseover = function() {
//     bio.style.innerHTML = 'HIIIII';
//     bio.style.backgroundColor = 'green';
// }

// var projs = document.getElementById("projects").querySelectorAll(".proj");
// let proj2 = document.getElementById('proj2');
// let proj3 = document.getElementById('proj-three');

// $(document).ready(function(){
//     $('.menu').click(function(){
//         $('ul').toggleClass('active');
//     })
// })

function showProjDescription(img, description) {
    document.getElementById(description).style.display = "block";
    document.getElementById(img).style.display = "none";
}

function hideProjDescription(img, description){
    document.getElementById(description).style.display = "none";
    document.getElementById(img).style.display = "block";
};


function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("project");
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
        // x[i].innerHTML = "hiiiii";
        removeClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) addClass(x[i], "show");
    }
}

function addClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
    }
}

function removeClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);     
        }
    }
    element.className = arr1.join(" ");
}
var btnContainer = document.getElementById("filter-container");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function(){
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}
filterSelection("all")


// function showProjDescription(event){
//     event.innerHTML = 'yayyyy';
//     event.lastchild.style.display = 'block';
//     event.firstchild.style.display = 'none';
//     // proj.getElementsByClassName('proj-image').style.display = 'default';
//     // proj.getElementsByClassName('proj-description').style.display = 'none';
// };

// for (var i = 0; i < projs.length; i += 1) {
//     projs[i].style.color = black;
//     showProjDescription();
// }

// proj2.onclick = showProjDescription;
// proj3.onmouseover = function(){
//     // let content = proj3.lastChild.text;
//     let image = proj3.firstChild; 
//     image.style.display = 'none';
//     image.nextSibling.style.display = 'inline';

//     // proj3.lastChild.style.display = 'block';
//     // proj.getElementsByClassName('proj-image').style.display = 'default';
//     // proj.getElementsByClassName('proj-description').style.display = 'none';
// };

// itemOne.onmouseover = function(){
//     itemOne.style.width = '430px';
//   };