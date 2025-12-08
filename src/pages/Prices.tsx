import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import Layout from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Euro, Wrench, Zap, Droplets, Bath, ChefHat } from "lucide-react";

// BNB fixed rate: 1 EUR = 1.95583 BGN
const BGN_TO_EUR = 1.95583;

const convertToEur = (bgn: number | null): string => {
  if (bgn === null) return "-";
  return (bgn / BGN_TO_EUR).toFixed(2);
};

const categoryIcons: Record<string, React.ReactNode> = {
  "tile-installation": <Wrench className="h-5 w-5" />,
  "plumbing": <Droplets className="h-5 w-5" />,
  "electrical": <Zap className="h-5 w-5" />,
  "bathroom-renovation": <Bath className="h-5 w-5" />,
  "kitchen-renovation": <ChefHat className="h-5 w-5" />,
};

const Prices = () => {
  const { data: categories, isLoading: categoriesLoading } = useQuery({
    queryKey: ["service-categories"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("service_categories")
        .select("*")
        .order("name");
      if (error) throw error;
      return data;
    },
  });

  const { data: prices, isLoading: pricesLoading } = useQuery({
    queryKey: ["service-prices"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("service_prices")
        .select("*, service_categories(name, slug)")
        .order("service_name");
      if (error) throw error;
      return data;
    },
  });

  const isLoading = categoriesLoading || pricesLoading;

  const getPricesByCategory = (categoryId: string) => {
    return prices?.filter((price) => price.category_id === categoryId) || [];
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Начало", "item": "https://renovivo.bg" },
      { "@type": "ListItem", "position": 2, "name": "Ценоразпис", "item": "https://renovivo.bg/prices" }
    ]
  };

  const priceListSchema = {
    "@context": "https://schema.org",
    "@type": "PriceSpecification",
    "name": "Ценоразпис за ремонтни услуги",
    "priceCurrency": "EUR",
    "description": "Ориентировъчни цени за ремонтни услуги в София"
  };

  return (
    <Layout>
      <Helmet>
        <title>Цени ремонт София | Renovivo - Ценоразпис ремонтни услуги 2024</title>
        <meta
          name="description"
          content="Актуални цени за ремонт в София 2024. Ценоразпис: плочки от €8/м², боядисване от €4/м², ремонт баня от €2500. Прозрачно ценообразуване без скрити такси!"
        />
        <meta name="keywords" content="цени ремонт София, ценоразпис ремонти, колко струва ремонт, цена ремонт баня, цена ремонт кухня, цени боядисване, цени плочки" />
        <link rel="canonical" href="https://renovivo.bg/prices" />
        <meta property="og:title" content="Цени ремонт София | Renovivo" />
        <meta property="og:description" content="Прозрачни цени за ремонтни услуги. Без скрити такси." />
        <meta property="og:url" content="https://renovivo.bg/prices" />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(priceListSchema)}</script>
      </Helmet>

      <section className="py-16 md:py-24">
        <div className="container-custom">
          {/* Header */}
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              <Euro className="h-4 w-4 mr-2" />
              Цени в EUR
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Ценоразпис
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Прозрачни цени за всички наши услуги. Цените са ориентировъчни и
              могат да варират в зависимост от спецификата на проекта.
            </p>
          </div>

          {/* Prices Tabs */}
          {isLoading ? (
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <Skeleton key={i} className="h-32 w-full" />
              ))}
            </div>
          ) : (
            <Tabs
              defaultValue={categories?.[0]?.id}
              className="w-full"
            >
              <TabsList className="flex flex-wrap justify-center gap-2 mb-8 h-auto bg-transparent">
                {categories?.map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                  >
                    {categoryIcons[category.slug] || <Wrench className="h-4 w-4" />}
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>

              {categories?.map((category) => (
                <TabsContent key={category.id} value={category.id}>
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        {categoryIcons[category.slug] || <Wrench className="h-5 w-5" />}
                        {category.name}
                      </CardTitle>
                      {category.description && (
                        <p className="text-muted-foreground">{category.description}</p>
                      )}
                    </CardHeader>
                    <CardContent>
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead>
                            <tr className="border-b">
                              <th className="text-left py-3 px-4 font-semibold">
                                Услуга
                              </th>
                              <th className="text-center py-3 px-4 font-semibold">
                                Цена (EUR)
                              </th>
                              <th className="text-center py-3 px-4 font-semibold">
                                Единица
                              </th>
                              <th className="text-center py-3 px-4 font-semibold hidden md:table-cell">
                                Материали
                              </th>
                              <th className="text-left py-3 px-4 font-semibold hidden lg:table-cell">
                                Забележки
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {getPricesByCategory(category.id).map((price) => (
                              <tr
                                key={price.id}
                                className="border-b hover:bg-muted/50 transition-colors"
                              >
                                <td className="py-3 px-4">{price.service_name}</td>
                                <td className="py-3 px-4 text-center font-medium text-primary">
                                  {price.price_min !== null && price.price_max !== null ? (
                                    price.price_min === price.price_max ? (
                                      `€${convertToEur(price.price_min)}`
                                    ) : (
                                      `€${convertToEur(price.price_min)} - €${convertToEur(price.price_max)}`
                                    )
                                  ) : price.price_text ? (
                                    price.price_text
                                  ) : (
                                    "По запитване"
                                  )}
                                </td>
                                <td className="py-3 px-4 text-center text-muted-foreground">
                                  {price.unit}
                                </td>
                                <td className="py-3 px-4 text-center hidden md:table-cell">
                                  {price.includes_materials ? (
                                    <Badge variant="secondary">Да</Badge>
                                  ) : (
                                    <Badge variant="outline">Не</Badge>
                                  )}
                                </td>
                                <td className="py-3 px-4 text-muted-foreground hidden lg:table-cell text-sm">
                                  {price.notes || "-"}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          )}

          {/* Disclaimer */}
          <div className="mt-8 p-4 bg-muted/50 rounded-lg text-center">
            <p className="text-sm text-muted-foreground">
              * Цените са в евро по фиксинга на БНБ (1 EUR = 1.95583 BGN).
              Окончателната цена се определя след оглед на обекта.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Prices;
