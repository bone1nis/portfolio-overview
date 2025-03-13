import React from 'react';
import s from './assetsItem.module.scss';
import { AssetData } from '../../types';

type AssetItemProps = {
  assetData: AssetData;
};

const AssetItem: React.FC<AssetItemProps> = ({ assetData }) => {

  const formatCount = assetData.count.toFixed(5);
  const formatPercentChange24h = Number(assetData!.percentChange24h).toFixed(2);
  const formatPrice = Number(assetData!.price).toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  const formatTotalPrice = Number(assetData.totalPrice).toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  const formatPortfolioPercentage = assetData.portfolioPercentage.toFixed(2);

  return (
    <div className={s.assetItem}>
      <div className={s.assetItem__block}>
        <h6 className={s.assetItem__text}>{assetData.name}</h6>
      </div>
      <div className={s.assetItem__block}>
        <h6 className={s.assetItem__text}>{formatCount}</h6>
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
        <h6 className={s.assetItem__text}>{formatPortfolioPercentage}%</h6>
      </div>
    </div>
  );
};

export default AssetItem;
