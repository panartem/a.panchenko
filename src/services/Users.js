import axios from "axios";
export default class UserService {
    static async getUsersByValues(name, values = '', start= 0, limit = 10) {
        let valuesQuery = '';

        values.replaceAll(' ', '').split(',').forEach((value) => {
            valuesQuery+= `&${name}=${value}`
        });

        try {
            const { data } = await axios(`https://jsonplaceholder.typicode.com/users?_start=${start}&_limit=${limit}${valuesQuery}`);

            return Promise.resolve({ data: data, error: null});
        } catch (error) {
            return Promise.resolve({ data: [], error: error});
        }
    }
}
