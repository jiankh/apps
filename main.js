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
    {
        title: "Task To-Do List",
        img: "./images/wip.png",
        description: "[WIP] A To-Do List application. Features options to create sections and add tasks to the specific section that can be checked off. The focus of this project was to use LocalStorage to manage user information and organize the project in Modules while using Webpack.",
        codeLink: "https://github.com/jiankh/to-do-list",
        previewLink: ""
    },
    {
        title: "Library App",
        img: "./images/library.png",
        description: "An application that lets user save information about books that they are interested in. The user can also change and see the status of the books if they finished reading it or not.",
        codeLink: "https://github.com/jiankh/libraryProject",
        previewLink: "https://jiankh.github.io/libraryProject/"
    },
    {
        title: "Dashboard",
        img: "./images/dashboard.png",
        description: "A simple sample Dashboard created that focuses on UX and Grid Layouts in CSS",
        codeLink: "https://github.com/jiankh/dashboardSample",
        previewLink: "https://jiankh.github.io/dashboardSample/"
    }   
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
// document.addEventListener('scroll', async () => {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWU7Ozs7OztVQ3pGZjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTnVDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsSUFBSTtBQUM3QztBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsTUFBTTtBQUMvQztBQUNBLGtEQUFrRCxTQUFTLEVBQUU7QUFDN0Qsa0RBQWtELFlBQVksRUFBRTtBQUNoRTtBQUNBO0FBQ0Esb0NBQW9DLGFBQWE7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQVE7QUFDUjtBQUNBLENBQUM7QUFDRCxnRkFBZ0Y7QUFDaEY7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLDBDQUEwQyxlQUFlO0FBQ3pEO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULDJEQUEyRCxNQUFNO0FBQ2pFO0FBQ0EsU0FBUztBQUNULENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvcHJvamVjdERhdGEuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuY29uc3QgUHJvamVjdHMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiV2VhdGhlckFwcFwiLFxyXG4gICAgICAgIGltZzogXCIuL2ltYWdlcy93ZWF0aGVyYXBwLnBuZ1wiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIldlYXRoZXIgQXBwIGNyZWF0ZWQgdXNpbmcgV2VhdGhlckFQSS4gVGhlIGFwcGxpY2F0aW9uIHJldHJpZXZlcyBkYXRhIGZyb20gdGhlIEFQSSBiYXNlZCBvbiB0aGUgaW5wdXQgbG9jYXRpb24gYW5kIGRpc3BsYXlzIHRoZSBjdXJyZW50IHdlYXRoZXIgYWxvbmcgd2l0aCBvdGhlciBkZXRhaWxzIGZvciB0aGUgZGF5LiBJdCBhbHNvIHNob3dzIHRoZSBob3VybHkgZm9yZWNhc3QgYW5kIGEgZm9yZWNhc3QgZm9yIHRoZSBuZXh0IDMgZGF5cy4gSXQgYWxzbyBmZWF0dXJlcyBhIHN3aXRjaCB0byBjaGFuZ2UgYmV0d2VlbiBGYWhyZW5oZWl0IGFuZCBDZWxzaXVzXCIsXHJcbiAgICAgICAgY29kZUxpbms6IFwiaHR0cHM6Ly9naXRodWIuY29tL2ppYW5raC93ZWF0aGVyLWFwcFwiLFxyXG4gICAgICAgIHByZXZpZXdMaW5rOiBcImh0dHBzOi8vamlhbmtoLmdpdGh1Yi5pby93ZWF0aGVyLWFwcC9cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogXCJCaW5hcnkgU2VhcmNoIFRyZWVcIixcclxuICAgICAgICBpbWc6IFwiLi9pbWFnZXMvQlNULnBuZ1wiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkJpbmFyeSBTZWFyY2ggVHJlZSBhcHBsaWNhdGlvbiB0aGF0IHNob3dzIHRoZSBkaWZmZXJlbnQgdHlwZXMgb2YgdHJhdmVyc2FscyB0aHJvdWdoIGEgYmluYXJ5IHNlYXJjaCB0cmVlLiBUaGlzIHZpc3VhbCBndWlkZSBoZWxwcyBwZW9wbGUgdW5kZXJzdGFuZCBCU1QgYW5kIGhhcyBpbnRlcmFjdGl2ZSBmZWF0dXJlcyBsaWtlIGluc2VydGluZyBub2RlcywgZGVsZXRpbmcgbm9kZXMsIGZpbmRpbmcgdGhlIGRlcHRoIG9mIGEgc3BlY2lmaWMgbm9kZSwgYW5kIGFsc28gcmUtYmFsYW5jaW5nIG9mIHRoZSBCU1QuXCIsXHJcbiAgICAgICAgY29kZUxpbms6IFwiaHR0cHM6Ly9naXRodWIuY29tL2ppYW5raC9kc2FfZXhlcmNpc2VzL3RyZWUvbWFpbi9iaW5hcnlfc2VhcmNoX3RyZWVzXCIsXHJcbiAgICAgICAgcHJldmlld0xpbms6IFwiaHR0cHM6Ly9qaWFua2guZ2l0aHViLmlvL2RzYV9leGVyY2lzZXMvXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiQmFrZXJ5IFdlYnNpdGVcIixcclxuICAgICAgICBpbWc6IFwiLi9pbWFnZXMvYmFrZXJ5LnBuZ1wiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkZyb250ZW5kIFJlYWN0IHdlYnNpdGUgZm9yIGEgbW9jayByZXN0YXVyYW50IHdpdGggc2V2ZXJhbCBmdW5jdGlvbmFsIHRhYnMuIFRoZSBtYWluIGZvY3VzIG9mIHRoaXMgcHJvamVjdCB3YXMgdG8gbW9kdWxpemUgdGhlIGVsZW1lbnRzIG9mIHRoZSBzaXRlIGZvciBiZXR0ZXIgcmV1c2FiaWxpdHkuIFRoZSBtZW51IGl0ZW1zIGFyZSBhbHNvIHN0b3JlZCBpbiBhbiBhcnJheSBvZiBvYmplY3QgdGhhdCBjYW4gZWFzaWx5IGJ5IGVkaXR0ZWQgdG8gYWRkIGFuZCByZW1vdmUgbWVudSBpdGVtcy5cIixcclxuICAgICAgICBjb2RlTGluazogXCJodHRwczovL2dpdGh1Yi5jb20vamlhbmtoL3Nwcmlnc2Jha2VyeVwiLFxyXG4gICAgICAgIHByZXZpZXdMaW5rOiBcImh0dHBzOi8vamlhbmtoLmdpdGh1Yi5pby9zcHJpZ3NiYWtlcnkvXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiVGljIFRhYyBUb2VcIixcclxuICAgICAgICBpbWc6IFwiLi9pbWFnZXMvdGljdGFjdG9lLnBuZ1wiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkphdmFzY3JpcHQgYXBwbGljYXRpb24gb2YgdGhlIGNsYXNzaWMgZ2FtZSBUaWMgVGFjIFRvZS4gRmVhdHVyZXMgTXVsdGlwbGF5ZXIgYW5kIFNpbmdsZSBwbGF5ZXIuIEluY2x1ZGVzIGFuIHVwYmVhdGFibGUgQUkgd2hlbiBwbGF5aW5nIHNpbmdsZXBsYXllciBtb2RlLCBtYWRlIHdpdGggdGhlIE1pbmlNYXggQWxnb3JpdGhtLlwiLFxyXG4gICAgICAgIGNvZGVMaW5rOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9qaWFua2gvdGljdGFjdG9lXCIsXHJcbiAgICAgICAgcHJldmlld0xpbms6IFwiaHR0cHM6Ly9qaWFua2guZ2l0aHViLmlvL3RpY3RhY3RvZS9cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogXCJLbmlnaHQgVHJhdmFpbHNcIixcclxuICAgICAgICBpbWc6IFwiLi9pbWFnZXMva25pZ2h0LXRyYXZhaWxzLnBuZ1wiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlRoZSBmYW1vdXMgQmluYXJ5IFRyZWUgU2VhcmNoIGV4Y2VyY2lzZSBLbmlnaHQgVHJhdmFpbHMsIGJ1dCB2aXN1YWxpemVkLiBUaGUga25pZ2h0IGNoZXNzIHBpZWNlIGlzIGFibGUgdG8gdHJhdmFpbCB0aGUgY2hlc3Nib2FyZCB0byBhbnkgY2VsbCBvbiB0aGUgYm9hcmQuIFRoaXMgYXBwbGljYXRpb24gc2hvd3MgdGhlIHNob3J0ZXN0IHBhdGggdGhhdCBjb3VsZCBiZSB0YWtlbiB0byBhIGRlc3RpbmF0aW9uIHNlbGVjdGVkLiBUaGUgbWV0aG9kIHVzZWQgdG8gZ2V0IHRoZSBzaG9ydGVzdCBwYXRoIGlzIGJ5IHV0aWxpemluZyBCcmVhZHRoIEZpcnN0IFRyYXZlcnNhbC5cIixcclxuICAgICAgICBjb2RlTGluazogXCJodHRwczovL2dpdGh1Yi5jb20vamlhbmtoL2tuaWdodHMtdHJhdmFpbHNcIixcclxuICAgICAgICBwcmV2aWV3TGluazogXCJodHRwczovL2ppYW5raC5naXRodWIuaW8va25pZ2h0cy10cmF2YWlsc1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiBcIkNhbGN1bGF0b3JcIixcclxuICAgICAgICBpbWc6IFwiLi9pbWFnZXMvY2FsY3VsYXRvci5wbmdcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJGdWxsIGZ1bmN0aW9uYWwgc2ltcGxlIGNhbGN1bGF0b3IgZGV2ZWxvcGVkIHVzaW5nIEhUTUwvQ1NTL0phdmFTY3JpcHQuIEhhbmRsZXMgdGhlIGJhc2ljIG1hdGhlbWljYWwgZXF1YXRpb25zLlwiLFxyXG4gICAgICAgIGNvZGVMaW5rOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9qaWFua2gvY2FsY3VsYXRvclwiLFxyXG4gICAgICAgIHByZXZpZXdMaW5rOiBcImh0dHBzOi8vamlhbmtoLmdpdGh1Yi5pby9jYWxjdWxhdG9yL1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiBcIlNrZXRjaCBCb29rXCIsXHJcbiAgICAgICAgaW1nOiBcIi4vaW1hZ2VzL3NrZXRjaHBhZC5wbmdcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJBIGRyYXdpbmcgYm9hcmQgdGhhdCBmdW5jdGlvbnMgc2ltaWxhcmlseSB0byBNUyBQYWludC4gQWxsb3dzIHRoZSB1c2VyIHRvIGNob29zZSB0aGUgc2l6ZSBvZiB0aGUgY2FudmFzIGFuZCBhbHNvIGhhcyBhIHNwZWNpYWwgcmFpbmJvdyBlZmZlY3QgZHJhd2luZy4gVGhlIGZvY3VzIG9mIHRoaXMgcHJvamVjdCB3YXMgRE9NIG1hbmlwdWxhdGlvbiB1c2luZyBKYXZhU2NyaXB0LlwiLFxyXG4gICAgICAgIGNvZGVMaW5rOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9qaWFua2gvc2tldGNoYm9va1wiLFxyXG4gICAgICAgIHByZXZpZXdMaW5rOiBcImh0dHBzOi8vamlhbmtoLmdpdGh1Yi5pby9za2V0Y2hib29rL1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiBcIlB5Z2FtZSBQbGF0Zm9ybWVyXCIsXHJcbiAgICAgICAgaW1nOiBcIi4vaW1hZ2VzL1B5Z2FtZVNhbXBsZS5naWZcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJbV0lQXSBQeWdhbWUgYmFzZWQgZ2FtZS4gUGxhdGZvcm1lciBhZHZlbnR1cmUgZ2FtZSB3aXRoIGEgbWFpbiBjaGFyYWN0ZXIgaW5zcGlyZWQgYnkgdGhlIGZhaXJ5IHRhbGUgb2YgTGl0dGxlIFJlZCBSaWRpbmcgSG9vZC4gVGhlIHBsYXllciBuZWVkcyB0byBuYXZpZ2F0ZSB0aHJvdWdoIHRoZSBmb3Jlc3QgdG8gcmVhY2ggYSBkZXN0aW5hdGlvbi5cIixcclxuICAgICAgICBjb2RlTGluazogXCJodHRwczovL2dpdGh1Yi5jb20vamlhbmtoL1JlZEhvb2RcIixcclxuICAgICAgICBwcmV2aWV3TGluazogXCJcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogXCJSb2NrIFBhcGVyIFNjaXNzb3JcIixcclxuICAgICAgICBpbWc6IFwiLi9pbWFnZXMvUlBTLnBuZ1wiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkEgY2xhc3NpYyBnYW1lIG9mIFJvY2sgUGFwZXIgU2Npc3NvcnMuIEZpcnN0IHRvIHdpbiA1IHJvdW5kcyB3aW5zIHRoZSBtYXRjaCEgXCIsXHJcbiAgICAgICAgY29kZUxpbms6IFwiaHR0cHM6Ly9naXRodWIuY29tL2ppYW5raC9SUFNfZ2FtZVwiLFxyXG4gICAgICAgIHByZXZpZXdMaW5rOiBcImh0dHBzOi8vamlhbmtoLmdpdGh1Yi5pby9SUFNfZ2FtZS9cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogXCJUYXNrIFRvLURvIExpc3RcIixcclxuICAgICAgICBpbWc6IFwiLi9pbWFnZXMvd2lwLnBuZ1wiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIltXSVBdIEEgVG8tRG8gTGlzdCBhcHBsaWNhdGlvbi4gRmVhdHVyZXMgb3B0aW9ucyB0byBjcmVhdGUgc2VjdGlvbnMgYW5kIGFkZCB0YXNrcyB0byB0aGUgc3BlY2lmaWMgc2VjdGlvbiB0aGF0IGNhbiBiZSBjaGVja2VkIG9mZi4gVGhlIGZvY3VzIG9mIHRoaXMgcHJvamVjdCB3YXMgdG8gdXNlIExvY2FsU3RvcmFnZSB0byBtYW5hZ2UgdXNlciBpbmZvcm1hdGlvbiBhbmQgb3JnYW5pemUgdGhlIHByb2plY3QgaW4gTW9kdWxlcyB3aGlsZSB1c2luZyBXZWJwYWNrLlwiLFxyXG4gICAgICAgIGNvZGVMaW5rOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9qaWFua2gvdG8tZG8tbGlzdFwiLFxyXG4gICAgICAgIHByZXZpZXdMaW5rOiBcIlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiBcIkxpYnJhcnkgQXBwXCIsXHJcbiAgICAgICAgaW1nOiBcIi4vaW1hZ2VzL2xpYnJhcnkucG5nXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiQW4gYXBwbGljYXRpb24gdGhhdCBsZXRzIHVzZXIgc2F2ZSBpbmZvcm1hdGlvbiBhYm91dCBib29rcyB0aGF0IHRoZXkgYXJlIGludGVyZXN0ZWQgaW4uIFRoZSB1c2VyIGNhbiBhbHNvIGNoYW5nZSBhbmQgc2VlIHRoZSBzdGF0dXMgb2YgdGhlIGJvb2tzIGlmIHRoZXkgZmluaXNoZWQgcmVhZGluZyBpdCBvciBub3QuXCIsXHJcbiAgICAgICAgY29kZUxpbms6IFwiaHR0cHM6Ly9naXRodWIuY29tL2ppYW5raC9saWJyYXJ5UHJvamVjdFwiLFxyXG4gICAgICAgIHByZXZpZXdMaW5rOiBcImh0dHBzOi8vamlhbmtoLmdpdGh1Yi5pby9saWJyYXJ5UHJvamVjdC9cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogXCJEYXNoYm9hcmRcIixcclxuICAgICAgICBpbWc6IFwiLi9pbWFnZXMvZGFzaGJvYXJkLnBuZ1wiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkEgc2ltcGxlIHNhbXBsZSBEYXNoYm9hcmQgY3JlYXRlZCB0aGF0IGZvY3VzZXMgb24gVVggYW5kIEdyaWQgTGF5b3V0cyBpbiBDU1NcIixcclxuICAgICAgICBjb2RlTGluazogXCJodHRwczovL2dpdGh1Yi5jb20vamlhbmtoL2Rhc2hib2FyZFNhbXBsZVwiLFxyXG4gICAgICAgIHByZXZpZXdMaW5rOiBcImh0dHBzOi8vamlhbmtoLmdpdGh1Yi5pby9kYXNoYm9hcmRTYW1wbGUvXCJcclxuICAgIH0gICBcclxuXVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdHMiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBQcm9qZWN0cyBmcm9tIFwiLi9wcm9qZWN0RGF0YS5qc1wiXHJcblxyXG5cclxuLy9QUk9KRUNUIExPQURJTkdcclxuY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHNcIilcclxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdChpbWcsIHRpdGxlLCBkZXNjcmlwdGlvbiwgY29kZUxpbmssIHByZXZpZXdMaW5rKSB7XHJcbiAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgcHJvamVjdC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdFwiKVxyXG4gICAgcHJvamVjdC5pbm5lckhUTUwgPSBgXHJcbiAgICA8ZGl2IGNsYXNzPVwicHJvamVjdC1pbWdcIj48aW1nIHNyYz1cIiR7aW1nfVwiPjwvZGl2PlxyXG4gICAgPGhyPlxyXG4gICAgPGRpdiBjbGFzcz1cInByb2plY3QtZGVzY3JpcHRpb25cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2plY3QtdGl0bGVcIj4ke3RpdGxlfTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnV0dG9uc1wiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbmNsaWNrPVwibG9jYXRpb24uaHJlZj0nJHtjb2RlTGlua30nO1wiID48aW1nIHNyYz1cImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC9kZXZpY29ucy9kZXZpY29uL2ljb25zL2dpdGh1Yi9naXRodWItb3JpZ2luYWwuc3ZnXCIgLz4gPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uY2xpY2s9XCJsb2NhdGlvbi5ocmVmPScke3ByZXZpZXdMaW5rfSc7XCI+IDxpbWcgc3JjPVwiaW1hZ2VzL29wZW4taW4tbmV3LnN2Z1wiPiA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImRlc2NyaXB0aW9uXCI+ICR7ZGVzY3JpcHRpb259IDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgPC9kaXY+XHJcbiAgICBgXHJcblxyXG4gICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0KVxyXG59XHJcblByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcclxuICAgIGNyZWF0ZVByb2plY3QocHJvamVjdC5pbWcsIHByb2plY3QudGl0bGUsIHByb2plY3QuZGVzY3JpcHRpb24sIHByb2plY3QuY29kZUxpbmssIHByb2plY3QucHJldmlld0xpbmspXHJcbn0pXHJcbmNvbnN0IGRpc2FibGVkQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tvbmNsaWNrPVwibG9jYXRpb24uaHJlZj1cXCdcXCc7XCJdJyk7XHJcbmRpc2FibGVkQnV0dG9ucy5mb3JFYWNoKChidXR0b24pPT4ge1xyXG4gICAgYnV0dG9uLmRpc2FibGVkID0gdHJ1ZVxyXG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2Rpc2FibGVkLWJ0bicpXHJcbn0pXHJcblxyXG4vL05hdmlnYXRpb24gYmFyIGZvY3VzIFxyXG4vLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBhc3luYyAoKSA9PiB7XHJcbi8vICAgICBjb25zdCBzZWN0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2VjdGlvblwiKVxyXG4vLyAgICAgbGV0IGN1cnJlbnRTZWN0aW9uID0gXCJcIlxyXG5cclxuLy8gICAgIHNlY3Rpb25zLmZvckVhY2goc2VjdGlvbiA9PiB7XHJcbi8vICAgICAgICAgY29uc3QgcmVjdCA9IHNlY3Rpb24uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcclxuLy8gICAgICAgICBpZiAocmVjdC50b3AgPj0gMCAmJiByZWN0LmJvdHRvbSA8PSB3aW5kb3cuaW5uZXJIZWlnaHQpIHtcclxuLy8gICAgICAgICAgICAgY3VycmVudFNlY3Rpb24gPSBzZWN0aW9uLmlkXHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfSlcclxuXHJcbi8vICAgICAvL3JlbW92aW5nIGFjdGl2ZSBjbGFzcyBmcm9tIGV2ZXJ5dGhpbmdcclxuLy8gICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJsaSBhXCIpLmZvckVhY2goc2VjdCA9PiB7XHJcbi8vICAgICAgICAgc2VjdC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlLW5hdlwiKVxyXG4vLyAgICAgfSlcclxuXHJcbi8vICAgICAvL2FkZGluZyBhY3RpdmUgY2xhc3MgXHJcbi8vICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBhW2hyZWY9XCIjJHtjdXJyZW50U2VjdGlvbn1cIl1gKS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUtbmF2JylcclxuXHJcbi8vIH0pXHJcblxyXG5cclxuLy9Qcm9qZWN0IHNjcm9sbGluZyB0cmFuc2l0aW9uXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmdW5jdGlvbigpIHtcclxuICAgIGNvbnN0IGRlc2lyZWRTY3JvbGxQb3NpdGlvbiA9IDkwMDsgLy8gQ2hhbmdlIHRoaXMgdmFsdWUgdG8gdGhlIGRlc2lyZWQgc2Nyb2xsIHBvc2l0aW9uXHJcbiAgICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0cy1jb250YWluZXJcIik7XHJcbiAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0XCIpXHJcblxyXG4gICAgaWYgKHdpbmRvdy5zY3JvbGxZID49IGRlc2lyZWRTY3JvbGxQb3NpdGlvbikge1xyXG4gICAgICAgIHByb2plY3RDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc2Nyb2xsLXRvLWNvbG9yJyk7XHJcbiAgICAgICAgcHJvamVjdC5mb3JFYWNoKHByb2ogPT4gcHJvai5jbGFzc0xpc3QuYWRkKFwic2Nyb2xsLW1vdmVcIikpXHJcbiAgICAgICAgXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHByb2plY3RDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnc2Nyb2xsLXRvLWNvbG9yJyk7XHJcbiAgICAgICAgcHJvamVjdC5mb3JFYWNoKHByb2ogPT4gcHJvai5jbGFzc0xpc3QucmVtb3ZlKFwic2Nyb2xsLW1vdmVcIikpXHJcbiAgICB9XHJcbn0pXHJcblxyXG5cclxuLy9GYWRlIHRyYW5zaXRpb24gZm9yIHRlY2hub2xvZ3lcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgY29uc3QgZGVzaXJlZFNjcm9sbFBvc2l0aW9uID0gNTAwOyAvLyBDaGFuZ2UgdGhpcyB2YWx1ZSB0byB0aGUgZGVzaXJlZCBzY3JvbGwgcG9zaXRpb25cclxuICAgIGNvbnN0IHRlY2hub2xvZ2llcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGVjaFwiKTtcclxuXHJcbiAgICBpZiAod2luZG93LnNjcm9sbFkgPj0gZGVzaXJlZFNjcm9sbFBvc2l0aW9uKSB7XHJcbiAgICAgICAgdGVjaG5vbG9naWVzLmZvckVhY2godGVjaCA9PiB0ZWNoLmNsYXNzTGlzdC5hZGQoXCJmYWRlLWluXCIpKVxyXG4gICAgICAgIFxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0ZWNobm9sb2dpZXMuZm9yRWFjaCh0ZWNoID0+IHRlY2guY2xhc3NMaXN0LnJlbW92ZShcImZhZGUtaW5cIikpXHJcbiAgICB9XHJcbn0pXHJcblxyXG5cclxuLy9Db250YWN0IEZvcm1cclxuY29uc3QgY29udGFjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhY3QtZm9ybVwiKVxyXG5sZXQgbWVzc2FnZVN0YXR1c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVzc2FnZS1zdGF0dXNcIilcclxuXHJcbmNvbnRhY3RGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgZW1haWxqcy5zZW5kRm9ybSgnY29udGFjdF9zZXJ2aWNlJywgJ3RlbXBsYXRlXzg2NDlmYnEnLCBjb250YWN0Rm9ybSwgJ1VVWjJVM0p2Qml0MnJRdkNsJylcclxuICAgICAgICAudGhlbihmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgbWVzc2FnZVN0YXR1c0NvbnRhaW5lci50ZXh0Q29udGVudCA9IFwiTWVzc2FnZSBzZW50IVwiXHJcbiAgICAgICAgICAgIGNvbnRhY3RGb3JtLnJlc2V0KClcclxuICAgICAgICB9LCBmdW5jdGlvbihlcnJvcikge1xyXG4gICAgICAgICAgICBtZXNzYWdlU3RhdHVzQ29udGFpbmVyLnRleHRDb250ZW50ID0gYEVycm9yOiAke2Vycm9yfWBcclxuICAgICAgICAgICAgY29udGFjdEZvcm0ucmVzZXQoKVxyXG4gICAgICAgIH0pXHJcbn0pXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==