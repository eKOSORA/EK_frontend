import axios, { AxiosResponse } from "axios";

const baseURL = process.env.NEXT_PUBLIC_SERVER_URL

export const useAddEducator = async ({ educatorData }: any) => {
    try {
        const data = await axios.post(`${baseURL}/educator/add`, educatorData);
        return { status: true, data };
    } catch (error) {
        console.log(error);
        return { status: false, error }

    }
};
export const useGetAllEducators = async () => {
    try {
        const data = await axios.get(`${baseURL}/educator/getAll`);
        return { status: true, data };
    } catch (error) {
        console.log(error);
        return { status: false, error }

    }
};
export const useEditEducator = async ({ educatorData }: any) => {
    try {
        const data = await axios.get(`${baseURL}/educator/getAll`, educatorData);
        return { status: true, data };
    } catch (error) {
        console.log(error);
        return { status: false, error }

    }
};
