import create from 'zustand';

type TStore = {
    balance: number;
    incrementBalance: (money: number) => void;
    payForPlay: (bid: number) => void;

	isAuth: boolean;
	loginSuccess: () => void;
	logoutSuccess: () => void;
	loginError: boolean;
	activeLoginError: () => void;
	inactiveLoginError: () => void;

	remainingCards: number | null;
	updateRemainingCards: (remainingCards: number | null) => void;
};

const checkLoginLocalStorage = (): boolean => {
	try {
		return localStorage.getItem('isAuth') === 'true';
	} catch {
		return false;
	}
};


const useStore = create<TStore>(
	(set): TStore => ({
		balance: 100,
		payForPlay: (bid: number) => set((state) => ({ balance: state.balance - bid })),
		incrementBalance: (money: number) => set((state) => ({ balance: state.balance + money })),

		isAuth: checkLoginLocalStorage(),
		loginSuccess: () => {
			set(() => ({ isAuth: true }));
			try {
				localStorage.setItem('isAuth', 'true');
			} catch {
				// do noting
			}
		},
		logoutSuccess: () => {
			set(() => ({ isAuth: false }));
			try {
				localStorage.removeItem('isAuth');
			} catch {
				// do noting
			}
		},
		loginError: false,
		activeLoginError: () => {
			set(() => ({ loginError: true }));
		},
		inactiveLoginError: () => {
			set(() => ({ loginError: false }));
		},

		remainingCards: null,
		updateRemainingCards: (remainingCards) => {
			set(() => ({ remainingCards }));
		},
	}),
);

export default useStore;
