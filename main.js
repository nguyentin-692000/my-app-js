import Navigo from "navigo"

// tạo ra 1 đối tượng router từ class Navigo
const router = new Navigo("/");

// truy cập phương thức
router.on({
    "/": () => {
        console.log("Home Page");
    },

    "/about": () => {
        console.log("About Page");
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