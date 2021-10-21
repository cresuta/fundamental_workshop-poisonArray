import { usePoison } from "../scripts/poisonDataProvider.js";

export const poison = (poison) => {
    if(poison.fatal) {
        poison.fatal = "Yes";
        return `
        <h2>${poison.commonName}</h2>
        <ul>
            <li>Species - ${poison.species}</li>
            <li>Fatal - ${poison.fatal}</li>
            <li>Antidote - ${poison.antidote}</li>
        </ul>
        `
    } else {
        poison.fatal = "No";
        return `
        <h2>${poison.commonName}</h2>
        <ul>
            <li>Species - ${poison.species}</li>
            <li>Fatal - ${poison.fatal}</li>
            <li>Antidote - ${poison.antidote}</li>
        </ul>
        `
    }
}