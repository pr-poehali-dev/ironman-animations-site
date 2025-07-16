import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const DesignBrief = () => {
  const colorPalette = [
    { name: "Серый", hex: "#6B7280", usage: "Основной текст" },
    { name: "Белый", hex: "#FFFFFF", usage: "Фон, акценты" },
    { name: "Бордовый", hex: "#7C2D3C", usage: "Логотип, акценты" },
    { name: "Черный", hex: "#000000", usage: "Контраст, текст" }
  ];

  const requirements = [
    {
      category: "Основная задача",
      items: [
        "Улучшить 1-й слайд карточки товара",
        "Создать 2-й слайд (по желанию)",
        "Анализ конкурентов + обоснование решений"
      ]
    },
    {
      category: "Технические требования",
      items: [
        "ОБЯЗАТЕЛЬНО указать размеры на 1 слайде",
        "Выделить САМ ТОВАР - боди должно быть видно",
        "Добавить логотип бренда",
        "Изменить надпись SKIMS",
        "Подчеркнуть талию (по желанию)"
      ]
    },
    {
      category: "Стиль и оформление",
      items: [
        "Модный трендовый шрифт",
        "Единый стиль для двух слайдов",
        "Можно использовать нейросети для фона",
        "Фон - девушка в боди из нейронки"
      ]
    }
  ];

  const deliverables = [
    { task: "Дизайн карточек", deadline: "Чем раньше, тем лучше", priority: "high" },
    { task: "Анализ конкурентов", deadline: "В составе ТЗ", priority: "medium" },
    { task: "Обоснование решений", deadline: "Текстовое описание", priority: "high" },
    { task: "Портфолио + прайс", deadline: "Приложить к работе", priority: "medium" }
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          Техническое задание
        </h1>
        <p className="text-xl text-gray-600 mb-4">Дизайн карточки товара - Боди</p>
        <div className="flex justify-center gap-4">
          <Badge className="bg-red-600 text-white px-4 py-2">
            <Icon name="Clock" className="w-4 h-4 mr-2" />
            Тестовое задание
          </Badge>
          <Badge className="bg-gray-800 text-white px-4 py-2">
            <Icon name="Palette" className="w-4 h-4 mr-2" />
            Fashion бренд
          </Badge>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        
        {/* Left Column */}
        <div className="space-y-6">
          
          {/* Color Palette */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center text-gray-900">
                <Icon name="Palette" className="w-5 h-5 mr-2 text-red-600" />
                Цветовая палитра
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                {colorPalette.map((color, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div 
                      className="w-12 h-12 rounded-lg shadow-md border-2 border-gray-200"
                      style={{ backgroundColor: color.hex }}
                    />
                    <div>
                      <p className="font-semibold text-gray-900">{color.name}</p>
                      <p className="text-sm text-gray-600">{color.hex}</p>
                      <p className="text-xs text-gray-500">{color.usage}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <Card className="shadow-lg bg-gradient-to-r from-red-600 to-red-700 text-white">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Icon name="Send" className="w-5 h-5 mr-2" />
                Контакты и сдача работы
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Icon name="MessageCircle" className="w-4 h-4" />
                  <span className="font-mono">@heymeyyaa</span>
                </div>
                <Separator className="bg-white/20" />
                <div className="text-sm space-y-1">
                  <p>📎 Приложить: портфолио, прайс, резюме</p>
                  <p>⏰ Дедлайн: чем раньше, тем лучше</p>
                  <p>💼 При выборе - созвон и обсуждение условий</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Resources */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center text-gray-900">
                <Icon name="Link" className="w-5 h-5 mr-2 text-red-600" />
                Материалы для работы
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="p-3 bg-gray-50 rounded-lg">
                  <p className="font-semibold text-gray-900">Логотип:</p>
                  <p className="text-sm text-blue-600 break-all">
                    drive.google.com/drive/folders/17Gr2dIfX1687-tjtTvc1EQqbcd4Y7xza
                  </p>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <p className="font-semibold text-gray-900">Фото боди:</p>
                  <p className="text-sm text-blue-600 break-all">
                    drive.google.com/drive/folders/1WZa7DTpZS4jfBJKiMn1ILTukVBHOTQgP
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          
          {/* Requirements */}
          {requirements.map((section, index) => (
            <Card key={index} className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-gray-900">
                  <Icon 
                    name={index === 0 ? "Target" : index === 1 ? "Settings" : "Brush"} 
                    className="w-5 h-5 mr-2 text-red-600" 
                  />
                  {section.category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2">
                      <Icon name="Check" className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}

          {/* Deliverables */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center text-gray-900">
                <Icon name="Package" className="w-5 h-5 mr-2 text-red-600" />
                Что нужно сдать
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {deliverables.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-semibold text-gray-900">{item.task}</p>
                      <p className="text-sm text-gray-600">{item.deadline}</p>
                    </div>
                    <Badge className={item.priority === 'high' ? 'bg-red-600' : 'bg-gray-600'}>
                      {item.priority === 'high' ? 'Важно' : 'Средне'}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Key Points Banner */}
      <Card className="shadow-lg bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <CardContent className="p-6">
          <h3 className="text-xl font-bold mb-4 text-center">
            🎯 Ключевые моменты проекта
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="p-4 bg-white/10 rounded-lg">
              <Icon name="Eye" className="w-8 h-8 mx-auto mb-2 text-red-400" />
              <p className="font-semibold">Фокус на товаре</p>
              <p className="text-sm text-gray-300">Боди должно быть хорошо видно</p>
            </div>
            <div className="p-4 bg-white/10 rounded-lg">
              <Icon name="Ruler" className="w-8 h-8 mx-auto mb-2 text-red-400" />
              <p className="font-semibold">Размеры обязательно</p>
              <p className="text-sm text-gray-300">На первом слайде указать размеры</p>
            </div>
            <div className="p-4 bg-white/10 rounded-lg">
              <Icon name="Zap" className="w-8 h-8 mx-auto mb-2 text-red-400" />
              <p className="font-semibold">Скорость важна</p>
              <p className="text-sm text-gray-300">Много кандидатов, кто быстрее</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Footer */}
      <div className="text-center mt-8 p-4 bg-white rounded-lg shadow-lg">
        <p className="text-gray-600">
          💡 При отказе можете использовать работу в своем портфолио
        </p>
        <p className="text-sm text-gray-500 mt-2">
          Тестовое не оплачивается • При выборе - обсуждение условий сотрудничества
        </p>
      </div>
    </div>
  );
};

export default DesignBrief;