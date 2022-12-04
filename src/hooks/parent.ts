import { api } from ".";


export const useRegisterParent = async ({ parentData, studentID }: any) => {
    try {
        const data = await api.post(
            `/parent/register?id=${studentID}`,
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
        const data = await api.post(`/parent/getInfo`, parentId);
        return { status: true, data };
    } catch (error) {
        console.log(error)
        return { status: false, error }
    }
};
