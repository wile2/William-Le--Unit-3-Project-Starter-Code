/* Declare variables below to save the different sections (divs) of your story*/
let title = document.querySelector(".title");
let openingPage = document.querySelector(".story-opening"); 
let optiononePage = document.querySelector(".option-one-screen"); 
let optiontwoPage = document.querySelector(".option-two-screen");
let optiononeendPage = document.querySelector(".option-one-end");
let optiontwoendPage = document.querySelector(".option-two-end");

/* Button variables */
let buttonOne = document.querySelector(".option-one");
let buttonTwo = document.querySelector(".option-two");

/* Interactable Image variables */
let appleClick = document.querySelector(".apple-img");
let brainClick = document.querySelector(".brain-img");

/* Text variables*/
let optiononeText = document.querySelector(".option-one-text");
let optiontwoText = document.querySelector(".option-two-text");


/* Mousehover functions */
buttonOne.onmouseover=function(){
	buttonOne.style.width="300px";
    buttonOne.style.height="50px";
    buttonOne.style.border=" solid black 5px";
    buttonOne.style.borderRadius="10px";
};

buttonOne.onmouseout=function(){
	buttonOne.style.width="280px";
    buttonOne.style.height="40px";
    buttonOne.style.border="solid black 3px";
    buttonOne.style.borderRadius="5px";
};

buttonTwo.onmouseover=function(){
	buttonTwo.style.width="300px";
    buttonTwo.style.height="50px";
    buttonTwo.style.border=" solid black 5px";
    buttonTwo.style.borderRadius="10px";
};

buttonTwo.onmouseout=function(){
	buttonTwo.style.width="260px";
    buttonTwo.style.height="40px";
    buttonTwo.style.border=" solid black 3px";
    buttonTwo.style.borderRadius="5px";
};

/* Click functions */
buttonOne.onclick=function(){
    optiononePage.style.display="block";
    openingPage.style.display="none";
    buttonOne.style.display="none";
    buttonTwo.style.display="none";
    title.style.display="none";
};

buttonTwo.onclick=function(){
     optiontwoPage.style.display="block";
     openingPage.style.display="none";
     buttonOne.style.display="none";
     buttonTwo.style.display="none";
     title.style.display="none";
};

appleClick.ondblclick=function(){
   appleClick.src="https://media.istockphoto.com/id/119104612/photo/apple-core-isolated-on-white.jpg?s=612x612&w=0&k=20&c=TG6nTjZ0KhQFVIS01GIOLMzLgHfGTy82IhIJJjiWj1g=";
    optiononeText.innerHTML="Double click more to finish eating!";
    
    if (appleClick.src==="https://media.istockphoto.com/id/119104612/photo/apple-core-isolated-on-white.jpg?s=612x612&w=0&k=20&c=TG6nTjZ0KhQFVIS01GIOLMzLgHfGTy82IhIJJjiWj1g=") {
        appleClick.ondblclick=function(){
           optiononeendPage.style.display="block";
           optiononePage.style.display="none";
        };
    }         
};

brainClick.ondblclick=function(){
   brainClick.src="https://mat3e.github.io/brains/img/3.jpg";
    optiontwoText.innerHTML="Double click more to unlock the limits of reality!";
    
    if (brainClick.src==="https://mat3e.github.io/brains/img/3.jpg") {
        brainClick.ondblclick=function(){
           optiontwoendPage.style.display="block";
           optiontwoPage.style.display="none";
        };
    }    
};