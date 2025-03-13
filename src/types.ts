export type Asset = {
    name: string;
    price: string;
    percentChange24h: string;
}

export type PortfolioAsset = {
    name: string;
    count: number;
    totalPrice: number;
    portfolioPercentage: number;
}

export type AssetData = {
    name: string;
    price: string;
    percentChange24h: string;
    count: number;
    totalPrice: number;
    portfolioPercentage: number;
}