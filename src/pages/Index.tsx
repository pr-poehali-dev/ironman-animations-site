import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { useState, useEffect } from "react";
import useWebSocket from "react-use-websocket";

const Index = () => {
  const [balance, setBalance] = useState(100);
  const [selectedPair, setSelectedPair] = useState("BTC/USDT");
  const [orderType, setOrderType] = useState("market");
  const [orderSide, setOrderSide] = useState("buy");
  const [amount, setAmount] = useState("");
  const [price, setPrice] = useState("");
  const [leverage, setLeverage] = useState(10);
  const [positions, setPositions] = useState<any[]>([]);
  const [orders, setOrders] = useState<any[]>([]);
  const [cryptoPairs, setCryptoPairs] = useState([
    { symbol: "BTC/USDT", price: 43250.50, change: 2.45, volume: "1.2B" },
    { symbol: "ETH/USDT", price: 2580.75, change: -1.23, volume: "890M" },
    { symbol: "SOL/USDT", price: 98.45, change: 5.67, volume: "234M" },
    { symbol: "ADA/USDT", price: 0.4521, change: -0.89, volume: "156M" },
    { symbol: "DOT/USDT", price: 6.789, change: 3.21, volume: "89M" },
    { symbol: "AVAX/USDT", price: 25.67, change: 1.45, volume: "67M" }
  ]);

  // Simulate live price updates
  useEffect(() => {
    const interval = setInterval(() => {
      setCryptoPairs(prev => prev.map(pair => ({
        ...pair,
        price: pair.price + (Math.random() - 0.5) * pair.price * 0.01,
        change: (Math.random() - 0.5) * 10
      })));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const chartData = [
    { time: "00:00", price: 43100 },
    { time: "04:00", price: 43200 },
    { time: "08:00", price: 43050 },
    { time: "12:00", price: 43300 },
    { time: "16:00", price: 43250 },
    { time: "20:00", price: 43400 },
    { time: "24:00", price: 43250 }
  ];

  const orderBook = {
    asks: [
      { price: 43252.50, amount: 0.1234, total: 5.340 },
      { price: 43253.00, amount: 0.2456, total: 10.623 },
      { price: 43254.50, amount: 0.3678, total: 15.901 },
      { price: 43255.00, amount: 0.4901, total: 21.203 },
      { price: 43256.50, amount: 0.5234, total: 26.630 }
    ],
    bids: [
      { price: 43250.00, amount: 0.1567, total: 6.773 },
      { price: 43249.50, amount: 0.2890, total: 12.497 },
      { price: 43248.00, amount: 0.3456, total: 14.942 },
      { price: 43247.50, amount: 0.4123, total: 17.837 },
      { price: 43246.00, amount: 0.5678, total: 24.548 }
    ]
  };

  const handleOrder = () => {
    const orderAmount = parseFloat(amount);
    const orderPrice = orderType === "market" ? cryptoPairs.find(p => p.symbol === selectedPair)?.price || 0 : parseFloat(price);
    
    if (!orderAmount || orderAmount <= 0) return;
    
    const totalValue = orderAmount * orderPrice;
    const leveragedValue = totalValue / leverage;
    
    if (leveragedValue > balance) {
      alert("Недостаточно средств!");
      return;
    }

    const newOrder = {
      id: Date.now(),
      symbol: selectedPair,
      side: orderSide,
      type: orderType,
      amount: orderAmount,
      price: orderPrice,
      leverage: leverage,
      time: new Date().toLocaleTimeString(),
      status: "filled"
    };

    setOrders([newOrder, ...orders]);
    
    const newPosition = {
      id: Date.now(),
      symbol: selectedPair,
      side: orderSide,
      amount: orderAmount,
      entryPrice: orderPrice,
      leverage: leverage,
      margin: leveragedValue,
      unrealizedPnl: 0,
      time: new Date().toLocaleTimeString()
    };

    setPositions([newPosition, ...positions]);
    setBalance(balance - leveragedValue);
    setAmount("");
    setPrice("");
  };

  const closePosition = (positionId: number) => {
    setPositions(positions.filter(p => p.id !== positionId));
  };

  const currentPrice = cryptoPairs.find(p => p.symbol === selectedPair)?.price || 0;

  return (
    <div className="min-h-screen bg-trading-bg text-white font-inter">
      {/* Header */}
      <header className="bg-trading-card border-b border-trading-border p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <h1 className="text-2xl font-bold text-trading-yellow">CryptoTrade Pro</h1>
            <Select value={selectedPair} onValueChange={setSelectedPair}>
              <SelectTrigger className="w-40 bg-trading-bg border-trading-border">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-trading-card border-trading-border">
                {cryptoPairs.map(pair => (
                  <SelectItem key={pair.symbol} value={pair.symbol}>
                    {pair.symbol}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <div className="flex items-center gap-4">
              <span className="text-2xl font-bold">${currentPrice.toLocaleString()}</span>
              <Badge className={`${cryptoPairs.find(p => p.symbol === selectedPair)?.change > 0 ? 'bg-trading-green' : 'bg-trading-red'} text-white`}>
                {cryptoPairs.find(p => p.symbol === selectedPair)?.change > 0 ? '+' : ''}{cryptoPairs.find(p => p.symbol === selectedPair)?.change}%
              </Badge>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-sm text-gray-400">Баланс</p>
              <p className="text-xl font-bold text-trading-yellow">${balance.toFixed(2)}</p>
            </div>
            <Icon name="User" className="w-8 h-8 text-gray-400" />
          </div>
        </div>
      </header>

      {/* Main Trading Interface */}
      <div className="grid grid-cols-12 gap-4 p-4 h-screen">
        {/* Left Panel - Market List */}
        <div className="col-span-3">
          <Card className="bg-trading-card border-trading-border h-full">
            <CardHeader>
              <CardTitle className="text-trading-yellow">Рынки</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {cryptoPairs.map(pair => (
                  <div
                    key={pair.symbol}
                    className={`p-3 rounded cursor-pointer transition-all ${
                      selectedPair === pair.symbol ? 'bg-trading-border' : 'hover:bg-trading-border/50'
                    }`}
                    onClick={() => setSelectedPair(pair.symbol)}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-semibold">{pair.symbol}</p>
                        <p className="text-sm text-gray-400">Vol: {pair.volume}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">${pair.price.toLocaleString()}</p>
                        <p className={`text-sm ${pair.change > 0 ? 'text-trading-green' : 'text-trading-red'}`}>
                          {pair.change > 0 ? '+' : ''}{pair.change}%
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Center Panel - Chart */}
        <div className="col-span-6">
          <Card className="bg-trading-card border-trading-border h-full">
            <CardHeader>
              <CardTitle className="text-trading-yellow">{selectedPair} График</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-96">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#2a2e33" />
                    <XAxis dataKey="time" stroke="#gray" />
                    <YAxis stroke="#gray" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#161a1e', 
                        border: '1px solid #2a2e33',
                        borderRadius: '8px'
                      }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="price" 
                      stroke="#02c076" 
                      strokeWidth={2}
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Order Book */}
          <Card className="bg-trading-card border-trading-border mt-4">
            <CardHeader>
              <CardTitle className="text-trading-yellow">Стакан заявок</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-trading-red mb-2">Продажа</h4>
                  {orderBook.asks.map((ask, index) => (
                    <div key={index} className="flex justify-between text-sm py-1">
                      <span className="text-trading-red">{ask.price}</span>
                      <span>{ask.amount}</span>
                      <span>{ask.total}</span>
                    </div>
                  ))}
                </div>
                <div>
                  <h4 className="text-trading-green mb-2">Покупка</h4>
                  {orderBook.bids.map((bid, index) => (
                    <div key={index} className="flex justify-between text-sm py-1">
                      <span className="text-trading-green">{bid.price}</span>
                      <span>{bid.amount}</span>
                      <span>{bid.total}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Panel - Trading Form */}
        <div className="col-span-3">
          <Card className="bg-trading-card border-trading-border">
            <CardHeader>
              <CardTitle className="text-trading-yellow">Торговля</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Tabs value={orderSide} onValueChange={setOrderSide}>
                <TabsList className="grid w-full grid-cols-2 bg-trading-bg">
                  <TabsTrigger value="buy" className="data-[state=active]:bg-trading-green data-[state=active]:text-white">
                    Лонг
                  </TabsTrigger>
                  <TabsTrigger value="sell" className="data-[state=active]:bg-trading-red data-[state=active]:text-white">
                    Шорт
                  </TabsTrigger>
                </TabsList>
              </Tabs>

              <div>
                <Label>Плечо</Label>
                <Select value={leverage.toString()} onValueChange={(value) => setLeverage(parseInt(value))}>
                  <SelectTrigger className="bg-trading-bg border-trading-border">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-trading-card border-trading-border">
                    <SelectItem value="1">1x</SelectItem>
                    <SelectItem value="5">5x</SelectItem>
                    <SelectItem value="10">10x</SelectItem>
                    <SelectItem value="20">20x</SelectItem>
                    <SelectItem value="50">50x</SelectItem>
                    <SelectItem value="100">100x</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>Тип ордера</Label>
                <Select value={orderType} onValueChange={setOrderType}>
                  <SelectTrigger className="bg-trading-bg border-trading-border">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-trading-card border-trading-border">
                    <SelectItem value="market">Рыночный</SelectItem>
                    <SelectItem value="limit">Лимитный</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {orderType === "limit" && (
                <div>
                  <Label>Цена</Label>
                  <Input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="Цена"
                    className="bg-trading-bg border-trading-border"
                  />
                </div>
              )}

              <div>
                <Label>Количество</Label>
                <Input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="Количество"
                  className="bg-trading-bg border-trading-border"
                />
              </div>

              <Button 
                onClick={handleOrder}
                className={`w-full ${orderSide === 'buy' ? 'bg-trading-green hover:bg-trading-green/80' : 'bg-trading-red hover:bg-trading-red/80'}`}
              >
                {orderSide === 'buy' ? 'Открыть лонг' : 'Открыть шорт'}
              </Button>
            </CardContent>
          </Card>

          {/* Positions */}
          <Card className="bg-trading-card border-trading-border mt-4">
            <CardHeader>
              <CardTitle className="text-trading-yellow">Позиции</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 max-h-64 overflow-y-auto">
                {positions.length === 0 ? (
                  <p className="text-gray-400 text-center py-4">Нет открытых позиций</p>
                ) : (
                  positions.map(position => (
                    <div key={position.id} className="p-3 bg-trading-bg rounded">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold">{position.symbol}</span>
                        <Badge className={position.side === 'buy' ? 'bg-trading-green' : 'bg-trading-red'}>
                          {position.side === 'buy' ? 'Лонг' : 'Шорт'} {position.leverage}x
                        </Badge>
                      </div>
                      <div className="text-sm text-gray-400">
                        <p>Размер: {position.amount}</p>
                        <p>Цена входа: ${position.entryPrice}</p>
                        <p>Маржа: ${position.margin.toFixed(2)}</p>
                      </div>
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="mt-2 w-full border-trading-red text-trading-red hover:bg-trading-red hover:text-white"
                        onClick={() => closePosition(position.id)}
                      >
                        Закрыть
                      </Button>
                    </div>
                  ))
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Bottom Panel - Orders History */}
      <div className="p-4">
        <Card className="bg-trading-card border-trading-border">
          <CardHeader>
            <CardTitle className="text-trading-yellow">История ордеров</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-gray-400 text-sm">
                    <th className="text-left p-2">Пара</th>
                    <th className="text-left p-2">Тип</th>
                    <th className="text-left p-2">Сторона</th>
                    <th className="text-left p-2">Количество</th>
                    <th className="text-left p-2">Цена</th>
                    <th className="text-left p-2">Плечо</th>
                    <th className="text-left p-2">Время</th>
                    <th className="text-left p-2">Статус</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map(order => (
                    <tr key={order.id} className="border-t border-trading-border">
                      <td className="p-2">{order.symbol}</td>
                      <td className="p-2">{order.type}</td>
                      <td className={`p-2 ${order.side === 'buy' ? 'text-trading-green' : 'text-trading-red'}`}>
                        {order.side === 'buy' ? 'Лонг' : 'Шорт'}
                      </td>
                      <td className="p-2">{order.amount}</td>
                      <td className="p-2">${order.price}</td>
                      <td className="p-2">{order.leverage}x</td>
                      <td className="p-2">{order.time}</td>
                      <td className="p-2">
                        <Badge className="bg-trading-green text-white">{order.status}</Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;