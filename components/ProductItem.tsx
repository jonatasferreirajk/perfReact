import dynamic from "next/dynamic";
import { memo, useState } from "react";
import { AddProductToWishlistProps } from "./AddProductToWishlist";
// import { AddProductToWishlist } from "./AddProductToWishlist";

const AddProductToWishlist = dynamic<AddProductToWishlistProps>(
  () => {
    return import("./AddProductToWishlist").then(
      (mod) => mod.AddProductToWishlist
    );
  },
  {
    loading: () => <span>Loading...</span>,
  }
);

interface ProductItemProps {
  product: {
    id: number;
    price: number;
    title: string;
    priceFormatted: string;
  };
  onAddToWishList: (id: number) => void;
}

function ProductItemComponent({ product, onAddToWishList }: ProductItemProps) {
  const [isAddingToWishList, setAddingFromWishList] = useState(false);

  return (
    <div>
      {product.title} - <strong>{product.priceFormatted}</strong>
      <button onClick={() => setAddingFromWishList(true)}>
        Add to favorites
      </button>
      {isAddingToWishList && (
        <AddProductToWishlist
          onAddToWishList={() => onAddToWishList(product.id)}
          onRequestClose={() => setAddingFromWishList(false)}
        />
      )}
    </div>
  );
}

export const ProductItem = memo(
  ProductItemComponent,
  (prevProps, nextProps) => {
    return Object.is(prevProps.product, nextProps.product);
  }
);
