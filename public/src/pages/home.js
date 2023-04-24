import Data from "../data";
const HomePage = {
    render() {
        return /*html*/`
        <div class="max-w-5xl m-auto">
            <div class="banner">
                <img src="https://picsum.photos/1024/400">
            </div>

            <div class="news">
                <h2 class="text-2xl font-semibold my-4">Tin tức học tập</h2>
                <div class="grid grid-cols-3 gap-8">
                ${Data.map(post => `
                <div class="border p-4">
                <a href="/news/${post.id}">
                    <img src="${post.img}" alt=""/>
                </a>
                <h3 class="my-3"><a href="/news/${post.id}" class="font-semibold text-lg text-orange-500">${post.title}</a></h3>
                <p>${post.descripton}</p>
                </div>`).join("")}    
            </div >
            </div >
        </div >
    `
    }
}

export default HomePage;