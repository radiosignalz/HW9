

export const getCoffeesFromStore = (state) => state.coffees;
export const getCoffeesData = (state) => getCoffeesFromStore(state).data;
export const getCoffeesLoading = (state) => getCoffeesFromStore(state).isLoading;
export const getCoffeesError = (state) => getCoffeesFromStore(state).isError;

export  const coffeesSelectors={
    getCoffeesFromStore,
    getCoffeesData,
    getCoffeesLoading,
    getCoffeesError,
};