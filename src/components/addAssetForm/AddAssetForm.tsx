import { ChangeEvent, FormEvent, useState, useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { addPortfolioAssets } from "../../features/portfolioSlice";

import { Asset, NewPortfolioAsset } from "../../types";

import s from "./addAssetForm.module.scss";


type AddAssetFormProps = {
  onClose: () => void;
};

const AddAssetForm: React.FC<AddAssetFormProps> = ({ onClose }) => {
  const [currentAsset, setCurrentAsset] = useState<NewPortfolioAsset | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const assets = useSelector((state: RootState) => state.portfolio.assets) ?? [];
  const dispatch = useDispatch();

  const onClick = useCallback((asset: Asset) => {
    setCurrentAsset({
      name: asset.name,
      price: asset.price,
      count: 1,
    });
  }, []);

  const onChangeCount = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setCurrentAsset((prev) => ({ ...prev as NewPortfolioAsset, count: Number(e.target.value) }));
  }, []);

  const handleSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      dispatch(addPortfolioAssets(currentAsset as NewPortfolioAsset));
      setCurrentAsset(null);
      onClose();
    },
    [currentAsset, dispatch, onClose]
  );

  const handleCancel = useCallback(() => {
    setCurrentAsset(null);
    onClose();
  }, [onClose]);

  const handleSearchChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  }, []);

  const filteredAssets = useMemo(
    () =>
      searchQuery.trim() === ""
        ? assets
        : assets.filter((asset) =>
          asset.name.toLowerCase().includes(searchQuery.toLowerCase())
        ),
    [assets, searchQuery]
  );

  const formattedAssets = useMemo(
    () =>
      filteredAssets.map((asset) => ({
        ...asset,
        price: Number(asset.price).toLocaleString("ru-RU", { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
        percentChange24h: Number(asset.percentChange24h).toFixed(2),
      })),
    [filteredAssets]
  );

  return (
    <div className={s.addAssetForm}>
      <input
        className={s.addAssetForm__input}
        type="text"
        placeholder="Поиск валюты"
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <div className={s.addAssetForm__list}>
        {formattedAssets.length > 0 &&
          formattedAssets.map((asset) => (
            <div className={s.addAssetForm__item} key={asset.name} onClick={() => onClick(asset)}>
              <span>{asset.name}</span>
              <span>${asset.price}</span>
              <span>{asset.percentChange24h}%</span>
            </div>
          ))}
      </div>

      {currentAsset && (
        <>
          <h4 className={s.addAssetForm__asset}>
            {currentAsset.name}: {currentAsset.price}
          </h4>
          <form onSubmit={handleSubmit}>
            <input
              className={s.addAssetForm__input}
              type="number"
              placeholder="Количество"
              value={currentAsset.count}
              onChange={onChangeCount}
              required
              min="1"
            />
            <div className={s.addAssetForm__buttons}>
              <button className={s.addAssetForm__button} type="submit" disabled={currentAsset.count <= 0}>
                добавить
              </button>
              <button className={s.addAssetForm__button} type="button" onClick={handleCancel}>
                отмена
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default AddAssetForm;
