import { useState, useRef, useMemo } from "react";

import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

import AssetItem from "../assetItem/AssetItem";

import { AssetData } from "../../types";
import s from "./assetsList.module.scss";


const rowHeight = 50;
const visibleItemsLength = 10;

const AssetsList: React.FC = () => {
  const assets = useSelector((state: RootState) => state.portfolio.assets);
  const portfolioAssets = useSelector((state: RootState) => state.portfolio.portfolioAssets);

  const assetsData = useMemo(() => {
    return portfolioAssets
      .map((portfolioAsset) => {
        const asset = assets.find((asset) => asset.name === portfolioAsset.name);
        return asset ? { ...portfolioAsset, ...asset } : null;
      })
      .filter(Boolean) as AssetData[];
  }, [assets, portfolioAssets]);

  const [scrollTop, setScrollTop] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    setScrollTop(e.currentTarget.scrollTop);
  };

  const startNodeElem = Math.floor(scrollTop / rowHeight);
  const endNodeElem = startNodeElem + visibleItemsLength;

  const visibleItems = assetsData.slice(startNodeElem, endNodeElem);
  const offsetY = startNodeElem * rowHeight;

  return (
    <div className={s.assetsList}>
      <div className={s.assetsList__header}>
        <div className={s.assetsList__headerItem}>
          <h6 className={s.assetsList__headerText}>Актив</h6>
        </div>
        <div className={s.assetsList__headerItem}>
          <h6 className={s.assetsList__headerText}>Количество</h6>
        </div>
        <div className={s.assetsList__headerItem}>
          <h6 className={s.assetsList__headerText}>Цена</h6>
        </div>
        <div className={s.assetsList__headerItem}>
          <h6 className={s.assetsList__headerText}>Общая стоимость</h6>
        </div>
        <div className={s.assetsList__headerItem}>
          <h6 className={s.assetsList__headerText}>Изм. за 24 ч.</h6>
        </div>
        <div className={s.assetsList__headerItem}>
          <h6 className={s.assetsList__headerText}>% портфеля</h6>
        </div>
      </div>

      <div
        className={s.assetsList__container}
        ref={containerRef}
        onScroll={handleScroll}
      >
        <div
          style={{ height: `${assetsData.length * rowHeight}px` }}
          className={s.assetsList__itemsWrapper}>
          <div
            style={{ transform: `translateY(${offsetY}px)` }}
            className={s.assetsList__items}>
            {visibleItems.map((assetData) => (
              <AssetItem assetData={assetData} key={assetData.name} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssetsList;
