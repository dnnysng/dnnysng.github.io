const heroAnimation = () => {
    // hero animation
    var tl = gsap.timeline({ repeat: 0 });
    // logo and text come down from top
    tl.to(".dev", {
        y: 5,
        duration: 2.5,
        ease: "bounce"
    });
    // button to aqua
    tl.to(".hero--cta", {
        y: 100,
        background: '#0bd9d9',
        filter: 'drop-shadow(0px 0px 4px #0bd9d9)',
        duration: .5,
        delay: -1.6,
        ease: "power4"
    });
    // button to black
    tl.to(".hero--cta", {
        y: 0,
        background: 'black',
        border: '2px solid #0bd9d9',
        duration: 1.25,
        ease: "bounce.out",
        delay: -1.15
    });
}

setTimeout(heroAnimation, 500)

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