import Image from "next/image";
import DistroBar from "./DistroBar";

const Distribution = () => (
  <div className="distribution-container">
    <div className="dist-text-container">
        <div className="distribution-header header-shadow">
            <h1>Distribution</h1>
        </div>
        <div className="distribution-text jetbrains-mono-font">
        Allocation will take into account NFT Ownership, Defi, and active community 
        members,<br/> developers, and artists. 60% of all tokens will be distributed via airdrop.
        The<br/> remaining 40% will be distributed to the DAO (15%), Liquidity provisions and<br/> 
        incentives (10%), early contributor allocation (10%), and community incentives and<br/> 
        awards (5%).
        </div>
    </div>
    <DistroBar/>
  </div>
);

export default Distribution;