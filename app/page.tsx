import HomeView from "./components/HomeView";
import Tokenomics from "./components/Tokenomics"
import Airdrop from "./components/Airdrop"
import Distribution from "./components/Distribution"


export default function Home() {
  return (
    //bg-[url('/assets/ellipse.png')]
    <main className="h-full bg-black bg-no-repeat bg-cover" style={{ backgroundImage: `url('/assets/ellipse.png')` }}>
      <div>
        <HomeView/>
        <div className="tokenomic-parent">
        <Tokenomics/>
        </div>
        <div className="tokenomic-parent" style={{marginTop: "-400px"}}>
        <Airdrop/>
        </div>
        <div className="tokenomic-parent" style={{marginTop: "-363px"}}>
        <Distribution/>
        </div>
      </div>
    </main>
  );
}
