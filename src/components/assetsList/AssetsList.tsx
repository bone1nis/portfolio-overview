import React from 'react';
import AssetItem from '../assetItem/AssetItem';
import s from "./assetsList.module.scss"
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { AssetData } from '../../types';

const AssetsList: React.FC = () => {
  const assets = useSelector((state: RootState) => state.portfolio.assets);
  const portfolioAssets = useSelector((state: RootState) => state.portfolio.portfolioAssets);

  const assetsData = portfolioAssets.map(portfolioAsset => {
    const asset = assets.find(asset => asset.name === portfolioAsset.name);
    return asset ? { ...portfolioAsset, ...asset } : null;
  }).filter(Boolean) as AssetData[];

  return (
    <div className={s.assetsList}>
      <div className={s.assetsList__header}>
        <div className={s.assetsList__item}>
          <h6 className={s.assetsList__text}>Актив</h6>
        </div>
        <div className={s.assetsList__item}>
          <h6 className={s.assetsList__text}>Количество</h6>
        </div>
        <div className={s.assetsList__item}>
          <h6 className={s.assetsList__text}>Цена</h6>
        </div>
        <div className={s.assetsList__item}>
          <h6 className={s.assetsList__text}>Общая стоимость</h6>
        </div>
        <div className={s.assetsList__item}>
          <h6 className={s.assetsList__text}>Изм. за 24 ч.</h6>
        </div>
        <div className={s.assetsList__item}>
          <h6 className={s.assetsList__text}>% портфеля</h6>
        </div>
      </div>
      <div className={s.assetsList__items}>
        {assetsData.map(assetData => <AssetItem assetData={assetData} key={assetData.name} />)}
      </div>
    </div>
  );
};

export default AssetsList;