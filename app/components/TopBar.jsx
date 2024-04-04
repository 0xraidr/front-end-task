import Image from "next/image";

const TopBar = () => (
  <div className="text-white flex justify-between">
    <div className="top-home flex align-center">
        <img src="/assets/yellowlogo.png" alt="yellowlogo" class=""/>
      <div className="" style={{paddingLeft: "14px", marginTop: "-10px"}}>
        <div className="" style={{fontSize: "30px"}}>
        COCKR_OACH
        </div>
        <div className="jetbrains-mono-light" style={{marginTop: "1px"}}>
        $COCKR
        </div>
      </div>
    </div>
    <div className="socials-container flex" style={{marginTop: "40px"}}>
        <button>
        <a href="https://twitter.com/0xraidr" className="">
        <Image src="/assets/birdeye.png" alt="birdeye" width={39} height={39} />
        </a>
        </button>
        <button className="mx-5">
        <a href="https://twitter.com/0xraidr" className="">
        <Image src="/assets/twitter.png" alt="twitter" width={39} height={39} />
        </a>
        </button>
        <button>
        <a href="https://twitter.com/0xraidr" className="">
        <Image src="/assets/discord.png" alt="discord" width={39} height={39} />
        </a>
        </button>
    </div>
  </div>
);

export default TopBar;