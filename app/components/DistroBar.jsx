import Image from "next/image";
import "../styles.css"

const DistroBar = () => (

    <div className="bar-container">
    <div className="box-container">
        <div className="box-text jetbrains-mono-bold">Community Airdrop</div>
        <div className="box box1">
        <div className="white-circle">
        <Image className="stickers" src="/assets/dropship.png" alt="drop" width={30} height={30} />
        </div>
        </div>
        <div className="bottom-box-text jetbrains-mono-bold">58.25%</div>
    </div>
    <div className="box-container">
        <div className="box-text jetbrains-mono-bold">Liquidity</div>
        <div className="box box2">
        <div className="white-circle">
        <Image className="stickers" src="/assets/drip.png" alt="drip" width={47} height={47} />
        </div>
        </div>
        <div className="bottom-box-text jetbrains-mono-bold">14.5%</div>
    </div>
    <div className="box-container">
        <div className="box-text jetbrains-mono-bold">DAO Treasury</div>
        <div className="box box3">
        <div className="white-circle">
        <Image className="stickers" src="/assets/dao.png" alt="dao" width={30} height={30} />
        </div>
        </div>
        <div className="bottom-box-text jetbrains-mono-bold">10%</div>
    </div>
    <div className="box-container">
        <div className="box-text jetbrains-mono-bold">Contributors</div>
        <div className="box box4">
        <div className="white-circle">
        <Image className="stickers" src="/assets/users.png" alt="users" width={30} height={30} />
        </div>
        </div>
        <div className="bottom-box-text jetbrains-mono-bold">10%</div>
    </div>
    <div className="box-container">
        <div className="box-text jetbrains-mono-bold">Marketing</div>
        <div className="box box5">
        <div className="white-circle">
        <Image className="stickers" src="/assets/commercial.png" alt="commercial" width={30} height={30} />
        </div>
        </div>
        <div className="bottom-box-text jetbrains-mono-bold">7.25%</div>
    </div>
</div>
);

export default DistroBar;