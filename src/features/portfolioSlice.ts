import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Asset, PortfolioAsset } from "../types";

interface PortfolioState {
    assets: Asset[];
    portfolioAssets: PortfolioAsset[];
}

const initialState: PortfolioState = {
    assets: [
        { name: "BTCUSDT", price: "0", percentChange24h: "0" },
        { name: "ETHUSDT", price: "0", percentChange24h: "0" },
    ],
    portfolioAssets: [
        { name: "BTCUSDT", count: 2, totalPrice: 30000, portfolioPercentage: 20 }
    ]
};

const portfolioSlice = createSlice({
    name: "portfolio",
    initialState,
    reducers: {
        updatePrice: (state, action: PayloadAction<Asset>) => {
            const asset = state.assets.find((a) => a.name === action.payload.name);
            if (asset) {
                asset.price = action.payload.price;
                asset.percentChange24h = action.payload.percentChange24h;
            } else {
                state.assets = [...state.assets, action.payload]
            }
        }
    },
});

export const { updatePrice } = portfolioSlice.actions;
export default portfolioSlice.reducer;