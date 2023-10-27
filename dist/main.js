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
        img: "",
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
const disabledButtons = document.querySelectorAll('input[type="button"][onclick="location.href=\'\';"]');
disabledButtons.forEach((button)=> {
    button.disabled = true
})

//Scrolling
window.addEventListener('scroll', function() {
    const desiredScrollPosition = 500; // Change this value to the desired scroll position
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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWU7Ozs7OztVQ3pGZjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTnVDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLElBQUk7QUFDN0M7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLE1BQU07QUFDL0M7QUFDQSxrREFBa0QsU0FBUyxFQUFFO0FBQzdELGtEQUFrRCxZQUFZLEVBQUU7QUFDaEU7QUFDQTtBQUNBLG9DQUFvQyxhQUFhO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQVE7QUFDUjtBQUNBLENBQUM7QUFDRCxvR0FBb0c7QUFDcEc7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL3Byb2plY3REYXRhLmpzIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmNvbnN0IFByb2plY3RzID0gW1xyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiBcIldlYXRoZXJBcHBcIixcclxuICAgICAgICBpbWc6IFwiLi9pbWFnZXMvd2VhdGhlcmFwcC5wbmdcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJXZWF0aGVyIEFwcCBjcmVhdGVkIHVzaW5nIFdlYXRoZXJBUEkuIFRoZSBhcHBsaWNhdGlvbiByZXRyaWV2ZXMgZGF0YSBmcm9tIHRoZSBBUEkgYmFzZWQgb24gdGhlIGlucHV0IGxvY2F0aW9uIGFuZCBkaXNwbGF5cyB0aGUgY3VycmVudCB3ZWF0aGVyIGFsb25nIHdpdGggb3RoZXIgZGV0YWlscyBmb3IgdGhlIGRheS4gSXQgYWxzbyBzaG93cyB0aGUgaG91cmx5IGZvcmVjYXN0IGFuZCBhIGZvcmVjYXN0IGZvciB0aGUgbmV4dCAzIGRheXMuIEl0IGFsc28gZmVhdHVyZXMgYSBzd2l0Y2ggdG8gY2hhbmdlIGJldHdlZW4gRmFocmVuaGVpdCBhbmQgQ2Vsc2l1c1wiLFxyXG4gICAgICAgIGNvZGVMaW5rOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9qaWFua2gvd2VhdGhlci1hcHBcIixcclxuICAgICAgICBwcmV2aWV3TGluazogXCJodHRwczovL2ppYW5raC5naXRodWIuaW8vd2VhdGhlci1hcHAvXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiQmluYXJ5IFNlYXJjaCBUcmVlXCIsXHJcbiAgICAgICAgaW1nOiBcIi4vaW1hZ2VzL0JTVC5wbmdcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJCaW5hcnkgU2VhcmNoIFRyZWUgYXBwbGljYXRpb24gdGhhdCBzaG93cyB0aGUgZGlmZmVyZW50IHR5cGVzIG9mIHRyYXZlcnNhbHMgdGhyb3VnaCBhIGJpbmFyeSBzZWFyY2ggdHJlZS4gVGhpcyB2aXN1YWwgZ3VpZGUgaGVscHMgcGVvcGxlIHVuZGVyc3RhbmQgQlNUIGFuZCBoYXMgaW50ZXJhY3RpdmUgZmVhdHVyZXMgbGlrZSBpbnNlcnRpbmcgbm9kZXMsIGRlbGV0aW5nIG5vZGVzLCBmaW5kaW5nIHRoZSBkZXB0aCBvZiBhIHNwZWNpZmljIG5vZGUsIGFuZCBhbHNvIHJlLWJhbGFuY2luZyBvZiB0aGUgQlNULlwiLFxyXG4gICAgICAgIGNvZGVMaW5rOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9qaWFua2gvZHNhX2V4ZXJjaXNlcy90cmVlL21haW4vYmluYXJ5X3NlYXJjaF90cmVlc1wiLFxyXG4gICAgICAgIHByZXZpZXdMaW5rOiBcImh0dHBzOi8vamlhbmtoLmdpdGh1Yi5pby9kc2FfZXhlcmNpc2VzL1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiBcIkJha2VyeSBXZWJzaXRlXCIsXHJcbiAgICAgICAgaW1nOiBcIi4vaW1hZ2VzL2Jha2VyeS5wbmdcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJGcm9udGVuZCBSZWFjdCB3ZWJzaXRlIGZvciBhIG1vY2sgcmVzdGF1cmFudCB3aXRoIHNldmVyYWwgZnVuY3Rpb25hbCB0YWJzLiBUaGUgbWFpbiBmb2N1cyBvZiB0aGlzIHByb2plY3Qgd2FzIHRvIG1vZHVsaXplIHRoZSBlbGVtZW50cyBvZiB0aGUgc2l0ZSBmb3IgYmV0dGVyIHJldXNhYmlsaXR5LiBUaGUgbWVudSBpdGVtcyBhcmUgYWxzbyBzdG9yZWQgaW4gYW4gYXJyYXkgb2Ygb2JqZWN0IHRoYXQgY2FuIGVhc2lseSBieSBlZGl0dGVkIHRvIGFkZCBhbmQgcmVtb3ZlIG1lbnUgaXRlbXMuXCIsXHJcbiAgICAgICAgY29kZUxpbms6IFwiaHR0cHM6Ly9naXRodWIuY29tL2ppYW5raC9zcHJpZ3NiYWtlcnlcIixcclxuICAgICAgICBwcmV2aWV3TGluazogXCJodHRwczovL2ppYW5raC5naXRodWIuaW8vc3ByaWdzYmFrZXJ5L1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiBcIlRpYyBUYWMgVG9lXCIsXHJcbiAgICAgICAgaW1nOiBcIi4vaW1hZ2VzL3RpY3RhY3RvZS5wbmdcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJKYXZhc2NyaXB0IGFwcGxpY2F0aW9uIG9mIHRoZSBjbGFzc2ljIGdhbWUgVGljIFRhYyBUb2UuIEZlYXR1cmVzIE11bHRpcGxheWVyIGFuZCBTaW5nbGUgcGxheWVyLiBJbmNsdWRlcyBhbiB1cGJlYXRhYmxlIEFJIHdoZW4gcGxheWluZyBzaW5nbGVwbGF5ZXIgbW9kZSwgbWFkZSB3aXRoIHRoZSBNaW5pTWF4IEFsZ29yaXRobS5cIixcclxuICAgICAgICBjb2RlTGluazogXCJodHRwczovL2dpdGh1Yi5jb20vamlhbmtoL3RpY3RhY3RvZVwiLFxyXG4gICAgICAgIHByZXZpZXdMaW5rOiBcImh0dHBzOi8vamlhbmtoLmdpdGh1Yi5pby90aWN0YWN0b2UvXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiS25pZ2h0IFRyYXZhaWxzXCIsXHJcbiAgICAgICAgaW1nOiBcIi4vaW1hZ2VzL2tuaWdodC10cmF2YWlscy5wbmdcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJUaGUgZmFtb3VzIEJpbmFyeSBUcmVlIFNlYXJjaCBleGNlcmNpc2UgS25pZ2h0IFRyYXZhaWxzLCBidXQgdmlzdWFsaXplZC4gVGhlIGtuaWdodCBjaGVzcyBwaWVjZSBpcyBhYmxlIHRvIHRyYXZhaWwgdGhlIGNoZXNzYm9hcmQgdG8gYW55IGNlbGwgb24gdGhlIGJvYXJkLiBUaGlzIGFwcGxpY2F0aW9uIHNob3dzIHRoZSBzaG9ydGVzdCBwYXRoIHRoYXQgY291bGQgYmUgdGFrZW4gdG8gYSBkZXN0aW5hdGlvbiBzZWxlY3RlZC4gVGhlIG1ldGhvZCB1c2VkIHRvIGdldCB0aGUgc2hvcnRlc3QgcGF0aCBpcyBieSB1dGlsaXppbmcgQnJlYWR0aCBGaXJzdCBUcmF2ZXJzYWwuXCIsXHJcbiAgICAgICAgY29kZUxpbms6IFwiaHR0cHM6Ly9naXRodWIuY29tL2ppYW5raC9rbmlnaHRzLXRyYXZhaWxzXCIsXHJcbiAgICAgICAgcHJldmlld0xpbms6IFwiaHR0cHM6Ly9qaWFua2guZ2l0aHViLmlvL2tuaWdodHMtdHJhdmFpbHNcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogXCJDYWxjdWxhdG9yXCIsXHJcbiAgICAgICAgaW1nOiBcIi4vaW1hZ2VzL2NhbGN1bGF0b3IucG5nXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiRnVsbCBmdW5jdGlvbmFsIHNpbXBsZSBjYWxjdWxhdG9yIGRldmVsb3BlZCB1c2luZyBIVE1ML0NTUy9KYXZhU2NyaXB0LiBIYW5kbGVzIHRoZSBiYXNpYyBtYXRoZW1pY2FsIGVxdWF0aW9ucy5cIixcclxuICAgICAgICBjb2RlTGluazogXCJodHRwczovL2dpdGh1Yi5jb20vamlhbmtoL2NhbGN1bGF0b3JcIixcclxuICAgICAgICBwcmV2aWV3TGluazogXCJodHRwczovL2ppYW5raC5naXRodWIuaW8vY2FsY3VsYXRvci9cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogXCJTa2V0Y2ggQm9va1wiLFxyXG4gICAgICAgIGltZzogXCIuL2ltYWdlcy9za2V0Y2hwYWQucG5nXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiQSBkcmF3aW5nIGJvYXJkIHRoYXQgZnVuY3Rpb25zIHNpbWlsYXJpbHkgdG8gTVMgUGFpbnQuIEFsbG93cyB0aGUgdXNlciB0byBjaG9vc2UgdGhlIHNpemUgb2YgdGhlIGNhbnZhcyBhbmQgYWxzbyBoYXMgYSBzcGVjaWFsIHJhaW5ib3cgZWZmZWN0IGRyYXdpbmcuIFRoZSBmb2N1cyBvZiB0aGlzIHByb2plY3Qgd2FzIERPTSBtYW5pcHVsYXRpb24gdXNpbmcgSmF2YVNjcmlwdC5cIixcclxuICAgICAgICBjb2RlTGluazogXCJodHRwczovL2dpdGh1Yi5jb20vamlhbmtoL3NrZXRjaGJvb2tcIixcclxuICAgICAgICBwcmV2aWV3TGluazogXCJodHRwczovL2ppYW5raC5naXRodWIuaW8vc2tldGNoYm9vay9cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogXCJQeWdhbWUgUGxhdGZvcm1lclwiLFxyXG4gICAgICAgIGltZzogXCIuL2ltYWdlcy9QeWdhbWVTYW1wbGUuZ2lmXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiW1dJUF0gUHlnYW1lIGJhc2VkIGdhbWUuIFBsYXRmb3JtZXIgYWR2ZW50dXJlIGdhbWUgd2l0aCBhIG1haW4gY2hhcmFjdGVyIGluc3BpcmVkIGJ5IHRoZSBmYWlyeSB0YWxlIG9mIExpdHRsZSBSZWQgUmlkaW5nIEhvb2QuIFRoZSBwbGF5ZXIgbmVlZHMgdG8gbmF2aWdhdGUgdGhyb3VnaCB0aGUgZm9yZXN0IHRvIHJlYWNoIGEgZGVzdGluYXRpb24uXCIsXHJcbiAgICAgICAgY29kZUxpbms6IFwiaHR0cHM6Ly9naXRodWIuY29tL2ppYW5raC9SZWRIb29kXCIsXHJcbiAgICAgICAgcHJldmlld0xpbms6IFwiXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiUm9jayBQYXBlciBTY2lzc29yXCIsXHJcbiAgICAgICAgaW1nOiBcIi4vaW1hZ2VzL1JQUy5wbmdcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJBIGNsYXNzaWMgZ2FtZSBvZiBSb2NrIFBhcGVyIFNjaXNzb3JzLiBGaXJzdCB0byB3aW4gNSByb3VuZHMgd2lucyB0aGUgbWF0Y2ghIFwiLFxyXG4gICAgICAgIGNvZGVMaW5rOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9qaWFua2gvUlBTX2dhbWVcIixcclxuICAgICAgICBwcmV2aWV3TGluazogXCJodHRwczovL2ppYW5raC5naXRodWIuaW8vUlBTX2dhbWUvXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiVGFzayBUby1EbyBMaXN0XCIsXHJcbiAgICAgICAgaW1nOiBcIlwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIltXSVBdIEEgVG8tRG8gTGlzdCBhcHBsaWNhdGlvbi4gRmVhdHVyZXMgb3B0aW9ucyB0byBjcmVhdGUgc2VjdGlvbnMgYW5kIGFkZCB0YXNrcyB0byB0aGUgc3BlY2lmaWMgc2VjdGlvbiB0aGF0IGNhbiBiZSBjaGVja2VkIG9mZi4gVGhlIGZvY3VzIG9mIHRoaXMgcHJvamVjdCB3YXMgdG8gdXNlIExvY2FsU3RvcmFnZSB0byBtYW5hZ2UgdXNlciBpbmZvcm1hdGlvbiBhbmQgb3JnYW5pemUgdGhlIHByb2plY3QgaW4gTW9kdWxlcyB3aGlsZSB1c2luZyBXZWJwYWNrLlwiLFxyXG4gICAgICAgIGNvZGVMaW5rOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9qaWFua2gvdG8tZG8tbGlzdFwiLFxyXG4gICAgICAgIHByZXZpZXdMaW5rOiBcIlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiBcIkxpYnJhcnkgQXBwXCIsXHJcbiAgICAgICAgaW1nOiBcIi4vaW1hZ2VzL2xpYnJhcnkucG5nXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiQW4gYXBwbGljYXRpb24gdGhhdCBsZXRzIHVzZXIgc2F2ZSBpbmZvcm1hdGlvbiBhYm91dCBib29rcyB0aGF0IHRoZXkgYXJlIGludGVyZXN0ZWQgaW4uIFRoZSB1c2VyIGNhbiBhbHNvIGNoYW5nZSBhbmQgc2VlIHRoZSBzdGF0dXMgb2YgdGhlIGJvb2tzIGlmIHRoZXkgZmluaXNoZWQgcmVhZGluZyBpdCBvciBub3QuXCIsXHJcbiAgICAgICAgY29kZUxpbms6IFwiaHR0cHM6Ly9naXRodWIuY29tL2ppYW5raC9saWJyYXJ5UHJvamVjdFwiLFxyXG4gICAgICAgIHByZXZpZXdMaW5rOiBcImh0dHBzOi8vamlhbmtoLmdpdGh1Yi5pby9saWJyYXJ5UHJvamVjdC9cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogXCJEYXNoYm9hcmRcIixcclxuICAgICAgICBpbWc6IFwiLi9pbWFnZXMvZGFzaGJvYXJkLnBuZ1wiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkEgc2ltcGxlIHNhbXBsZSBEYXNoYm9hcmQgY3JlYXRlZCB0aGF0IGZvY3VzZXMgb24gVVggYW5kIEdyaWQgTGF5b3V0cyBpbiBDU1NcIixcclxuICAgICAgICBjb2RlTGluazogXCJodHRwczovL2dpdGh1Yi5jb20vamlhbmtoL2Rhc2hib2FyZFNhbXBsZVwiLFxyXG4gICAgICAgIHByZXZpZXdMaW5rOiBcImh0dHBzOi8vamlhbmtoLmdpdGh1Yi5pby9kYXNoYm9hcmRTYW1wbGUvXCJcclxuICAgIH0gICBcclxuXVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdHMiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBQcm9qZWN0cyBmcm9tIFwiLi9wcm9qZWN0RGF0YS5qc1wiXHJcblxyXG5jb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0c1wiKVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdChpbWcsIHRpdGxlLCBkZXNjcmlwdGlvbiwgY29kZUxpbmssIHByZXZpZXdMaW5rKSB7XHJcbiAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgcHJvamVjdC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdFwiKVxyXG4gICAgcHJvamVjdC5pbm5lckhUTUwgPSBgXHJcbiAgICA8ZGl2IGNsYXNzPVwicHJvamVjdC1pbWdcIj48aW1nIHNyYz1cIiR7aW1nfVwiPjwvZGl2PlxyXG4gICAgPGhyPlxyXG4gICAgPGRpdiBjbGFzcz1cInByb2plY3QtZGVzY3JpcHRpb25cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2plY3QtdGl0bGVcIj4ke3RpdGxlfTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnV0dG9uc1wiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbmNsaWNrPVwibG9jYXRpb24uaHJlZj0nJHtjb2RlTGlua30nO1wiID48aW1nIHNyYz1cImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC9kZXZpY29ucy9kZXZpY29uL2ljb25zL2dpdGh1Yi9naXRodWItb3JpZ2luYWwuc3ZnXCIgLz4gPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uY2xpY2s9XCJsb2NhdGlvbi5ocmVmPScke3ByZXZpZXdMaW5rfSc7XCI+IDxpbWcgc3JjPVwiaW1hZ2VzL29wZW4taW4tbmV3LnN2Z1wiPiA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImRlc2NyaXB0aW9uXCI+ICR7ZGVzY3JpcHRpb259IDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgPC9kaXY+XHJcbiAgICBgXHJcblxyXG4gICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0KVxyXG59XHJcblxyXG5Qcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XHJcbiAgICBjcmVhdGVQcm9qZWN0KHByb2plY3QuaW1nLCBwcm9qZWN0LnRpdGxlLCBwcm9qZWN0LmRlc2NyaXB0aW9uLCBwcm9qZWN0LmNvZGVMaW5rLCBwcm9qZWN0LnByZXZpZXdMaW5rKVxyXG59KVxyXG5jb25zdCBkaXNhYmxlZEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFt0eXBlPVwiYnV0dG9uXCJdW29uY2xpY2s9XCJsb2NhdGlvbi5ocmVmPVxcJ1xcJztcIl0nKTtcclxuZGlzYWJsZWRCdXR0b25zLmZvckVhY2goKGJ1dHRvbik9PiB7XHJcbiAgICBidXR0b24uZGlzYWJsZWQgPSB0cnVlXHJcbn0pXHJcblxyXG4vL1Njcm9sbGluZ1xyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZnVuY3Rpb24oKSB7XHJcbiAgICBjb25zdCBkZXNpcmVkU2Nyb2xsUG9zaXRpb24gPSA1MDA7IC8vIENoYW5nZSB0aGlzIHZhbHVlIHRvIHRoZSBkZXNpcmVkIHNjcm9sbCBwb3NpdGlvblxyXG4gICAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHMtY29udGFpbmVyXCIpO1xyXG4gICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdFwiKVxyXG5cclxuICAgIGlmICh3aW5kb3cuc2Nyb2xsWSA+PSBkZXNpcmVkU2Nyb2xsUG9zaXRpb24pIHtcclxuICAgICAgICBwcm9qZWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Njcm9sbC10by1jb2xvcicpO1xyXG4gICAgICAgIHByb2plY3QuZm9yRWFjaChwcm9qID0+IHByb2ouY2xhc3NMaXN0LmFkZChcInNjcm9sbC1tb3ZlXCIpKVxyXG4gICAgICAgIFxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBwcm9qZWN0Q29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ3Njcm9sbC10by1jb2xvcicpO1xyXG4gICAgICAgIHByb2plY3QuZm9yRWFjaChwcm9qID0+IHByb2ouY2xhc3NMaXN0LnJlbW92ZShcInNjcm9sbC1tb3ZlXCIpKVxyXG4gICAgfVxyXG59KSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==