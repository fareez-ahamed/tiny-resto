import { useQuery } from "@tanstack/vue-query";
import { fetchProducts } from "../api";

export function useProducts() {
  const {
    isLoading,
    data: products,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  const findById = (id: number) => {
    return products.value?.find((x) => x.id === id);
  };

  return {
    isLoading,
    products,
    error,
    findById
  };
}
