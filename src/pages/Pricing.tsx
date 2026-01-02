import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Pricing = () => {
  return (
    <>
      <Helmet>
        <title>Цени за ремонт | Renovivo</title>
      </Helmet>
      <Layout>
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Ремонт на апартамент без изненади, с ясен бюджет и контрол
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                В Renovivo не продаваме „шпакловка и боя", а спокойствие, предвидимост и напълно завършен резултат в договорения срок.
              </p>
              <Button size="lg" asChild>
                <a href="/contact">Заяви оглед и консултация</a>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container-custom max-w-4xl">
            <h2 className="text-3xl font-bold mb-6 text-center">Цени, които дават контрол – не илюзия</h2>
            <div className="bg-gray-50 rounded-lg p-8">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-primary mr-3 mt-0.5" />
                  <span>купува <strong>липса</strong> на грешки и преработки</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-primary mr-3 mt-0.5" />
                  <span>купува липса на неприятни изненади</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-primary mr-3 mt-0.5" />
                  <span>купува спокойствие, без да трябва да разбира от строителство</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-primary mr-3 mt-0.5" />
                  <span>купува предвидим резултат и поет ангажимент за срок</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <h2 className="text-3xl font-bold mb-12 text-center">Пакети и ценови диапазони</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
              
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-2">Renovivo Start</h3>
                <p className="text-sm text-gray-600 mb-4">частичен ремонт / освежаване</p>
                <div className="text-3xl font-bold text-primary mb-6">92-143 €/м² (180-280 лв./м²)./м²</div>
                <Button className="w-full" variant="outline" asChild>
                  <a href="/contact">Заяви оглед</a>
                </Button>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8 ring-2 ring-primary transform md:scale-105">
                <div className="bg-primary text-white text-center py-2 -mx-8 -mt-8 mb-6 rounded-t-lg font-semibold">
                  Най-популярен
                </div>
                <h3 className="text-2xl font-bold mb-2">Renovivo Comfort</h3>
                <p className="text-sm text-gray-600 mb-4">цялостен ремонт на апартамент</p>
                <div className="text-3xl font-bold text-primary mb-1">о230-332 €/м² (450-650 лв./м²)./м²</div>
                <div className="text-sm text-gray-600 mb-6">(без материали)</div>
                <Button className="w-full" asChild>
                  <a href="/contact">Запази оглед</a>
                </Button>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-2">Renovivo Premium</h3>
                <p className="text-sm text-gray-600 mb-4">пълна отговорност и инвеститорски контрол</p>
                <div className="text-3xl font-bold text-primary mb-6">332-460+ €/м² (650-900+ лв./м²)/div>
                <Button className="w-full" variant="outline" asChild>
                  <a href="/contact">Запази среща</a>
                </Button>
              </div>

            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container-custom max-w-4xl">
            <h2 className="text-3xl font-bold mb-6 text-center">Как формираме цената</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold">1</div>
                <div>
                  <h3 className="font-bold mb-2">Оглед и разговор</h3>
                  <p className="text-gray-600">посещаваме обекта и говорим за целите, сроковете и бюджета ти</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold">2</div>
                <div>
                  <h3 className="font-bold mb-2">Дефиниране на обхват</h3>
                  <p className="text-gray-600">уточняваме кои помещения и дейности влизат в ремонта</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold">3</div>
                <div>
                  <h3 className="font-bold mb-2">Оферта и пакет</h3>
                  <p className="text-gray-600">предлагаме най-подходящия пакет и изчисляваме конкретна цена</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold">4</div>
                <div>
                  <h3 className="font-bold mb-2">Договор и график</h3>
                  <p className="text-gray-600">подписваме договор с фиксирана цена и ориентировъчен график</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold">5</div>
                <div>
                  <h3 className="font-bold mb-2">Контрол и отчетност</h3>
                  <p className="text-gray-600">получаваш регулярни ъпдейти и снимки. Финален оглед и протокол</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-primary text-white">
          <div className="container-custom max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-6">Искате точна цена, а не ориентир?</h2>
            <p className="text-xl mb-8">Една среща и оглед са достатъчни, за да превърнем диапазоните в конкретна оферта с ясен обхват, срок и очакван резултат.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <a href="/contact">Заяви оглед</a>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-primary" asChild>
                <a href="/contact">Безплатна консултация</a>
              </Button>
            </div>
          </div>
        </section>

      </Layout>
    </>
  );
};

export default Pricing;
