import React from "react";

import "./WishList.css";
import PageContainer from "../../Component/Layout/PageContainer";
import SectionContainer from "../../Component/Layout/SectionContainer";
import EmptyWishList from "../../Component/Card/EmptyWishList";
import { gameList } from "../../Data";
import PrimaryCard from "../../Component/Card/PrimaryCard";

function WishList() {
  return (
    <PageContainer>
      <SectionContainer className="wish_section">
        {/* <EmptyWishList /> */}
        <h1 className="wish_head">WISH LIST ♥</h1>
        <div className="wish_body">
          {[gameList[0], gameList[1], gameList[2], gameList[3]].map(
            (currentGame) => {
              return (
                <PrimaryCard {...currentGame} key={currentGame.id} isWishList />
              );
            }
          )}
        </div>
      </SectionContainer>
    </PageContainer>
  );
}

export default WishList;
