import Data from "../data";

const NewDetails = {
    render(id) {
        const found = Data.find(post => post.id === `${id}`);
        return /*html*/`
        <div class="max-w-5xl mx-auto">
            <h1 class="text-orange-600">${found.title}</h1>
            <img src="${found.img}" alt="">
            <p>${found.descripton}</p>
        </div>
    `;
    }
};

export default NewDetails;