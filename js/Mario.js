import { Health } from "./Health.js";
const mario = document.querySelector(".super-mario");

export class Mario {
    #health
    obj
    constructor() {
        this.#health = new Health(3,1);
        this.obj = mario;
    }

    Damage() {
        let a = this.#health.Damage();
        this.ChangeMarioImage(a);
    }
    Heal() {
        let a = this.#health.Heal();
        this.ChangeMarioImage(a);
    }
    getCurrentHealth() {
        return this.#health.getCurrentHealth();
    }
    ChangeMarioImage(health) {
        switch (health) {
            case health = 1:
                mario.src = "./Images/mario.gif"
                mario.style.width = "80px"
            break;
            case health = 2:
                mario.src = "./Images/super-mario.gif";
                mario.style.width = "130px"
            break;
            case health = 3:
                mario.src ="./Images/super-mario-cape.gif";
                mario.style.width = "150px";
            break;
        }
    }
}
export { mario }