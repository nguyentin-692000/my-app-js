import Navigo from "navigo"
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import Header from "./components/header";
import Footer from "./components/footer";

// tạo ra 1 đối tượng router từ class Navigo
const router = new Navigo("/", { linksSelector: "a" });

const render = (content) => {
    document.querySelector("#header").innerHTML = Header.print();
    document.querySelector("#content").innerHTML = content.print();
    document.querySelector("#footer").innerHTML = Footer.print();
}



// truy cập phương thức
router.on({
    "/": () => {
        render(HomePage)
    },

    "/about": () => {
        render(AboutPage)
    }
})

router.resolve();

// class tuongPhep {
//     constructor(name, mana) {
//         this.name = name;
//         this.mana = mana;
//     }

//     showInfo() {
//         console.log(`name: ${this.name} and mana: ${this.mana}`);
//     }
// }

// const tuong1 = new tuongPhep("darius", 300)

// console.log(tuong1.showInfo());