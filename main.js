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
        title: "Library App",
        img: "./images/library.png",
        description: "An application that lets user save information about books that they are interested in. The user can also change and see the status of the books if they finished reading it or not.",
        codeLink: "https://github.com/jiankh/libraryProject",
        previewLink: "https://jiankh.github.io/libraryProject/"
    },  
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxpRUFBZTs7Ozs7O1VDekZmO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxJQUFJO0FBQzdDO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxNQUFNO0FBQy9DO0FBQ0Esa0RBQWtELFNBQVMsRUFBRTtBQUM3RCxrREFBa0QsWUFBWSxFQUFFO0FBQ2hFO0FBQ0E7QUFDQSxvQ0FBb0MsYUFBYTtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBUTtBQUNSO0FBQ0EsQ0FBQztBQUNELGdGQUFnRjtBQUNoRjtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsMENBQTBDLGVBQWU7QUFDekQ7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsMkRBQTJELE1BQU07QUFDakU7QUFDQSxTQUFTO0FBQ1QsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9wcm9qZWN0RGF0YS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5jb25zdCBQcm9qZWN0cyA9IFtcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogXCJXZWF0aGVyQXBwXCIsXHJcbiAgICAgICAgaW1nOiBcIi4vaW1hZ2VzL3dlYXRoZXJhcHAucG5nXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiV2VhdGhlciBBcHAgY3JlYXRlZCB1c2luZyBXZWF0aGVyQVBJLiBUaGUgYXBwbGljYXRpb24gcmV0cmlldmVzIGRhdGEgZnJvbSB0aGUgQVBJIGJhc2VkIG9uIHRoZSBpbnB1dCBsb2NhdGlvbiBhbmQgZGlzcGxheXMgdGhlIGN1cnJlbnQgd2VhdGhlciBhbG9uZyB3aXRoIG90aGVyIGRldGFpbHMgZm9yIHRoZSBkYXkuIEl0IGFsc28gc2hvd3MgdGhlIGhvdXJseSBmb3JlY2FzdCBhbmQgYSBmb3JlY2FzdCBmb3IgdGhlIG5leHQgMyBkYXlzLiBJdCBhbHNvIGZlYXR1cmVzIGEgc3dpdGNoIHRvIGNoYW5nZSBiZXR3ZWVuIEZhaHJlbmhlaXQgYW5kIENlbHNpdXNcIixcclxuICAgICAgICBjb2RlTGluazogXCJodHRwczovL2dpdGh1Yi5jb20vamlhbmtoL3dlYXRoZXItYXBwXCIsXHJcbiAgICAgICAgcHJldmlld0xpbms6IFwiaHR0cHM6Ly9qaWFua2guZ2l0aHViLmlvL3dlYXRoZXItYXBwL1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiBcIkJpbmFyeSBTZWFyY2ggVHJlZVwiLFxyXG4gICAgICAgIGltZzogXCIuL2ltYWdlcy9CU1QucG5nXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiQmluYXJ5IFNlYXJjaCBUcmVlIGFwcGxpY2F0aW9uIHRoYXQgc2hvd3MgdGhlIGRpZmZlcmVudCB0eXBlcyBvZiB0cmF2ZXJzYWxzIHRocm91Z2ggYSBiaW5hcnkgc2VhcmNoIHRyZWUuIFRoaXMgdmlzdWFsIGd1aWRlIGhlbHBzIHBlb3BsZSB1bmRlcnN0YW5kIEJTVCBhbmQgaGFzIGludGVyYWN0aXZlIGZlYXR1cmVzIGxpa2UgaW5zZXJ0aW5nIG5vZGVzLCBkZWxldGluZyBub2RlcywgZmluZGluZyB0aGUgZGVwdGggb2YgYSBzcGVjaWZpYyBub2RlLCBhbmQgYWxzbyByZS1iYWxhbmNpbmcgb2YgdGhlIEJTVC5cIixcclxuICAgICAgICBjb2RlTGluazogXCJodHRwczovL2dpdGh1Yi5jb20vamlhbmtoL2RzYV9leGVyY2lzZXMvdHJlZS9tYWluL2JpbmFyeV9zZWFyY2hfdHJlZXNcIixcclxuICAgICAgICBwcmV2aWV3TGluazogXCJodHRwczovL2ppYW5raC5naXRodWIuaW8vZHNhX2V4ZXJjaXNlcy9cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogXCJDViBCdWlsZGVyXCIsXHJcbiAgICAgICAgaW1nOiBcIi4vaW1hZ2VzL2N2YnVpbGRlci5wbmdcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJBIHNpbXBsZSBidXQgZWZmZWN0aXZlIENWIExheW91dCBCdWlsZGVyIG1hZGUgd2l0aCBSZWFjdC4gQWxsb3dzIHRoZSB1c2VyIHRvIGNyZWF0ZSBhbiBlZmZpY2llbnQgcmVzdW1lIGluIG5vIHRpbWUsIGFuZCBkb3dubG9hZCBpdCBmb3IgdXNlLlwiLFxyXG4gICAgICAgIGNvZGVMaW5rOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9qaWFua2gvQ1ZNYWtlclwiLFxyXG4gICAgICAgIHByZXZpZXdMaW5rOiBcImh0dHBzOi8vamlhbmtoLmdpdGh1Yi5pby9DVk1ha2VyL1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiBcIkdlbnNoaW4gTWVtb1wiLFxyXG4gICAgICAgIGltZzogXCIuL2ltYWdlcy9nZW5zaGluLnBuZ1wiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkEgc2ltcGxlIG1lbW9yeSBnYW1lIHRoYXQgY29uc2lzdHMgb2YgdGhlIHBsYXllciBjaG9vc2luZyBjaGFyYWN0ZXIgY2FyZHMgZnJvbSB0aGUgcG9wdWxhciBvbmxpbmUgUlBHIEdlbnNoaW4gSW1wYWN0IHdpdGhvdXQgcmVwZWF0aW5nIHRoZSBzYW1lIGNoYXJhY3RlcnMuIFRoZSBnYW1lIHdhcyBtYWRlIGluIFJlYWN0IGFuZCBWaXRlLlwiLFxyXG4gICAgICAgIGNvZGVMaW5rOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9qaWFua2gvZ2Vuc2hpbi1tZW1vXCIsXHJcbiAgICAgICAgcHJldmlld0xpbms6IFwiaHR0cHM6Ly9qaWFua2guZ2l0aHViLmlvL2dlbnNoaW4tbWVtby9cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogXCJCYWtlcnkgV2Vic2l0ZVwiLFxyXG4gICAgICAgIGltZzogXCIuL2ltYWdlcy9iYWtlcnkucG5nXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiRnJvbnRlbmQgUmVhY3Qgd2Vic2l0ZSBmb3IgYSBtb2NrIHJlc3RhdXJhbnQgd2l0aCBzZXZlcmFsIGZ1bmN0aW9uYWwgdGFicy4gVGhlIG1haW4gZm9jdXMgb2YgdGhpcyBwcm9qZWN0IHdhcyB0byBtb2R1bGl6ZSB0aGUgZWxlbWVudHMgb2YgdGhlIHNpdGUgZm9yIGJldHRlciByZXVzYWJpbGl0eS4gVGhlIG1lbnUgaXRlbXMgYXJlIGFsc28gc3RvcmVkIGluIGFuIGFycmF5IG9mIG9iamVjdCB0aGF0IGNhbiBlYXNpbHkgYnkgZWRpdHRlZCB0byBhZGQgYW5kIHJlbW92ZSBtZW51IGl0ZW1zLlwiLFxyXG4gICAgICAgIGNvZGVMaW5rOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9qaWFua2gvc3ByaWdzYmFrZXJ5XCIsXHJcbiAgICAgICAgcHJldmlld0xpbms6IFwiaHR0cHM6Ly9qaWFua2guZ2l0aHViLmlvL3Nwcmlnc2Jha2VyeS9cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogXCJUaWMgVGFjIFRvZVwiLFxyXG4gICAgICAgIGltZzogXCIuL2ltYWdlcy90aWN0YWN0b2UucG5nXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiSmF2YXNjcmlwdCBhcHBsaWNhdGlvbiBvZiB0aGUgY2xhc3NpYyBnYW1lIFRpYyBUYWMgVG9lLiBGZWF0dXJlcyBNdWx0aXBsYXllciBhbmQgU2luZ2xlIHBsYXllci4gSW5jbHVkZXMgYW4gdXBiZWF0YWJsZSBBSSB3aGVuIHBsYXlpbmcgc2luZ2xlcGxheWVyIG1vZGUsIG1hZGUgd2l0aCB0aGUgTWluaU1heCBBbGdvcml0aG0uXCIsXHJcbiAgICAgICAgY29kZUxpbms6IFwiaHR0cHM6Ly9naXRodWIuY29tL2ppYW5raC90aWN0YWN0b2VcIixcclxuICAgICAgICBwcmV2aWV3TGluazogXCJodHRwczovL2ppYW5raC5naXRodWIuaW8vdGljdGFjdG9lL1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiBcIktuaWdodCBUcmF2YWlsc1wiLFxyXG4gICAgICAgIGltZzogXCIuL2ltYWdlcy9rbmlnaHQtdHJhdmFpbHMucG5nXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiVGhlIGZhbW91cyBCaW5hcnkgVHJlZSBTZWFyY2ggZXhjZXJjaXNlIEtuaWdodCBUcmF2YWlscywgYnV0IHZpc3VhbGl6ZWQuIFRoZSBrbmlnaHQgY2hlc3MgcGllY2UgaXMgYWJsZSB0byB0cmF2YWlsIHRoZSBjaGVzc2JvYXJkIHRvIGFueSBjZWxsIG9uIHRoZSBib2FyZC4gVGhpcyBhcHBsaWNhdGlvbiBzaG93cyB0aGUgc2hvcnRlc3QgcGF0aCB0aGF0IGNvdWxkIGJlIHRha2VuIHRvIGEgZGVzdGluYXRpb24gc2VsZWN0ZWQuIFRoZSBtZXRob2QgdXNlZCB0byBnZXQgdGhlIHNob3J0ZXN0IHBhdGggaXMgYnkgdXRpbGl6aW5nIEJyZWFkdGggRmlyc3QgVHJhdmVyc2FsLlwiLFxyXG4gICAgICAgIGNvZGVMaW5rOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9qaWFua2gva25pZ2h0cy10cmF2YWlsc1wiLFxyXG4gICAgICAgIHByZXZpZXdMaW5rOiBcImh0dHBzOi8vamlhbmtoLmdpdGh1Yi5pby9rbmlnaHRzLXRyYXZhaWxzXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiQ2FsY3VsYXRvclwiLFxyXG4gICAgICAgIGltZzogXCIuL2ltYWdlcy9jYWxjdWxhdG9yLnBuZ1wiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkZ1bGwgZnVuY3Rpb25hbCBzaW1wbGUgY2FsY3VsYXRvciBkZXZlbG9wZWQgdXNpbmcgSFRNTC9DU1MvSmF2YVNjcmlwdC4gSGFuZGxlcyB0aGUgYmFzaWMgbWF0aGVtaWNhbCBlcXVhdGlvbnMuXCIsXHJcbiAgICAgICAgY29kZUxpbms6IFwiaHR0cHM6Ly9naXRodWIuY29tL2ppYW5raC9jYWxjdWxhdG9yXCIsXHJcbiAgICAgICAgcHJldmlld0xpbms6IFwiaHR0cHM6Ly9qaWFua2guZ2l0aHViLmlvL2NhbGN1bGF0b3IvXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiU2tldGNoIEJvb2tcIixcclxuICAgICAgICBpbWc6IFwiLi9pbWFnZXMvc2tldGNocGFkLnBuZ1wiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkEgZHJhd2luZyBib2FyZCB0aGF0IGZ1bmN0aW9ucyBzaW1pbGFyaWx5IHRvIE1TIFBhaW50LiBBbGxvd3MgdGhlIHVzZXIgdG8gY2hvb3NlIHRoZSBzaXplIG9mIHRoZSBjYW52YXMgYW5kIGFsc28gaGFzIGEgc3BlY2lhbCByYWluYm93IGVmZmVjdCBkcmF3aW5nLiBUaGUgZm9jdXMgb2YgdGhpcyBwcm9qZWN0IHdhcyBET00gbWFuaXB1bGF0aW9uIHVzaW5nIEphdmFTY3JpcHQuXCIsXHJcbiAgICAgICAgY29kZUxpbms6IFwiaHR0cHM6Ly9naXRodWIuY29tL2ppYW5raC9za2V0Y2hib29rXCIsXHJcbiAgICAgICAgcHJldmlld0xpbms6IFwiaHR0cHM6Ly9qaWFua2guZ2l0aHViLmlvL3NrZXRjaGJvb2svXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiUHlnYW1lIFBsYXRmb3JtZXJcIixcclxuICAgICAgICBpbWc6IFwiLi9pbWFnZXMvUHlnYW1lU2FtcGxlLmdpZlwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIltXSVBdIFB5Z2FtZSBiYXNlZCBnYW1lLiBQbGF0Zm9ybWVyIGFkdmVudHVyZSBnYW1lIHdpdGggYSBtYWluIGNoYXJhY3RlciBpbnNwaXJlZCBieSB0aGUgZmFpcnkgdGFsZSBvZiBMaXR0bGUgUmVkIFJpZGluZyBIb29kLiBUaGUgcGxheWVyIG5lZWRzIHRvIG5hdmlnYXRlIHRocm91Z2ggdGhlIGZvcmVzdCB0byByZWFjaCBhIGRlc3RpbmF0aW9uLlwiLFxyXG4gICAgICAgIGNvZGVMaW5rOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9qaWFua2gvUmVkSG9vZFwiLFxyXG4gICAgICAgIHByZXZpZXdMaW5rOiBcIlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiBcIlJvY2sgUGFwZXIgU2Npc3NvclwiLFxyXG4gICAgICAgIGltZzogXCIuL2ltYWdlcy9SUFMucG5nXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiQSBjbGFzc2ljIGdhbWUgb2YgUm9jayBQYXBlciBTY2lzc29ycy4gRmlyc3QgdG8gd2luIDUgcm91bmRzIHdpbnMgdGhlIG1hdGNoISBcIixcclxuICAgICAgICBjb2RlTGluazogXCJodHRwczovL2dpdGh1Yi5jb20vamlhbmtoL1JQU19nYW1lXCIsXHJcbiAgICAgICAgcHJldmlld0xpbms6IFwiaHR0cHM6Ly9qaWFua2guZ2l0aHViLmlvL1JQU19nYW1lL1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiBcIkxpYnJhcnkgQXBwXCIsXHJcbiAgICAgICAgaW1nOiBcIi4vaW1hZ2VzL2xpYnJhcnkucG5nXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiQW4gYXBwbGljYXRpb24gdGhhdCBsZXRzIHVzZXIgc2F2ZSBpbmZvcm1hdGlvbiBhYm91dCBib29rcyB0aGF0IHRoZXkgYXJlIGludGVyZXN0ZWQgaW4uIFRoZSB1c2VyIGNhbiBhbHNvIGNoYW5nZSBhbmQgc2VlIHRoZSBzdGF0dXMgb2YgdGhlIGJvb2tzIGlmIHRoZXkgZmluaXNoZWQgcmVhZGluZyBpdCBvciBub3QuXCIsXHJcbiAgICAgICAgY29kZUxpbms6IFwiaHR0cHM6Ly9naXRodWIuY29tL2ppYW5raC9saWJyYXJ5UHJvamVjdFwiLFxyXG4gICAgICAgIHByZXZpZXdMaW5rOiBcImh0dHBzOi8vamlhbmtoLmdpdGh1Yi5pby9saWJyYXJ5UHJvamVjdC9cIlxyXG4gICAgfSwgIFxyXG5dXHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0cyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFByb2plY3RzIGZyb20gXCIuL3Byb2plY3REYXRhLmpzXCJcclxuXHJcblxyXG4vL1BST0pFQ1QgTE9BRElOR1xyXG5jb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0c1wiKVxyXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0KGltZywgdGl0bGUsIGRlc2NyaXB0aW9uLCBjb2RlTGluaywgcHJldmlld0xpbmspIHtcclxuICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICBwcm9qZWN0LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0XCIpXHJcbiAgICBwcm9qZWN0LmlubmVySFRNTCA9IGBcclxuICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0LWltZ1wiPjxpbWcgc3JjPVwiJHtpbWd9XCI+PC9kaXY+XHJcbiAgICA8aHI+XHJcbiAgICA8ZGl2IGNsYXNzPVwicHJvamVjdC1kZXNjcmlwdGlvblwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0LWhlYWRlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdC10aXRsZVwiPiR7dGl0bGV9PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJidXR0b25zXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uY2xpY2s9XCJsb2NhdGlvbi5ocmVmPScke2NvZGVMaW5rfSc7XCIgPjxpbWcgc3JjPVwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2Rldmljb25zL2Rldmljb24vaWNvbnMvZ2l0aHViL2dpdGh1Yi1vcmlnaW5hbC5zdmdcIiAvPiA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25jbGljaz1cImxvY2F0aW9uLmhyZWY9JyR7cHJldmlld0xpbmt9JztcIj4gPGltZyBzcmM9XCJpbWFnZXMvb3Blbi1pbi1uZXcuc3ZnXCI+IDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZGVzY3JpcHRpb25cIj4gJHtkZXNjcmlwdGlvbn0gPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICA8L2Rpdj5cclxuICAgIGBcclxuXHJcbiAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3QpXHJcbn1cclxuUHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xyXG4gICAgY3JlYXRlUHJvamVjdChwcm9qZWN0LmltZywgcHJvamVjdC50aXRsZSwgcHJvamVjdC5kZXNjcmlwdGlvbiwgcHJvamVjdC5jb2RlTGluaywgcHJvamVjdC5wcmV2aWV3TGluaylcclxufSlcclxuY29uc3QgZGlzYWJsZWRCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW29uY2xpY2s9XCJsb2NhdGlvbi5ocmVmPVxcJ1xcJztcIl0nKTtcclxuZGlzYWJsZWRCdXR0b25zLmZvckVhY2goKGJ1dHRvbik9PiB7XHJcbiAgICBidXR0b24uZGlzYWJsZWQgPSB0cnVlXHJcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnZGlzYWJsZWQtYnRuJylcclxufSlcclxuXHJcbi8vTmF2aWdhdGlvbiBiYXIgZm9jdXMgXHJcbi8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHtcclxuLy8gICAgIGNvbnN0IHNlY3Rpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zZWN0aW9uXCIpXHJcbi8vICAgICBsZXQgY3VycmVudFNlY3Rpb24gPSBcIlwiXHJcblxyXG4vLyAgICAgc2VjdGlvbnMuZm9yRWFjaChzZWN0aW9uID0+IHtcclxuLy8gICAgICAgICBjb25zdCByZWN0ID0gc2VjdGlvbi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxyXG4vLyAgICAgICAgIGlmIChyZWN0LnRvcCA+PSAwICYmIHJlY3QuYm90dG9tIDw9IHdpbmRvdy5pbm5lckhlaWdodCkge1xyXG4vLyAgICAgICAgICAgICBjdXJyZW50U2VjdGlvbiA9IHNlY3Rpb24uaWRcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9KVxyXG5cclxuLy8gICAgIC8vcmVtb3ZpbmcgYWN0aXZlIGNsYXNzIGZyb20gZXZlcnl0aGluZ1xyXG4vLyAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImxpIGFcIikuZm9yRWFjaChzZWN0ID0+IHtcclxuLy8gICAgICAgICBzZWN0LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmUtbmF2XCIpXHJcbi8vICAgICB9KVxyXG5cclxuLy8gICAgIC8vYWRkaW5nIGFjdGl2ZSBjbGFzcyBcclxuLy8gICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGFbaHJlZj1cIiMke2N1cnJlbnRTZWN0aW9ufVwiXWApLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZS1uYXYnKVxyXG5cclxuLy8gfSlcclxuXHJcblxyXG4vL1Byb2plY3Qgc2Nyb2xsaW5nIHRyYW5zaXRpb25cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgY29uc3QgZGVzaXJlZFNjcm9sbFBvc2l0aW9uID0gOTAwOyAvLyBDaGFuZ2UgdGhpcyB2YWx1ZSB0byB0aGUgZGVzaXJlZCBzY3JvbGwgcG9zaXRpb25cclxuICAgIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzLWNvbnRhaW5lclwiKTtcclxuICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3RcIilcclxuXHJcbiAgICBpZiAod2luZG93LnNjcm9sbFkgPj0gZGVzaXJlZFNjcm9sbFBvc2l0aW9uKSB7XHJcbiAgICAgICAgcHJvamVjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzY3JvbGwtdG8tY29sb3InKTtcclxuICAgICAgICBwcm9qZWN0LmZvckVhY2gocHJvaiA9PiBwcm9qLmNsYXNzTGlzdC5hZGQoXCJzY3JvbGwtbW92ZVwiKSlcclxuICAgICAgICBcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcHJvamVjdENvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdzY3JvbGwtdG8tY29sb3InKTtcclxuICAgICAgICBwcm9qZWN0LmZvckVhY2gocHJvaiA9PiBwcm9qLmNsYXNzTGlzdC5yZW1vdmUoXCJzY3JvbGwtbW92ZVwiKSlcclxuICAgIH1cclxufSlcclxuXHJcblxyXG4vL0ZhZGUgdHJhbnNpdGlvbiBmb3IgdGVjaG5vbG9neVxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZnVuY3Rpb24oKSB7XHJcbiAgICBjb25zdCBkZXNpcmVkU2Nyb2xsUG9zaXRpb24gPSA1MDA7IC8vIENoYW5nZSB0aGlzIHZhbHVlIHRvIHRoZSBkZXNpcmVkIHNjcm9sbCBwb3NpdGlvblxyXG4gICAgY29uc3QgdGVjaG5vbG9naWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50ZWNoXCIpO1xyXG5cclxuICAgIGlmICh3aW5kb3cuc2Nyb2xsWSA+PSBkZXNpcmVkU2Nyb2xsUG9zaXRpb24pIHtcclxuICAgICAgICB0ZWNobm9sb2dpZXMuZm9yRWFjaCh0ZWNoID0+IHRlY2guY2xhc3NMaXN0LmFkZChcImZhZGUtaW5cIikpXHJcbiAgICAgICAgXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRlY2hub2xvZ2llcy5mb3JFYWNoKHRlY2ggPT4gdGVjaC5jbGFzc0xpc3QucmVtb3ZlKFwiZmFkZS1pblwiKSlcclxuICAgIH1cclxufSlcclxuXHJcblxyXG4vL0NvbnRhY3QgRm9ybVxyXG5jb25zdCBjb250YWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFjdC1mb3JtXCIpXHJcbmxldCBtZXNzYWdlU3RhdHVzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZXNzYWdlLXN0YXR1c1wiKVxyXG5cclxuY29udGFjdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBlbWFpbGpzLnNlbmRGb3JtKCdjb250YWN0X3NlcnZpY2UnLCAndGVtcGxhdGVfODY0OWZicScsIGNvbnRhY3RGb3JtLCAnVVVaMlUzSnZCaXQyclF2Q2wnKVxyXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBtZXNzYWdlU3RhdHVzQ29udGFpbmVyLnRleHRDb250ZW50ID0gXCJNZXNzYWdlIHNlbnQhXCJcclxuICAgICAgICAgICAgY29udGFjdEZvcm0ucmVzZXQoKVxyXG4gICAgICAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XHJcbiAgICAgICAgICAgIG1lc3NhZ2VTdGF0dXNDb250YWluZXIudGV4dENvbnRlbnQgPSBgRXJyb3I6ICR7ZXJyb3J9YFxyXG4gICAgICAgICAgICBjb250YWN0Rm9ybS5yZXNldCgpXHJcbiAgICAgICAgfSlcclxufSlcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9