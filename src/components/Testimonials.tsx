import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Иван Петров',
    role: 'Собственик на апартамент',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    text: 'Невероятна работа! Препоръчвам ги.',
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Отзиви от клиенти</h2>
          <p className="text-xl text-gray-600">доволни клиенти говорят за качеството</p>
        </div>
      </div>
    </section>
  );
}