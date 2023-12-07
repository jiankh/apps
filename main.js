/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/projectData.js":
/*!****************************!*\
  !*** ./src/projectData.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


const Projects = [
    {
        title: "WeatherApp",
        img: "./images/weatherapp.png",
        description: "Weather App created using WeatherAPI. The application retrieves data from the API based on the input location and displays the current weather along with other details for the day. It also shows the hourly forecast and a forecast for the next 3 days. It also features a switch to change between Fahrenheit and Celsius",
        codeLink: "https://github.com/jiankh/weather-app",
        previewLink: "https://jiankh.github.io/weather-app/"
    },
    {
        title: "Binary Search Tree",
        img: "./images/BST.png",
        description: "Binary Search Tree application that shows the different types of traversals through a binary search tree. This visual guide helps people understand BST and has interactive features like inserting nodes, deleting nodes, finding the depth of a specific node, and also re-balancing of the BST.",
        codeLink: "https://github.com/jiankh/dsa_exercises/tree/main/binary_search_trees",
        previewLink: "https://jiankh.github.io/dsa_exercises/"
    },
    {
        title: "CV Builder",
        img: "./images/cvbuilder.png",
        description: "A simple but effective CV Layout Builder made with React. Allows the user to create an efficient resume in no time, and download it for use.",
        codeLink: "https://github.com/jiankh/CVMaker",
        previewLink: "https://jiankh.github.io/CVMaker/"
    },
    {
        title: "Genshin Memo",
        img: "./images/genshin.png",
        description: "A simple memory game that consists of the player choosing character cards from the popular online RPG Genshin Impact without repeating the same characters. The game was made in React and Vite.",
        codeLink: "https://github.com/jiankh/genshin-memo",
        previewLink: "https://jiankh.github.io/genshin-memo/"
    },
    {
        title: "Fake Market",
        img: "./images/fake-market.png",
        description: "A fake e-commerce shop using FakeStore API to retrieve sample items. Features a working shopping cart with quantities and price. Also, the website stores data into the users LocalStorage so data will not be lost. Built using React, Vite, and TailwindCSS.",
        codeLink: "https://github.com/jiankh/fake-market",
        previewLink: "https://fake-market.vercel.app/"
    },
    {
        title: "Bakery Website",
        img: "./images/bakery.png",
        description: "Frontend React website for a mock restaurant with several functional tabs. The main focus of this project was to modulize the elements of the site for better reusability. The menu items are also stored in an array of object that can easily by editted to add and remove menu items.",
        codeLink: "https://github.com/jiankh/sprigsbakery",
        previewLink: "https://jiankh.github.io/sprigsbakery/"
    },
    {
        title: "Tic Tac Toe",
        img: "./images/tictactoe.png",
        description: "Javascript application of the classic game Tic Tac Toe. Features Multiplayer and Single player. Includes an upbeatable AI when playing singleplayer mode, made with the MiniMax Algorithm.",
        codeLink: "https://github.com/jiankh/tictactoe",
        previewLink: "https://jiankh.github.io/tictactoe/"
    },
    {
        title: "Knight Travails",
        img: "./images/knight-travails.png",
        description: "The famous Binary Tree Search excercise Knight Travails, but visualized. The knight chess piece is able to travail the chessboard to any cell on the board. This application shows the shortest path that could be taken to a destination selected. The method used to get the shortest path is by utilizing Breadth First Traversal.",
        codeLink: "https://github.com/jiankh/knights-travails",
        previewLink: "https://jiankh.github.io/knights-travails"
    },
    {
        title: "Calculator",
        img: "./images/calculator.png",
        description: "Full functional simple calculator developed using HTML/CSS/JavaScript. Handles the basic mathemical equations.",
        codeLink: "https://github.com/jiankh/calculator",
        previewLink: "https://jiankh.github.io/calculator/"
    },
    {
        title: "Sketch Book",
        img: "./images/sketchpad.png",
        description: "A drawing board that functions similarily to MS Paint. Allows the user to choose the size of the canvas and also has a special rainbow effect drawing. The focus of this project was DOM manipulation using JavaScript.",
        codeLink: "https://github.com/jiankh/sketchbook",
        previewLink: "https://jiankh.github.io/sketchbook/"
    },
    {
        title: "Pygame Platformer",
        img: "./images/PygameSample.gif",
        description: "[WIP] Pygame based game. Platformer adventure game with a main character inspired by the fairy tale of Little Red Riding Hood. The player needs to navigate through the forest to reach a destination.",
        codeLink: "https://github.com/jiankh/RedHood",
        previewLink: ""
    },
    {
        title: "Rock Paper Scissor",
        img: "./images/RPS.png",
        description: "A classic game of Rock Paper Scissors. First to win 5 rounds wins the match! ",
        codeLink: "https://github.com/jiankh/RPS_game",
        previewLink: "https://jiankh.github.io/RPS_game/"
    },
    // {
    //     title: "Library App",
    //     img: "./images/library.png",
    //     description: "An application that lets user save information about books that they are interested in. The user can also change and see the status of the books if they finished reading it or not.",
    //     codeLink: "https://github.com/jiankh/libraryProject",
    //     previewLink: "https://jiankh.github.io/libraryProject/"
    // },  
]

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Projects);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _projectData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectData.js */ "./src/projectData.js");



//PROJECT LOADING
const projectContainer = document.querySelector(".projects")
function createProject(img, title, description, codeLink, previewLink) {
    const project = document.createElement("div")
    project.classList.add("project")
    project.innerHTML = `
    <div class="project-img"><img src="${img}"></div>
    <hr>
    <div class="project-description">
        <div class="project-header">
            <div class="project-title">${title}</div>
            <div class="buttons">
                <button onclick="location.href='${codeLink}';" ><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" /> </button>
                <button onclick="location.href='${previewLink}';"> <img src="images/open-in-new.svg"> </button>
            </div>
        </div>
        <div class="description"> ${description} </div>
        
    </div>
    `

    projectContainer.appendChild(project)
}
_projectData_js__WEBPACK_IMPORTED_MODULE_0__["default"].forEach((project) => {
    createProject(project.img, project.title, project.description, project.codeLink, project.previewLink)
})
const disabledButtons = document.querySelectorAll('[onclick="location.href=\'\';"]');
disabledButtons.forEach((button)=> {
    button.disabled = true
    button.classList.add('disabled-btn')
})

//Navigation bar focus 
// document.addEventListener('scroll', () => {
//     const sections = document.querySelectorAll(".section")
//     let currentSection = ""

//     sections.forEach(section => {
//         const rect = section.getBoundingClientRect()
//         if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
//             currentSection = section.id
//         }
//     })

//     //removing active class from everything
//     document.querySelectorAll("li a").forEach(sect => {
//         sect.classList.remove("active-nav")
//     })

//     //adding active class 
//     document.querySelector(`a[href="#${currentSection}"]`).classList.add('active-nav')

// })


//Project scrolling transition
window.addEventListener('scroll', function() {
    const desiredScrollPosition = 900; // Change this value to the desired scroll position
    const projectContainer = document.querySelector(".projects-container");
    const project = document.querySelectorAll(".project")

    if (window.scrollY >= desiredScrollPosition) {
        projectContainer.classList.add('scroll-to-color');
        project.forEach(proj => proj.classList.add("scroll-move"))
        
    } else {
        projectContainer.classList.remove('scroll-to-color');
        project.forEach(proj => proj.classList.remove("scroll-move"))
    }
})


//Fade transition for technology
window.addEventListener('scroll', function() {
    const desiredScrollPosition = 500; // Change this value to the desired scroll position
    const technologies = document.querySelectorAll(".tech");

    if (window.scrollY >= desiredScrollPosition) {
        technologies.forEach(tech => tech.classList.add("fade-in"))
        
    } else {
        technologies.forEach(tech => tech.classList.remove("fade-in"))
    }
})


//Contact Form
const contactForm = document.querySelector(".contact-form")
let messageStatusContainer = document.querySelector(".message-status")

contactForm.addEventListener("submit", (e) => {
    e.preventDefault()
    emailjs.sendForm('contact_service', 'template_8649fbq', contactForm, 'UUZ2U3JvBit2rQvCl')
        .then(function() {
            messageStatusContainer.textContent = "Message sent!"
            contactForm.reset()
        }, function(error) {
            messageStatusContainer.textContent = `Error: ${error}`
            contactForm.reset()
        })
})

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsaUVBQWU7Ozs7OztVQ2hHZjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTnVDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsSUFBSTtBQUM3QztBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsTUFBTTtBQUMvQztBQUNBLGtEQUFrRCxTQUFTLEVBQUU7QUFDN0Qsa0RBQWtELFlBQVksRUFBRTtBQUNoRTtBQUNBO0FBQ0Esb0NBQW9DLGFBQWE7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQVE7QUFDUjtBQUNBLENBQUM7QUFDRCxnRkFBZ0Y7QUFDaEY7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLDBDQUEwQyxlQUFlO0FBQ3pEO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULDJEQUEyRCxNQUFNO0FBQ2pFO0FBQ0EsU0FBUztBQUNULENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvcHJvamVjdERhdGEuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuY29uc3QgUHJvamVjdHMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiV2VhdGhlckFwcFwiLFxyXG4gICAgICAgIGltZzogXCIuL2ltYWdlcy93ZWF0aGVyYXBwLnBuZ1wiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIldlYXRoZXIgQXBwIGNyZWF0ZWQgdXNpbmcgV2VhdGhlckFQSS4gVGhlIGFwcGxpY2F0aW9uIHJldHJpZXZlcyBkYXRhIGZyb20gdGhlIEFQSSBiYXNlZCBvbiB0aGUgaW5wdXQgbG9jYXRpb24gYW5kIGRpc3BsYXlzIHRoZSBjdXJyZW50IHdlYXRoZXIgYWxvbmcgd2l0aCBvdGhlciBkZXRhaWxzIGZvciB0aGUgZGF5LiBJdCBhbHNvIHNob3dzIHRoZSBob3VybHkgZm9yZWNhc3QgYW5kIGEgZm9yZWNhc3QgZm9yIHRoZSBuZXh0IDMgZGF5cy4gSXQgYWxzbyBmZWF0dXJlcyBhIHN3aXRjaCB0byBjaGFuZ2UgYmV0d2VlbiBGYWhyZW5oZWl0IGFuZCBDZWxzaXVzXCIsXHJcbiAgICAgICAgY29kZUxpbms6IFwiaHR0cHM6Ly9naXRodWIuY29tL2ppYW5raC93ZWF0aGVyLWFwcFwiLFxyXG4gICAgICAgIHByZXZpZXdMaW5rOiBcImh0dHBzOi8vamlhbmtoLmdpdGh1Yi5pby93ZWF0aGVyLWFwcC9cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogXCJCaW5hcnkgU2VhcmNoIFRyZWVcIixcclxuICAgICAgICBpbWc6IFwiLi9pbWFnZXMvQlNULnBuZ1wiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkJpbmFyeSBTZWFyY2ggVHJlZSBhcHBsaWNhdGlvbiB0aGF0IHNob3dzIHRoZSBkaWZmZXJlbnQgdHlwZXMgb2YgdHJhdmVyc2FscyB0aHJvdWdoIGEgYmluYXJ5IHNlYXJjaCB0cmVlLiBUaGlzIHZpc3VhbCBndWlkZSBoZWxwcyBwZW9wbGUgdW5kZXJzdGFuZCBCU1QgYW5kIGhhcyBpbnRlcmFjdGl2ZSBmZWF0dXJlcyBsaWtlIGluc2VydGluZyBub2RlcywgZGVsZXRpbmcgbm9kZXMsIGZpbmRpbmcgdGhlIGRlcHRoIG9mIGEgc3BlY2lmaWMgbm9kZSwgYW5kIGFsc28gcmUtYmFsYW5jaW5nIG9mIHRoZSBCU1QuXCIsXHJcbiAgICAgICAgY29kZUxpbms6IFwiaHR0cHM6Ly9naXRodWIuY29tL2ppYW5raC9kc2FfZXhlcmNpc2VzL3RyZWUvbWFpbi9iaW5hcnlfc2VhcmNoX3RyZWVzXCIsXHJcbiAgICAgICAgcHJldmlld0xpbms6IFwiaHR0cHM6Ly9qaWFua2guZ2l0aHViLmlvL2RzYV9leGVyY2lzZXMvXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiQ1YgQnVpbGRlclwiLFxyXG4gICAgICAgIGltZzogXCIuL2ltYWdlcy9jdmJ1aWxkZXIucG5nXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiQSBzaW1wbGUgYnV0IGVmZmVjdGl2ZSBDViBMYXlvdXQgQnVpbGRlciBtYWRlIHdpdGggUmVhY3QuIEFsbG93cyB0aGUgdXNlciB0byBjcmVhdGUgYW4gZWZmaWNpZW50IHJlc3VtZSBpbiBubyB0aW1lLCBhbmQgZG93bmxvYWQgaXQgZm9yIHVzZS5cIixcclxuICAgICAgICBjb2RlTGluazogXCJodHRwczovL2dpdGh1Yi5jb20vamlhbmtoL0NWTWFrZXJcIixcclxuICAgICAgICBwcmV2aWV3TGluazogXCJodHRwczovL2ppYW5raC5naXRodWIuaW8vQ1ZNYWtlci9cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogXCJHZW5zaGluIE1lbW9cIixcclxuICAgICAgICBpbWc6IFwiLi9pbWFnZXMvZ2Vuc2hpbi5wbmdcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJBIHNpbXBsZSBtZW1vcnkgZ2FtZSB0aGF0IGNvbnNpc3RzIG9mIHRoZSBwbGF5ZXIgY2hvb3NpbmcgY2hhcmFjdGVyIGNhcmRzIGZyb20gdGhlIHBvcHVsYXIgb25saW5lIFJQRyBHZW5zaGluIEltcGFjdCB3aXRob3V0IHJlcGVhdGluZyB0aGUgc2FtZSBjaGFyYWN0ZXJzLiBUaGUgZ2FtZSB3YXMgbWFkZSBpbiBSZWFjdCBhbmQgVml0ZS5cIixcclxuICAgICAgICBjb2RlTGluazogXCJodHRwczovL2dpdGh1Yi5jb20vamlhbmtoL2dlbnNoaW4tbWVtb1wiLFxyXG4gICAgICAgIHByZXZpZXdMaW5rOiBcImh0dHBzOi8vamlhbmtoLmdpdGh1Yi5pby9nZW5zaGluLW1lbW8vXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiRmFrZSBNYXJrZXRcIixcclxuICAgICAgICBpbWc6IFwiLi9pbWFnZXMvZmFrZS1tYXJrZXQucG5nXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiQSBmYWtlIGUtY29tbWVyY2Ugc2hvcCB1c2luZyBGYWtlU3RvcmUgQVBJIHRvIHJldHJpZXZlIHNhbXBsZSBpdGVtcy4gRmVhdHVyZXMgYSB3b3JraW5nIHNob3BwaW5nIGNhcnQgd2l0aCBxdWFudGl0aWVzIGFuZCBwcmljZS4gQWxzbywgdGhlIHdlYnNpdGUgc3RvcmVzIGRhdGEgaW50byB0aGUgdXNlcnMgTG9jYWxTdG9yYWdlIHNvIGRhdGEgd2lsbCBub3QgYmUgbG9zdC4gQnVpbHQgdXNpbmcgUmVhY3QsIFZpdGUsIGFuZCBUYWlsd2luZENTUy5cIixcclxuICAgICAgICBjb2RlTGluazogXCJodHRwczovL2dpdGh1Yi5jb20vamlhbmtoL2Zha2UtbWFya2V0XCIsXHJcbiAgICAgICAgcHJldmlld0xpbms6IFwiaHR0cHM6Ly9mYWtlLW1hcmtldC52ZXJjZWwuYXBwL1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiBcIkJha2VyeSBXZWJzaXRlXCIsXHJcbiAgICAgICAgaW1nOiBcIi4vaW1hZ2VzL2Jha2VyeS5wbmdcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJGcm9udGVuZCBSZWFjdCB3ZWJzaXRlIGZvciBhIG1vY2sgcmVzdGF1cmFudCB3aXRoIHNldmVyYWwgZnVuY3Rpb25hbCB0YWJzLiBUaGUgbWFpbiBmb2N1cyBvZiB0aGlzIHByb2plY3Qgd2FzIHRvIG1vZHVsaXplIHRoZSBlbGVtZW50cyBvZiB0aGUgc2l0ZSBmb3IgYmV0dGVyIHJldXNhYmlsaXR5LiBUaGUgbWVudSBpdGVtcyBhcmUgYWxzbyBzdG9yZWQgaW4gYW4gYXJyYXkgb2Ygb2JqZWN0IHRoYXQgY2FuIGVhc2lseSBieSBlZGl0dGVkIHRvIGFkZCBhbmQgcmVtb3ZlIG1lbnUgaXRlbXMuXCIsXHJcbiAgICAgICAgY29kZUxpbms6IFwiaHR0cHM6Ly9naXRodWIuY29tL2ppYW5raC9zcHJpZ3NiYWtlcnlcIixcclxuICAgICAgICBwcmV2aWV3TGluazogXCJodHRwczovL2ppYW5raC5naXRodWIuaW8vc3ByaWdzYmFrZXJ5L1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiBcIlRpYyBUYWMgVG9lXCIsXHJcbiAgICAgICAgaW1nOiBcIi4vaW1hZ2VzL3RpY3RhY3RvZS5wbmdcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJKYXZhc2NyaXB0IGFwcGxpY2F0aW9uIG9mIHRoZSBjbGFzc2ljIGdhbWUgVGljIFRhYyBUb2UuIEZlYXR1cmVzIE11bHRpcGxheWVyIGFuZCBTaW5nbGUgcGxheWVyLiBJbmNsdWRlcyBhbiB1cGJlYXRhYmxlIEFJIHdoZW4gcGxheWluZyBzaW5nbGVwbGF5ZXIgbW9kZSwgbWFkZSB3aXRoIHRoZSBNaW5pTWF4IEFsZ29yaXRobS5cIixcclxuICAgICAgICBjb2RlTGluazogXCJodHRwczovL2dpdGh1Yi5jb20vamlhbmtoL3RpY3RhY3RvZVwiLFxyXG4gICAgICAgIHByZXZpZXdMaW5rOiBcImh0dHBzOi8vamlhbmtoLmdpdGh1Yi5pby90aWN0YWN0b2UvXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiS25pZ2h0IFRyYXZhaWxzXCIsXHJcbiAgICAgICAgaW1nOiBcIi4vaW1hZ2VzL2tuaWdodC10cmF2YWlscy5wbmdcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJUaGUgZmFtb3VzIEJpbmFyeSBUcmVlIFNlYXJjaCBleGNlcmNpc2UgS25pZ2h0IFRyYXZhaWxzLCBidXQgdmlzdWFsaXplZC4gVGhlIGtuaWdodCBjaGVzcyBwaWVjZSBpcyBhYmxlIHRvIHRyYXZhaWwgdGhlIGNoZXNzYm9hcmQgdG8gYW55IGNlbGwgb24gdGhlIGJvYXJkLiBUaGlzIGFwcGxpY2F0aW9uIHNob3dzIHRoZSBzaG9ydGVzdCBwYXRoIHRoYXQgY291bGQgYmUgdGFrZW4gdG8gYSBkZXN0aW5hdGlvbiBzZWxlY3RlZC4gVGhlIG1ldGhvZCB1c2VkIHRvIGdldCB0aGUgc2hvcnRlc3QgcGF0aCBpcyBieSB1dGlsaXppbmcgQnJlYWR0aCBGaXJzdCBUcmF2ZXJzYWwuXCIsXHJcbiAgICAgICAgY29kZUxpbms6IFwiaHR0cHM6Ly9naXRodWIuY29tL2ppYW5raC9rbmlnaHRzLXRyYXZhaWxzXCIsXHJcbiAgICAgICAgcHJldmlld0xpbms6IFwiaHR0cHM6Ly9qaWFua2guZ2l0aHViLmlvL2tuaWdodHMtdHJhdmFpbHNcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogXCJDYWxjdWxhdG9yXCIsXHJcbiAgICAgICAgaW1nOiBcIi4vaW1hZ2VzL2NhbGN1bGF0b3IucG5nXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiRnVsbCBmdW5jdGlvbmFsIHNpbXBsZSBjYWxjdWxhdG9yIGRldmVsb3BlZCB1c2luZyBIVE1ML0NTUy9KYXZhU2NyaXB0LiBIYW5kbGVzIHRoZSBiYXNpYyBtYXRoZW1pY2FsIGVxdWF0aW9ucy5cIixcclxuICAgICAgICBjb2RlTGluazogXCJodHRwczovL2dpdGh1Yi5jb20vamlhbmtoL2NhbGN1bGF0b3JcIixcclxuICAgICAgICBwcmV2aWV3TGluazogXCJodHRwczovL2ppYW5raC5naXRodWIuaW8vY2FsY3VsYXRvci9cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogXCJTa2V0Y2ggQm9va1wiLFxyXG4gICAgICAgIGltZzogXCIuL2ltYWdlcy9za2V0Y2hwYWQucG5nXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiQSBkcmF3aW5nIGJvYXJkIHRoYXQgZnVuY3Rpb25zIHNpbWlsYXJpbHkgdG8gTVMgUGFpbnQuIEFsbG93cyB0aGUgdXNlciB0byBjaG9vc2UgdGhlIHNpemUgb2YgdGhlIGNhbnZhcyBhbmQgYWxzbyBoYXMgYSBzcGVjaWFsIHJhaW5ib3cgZWZmZWN0IGRyYXdpbmcuIFRoZSBmb2N1cyBvZiB0aGlzIHByb2plY3Qgd2FzIERPTSBtYW5pcHVsYXRpb24gdXNpbmcgSmF2YVNjcmlwdC5cIixcclxuICAgICAgICBjb2RlTGluazogXCJodHRwczovL2dpdGh1Yi5jb20vamlhbmtoL3NrZXRjaGJvb2tcIixcclxuICAgICAgICBwcmV2aWV3TGluazogXCJodHRwczovL2ppYW5raC5naXRodWIuaW8vc2tldGNoYm9vay9cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogXCJQeWdhbWUgUGxhdGZvcm1lclwiLFxyXG4gICAgICAgIGltZzogXCIuL2ltYWdlcy9QeWdhbWVTYW1wbGUuZ2lmXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiW1dJUF0gUHlnYW1lIGJhc2VkIGdhbWUuIFBsYXRmb3JtZXIgYWR2ZW50dXJlIGdhbWUgd2l0aCBhIG1haW4gY2hhcmFjdGVyIGluc3BpcmVkIGJ5IHRoZSBmYWlyeSB0YWxlIG9mIExpdHRsZSBSZWQgUmlkaW5nIEhvb2QuIFRoZSBwbGF5ZXIgbmVlZHMgdG8gbmF2aWdhdGUgdGhyb3VnaCB0aGUgZm9yZXN0IHRvIHJlYWNoIGEgZGVzdGluYXRpb24uXCIsXHJcbiAgICAgICAgY29kZUxpbms6IFwiaHR0cHM6Ly9naXRodWIuY29tL2ppYW5raC9SZWRIb29kXCIsXHJcbiAgICAgICAgcHJldmlld0xpbms6IFwiXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiUm9jayBQYXBlciBTY2lzc29yXCIsXHJcbiAgICAgICAgaW1nOiBcIi4vaW1hZ2VzL1JQUy5wbmdcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJBIGNsYXNzaWMgZ2FtZSBvZiBSb2NrIFBhcGVyIFNjaXNzb3JzLiBGaXJzdCB0byB3aW4gNSByb3VuZHMgd2lucyB0aGUgbWF0Y2ghIFwiLFxyXG4gICAgICAgIGNvZGVMaW5rOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9qaWFua2gvUlBTX2dhbWVcIixcclxuICAgICAgICBwcmV2aWV3TGluazogXCJodHRwczovL2ppYW5raC5naXRodWIuaW8vUlBTX2dhbWUvXCJcclxuICAgIH0sXHJcbiAgICAvLyB7XHJcbiAgICAvLyAgICAgdGl0bGU6IFwiTGlicmFyeSBBcHBcIixcclxuICAgIC8vICAgICBpbWc6IFwiLi9pbWFnZXMvbGlicmFyeS5wbmdcIixcclxuICAgIC8vICAgICBkZXNjcmlwdGlvbjogXCJBbiBhcHBsaWNhdGlvbiB0aGF0IGxldHMgdXNlciBzYXZlIGluZm9ybWF0aW9uIGFib3V0IGJvb2tzIHRoYXQgdGhleSBhcmUgaW50ZXJlc3RlZCBpbi4gVGhlIHVzZXIgY2FuIGFsc28gY2hhbmdlIGFuZCBzZWUgdGhlIHN0YXR1cyBvZiB0aGUgYm9va3MgaWYgdGhleSBmaW5pc2hlZCByZWFkaW5nIGl0IG9yIG5vdC5cIixcclxuICAgIC8vICAgICBjb2RlTGluazogXCJodHRwczovL2dpdGh1Yi5jb20vamlhbmtoL2xpYnJhcnlQcm9qZWN0XCIsXHJcbiAgICAvLyAgICAgcHJldmlld0xpbms6IFwiaHR0cHM6Ly9qaWFua2guZ2l0aHViLmlvL2xpYnJhcnlQcm9qZWN0L1wiXHJcbiAgICAvLyB9LCAgXHJcbl1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2plY3RzIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgUHJvamVjdHMgZnJvbSBcIi4vcHJvamVjdERhdGEuanNcIlxyXG5cclxuXHJcbi8vUFJPSkVDVCBMT0FESU5HXHJcbmNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzXCIpXHJcbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3QoaW1nLCB0aXRsZSwgZGVzY3JpcHRpb24sIGNvZGVMaW5rLCBwcmV2aWV3TGluaykge1xyXG4gICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgIHByb2plY3QuY2xhc3NMaXN0LmFkZChcInByb2plY3RcIilcclxuICAgIHByb2plY3QuaW5uZXJIVE1MID0gYFxyXG4gICAgPGRpdiBjbGFzcz1cInByb2plY3QtaW1nXCI+PGltZyBzcmM9XCIke2ltZ31cIj48L2Rpdj5cclxuICAgIDxocj5cclxuICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0LWRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInByb2plY3QtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0LXRpdGxlXCI+JHt0aXRsZX08L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJ1dHRvbnNcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25jbGljaz1cImxvY2F0aW9uLmhyZWY9JyR7Y29kZUxpbmt9JztcIiA+PGltZyBzcmM9XCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvZ2gvZGV2aWNvbnMvZGV2aWNvbi9pY29ucy9naXRodWIvZ2l0aHViLW9yaWdpbmFsLnN2Z1wiIC8+IDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbmNsaWNrPVwibG9jYXRpb24uaHJlZj0nJHtwcmV2aWV3TGlua30nO1wiPiA8aW1nIHNyYz1cImltYWdlcy9vcGVuLWluLW5ldy5zdmdcIj4gPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJkZXNjcmlwdGlvblwiPiAke2Rlc2NyaXB0aW9ufSA8L2Rpdj5cclxuICAgICAgICBcclxuICAgIDwvZGl2PlxyXG4gICAgYFxyXG5cclxuICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdClcclxufVxyXG5Qcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XHJcbiAgICBjcmVhdGVQcm9qZWN0KHByb2plY3QuaW1nLCBwcm9qZWN0LnRpdGxlLCBwcm9qZWN0LmRlc2NyaXB0aW9uLCBwcm9qZWN0LmNvZGVMaW5rLCBwcm9qZWN0LnByZXZpZXdMaW5rKVxyXG59KVxyXG5jb25zdCBkaXNhYmxlZEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbb25jbGljaz1cImxvY2F0aW9uLmhyZWY9XFwnXFwnO1wiXScpO1xyXG5kaXNhYmxlZEJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKT0+IHtcclxuICAgIGJ1dHRvbi5kaXNhYmxlZCA9IHRydWVcclxuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdkaXNhYmxlZC1idG4nKVxyXG59KVxyXG5cclxuLy9OYXZpZ2F0aW9uIGJhciBmb2N1cyBcclxuLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCkgPT4ge1xyXG4vLyAgICAgY29uc3Qgc2VjdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNlY3Rpb25cIilcclxuLy8gICAgIGxldCBjdXJyZW50U2VjdGlvbiA9IFwiXCJcclxuXHJcbi8vICAgICBzZWN0aW9ucy5mb3JFYWNoKHNlY3Rpb24gPT4ge1xyXG4vLyAgICAgICAgIGNvbnN0IHJlY3QgPSBzZWN0aW9uLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXHJcbi8vICAgICAgICAgaWYgKHJlY3QudG9wID49IDAgJiYgcmVjdC5ib3R0b20gPD0gd2luZG93LmlubmVySGVpZ2h0KSB7XHJcbi8vICAgICAgICAgICAgIGN1cnJlbnRTZWN0aW9uID0gc2VjdGlvbi5pZFxyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH0pXHJcblxyXG4vLyAgICAgLy9yZW1vdmluZyBhY3RpdmUgY2xhc3MgZnJvbSBldmVyeXRoaW5nXHJcbi8vICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwibGkgYVwiKS5mb3JFYWNoKHNlY3QgPT4ge1xyXG4vLyAgICAgICAgIHNlY3QuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZS1uYXZcIilcclxuLy8gICAgIH0pXHJcblxyXG4vLyAgICAgLy9hZGRpbmcgYWN0aXZlIGNsYXNzIFxyXG4vLyAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgYVtocmVmPVwiIyR7Y3VycmVudFNlY3Rpb259XCJdYCkuY2xhc3NMaXN0LmFkZCgnYWN0aXZlLW5hdicpXHJcblxyXG4vLyB9KVxyXG5cclxuXHJcbi8vUHJvamVjdCBzY3JvbGxpbmcgdHJhbnNpdGlvblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZnVuY3Rpb24oKSB7XHJcbiAgICBjb25zdCBkZXNpcmVkU2Nyb2xsUG9zaXRpb24gPSA5MDA7IC8vIENoYW5nZSB0aGlzIHZhbHVlIHRvIHRoZSBkZXNpcmVkIHNjcm9sbCBwb3NpdGlvblxyXG4gICAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHMtY29udGFpbmVyXCIpO1xyXG4gICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdFwiKVxyXG5cclxuICAgIGlmICh3aW5kb3cuc2Nyb2xsWSA+PSBkZXNpcmVkU2Nyb2xsUG9zaXRpb24pIHtcclxuICAgICAgICBwcm9qZWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Njcm9sbC10by1jb2xvcicpO1xyXG4gICAgICAgIHByb2plY3QuZm9yRWFjaChwcm9qID0+IHByb2ouY2xhc3NMaXN0LmFkZChcInNjcm9sbC1tb3ZlXCIpKVxyXG4gICAgICAgIFxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBwcm9qZWN0Q29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ3Njcm9sbC10by1jb2xvcicpO1xyXG4gICAgICAgIHByb2plY3QuZm9yRWFjaChwcm9qID0+IHByb2ouY2xhc3NMaXN0LnJlbW92ZShcInNjcm9sbC1tb3ZlXCIpKVxyXG4gICAgfVxyXG59KVxyXG5cclxuXHJcbi8vRmFkZSB0cmFuc2l0aW9uIGZvciB0ZWNobm9sb2d5XHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmdW5jdGlvbigpIHtcclxuICAgIGNvbnN0IGRlc2lyZWRTY3JvbGxQb3NpdGlvbiA9IDUwMDsgLy8gQ2hhbmdlIHRoaXMgdmFsdWUgdG8gdGhlIGRlc2lyZWQgc2Nyb2xsIHBvc2l0aW9uXHJcbiAgICBjb25zdCB0ZWNobm9sb2dpZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRlY2hcIik7XHJcblxyXG4gICAgaWYgKHdpbmRvdy5zY3JvbGxZID49IGRlc2lyZWRTY3JvbGxQb3NpdGlvbikge1xyXG4gICAgICAgIHRlY2hub2xvZ2llcy5mb3JFYWNoKHRlY2ggPT4gdGVjaC5jbGFzc0xpc3QuYWRkKFwiZmFkZS1pblwiKSlcclxuICAgICAgICBcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGVjaG5vbG9naWVzLmZvckVhY2godGVjaCA9PiB0ZWNoLmNsYXNzTGlzdC5yZW1vdmUoXCJmYWRlLWluXCIpKVxyXG4gICAgfVxyXG59KVxyXG5cclxuXHJcbi8vQ29udGFjdCBGb3JtXHJcbmNvbnN0IGNvbnRhY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWN0LWZvcm1cIilcclxubGV0IG1lc3NhZ2VTdGF0dXNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lc3NhZ2Utc3RhdHVzXCIpXHJcblxyXG5jb250YWN0Rm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIGVtYWlsanMuc2VuZEZvcm0oJ2NvbnRhY3Rfc2VydmljZScsICd0ZW1wbGF0ZV84NjQ5ZmJxJywgY29udGFjdEZvcm0sICdVVVoyVTNKdkJpdDJyUXZDbCcpXHJcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIG1lc3NhZ2VTdGF0dXNDb250YWluZXIudGV4dENvbnRlbnQgPSBcIk1lc3NhZ2Ugc2VudCFcIlxyXG4gICAgICAgICAgICBjb250YWN0Rm9ybS5yZXNldCgpXHJcbiAgICAgICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcclxuICAgICAgICAgICAgbWVzc2FnZVN0YXR1c0NvbnRhaW5lci50ZXh0Q29udGVudCA9IGBFcnJvcjogJHtlcnJvcn1gXHJcbiAgICAgICAgICAgIGNvbnRhY3RGb3JtLnJlc2V0KClcclxuICAgICAgICB9KVxyXG59KVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=