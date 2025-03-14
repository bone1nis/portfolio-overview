import { useDispatch } from 'react-redux';

import { AssetData } from '../../types';

import s from './assetsItem.module.scss';
import { removePortfolioAssets } from '../../features/portfolioSlice';


type AssetItemProps = {
  assetData: AssetData;
};

const AssetItem: React.FC<AssetItemProps> = ({ assetData }) => {
  const dispatch = useDispatch();

  const onClick = (assetName: string) => {
    dispatch(removePortfolioAssets(assetName))
  };

  const formatCount = assetData.count.toFixed(5);
  const formatPercentChange24h = Number(assetData!.percentChange24h).toFixed(2);
  const formatPrice = Number(assetData!.price).toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  const formatTotalPrice = Number(assetData.totalPrice).toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  const formatPortfolioPercentage = assetData.portfolioPercentage.toFixed(2);

  return (
    <div
      className={s.assetItem}
      onClick={() => onClick(assetData.name)}
      tabIndex={1}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClick(assetData.name);
        }
      }}
    >
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
