import { useQuery } from "@tanstack/vue-query";
import { inject } from "vue";
import { Store } from "../providers";

export function useProducts() {

  const store = inject(Store)!;

  const {
    isLoading,
    data: products,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: store.getProducts,
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
