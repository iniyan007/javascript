let page = 1;
let loading = false;

const container = document.getElementById("container");
const loader = document.getElementById("loader");

async function loadData() {
    if (loading) return;

    loading = true;
    loader.style.display = "block";

    try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=5&_page=${page}`);
    const data = await response.json();

    data.forEach(item => {
        const div = document.createElement("div");
        div.className = "card";
        div.innerHTML = `<h3>${item.title}</h3><p>${item.body}</p>`;
        container.appendChild(div);
    });

    page++;
    } catch (error) {
    console.error("Error fetching data:", error);
    }

    loader.style.display = "none";
    loading = false;
}
window.addEventListener("scroll", ()=>{
    if(window.scrollY + window.innerHeight >= document.body.offsetHeight -20){
        loadData();
    }
});
loadData();