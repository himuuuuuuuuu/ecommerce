import React from "react";
import Lottie from "lottie-react";

import "./WishList.css";
import PageContainer from "../../Component/Layout/PageContainer";
import SectionContainer from "../../Component/Layout/SectionContainer";
import EmptyWishList from "../../Component/Card/EmptyWishList";
import PrimaryCard from "../../Component/Card/PrimaryCard";
import { useData } from "../../Context/DataContext";
import EmptyBoxLottie from "../../Asset/Lottie/EmptyBox.json";

function WishList() {
  const { state } = useData();

  return (
    <PageContainer>
      <SectionContainer className="wish_section">
        {/* <EmptyWishList /> */}
        <h1 className="wish_head">WISH LIST ♥</h1>
        {state.wishList.length == 0 ? (
          <div>
            <EmptyWishList />
            {/* <Lottie animationData={EmptyBoxLottie} /> */}
          </div>
        ) : (
          <div className="wish_body">
            {state.wishList.map((currentGame) => {
              return (
                <PrimaryCard {...currentGame} key={currentGame.id} isWishList />
              );
            })}
          </div>
        )}
      </SectionContainer>
    </PageContainer>
  );
}

export default WishList;
