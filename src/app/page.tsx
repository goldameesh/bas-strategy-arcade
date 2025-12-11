"use client";

import React, { useState } from 'react';
import GameEngine from '@/components/GameEngine';
import Footer from '@/components/Footer';
import HeroLanding from '@/components/HeroLanding';

export default function Home() {
  const [hasStarted, setHasStarted] = useState(false);

  return (
    <main className="min-h-screen bg-deep-bg flex flex-col">
      {!hasStarted ? (
        <HeroLanding onStart={() => setHasStarted(true)} />
      ) : (
        <GameEngine />
      )}
      <Footer />
    </main>
  );
}
