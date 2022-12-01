import axios, { AxiosResponse } from "axios";

const baseURL = process.env.NEXT_PUBLIC_SERVER_URL

export const useSetUpdateSettings = async ({ newSettings }: any) => {
    try {
        const data = await axios.post(`${baseURL}/settings/newTerm`, newSettings);
        return { status: true, data };
    } catch (error) {
        console.log(error);
        return { status: false, error }

    }
};
export const useSetNewTerm = async ({ newTermData }: any) => {
    try {
        const data = await axios.post(`${baseURL}/settings/newTerm`, newTermData);
        return { status: true, data };
    } catch (error) {
        console.log(error);
        return { status: false, error }

    }
};
export const useSetGetTerms = async () => {
    try {
        const data = await axios.get(`${baseURL}/settings/newTerm`);
        return data;
    } catch (error) {
        console.log("Fetch error");
        console.log(error);
        return;
    }
};

export const useSetUpdateProfile = async ({ newProfileData }: any) => {
    try {
        const data = await axios.post(
            `${baseURL}/settings/updateProfile`,
            newProfileData
        );
        return { status: true, data };
    } catch (error) {
        console.log(error);
        return { status: false, error }

    }
};