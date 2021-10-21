import { usePoison } from "../scripts/poisonDataProvider.js";
import { poison } from "../scripts/poison.js";

export const poisonList = () => {
    const poisonList = document.querySelector('.poison-container');
    const poisons = usePoison();

    let poisonHTMLRepresentation = "";
    for(let singlePoison of poisons) {
        poisonHTMLRepresentation += poison(singlePoison);
    }

    poisonList.innerHTML += `
        <main class="poison-container">
            ${poisonHTMLRepresentation}
        </main>
    `
}