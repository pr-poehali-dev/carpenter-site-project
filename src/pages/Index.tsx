import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

const Index = () => {
  const [activeService, setActiveService] = useState<number | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', contact: '', description: '' });
  const { toast } = useToast();

  const navLinks = [
    { href: '#about', label: 'О мастере' },
    { href: '#services', label: 'Услуги' },
    { href: '#portfolio', label: 'Галерея' },
    { href: '#testimonials', label: 'Отзывы' },
    { href: '#contact', label: 'Контакты' }
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Заявка отправлена!',
      description: 'Мы свяжемся с вами в ближайшее время.',
    });
    setFormData({ name: '', contact: '', description: '' });
    setIsFormOpen(false);
  };

  const services = [
    {
      title: 'Мебель на заказ',
      description: 'Создаю уникальную мебель из массива дерева по вашим размерам и дизайну',
      icon: 'Armchair'
    },
    {
      title: 'Реставрация',
      description: 'Восстанавливаю старинную мебель, сохраняя её историю и душу',
      icon: 'Hammer'
    },
    {
      title: 'Декор из дерева',
      description: 'Изготавливаю панно, рамы, полки и другие элементы интерьера',
      icon: 'Frame'
    },
    {
      title: 'Столешницы',
      description: 'Массивные столешницы из слэбов с сохранением натуральной текстуры',
      icon: 'Table'
    }
  ];

  const materials = [
    { name: 'Дуб', desc: 'Прочный, благородный, долговечный' },
    { name: 'Ясень', desc: 'Гибкий, выразительная текстура' },
    { name: 'Орех', desc: 'Элегантный, тёмные оттенки' },
    { name: 'Лиственница', desc: 'Устойчивая к влаге' }
  ];

  const techniques = [
    'Ручная обработка рубанком',
    'Соединение шип-паз',
    'Браширование',
    'Обжиг по технологии Shou Sugi Ban',
    'Покрытие маслом и воском',
    'Тонирование морилкой'
  ];

  const portfolio = [
    { id: 1, title: 'Обеденный стол из дуба', category: 'Мебель', image: 'https://cdn.poehali.dev/projects/b2e7b2d8-8d2e-4a61-82ba-dc3f478672d7/files/b138c3cc-82d1-440f-afa5-20cb82bad7ea.jpg' },
    { id: 2, title: 'Книжная полка', category: 'Декор', image: 'https://cdn.poehali.dev/projects/b2e7b2d8-8d2e-4a61-82ba-dc3f478672d7/files/f0cfa157-123b-4ee9-a939-bae2c30f4583.jpg' },
    { id: 3, title: 'Кухонный гарнитур', category: 'Мебель', image: 'https://cdn.poehali.dev/projects/b2e7b2d8-8d2e-4a61-82ba-dc3f478672d7/files/dccef762-d3f7-4d50-acf9-67bf1dc13ac8.jpg' },
    { id: 4, title: 'Декоративное панно', category: 'Декор', image: 'https://cdn.poehali.dev/projects/b2e7b2d8-8d2e-4a61-82ba-dc3f478672d7/files/dccef762-d3f7-4d50-acf9-67bf1dc13ac8.jpg' },
    { id: 5, title: 'Столешница из слэба', category: 'Столешницы', image: 'https://cdn.poehali.dev/projects/b2e7b2d8-8d2e-4a61-82ba-dc3f478672d7/files/b138c3cc-82d1-440f-afa5-20cb82bad7ea.jpg' },
    { id: 6, title: 'Реставрация комода', category: 'Реставрация', image: 'https://cdn.poehali.dev/projects/b2e7b2d8-8d2e-4a61-82ba-dc3f478672d7/files/f0cfa157-123b-4ee9-a939-bae2c30f4583.jpg' }
  ];

  const testimonials = [
    {
      name: 'Анна Петрова',
      text: 'Заказывала стол из массива дуба - получился шедевр! Качество работы на высшем уровне, каждая деталь продумана.',
      rating: 5
    },
    {
      name: 'Дмитрий Соколов',
      text: 'Отреставрировал старинный комод моей бабушки. Мастер вернул ему жизнь, сохранив оригинальный стиль.',
      rating: 5
    },
    {
      name: 'Екатерина Волкова',
      text: 'Книжные полки и декоративные элементы для гостиной - всё идеально вписалось в интерьер. Профессионал своего дела!',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Hammer" size={28} className="text-accent" />
            <span className="text-2xl font-bold text-primary">МастерДрево</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-foreground hover:text-accent transition-colors">
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
              <DialogTrigger asChild>
                <Button className="hidden sm:flex bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                  <Icon name="Phone" size={16} className="mr-2" />
                  Связаться
                </Button>
              </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-primary">Оставить заявку</DialogTitle>
                <DialogDescription>
                  Заполните форму, и я свяжусь с вами для обсуждения проекта
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Ваше имя</Label>
                  <Input
                    id="name"
                    placeholder="Иван Иванов"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact">Телефон или Email</Label>
                  <Input
                    id="contact"
                    placeholder="+7 (900) 123-45-67"
                    value={formData.contact}
                    onChange={(e) => setFormData({...formData, contact: e.target.value})}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Описание проекта</Label>
                  <Textarea
                    id="description"
                    placeholder="Расскажите, что бы вы хотели заказать..."
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    rows={4}
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Icon name="Send" size={18} className="mr-2" />
                  Отправить заявку
                </Button>
              </form>
            </DialogContent>
          </Dialog>
          
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Icon name="Menu" size={24} className="text-primary" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px]">
              <SheetHeader>
                <SheetTitle className="flex items-center gap-2 text-left">
                  <Icon name="Hammer" size={24} className="text-accent" />
                  <span className="text-xl font-bold text-primary">МастерДрево</span>
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-4 mt-8">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className="flex items-center gap-3 text-lg text-foreground hover:text-accent transition-colors py-3 border-b border-border"
                  >
                    <Icon name="ChevronRight" size={20} className="text-accent" />
                    {link.label}
                  </a>
                ))}
                <Button 
                  className="mt-4 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold w-full"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsFormOpen(true);
                  }}
                >
                  <Icon name="Phone" size={18} className="mr-2" />
                  Оставить заявку
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-primary mb-6 animate-fade-in">
            Столярная мастерская
            <span className="block text-accent mt-2">полного цикла</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Создаю мебель и изделия из массива дерева с душой и вниманием к деталям. 
            Каждая вещь — уникальна и служит десятилетиями.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
              <DialogTrigger asChild>
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6">
                  <Icon name="MessageSquare" size={20} className="mr-2" />
                  Обсудить проект
                </Button>
              </DialogTrigger>
            </Dialog>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2 border-primary hover:bg-primary hover:text-primary-foreground" onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}>
              <Icon name="Image" size={20} className="mr-2" />
              Смотреть работы
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-muted">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                О мастере
              </h2>
              <p className="text-lg text-foreground mb-6 leading-relaxed">
                Более 15 лет работаю с деревом. Начинал с простых изделий, постепенно освоил 
                классические и современные техники обработки. Для меня столярное дело — это не просто 
                работа, а способ создавать вещи, которые будут радовать людей десятилетиями.
              </p>
              <p className="text-lg text-foreground mb-8 leading-relaxed">
                Использую только качественные материалы, проверенные временем инструменты и 
                традиционные технологии. Каждое изделие — результат вдумчивой работы и любви к дереву.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold text-primary mb-4 flex items-center gap-2">
                    <Icon name="TreePine" size={24} className="text-accent" />
                    Материалы
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {materials.map((material, idx) => (
                      <Card key={idx} className="border-accent/20 hover:border-accent transition-colors">
                        <CardContent className="p-4">
                          <p className="font-semibold text-primary">{material.name}</p>
                          <p className="text-sm text-muted-foreground">{material.desc}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-primary mb-4 flex items-center gap-2">
                    <Icon name="Wrench" size={24} className="text-accent" />
                    Техники
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {techniques.map((technique, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-foreground">
                        <Icon name="Check" size={18} className="text-accent flex-shrink-0" />
                        <span>{technique}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-primary mb-4 flex items-center gap-2">
                    <Icon name="Target" size={24} className="text-accent" />
                    Специализация
                  </h3>
                  <p className="text-foreground leading-relaxed">
                    Авторская мебель из массива, столешницы из слэбов, декоративные элементы интерьера, 
                    реставрация антикварной мебели. Работаю как с современным минимализмом, так и 
                    с классическими стилями.
                  </p>
                </div>
              </div>
            </div>
            <div className="h-[600px] rounded-2xl overflow-hidden">
              <img 
                src="https://cdn.poehali.dev/projects/b2e7b2d8-8d2e-4a61-82ba-dc3f478672d7/files/dccef762-d3f7-4d50-acf9-67bf1dc13ac8.jpg"
                alt="Столярная мастерская"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 text-center">
            Услуги
          </h2>
          <p className="text-xl text-muted-foreground mb-12 text-center max-w-2xl mx-auto">
            Полный цикл работы — от эскиза до установки готового изделия
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <Card 
                key={idx}
                className={`cursor-pointer transition-all duration-300 border-2 ${
                  activeService === idx 
                    ? 'border-accent shadow-lg scale-105' 
                    : 'border-transparent hover:border-accent/50'
                }`}
                onClick={() => setActiveService(activeService === idx ? null : idx)}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                    <Icon name={service.icon as any} size={32} className="text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4 bg-muted">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 text-center">
            Галерея работ
          </h2>
          <p className="text-xl text-muted-foreground mb-12 text-center max-w-2xl mx-auto">
            Избранные проекты последних лет
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolio.map((item) => (
              <Card key={item.id} className="overflow-hidden group cursor-pointer border-2 border-transparent hover:border-accent transition-all duration-300">
                <div className="h-80 relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
                </div>
                <CardContent className="p-6">
                  <div className="inline-block px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full mb-3">
                    {item.category}
                  </div>
                  <h3 className="text-xl font-semibold text-primary">{item.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 text-center">
            Отзывы клиентов
          </h2>
          <p className="text-xl text-muted-foreground mb-12 text-center max-w-2xl mx-auto">
            Что говорят люди, для которых я работал
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <Card key={idx} className="border-2 border-accent/20 hover:border-accent transition-colors">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-accent fill-accent" />
                    ))}
                  </div>
                  <p className="text-foreground mb-6 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                      <Icon name="User" size={24} className="text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-primary">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">Клиент</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Готовы обсудить ваш проект?
          </h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto opacity-90">
            Свяжитесь со мной любым удобным способом. Отвечу на все вопросы и помогу 
            воплотить вашу идею в реальность.
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center">
                <Icon name="Phone" size={28} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Телефон</h3>
              <a href="tel:+79001234567" className="text-lg hover:text-accent transition-colors">
                +7 (900) 123-45-67
              </a>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center">
                <Icon name="Mail" size={28} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Email</h3>
              <a href="mailto:master@example.com" className="text-lg hover:text-accent transition-colors">
                master@example.com
              </a>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center">
                <Icon name="MapPin" size={28} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Мастерская</h3>
              <p className="text-lg">Москва, ул. Примерная, 15</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
              <DialogTrigger asChild>
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary text-lg px-10 py-6 font-semibold">
                  <Icon name="FileText" size={20} className="mr-2" />
                  Оставить заявку
                </Button>
              </DialogTrigger>
            </Dialog>
            <Button size="lg" variant="outline" className="text-lg px-10 py-6 font-semibold border-2 border-accent hover:bg-accent hover:text-primary">
              <Icon name="MessageSquare" size={20} className="mr-2" />
              Написать в WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; 2024 МастерДрево. Столярная мастерская полного цикла</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;