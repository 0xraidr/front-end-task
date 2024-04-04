import Image from "next/image";

const Tokenomics = () => (
  <div className="tokenomics-container">
    <div className="pie-chart-container">
        <Image src="/assets/pie.png" alt="pie chart" width={362} height={362} />
    </div>
    <div className="text-container">
        <h1 className="tokenomics-header">$COCKR Tokenomics</h1>
        <div className="tokenomics-sub-header jetbrains-mono-font" style={{color: "white", fontSize: "23px"}}>
            $COCKR is a SuperToken, built on the new <br/> <button><a href="https://spl.solana.com/token-2022"><span className="highlight">Token-22 standard.</span></a></button>
        </div>
        <div className="jetbrains-mono-font" style={{fontSize: "18px", marginTop: "20px"}}>
        We've used this new standard to build in both holder <br/>rewards, community incentive, and deflation. This new<br/> 
        token standard allows us to tax buy and sell transactions<br/> 5% of the tokens as a transfer fee. We redistribute 
        3% of <br/>this fee back to token holders regularly. Of the remaining <br/>.2%, 1% gets burned and 1% gets distributed back 
        to the <br/>DAO for governance.
        </div>
    </div>
  </div>
);

export default Tokenomics;