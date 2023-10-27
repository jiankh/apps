import Projects from "./projectData.js"

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

Projects.forEach((project) => {
    createProject(project.img, project.title, project.description, project.codeLink, project.previewLink)
})
const disabledButtons = document.querySelectorAll('input[type="button"][onclick="location.href=\'\';"]');
disabledButtons.forEach((button)=> {
    button.disabled = true
})