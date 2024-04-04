import Image from "next/image";

const Airdrop = () => (
  <div className="airdrop-container flex">
    <div className="left-airdrop-container">
        <div className="airdrop-top-text">
            $COCKR is to celebrate the<br/> Solana faithful, the believers,<br/> the 🪳 cockroaches 
            that just<br/> wouldn't let the culture die.
        </div>
            <div className="airdrop-bottom-text jetbrains-mono-font">
                We're airdropping $COCKR for<br/> free to the users of the<br/> network during this past year.
            </div>
        <div className="roachhand-container">
    <Image src="/assets/roachhand.png" alt="roachhand" width={54} height={55} />
    </div>
    </div>
    <div className="right-airdrop">
    <Image src="/assets/airdrop.png" alt="airdrop" width={504} height={440} 
    className="" style={{border: "1px solid #F9F041", borderRadius: "20px" }}/>
    </div>
  </div>
);

export default Airdrop;