import { api } from ".";

export const useAddEducator = async ({ educatorData }: any) => {
    try {
        const data = await api.post(`/educator/add`, educatorData);
        return { status: true, data };
    } catch (error) {
        console.log(error);
        return { status: false, error }

    }
};
export const useGetAllEducators = async () => {
    try {
        const data = await api.get(`/educator/getAll`);
        return { status: true, data };
    } catch (error) {
        console.log(error);
        return { status: false, error }

    }
};
export const useEditEducator = async ({ educatorData }: any) => {
    try {
        const data = await api.get(`/educator/getAll`, educatorData);
        return { status: true, data };
    } catch (error) {
        console.log(error);
        return { status: false, error }

    }
};
