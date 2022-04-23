export type CardData = {
  brand: string;
  name: string;
  rent: {
    period: string;
    price: number;
  };
  thumbnail: string;
};

export type Props = {
  data: CardData;
};
