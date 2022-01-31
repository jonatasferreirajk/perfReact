export interface AddProductToWishlistProps {
  onAddToWishList: () => void;
  onRequestClose: () => void;
}

export function AddProductToWishlist({
  onAddToWishList,
  onRequestClose,
}: AddProductToWishlistProps) {
  return (
    <span>
      Do you want to add to favorites?
      <button onClick={onAddToWishList}>Yes</button>
      <button onClick={onRequestClose}>No</button>
    </span>
  );
}
