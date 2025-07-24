import Animals from '../assets/images/gameDevelopment/Animals.png';
import Arkmon from '../assets/images/gameDevelopment/Arkmon Logo.jpg';
import CouldItBeMoreUnreal from '../assets/images/gameDevelopment/CouldItBeMoreUnreal.jpg';
import DwarfDiggerLogo from '../assets/images/gameDevelopment/DwarfDiggerLogo.jpg';
import DwarfDiggerPicture from '../assets/images/gameDevelopment/DwarfDigger.png';
import EscapeThePandemic from '../assets/images/gameDevelopment/EscapeThePandemic.jpg';
import GravityGalaxy from '../assets/images/gameDevelopment/GravityGalaxy.jpg';
import HungryGames from '../assets/images/gameDevelopment/HungryGames.jpg';
import MyFirstRPG from '../assets/images/gameDevelopment/MyFirstRPG.jpg';
import TankRaider from '../assets/images/gameDevelopment/TankRaider.jpg';

export const gameDevelopmentProjects = [
    {
        title: "Arkmon",
        description: "Diese Idee kam mir in einem Traum. Es ist stark an Pokémon angelehnt, nur dass die Kämpfe nicht so statisch sind wie im Original. Die Grundidee ist, dass man seine Monster auf einem Gridfeld kämpfen lässt und die Attacken mit ihren Eigenschaften das Kampffeld beeinflussen kann.",
        image: Arkmon,
        link: "https://github.com/Holzlowski/Arkmon"
    },
    {
        title: "Could It Be More Unreal?",
        description: "Dieses Projekt wurde für die IMI-Showtime konzipiert. Unser Ziel war eine Gameplay Demo in der zurzeit brandaktuellem Unreal Engine 5 Version zu erstellen. Mit dieser wollten wie die neuesten Features der Engine präsentieren. Hierbei hab ich größtenteils die Level-Architektur erstellt.",
        image: CouldItBeMoreUnreal
    },
    {
        title: "Dwarf Digger",
        description: "In diesem Spiel schlüpfen die Spieler in die Rolle von einer Zwergin, die in einer Mine nach wertvollen Ressourcen gräbt. Das Spiel kombiniert Elemente von Puzzle und Strategie, da die Spieler ihre Werkzeuge und Fähigkeiten geschickt einsetzen müssen, um die tiefsten Ebenen der Mine zu erreichen.",
        media:[
            {
                type: "image",
                src: DwarfDiggerLogo
            },
            {
                type: "image",
                src: DwarfDiggerPicture
            }
        ],
        link: "https://github.com/proehr/dwarf-digger/releases/tag/v0.0.1-Prototype"
    },
    {
        title: "Escape The Pandemic",
        description: "Dieses Spiel entstand in der Corona-Pandemie und wird am Handy gespielt. Die Erkundung des Levels erfolgt durch das Bewegen des Handys. Das Ziel ist es in einem Labor Rätsel zu lösen, um das Gegenmittel gegen das Virus zu finden. Hier habe ich mich um Gameplay-Mechaniken wie die Bewegung des Spielers gekümmert und Ideen für die Rätsel entwickelt.",
        image: EscapeThePandemic
    },
    {
        title: "Gravity Galaxy",
        description: "Dieser Prototyp war Teil meiner Masterarbeit und erforscht die Möglichkeiten von Schwerkraft in einem intergalaktischen Setting. Dabei wurde ich stark von Mario Galaxy inspiriert. Das Ziel war es jegliche Formen von Planeten zu erkunden, während auch unterschiedliche Gravitationseffekte berücksichtigt werden.",
        image: GravityGalaxy,
        link: "https://github.com/Holzlowski/Gravity-Galaxy"
    },
    {
        title: "Hungry Games",
        description: "Dies war ebenfalls für die IMI-Showtime konzipiert und stellt ein Multiplayer-Spiel dar, indem 32 Spieler in die Rolle von Tieren schlüpfen, die sich mit Waffen und unterschiedlichen Fähigkeiten bekämpfen. Das Tier, das die meisten anderen frisst, gewinnt. Hier habe ich das Charakter-Design und die Animationen erstellt sowie einige der Gameplay-Mechaniken entwickelt.",
        image: HungryGames,
        link: "https://github.com/m2-retro-mmo/Tierfresser"
    },
    {
        title: "My First RPG",
        description: "Für dieses Spiel habe ich einen Kurs verfolgt, um die Grundlagen der RPG-Entwicklung zu erlernen. Von Level-up, über aufsammelbaren Power-Ups bis hin zu Leveltransitions habe ich hier einiges lernen können.",
        image: MyFirstRPG,
        link: "https://github.com/Holzlowski/My-first-RPG"
    },
    {
        title: "Tank Raider",
        description: "Ein actiongeladenes Spiel, in dem man einen Panzer spielt, der sich durch ein Kampffeld voller besessener gegnerischer Panzer und anderen Wesen kämpfen muss. Hier haben wir eine zufällige Level-Generierung implementiert, um jedes Mal ein neues Erlebnis zu bieten. Hier habe ich das Charakter und Gegner-Design sowie Gameplay-Mechaniken entwickelt.",
        image: TankRaider
    },
    {
        title: "The Animals",
        description: "Die ist Teil meiner Bachelorarbeit, wo ich mein Wissen über Computerspiel-KI weiterentwickeln wollte. Hier habe ich der KI Eigenschaften von Tieren wie Sichtfeld, Geruch und Hunger gegeben. Je nachdem wie die Tiere sich fühlen oder zum Beispiel der Wind weht, verhalten sie sich unterschiedlich.",
        image: Animals,
        link: "https://github.com/Holzlowski/KI-Simulation"
    }
]