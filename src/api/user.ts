import { SingInFormProps } from '../interfaces/UI';

const user: SingInFormProps = {
	username: 'admin',
	password: '123456',
};

export const login = async (data: SingInFormProps) => {
	if (data.username === user.username && data.password === user.password) {
		return true;
	}
	return false;
};
