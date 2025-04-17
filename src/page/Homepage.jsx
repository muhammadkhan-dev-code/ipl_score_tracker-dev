import Hero from "../components/Hero";
import TeamStanding from "../components/TeamsStanding";
import StatsSection from "../components/StatsSection";
import Footer from "../components/Footer";
export default function HomePage() {
  return (
    <div className="min-h-screen bg-[url('/stadium.jpg')] bg-cover bg-center bg-fixed">
      <div className="min-h-screen bg-black/40">
<div className="space-y-12 pb-12">
     <div className="bg-opacity-90 ">
        <Hero/>
      </div>

    <div className="bg-opacity-90">
      <TeamStanding/>
     </div>

     <div className="bg-opacity-90">
      < StatsSection/>
      </div>
      
     <div className="bg-opacity-90">
      < Footer/>
      </div>

</div>
      </div>

    </div>
  );
}
