import Header from './Component/Header';
import HeroPage from './Pages/HeroPage';
import CollectionSection from './Pages/CollectionSection';
import CraftsmanshipSection from './Pages/CraftsmanshipSection';
import FragranceExperience from './Pages/FragranceExperience';


function App() {
  return (
    <div className="min-h-screen bg-[#09090b] text-neutral-100 flex flex-col font-sans selection:bg-white/20 selection:text-white">
      <Header />
      <main className="flex-1">
        <HeroPage />
        <CollectionSection />
        <CraftsmanshipSection />
        <FragranceExperience />
      </main>
    </div>
  );
}

export default App;