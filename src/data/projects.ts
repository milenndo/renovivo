// Import images - използваме различни снимки за всеки проект
import fullRenovationImg from "@/assets/images/services/full-renovation.jpg";
import bathroomImg from "@/assets/images/services/bathroom.jpg";
import kitchenImg from "@/assets/images/services/minimalistchna_byala_kuhniya.png";
import bedroomImg from "@/assets/images/projects/bedroom.jpg";
import livingRoomImg from "@/assets/images/projects/living-room.jpg";
import flooringImg from "@/assets/images/services/flooring.jpg";
import paintingImg from "@/assets/images/services/painting.jpg";
import livingRoomBeforeImg from "@/assets/images/projects/living-room-before.png";
import livingRoomAfterImg from "@/assets/images/projects/living-room-after.png";
import livingRoomDetailImg from "@/assets/images/projects/living-room-detail.png";
import microcementImg from "@/assets/images/services/microcement.jpg";
import microcementKitchenImg from "@/assets/images/services/microcement-kitchen.jpg";
import terrazzoImg from "@/assets/images/services/terrazzo.jpg";
import terrazzoBathroomImg from "@/assets/images/services/terrazzo-bathroom.jpg";
import electricalImg from "@/assets/images/services/electrical.jpg";
import plumbingImg from "@/assets/images/services/plumbing.jpg";
import karteneImg from "@/assets/images/services/kartene.png";
import flakeFloorImg from "@/assets/images/services/flake-floor.jpg";
import flakeFloorShowroomImg from "@/assets/images/services/flake-floor-showroom.jpg";
import stoneCarpetImg from "@/assets/images/services/stone-carpet.jpg";
import stoneCarpetPoolImg from "@/assets/images/services/stone-carpet-pool.jpg";

export interface Project {
  id: string;
  title: string;
  category: string;
  categoryId: string;
  location: string;
  duration: string;
  area: string;
  description: string;
  challenge: string;
  solution: string;
  mainImage: string;
  gallery: string[];
  features: string[];
  beforeImage?: string;
  afterImage?: string;
  stages?: { title: string; description: string }[];
  // Case Study fields
  result?: {
    summary: string;
    metrics: { label: string; value: string }[];
    clientSatisfaction?: number; // 1-5
  };
  processImages?: { image: string; caption: string }[];
}

export const categories = [
  { id: "all", name: "Всички" },
  { id: "full", name: "Цялостен ремонт" },
  { id: "bathroom", name: "Баня" },
  { id: "kitchen", name: "Кухня" },
  { id: "bedroom", name: "Спалня" },
  { id: "living", name: "Дневна" },
  { id: "innovative", name: "Иновативни покрития" },
];

export const projects: Project[] = [
  // ========== ИНОВАТИВНИ ПОКРИТИЯ ==========
  {
    id: "terrazzo-living-room",
    title: "Terrazzo под в дневна",
    category: "Иновативни покрития",
    categoryId: "innovative",
    location: "София, кв. Витоша",
    duration: "2 седмици",
    area: "45 кв.м.",
    description: "Луксозен Terrazzo под в просторна дневна с естествени камъни в топли тонове. Уникален дизайн, който превръща пода в произведение на изкуството с 75+ години издръжливост.",
    challenge: "Клиентът искаше под, който да бъде централен елемент в интериора и да издържи десетилетия без износване.",
    solution: "Приложихме автентична Terrazzo техника с внимателно подбрани естествени камъни. Многоетапно диамантено шлифоване за огледална гладкост.",
    mainImage: terrazzoImg,
    gallery: [terrazzoImg, terrazzoBathroomImg, livingRoomImg],
    features: ["Естествени камъни", "75+ години издръжливост", "UV устойчивост", "Уникален дизайн", "Огледална гладкост"],
    stages: [
      { title: "Дизайн консултация", description: "Избор на камъни и цветова композиция." },
      { title: "Подготовка", description: "Изравняване на основата до перфектна равнина." },
      { title: "Смесване", description: "Прецизна комбинация от камъни и свързващо вещество." },
      { title: "Полагане", description: "Ръчно разстилане с експертна техника." },
      { title: "Шлифоване", description: "Многоетапно диамантено шлифоване за блясък." }
    ],
    result: {
      summary: "Клиентът получи уникален под, който стана централен елемент в интериора. Подът е лесен за поддръжка и ще издържи поколения.",
      metrics: [
        { label: "Срок", value: "Завършен в срок" },
        { label: "Издръжливост", value: "75+ години" },
        { label: "Поддръжка", value: "Минимална" }
      ],
      clientSatisfaction: 5
    }
  },
  {
    id: "flake-floor-terrace",
    title: "Flake Floor на тераса",
    category: "Иновативни покрития",
    categoryId: "innovative",
    location: "София, кв. Драгалевци",
    duration: "3 дни",
    area: "28 кв.м.",
    description: "Декоративно Flake Floor покритие на открита тераса с хидроизолация и UV защита. Модерно решение, което съчетава естетика с функционалност за външни пространства.",
    challenge: "Терасата имаше проблеми с напукване на старата настилка при замръзване и нужда от хидроизолация.",
    solution: "Приложихме Flake Floor система, която е морозоустойчива и водоотблъскваща. Цветните частици създават атрактивен декоративен ефект.",
    mainImage: flakeFloorImg,
    gallery: [flakeFloorImg, flakeFloorShowroomImg, stoneCarpetImg],
    features: ["Хидроизолация", "Морозоустойчивост", "UV стабилност", "Декоративен ефект", "Бърз монтаж"],
    stages: [
      { title: "Оценка", description: "Консултация и избор на цветова гама." },
      { title: "Подготовка", description: "Почистване и грундиране на основата." },
      { title: "Покритие", description: "Полагане на еластична основа." },
      { title: "Декориране", description: "Поръсване на цветни Flake частици." },
      { title: "Защита", description: "Финална UV защитна обработка." }
    ]
  },
  {
    id: "stone-carpet-pool",
    title: "Каменен килим около басейн",
    category: "Иновативни покрития",
    categoryId: "innovative",
    location: "Бояна, София",
    duration: "5 дни",
    area: "65 кв.м.",
    description: "Каменен килим около частен басейн с противохлъзгаща повърхност и дренаж. Естествени камъчета в бежови тонове, които не се нагряват от слънцето.",
    challenge: "Зоната около басейна беше хлъзгава и водата застояваше, създавайки опасност и дискомфорт.",
    solution: "Приложихме каменен килим с 100% водопропускливост. Противохлъзгащата текстура гарантира безопасност, а естествените камъчета остават хладни.",
    mainImage: stoneCarpetPoolImg,
    gallery: [stoneCarpetPoolImg, stoneCarpetImg, flakeFloorImg],
    features: ["100% водопропускливост", "Противохлъзгаща повърхност", "Морозоустойчивост", "Хладна на допир", "Естествен вид"],
    stages: [
      { title: "Консултация", description: "Избор на размер и цвят на камъчетата." },
      { title: "Подготовка", description: "Осигуряване на дренаж и грундиране." },
      { title: "Полагане", description: "Ръчно разстилане на камъчетата." },
      { title: "Оформяне", description: "Прецизна обработка около борда на басейна." },
      { title: "Втвърдяване", description: "24-48 часа за пълно втвърдяване." }
    ]
  },
  {
    id: "microcement-entire-apartment",
    title: "Микроцимент в целия апартамент",
    category: "Иновативни покрития",
    categoryId: "innovative",
    location: "София, кв. Лозенец",
    duration: "10 дни",
    area: "85 кв.м.",
    description: "Цялостно микроциментово покритие на под и стени в модерен апартамент. Безшевна елегантност в антрацитен цвят, която създава усещане за простор и лукс.",
    challenge: "Клиентът искаше напълно безшевен интериор без традиционни плочки и фуги в целия апартамент.",
    solution: "Приложихме микроцимент върху всички повърхности - подове и частични стени. Единният цвят създава визуална хармония и усещане за повече пространство.",
    mainImage: microcementImg,
    gallery: [microcementImg, microcementKitchenImg, livingRoomAfterImg],
    features: ["Напълно безшевен", "Подове и стени", "Водоустойчив", "Лесна поддръжка", "Модерен вид"],
    stages: [
      { title: "Планиране", description: "Избор на цвят и зони за покритие." },
      { title: "Подготовка", description: "Грундиране на всички повърхности." },
      { title: "Базов слой", description: "Нанасяне на първи слой микроцимент." },
      { title: "Декоративен слой", description: "Финишен слой с избрания цвят." },
      { title: "Защита", description: "Полиуретанов лак за издръжливост." }
    ]
  },
  {
    id: "stone-carpet-balcony",
    title: "Каменен килим на балкон",
    category: "Иновативни покрития",
    categoryId: "innovative",
    location: "Пловдив",
    duration: "2 дни",
    area: "12 кв.м.",
    description: "Каменен килим на балкон с перфектен дренаж и естетичен вид. Решение на проблема с локви и замръзване през зимата.",
    challenge: "Балконът имаше стари плочки, които се напукваха всяка зима и задържаха вода.",
    solution: "Приложихме каменен килим директно върху старите плочки. Водата се оттича моментално, а покритието издържа на екстремни температури.",
    mainImage: stoneCarpetImg,
    gallery: [stoneCarpetImg, stoneCarpetPoolImg, flakeFloorImg],
    features: ["Директно върху стари плочки", "Перфектен дренаж", "Морозоустойчивост", "Естествени камъчета", "Минимална поддръжка"],
    stages: [
      { title: "Оглед", description: "Оценка на състоянието на старите плочки." },
      { title: "Подготовка", description: "Почистване и грундиране." },
      { title: "Полагане", description: "Нанасяне на каменен килим." },
      { title: "Завършване", description: "Оформяне на ръбове и праг." }
    ]
  },

  // ========== ЦЯЛОСТЕН РЕМОНТ ==========
  {
    id: "modern-apartment-sofia",
    title: "Модерен апартамент в София",
    category: "Цялостен ремонт",
    categoryId: "full",
    location: "София, кв. Лозенец",
    duration: "3 месеца",
    area: "120 кв.м.",
    description: "Цялостен ремонт на тристаен апартамент с модерен минималистичен дизайн. Проектът включва пълна подмяна на инсталации, нова баня и кухня, както и преустройство на дневната зона.",
    challenge: "Старият апартамент имаше остаряла планировка с малки затворени стаи. Клиентът искаше отворено пространство със съвременен вид.",
    solution: "Премахнахме ненужни преградни стени, създадохме open-space дневна с кухня и добавихме модерно LED осветление. Използвахме неутрална цветова палитра с дървени акценти.",
    mainImage: fullRenovationImg,
    gallery: [fullRenovationImg, livingRoomImg, kitchenImg, bathroomImg],
    features: ["Open-space дневна", "Нова баня", "Модерна кухня", "LED осветление", "Подово отопление"],
    stages: [
      { title: "Демонтаж", description: "Премахване на стари настилки, плочки и преградни стени. Подготовка за нови инсталации." },
      { title: "Инсталации", description: "Пълна подмяна на ВиК и електроинсталация по нов проект." },
      { title: "Зидария и мазилки", description: "Изграждане на нови стени, шпакловане и грундиране." },
      { title: "Настилки", description: "Полагане на ламиниран паркет и плочки в мокрите помещения." },
      { title: "Довършване", description: "Монтаж на врати, санитария, осветление и финално боядисване." }
    ],
    result: {
      summary: "Трансформирахме остарял апартамент в модерно, светло и функционално жилище. Клиентът получи 40% повече полезна площ благодарение на отворената планировка.",
      metrics: [
        { label: "Срок", value: "Точно 3 месеца" },
        { label: "Бюджет", value: "В рамките" },
        { label: "Допълнителна площ", value: "+40%" }
      ],
      clientSatisfaction: 5
    }
  },
  {
    id: "luxury-marble-bathroom",
    title: "Луксозна баня с мрамор",
    category: "Баня",
    categoryId: "bathroom",
    location: "София, кв. Витоша",
    duration: "3 седмици",
    area: "12 кв.м.",
    description: "Луксозна баня с мраморни плочки, дъждовна душ система и free-standing вана. Проектът включва подово отопление и LED осветление.",
    challenge: "Малко пространство, което трябваше да се превърне в спа-подобно преживяване без да изглежда претрупано.",
    solution: "Използвахме огледала за оптична илюзия за повече пространство, вградени ниши за съхранение и минималистичен дизайн с акцент върху качествените материали.",
    mainImage: terrazzoBathroomImg,
    gallery: [terrazzoBathroomImg, bathroomImg, plumbingImg],
    features: ["Мраморни плочки", "Дъждовен душ", "Free-standing вана", "Подово отопление", "LED огледало"],
    stages: [
      { title: "Демонтаж", description: "Внимателно премахване на стара санитария и облицовки." },
      { title: "Хидроизолация", description: "Многослойна хидроизолация с 10-годишна гаранция." },
      { title: "ВиК инсталация", description: "Нови тръби и подготовка за дъждовен душ и вана." },
      { title: "Облицовка", description: "Прецизно полагане на мраморни плочки с герунг рязане." },
      { title: "Монтаж", description: "Поставяне на санитария, смесители и аксесоари." }
    ]
  },
  {
    id: "minimalist-white-kitchen",
    title: "Минималистична бяла кухня",
    category: "Кухня",
    categoryId: "kitchen",
    location: "София, кв. Младост",
    duration: "2 седмици",
    area: "18 кв.м.",
    description: "Модерна бяла кухня с интегрирани уреди, каменен плот и LED осветление под шкафовете. Функционален дизайн с максимално използване на пространството.",
    challenge: "Клиентът искаше максимално чист и минималистичен вид, но с много място за съхранение.",
    solution: "Проектирахме кухня до тавана с push-to-open механизми без видими дръжки. Интегрирахме всички уреди и добавихме скрито LED осветление.",
    mainImage: kitchenImg,
    gallery: [kitchenImg, microcementKitchenImg, livingRoomImg],
    features: ["Бели фасади без дръжки", "Каменен плот", "Интегрирани уреди", "LED осветление", "Push-to-open"],
    stages: [
      { title: "Замерване", description: "Прецизни измервания и 3D проектиране на кухнята." },
      { title: "Демонтаж", description: "Премахване на стара кухня и подготовка на повърхности." },
      { title: "Инсталации", description: "Преместване на ВиК и електрически точки по проект." },
      { title: "Монтаж", description: "Поставяне на кухненски шкафове и плот." },
      { title: "Финализиране", description: "Вграждане на уреди и настройка на механизми." }
    ]
  },
  {
    id: "cozy-bedroom",
    title: "Уютна спалня с тапициран панел",
    category: "Спалня",
    categoryId: "bedroom",
    location: "София, кв. Борово",
    duration: "10 дни",
    area: "16 кв.м.",
    description: "Уютна спалня с топли тонове, вградено осветление и custom-made гардероб. Акцент върху комфорта и релаксацията.",
    challenge: "Създаване на релаксираща атмосфера в типична панелна спалня с ниски тавани.",
    solution: "Използвахме светли цветове за оптично увеличаване на пространството, добавихме LED ленти за индиректно осветление и тапицирана стена зад леглото.",
    mainImage: bedroomImg,
    gallery: [bedroomImg, flooringImg, paintingImg],
    features: ["Тапицирана стена", "Вграден гардероб", "LED осветление", "Топли тонове", "Паркет"],
    stages: [
      { title: "Планиране", description: "Консултация за цветове, материали и разпределение." },
      { title: "Подготовка", description: "Шпакловане, грундиране и изравняване на стени." },
      { title: "Настилки", description: "Полагане на качествен ламиниран паркет." },
      { title: "Декориране", description: "Монтаж на тапициран панел и вграден гардероб." },
      { title: "Осветление", description: "LED ленти и декоративно осветление." }
    ]
  },
  {
    id: "spacious-living-room",
    title: "Просторна дневна в ново строителство",
    category: "Дневна",
    categoryId: "living",
    location: "София, кв. Изток",
    duration: "3 седмици",
    area: "60 кв.м.",
    description: "Довършителни работи на просторна дневна от 60 кв.м. в ново строителство. Пространството е оформено с елегантна мека мебел в неутрални тонове, акцентна стена с топла дървена текстура и минималистично обзавеждане.",
    challenge: "Ново жилище на шпакловка и замазка, което клиентът искаше да превърне в модерно, светло и уютно пространство за живеене.",
    solution: "Извършихме цялостни довършителни работи – подови настилки, боядисване, електро и ВиК инсталации. Добавихме модерен секционен диван, акцентна стена с дървена текстура и стратегическо осветление.",
    mainImage: livingRoomAfterImg,
    gallery: [livingRoomAfterImg, livingRoomBeforeImg, livingRoomDetailImg],
    features: ["Довършителни работи", "Модерен секционен диван", "Акцентна стена", "Неутрална палитра", "LED осветление", "Качествени подови настилки"],
    beforeImage: livingRoomBeforeImg,
    afterImage: livingRoomAfterImg,
    stages: [
      { title: "Оглед и планиране", description: "Анализ на пространството и изготвяне на план." },
      { title: "Електроинсталация", description: "Полагане на кабели и монтаж на контакти." },
      { title: "Настилки", description: "Полагане на висококачествен ламинат." },
      { title: "Боядисване", description: "Двукратно боядисване с латекс и акцентна стена." },
      { title: "Обзавеждане", description: "Доставка и аранжиране на мебелите." }
    ],
    result: {
      summary: "От празен бетонен скелет до готов за живеене дом само за 3 седмици. Клиентът спести време и нерви с нашето цялостно решение.",
      metrics: [
        { label: "Срок", value: "3 седмици" },
        { label: "Трансформация", value: "100%" },
        { label: "Координация", value: "Едно лице за контакт" }
      ],
      clientSatisfaction: 5
    }
  },
  {
    id: "microcement-bathroom",
    title: "Баня с микроцимент",
    category: "Баня",
    categoryId: "bathroom",
    location: "София, кв. Драгалевци",
    duration: "2 седмици",
    area: "9 кв.м.",
    description: "Модерна баня с микроциментово покритие без фуги. Безшевна елегантност с минималистичен дизайн и лесна поддръжка.",
    challenge: "Клиентът искаше модерен вид без традиционните плочки и проблемите с фугите.",
    solution: "Приложихме микроцимент върху всички повърхности - стени и под. Добавихме вградена ниша за козметика и линеен сифон за чист завършек.",
    mainImage: microcementImg,
    gallery: [microcementImg, terrazzoBathroomImg, bathroomImg],
    features: ["Микроцимент", "Без фуги", "Линеен сифон", "Вградена ниша", "Минималистичен дизайн"],
    stages: [
      { title: "Подготовка", description: "Грундиране и подготовка на основата за микроцимент." },
      { title: "Базов слой", description: "Нанасяне на първи слой микроцимент." },
      { title: "Декоративен слой", description: "Финишен слой с избрания цвят." },
      { title: "Защита", description: "Полиуретанов лак за водоустойчивост." },
      { title: "Монтаж", description: "Поставяне на санитария и аксесоари." }
    ]
  },
  {
    id: "industrial-kitchen",
    title: "Кухня в индустриален стил",
    category: "Кухня",
    categoryId: "kitchen",
    location: "София, кв. Център",
    duration: "3 седмици",
    area: "22 кв.м.",
    description: "Кухня в индустриален стил с открити тухли, метални акценти и дървени елементи. Комбинация от суровост и уют.",
    challenge: "Клиентът искаше автентичен индустриален вид в нова сграда.",
    solution: "Използвахме декоративни тухли, открити метални тръби за осветление и рустик дървен плот. Комбинирахме с модерни уреди за функционалност.",
    mainImage: microcementKitchenImg,
    gallery: [microcementKitchenImg, kitchenImg, electricalImg],
    features: ["Декоративни тухли", "Метални акценти", "Дървен плот", "Индустриално осветление", "Открити елементи"],
    stages: [
      { title: "Концепция", description: "Разработване на индустриалния дизайн." },
      { title: "Подготовка", description: "Монтаж на декоративни тухли и метални елементи." },
      { title: "Инсталации", description: "Електро и ВиК по индустриален стил." },
      { title: "Мебели", description: "Изработка и монтаж на кухненски модули." },
      { title: "Детайли", description: "Добавяне на осветление и декорации." }
    ]
  },
  {
    id: "center-apartment",
    title: "Апартамент в центъра",
    category: "Цялостен ремонт",
    categoryId: "full",
    location: "София, бул. Витоша",
    duration: "4 месеца",
    area: "95 кв.м.",
    description: "Цялостен ремонт на апартамент в стара сграда с запазване на автентични елементи като високи тавани и розетки.",
    challenge: "Комбиниране на модерен комфорт със запазване на историческия характер на сградата.",
    solution: "Реставрирахме оригиналните розетки и первази, добавихме модерни инсталации скрито и използвахме класически цветове с модерни мебели.",
    mainImage: karteneImg,
    gallery: [karteneImg, fullRenovationImg, livingRoomImg],
    features: ["Реставрирани елементи", "Високи тавани", "Модерни инсталации", "Класически стил", "Паркет"],
    stages: [
      { title: "Оценка", description: "Идентифициране на елементи за реставрация." },
      { title: "Демонтаж", description: "Внимателно премахване със запазване на ценни детайли." },
      { title: "Реставрация", description: "Възстановяване на розетки, первази и паркет." },
      { title: "Инсталации", description: "Скрито полагане на нови ВиК и ел. инсталации." },
      { title: "Довършване", description: "Боядисване и обзавеждане в класически стил." }
    ]
  },
  {
    id: "modern-bedroom",
    title: "Модерна спалня с walk-in гардероб",
    category: "Спалня",
    categoryId: "bedroom",
    location: "Варна",
    duration: "12 дни",
    area: "20 кв.м.",
    description: "Модерна спалня с функционално осветление, walk-in гардероб и минималистичен дизайн в неутрални тонове.",
    challenge: "Създаване на пълноценен walk-in гардероб в спалня със стандартни размери.",
    solution: "Проектирахме компактен, но функционален walk-in гардероб с плъзгащи се врати и оптимизирахме останалото пространство.",
    mainImage: livingRoomImg,
    gallery: [livingRoomImg, bedroomImg, flooringImg],
    features: ["Walk-in гардероб", "Плъзгащи врати", "LED осветление", "Минималистичен дизайн", "Неутрални тонове"],
    stages: [
      { title: "Проектиране", description: "3D визуализация на гардероба и спалнята." },
      { title: "Конструкция", description: "Изграждане на преградна стена за гардероба." },
      { title: "Настилки", description: "Полагане на еднакъв паркет в двете зони." },
      { title: "Мебели", description: "Изработка и монтаж на гардеробна система." },
      { title: "Финализиране", description: "Осветление, врати и аксесоари." }
    ]
  },
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find((project) => project.id === id);
};
