import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Asset, NewPortfolioAsset, PortfolioAsset } from "../types";

interface PortfolioState {
    assets: Asset[];
    portfolioAssets: PortfolioAsset[];
    totalPortfolioPrice: number;
}

const initialState: PortfolioState = {
    assets: [
        { name: "BTCUSDT", price: "0", percentChange24h: "0" },
        { name: "ETHUSDT", price: "0", percentChange24h: "0" },
    ],
    portfolioAssets: [],
    totalPortfolioPrice: 0
};

const portfolioSlice = createSlice({
    name: "portfolio",
    initialState,
    reducers: {
        updateAssets: (state, action: PayloadAction<Asset>) => {
            const asset = state.assets.find((a) => a.name === action.payload.name);
            if (asset) {
                asset.price = action.payload.price;
                asset.percentChange24h = action.payload.percentChange24h;
            } else {
                state.assets = [...state.assets, action.payload];
            }

            state.portfolioAssets.forEach((portfolioAsset) => {
                const updatedAsset = state.assets.find(
                    (a) => a.name === portfolioAsset.name
                );
                if (updatedAsset) {
                    const newPrice = parseFloat(updatedAsset.price.replace(/\s+/g, '').replace(',', '.'));
                    portfolioAsset.totalPrice = newPrice * portfolioAsset.count;
                }
            });

            state.totalPortfolioPrice = state.portfolioAssets.reduce(
                (sum, asset) => sum + asset.totalPrice, 0
            );

            state.portfolioAssets.forEach((asset) => {
                asset.portfolioPercentage = (asset.totalPrice / state.totalPortfolioPrice) * 100;
            });
        },
        addPortfolioAssets: (state, action: PayloadAction<NewPortfolioAsset>) => {
            const { name, count, price } = action.payload;
            const formattedPrice = parseFloat(price.replace(/\s+/g, '').replace(',', '.'));

            let assetTotalPrice = formattedPrice * count;
            assetTotalPrice = assetTotalPrice ? assetTotalPrice : 0;

            const existingAsset = state.portfolioAssets.find(asset => asset.name === name);

            if (!existingAsset) {
                state.portfolioAssets.push({
                    name,
                    count,
                    totalPrice: assetTotalPrice,
                    portfolioPercentage: 0,
                });
            } else {
                existingAsset.count += count;
                existingAsset.totalPrice += assetTotalPrice;
            }

            state.totalPortfolioPrice = state.portfolioAssets.reduce((sum, asset) => sum + asset.totalPrice, 0) || 1;

            state.portfolioAssets.forEach(asset => {
                asset.portfolioPercentage = (asset.totalPrice / state.totalPortfolioPrice) * 100;
            });
        }


    },
});

export const { updateAssets, addPortfolioAssets } = portfolioSlice.actions;
export default portfolioSlice.reducer;