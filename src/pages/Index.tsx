import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeService, setActiveService] = useState<string>('all');

  const services = [
    {
      category: 'tv',
      icon: 'Tv',
      title: 'Телевизоры',
      items: [
        { name: 'Замена подсветки', price: '2000 ₽' },
        { name: 'Замена блока питания', price: '2000 ₽' },
        { name: 'Настройка каналов/антенны', price: '500 ₽' },
      ]
    },
    {
      category: 'pc',
      icon: 'Monitor',
      title: 'Компьютеры',
      items: [
        { name: 'Чистка вирусов', price: '500 ₽' },
        { name: 'Установка драйверов', price: '500 ₽' },
        { name: 'Установка Windows 7/8/10/11', price: '1000 ₽' },
        { name: 'Настройка интернета', price: '500 ₽' },
      ]
    },
    {
      category: 'printer',
      icon: 'Printer',
      title: 'Принтеры',
      items: [
        { name: 'Заправка картриджей', price: '500 ₽' },
        { name: 'Замена роликов', price: '500 ₽' },
        { name: 'Замена печки', price: '1000 ₽' },
      ]
    }
  ];

  const benefits = [
    { icon: 'BadgeCheck', text: 'Гарантия 1 год', color: 'text-blue-600' },
    { icon: 'MapPin', text: 'Выезд бесплатно', color: 'text-orange-600' },
    { icon: 'ClipboardCheck', text: 'Диагностика бесплатно', color: 'text-blue-600' },
    { icon: 'Heart', text: 'Пенсионерам -30%', color: 'text-orange-600' },
  ];

  const filteredServices = activeService === 'all' 
    ? services 
    : services.filter(s => s.category === activeService);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-500 text-white">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Badge className="mb-6 bg-orange-500 hover:bg-orange-600 text-lg px-6 py-2">
              🚀 Выезд за 30 минут
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Ремонт техники на дому<br/>
              <span className="text-orange-300">в Симферополе</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Телевизоры • Компьютеры • Принтеры
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white text-xl px-8 py-6 transition-transform hover:scale-105">
                <Icon name="Phone" className="mr-2" size={24} />
                Вызвать мастера
              </Button>
              <Button size="lg" variant="outline" className="bg-white text-blue-600 hover:bg-blue-50 text-xl px-8 py-6 border-2 transition-transform hover:scale-105">
                Услуги и цены
              </Button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <Icon name={benefit.icon} className="mx-auto mb-2 text-orange-300" size={32} />
                  <p className="text-sm font-medium">{benefit.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      <section id="services" className="py-20 container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Услуги и цены
          </h2>
          <p className="text-xl text-gray-600">Услуги от 500 рублей • Прозрачные цены</p>
        </div>

        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          <Button 
            variant={activeService === 'all' ? 'default' : 'outline'}
            onClick={() => setActiveService('all')}
            className="transition-transform hover:scale-105"
          >
            <Icon name="Grid3x3" className="mr-2" size={20} />
            Все услуги
          </Button>
          <Button 
            variant={activeService === 'tv' ? 'default' : 'outline'}
            onClick={() => setActiveService('tv')}
            className="transition-transform hover:scale-105"
          >
            <Icon name="Tv" className="mr-2" size={20} />
            Телевизоры
          </Button>
          <Button 
            variant={activeService === 'pc' ? 'default' : 'outline'}
            onClick={() => setActiveService('pc')}
            className="transition-transform hover:scale-105"
          >
            <Icon name="Monitor" className="mr-2" size={20} />
            Компьютеры
          </Button>
          <Button 
            variant={activeService === 'printer' ? 'default' : 'outline'}
            onClick={() => setActiveService('printer')}
            className="transition-transform hover:scale-105"
          >
            <Icon name="Printer" className="mr-2" size={20} />
            Принтеры
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filteredServices.map((service, idx) => (
            <Card key={idx} className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-blue-500">
              <CardHeader className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-t-lg">
                <div className="flex items-center gap-3">
                  <div className="bg-white/20 p-3 rounded-lg">
                    <Icon name={service.icon} size={32} />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  {service.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex justify-between items-center p-3 rounded-lg hover:bg-blue-50 transition-colors">
                      <span className="text-gray-700">{item.name}</span>
                      <Badge variant="secondary" className="bg-orange-500 text-white text-base px-3 py-1">
                        {item.price}
                      </Badge>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="about" className="py-20 bg-gradient-to-br from-blue-600 to-blue-500 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">О мастере</h2>
            </div>
            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
              <CardContent className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="bg-gradient-to-br from-orange-400 to-orange-500 rounded-full w-32 h-32 md:w-40 md:h-40 flex items-center justify-center text-6xl md:text-7xl font-bold shadow-2xl">
                    А
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-3xl md:text-4xl font-bold mb-4">Антон</h3>
                    <p className="text-xl mb-6 text-blue-100">
                      Мастер по ремонту компьютерной техники, телевизоров и принтеров
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="bg-white/10 rounded-lg p-4 hover:bg-white/20 transition-all hover:scale-105">
                        <Icon name="Award" className="mx-auto mb-2 text-orange-300" size={32} />
                        <p className="font-bold text-lg">3 года опыта</p>
                      </div>
                      <div className="bg-white/10 rounded-lg p-4 hover:bg-white/20 transition-all hover:scale-105">
                        <Icon name="Shield" className="mx-auto mb-2 text-orange-300" size={32} />
                        <p className="font-bold text-lg">Гарантия 1 год</p>
                      </div>
                      <div className="bg-white/10 rounded-lg p-4 hover:bg-white/20 transition-all hover:scale-105">
                        <Icon name="Truck" className="mx-auto mb-2 text-orange-300" size={32} />
                        <p className="font-bold text-lg">Бесплатный выезд</p>
                      </div>
                      <div className="bg-white/10 rounded-lg p-4 hover:bg-white/20 transition-all hover:scale-105">
                        <Icon name="Heart" className="mx-auto mb-2 text-orange-300" size={32} />
                        <p className="font-bold text-lg">Скидка -30%</p>
                        <p className="text-sm text-blue-200">для пенсионеров</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Отзывы клиентов</h2>
          <p className="text-xl text-gray-600">Что говорят о работе мастера</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            { name: 'Ольга Ивановна', text: 'Быстро починил телевизор, очень довольна работой. Теперь всё работает отлично!', rating: 5 },
            { name: 'Дмитрий', text: 'Установил Windows и почистил от вирусов. Компьютер летает! Спасибо!', rating: 5 },
            { name: 'Анна', text: 'Настроил интернет и помог с принтером. Отличный мастер, рекомендую!', rating: 5 }
          ].map((review, idx) => (
            <Card key={idx} className="hover:shadow-xl transition-all hover:scale-105">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  {[...Array(review.rating)].map((_, i) => (
                    <Icon key={i} name="Star" className="text-orange-500 fill-orange-500" size={20} />
                  ))}
                </div>
                <CardTitle className="text-xl">{review.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 italic">"{review.text}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="contacts" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Контакты</h2>
            <Card className="bg-white/5 backdrop-blur-md border-white/10">
              <CardContent className="p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 justify-center md:justify-start">
                      <div className="bg-blue-500 p-4 rounded-full">
                        <Icon name="Phone" size={32} />
                      </div>
                      <div className="text-left">
                        <p className="text-sm text-gray-400">Позвоните прямо сейчас</p>
                        <p className="text-2xl font-bold">+7 (XXX) XXX-XX-XX</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 justify-center md:justify-start">
                      <div className="bg-orange-500 p-4 rounded-full">
                        <Icon name="MessageCircle" size={32} />
                      </div>
                      <div className="text-left">
                        <p className="text-sm text-gray-400">Напишите в мессенджер</p>
                        <p className="text-2xl font-bold">WhatsApp / Telegram</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 justify-center md:justify-start">
                      <div className="bg-blue-500 p-4 rounded-full">
                        <Icon name="MapPin" size={32} />
                      </div>
                      <div className="text-left">
                        <p className="text-sm text-gray-400">Город</p>
                        <p className="text-2xl font-bold">Симферополь</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="bg-gradient-to-br from-blue-600 to-blue-500 rounded-lg p-8">
                      <Icon name="Clock" className="mx-auto mb-4 text-orange-300" size={48} />
                      <p className="text-xl font-bold mb-2">Работаем ежедневно</p>
                      <p className="text-blue-100">с 8:00 до 22:00</p>
                    </div>
                    <Button size="lg" className="w-full bg-orange-500 hover:bg-orange-600 text-xl py-6 transition-transform hover:scale-105">
                      <Icon name="Phone" className="mr-2" size={24} />
                      Заказать звонок
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2">© 2026 Ремонт техники в Симферополе</p>
          <p className="text-sm">Мастер Антон • Гарантия • Качество</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
