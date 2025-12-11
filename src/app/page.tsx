import GameEngine from '@/components/GameEngine';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-deep-bg flex flex-col">
      <GameEngine />
      <Footer />
    </main>
  );
}
