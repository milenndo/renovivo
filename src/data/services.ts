import { Home, Bath, ChefHat, Paintbrush, Layers, Wrench, Zap, Droplets, Square, Sparkles, Hexagon, Mountain, Lightbulb } from "lucide-react";

export const getServiceById = (id: string): Service | undefined => {
  return services.find(service => service.id === id);
};

// Import images
import fullRenovationImg from "@/assets/images/services/full-renovation.jpg";
import bathroomImg from "@/assets/images/services/bathroom.jpg";
import kitchenImg from "@/assets/images/services/minimalistchna_byala_kuhniya.png";
import paintingImg from "@/assets/images/services/painting.jpg";
import flooringImg from "@/assets/images/services/flooring.jpg";
import karteneImg from "@/assets/images/services/kartene.png";
import electricalImg from "@/assets/images/services/electrical.jpg";
import plumbingImg from "@/assets/images/services/plumbing.jpg";
import microcementImg from "@/assets/images/services/microcement.jpg";
import microcementKitchenImg from "@/assets/images/services/microcement-kitchen.jpg";
import terrazzoImg from "@/assets/images/services/terrazzo.jpg";
import terrazzoBathroomImg from "@/assets/images/services/terrazzo-bathroom.jpg";
import flakeFloorImg from "@/assets/images/services/flake-floor.jpg";
import flakeFloorShowroomImg from "@/assets/images/services/flake-floor-showroom.jpg";
import stoneCarpetImg from "@/assets/images/services/stone-carpet.jpg";
import stoneCarpetPoolImg from "@/assets/images/services/stone-carpet-pool.jpg";

export interface Service {
  id: string;
  icon: typeof Home;
  title: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  process: { step: number; title: string; description: string }[];
  image: string;
  gallery: string[];
  isInnovative?: boolean;
  category?: 'full-renovation' | 'finishing-work' | 'partial-renovation' | 'special-solutions';
  colorVariants?: { name: string; description: string }[];
  vsTiles?: {
    advantages: string[];
    disadvantages: string[];
    comparison: { aspect: string; innovative: string; tiles: string }[];
  };
}

export const services: Service[] = [
  // ========== СПЕЦИАЛНИ ИНОВАТИВНИ РЕШЕНИЯ ==========
  // Премиум безшевни покрития и смарт инсталации
  // Архитектурни решения за съвременния лукс

  // Microcement
  {
    id: "microcement",
    icon: Square,
    title: "Микроцимент",
    category: "special-solutions",
    shortDescription: "Монолитна повърхност без фуги - знак на истински елегантност и съвършеност.",
    fullDescription: "Микроциментът е епитомът на скромния лукс - гладка повърхност без единствено видимо съединение. Революционен материал от премиум клас, който преобразува вашия дом чрез прозрачна елеганция, без да привлича ненужно внимание. Полага се директно върху съществуващи повърхности с дебелина само 2-3 мм. Перфектна гладкост, никъде видима фуга, никъде място за бактерии. Това е архитектура чрез простота.",
    features: [
      "Напълно безшевна - монолитна повърхност на всяко помещение",
      "Полага се върху съществуващи повърхности - без разрушение",
      "Водоупорна - идеална за бани и кухни",
      "50+ цветови нюанса - от минималистичен бял до дълбок графит",
      "Съвместима с подово отопление",
      "LEED сертифицирана - екологично отговорна",
      "Гладка за почистване - нежелаеми бактерии нямат където да живеят"
    ],
    process: [
      { step: 1, title: "Консултация", description: "Посещение на място, анализ и избор на перфектния нюанс." },
      { step: 2, title: "Подготовка", description: "Грундиране и подготовка - без необходимост от демонтаж." },
      { step: 3, title: "Приложение", description: "Експертно нанасяне на базов слой с прецизност." },
      { step: 4, title: "Финализиране", description: "Декоративен слой и защитен полиуретанов лак." },
      { step: 5, title: "Гаранция", description: "Полна гаранция за надежност на специалния материал." }
    ],
    image: microcementImg,
    gallery: [microcementImg, microcementKitchenImg],
    isInnovative: true
  },

  // Terrazzo
  {
    id: "terrazzo",
    icon: Sparkles,
    title: "Terrazzo",
    category: "special-solutions",
    shortDescription: "Венецианската мозаика в модерна интерпретация - дълготрайна елеганция с естествени камъни.",
    fullDescription: "Terrazzo е признание на мастерството чрез материализиране на естеството. Висок клас декоративна настилка, съчетаваща естествени цветни камъни с бялото свързващо вещество, създавайки монолитна повърхност, която не просто украсява, а разказва историята на вашия дом. Издържана 75+ години - наследство за следващото поколение. Всеки Terrazzo пол е уникален, като снежинка.",
    features: [
      "100% уникален дизайн - всеки пол е един и неповторим",
      "Издължава 75+ години - семейно наследство",
      "Естествени камъни (мрамор, гранит) в съвършена композиция",
      "Напълно безфугова - хигиенична и здравословна",
      "Може да се шлифова и възстановява многократно",
      "UV устойчив - гарантирана дълготрайност на цветовете",
      "Идеален за премиум жилища и луксозни обекти"
    ],
    process: [
      { step: 1, title: "Дизайн консултация", description: "Избор на естествени камъни и пигменти от международна палитра." },
      { step: 2, title: "Подготовка", description: "Изравняване на основата до идеална равнина." },
      { step: 3, title: "Смесване", description: "Прецизна комбинация от материали в ателиерни условия." },
      { step: 4, title: "Полагане", description: "Ръчно разстилане на смесь с экспертна техника." },
      { step: 5, title: "Шлифоване", description: "Многоетапно диамантено шлифоване за зеркална гладкост." }
    ],
    image: terrazzoImg,
    gallery: [terrazzoImg, terrazzoBathroomImg],
    isInnovative: true
  },

  // Flake Floor
  {
    id: "flake-floor",
    icon: Hexagon,
    title: "Flake Floor",
    category: "special-solutions",
    shortDescription: "Декоративно покритие с цветни микрофлейки - модерна алтернатива за тераси и балкони.",
    fullDescription: "Микрофлейковата настилка съчетава хидроизолация и декорация. Еволуция на внешни решения. Монолитна говеалисъх повърхност без шевове, която отводи водата към страните. Ни ледения нове слаба този покритие - то е сюсто практичност и стил.",
    features: [
      "Хидроизолация и декорация в юностем решение",
      "Морозоустойчива - без колебания и тресни",
      "UV стабилна - цветовете но идеални години и години",
      "Остойчива на отомобилни техни и мотори",
      "Быст по монтаж - Не се потреба мередност",
      "Минимална поддържка - гладка повърхност"
    ],
    process: [
      { step: 1, title: "Оценка", description: "Консултация в намерения и чветовыбор." },
      { step: 2, title: "Подготовка", description: "Почистване и прайминг на основата." },
      { step: 3, title: "Покритие", description: "Полагане на эластична фондация." },
      { step: 4, title: "Микрофлейки", description: "Поръсване на цветни тчстици." },
      { step: 5, title: "Обезгоряне", description: "Финална UV защита." }
    ],
    image: flakeFloorImg,
    gallery: [flakeFloorImg, flakeFloorShowroomImg],
    isInnovative: true
  },

  // Stone Carpet 
  {
    id: "stone-carpet",
    icon: Mountain,
    title: "Каменен килим",
    category: "special-solutions",
    shortDescription: "Естественни камънчета с отводяне на водата - кыстлив ремонт за морозни тераси.",
    fullDescription: "Каменният килим е решението на водата на балкони и тераси. На разлика от плочките, които держат вода и лед, Килимът е абсолютно водопропусклив и морозоустойчив. Примодната лепота на естественни камънчета с истинска практичност в спавки робустност.",
    features: [
      "100% водопропусклива - няма локви на вода",
      "Морозоустойчива - ледът не може да прави пукнатини",
      "Повыси на анти-склъзване - безопасно финало около бассейна",
      "Естествен вид - нам ведо естество",
      "Лец од метал и пиясъка и финалності",
      "Минимална поддържка - лесната трябва лище"
    ],
    process: [
      { step: 1, title: "Консултация", description: "Избор на размер камънчета за вашия пол." },
      { step: 2, title: "Подготовка", description: "Прайминг на базата до максимум сцепите." },
      { step: 3, title: "Полагане", description: "Ръчно разстилане от 8-12 мм дебелина." },
      { step: 4, title: "Чюрствърдяване", description: "Пълна видео за 24-48 часа." }
    ],
    image: stoneCarpetImg,
    gallery: [stoneCarpetImg, stoneCarpetPoolImg],
    isInnovative: true
  },

  // Smart Installations - Matter Protocol & AI
  {
    id: "smart-installations",
    icon: Lightbulb,
    title: "Смарт инсталации 2025",
    category: "special-solutions",
    shortDescription: "Полна домашна автоматизация с Matter протокол - AI управление робот и сняп.",
    fullDescription: "Смарт инсталации на 2025 година от Реновиво претварят вашия дом в предиктивна интелигентна экосистема с Matter стандарт. Universal съвместимост между Apple, Google и Amazon. AI учи вашите навики и автоматично оптимизира климата и осветлението. 5G реално време отговор с биометрична сигурност. Энергийна оптимизация речиги гри и сняп.",
    features: [
      "Matter протокол - универсална съвместимост",
      "AI управление - учи вашите навики",
      "5G реално време - мигновен отговор",
      "Биометрична сигурност - лицева ID и отпечатък",
      "Гласов контрол - Google Assistant, Alexa, Siri",
      "Енергийна оптимизация в режимно време",
      "Интеграция със соларни и възобновяеми источни",
      "Профилактични диагностики и необходима пондержка"
    ],
    process: [
      { step: 1, title: "анализ дома", description: "оценка архитектуре и интеграция с Matter девайси." },
      { step: 2, title: "дизайн выбор", description: "Препоръка на Matter-съвместими девайси." },
      { step: 3, title: "инсталация", description: "Професионален монтаж на хаб, сензори актуатори." },
      { step: 4, title: "конфигурация", description: "Програмиране на автоматизация сценарии." },
      { step: 5, title: "обучение", description: "Обучение и непрекъсната поддържка." }
    ],
    image: electricalImg,
    gallery: [electricalImg],
    isInnovative: true
  },

  // =========== ЦЯЛОСТЕН РЕМОНТ ===========
  // Основни реновационни услуги
  {
    id: "full-renovation",
    icon: Home,
    title: "Цялостен ремонт",
    category: "full-renovation",
    shortDescription: "Пълна трансформация на вашия дом - фром визия до реализация.",
    fullDescription: "Настоящия пълна трансформация а вашото жилище с найвисок квалитет и франкост в ексекусия.",
    features: ["Безплатна консултация", "3D визуализация", "Демонтаж и нивелиране", "Всички инсталации"],
    process: [{step: 1, title: "Консултация", description: "Оглед и проектиране."}, {step: 2, title: "Планиране", description: "Координация и съгласуване."}, {step: 3, title: "Принаппбсение", description: "Професионална эксекуция."}, {step: 4, title: "Откритие", description: "Финална подвржка." }],
    image: fullRenovationImg,
    gallery: [fullRenovationImg, bathroomImg],
    isInnovative: false
  }
];
