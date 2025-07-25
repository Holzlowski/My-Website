import SpellDashboard1 from '../assets/images/programming/SpellDashboard1.jpg';
import SpellDashboard2 from '../assets/images/programming/SpellDashboard2.png';
import PnPPlaner from '../assets/images/programming/PnPPlaner.png';
import TinDog from '../assets/images/programming/TinDog.png';
import TinDog2 from '../assets/images/programming/TinDog2.png';
import TinDog3 from '../assets/images/programming/TinDog3.png';
import PWM1 from '../assets/images/programming/PWM1.png';
import PWM2 from '../assets/images/programming/PWM2.png';
import DrumKit from '../assets/images/programming/DrumKit.png';
import MeineWebseite from '../assets/images/programming/MeineWebseite.png';



export const programmingProjects = [
    {
        title: "PnP Planner",
        description: "Ein Figma Prototyp zur Erstellung und Verwaltung von Pen & Paper Runden. Hierbei habe von der Idee bis zum Prototypen viel mitgewirkt.",
        image: PnPPlaner,
        link: "https://www.figma.com/proto/ApqVE9q6eDFiFAf1T3nSAH/Pen---Paper-Planner?node-id=283-5240&starting-point-node-id=306%3A4740&t=Y27zVeTFBrKZorAo-1"
    },
    {
        title: "Spell Dashboard",
        description: "Ein Dashboard, an dem ich beim Fraunhofer Institut gearbeitet habe. Mit diesem Tool können Widgets erstellt werden, mit denen man Daten von Sensoren durch Widgets visualisieren kann. Außerdem ist es damit möglich freiwillige Ersthelfer in Gefahrensituatioen zu mobilisieren. Leider sind diese Bilder nur alte Mockups, da ich keine Bilder vom richtigen Projekt besitze.",
        media: [
            {
                type: "image",
                src: SpellDashboard1
            },
            {
                type: "image",
                src: SpellDashboard2
            }
        ]
    },
    {
        title: "Meine Webseite",
        description: "Meine persönliche Webseite, auf der ich meine Projekte und Erfahrungen präsentiere. Für die Entwicklung habe ich React und Bootstrap verwendet.",
        image: MeineWebseite
    },
    {
        title: "Password Manager",
        description: "Ein Projekt zur Verwaltung von Passwörtern mit Funktionen zur sicheren Speicherung und Verschlüsselung. Für die Implementierung habe ich Angular verwendet und Firebase für die Datenbankanbindung.",
        media: [
            {
                type: "image",
                src: PWM1
            },
            {
                type: "image",
                src: PWM2
            }
        ],
        link: "https://github.com/Holzlowski/password-manager"
    },
    {
        title: "Drum Kit",
        description: "Ein interaktives Drum Kit, das es Benutzern ermöglicht, verschiedene Schlagzeugklänge zu spielen und zu kombinieren.",
        image: DrumKit,
        link: "https://github.com/Holzlowski/Drum-Kit"
    },
    {
        title: "TinDog",
        description: "Aus Übungsgründen habe ich diese Webseite nur mit HTML und CSS nachgebaut.",
        media: [
            {
                type: "image",
                src: TinDog
            },
            {
                type: "image",
                src: TinDog2
            },
            {
                type: "image",
                src: TinDog3
            }
        ]
    },
]
