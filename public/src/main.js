import Navigo from "navigo"
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import Header from "./components/header";
import Footer from "./components/footer";
import NewDetails from "./pages/newDetails";

// tạo ra 1 đối tượng router từ class Navigo
const router = new Navigo("/", { linksSelector: "a" });

const print = (content) => {
    document.querySelector("#header").innerHTML = Header.render();
    document.querySelector("#content").innerHTML = content;
    document.querySelector("#footer").innerHTML = Footer.render();
}



// truy cập phương thức
router.on({
    "/": () => {
        print(HomePage.render())
    },

    "/about": () => {
        print(AboutPage.render())
    },
    "/news/:id": () => {
        print(NewDetails.render())
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