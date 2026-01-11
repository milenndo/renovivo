      import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'bg' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  bg: {
    // Navigation
    'nav.home': 'Начало',
    'nav.services': 'Услуги',
    'nav.pricing': 'Цени',
    'nav.portfolio': 'Портфолио',
    'nav.blog': 'Полезно',
    'nav.about': 'За нас',
    'nav.contact': 'Контакти',
    'nav.callUs': 'Обадете се',
    'nav.workingHours': 'Пон - Пет: 08:00 - 18:00',
    
    // Hero
    'hero.badge': 'Цялостни ремонти в София и района',
    'hero.title1': 'РЕМОНТ БЕЗ ХАОС',
    'hero.title2': 'САМО СПОКОЙСТВИЕ',
    'hero.subtitle': 'Без нерви. Без скрити такси. Само резултати.',
    'hero.cta.pricing': 'Вижте цени и оферти',
    'hero.cta.portfolio': 'Преди/След проекти',
    'hero.stats.projects': 'Завършени проекти',
    'hero.stats.recommend': 'Препоръчват нас',
    'hero.stats.warranty': 'Гаранция',
    'hero.scroll': 'Скролирайте',
    
    // Peace of Mind
    'peace.title': '5 причини да спите спокойно, докато ние работим',
    'peace.manager.title': 'Личен Проектен Мениджър',
    'peace.manager.desc': 'Един човек отговаря за целия обект и комуникацията. Край на разваления телефон.',
    'peace.budget.title': 'Фиксиран Бюджет',
    'peace.budget.desc': 'Цената по оферта е крайна. Без скрити такси и изненадващи разходи.',
    'peace.contract.title': 'Договор и Срокове',
    'peace.contract.desc': 'Работим с ясни неустойки при забавяне. Времето ви е ценно.',
    'peace.clean.title': 'Чистота До Ключ',
    'peace.clean.desc': 'Професионално почистване и извозване на отпадъци след края.',
    'peace.warranty.title': 'Писмена Гаранция',
    'peace.warranty.desc': 'Пълна гаранция за всяка извършена работа и материали.',
    
    // Services
    'services.label': 'Услуги',
    'services.title': 'Какво можем да направим за вас',
    'services.subtitle': 'Изберете категория, за да разгледате нашите услуги',
    'services.category.full': 'Цялостни ремонти',
    'services.category.coatings': 'Специализирани покрития',
    'services.category.finishing': 'Подготовка и довършване',
    'services.count': 'услуги',
    'services.learnMore': 'Научете повече',
    'services.viewAll': 'Разгледайте всички услуги',
    
    // Service items
    'service.fullRenovation.title': 'Цялостен Ремонт',
    'service.fullRenovation.desc': 'Пълна трансформация на жилища - от проект до реализация с фиксиран бюджет.',
    'service.bathroom.title': 'Ремонт на Баня',
    'service.bathroom.desc': 'Комплексно изпълнение с хидроизолация и професионален монтаж.',
    'service.kitchen.title': 'Ремонт на Кухня',
    'service.kitchen.desc': 'Цялостна изработка на кухни по поръчка, съобразени с вашето помещение.',
    'service.microcement.title': 'Микроцимент',
    'service.microcement.desc': 'Безфугово покритие за стени и подове с модерен индустриален вид.',
    'service.terrazzo.title': 'Terrazzo',
    'service.terrazzo.desc': 'Класическа елегантност с мраморни фрагменти в съвременно изпълнение.',
    'service.flakeFloor.title': 'Flake Floor',
    'service.flakeFloor.desc': 'Декоративни подове с флейк ефект - издръжливи и естетични.',
    'service.stoneCarpet.title': 'Каменен Килим',
    'service.stoneCarpet.desc': 'Естествена красота от речни камъчета за външни и вътрешни пространства.',
    'service.demolition.title': 'Къртене',
    'service.demolition.desc': 'Професионално къртене и демонтаж с изнасяне на отпадъци.',
    'service.painting.title': 'Шпакловка и боя',
    'service.painting.desc': 'Перфектно гладки стени и безупречно боядисване.',
    'service.flooring.title': 'Настилки',
    'service.flooring.desc': 'Ламинат, винил, паркет и плочки с прецизен монтаж.',
    'service.electrical.title': 'Електро услуги',
    'service.electrical.desc': 'Нови инсталации и ремонт от сертифицирани специалисти.',
    'service.plumbing.title': 'ВиК услуги',
    'service.plumbing.desc': 'Водопровод и канализация с гаранция за качество.',
    
    // About
    'about.label': 'За нас',
    'about.title': 'Вашият надежден партньор за ремонт в София',
    'about.p1': 'Renovivo е вашият партньор за цялостни ремонти в София и района. Със страст към детайлите и стремеж към качество, ние трансформираме вашите идеи в реалност – от първия оглед до последния щрих.',
    'about.p2': 'Нашият екип от тясно специализирани експерти във всяко звено на ремонтните дейности работи координирано, за да гарантира резултати, които надминават вашите очаквания.',
    'about.feature1': 'Тясно специализирани експерти',
    'about.feature2': 'Фокус върху детайла',
    'about.feature3': 'Ясна комуникация',
    'about.feature4': 'Предвидимост на бюджета',
    'about.feature5': 'Спазване на сроковете',
    'about.feature6': 'Разумни цени',
    'about.projects': 'завършени проекта',
    'about.recommend': 'ни препоръчват',
    'about.warranty': 'години гаранция',
    'about.warrantyAll': 'На всички услуги',
    'about.cta': 'Научете повече за нас',
    
    // Why Us
    'whyUs.label': 'Защо Renovivo',
    'whyUs.title': 'Какво ни отличава',
    'whyUs.subtitle': 'Избирайки Renovivo, вие избирате партньор, който се грижи за вашия проект като за свой собствен. Работим основно в София и района.',
    'whyUs.experts.title': 'Специализирани експерти',
    'whyUs.experts.desc': 'Тясно специализирани професионалисти във всяко звено на ремонтните дейности.',
    'whyUs.detail.title': 'Фокус върху детайла',
    'whyUs.detail.desc': 'Координация на целия процес с внимание към всеки детайл от началото до края.',
    'whyUs.communication.title': 'Ясна комуникация',
    'whyUs.communication.desc': 'Един контакт за клиента. Без излишни посредници, директна и прозрачна връзка.',
    'whyUs.budget.title': 'Предвидим бюджет',
    'whyUs.budget.desc': 'Ясно ценообразуване и спазване на договорените срокове без неприятни изненади.',
    'whyUs.location': 'Работим в София и района',
    
    // How We Work
    'howWeWork.title': 'Как работим',
    'howWeWork.subtitle': 'Прозрачен и организиран процес от първия контакт до завършването на проекта',
    'howWeWork.step1.title': 'Оглед и разговор',
    'howWeWork.step1.desc': 'Посещаваме обекта, изслушваме вашите желания и оценяваме обема на работа.',
    'howWeWork.step2.title': 'Предложение и бюджет',
    'howWeWork.step2.desc': 'Изготвяме детайлна оферта с ясни срокове и прозрачно ценообразуване.',
    'howWeWork.step3.title': 'Изпълнение по график',
    'howWeWork.step3.desc': 'Работим по съгласуван план с редовна комуникация за напредъка.',
    'howWeWork.step4.title': 'Финален преглед и гаранция',
    'howWeWork.step4.desc': 'Приемане на обекта с детайлна проверка и гаранция за извършената работа.',
    
    // CTA
    'cta.title': 'Готови ли сте да започнете?',
    'cta.subtitle': 'Свържете се с нас днес за безплатен оглед и оферта в София и района. Нашият екип е готов да превърне вашите идеи в реалност.',
    'cta.inspection': 'Заяви оглед',
    'cta.inquiry': 'Изпратете запитване',
    
    // Footer
    'footer.description': 'Професионални ремонтни услуги с внимание към всеки детайл. Трансформираме вашите пространства в мечтани домове.',
    'footer.quickLinks': 'Бързи връзки',
    'footer.contacts': 'Контакти',
    'footer.address': 'гр. София, България',
    'footer.copyright': 'Всички права запазени.',
    'footer.cookieSettings': 'Настройки на бисквитките',
    
    // Language
    'lang.switch': 'EN',
    'lang.current': 'BG',
    
    // Projects section
    'projects.label': 'Портфолио',
    'projects.title': 'Нашите проекти',
    'projects.viewAll': 'Вижте всички проекти',
    
    // Blog preview
    'blog.label': 'Блог',
    'blog.title': 'Полезни статии',
    'blog.viewAll': 'Вижте всички статии',
    
    // Blog Page
    'blog.page.title': 'Полезно',
    'blog.page.subtitle': 'Полезни съвети за вашия ремонт',
    'blog.page.description': 'Статии, наръчници и практични съвети от нашите експерти. Научете как да планирате успешен ремонт и да избегнете често допусканите грешки.',
    'blog.page.cta.title': 'Нуждаете се от професионална консултация?',
    'blog.page.cta.description': 'Екипът на Renovivo е на разположение за безплатен оглед и оферта. Обадете се днес!',
    'blog.page.empty': 'Все още няма публикувани статии.',
    'blog.page.min': 'мин.',
    
    // Portfolio Page
    'portfolio.page.title': 'Портфолио',
    'portfolio.page.subtitle': 'Нашите проекти',
    'portfolio.page.description': 'Разгледайте някои от нашите завършени проекти и се убедете в качеството на нашата работа.',
    'portfolio.page.noResults': 'Няма намерени проекти в тази категория.',
    'portfolio.filter.all': 'Всички',
    
    // Services Page
    'services.page.title': 'Услуги',
    'services.page.catalog': 'Каталог услуги',
    'services.page.allServices': 'Всички услуги',
    'services.page.description': 'Разгледайте пълния спектър от ремонтни решения - от довършителни работи до специализирани иновативни покрития.',
    'services.page.cta.title': 'Имате въпроси?',
    'services.page.cta.description': 'Свържете се с нас за безплатна консултация и индивидуална оферта за вашия проект.',
    
    // Services Categories
    'services.cat.finishing': 'Цялостни довършителни работи',
    'services.cat.finishing.desc': 'Ново строителство - готови към обитаване',
    'services.cat.renovation': 'Основен ремонт',
    'services.cat.renovation.desc': 'Пълна реновация на жилища "Старо строителство"',
    'services.cat.partial': 'Частични ремонти',
    'services.cat.partial.desc': 'Целеви решения за отделни помещения и зони',
    'services.cat.innovation': 'Специални иновативни решения',
    'services.cat.innovation.desc': 'Висок клас финишни покрития и умни технологии',
    
    // Service items
    'services.item.finishingWorks': 'Довършителни работи',
    'services.item.finishingWorks.desc': 'Пълен цикъл от грубо строителство до завършен дом',
    'services.item.drywall': 'Сухо строителство',
    'services.item.drywall.desc': 'Гипсокартон, окачени тавани, преградни стени',
    'services.item.furniture': 'Мебели по поръчка',
    'services.item.furniture.desc': 'Изработка по индивидуални размери и специфики',
    'services.item.windows': 'Смяна на дограма',
    'services.item.windows.desc': 'Демонтаж и монтаж на прозорци и врати',
    'services.item.doorsInstall': 'Монтаж на врати',
    'services.item.doorsInstall.desc': 'Интериорни, плъзгащи и входни врати',
    'services.item.apartment': 'Апартамент (ЕПК, панел, тухла)',
    'services.item.apartment.desc': 'Специализиран подход според типа конструкция',
    'services.item.house': 'Къща',
    'services.item.house.desc': 'Цялостна реновация на еднофамилни къщи',
    'services.item.bathroom': 'Ремонт на баня',
    'services.item.bathroom.desc': 'Модернизиране на санитарни помещения',
    'services.item.kitchen': 'Ремонт на кухня',
    'services.item.kitchen.desc': 'Функционални и стилни кухненски пространства',
    'services.item.livingRoom': 'Ремонт на всекидневна',
    'services.item.livingRoom.desc': 'Трансформация на жилищни зони',
    'services.item.quickRefresh': 'Бърз освежителен ремонт',
    'services.item.quickRefresh.desc': 'До 1 седмица - боядисване, настилки, малки корекции',
    'services.item.microcement': 'Микроцимент',
    'services.item.microcement.desc': 'Безшевно покритие с минималистичен дизайн',
    'services.item.terrazzo': 'Terrazzo',
    'services.item.terrazzo.desc': 'Класически мозаечни подове с модерен облик',
    'services.item.flakeFloor': 'Flake Floor',
    'services.item.flakeFloor.desc': 'Декоративна и устойчива настилка',
    'services.item.stoneCarpet': 'Каменен килим',
    'services.item.stoneCarpet.desc': 'За външни зони и басейни',
    'services.item.smart': 'Смарт инсталации 2025',
    'services.item.smart.desc': 'Умен дом с Matter протокол и автоматизация',
    
    // Pricing Page
    'pricing.page.title': 'Ремонт на апартамент без изненади, с ясен бюджет и контрол',
    'pricing.page.subtitle': 'В Renovivo не продаваме „шпакловка и боя", а спокойствие, предвидимост и напълно завършен резултат в договорения срок.',
    'pricing.page.cta': 'Заяви оглед и консултация',
    'pricing.page.control.title': 'Цени, които дават контрол – не илюзия',
    'pricing.page.control.item1': 'купува липса на грешки и преработки',
    'pricing.page.control.item2': 'купува липса на неприятни изненади',
    'pricing.page.control.item3': 'купува спокойствие, без да трябва да разбира от строителство',
    'pricing.page.control.item4': 'купува предвидим резултат и поет ангажимент за срок',
    'pricing.page.packages': 'Пакети и ценови диапазони',
    'pricing.package.start': 'Renovivo Start',
    'pricing.package.start.desc': 'частичен ремонт / освежаване',
    'pricing.package.comfort': 'Renovivo Comfort',
    'pricing.package.comfort.desc': 'цялостен ремонт на апартамент',
    'pricing.package.premium': 'Renovivo Premium',
    'pricing.package.premium.desc': 'пълна отговорност и инвеститорски контрол',
    'pricing.package.popular': 'Най-популярен',
    'pricing.package.learnMore': 'Научи повече',
    'pricing.package.noMaterials': '(без материали)',
    'pricing.page.vatNote': '* Цените са без ДДС. Курс: 1 EUR = 1.95583 лв. (фиксинг на БНБ)',
    'pricing.page.process': 'Как формираме цената',
    'pricing.process.step1.title': 'Оглед и разговор',
    'pricing.process.step1.desc': 'посещаваме обекта и говорим за целите, сроковете и бюджета ти',
    'pricing.process.step2.title': 'Дефиниране на обхват',
    'pricing.process.step2.desc': 'уточняваме кои помещения и дейности влизат в ремонта',
    'pricing.process.step3.title': 'Оферта и пакет',
    'pricing.process.step3.desc': 'предлагаме най-подходящия пакет и изчисляваме конкретна цена',
    'pricing.process.step4.title': 'Договор и график',
    'pricing.process.step4.desc': 'подписваме договор с фиксирана цена и ориентировъчен график',
    'pricing.process.step5.title': 'Контрол и отчетност',
    'pricing.process.step5.desc': 'получаваш регулярни ъпдейти и снимки. Финален оглед и протокол',
    'pricing.page.exactPrice': 'Искате точна цена, а не ориентир?',
    'pricing.page.exactPrice.desc': 'Една среща и оглед са достатъчни, за да превърнем диапазоните в конкретна оферта с ясен обхват, срок и очакван резултат.',
    'pricing.page.bookInspection': 'Заяви оглед',
    'pricing.page.freeConsultation': 'Безплатна консултация',
    
    // Contact Page
    'contact.page.title': 'Контакти',
    'contact.page.subtitle': 'Свържете се с нас',
    'contact.page.description': 'Имате въпроси или искате да започнете проект? Ние сме тук, за да помогнем.',
    'contact.info.title': 'Контактна информация',
    'contact.info.phone': 'Телефон',
    'contact.info.email': 'Имейл',
    'contact.info.address': 'Адрес',
    'contact.info.addressValue': 'гр. София, България',
    'contact.info.hours': 'Работно време',
    'contact.info.hoursValue': 'Пон - Пет: 08:00 - 18:00',
    'contact.cta.title': 'Обадете се директно',
    'contact.cta.desc': 'За бърза връзка и консултация',
    'contact.form.title': 'Изпратете запитване',
    'contact.form.desc': 'Попълнете формата и ще се свържем с вас в рамките на 24 часа.',
    'contact.form.name': 'Вашето име',
    'contact.form.email': 'Имейл адрес',
    'contact.form.phone': 'Телефонен номер',
    'contact.form.message': 'Вашето съобщение',
    'contact.form.namePlaceholder': 'Иван Иванов',
    'contact.form.emailPlaceholder': 'ivan@example.com',
    'contact.form.phonePlaceholder': '+359 89 371 29 19',
    'contact.form.messagePlaceholder': 'Опишете накратко вашия проект...',
    'contact.form.submit': 'Изпратете съобщение',
    'contact.form.sending': 'Изпращане...',
    'contact.form.success': 'Съобщението е изпратено!',
    'contact.form.successDesc': 'Ще се свържем с вас възможно най-скоро.',
    'contact.form.error': 'Грешка при изпращане',
    'contact.form.errorDesc': 'Моля, опитайте отново или се свържете по телефона.',
    'contact.required': '*',
    
    // Breadcrumbs
    'breadcrumb.home': 'Начало',
    
    // Testimonials
'testimonials.title': 'Отзиви от клиенти',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.pricing': 'Pricing',
    'nav.portfolio': 'Portfolio',
    'nav.blog': 'Blog',
    'nav.about': 'About Us',
    'nav.contact': 'Contact',
    'nav.callUs': 'Call Us',
    'nav.workingHours': 'Mon - Fri: 08:00 - 18:00',
    
    // Hero
    'hero.badge': 'Complete renovations in Sofia and the region',
    'hero.title1': 'RENOVATION WITHOUT CHAOS',
    'hero.title2': 'JUST PEACE OF MIND',
    'hero.subtitle': 'No stress. No hidden fees. Just results.',
    'hero.cta.pricing': 'View prices & offers',
    'hero.cta.portfolio': 'Before/After projects',
    'hero.stats.projects': 'Completed projects',
    'hero.stats.recommend': 'Recommend us',
    'hero.stats.warranty': 'Warranty',
    'hero.scroll': 'Scroll',
    
    // Peace of Mind
    'peace.title': '5 reasons to sleep peacefully while we work',
    'peace.manager.title': 'Personal Project Manager',
    'peace.manager.desc': 'One person responsible for the entire site and communication. No more miscommunication.',
    'peace.budget.title': 'Fixed Budget',
    'peace.budget.desc': 'The quoted price is final. No hidden fees or surprise costs.',
    'peace.contract.title': 'Contract & Deadlines',
    'peace.contract.desc': 'We work with clear penalties for delays. Your time is valuable.',
    'peace.clean.title': 'Turnkey Cleanliness',
    'peace.clean.desc': 'Professional cleaning and waste removal after completion.',
    'peace.warranty.title': 'Written Warranty',
    'peace.warranty.desc': 'Full warranty for all work performed and materials.',
    
    // Services
    'services.label': 'Services',
    'services.title': 'What we can do for you',
    'services.subtitle': 'Select a category to browse our services',
    'services.category.full': 'Complete Renovations',
    'services.category.coatings': 'Specialized Coatings',
    'services.category.finishing': 'Preparation & Finishing',
    'services.count': 'services',
    'services.learnMore': 'Learn more',
    'services.viewAll': 'View all services',
    
    // Service items
    'service.fullRenovation.title': 'Complete Renovation',
    'service.fullRenovation.desc': 'Full home transformation - from design to completion with a fixed budget.',
    'service.bathroom.title': 'Bathroom Renovation',
    'service.bathroom.desc': 'Complete execution with waterproofing and professional installation.',
    'service.kitchen.title': 'Kitchen Renovation',
    'service.kitchen.desc': 'Custom kitchen design and installation tailored to your space.',
    'service.microcement.title': 'Microcement',
    'service.microcement.desc': 'Seamless coating for walls and floors with modern industrial look.',
    'service.terrazzo.title': 'Terrazzo',
    'service.terrazzo.desc': 'Classic elegance with marble fragments in contemporary execution.',
    'service.flakeFloor.title': 'Flake Floor',
    'service.flakeFloor.desc': 'Decorative floors with flake effect - durable and aesthetic.',
    'service.stoneCarpet.title': 'Stone Carpet',
    'service.stoneCarpet.desc': 'Natural beauty of river pebbles for outdoor and indoor spaces.',
    'service.demolition.title': 'Demolition',
    'service.demolition.desc': 'Professional demolition and dismantling with waste removal.',
    'service.painting.title': 'Plastering & Painting',
    'service.painting.desc': 'Perfectly smooth walls and flawless painting.',
    'service.flooring.title': 'Flooring',
    'service.flooring.desc': 'Laminate, vinyl, parquet and tiles with precise installation.',
    'service.electrical.title': 'Electrical Services',
    'service.electrical.desc': 'New installations and repairs by certified specialists.',
    'service.plumbing.title': 'Plumbing Services',
    'service.plumbing.desc': 'Water supply and sewage with quality guarantee.',
    
    // About
    'about.label': 'About Us',
    'about.title': 'Your reliable renovation partner in Sofia',
    'about.p1': 'Renovivo is your partner for complete renovations in Sofia and the region. With a passion for details and a commitment to quality, we transform your ideas into reality – from the first inspection to the final touch.',
    'about.p2': 'Our team of highly specialized experts in every area of renovation works in coordination to guarantee results that exceed your expectations.',
    'about.feature1': 'Highly specialized experts',
    'about.feature2': 'Focus on detail',
    'about.feature3': 'Clear communication',
    'about.feature4': 'Budget predictability',
    'about.feature5': 'Meeting deadlines',
    'about.feature6': 'Reasonable prices',
    'about.projects': 'completed projects',
    'about.recommend': 'recommend us',
    'about.warranty': 'years warranty',
    'about.warrantyAll': 'On all services',
    'about.cta': 'Learn more about us',
    
    // Why Us
    'whyUs.label': 'Why Renovivo',
    'whyUs.title': 'What sets us apart',
    'whyUs.subtitle': 'By choosing Renovivo, you choose a partner who cares for your project as their own. We work mainly in Sofia and the region.',
    'whyUs.experts.title': 'Specialized Experts',
    'whyUs.experts.desc': 'Highly specialized professionals in every area of renovation activities.',
    'whyUs.detail.title': 'Focus on Detail',
    'whyUs.detail.desc': 'Coordination of the entire process with attention to every detail from start to finish.',
    'whyUs.communication.title': 'Clear Communication',
    'whyUs.communication.desc': 'One contact for the client. No unnecessary intermediaries, direct and transparent connection.',
    'whyUs.budget.title': 'Predictable Budget',
    'whyUs.budget.desc': 'Clear pricing and adherence to agreed deadlines without unpleasant surprises.',
    'whyUs.location': 'We work in Sofia and the region',
    
    // How We Work
    'howWeWork.title': 'How we work',
    'howWeWork.subtitle': 'Transparent and organized process from first contact to project completion',
    'howWeWork.step1.title': 'Inspection & Consultation',
    'howWeWork.step1.desc': 'We visit the site, listen to your wishes and assess the scope of work.',
    'howWeWork.step2.title': 'Proposal & Budget',
    'howWeWork.step2.desc': 'We prepare a detailed offer with clear deadlines and transparent pricing.',
    'howWeWork.step3.title': 'Execution on Schedule',
    'howWeWork.step3.desc': 'We work according to an agreed plan with regular progress updates.',
    'howWeWork.step4.title': 'Final Review & Warranty',
    'howWeWork.step4.desc': 'Acceptance of the site with detailed inspection and warranty for the work done.',
    
    // CTA
    'cta.title': 'Ready to get started?',
    'cta.subtitle': 'Contact us today for a free inspection and quote in Sofia and the region. Our team is ready to turn your ideas into reality.',
    'cta.inspection': 'Request inspection',
    'cta.inquiry': 'Send inquiry',
    
    // Footer
    'footer.description': 'Professional renovation services with attention to every detail. We transform your spaces into dream homes.',
    'footer.quickLinks': 'Quick Links',
    'footer.contacts': 'Contacts',
    'footer.address': 'Sofia, Bulgaria',
    'footer.copyright': 'All rights reserved.',
    'footer.cookieSettings': 'Cookie Settings',
    
    // Language
    'lang.switch': 'BG',
    'lang.current': 'EN',
    
    // Projects section
    'projects.label': 'Portfolio',
    'projects.title': 'Our Projects',
    'projects.viewAll': 'View all projects',
    
    // Blog preview
    'blog.label': 'Blog',
    'blog.title': 'Helpful Articles',
    'blog.viewAll': 'View all articles',
    
    // Blog Page
    'blog.page.title': 'Useful Tips',
    'blog.page.subtitle': 'Helpful tips for your renovation',
    'blog.page.description': 'Articles, guides and practical tips from our experts. Learn how to plan a successful renovation and avoid common mistakes.',
    'blog.page.cta.title': 'Need professional advice?',
    'blog.page.cta.description': 'The Renovivo team is available for a free inspection and quote. Call us today!',
    'blog.page.empty': 'No articles published yet.',
    'blog.page.min': 'min.',
    
    // Portfolio Page
    'portfolio.page.title': 'Portfolio',
    'portfolio.page.subtitle': 'Our Projects',
    'portfolio.page.description': 'Browse some of our completed projects and see the quality of our work.',
    'portfolio.page.noResults': 'No projects found in this category.',
    'portfolio.filter.all': 'All',
    
    // Services Page
    'services.page.title': 'Services',
    'services.page.catalog': 'Service Catalog',
    'services.page.allServices': 'All Services',
    'services.page.description': 'Explore our full range of renovation solutions - from finishing works to specialized innovative coatings.',
    'services.page.cta.title': 'Have questions?',
    'services.page.cta.description': 'Contact us for a free consultation and personalized quote for your project.',
    
    // Services Categories
    'services.cat.finishing': 'Complete Finishing Works',
    'services.cat.finishing.desc': 'New construction - ready to move in',
    'services.cat.renovation': 'Major Renovation',
    'services.cat.renovation.desc': 'Full renovation of "Old construction" homes',
    'services.cat.partial': 'Partial Renovations',
    'services.cat.partial.desc': 'Targeted solutions for individual rooms and areas',
    'services.cat.innovation': 'Special Innovative Solutions',
    'services.cat.innovation.desc': 'High-end finishes and smart technologies',
    
    // Service items
    'services.item.finishingWorks': 'Finishing Works',
    'services.item.finishingWorks.desc': 'Full cycle from rough construction to finished home',
    'services.item.drywall': 'Drywall Construction',
    'services.item.drywall.desc': 'Drywall, suspended ceilings, partition walls',
    'services.item.furniture': 'Custom Furniture',
    'services.item.furniture.desc': 'Made to individual sizes and specifications',
    'services.item.windows': 'Window Replacement',
    'services.item.windows.desc': 'Removal and installation of windows and doors',
    'services.item.doorsInstall': 'Door Installation',
    'services.item.doorsInstall.desc': 'Interior, sliding and entrance doors',
    'services.item.apartment': 'Apartment (Panel, Brick)',
    'services.item.apartment.desc': 'Specialized approach based on construction type',
    'services.item.house': 'House',
    'services.item.house.desc': 'Complete renovation of single-family homes',
    'services.item.bathroom': 'Bathroom Renovation',
    'services.item.bathroom.desc': 'Modernization of sanitary facilities',
    'services.item.kitchen': 'Kitchen Renovation',
    'services.item.kitchen.desc': 'Functional and stylish kitchen spaces',
    'services.item.livingRoom': 'Living Room Renovation',
    'services.item.livingRoom.desc': 'Transformation of living areas',
    'services.item.quickRefresh': 'Quick Refresh',
    'services.item.quickRefresh.desc': 'Up to 1 week - painting, flooring, minor fixes',
    'services.item.microcement': 'Microcement',
    'services.item.microcement.desc': 'Seamless coating with minimalist design',
    'services.item.terrazzo': 'Terrazzo',
    'services.item.terrazzo.desc': 'Classic mosaic floors with modern look',
    'services.item.flakeFloor': 'Flake Floor',
    'services.item.flakeFloor.desc': 'Decorative and durable flooring',
    'services.item.stoneCarpet': 'Stone Carpet',
    'services.item.stoneCarpet.desc': 'For outdoor areas and pools',
    'services.item.smart': 'Smart Installations 2025',
    'services.item.smart.desc': 'Smart home with Matter protocol and automation',
    
    // Pricing Page
    'pricing.page.title': 'Apartment renovation without surprises, with clear budget and control',
    'pricing.page.subtitle': 'At Renovivo we don\'t sell "plastering and paint", but peace of mind, predictability and a fully finished result within the agreed timeframe.',
    'pricing.page.cta': 'Request inspection and consultation',
    'pricing.page.control.title': 'Prices that give control – not illusion',
    'pricing.page.control.item1': 'buys absence of mistakes and rework',
    'pricing.page.control.item2': 'buys absence of unpleasant surprises',
    'pricing.page.control.item3': 'buys peace of mind without needing to understand construction',
    'pricing.page.control.item4': 'buys predictable results and commitment to deadlines',
    'pricing.page.packages': 'Packages and price ranges',
    'pricing.package.start': 'Renovivo Start',
    'pricing.package.start.desc': 'partial renovation / refresh',
    'pricing.package.comfort': 'Renovivo Comfort',
    'pricing.package.comfort.desc': 'complete apartment renovation',
    'pricing.package.premium': 'Renovivo Premium',
    'pricing.package.premium.desc': 'full responsibility and investor control',
    'pricing.package.popular': 'Most Popular',
    'pricing.package.learnMore': 'Learn more',
    'pricing.package.noMaterials': '(without materials)',
    'pricing.page.vatNote': '* Prices are without VAT. Rate: 1 EUR = 1.95583 BGN (BNB fixing)',
    'pricing.page.process': 'How we form the price',
    'pricing.process.step1.title': 'Inspection and conversation',
    'pricing.process.step1.desc': 'we visit the site and discuss your goals, deadlines and budget',
    'pricing.process.step2.title': 'Defining scope',
    'pricing.process.step2.desc': 'we specify which rooms and activities are included in the renovation',
    'pricing.process.step3.title': 'Quote and package',
    'pricing.process.step3.desc': 'we offer the most suitable package and calculate a specific price',
    'pricing.process.step4.title': 'Contract and schedule',
    'pricing.process.step4.desc': 'we sign a contract with fixed price and indicative schedule',
    'pricing.process.step5.title': 'Control and reporting',
    'pricing.process.step5.desc': 'you receive regular updates and photos. Final inspection and protocol',
    'pricing.page.exactPrice': 'Want an exact price, not a range?',
    'pricing.page.exactPrice.desc': 'One meeting and inspection are enough to turn the ranges into a specific offer with clear scope, deadline and expected result.',
    'pricing.page.bookInspection': 'Request inspection',
    'pricing.page.freeConsultation': 'Free consultation',
    
    // Contact Page
    'contact.page.title': 'Contact',
    'contact.page.subtitle': 'Get in touch',
    'contact.page.description': 'Have questions or want to start a project? We are here to help.',
    'contact.info.title': 'Contact Information',
    'contact.info.phone': 'Phone',
    'contact.info.email': 'Email',
    'contact.info.address': 'Address',
    'contact.info.addressValue': 'Sofia, Bulgaria',
    'contact.info.hours': 'Working Hours',
    'contact.info.hoursValue': 'Mon - Fri: 08:00 - 18:00',
    'contact.cta.title': 'Call us directly',
    'contact.cta.desc': 'For quick contact and consultation',
    'contact.form.title': 'Send an inquiry',
    'contact.form.desc': 'Fill out the form and we will contact you within 24 hours.',
    'contact.form.name': 'Your name',
    'contact.form.email': 'Email address',
    'contact.form.phone': 'Phone number',
    'contact.form.message': 'Your message',
    'contact.form.namePlaceholder': 'John Doe',
    'contact.form.emailPlaceholder': 'john@example.com',
    'contact.form.phonePlaceholder': '+359 89 371 29 19',
    'contact.form.messagePlaceholder': 'Briefly describe your project...',
    'contact.form.submit': 'Send message',
    'contact.form.sending': 'Sending...',
    'contact.form.success': 'Message sent!',
    'contact.form.successDesc': 'We will contact you as soon as possible.',
    'contact.form.error': 'Error sending message',
    'contact.form.errorDesc': 'Please try again or contact us by phone.',
    'contact.required': '*',
    
    // Breadcrumbs
    'breadcrumb.home': 'Home',
    
    // Testimonials
'testimonials.title': 'Client Testimonials',
    
    // Pricing
    'pricing.title': 'Our Pricing',
    'pricing.subtitle': 'Transparent pricing tailored to your renovation needs',
    'pricing.start': 'Start',
    'pricing.comfort': 'Comfort',
    'pricing.premium': 'Premium',
    'pricing.from': 'From',
    'pricing.m2': 'per m²',
    'pricing.features': 'This package includes',
    'pricing.select': 'Select Package',
    'pricing.popular': 'Most Popular',
    'pricing.bestValue': 'Best Value',
    'pricing.consultation': 'Free consultation included',
    'pricing.guarantee': '5-year warranty',
    'pricing.payment': 'Flexible payment plans available',
    
    // Contact (legacy - use contact.page.* instead)
    'contact.title': 'Get in Touch',
    'contact.subtitle': 'Have questions? We\'d love to hear from you.',
    
    // About Page Extended
    'about.mission.title': 'Our Mission',
    'about.mission.desc': 'We transform living spaces into dream homes with meticulous attention to detail and unwavering commitment to quality.',
    'about.vision.title': 'Our Vision',
    'about.vision.desc': 'To be Sofia\'s most trusted renovation partner, known for excellence, reliability, and exceeding client expectations.',
    'about.values.title': 'Our Values',
    'about.values.integrity': 'Integrity & Transparency',
    'about.values.quality': 'Quality & Expertise',
    'about.values.respect': 'Respect & Professionalism',
    'about.values.innovation': 'Innovation & Continuous Improvement',
    
    // Services Page Extended
    'services.full.details': 'From initial design consultation to final handover, we manage every aspect of your renovation project.',
    'services.full.process': 'Our process includes site assessment, design planning, material selection, and professional execution.',
    'services.bath.features': 'Waterproofing, tiling, fixtures, modern design',
    'services.kitchen.features': 'Custom cabinetry, appliance integration, modern layouts',
    'services.coatings.title': 'Specialized Coatings & Finishes',
    'services.coatings.desc': 'Premium finishes that protect and beautify your surfaces',
    
    // Portfolio/Projects (legacy - use portfolio.page.* instead)
    'portfolio.title': 'Our Completed Projects',
    'portfolio.filter.residential': 'Residential',
    'portfolio.filter.commercial': 'Commercial',
    'portfolio.projectCount': 'projects completed',
    'portfolio.viewProject': 'View Project Details',
    'portfolio.beforeAfter': 'Before & After',
    'portfolio.timeline': 'Timeline',
    'portfolio.budget': 'Project Budget',
    'portfolio.scope': 'Project Scope',
    'portfolio.testimonial': 'Client Testimonial',
    
    // Blog & Articles
    'blog.featured': 'Featured Articles',
    'blog.latestUpdates': 'Latest Tips & Updates',
    'blog.category.design': 'Design Tips',
    'blog.category.maintenance': 'Maintenance',
    'blog.category.trends': 'Trends',
    'blog.category.guide': 'Guides',
    'blog.readMore': 'Read More',
    'blog.readTime': 'min read',
    'blog.author': 'By Renovivo Team',
    'blog.date': 'Published',
    'blog.tags': 'Tags',
    'blog.relatedArticles': 'Related Articles',
    'blog.noArticles': 'No articles found',
    
    // Interior Design
    'interior.title': 'Interior Design Services',
    'interior.subtitle': 'Expert design consultation to bring your vision to life',
    'interior.consultation': '3D Design Consultation',
    'interior.colorScheme': 'Color Scheme Selection',
    'interior.materials': 'Material & Finish Selection',
    'interior.styling': 'Space Planning & Styling',
    'interior.budget': 'Budget-Friendly Options Available',
    'interior.gallery': 'Design Gallery',
    'interior.viewDesign': 'View Full Design',
    
    // Innovative Coatings
    'coatings.microcement.full': 'Microcement - Modern Industrial Aesthetic',
    'coatings.terrazzo.full': 'Terrazzo - Classic Elegance',
    'coatings.flakefloor.full': 'Flake Floor - Durable Beauty',
    'coatings.stoneCarpet.full': 'Stone Carpet - Natural Appeal',
    'coatings.benefits': 'Benefits',
    'coatings.durable': 'Long-lasting durability',
    'coatings.easyClean': 'Easy to clean and maintain',
    'coatings.waterproof': 'Water resistant',
    'coatings.aesthetic': 'Modern aesthetic appeal',
    'coatings.seamless': 'Seamless installation',
    'coatings.warranty': 'Extended warranty coverage',
    
    // Common Actions
    'action.viewMore': 'View More',
    'action.learnMore': 'Learn More',
    'action.getQuote': 'Get Quote',
    'action.bookConsultation': 'Book Consultation',
    'action.contactUs': 'Contact Us',
    'action.download': 'Download',
    'action.share': 'Share',
    'action.filter': 'Filter',
    'action.search': 'Search',
    'action.submit': 'Submit',
    'action.cancel': 'Cancel',
    'action.back': 'Back',
    'action.next': 'Next',
    'action.previous': 'Previous',
    
    // Messages & Responses
    'message.success': 'Success!',
    'message.error': 'Error',
    'message.warning': 'Warning',
    'message.loading': 'Loading...',
    'message.noResults': 'No results found',
    'message.comingSoon': 'Coming Soon',
    'message.underConstruction': 'This page is under construction',
    
    // Meta & SEO
    'meta.description': 'Professional renovation and remodeling services in Sofia, Bulgaria. Complete home renovations with guaranteed quality and fixed budgets.',
    'meta.keywords': 'renovation, remodeling, interior design, Sofia, Bulgaria, microcement, terrazzo, bathroom, kitchen',
    
    // FAQ
    'faq.title': 'Frequently Asked Questions',
    'faq.q1': 'How long does a typical renovation project take?',
    'faq.a1': 'Project duration depends on scope and complexity. A bathroom renovation typically takes 3-5 weeks, while full home renovations can take 2-6 months. We provide detailed timelines during consultation.',
    'faq.q2': 'Do you offer payment plans?',
    'faq.a2': 'Yes, we offer flexible payment plans to accommodate your budget. Typically, we request 30% deposit to begin, with the remaining balance due upon completion.',
    'faq.q3': 'Are your prices fixed or can they change?',
    'faq.a3': 'Our quoted prices are fixed. We guarantee no hidden costs or surprise charges. Everything is detailed in the contract.',
    'faq.q4': 'What warranty do you provide?',
    'faq.a4': 'We provide a 5-year comprehensive warranty on all workmanship and materials. Our warranty covers any defects in materials and installation.',
    'faq.q5': 'Can you work with my existing designer?',
    'faq.a5': 'Absolutely! We work seamlessly with external designers and architects. Collaboration ensures your vision is perfectly executed.',
    'faq.q6': 'How do I get a free consultation?',
    'faq.a6': 'Simply contact us through this website or call us directly. We\'ll schedule a convenient time to visit your property and discuss your project.',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('renovivo-language');
      if (saved === 'bg' || saved === 'en') return saved;
      // Detect browser language
      const browserLang = navigator.language.toLowerCase();
      if (browserLang.startsWith('bg')) return 'bg';
    }
    return 'bg'; // Default to Bulgarian
  });

  useEffect(() => {
    localStorage.setItem('renovivo-language', language);
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export default LanguageContext;

