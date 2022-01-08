import React, { useEffect, useState, useRef } from "react";

const Home = () => {
  useEffect(() => {
    const inViewport = (entries: any, observer: any) => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting && !entry.target.src) {
          var imageUrl = entry.target.dataset.lazy;
          if (imageUrl) {
            entry.target.src = imageUrl;
          }
        }
      });
    };

    const Obs = new IntersectionObserver(inViewport, {
      rootMargin: "20%",
      threshold: 0.5,
    });

    // Attach observer to every [data-inviewport] element:
    const ELs_inViewport = document.querySelectorAll("[data-lazy]");
    ELs_inViewport.forEach((EL) => {
      Obs.observe(EL);
    });
  }, []);

  const [isSideMenu, setIsSideMenu] = useState(false);

  const closeSideMenu = () => {
    setIsSideMenu(false);
  };

  const openSideMenu = () => {
    setIsSideMenu(true);
  };

  return (
    <></>
    // <Page>
    //      {
    //         isSideMenu &&
    //         <SideMenu isSideMenu={isSideMenu} onDismiss={closeSideMenu}/>
    //     }
    //     <div className="home">
    //         <div className="background1 rellax" data-rellax-speed="7">
    //             <video autoPlay muted loop>
    //                 <source src={element1} type="video/webm"/>
    //             </video>
    //         </div>
    //         <div className="background2 rellax" data-rellax-speed="4">
    //             <img src={element2} alt="element2" />
    //         </div>
    //         <div className="background3 rellax" data-rellax-speed="-2">
    //             <img src={element3} alt="element3" />
    //         </div>
    //         <div className="nav">
    //             <figure className="logo">
    //                 <img src={SouniLogo} alt="logo" />
    //             </figure>
    //             <div className="nav__right">
    //                 <p className="link">Marketplace <span>Soon</span></p>
    //                 <p className="link space">Game <span>Soon</span></p>
    //                 <a href="https://twitter.com/SoviFinance" target="_blank" className="link2"><div><img src={twitterIcon} alt="twitterIcon" /></div></a>
    //                 <a href="https://t.me/sovi_finance" target="_blank" className="link2"><div><img src={telegramIcon} alt="telegramIcon" /></div></a>
    //                 <a href="https://discord.gg/AEBasmM" target="_blank" className="link2"><div><img src={robotIcon} alt="robotIcon" /></div></a>
    //             </div>
    //             <div className="nav__menu" onClick={openSideMenu}>
    //                 <div className="line"></div>
    //                 <div className="line"></div>
    //                 <div className="line"></div>
    //             </div>
    //         </div>
    //         <div className="home__head">
    //             <div className="title-img godown" data-rellax-speed="3">
    //                 <img src={titleHomeImg} alt="titleHomeImg" />
    //             </div>
    //             <p className="title godown" data-rellax-speed="3">The Metaverse Where Crypto Avatars <br /> Battle Together</p>
    //             <div className="wrapping">
    //                 <div className="top-layer">
    //                 </div>
    //                 <div id="play-img" className="play-img godown" data-rellax-speed="3">
    //                     <img className="btn-normal" src={playBtn} alt="playBtn" />
    //                     <img className="btn-light" src={playBtnLight} alt="playBtn" />
    //                 </div>

    //             </div>
    //         </div>
    //     </div>
    //     <div className={"content-wrapper"}>
    //         <ClaimIntro />
    //         <NftMirrorInfo />
    //         <CharacterInfo />
    //         <PlayInfo />
    //         <TradeInfo />
    //         <DecentralizeInfo />
    //         <BackerInfo />
    //         <div className="footer">
    //             <div className="container">
    //                 <div className="footer__list">
    //                     <a href="https://twitter.com/SoviFinance" target="_blank" className="link2"><div><img data-lazy={twitterIcon} alt="twitterIcon" /></div></a>
    //                     <a href="https://t.me/sovi_finance" target="_blank" className="link2"><div><img data-lazy={telegramIcon} alt="telegramIcon" /></div></a>
    //                     <a href="https://discord.gg/AEBasmM" target="_blank" className="link2"><div><img data-lazy={robotIcon} alt="robotIcon" /></div></a>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // </Page>
  );
};

export default Home;