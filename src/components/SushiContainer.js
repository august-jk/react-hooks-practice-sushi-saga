import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ sushis, onClearPlate }) {
  const [sushiIndex, setSushiIndex] = useState(0)
  const renderSushi = sushis.slice(sushiIndex, sushiIndex + 4).map((sushi) => <Sushi key={sushi.id} sushi={sushi} onClearPlate={onClearPlate}/>)
  function handleClickMoreSushi() {
    setSushiIndex(sushiIndex => (sushiIndex + 4) % sushis.length)
  }
  return (
    <div className="belt">
      {renderSushi}
      <MoreButton onClickMoreSushi={handleClickMoreSushi}/>
    </div>
  );
}

export default SushiContainer;
