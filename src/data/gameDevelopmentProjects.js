import Animals from '../assets/images/gameDevelopment/Animals.jpg';
import Arkmon from '../assets/images/gameDevelopment/Arkmon Logo.jpg';
import CouldItBeMoreUnreal from '../assets/images/gameDevelopment/CouldItBeMoreUnreal.jpg';
import DwarfDiggerLogo from '../assets/images/gameDevelopment/DwarfDiggerLogo.jpg';
import DwarfDiggerPicture from '../assets/images/gameDevelopment/DwarfDigger.jpg';
import EscapeThePandemic from '../assets/images/gameDevelopment/EscapeThePandemic.jpg';
import GravityGalaxy from '../assets/images/gameDevelopment/GravityGalaxy.jpg';
import HungryGames from '../assets/images/gameDevelopment/HungryGames.jpg';
import MyFirstRPG from '../assets/images/gameDevelopment/MyFirstRPG.jpg';
import TankRaider from '../assets/images/gameDevelopment/TankRaider.jpg';

export const gameDevelopmentProjects = [
    {
        title: "Arkmon",
        description: "Die Idee zu diesem Spiel kam mir in einem Traum. Es ist stark von Pokémon inspiriert, aber mit dynamischeren Kämpfen auf einem Gridfeld, bei denen Attacken das Spielfeld selbst beeinflussen können. Das Spiel befindet sich noch in der Entwicklungsphase, allerdings steht das Grundgerüst bereits: Dialogsystem mit Verzweigungen, ein funktionierendes Gridsystem und erste einfache Kämpfe sind schon spielbar.",
        media: [
            {
                type: "image",
                src: Arkmon
            },
            {
                type: "youtube",
                videoId: "Hw4iTRCwYJw"
            }
        ],

        link: "https://github.com/Holzlowski/Arkmon"
    },
    {
        title: "Could It Be More Unreal?",
        description: "Dieses Projekt entstand für die IMI-Showtime. Unser Ziel war es, eine Gameplay-Demo in der damals brandneuen Unreal Engine 5 zu entwickeln und die neuesten Features zu präsentieren. Mein Fokus lag auf der Level-Architektur, wobei ich intensiv mit Megascans und dem Beleuchtungssystem Lumen gearbeitet habe.",
        media: [
            {
                type: "image",
                src: CouldItBeMoreUnreal
            },
            {
                type: "youtube",
                videoId: "echLe544zzI"
            }
        ]
    },
    {
        title: "Dwarf Digger",
        description: "In diesem Spiel schlüpfen die Spieler in die Rolle einer Zwergin, die in einer Mine nach wertvollen Ressourcen gräbt. Dwarf Digger kombiniert Puzzle- und Strategie-Elemente: Nur wer seine Werkzeuge und Fähigkeiten clever einsetzt, erreicht die tiefsten Ebenen der Mine. Der Prototyp ist bereits spielbar, benötigt aber noch weitere Entwicklungszeit, um sein volles Potenzial zu entfalten.",
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
        description: "Dieses mobile Spiel entstand während der Corona-Pandemie. Die Spieler erkunden das Level, indem sie ihr Handy bewegen, und müssen in einem Labor verschiedene Rätsel lösen, um das Gegenmittel gegen das Virus zu finden. Mein Beitrag lag vor allem in der Entwicklung der Gameplay-Mechaniken, insbesondere der Spielerbewegung, sowie in der Konzeption der Rätsel.",
        media: [
            {
                type: "image",
                src: EscapeThePandemic
            },
            {
                type: "youtube",
                videoId: "yIqyYs07EiI"
            }
        ]
    },
    {
        title: "Gravity Galaxy",
        description: "Dieser spielbare Prototyp entstand im Rahmen meiner Masterarbeit und untersucht die Möglichkeiten von Schwerkraft in einem intergalaktischen Setting. Inspiriert von Mario Galaxy war das Ziel, unterschiedliche Planetenformen zu erkunden und dabei verschiedene Gravitationseffekte in das Gameplay zu integrieren.",
        media: [
            {
                type: "image",
                src: GravityGalaxy
            },
            {
                type: "youtube",
                videoId: "4j4uYRUAts8"
            }
        ],
        link: "https://github.com/Holzlowski/Gravity-Galaxy"
    },
    {
        title: "Hungry Games",
        description: "Dieses Multiplayer-Spiel wurde für die IMI-Showtime entwickelt. Bis zu 32 Spieler schlüpfen in die Rolle von Tieren, die sich mit Waffen und speziellen Fähigkeiten bekämpfen. Gewinner ist das Tier, das die meisten Gegner „verspeist“. Mein Beitrag lag im Charakter-Design, in der Animation sowie in der Entwicklung einiger Gameplay-Mechaniken.",
        media: [
            {
                type: "image",
                src: HungryGames
            },
            {
                type: "youtube",
                videoId: "zPX5oIEL1uU"
            }
        ],
        link: "https://github.com/m2-retro-mmo/Tierfresser"
    },
    {
        title: "My First RPG",
        description: "Dieses Projekt entstand im Rahmen eines Kurses, den ich genutzt habe, um die Grundlagen der RPG-Entwicklung zu erlernen. Dabei habe ich zentrale Mechaniken wie Level-Ups, sammelbare Power-Ups und Leveltransitions umgesetzt und konnte so wertvolle Erfahrungen in der Spieleentwicklung sammeln.",
        media: [
            {
                type: "image",
                src: MyFirstRPG
            },
            {
                type: "youtube",
                videoId: "tR8RGq17CM0"
            }
        ],
        link: "https://github.com/Holzlowski/My-first-RPG"
    },
    {
        title: "Tank Raider",
        description: "Ein actionreiches Spiel, in dem die Spieler einen Panzer steuern, der sich durch ein Kampffeld voller feindlicher Panzer und mysteriöser Kreaturen kämpft. Dank der implementierten zufälligen Level-Generierung ist jedes Spiel ein neues Erlebnis. Mein Beitrag umfasste das Charakter- und Gegner-Design sowie die Entwicklung zentraler Gameplay-Mechaniken.",
        media: [
            {
                type: "image",
                src: TankRaider
            },
            {
                type: "youtube",
                videoId: "hNMvLwIgoKQ"
            }
        ]
    },
    {
        title: "Animals",
        description: "Dieses Projekt war Teil meiner Bachelorarbeit und diente dazu, mein Wissen über Computerspiel-KI zu vertiefen. Die KI der Tiere verfügt über Eigenschaften wie Sichtfeld, Geruch und Hunger. Ihr Verhalten passt sich dynamisch an, etwa abhängig davon, wie sie sich fühlen oder wie der Wind weht.",
        media: [
            {
                type: "image",
                src: Animals
            },
            {
                type: "youtube",
                videoId: "0n3SFKooaQA"
            }
        ],
        link: "https://github.com/Holzlowski/KI-Simulation"
    }
]