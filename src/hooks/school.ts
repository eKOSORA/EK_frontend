import { api } from ".";

export const useCreateSchool = async ({ formData }: any) => {
    try {
        delete formData.logoImagePreviewStr;
        console.log(formData);
        const data = await api.post(`/auth/signup`, formData, {
            headers: { "Content-Type": "application/json" },
        });
        console.log(data);
        return { status: true, data };
    } catch (error: any) {
        console.log(error.response);
        return { status: false, error };
    }
}

export const useSchools = async () => {
    try {
        const data = await api.get(`/auth/schoolcodes`);
        if (!data.data) return
        console.log(data.data);
        return { status: true, schools: data.data.results };
    } catch (error: any) {
        console.log(error)
        return { status: false, message: error.message }
    }
}