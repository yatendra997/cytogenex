import Hero from './components/Hero';
import WelcomeServices from './components/WelcomeServices';
import Stats from './components/Stats';
import OurAdvantage from './components/OurAdvantage';
import OurExpertise from './components/OurExpertise';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <WelcomeServices />
      <Stats />
      <OurAdvantage />
      <OurExpertise />
    </div>
  );
}
