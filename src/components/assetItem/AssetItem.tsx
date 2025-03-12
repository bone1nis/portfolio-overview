import React from 'react';
import s from './assetsItem.module.scss';
import { Asset, PortfolioAsset } from '../../types';

type AssetItemProps = {
  assets: Asset[];
  portfolioAsset: PortfolioAsset;
};

const AssetItem: React.FC<AssetItemProps> = ({ assets, portfolioAsset }) => {
  const asset = assets.find(asset => asset.name === portfolioAsset.name);

  const formatPercentChange24h = Number(asset!.percentChange24h).toFixed(2);
  const formatPrice = Number(Number(asset!.price).toFixed(2)).toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  const formatTotalPrice = Number(portfolioAsset.totalPrice.toFixed(2)).toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  return (
    <div className={s.assetItem}>
      <div className={s.assetItem__block}>
        <h6 className={s.assetItem__text}>{portfolioAsset.name}</h6>
      </div>
      <div className={s.assetItem__block}>
        <h6 className={s.assetItem__text}>{portfolioAsset.count.toFixed(5)}</h6>
      </div>
      <div className={s.assetItem__block}>
        <h6 className={s.assetItem__text}>${formatPrice}</h6>
      </div>
      <div className={s.assetItem__block}>
        <h6 className={s.assetItem__text}>${formatTotalPrice}</h6>
      </div>
      <div className={s.assetItem__block}>
        <h6 className={s.assetItem__text}>{formatPercentChange24h}%</h6>
      </div>
      <div className={s.assetItem__block}>
        <h6 className={s.assetItem__text}>{portfolioAsset.portfolioPercentage.toFixed(2)}%</h6>
      </div>
    </div>
  );
};

export default AssetItem;
