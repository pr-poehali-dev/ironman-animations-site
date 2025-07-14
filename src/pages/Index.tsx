import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const Index = () => {
  const suits = [
    { name: "Mark I", status: "Первый прототип", year: "2008" },
    { name: "Mark L", status: "Нанотехнологии", year: "2018" },
    { name: "Mark XLII", status: "Экстремис", year: "2013" },
    { name: "War Machine", status: "Боевой", year: "2010" }
  ];

  const movies = [
    { title: "Железный человек", year: "2008", rating: "7.9" },
    { title: "Мстители", year: "2012", rating: "8.0" },
    { title: "Железный человек 3", year: "2013", rating: "7.1" },
    { title: "Мстители: Финал", year: "2019", rating: "8.4" }
  ];

  const abilities = [
    { name: "Полет", description: "Реактивные двигатели", icon: "Rocket" },
    { name: "Защита", description: "Броня из вибраниума", icon: "Shield" },
    { name: "Энергия", description: "Дуговой реактор", icon: "Zap" },
    { name: "ИИ", description: "FRIDAY и JARVIS", icon: "Brain" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-iron-gray via-iron-light-gray to-black font-inter">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-iron-red/20 to-iron-gold/20"></div>
        <div className="relative z-10 text-center animate-fade-in">
          <div className="mb-8 animate-glow">
            <img 
              src="https://v3.fal.media/files/penguin/8mMBDGmAgDkl8hFwLsazP_output.png" 
              alt="Iron Man" 
              className="w-32 h-32 mx-auto rounded-full border-4 border-iron-gold"
            />
          </div>
          <h1 className="text-7xl md:text-8xl font-orbitron font-black text-iron-gold mb-6 animate-scale-in">
            IRON MAN
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto opacity-90">
            Genius, Billionaire, Playboy, Philanthropist
          </p>
          <div className="flex gap-4 justify-center">
            <Button className="bg-iron-red hover:bg-iron-red/80 text-white px-8 py-3 text-lg font-semibold">
              Explore Universe
            </Button>
            <Button variant="outline" className="border-iron-gold text-iron-gold hover:bg-iron-gold hover:text-black px-8 py-3 text-lg">
              Watch Trailer
            </Button>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="biography" className="w-full">
            <TabsList className="grid w-full grid-cols-6 bg-iron-light-gray/50 mb-12">
              <TabsTrigger value="biography" className="text-white data-[state=active]:bg-iron-gold data-[state=active]:text-black">
                Биография
              </TabsTrigger>
              <TabsTrigger value="suits" className="text-white data-[state=active]:bg-iron-gold data-[state=active]:text-black">
                Костюмы
              </TabsTrigger>
              <TabsTrigger value="abilities" className="text-white data-[state=active]:bg-iron-gold data-[state=active]:text-black">
                Способности
              </TabsTrigger>
              <TabsTrigger value="movies" className="text-white data-[state=active]:bg-iron-gold data-[state=active]:text-black">
                Фильмы
              </TabsTrigger>
              <TabsTrigger value="comics" className="text-white data-[state=active]:bg-iron-gold data-[state=active]:text-black">
                Комиксы
              </TabsTrigger>
              <TabsTrigger value="games" className="text-white data-[state=active]:bg-iron-gold data-[state=active]:text-black">
                Игры
              </TabsTrigger>
            </TabsList>

            {/* Biography Tab */}
            <TabsContent value="biography" className="animate-fade-in">
              <Card className="bg-iron-light-gray/80 border-iron-gold/30">
                <CardHeader>
                  <CardTitle className="text-3xl font-orbitron text-iron-gold">
                    Тони Старк
                  </CardTitle>
                  <CardDescription className="text-xl text-gray-300">
                    Genius inventor and armored superhero
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-white space-y-6">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-orbitron text-iron-gold mb-3">История</h3>
                      <p className="text-gray-200 leading-relaxed">
                        Энтони Эдвард "Тони" Старк родился в богатой семье промышленника Говарда Старка. 
                        После смерти родителей унаследовал компанию Stark Industries в возрасте 21 года.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-orbitron text-iron-gold mb-3">Становление героем</h3>
                      <p className="text-gray-200 leading-relaxed">
                        В плену у террористов создал первый костюм Железного человека, чтобы сбежать. 
                        Вернувшись, решил использовать свои технологии для защиты мира.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Suits Tab */}
            <TabsContent value="suits" className="animate-fade-in">
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <Card className="bg-iron-light-gray/80 border-iron-gold/30 hover:border-iron-gold transition-all hover:scale-105">
                  <CardContent className="p-0">
                    <img 
                      src="/img/01c74971-aa5e-4bef-8ad1-311714d49d1a.jpg" 
                      alt="Iron Man Mark 50" 
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-orbitron text-iron-gold mb-2">Mark 50</h3>
                      <p className="text-gray-300 mb-4">Нанотехнологическая броня</p>
                      <Badge className="bg-iron-red text-white">2018</Badge>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-iron-light-gray/80 border-iron-gold/30 hover:border-iron-gold transition-all hover:scale-105">
                  <CardContent className="p-0">
                    <img 
                      src="/img/021bbdf0-3a12-4f94-84e8-07cb8f7f8555.jpg" 
                      alt="Iron Man Flying" 
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-orbitron text-iron-gold mb-2">В действии</h3>
                      <p className="text-gray-300 mb-4">Полет над городом</p>
                      <Badge className="bg-iron-gold text-black">Активен</Badge>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-iron-light-gray/80 border-iron-gold/30 hover:border-iron-gold transition-all hover:scale-105">
                  <CardContent className="p-0">
                    <img 
                      src="/img/498eee37-282d-4e6d-a54d-6eb7e5705fb7.jpg" 
                      alt="Tony Stark Workshop" 
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-orbitron text-iron-gold mb-2">Лаборатория</h3>
                      <p className="text-gray-300 mb-4">Мастерская Старка</p>
                      <Badge className="bg-iron-red text-white">Топ-секрет</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {suits.map((suit, index) => (
                  <Card key={index} className="bg-iron-light-gray/80 border-iron-gold/30 hover:border-iron-gold transition-all hover:scale-105">
                    <CardHeader>
                      <CardTitle className="text-iron-gold font-orbitron">{suit.name}</CardTitle>
                      <CardDescription className="text-gray-300">{suit.status}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Badge className="bg-iron-red text-white">{suit.year}</Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Abilities Tab */}
            <TabsContent value="abilities" className="animate-fade-in">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {abilities.map((ability, index) => (
                  <Card key={index} className="bg-iron-light-gray/80 border-iron-gold/30 hover:border-iron-gold transition-all hover:scale-105">
                    <CardHeader className="text-center">
                      <div className="mx-auto w-12 h-12 bg-iron-gold/20 rounded-full flex items-center justify-center mb-4">
                        <Icon name={ability.icon} className="w-6 h-6 text-iron-gold" />
                      </div>
                      <CardTitle className="text-iron-gold font-orbitron">{ability.name}</CardTitle>
                      <CardDescription className="text-gray-300">{ability.description}</CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Movies Tab */}
            <TabsContent value="movies" className="animate-fade-in">
              <div className="grid md:grid-cols-2 gap-6">
                {movies.map((movie, index) => (
                  <Card key={index} className="bg-iron-light-gray/80 border-iron-gold/30 hover:border-iron-gold transition-all hover:scale-105">
                    <CardHeader>
                      <CardTitle className="text-iron-gold font-orbitron">{movie.title}</CardTitle>
                      <CardDescription className="text-gray-300 flex items-center gap-2">
                        <Icon name="Calendar" className="w-4 h-4" />
                        {movie.year}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-2">
                        <Icon name="Star" className="w-4 h-4 text-iron-gold" />
                        <span className="text-white font-semibold">{movie.rating}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Comics Tab */}
            <TabsContent value="comics" className="animate-fade-in">
              <Card className="bg-iron-light-gray/80 border-iron-gold/30">
                <CardHeader>
                  <CardTitle className="text-3xl font-orbitron text-iron-gold">
                    Комиксы Marvel
                  </CardTitle>
                  <CardDescription className="text-xl text-gray-300">
                    История Железного человека в комиксах
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-white space-y-6">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-4xl font-orbitron text-iron-gold mb-2">1963</div>
                      <p className="text-gray-300">Первое появление</p>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-orbitron text-iron-gold mb-2">500+</div>
                      <p className="text-gray-300">Выпусков</p>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-orbitron text-iron-gold mb-2">85</div>
                      <p className="text-gray-300">Костюмов</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Games Tab */}
            <TabsContent value="games" className="animate-fade-in">
              <Card className="bg-iron-light-gray/80 border-iron-gold/30">
                <CardHeader>
                  <CardTitle className="text-3xl font-orbitron text-iron-gold">
                    Игры
                  </CardTitle>
                  <CardDescription className="text-xl text-gray-300">
                    Железный человек в видеоиграх
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-white space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-xl font-orbitron text-iron-gold mb-3">Marvel's Avengers</h3>
                      <p className="text-gray-200">Играйте за Железного человека в команде Мстителей</p>
                      <Badge className="bg-iron-red text-white mt-2">Action</Badge>
                    </div>
                    <div>
                      <h3 className="text-xl font-orbitron text-iron-gold mb-3">Iron Man VR</h3>
                      <p className="text-gray-200">Виртуальная реальность в костюме Железного человека</p>
                      <Badge className="bg-iron-gold text-black mt-2">VR</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-iron-gray/80 py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-orbitron text-iron-gold mb-4">
            "I am Iron Man"
          </h3>
          <p className="text-gray-400">
            © 2024 Marvel Entertainment. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;