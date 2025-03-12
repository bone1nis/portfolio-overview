import React from 'react';
import AssetItem from '../assetItem/AssetItem';
import s from "./assetsList.module.scss"

const items = [
  { id: 1, name: "BCC", count: 1, price: 60000, allPrice: 6000000, changeIn24h: "15.2%", portfolioShare: "2.5%" },
  { id: 2, name: "acc", count: 31, price: 600400, allPrice: 60000040, changeIn24h: "151.2%", portfolioShare: "25.5%" }
];

const AssetsList: React.FC = () => {
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
        {items.map(item => <AssetItem item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default AssetsList;