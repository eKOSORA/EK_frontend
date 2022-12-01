import axios, { AxiosResponse } from "axios";

const baseURL = process.env.NEXT_PUBLIC_SERVER_URL

export const useRegisterParent = async ({ parentData, studentID }: any) => {
    try {
        const data = await axios.post(
            `${baseURL}/parent/register?id=${studentID}`,
            parentData
        );
        return { status: true, data };
    } catch (error) {
        console.log(error)
        return { status: false, error }
    }
};
export const useGetInfo = async ({ parentId }: any) => {
    try {
        const data = await axios.post(`${baseURL}/parent/getInfo`, parentId);
        return { status: true, data };
    } catch (error) {
        console.log(error)
        return { status: false, error }
    }
};
