import { Home, Bath, ChefHat, Paintbrush, Layers, Wrench, Zap, Droplets, Square, Sparkles, Hexagon, Mountain } from "lucide-react";

// Import images
import fullRenovationImg from "@/assets/images/services/full-renovation.jpg";
import bathroomImg from "@/assets/images/services/bathroom.jpg";
import kitchenImg from "@/assets/images/services/kitchen.jpg";
import paintingImg from "@/assets/images/services/painting.jpg";
import flooringImg from "@/assets/images/services/flooring.jpg";
import electricalImg from "@/assets/images/services/electrical.jpg";
import plumbingImg from "@/assets/images/services/plumbing.jpg";
import smallRepairsImg from "@/assets/images/services/small-repairs.jpg";
import microcementImg from "@/assets/images/services/microcement.jpg";
import terrazzoImg from "@/assets/images/services/terrazzo.jpg";
import flakeFloorImg from "@/assets/images/services/flake-floor.jpg";
import stoneCarpetImg from "@/assets/images/services/stone-carpet.jpg";

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
}

export const services: Service[] = [
  {
    id: "full-renovation",
    icon: Home,
    title: "Цялостен ремонт",
    shortDescription: "Пълна трансформация на вашия дом от проект до реализация с висококачествени материали.",
    fullDescription: "Цялостният ремонт включва пълна трансформация на вашето жилище - от първоначалния проект до финалното почистване. Нашият екип координира всички строително-ремонтни дейности, за да получите мечтания дом без стрес и притеснения.",
    features: ["Безплатен оглед и консултация", "3D визуализация на проекта", "Демонтаж на стари покрития", "Електро и ВиК инсталации", "Шпакловане и боядисване", "Подови настилки", "Монтаж на врати и прозорци", "Финално почистване"],
    process: [
      { step: 1, title: "Консултация", description: "Безплатен оглед и обсъждане на вашите идеи и бюджет." },
      { step: 2, title: "Проектиране", description: "Изготвяне на детайлен план и 3D визуализация." },
      { step: 3, title: "Оферта", description: "Подробна оферта с всички материали и труд." },
      { step: 4, title: "Изпълнение", description: "Професионално изпълнение с ежедневен контрол." },
      { step: 5, title: "Предаване", description: "Финална проверка и почистване." },
    ],
    image: fullRenovationImg,
    gallery: [fullRenovationImg, bathroomImg, kitchenImg],
  },
  {
    id: "bathroom",
    icon: Bath,
    title: "Ремонт на баня",
    shortDescription: "Модерни бани с внимание към всеки детайл - от плочки до сантехника.",
    fullDescription: "Ремонтът на баня изисква специализирани познания и опит. От хидроизолация до монтаж на санитарно оборудване - ние се грижим за всеки детайл, за да получите функционална и красива баня.",
    features: ["Демонтаж на стара баня", "Хидроизолация", "Полагане на плочки", "Монтаж на сантехника", "LED осветление", "Вентилация", "Подово отопление", "Душ кабини и вани"],
    process: [
      { step: 1, title: "Оглед", description: "Оценка на текущото състояние и вашите желания." },
      { step: 2, title: "Планиране", description: "Избор на материали и оборудване." },
      { step: 3, title: "Демонтаж", description: "Премахване на старото оборудване и покрития." },
      { step: 4, title: "Инсталации", description: "ВиК и електро инсталации." },
      { step: 5, title: "Довършване", description: "Плочки, сантехника и финални детайли." },
    ],
    image: bathroomImg,
    gallery: [bathroomImg, plumbingImg, electricalImg],
  },
  {
    id: "kitchen",
    icon: ChefHat,
    title: "Ремонт на кухня",
    shortDescription: "Функционални и стилни кухни, създадени по ваш вкус и нужди.",
    fullDescription: "Кухнята е сърцето на всеки дом. Ние създаваме функционални и красиви кухни, съобразени с вашия начин на живот. От планиране на пространството до монтаж на уреди.",
    features: ["Планиране на пространство", "Монтаж на кухненски мебели", "Каменни плотове", "Гръб от плочки или стъкло", "Електро инсталация", "ВиК инсталация", "Монтаж на електроуреди", "LED осветление"],
    process: [
      { step: 1, title: "Замерване", description: "Точни замери на пространството." },
      { step: 2, title: "Дизайн", description: "3D проект на вашата мечтана кухня." },
      { step: 3, title: "Подготовка", description: "Инсталации и подготовка на стени." },
      { step: 4, title: "Монтаж", description: "Монтаж на мебели и плотове." },
      { step: 5, title: "Завършване", description: "Уреди, осветление и аксесоари." },
    ],
    image: kitchenImg,
    gallery: [kitchenImg, electricalImg, plumbingImg],
  },
  {
    id: "painting",
    icon: Paintbrush,
    title: "Боядисване",
    shortDescription: "Професионално боядисване с качествени бои за дълготраен резултат.",
    fullDescription: "Професионалното боядисване изисква подготовка, качествени материали и опитни ръце. Ние предлагаме всичко това, за да получите перфектен резултат, който да издържи години.",
    features: ["Грундиране", "Шпакловане", "Боядисване с латекс", "Декоративни техники", "Боядисване на дървени повърхности", "Защитни покрития", "Тапетиране", "Почистване след боядисване"],
    process: [
      { step: 1, title: "Подготовка", description: "Защита на мебели и подове." },
      { step: 2, title: "Обработка", description: "Шпакловане и грундиране." },
      { step: 3, title: "Боядисване", description: "Нанасяне на бои в 2-3 слоя." },
      { step: 4, title: "Детайли", description: "Первази, рамки и корнизи." },
      { step: 5, title: "Финализиране", description: "Почистване и проверка." },
    ],
    image: paintingImg,
    gallery: [paintingImg, fullRenovationImg, flooringImg],
  },
  {
    id: "flooring",
    icon: Layers,
    title: "Подови настилки",
    shortDescription: "Ламинат, паркет, теракота - монтаж на всички видове подови покрития.",
    fullDescription: "Подът е основата на всяко помещение. Предлагаме монтаж на всички видове подови настилки - от ламинат и паркет до теракота и винил. Включително изравняване и подготовка.",
    features: ["Изравняване на основа", "Ламинат", "Масивен паркет", "Теракота и гранитогрес", "Винилови настилки", "Мокет", "Первази", "Преходни лайсни"],
    process: [
      { step: 1, title: "Оценка", description: "Проверка на основата и замери." },
      { step: 2, title: "Подготовка", description: "Изравняване и грундиране." },
      { step: 3, title: "Аклиматизация", description: "Престой на материала в помещението." },
      { step: 4, title: "Монтаж", description: "Професионално полагане." },
      { step: 5, title: "Довършване", description: "Первази и преходи." },
    ],
    image: flooringImg,
    gallery: [flooringImg, fullRenovationImg, paintingImg],
  },
  {
    id: "electrical",
    icon: Zap,
    title: "Електро инсталации",
    shortDescription: "Изграждане и ремонт на електрически инсталации от сертифицирани електротехници.",
    fullDescription: "Електрическите инсталации изискват професионален подход и сертифицирани специалисти. Предлагаме пълен спектър електрически услуги с гаранция за безопасност.",
    features: ["Нова електро инсталация", "Ремонт на съществуваща", "Електрически табла", "Контакти и ключове", "LED осветление", "Смарт системи", "Заземяване", "Сертификати"],
    process: [
      { step: 1, title: "Проектиране", description: "Схема на електро инсталацията." },
      { step: 2, title: "Окабеляване", description: "Полагане на кабели." },
      { step: 3, title: "Табло", description: "Монтаж на електрическо табло." },
      { step: 4, title: "Аксесоари", description: "Контакти, ключове, осветление." },
      { step: 5, title: "Тестване", description: "Проверка и сертификат." },
    ],
    image: electricalImg,
    gallery: [electricalImg, fullRenovationImg, kitchenImg],
  },
  {
    id: "plumbing",
    icon: Droplets,
    title: "ВиК инсталации",
    shortDescription: "Водопроводни и канализационни инсталации от опитни специалисти.",
    fullDescription: "ВиК инсталациите са критична част от всеки ремонт. Нашите специалисти изграждат надеждни водопроводни и канализационни системи с качествени материали.",
    features: ["Водопроводни тръби", "Канализация", "Монтаж на сантехника", "Бойлери", "Отоплителни системи", "Подово отопление", "Аварийни ремонти", "Профилактика"],
    process: [
      { step: 1, title: "Анализ", description: "Оценка на съществуващата система." },
      { step: 2, title: "Планиране", description: "Схема на новата инсталация." },
      { step: 3, title: "Демонтаж", description: "Премахване на стари тръби." },
      { step: 4, title: "Монтаж", description: "Полагане на нови тръби." },
      { step: 5, title: "Тестване", description: "Проверка за течове." },
    ],
    image: plumbingImg,
    gallery: [plumbingImg, bathroomImg, kitchenImg],
  },
  {
    id: "small-repairs",
    icon: Wrench,
    title: "Малки ремонти",
    shortDescription: "Бързи и ефективни решения за дребни ремонти и монтажи.",
    fullDescription: "Не всяка задача изисква цялостен ремонт. Предлагаме бързи и ефективни решения за дребни ремонти - от монтаж на рафт до смяна на брава.",
    features: ["Монтаж на врати", "Сглобяване на мебели", "Монтаж на карнизи", "Рафтове и закачалки", "Смяна на брави", "Дребни ВиК ремонти", "Дребни електро ремонти", "Запушени канали"],
    process: [
      { step: 1, title: "Обаждане", description: "Опишете какво ви трябва." },
      { step: 2, title: "Оценка", description: "Бърза ценова оферта." },
      { step: 3, title: "Посещение", description: "Идваме в удобно за вас време." },
      { step: 4, title: "Изпълнение", description: "Бързо и качествено." },
      { step: 5, title: "Готово", description: "Почистваме след себе си." },
    ],
    image: smallRepairsImg,
    gallery: [smallRepairsImg, electricalImg, plumbingImg],
  },
  {
    id: "microcement",
    icon: Square,
    title: "Микроцимент",
    shortDescription: "Иновативно безшевно покритие за стени и подове с индустриален минималистичен вид.",
    fullDescription: "Микроциментът е съвременно декоративно покритие с дебелина 2-3 мм, което се полага директно върху съществуващи повърхности. Създава елегантен безшевен ефект, идеален за модерни интериори. Изключително издръжлив, водоустойчив и лесен за поддръжка.",
    features: ["Безшевна повърхност", "Водоустойчивост", "Приложение върху стени и подове", "Над 50 цветови варианта", "Устойчивост на натоварване", "Съвместимост с подово отопление", "Минимална поддръжка", "Дълготрайност над 20 години"],
    process: [
      { step: 1, title: "Подготовка", description: "Почистване и грундиране на основата." },
      { step: 2, title: "Първи слой", description: "Нанасяне на базов слой микроцимент." },
      { step: 3, title: "Втори слой", description: "Финишен слой за текстура и цвят." },
      { step: 4, title: "Запечатване", description: "Нанасяне на защитен лак." },
      { step: 5, title: "Полиране", description: "Финално полиране за перфектен завършек." },
    ],
    image: microcementImg,
    gallery: [microcementImg, bathroomImg, kitchenImg],
  },
  {
    id: "terrazzo",
    icon: Sparkles,
    title: "Terrazzo",
    shortDescription: "Класическа венецианска техника с модерен прочит - мозаечни подове от мрамор и камък.",
    fullDescription: "Terrazzo е луксозно подово покритие с вековна традиция от Венеция. Съчетава мраморни, гранитни или стъклени парчета в циментова или епоксидна основа. Резултатът е уникален, издръжлив и изключително красив под, който може да се персонализира напълно.",
    features: ["Уникален дизайн за всеки проект", "Безкрайни цветови комбинации", "Изключителна издръжливост", "Еко-приятелски материали", "Лесна поддръжка", "Антиалергичен", "Съвместим с подово отопление", "Дълготрайност над 75 години"],
    process: [
      { step: 1, title: "Дизайн", description: "Избор на камъни, цветове и шарки." },
      { step: 2, title: "Подготовка", description: "Изравняване и грундиране на основата." },
      { step: 3, title: "Полагане", description: "Изливане на смес с декоративни камъни." },
      { step: 4, title: "Шлифоване", description: "Многоетапно шлифоване за гладка повърхност." },
      { step: 5, title: "Полиране", description: "Финално полиране и запечатване." },
    ],
    image: terrazzoImg,
    gallery: [terrazzoImg, flooringImg, fullRenovationImg],
  },
  {
    id: "flake-floor",
    icon: Hexagon,
    title: "Flake Floor",
    shortDescription: "Декоративно епоксидно покритие с флейки - идеално за гаражи, складове и търговски площи.",
    fullDescription: "Flake Floor е високоустойчиво епоксидно подово покритие с декоративни цветни флейки (люспи). Перфектно за гаражи, складове, магазини и индустриални помещения. Комбинира изключителна здравина с атрактивен външен вид и антихлъзгащи свойства.",
    features: ["Екстремна устойчивост на натоварване", "Химическа устойчивост", "Антихлъзгаща повърхност", "Лесно почистване", "UV стабилност", "Богата цветова гама", "Бързо изсъхване", "Гаранция 10+ години"],
    process: [
      { step: 1, title: "Подготовка", description: "Шлайфане и почистване на бетона." },
      { step: 2, title: "Грунд", description: "Нанасяне на епоксиден грунд." },
      { step: 3, title: "Базов слой", description: "Полагане на цветен епоксиден слой." },
      { step: 4, title: "Флейки", description: "Разпръскване на декоративни флейки." },
      { step: 5, title: "Топ слой", description: "Финишно полиуретаново покритие." },
    ],
    image: flakeFloorImg,
    gallery: [flakeFloorImg, fullRenovationImg, electricalImg],
  },
  {
    id: "stone-carpet",
    icon: Mountain,
    title: "Каменен килим",
    shortDescription: "Естествено каменно покритие с отлична дренажна способност за тераси и екстериор.",
    fullDescription: "Каменният килим е декоративно покритие от естествени заоблени камъчета, свързани с прозрачна смола. Създава елегантна, издръжлива и напълно водопропусклива повърхност. Идеален за тераси, балкони, алеи, басейни и входни зони.",
    features: ["Естествен природен вид", "Отлична дренажност", "UV устойчивост", "Морозоустойчивост", "Антихлъзгаща повърхност", "Богата цветова палитра", "Екологично чист", "Минимална поддръжка"],
    process: [
      { step: 1, title: "Подготовка", description: "Почистване и грундиране на основата." },
      { step: 2, title: "Смесване", description: "Смесване на камъчета със смола." },
      { step: 3, title: "Полагане", description: "Разстилане и изравняване на материала." },
      { step: 4, title: "Уплътняване", description: "Валиране за плътна структура." },
      { step: 5, title: "Втвърдяване", description: "Пълно втвърдяване за 24 часа." },
    ],
    image: stoneCarpetImg,
    gallery: [stoneCarpetImg, flooringImg, fullRenovationImg],
  },
];

export const getServiceById = (id: string): Service | undefined => {
  return services.find((service) => service.id === id);
};
