import faker from 'faker';
import generator from 'generate-password';

export const getSomeEmail = () => faker.internet.email();
export const getPassword = () => generator.generate({
	length: 10,
	numbers: true
});