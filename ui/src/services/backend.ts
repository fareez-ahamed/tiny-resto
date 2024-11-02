export interface BackendService {
  getProducts: () => Promise<{ id: number; name: string; price: number }[]>;
}

export class FakeBackendService implements BackendService {
  private products = [
    { id: 1, name: "Idly", price: 10 },
    { id: 2, name: "Dosa", price: 50 },
    { id: 3, name: "Masala Dosa", price: 70 },
    { id: 4, name: "Pongal", price: 30 },
    { id: 5, name: "Chapathi", price: 20 },
    { id: 6, name: "Veg Meals", price: 100 },
    { id: 7, name: "Lime Juice", price: 30 },
  ];
  constructor() {}

  getProducts = (): Promise<{ id: number; name: string; price: number }[]> => {
    return Promise.resolve(this.products);
  };
}
