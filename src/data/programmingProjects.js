import SpellDashboard1 from '../assets/images/programming/SpellDashboard1.jpg';
import SpellDashboard2 from '../assets/images/programming/SpellDashboard2.jpg';
import PnPPlaner from '../assets/images/programming/PnPPlaner.jpg';
import TinDog from '../assets/images/programming/TinDog.jpg';
import TinDog2 from '../assets/images/programming/TinDog2.jpg';
import TinDog3 from '../assets/images/programming/TinDog3.jpg';
import PWM1 from '../assets/images/programming/PWM1.png';
import PWM2 from '../assets/images/programming/PWM2.png';
import DrumKit from '../assets/images/programming/DrumKit.jpg';
import MeineWebseite from '../assets/images/programming/MeineWebseite.jpg';
import FamilyTracker from '../assets/images/programming/FamilyTracker.jpg';



export const programmingProjects = [
    {
        title: "PnP Planner",
        description: "Ein interaktiver Figma-Prototyp zur Planung und Verwaltung von Pen-&-Paper-Runden. Ich war von der Ideenfindung über die Konzeption bis hin zur finalen Umsetzung des Prototyps maßgeblich beteiligt.",
        image: PnPPlaner,
        link: "https://www.figma.com/proto/ApqVE9q6eDFiFAf1T3nSAH/Pen---Paper-Planner?node-id=283-5240&starting-point-node-id=306%3A4740&t=Y27zVeTFBrKZorAo-1"
    },
    {
        title: "Spell Dashboard",
        description: "Ein Dashboard-Projekt, an dem ich während meiner Zeit beim Fraunhofer Institut mitgearbeitet habe. Mit diesem Tool können individuelle Widgets erstellt werden, um Sensordaten in Echtzeit zu visualisieren. Zudem ermöglicht es die Koordination und Mobilisierung freiwilliger Ersthelfer in Gefahrensituationen. Da ich keine Bilder des finalen Projekts habe, sind hier nur ältere Mockups zu sehen.",
        media: [
            {
                type: "image",
                src: SpellDashboard1
            },
            {
                type: "image",
                src: SpellDashboard2
            }
        ],
        link: "https://www.fokus.fraunhofer.de/de/espri/projekte/spell.html"
    },
    {
        title: "Meine Webseite",
        description: "Meine Portfolio-Webseite, entwickelt mit React und Bootstrap. Sie zeigt meine Projekte aus 3D-Design, Programmierung und digitaler Kunst sowie interaktive Galerien.",
        image: MeineWebseite
    },
    {
        title: "Password Manager",
        description: "Ein Webprojekt zur sicheren Verwaltung von Passwörtern, inklusive Verschlüsselung und sicherer Speicherung. Die Implementierung erfolgte mit Angular für das Frontend und Firebase für die Datenbankanbindung.",
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
        description: "Ein interaktives Web-Drum-Kit, mit dem Nutzer verschiedene Schlagzeug-Sounds spielen, kombinieren und eigene Beats ausprobieren können.",
        image: DrumKit,
        link: "https://github.com/Holzlowski/Drum-Kit"
    },
    {
        title: "TinDog",
        description: "Dieses Projekt entstand als Übung, um meine Frontend-Fähigkeiten zu verbessern. Die Webseite wurde komplett mit HTML und CSS nachgebaut, ohne Frameworks oder zusätzliche Tools. Dabei lag mein Fokus auf sauberem Code.",
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
    {
        title: "Family Tracker",
        description: "Eine Web-App zur Visualisierung besuchter Länder auf einer interaktiven Weltkarte. Nutzer können durch Eingabe eines Landes dieses farbig markieren lassen, um bereits besuchte Länder zu tracken. Die Anwendung unterstützt mehrere Benutzerprofile und speichert alle Daten persistent in einer PostgreSQL-Datenbank. Entwickelt mit Node.js und PostgreSQL.",
        image: FamilyTracker
    }
]
