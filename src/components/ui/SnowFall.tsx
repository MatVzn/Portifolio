'use client';

import { useEffect, useState } from 'react';
import Snowfall from 'react-snowfall';

const isSnowSeason = () => {
  const now = new Date();
  return now.getMonth() === 11 && now.getDate() >= 10;
  // 11 = dezembro (mês 12 - 1 porque janeiro é o mês 0)
  // 10 no getDate é o dia
  // logo: dezembro inteiro a partir do dia 10
};

const SnowfallComponent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!isSnowSeason()) return;

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50">
      <Snowfall
        snowflakeCount={50}
        changeFrequency={300}
        opacity={[0.3, 0.8]}
        wind={[-2, 5]}
      />
    </div>
  );
};

export { SnowfallComponent };