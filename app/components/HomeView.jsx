import Image from "next/image";
import TopBar from "./TopBar";
import RoachMarch from "./RoachMarch"
import "../styles.css"

const HomeView = () => (
  <div>
    <div class="relative w-full h-64">
      <TopBar />
    </div>
    <div className="flex items-center main-home-container">
      <div className="flex flex-col">
        <div className="header-box header-shadow">
          We're still here.
        </div>
          <p className="jetbrains-mono-font main-paragraph">You've survived the bear and now it's time to celebrate. 
        This 
        <br/> past year has been tough for Solana, but you've been here, <br/> grinding, memeing, & stacking SOL. We built $COCKR to celebrate 
        <br/>the community that just won't die. $COCKR will be airdropped at <br/> 
        our expense to wallets who have shown resilience and
        remained <br/> active in the depths of the bear market.
          </p>
          <div className="button-container">
          <div>
          <button class="button jetbrains-mono-font" style={{pxfontSize: "18", color: "black", fontWeight: "bold"}}>
            Read the Wastepaper
          </button>
          </div>
          <div>
          <button className="jetbrains-mono-font button-two" style={{fontSize: "18", marginLeft: "20px"}}
          >Something
          </button>
          </div>
          </div>
      </div>
      <div className="main-raid-image">
        <Image className="main-raid-image" src="/assets/raid.png" alt="raid sticker" width={444} height={380} />
      </div>
    </div>
      <div>
        <RoachMarch/>
      </div>
  </div>
  );
  
  export default HomeView;

  