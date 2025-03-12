import React from 'react';
import s from './assetsItem.module.scss';
import { Asset } from '../../types';

type AssetItemProps = {
  item: Asset;
};

const AssetItem: React.FC<AssetItemProps> = ({ item }) => {
  return (
    <div className={s.assetItem}>
      <div className={s.assetItem__block}>
        <h6 className={s.assetItem__text}>{item.name}</h6>
      </div>
      <div className={s.assetItem__block}>
        <h6 className={s.assetItem__text}>{item.count}</h6>
      </div>
      <div className={s.assetItem__block}>
        <h6 className={s.assetItem__text}>{item.price}</h6>
      </div>
      <div className={s.assetItem__block}>
        <h6 className={s.assetItem__text}>{item.allPrice}</h6>
      </div>
      <div className={s.assetItem__block}>
        <h6 className={s.assetItem__text}>{item.changeIn24h}</h6>
      </div>
      <div className={s.assetItem__block}>
        <h6 className={s.assetItem__text}>{item.portfolioShare}</h6>
      </div>
    </div>
  );
};

export default AssetItem;
