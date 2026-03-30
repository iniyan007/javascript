function home(){
    return `
        <h1>Home</h1>
        <p>Welcome to the home page!</p>
    `;
}
function about(){
    return `
        <h1>About</h1>
        <p>This is the about page.</p>
    `;
}
function contact(){
    return `
        <h1>Contact</h1>
        <p>Get in touch with us!</p>
    `;
}

const routes ={
    "/": home,
    "/about": about,
    "/contact": contact
}

function router(){
    const path = location.hash.slice(1) || "/";
    const route = routes[path] || home;
    document.getElementById("app").innerHTML = route();
}

window.addEventListener("load", router);
window.addEventListener("hashchange", router);
