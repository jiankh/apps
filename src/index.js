import Projects from "./projectData.js"


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
Projects.forEach((project) => {
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
