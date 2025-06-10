
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import CoinCard from "./CoinCard";

interface Coin {
  id: string;
  name: string;
  symbol: string;
  price: number;
  change24h: number;
  image: string;
}

const TrendingCoins = () => {
  const [trending, setTrending] = useState<Coin[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrending = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=4&page=1&sparkline=false'
        );
        const data = await res.json();
        const coins: Coin[] = data.map((c: any) => ({
          id: c.id,
          name: c.name,
          symbol: c.symbol,
          price: c.current_price,
          change24h: c.price_change_percentage_24h,
          image: c.image,
        }));
        setTrending(coins);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching trending coins:', error);
        setLoading(false);
      }
    };

    fetchTrending();
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Trending Coins</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {loading ? (
            Array(4).fill(0).map((_, i) => (
              <div key={i} className="crypto-card flex flex-col">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Skeleton className="w-8 h-8 rounded-full" />
                    <div>
                      <Skeleton className="h-4 w-20" />
                      <Skeleton className="h-3 w-12 mt-1" />
                    </div>
                  </div>
                  <Skeleton className="h-6 w-16 rounded-full" />
                </div>
                <div className="mt-auto">
                  <Skeleton className="h-6 w-24" />
                </div>
              </div>
            ))
          ) : (
            trending?.map((coin) => (
              <CoinCard 
                key={coin.id}
                id={coin.id}
                name={coin.name}
                symbol={coin.symbol}
                price={coin.price}
                change24h={coin.change24h}
                image={coin.image}
              />
            ))
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default TrendingCoins;
