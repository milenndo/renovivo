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
}

export const categories = [
  { id: "all", name: "Всички" },
  { id: "full", name: "Цялостен ремонт" },
  { id: "bathroom", name: "Баня" },
  { id: "kitchen", name: "Кухня" },
  { id: "bedroom", name: "Спалня" },
  { id: "living", name: "Дневна" },
];

export const projects: Project[] = [
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
    ]
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
    ]
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
