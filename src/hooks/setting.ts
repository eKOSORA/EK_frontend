import { api } from ".";


export const useSetUpdateSettings = async ({ newSettings }: any) => {
    try {
        const data = await api.post(`/settings/newTerm`, newSettings);
        return { status: true, data };
    } catch (error) {
        console.log(error);
        return { status: false, error }

    }
};
export const useSetNewTerm = async ({ newTermData }: any) => {
    try {
        const data = await api.post(`/settings/newTerm`, newTermData);
        return { status: true, data };
    } catch (error) {
        console.log(error);
        return { status: false, error }

    }
};
export const useSetGetTerms = async () => {
    try {
        const data = await api.get(`/settings/newTerm`);
        return data;
    } catch (error) {
        console.log("Fetch error");
        console.log(error);
        return;
    }
};

export const useSetUpdateProfile = async ({ newProfileData }: any) => {
    try {
        const data = await api.post(
            `/settings/updateProfile`,
            newProfileData
        );
        return { status: true, data };
    } catch (error) {
        console.log(error);
        return { status: false, error }

    }
};