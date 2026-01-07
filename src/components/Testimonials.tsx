import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    id: 1,
    name: 'Мария Георгиева',
    role: 'Апартамент в Лозенец',
    text: 'Изключително доволна съм от работата на екипа! Ремонтът на банята беше завършен точно в срок, без скрити такси. Мениджърът беше на разположение през цялото време и отговаряше на всички мои въпроси. Горещо препоръчвам!',
    rating: 5,
    date: '2025-11-15'
  },
  {
    id: 2,
    name: 'Георги Димитров',
    role: 'Цялостен ремонт, Младост',
    text: 'Направиха ни пълен ремонт на тристаен апартамент. Впечатлени сме от професионализма и вниманието към детайла. Екипът работи чисто и организирано. Резултатът надмина очакванията ни.',
    rating: 5,
    date: '2025-10-22'
  },
  {
    id: 3,
    name: 'Елена Петрова',
    role: 'Кухня и баня, Витоша',
    text: 'Страхотен опит! Микроциментът в банята изглежда невероятно. Екипът беше много внимателен към моите изисквания и предложи отлични решения. Определено ще се обърна към тях отново.',
    rating: 5,
    date: '2025-09-30'
  },
  {
    id: 4,
    name: 'Иван Стоянов',
    role: 'Освежителен ремонт, Център',
    text: 'Бърз и качествен освежителен ремонт за една седмица! Боядисването е перфектно, подмениха ни контактите и осветлението. Отлично съотношение цена-качество.',
    rating: 5,
    date: '2025-08-18'
  },
  {
    id: 5,
    name: 'Надежда Василева',
    role: 'Довършителни работи, Изток',
    text: 'Довършиха ни апартамент в ново строителство. От замазка до готов за нанасяне дом. Всичко беше координирано перфектно. Личният проектен мениджър ни спести много нерви!',
    rating: 5,
    date: '2025-07-05'
  },
  {
    id: 6,
    name: 'Петър Николов',
    role: 'Ремонт на къща, Бояна',
    text: 'Реновирахме стара къща с екипа на Renovivo. Сложен проект с много предизвикателства, но те се справиха отлично. Комуникацията беше безупречна от начало до край.',
    rating: 5,
    date: '2025-06-12'
  }
];

// Calculate aggregate rating
const totalRating = testimonials.reduce((sum, t) => sum + t.rating, 0);
const averageRating = (totalRating / testimonials.length).toFixed(1);

export default function Testimonials() {
  // Schema.org Review structured data
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://renovivo.bg/#business",
    name: "Renovivo",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: averageRating,
      reviewCount: testimonials.length.toString(),
      bestRating: "5",
      worstRating: "1"
    },
    review: testimonials.map(testimonial => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: testimonial.name
      },
      datePublished: testimonial.date,
      reviewBody: testimonial.text,
      reviewRating: {
        "@type": "Rating",
        ratingValue: testimonial.rating.toString(),
        bestRating: "5",
        worstRating: "1"
      },
      itemReviewed: {
        "@type": "LocalBusiness",
        name: "Renovivo",
        "@id": "https://renovivo.bg/#business"
      }
    }))
  };

  return (
    <section className="py-20 bg-secondary/30">
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(reviewSchema)}</script>
      </Helmet>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-foreground font-semibold text-sm uppercase tracking-wider">Отзиви</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">Какво казват нашите клиенти</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Стотици доволни клиенти ни се довериха за своите проекти. Ето какво споделят за работата с нас.
          </p>
          
          {/* Aggregate Rating Display */}
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-primary text-primary" />
              ))}
            </div>
            <span className="font-bold text-lg">{averageRating}</span>
            <span className="text-muted-foreground">/ 5 от {testimonials.length} отзива</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-primary/20 mb-4" />
                
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                <div className="border-t pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
