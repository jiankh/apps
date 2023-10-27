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
    <div class="project-description">
        <div class="project-header">
            <div class="project-title">${title}</div>
            <div class="buttons">
                <input type="button" onclick="location.href='${codeLink}';" value="View Code" />
                <input type="button" onclick="location.href='${previewLink}';" value="Live Preview" />
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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWU7Ozs7OztVQ3pGZjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTnVDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLElBQUk7QUFDN0M7QUFDQTtBQUNBLHlDQUF5QyxNQUFNO0FBQy9DO0FBQ0EsK0RBQStELFNBQVMsRUFBRTtBQUMxRSwrREFBK0QsWUFBWSxFQUFFO0FBQzdFO0FBQ0E7QUFDQSxvQ0FBb0MsYUFBYTtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUFRO0FBQ1I7QUFDQSxDQUFDO0FBQ0Qsb0dBQW9HO0FBQ3BHO0FBQ0E7QUFDQSxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvcHJvamVjdERhdGEuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuY29uc3QgUHJvamVjdHMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiV2VhdGhlckFwcFwiLFxyXG4gICAgICAgIGltZzogXCIuL2ltYWdlcy93ZWF0aGVyYXBwLnBuZ1wiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIldlYXRoZXIgQXBwIGNyZWF0ZWQgdXNpbmcgV2VhdGhlckFQSS4gVGhlIGFwcGxpY2F0aW9uIHJldHJpZXZlcyBkYXRhIGZyb20gdGhlIEFQSSBiYXNlZCBvbiB0aGUgaW5wdXQgbG9jYXRpb24gYW5kIGRpc3BsYXlzIHRoZSBjdXJyZW50IHdlYXRoZXIgYWxvbmcgd2l0aCBvdGhlciBkZXRhaWxzIGZvciB0aGUgZGF5LiBJdCBhbHNvIHNob3dzIHRoZSBob3VybHkgZm9yZWNhc3QgYW5kIGEgZm9yZWNhc3QgZm9yIHRoZSBuZXh0IDMgZGF5cy4gSXQgYWxzbyBmZWF0dXJlcyBhIHN3aXRjaCB0byBjaGFuZ2UgYmV0d2VlbiBGYWhyZW5oZWl0IGFuZCBDZWxzaXVzXCIsXHJcbiAgICAgICAgY29kZUxpbms6IFwiaHR0cHM6Ly9naXRodWIuY29tL2ppYW5raC93ZWF0aGVyLWFwcFwiLFxyXG4gICAgICAgIHByZXZpZXdMaW5rOiBcImh0dHBzOi8vamlhbmtoLmdpdGh1Yi5pby93ZWF0aGVyLWFwcC9cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogXCJCaW5hcnkgU2VhcmNoIFRyZWVcIixcclxuICAgICAgICBpbWc6IFwiLi9pbWFnZXMvQlNULnBuZ1wiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkJpbmFyeSBTZWFyY2ggVHJlZSBhcHBsaWNhdGlvbiB0aGF0IHNob3dzIHRoZSBkaWZmZXJlbnQgdHlwZXMgb2YgdHJhdmVyc2FscyB0aHJvdWdoIGEgYmluYXJ5IHNlYXJjaCB0cmVlLiBUaGlzIHZpc3VhbCBndWlkZSBoZWxwcyBwZW9wbGUgdW5kZXJzdGFuZCBCU1QgYW5kIGhhcyBpbnRlcmFjdGl2ZSBmZWF0dXJlcyBsaWtlIGluc2VydGluZyBub2RlcywgZGVsZXRpbmcgbm9kZXMsIGZpbmRpbmcgdGhlIGRlcHRoIG9mIGEgc3BlY2lmaWMgbm9kZSwgYW5kIGFsc28gcmUtYmFsYW5jaW5nIG9mIHRoZSBCU1QuXCIsXHJcbiAgICAgICAgY29kZUxpbms6IFwiaHR0cHM6Ly9naXRodWIuY29tL2ppYW5raC9kc2FfZXhlcmNpc2VzL3RyZWUvbWFpbi9iaW5hcnlfc2VhcmNoX3RyZWVzXCIsXHJcbiAgICAgICAgcHJldmlld0xpbms6IFwiaHR0cHM6Ly9qaWFua2guZ2l0aHViLmlvL2RzYV9leGVyY2lzZXMvXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiQmFrZXJ5IFdlYnNpdGVcIixcclxuICAgICAgICBpbWc6IFwiLi9pbWFnZXMvYmFrZXJ5LnBuZ1wiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkZyb250ZW5kIFJlYWN0IHdlYnNpdGUgZm9yIGEgbW9jayByZXN0YXVyYW50IHdpdGggc2V2ZXJhbCBmdW5jdGlvbmFsIHRhYnMuIFRoZSBtYWluIGZvY3VzIG9mIHRoaXMgcHJvamVjdCB3YXMgdG8gbW9kdWxpemUgdGhlIGVsZW1lbnRzIG9mIHRoZSBzaXRlIGZvciBiZXR0ZXIgcmV1c2FiaWxpdHkuIFRoZSBtZW51IGl0ZW1zIGFyZSBhbHNvIHN0b3JlZCBpbiBhbiBhcnJheSBvZiBvYmplY3QgdGhhdCBjYW4gZWFzaWx5IGJ5IGVkaXR0ZWQgdG8gYWRkIGFuZCByZW1vdmUgbWVudSBpdGVtcy5cIixcclxuICAgICAgICBjb2RlTGluazogXCJodHRwczovL2dpdGh1Yi5jb20vamlhbmtoL3Nwcmlnc2Jha2VyeVwiLFxyXG4gICAgICAgIHByZXZpZXdMaW5rOiBcImh0dHBzOi8vamlhbmtoLmdpdGh1Yi5pby9zcHJpZ3NiYWtlcnkvXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiVGljIFRhYyBUb2VcIixcclxuICAgICAgICBpbWc6IFwiLi9pbWFnZXMvdGljdGFjdG9lLnBuZ1wiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkphdmFzY3JpcHQgYXBwbGljYXRpb24gb2YgdGhlIGNsYXNzaWMgZ2FtZSBUaWMgVGFjIFRvZS4gRmVhdHVyZXMgTXVsdGlwbGF5ZXIgYW5kIFNpbmdsZSBwbGF5ZXIuIEluY2x1ZGVzIGFuIHVwYmVhdGFibGUgQUkgd2hlbiBwbGF5aW5nIHNpbmdsZXBsYXllciBtb2RlLCBtYWRlIHdpdGggdGhlIE1pbmlNYXggQWxnb3JpdGhtLlwiLFxyXG4gICAgICAgIGNvZGVMaW5rOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9qaWFua2gvdGljdGFjdG9lXCIsXHJcbiAgICAgICAgcHJldmlld0xpbms6IFwiaHR0cHM6Ly9qaWFua2guZ2l0aHViLmlvL3RpY3RhY3RvZS9cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogXCJLbmlnaHQgVHJhdmFpbHNcIixcclxuICAgICAgICBpbWc6IFwiLi9pbWFnZXMva25pZ2h0LXRyYXZhaWxzLnBuZ1wiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlRoZSBmYW1vdXMgQmluYXJ5IFRyZWUgU2VhcmNoIGV4Y2VyY2lzZSBLbmlnaHQgVHJhdmFpbHMsIGJ1dCB2aXN1YWxpemVkLiBUaGUga25pZ2h0IGNoZXNzIHBpZWNlIGlzIGFibGUgdG8gdHJhdmFpbCB0aGUgY2hlc3Nib2FyZCB0byBhbnkgY2VsbCBvbiB0aGUgYm9hcmQuIFRoaXMgYXBwbGljYXRpb24gc2hvd3MgdGhlIHNob3J0ZXN0IHBhdGggdGhhdCBjb3VsZCBiZSB0YWtlbiB0byBhIGRlc3RpbmF0aW9uIHNlbGVjdGVkLiBUaGUgbWV0aG9kIHVzZWQgdG8gZ2V0IHRoZSBzaG9ydGVzdCBwYXRoIGlzIGJ5IHV0aWxpemluZyBCcmVhZHRoIEZpcnN0IFRyYXZlcnNhbC5cIixcclxuICAgICAgICBjb2RlTGluazogXCJodHRwczovL2dpdGh1Yi5jb20vamlhbmtoL2tuaWdodHMtdHJhdmFpbHNcIixcclxuICAgICAgICBwcmV2aWV3TGluazogXCJodHRwczovL2ppYW5raC5naXRodWIuaW8va25pZ2h0cy10cmF2YWlsc1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiBcIkNhbGN1bGF0b3JcIixcclxuICAgICAgICBpbWc6IFwiLi9pbWFnZXMvY2FsY3VsYXRvci5wbmdcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJGdWxsIGZ1bmN0aW9uYWwgc2ltcGxlIGNhbGN1bGF0b3IgZGV2ZWxvcGVkIHVzaW5nIEhUTUwvQ1NTL0phdmFTY3JpcHQuIEhhbmRsZXMgdGhlIGJhc2ljIG1hdGhlbWljYWwgZXF1YXRpb25zLlwiLFxyXG4gICAgICAgIGNvZGVMaW5rOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9qaWFua2gvY2FsY3VsYXRvclwiLFxyXG4gICAgICAgIHByZXZpZXdMaW5rOiBcImh0dHBzOi8vamlhbmtoLmdpdGh1Yi5pby9jYWxjdWxhdG9yL1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiBcIlNrZXRjaCBCb29rXCIsXHJcbiAgICAgICAgaW1nOiBcIi4vaW1hZ2VzL3NrZXRjaHBhZC5wbmdcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJBIGRyYXdpbmcgYm9hcmQgdGhhdCBmdW5jdGlvbnMgc2ltaWxhcmlseSB0byBNUyBQYWludC4gQWxsb3dzIHRoZSB1c2VyIHRvIGNob29zZSB0aGUgc2l6ZSBvZiB0aGUgY2FudmFzIGFuZCBhbHNvIGhhcyBhIHNwZWNpYWwgcmFpbmJvdyBlZmZlY3QgZHJhd2luZy4gVGhlIGZvY3VzIG9mIHRoaXMgcHJvamVjdCB3YXMgRE9NIG1hbmlwdWxhdGlvbiB1c2luZyBKYXZhU2NyaXB0LlwiLFxyXG4gICAgICAgIGNvZGVMaW5rOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9qaWFua2gvc2tldGNoYm9va1wiLFxyXG4gICAgICAgIHByZXZpZXdMaW5rOiBcImh0dHBzOi8vamlhbmtoLmdpdGh1Yi5pby9za2V0Y2hib29rL1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiBcIlB5Z2FtZSBQbGF0Zm9ybWVyXCIsXHJcbiAgICAgICAgaW1nOiBcIi4vaW1hZ2VzL1B5Z2FtZVNhbXBsZS5naWZcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJbV0lQXSBQeWdhbWUgYmFzZWQgZ2FtZS4gUGxhdGZvcm1lciBhZHZlbnR1cmUgZ2FtZSB3aXRoIGEgbWFpbiBjaGFyYWN0ZXIgaW5zcGlyZWQgYnkgdGhlIGZhaXJ5IHRhbGUgb2YgTGl0dGxlIFJlZCBSaWRpbmcgSG9vZC4gVGhlIHBsYXllciBuZWVkcyB0byBuYXZpZ2F0ZSB0aHJvdWdoIHRoZSBmb3Jlc3QgdG8gcmVhY2ggYSBkZXN0aW5hdGlvbi5cIixcclxuICAgICAgICBjb2RlTGluazogXCJodHRwczovL2dpdGh1Yi5jb20vamlhbmtoL1JlZEhvb2RcIixcclxuICAgICAgICBwcmV2aWV3TGluazogXCJcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogXCJSb2NrIFBhcGVyIFNjaXNzb3JcIixcclxuICAgICAgICBpbWc6IFwiLi9pbWFnZXMvUlBTLnBuZ1wiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkEgY2xhc3NpYyBnYW1lIG9mIFJvY2sgUGFwZXIgU2Npc3NvcnMuIEZpcnN0IHRvIHdpbiA1IHJvdW5kcyB3aW5zIHRoZSBtYXRjaCEgXCIsXHJcbiAgICAgICAgY29kZUxpbms6IFwiaHR0cHM6Ly9naXRodWIuY29tL2ppYW5raC9SUFNfZ2FtZVwiLFxyXG4gICAgICAgIHByZXZpZXdMaW5rOiBcImh0dHBzOi8vamlhbmtoLmdpdGh1Yi5pby9SUFNfZ2FtZS9cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogXCJUYXNrIFRvLURvIExpc3RcIixcclxuICAgICAgICBpbWc6IFwiXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiW1dJUF0gQSBUby1EbyBMaXN0IGFwcGxpY2F0aW9uLiBGZWF0dXJlcyBvcHRpb25zIHRvIGNyZWF0ZSBzZWN0aW9ucyBhbmQgYWRkIHRhc2tzIHRvIHRoZSBzcGVjaWZpYyBzZWN0aW9uIHRoYXQgY2FuIGJlIGNoZWNrZWQgb2ZmLiBUaGUgZm9jdXMgb2YgdGhpcyBwcm9qZWN0IHdhcyB0byB1c2UgTG9jYWxTdG9yYWdlIHRvIG1hbmFnZSB1c2VyIGluZm9ybWF0aW9uIGFuZCBvcmdhbml6ZSB0aGUgcHJvamVjdCBpbiBNb2R1bGVzIHdoaWxlIHVzaW5nIFdlYnBhY2suXCIsXHJcbiAgICAgICAgY29kZUxpbms6IFwiaHR0cHM6Ly9naXRodWIuY29tL2ppYW5raC90by1kby1saXN0XCIsXHJcbiAgICAgICAgcHJldmlld0xpbms6IFwiXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiTGlicmFyeSBBcHBcIixcclxuICAgICAgICBpbWc6IFwiLi9pbWFnZXMvbGlicmFyeS5wbmdcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJBbiBhcHBsaWNhdGlvbiB0aGF0IGxldHMgdXNlciBzYXZlIGluZm9ybWF0aW9uIGFib3V0IGJvb2tzIHRoYXQgdGhleSBhcmUgaW50ZXJlc3RlZCBpbi4gVGhlIHVzZXIgY2FuIGFsc28gY2hhbmdlIGFuZCBzZWUgdGhlIHN0YXR1cyBvZiB0aGUgYm9va3MgaWYgdGhleSBmaW5pc2hlZCByZWFkaW5nIGl0IG9yIG5vdC5cIixcclxuICAgICAgICBjb2RlTGluazogXCJodHRwczovL2dpdGh1Yi5jb20vamlhbmtoL2xpYnJhcnlQcm9qZWN0XCIsXHJcbiAgICAgICAgcHJldmlld0xpbms6IFwiaHR0cHM6Ly9qaWFua2guZ2l0aHViLmlvL2xpYnJhcnlQcm9qZWN0L1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiBcIkRhc2hib2FyZFwiLFxyXG4gICAgICAgIGltZzogXCIuL2ltYWdlcy9kYXNoYm9hcmQucG5nXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiQSBzaW1wbGUgc2FtcGxlIERhc2hib2FyZCBjcmVhdGVkIHRoYXQgZm9jdXNlcyBvbiBVWCBhbmQgR3JpZCBMYXlvdXRzIGluIENTU1wiLFxyXG4gICAgICAgIGNvZGVMaW5rOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9qaWFua2gvZGFzaGJvYXJkU2FtcGxlXCIsXHJcbiAgICAgICAgcHJldmlld0xpbms6IFwiaHR0cHM6Ly9qaWFua2guZ2l0aHViLmlvL2Rhc2hib2FyZFNhbXBsZS9cIlxyXG4gICAgfSAgIFxyXG5dXHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0cyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFByb2plY3RzIGZyb20gXCIuL3Byb2plY3REYXRhLmpzXCJcclxuXHJcbmNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzXCIpXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0KGltZywgdGl0bGUsIGRlc2NyaXB0aW9uLCBjb2RlTGluaywgcHJldmlld0xpbmspIHtcclxuICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICBwcm9qZWN0LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0XCIpXHJcbiAgICBwcm9qZWN0LmlubmVySFRNTCA9IGBcclxuICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0LWltZ1wiPjxpbWcgc3JjPVwiJHtpbWd9XCI+PC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwicHJvamVjdC1kZXNjcmlwdGlvblwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0LWhlYWRlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdC10aXRsZVwiPiR7dGl0bGV9PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJidXR0b25zXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImJ1dHRvblwiIG9uY2xpY2s9XCJsb2NhdGlvbi5ocmVmPScke2NvZGVMaW5rfSc7XCIgdmFsdWU9XCJWaWV3IENvZGVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJidXR0b25cIiBvbmNsaWNrPVwibG9jYXRpb24uaHJlZj0nJHtwcmV2aWV3TGlua30nO1wiIHZhbHVlPVwiTGl2ZSBQcmV2aWV3XCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImRlc2NyaXB0aW9uXCI+ICR7ZGVzY3JpcHRpb259IDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgPC9kaXY+XHJcbiAgICBgXHJcblxyXG4gICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0KVxyXG59XHJcblxyXG5Qcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XHJcbiAgICBjcmVhdGVQcm9qZWN0KHByb2plY3QuaW1nLCBwcm9qZWN0LnRpdGxlLCBwcm9qZWN0LmRlc2NyaXB0aW9uLCBwcm9qZWN0LmNvZGVMaW5rLCBwcm9qZWN0LnByZXZpZXdMaW5rKVxyXG59KVxyXG5jb25zdCBkaXNhYmxlZEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFt0eXBlPVwiYnV0dG9uXCJdW29uY2xpY2s9XCJsb2NhdGlvbi5ocmVmPVxcJ1xcJztcIl0nKTtcclxuZGlzYWJsZWRCdXR0b25zLmZvckVhY2goKGJ1dHRvbik9PiB7XHJcbiAgICBidXR0b24uZGlzYWJsZWQgPSB0cnVlXHJcbn0pIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9