// Alle 3D-Design Bilder importieren
import Village from '../assets/images/threeD-design/Bilder/Village.png';
import Topfpflanzen from '../assets/images/threeD-design/Bilder/Topfpflanzen.png';
import Schokokuchen2 from '../assets/images/threeD-design/Bilder/Schokokuchen2.png';
import Packung from '../assets/images/threeD-design/Bilder/Packung.png';
import Orao from '../assets/images/threeD-design/Bilder/Orao.JPG';
import Oger from '../assets/images/threeD-design/Bilder/Oger.png';
import Mecka from '../assets/images/threeD-design/Bilder/Mecha.png';
import LittleShag from '../assets/images/threeD-design/Bilder/little Shag.png';
import Landscape from '../assets/images/threeD-design/Bilder/Landscape.jpg';
import Kamehaus2 from '../assets/images/threeD-design/Bilder/Kamehaus2.jpg';
import HeroTree from '../assets/images/threeD-design/Bilder/Hero Tree.png';
import Haus from '../assets/images/threeD-design/Bilder/Haus.jpg';
import FirstDoor from '../assets/images/threeD-design/Bilder/FirstDoor.jpg';
import Donut from '../assets/images/threeD-design/Bilder/Donut.jpg';
import Dice2 from '../assets/images/threeD-design/Bilder/Dice2.png';
import Army from '../assets/images/threeD-design/Bilder/Army.png';
import Alchemielabor from '../assets/images/threeD-design/Bilder/Alchemielabor.png';
import Frog from '../assets/images/threeD-design/Bilder/Frog.png';
import FlyingCar from '../assets/images/threeD-design/Bilder/Flying Car.png';
import DH from '../assets/images/threeD-design/Bilder/DH.jpg';
import Murmeln from '../assets/images/threeD-design/Bilder/Murmeln.jpg';

import OraoSketch from '../assets/images/threeD-design/ZweitBilder/OraoRef.jpeg';
import FrogArt from '../assets/images/threeD-design/ZweitBilder/Frog.PNG';
import Dice1 from '../assets/images/threeD-design/ZweitBilder/Dice1.png';

export const threeDProjects = [
    {
        title: "Das Alchemielabor",
        media:[
            {
                type: "image",
                src: Alchemielabor,
            },
            {
                type: "youtube",
                videoId: "rwiGuym6VLI"  
            }
        ],
        description: "Mit Blender und dem Grease Pencil erstellt. Ein magisches Labor voller Tränke, Bücher, mystischer Gegenstände und kleinen Easter Eggs. Niemand weiß, was der Alchemist hier wirklich braut."
    },
    {
        title: "Das Dorf ",
        media:[
            {
                type: "image",
                src: Village,
            },
            {
                type: "youtube",
                videoId: "P_Zf9Ou7EHk"
            }
        ],
        description: "Ebenfalls in Blender mit Grease Pencil erstellt. Irgendwo hier lebt der Alchemist, während die anderen Dorfbewohner dabei sind, alles für das nächste Fest vorzubereiten."
    },
    {
        title: "Das Haus",
        media: [
            {
                type: "image",
                src: Haus,
            },
            {
                type: "youtube",
                videoId: "itsc93CjdkU"
            }
        ],
        description: "Ein kleiner Teil des großen Dorfes. Hier faziniert mich am meisten die Mischung aus 3D-Design und 2D-Grease Pencil Elementen, die dem Ganzen einen einzigartigen Look verleihen."
    },
    {
        title: "Meine eigene Trinkpackung",
        media: [
            {
                type: "image",
                src: Packung,
            },
            {
                type: "youtube",
                videoId: "V9kREiAzmvE" 
            }
        ],
        description: "Mein erster Versuch mit Grease Pencil in Blender. Geschmack: Sonnenschein mit Bohnen. Welche eine kleine Anlehnung an die Rocket Beans darstellen soll, aber mit charmanten Hinterteilen."
    },
    {
        title: "Coole Topfpflanzen",
        image: Topfpflanzen,
        description: "In dieser simplen Szene habe ich mit den verschiedenen Modifiern und Effekten herumexperimentiert. Links wurde ein Lichteffekt genutzt und rechts wurden die Blätter verpixelt."
    },
    {
        title: "Lecker Schokokuchen",
        image: Schokokuchen2,
        description: "Hier wurde wieder der Grease-Pencil benutzt, um ein leckeres Stück Schokokuchen zu gestalten. Außerdem habe ich hier mit Outlines herumgespielt, um einen Toon-Look zu erzielen."
    },
    {
        title: "Der Oger",
        media: [
            {
                type: "image",
                src: Oger,
            },
            {
                type: "youtube",
                videoId: "tebHxohfFnI"
            }
        ],
        description: "Hier habe ich einen Kurs von Grant Abbitt gefolgt, um meine Fähigkeiten im Charakterdesign zu verbessern. Das Resultat ist ein stampfender Oger, der mich ein wenig an Shrek erinnert."
    },
    {
        title: "Orao Dust",
        media: [
            {
                type: "image",
                src: Orao,
            },
            {
                type: "image",
                src: OraoSketch
            }
        ],
        description: "Einst der Hauptcharakter meiner Geschichte Westria. Damals hatte ich versucht, ihn in 3D zu modellieren, leider habe ich das Projekt nicht weiterverfolgt. Aber es hat bis dahin Spaß gemacht."
    },
    {
        title: "Der Mecha",
        media: [
            {
                type: "image",
                src: Mecka,
            },
            {
                type: "youtube",
                videoId: "WkC2ECLgoMA"
            }
        ],
        description: "Dieser Mecha gehörte ebenfalls zum Kurs, aus dem auch der Oger stammt. Jedoch habe ich da mit der Beleuchtung und dem Schattenwurf herumexperimentieren können."
    },
    {
        title: "Die kleine Hütte",
        image: LittleShag,
        description: "Eine kleine gemütliche Hütte im Low-Poly-Stil. Jedoch sollte man aufpassen, was in der umliegende Dunkelheit lauert."
    },
    {
        title: "Der Heldenbaum",
        image: HeroTree,
        description: "Ein kleiner Baum inmitten eines dunklen Waldes. Der letzte seiner Art. Das Licht der Abenddämmerung lässt sein Blätterkleid leuchten, wie Feuer."
    },
    {
        title: "Die weite Ebene",
        image: Landscape,
        description: "Eine weitläufige Landschaft mit sanften Hügeln, einer Teil einer Ruine und sehr viel Gras. So viel Gras. Ich habe noch nie soviel Gras in einer Szene gehabt."
    },
    
    {
        title: "Das Kamehaus",
        image: Kamehaus2,
        description: "Ich liebe Animes und mit Dragonball hat alles angefangen. Ich habe mir oft vorgestellt im Haus von Muten Roshi zu leben. Genau deshalb habe ich diese Szene erstellt."
    },
    {
        title: "Der Froschkrieger",
        media: [
            {
                type: "image",
                src: Frog,
            },
            {
                type: "image",
                src: FrogArt
            }
        ],
        description: "Ich folge auf Instagram einem Künstler mit dem Namen Robbiegoldieart. Dieser hatte eine coole Froschfigur erstellt, die ich unbedingt in 3D nachmodelliert Wollte."
    },
    {
        title: "Die erste Tür",
        image: FirstDoor,
        description: "Als der NFT-Hype los ging, wollte mein Bruder unbedingt da mitmachen und mit mir Türen erstellen, die in verschiedene Welten führen. Dies sollte die Anfangstür sein."
    },
    {
        title: "Das fliegende Auto",
        media: [
            {
                type: "image",
                src: FlyingCar,
            },
            {
                type: "youtube",
                videoId: "gbYjRPkMysE"
            }
        ],
        description: "Dies gehörte auch zu einem Blender Kurs, den ich spannend fand. Dabei habe ich aber das Auto komplett neu gestaltet und diesem einem schnittigen Look verpasst. Vorsicht Stein!"
    },
    {
        title: "Die Würfel",
        media: [
            {
                type: "image",
                src: Dice2,
            },
            {
                type: "image",
                src: Dice1
            }
        ],
        description: "Da ich ein Pen & Paper Spieler bin, liebe ich natürlich Würfel in jeder Farbe und Form. Hier habe ich versucht, sie so realistisch wie möglich aussehen zu lassen."
    },
    {
        title: "Die unendliche Armee",
        media: [
            {
                type: "image",
                src: Army,
            },
            {
                type: "youtube",
                videoId: "aeLoxsGNOIU"
            }
        ],
        description: "Eine kleine Armee aus Low-Poly verschiedenen Modellen, die bereit für den Kampf sind. Hier habe ich es mit After Effects geschafft, einen unendlichen Strom dieser Maschinen zu erzeugen."
    },
    {
        title: "Die Murmeln",
        media: [
            {
                type: "image",
                src: Murmeln,
            },
            {
                type: "youtube",
                videoId: "nTdlzHPiMaE" 
            }
        ],
        description: "Dies war eines meiner ersten Projekte in Cinema4D. Ich mag den Glanz der Perlen sehr und fand spannend mit Kraftffeldern zu arbeiten."
    },
    {
        title: "Meine Initialen",
        image: DH,
        description: "Dieses schöne Stück Kunst habe ich in Cinema4D erstellt. Ich habe meine Initialien noch nie so cool gesehen."
    },
    {
        title: "Der Donut",
        image: Donut,
        description: "Die meisten, die mit Blender anfangen, erstellen aus guten Gründen einen Donut. Ich liebe die Waldmeister-Glasur mit den Streuseln so sehr."
    }
];
