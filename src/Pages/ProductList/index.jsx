import React from "react";

import "./ProductList.css";
import PageContainer from "../../Component/Layout/PageContainer";
import SectionContainer from "../../Component/Layout/SectionContainer";
import Filter from "../../Component/Filter";
import PrimaryCard from "../../Component/Card/PrimaryCard";

function ProductList() {
  const gameList = [
    // {
    //   id: "0",
    //   title: "",
    //   rating: "",
    //   price: "",
    //   genre: "",
    //   developer: "",
    //   publisher: "",
    //   release: "",
    //   downloads: "",
    //   esrb: "",
    //   status: "",
    //   age: "",
    //   requirement: {
    //     minimum: { memory: "", storage: "", cpu: "", gpu: "", os: "" },
    //     recommended: { memory: "", storage: "", cpu: "", gpu: "", os: "" },
    //   },
    //   thumbnail: "",
    //   imageList: [],
    //   logo: "",
    //   description: "",
    // },
    {
      id: "0",
      title: "Grand Theft Auto V",
      rating: "5",
      price: "2,321",
      genre: "Adventure",
      developer: "Rockstar Games",
      publisher: "Rockstar Games",
      release: "05/14/20",
      downloads: "175",
      esrb: "R",
      status: "online",
      age: "18+",
      requirement: {
        minimum: {
          memory: "4",
          storage: "90",
          cpu: "Intel Core 2 Quad CPU Q6600 @ 2.40GHz (4 CPUs)",
          gpu: "NVIDIA 9800 GT 1GB",
          os: "Windows 10 64 Bit",
        },
        recommended: {
          memory: "8",
          storage: "90",
          cpu: "Intel Core i5 3470 @ 3.2GHZ (4 CPUs)",
          gpu: "NVIDIA GTX 660 2GB",
          os: "Windows 10 64 Bit",
        },
      },
      thumbnail:
        "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/fob/640/GTAOnline.jpg",
      imageList: [],
      logo: "https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Fgrand-theft-auto-v%2Fhome%2FGTAV_EGS_Artwork_400x400_GameLogo-1000x1000-f6c47a98454049a5e63959f7b6f898c4fc22829c.png?h=270&quality=medium&resize=1&w=480",
      description:
        "The Grand Theft Auto V: Premium Edition includes the complete GTAV story, Grand Theft Auto Online and all existing gameplay upgrades and content. You’ll also get the Criminal Enterprise Starter Pack, the fastest way to jumpstart your criminal empire in GTA Online.",
    },
    // {
    //   id: "1",
    //   title: "Valorant",
    //   rating: "4",
    //   price: "2500",
    //   genre: "Shooter",
    //   developer: "Riot Games",
    //   publisher: "Riot Games",
    //   release: "11/04/21",
    //   downloads: "",
    //   esrb: "",
    //   status: "online",
    //   age: "",
    //   requirement: {
    //     minimum: {
    //       memory: "4",
    //       storage: "20",
    //       cpu: "Intel Core 2 Duo E8400 (Intel)",
    //       gpu: "Intel HD 4000, Radeon R5 200",
    //       os: "Window 7/8",
    //     },
    //     recommended: {
    //       memory: "4",
    //       storage: "20",
    //       cpu: "Intel i3-4150 (Intel), Ryzen 3 1200",
    //       gpu: "GeForce GT 730, Radeon R7 240",
    //       os: "Window 10 (64-Bit)",
    //     },
    //   },
    //   thumbnail: "",
    //   imageList: [],
    //   logo: "https://cdn2.unrealengine.com/egs-valorant-riotgames-ic1-400x270-ee924f75e8d4.png?h=270&quality=medium&resize=1&w=480",
    //   description:
    //     "VALORANT is a character-based 5v5 tactical shooter set on the global stage. Outwit, outplay, and outshine your competition with tactical abilities, precise gunplay, and adaptive teamwork.",
    // },
    {
      id: "2",
      title: "FIFA 23 Ultimate Edition",
      rating: "4",
      price: "4800",
      genre: "Sports",
      developer: "EA Canada",
      publisher: "Electronic Arts",
      release: "09/30/22",
      downloads: "",
      esrb: "",
      status: "Offline",
      age: "",
      requirement: {
        minimum: {
          memory: "8",
          storage: "100",
          cpu: "Core i5 6600k",
          gpu: "GeForce GTX 1050 Ti",
          os: "Windows 10 64-bit",
        },
        recommended: {
          memory: "12",
          storage: "100",
          cpu: "Core i7 6700",
          gpu: "GeForce GTX 1660",
          os: "Windows 10 64-bit",
        },
      },
      thumbnail:
        "https://media.contentapi.ea.com/content/dam/gin/images/2022/07/eas-fifa22-gen5-ue-keyart-horz-f23logo.jpg.adapt.crop1x1.767p.jpg",
      imageList: [],
      logo: "https://cdn2.unrealengine.com/egs-fifa23ultimateeditionlimitedtimebonus-eacanada-editions-ic1-200x200-674fec977cfd.png?h=270&quality=medium&resize=1&w=480",
      description:
        "Kick off your season with a boost! FIFA 23 Ultimate Edition includes 4600 FIFA Points.",
    },
    {
      id: "3",
      title: "STAR WARS Jedi: Survivor™",
      rating: "",
      price: "3500",
      genre: "Adventure",
      developer: "Respawn Entertainment",
      publisher: "Electronic Arts",
      release: "04/28/23",
      downloads: "",
      esrb: "",
      status: "Offline",
      age: "",
      requirement: {
        minimum: {
          memory: "8",
          storage: "155",
          cpu: "4 core / 8 threads | Intel Core i7-7700",
          gpu: "Ryzen 5 1400",
          os: "Windows 10 64-bit",
        },
        recommended: {
          memory: "16",
          storage: "155",
          cpu: "4 core / 8 threads | Intel Core i5 11600K",
          gpu: "Ryzen 5 5600X",
          os: "Windows 10 64-bit",
        },
      },
      thumbnail:
        "https://media.contentapi.ea.com/content/dam/gin/images/2022/06/star-wars-jedi-survivor-keyart.jpg.adapt.crop1x1.767p.jpg",
      imageList: [],
      logo: "https://cdn2.unrealengine.com/egs-starwarsjedisurvivorstandardedition-respawnentertainment-ic1-400x400-9ff568e5738d.png?h=270&quality=medium&resize=1&w=480",
      description:
        "The story of Cal Kestis continues in Star Wars Jedi: Survivor™, a third-person galaxy-spanning action-adventure game from Respawn Entertainment and Lucasfilm Games.",
    },
    {
      id: "4",
      title: "Battlefield™ 2042",
      rating: "",
      price: "",
      genre: "Action",
      developer: "DICE",
      publisher: "Electronic Arts",
      release: "11/19/21",
      downloads: "",
      esrb: "",
      status: "",
      age: "",
      requirement: {
        minimum: {
          memory: "8",
          storage: "100",
          cpu: "Core i5 6600K",
          gpu: "Nvidia GeForce GTX 1050 Ti",
          os: "64-bit Windows 10",
        },
        recommended: {
          memory: "16",
          storage: "100",
          cpu: "Core i5 6600K",
          gpu: "Nvidia GeForce RTX 3060",
          os: "64-bit Windows 10",
        },
      },
      thumbnail:
        "https://media.contentapi.ea.com/content/dam/gin/images/2021/06/battlefield-2042-key-art.jpg.adapt.crop1x1.767p.jpg",
      imageList: [],
      logo: "https://cdn2.unrealengine.com/egs-battlefield2042-dice-ic1-400x400-9d42aed4f59b.png?h=270&quality=medium&resize=1&w=480",
      description:
        "Battlefield™ 2042 marks the return to the iconic all-out warfare of the franchise. Squad up and bring a cutting-edge arsenal into massive-scale battlegrounds, set in a near-future world transformed by disorder.",
    },
    {
      id: "5",
      title: "Dead Space",
      rating: "5",
      price: "3000",
      genre: "Horror",
      developer: "Motive Studio",
      publisher: "Electronic Arts",
      release: "01/27/23",
      downloads: "",
      esrb: "",
      status: "",
      age: "",
      requirement: {
        minimum: {
          memory: "8",
          storage: "50GB SATA SSD",
          cpu: "Core i5 8600",
          gpu: "Ryzen 5 2600x",
          os: "Window 10 64-bit",
        },
        recommended: {
          memory: "16",
          storage: "50GB SSD PCIe compatible",
          cpu: "Core i5 11600K",
          gpu: "Ryzen 5 5600X",
          os: "Window 10 64-bit",
        },
      },
      thumbnail:
        "https://media.contentapi.ea.com/content/dam/gin/images/2022/09/dead-space-classic-keyart.jpg.adapt.crop1x1.767p.jpg",
      imageList: [],
      logo: "https://cdn2.unrealengine.com/egs-deadspace-motive…64eb642fc.png?h=270&quality=medium&resize=1&w=480",
      description:
        "The sci-fi survival horror classic returns, completely rebuilt to offer an even more immersive experience – including visual, audio, and gameplay improvements.",
    },
    {
      id: "6",
      title: "The Sims™ 4",
      rating: "5",
      price: "1500",
      genre: "Simulation",
      developer: "Maxis",
      publisher: "Electronic Arts",
      release: "02/02/23",
      downloads: "",
      esrb: "",
      status: "Online",
      age: "",
      requirement: {
        minimum: {
          memory: "4",
          storage: "26",
          cpu: "3.3 GHz Intel Core i3-3220",
          gpu: "NVIDIA GeForce 6600",
          os: "64 Bit Windows 10",
        },
        recommended: {
          memory: "8",
          storage: "51",
          cpu: "Intel core i5 (4 cores)",
          gpu: "NVIDIA GTX 650",
          os: "64 Bit Windows 10",
        },
      },
      thumbnail:
        "https://media.contentapi.ea.com/content/dam/gin/images/2017/01/the-sims-4-keyart.jpg.adapt.crop1x1.767p.jpg",
      imageList: [],
      logo: "https://cdn2.unrealengine.com/egs-thesims4-electronicarts-ic1-400x400-b8a3c66fbb00.png?h=270&quality=medium&resize=1&w=480",
      description:
        "The Sims 4 is free to download! Unleash your imagination and create a unique world of Sims that’s an expression of you. Choose how Sims look, act, and dress, then manage the ups and downs of their everyday lives.",
    },
    {
      id: "7",
      title: "",
      rating: "",
      price: "",
      genre: "",
      developer: "",
      publisher: "",
      release: "",
      downloads: "",
      esrb: "",
      status: "",
      age: "",
      requirement: {
        minimum: { memory: "", storage: "", cpu: "", gpu: "", os: "" },
        recommended: { memory: "", storage: "", cpu: "", gpu: "", os: "" },
      },
      thumbnail: "",
      imageList: [],
      logo: "",
      description: "",
    },
    {
      id: "0",
      title: "",
      rating: "",
      price: "",
      genre: "",
      developer: "",
      publisher: "",
      release: "",
      downloads: "",
      esrb: "",
      status: "",
      age: "",
      requirement: {
        minimum: { memory: "", storage: "", cpu: "", gpu: "", os: "" },
        recommended: { memory: "", storage: "", cpu: "", gpu: "", os: "" },
      },
      thumbnail: "",
      imageList: [],
      logo: "",
      description: "",
    },
    {
      id: "0",
      title: "",
      rating: "",
      price: "",
      genre: "",
      developer: "",
      publisher: "",
      release: "",
      downloads: "",
      esrb: "",
      status: "",
      age: "",
      requirement: {
        minimum: { memory: "", storage: "", cpu: "", gpu: "", os: "" },
        recommended: { memory: "", storage: "", cpu: "", gpu: "", os: "" },
      },
      thumbnail: "",
      imageList: [],
      logo: "",
      description: "",
    },
  ];
  return (
    <PageContainer>
      <SectionContainer className="product_list">
        <Filter />
        <div className="product_list_content">
          <h3 className="product_list_content_head">Products</h3>
          <div className="product_list_content_body">
            {gameList.map((currentGame) => {
              return <PrimaryCard {...currentGame} key={currentGame.id} />;
            })}
          </div>
        </div>
      </SectionContainer>
    </PageContainer>
  );
}

export default ProductList;
