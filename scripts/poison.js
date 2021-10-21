import { usePoison } from "../scripts/poisonDataProvider.js";

export const poison = (poison) => {
    if(poison.fatal) {
        poison.fatal = "Yes";
        return `
        <section class="poison">
        <h2>${poison.commonName}</h2>
        <ul>
            <li>Species - ${poison.species}</li>
            <li>Fatal - ${poison.fatal}</li>
            <li>Antidote - ${poison.antidote}</li>
        </ul>
        </section>
        `
    } else {
        poison.fatal = "No";
        return `
        <section class="poison">
        <h2>${poison.commonName}</h2>
        <ul>
            <li>Species - ${poison.species}</li>
            <li>Fatal - ${poison.fatal}</li>
            <li>Antidote - ${poison.antidote}</li>
        </ul>
        </section>
        `
    }
}