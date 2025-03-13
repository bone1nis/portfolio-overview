// import { useState } from 'react';

import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

import s from "./addAssetForm.module.scss"

const AddAssetForm: React.FC = () => {
  const assets = useSelector((state: RootState) => state.portfolio.assets);

  return (
    <div className={s.addAssetForm}>
      <input className={s.addAssetForm__input} type="text" placeholder='Поиск валюты' />
      <div className={s.addAssetForm__list}>
        {assets.map(asset => {
          const formatPercentChange24h = Number(asset!.percentChange24h).toFixed(2);
          const formatPrice = Number(asset!.price).toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

          return (
            <div className={s.addAssetForm__item}>
              <span>{asset.name}</span>
              <span>${formatPrice}</span>
              <span>{formatPercentChange24h}%</span>
            </div>
          )
        })}
      </div>
      <input className={s.addAssetForm__input} type="text" placeholder='Поиск валюты' />
      <div className={s.addAssetForm__buttons}>
        <button className={s.addAssetForm__button}>добавить</button>
        <button className={s.addAssetForm__button}>отмена</button>
      </div>
    </div>
  );
};

export default AddAssetForm;