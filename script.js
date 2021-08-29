// hero animation
var tl = gsap.timeline({ repeat: 0 });
// logo and text come down from top
tl.from(".dev", {
    y: -500,
    duration: 2.5,
    ease: "bounce"
});
// button to aqua
tl.to(".hero--cta", {
    y: 100,
    background: 'aqua',
    filter: 'drop-shadow(0px 0px 4px aqua)',
    duration: .5,
    delay: -1.6,
    ease: "power4"
});
// button to black
tl.to(".hero--cta", {
    y: 0,
    background: 'black',
    border: '2px solid aqua',
    duration: 1.25,
    ease: "bounce.out",
    delay: -1.15
});

// projects
const fillProjects = async () => {

    const response = await fetch('./projects.json')
    const data = await response.json()

    const projectSection = document.getElementById('projects')

    data.map(project => {
        projectSection.innerHTML +=
            `
                <div class="project">
                        <img
                        src="${project.mockup}"
                        alt="${project.title} project mockup"
                        class="project--mockup"
                        />
                        <div class="project--details">
                        <h2 class="project--title">${project.title}</h2>
                        <h3 class="project--type">${project.type}</h3>
                        <p class="project--description">${project.description}</p>
                        <a href=${project.live} class="project--button" target="_blank">View Live</a>
                        <a href=${project.code} class="project--button" target="_blank">Sample Code</a>
                        </div>
                </div>
            `
    })
}

fillProjects();

// update year
const currYear = new Date().getFullYear()
document.getElementById('year').innerHTML = currYear