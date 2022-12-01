import axios, { AxiosResponse } from "axios";

const baseURL = process.env.NEXT_PUBLIC_SERVER_URL

export const useCreateSchool = async ({ formData }: any) => {
    try {
        console.log(baseURL);
        delete formData.logoImagePreviewStr;
        console.log(formData);
        const data = await axios.post(`${baseURL}/auth/signup`, formData, {
            headers: { "Content-Type": "application/json" },
        });
        console.log(data);
        return { status: true, data };
    } catch (error: AxiosResponse | any) {
        console.log(error.response);
        return { status: false, error };
    }
}

export const useSchools = async () => {
    try {
        const data = await axios.get(`${baseURL}/auth/schoolcodes`);
        if (!data.data) return
        console.log(data.data);
        return { status: true, schools: data.data.results };
    } catch (error: any) {
        console.log(error)
        return { status: false, message: error.message }
    }
}