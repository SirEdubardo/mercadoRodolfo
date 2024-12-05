export interface AcaoProps {
    symbol: string;
    logourl: string;
    shortName: string;
    currency: string;
    regularMarketPrice: number;
    regularMarketDayRange: string;
    regularMarketDayHigh: number;
    onToggleFavorite: (symbol: string) => void;
    isFavorite: boolean;
}