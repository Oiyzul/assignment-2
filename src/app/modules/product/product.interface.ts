export type TProduct = {
  name: string;
  description: string;
  price: number;
  category: string;
  tags: string[];
  variants: TVariantType[];
  inventory: {
    quantity: number;
    inStock: boolean;
  };
};

type TVariantType = {
  type: string;
  value: string;
};
