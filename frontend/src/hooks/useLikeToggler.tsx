import { useState, useEffect } from 'react';

export const useLikeToggle = () => {
  console.log(localStorage.getItem('likedProducts'))
  const [likedProducts, setLikedProducts] = useState<number[]>(() => {
    const saved = localStorage.getItem('likedProducts');
    return saved ? JSON.parse(saved) : [];
  });

  const handleLikeToggle = (id: number) => {
    setLikedProducts((prev) =>
      prev.includes(id)
        ? prev.filter((productId) => productId !== id)
        : [...prev, id]
    );
  };

  useEffect(() => {
    localStorage.setItem('likedProducts', JSON.stringify(likedProducts));
    window.dispatchEvent(new CustomEvent('likedProductsUpdated', { detail: likedProducts }));
  }, [likedProducts]);

  useEffect(() => {
    const syncLikedProducts = (event: Event) => {
      const customEvent = event as CustomEvent<number[]>;
      setLikedProducts(customEvent.detail);
    };

    window.addEventListener('likedProductsUpdated', syncLikedProducts);
    return () => window.removeEventListener('likedProductsUpdated', syncLikedProducts);
  }, []);

  return { likedProducts, handleLikeToggle };
};
