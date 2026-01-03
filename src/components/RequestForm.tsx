import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import Icon from '@/components/ui/icon';

const RequestForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    comment: ''
  });

  const services = [
    { value: 'tv-backlight', label: 'Замена подсветки телевизора' },
    { value: 'tv-power', label: 'Замена блока питания телевизора' },
    { value: 'tv-channels', label: 'Настройка каналов/антенны' },
    { value: 'pc-virus', label: 'Чистка вирусов' },
    { value: 'pc-drivers', label: 'Установка драйверов' },
    { value: 'pc-windows', label: 'Установка Windows' },
    { value: 'pc-internet', label: 'Настройка интернета' },
    { value: 'printer-refill', label: 'Заправка картриджей' },
    { value: 'printer-rollers', label: 'Замена роликов принтера' },
    { value: 'printer-fuser', label: 'Замена печки принтера' },
    { value: 'other', label: 'Другая услуга' },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone) {
      toast({
        title: "Ошибка",
        description: "Заполните имя и телефон",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('https://functions.poehali.dev/c191bbc3-73a4-47a8-a798-7515953e4a49', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          service: services.find(s => s.value === formData.service)?.label || 'Не указана',
          comment: formData.comment
        })
      });

      const result = await response.json();

      if (response.ok && result.success) {
        toast({
          title: "Заявка отправлена! ✅",
          description: "Мастер свяжется с вами в ближайшее время",
        });
        
        setFormData({ name: '', phone: '', service: '', comment: '' });
      } else {
        toast({
          title: "Ошибка",
          description: result.error || "Не удалось отправить заявку",
          variant: "destructive"
        });
      }
    } catch (error) {
      toast({
        title: "Ошибка",
        description: "Проблема с подключением. Попробуйте позже",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="max-w-2xl mx-auto shadow-2xl border-2 border-blue-200">
      <CardHeader className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-t-lg">
        <div className="flex items-center gap-3">
          <div className="bg-white/20 p-3 rounded-lg">
            <Icon name="Send" size={32} />
          </div>
          <div>
            <CardTitle className="text-3xl">Оставить заявку</CardTitle>
            <CardDescription className="text-blue-100 text-base">
              Заполните форму и мастер свяжется с вами
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-lg">Ваше имя *</Label>
            <Input
              id="name"
              placeholder="Введите ваше имя"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="text-lg p-6"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="text-lg">Телефон *</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="+7 (XXX) XXX-XX-XX"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="text-lg p-6"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="service" className="text-lg">Услуга</Label>
            <Select
              value={formData.service}
              onValueChange={(value) => setFormData({ ...formData, service: value })}
            >
              <SelectTrigger className="text-lg p-6">
                <SelectValue placeholder="Выберите услугу" />
              </SelectTrigger>
              <SelectContent>
                {services.map((service) => (
                  <SelectItem key={service.value} value={service.value} className="text-base">
                    {service.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="comment" className="text-lg">Комментарий</Label>
            <Textarea
              id="comment"
              placeholder="Опишите проблему или уточните детали"
              value={formData.comment}
              onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
              className="text-lg min-h-32"
            />
          </div>

          <Button
            type="submit"
            size="lg"
            disabled={isSubmitting}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white text-xl py-7 transition-transform hover:scale-105"
          >
            {isSubmitting ? (
              <>
                <Icon name="Loader2" className="mr-2 animate-spin" size={24} />
                Отправка...
              </>
            ) : (
              <>
                <Icon name="Send" className="mr-2" size={24} />
                Отправить заявку
              </>
            )}
          </Button>

          <p className="text-center text-sm text-gray-500">
            * - обязательные поля
          </p>
        </form>
      </CardContent>
    </Card>
  );
};

export default RequestForm;
