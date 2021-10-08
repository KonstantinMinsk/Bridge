/* eslint-disable no-unused-vars */
import create from 'zustand';

type Store = {
    balance: number;
    incrementBalance: (money: number) => void;
    payForPlay: (bid: number) => void;
};

const useStore = create<Store>(
  (set): Store => {
    return {
      balance: 100,
      payForPlay: (bid: number) => {
        return set((state) => { return { balance: state.balance - bid }; });
      },
      incrementBalance: (money: number) => {
        return set((state) => { return { balance: state.balance + money }; });
      },
    };
  },
);

export default useStore;
