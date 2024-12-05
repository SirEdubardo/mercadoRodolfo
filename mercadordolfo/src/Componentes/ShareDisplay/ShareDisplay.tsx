import React from "react";
import Star from '@mui/icons-material/Star';
import StarBorder from '@mui/icons-material/StarBorder';
import {AcaoProps} from "../../Interfaces/AcaoProps.ts";


const AcaoDisplay: React.FC<AcaoProps> = ({
                                                     logourl,
                                                     symbol,
                                                     shortName,
                                                     currency,
                                                     regularMarketPrice,
                                                     regularMarketDayRange,
                                                     regularMarketDayHigh,
                                                     onToggleFavorite,
                                                     isFavorite,
                                                 }) => {
    return (
        <div className="p-5 border border-gray-300 rounded-lg shadow-md flex flex-col justify-between h-full">
            <div className="flex items-center mb-4">
                <img
                    src={logourl}
                    alt={shortName}
                    className="w-24 h-24 rounded-full mr-4"
                />
                <h2 className="text-xl font-bold">{symbol}</h2>
                <div
                    onClick={() => onToggleFavorite(symbol)}
                    className="ml-auto cursor-pointer"
                >
                    {isFavorite ? (
                        <Star fontSize="large" />
                    ) : (
                        <StarBorder fontSize="large" />
                    )}
                </div>
            </div>
            <div className="text-left ml-2 flex-1">
                <p><strong>Nome:</strong> {shortName}</p>
                <p><strong>Moeda:</strong> {currency}</p>
                <p><strong>Preço:</strong> {regularMarketPrice?.toFixed(2)} R$</p>
                <p><strong>Variação do dia:</strong> {regularMarketDayRange} R$</p>
                <p><strong>Maior preço hoje:</strong> {regularMarketDayHigh} R$</p>
            </div>
        </div>
    );
};

export default AcaoDisplay;