import { useMemo } from "react";
import { ProductItem } from "./ProductItem";

interface SearchResultsProps {
  results: Array<{
    id: number;
    price: number;
    title: string;
  }>;
}

export function SearchResults({ results }: SearchResultsProps) {
  const totalPrice = useMemo(() => {
    return results.reduce((total, product) => {
      return total + product.price;
    }, 0);
  }, [results]);

  return (
    <div>
      <h2>{totalPrice}</h2>

      {results.map((product) => {
        return <ProductItem key={product.id} product={product} />;
      })}
    </div>
  );
}

/**
 * When does a react component render again?
 * 1 - Create a new component version
 * 2 - Compare with the previous version
 * 3 - If there are changes, it will update what was changed.
 *
 * ----------------------------------------------
 * In which situations is it recommended to use Memo?
 * 1 - Pure Functional Components
 * 2 - Renders too often
 * 3 - Re-renders with same prevProps
 * 4 - Medium to big size
 *-----------------------------------------------
 * useMemo / useCallback
 */
