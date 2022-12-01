import axios, { AxiosResponse } from "axios";

const baseURL = process.env.NEXT_PUBLIC_SERVER_URL

export const useGetAllAnnouncements = async () => {
    try {
        const data = await axios.get(`${baseURL}/announcement/getAll`);
        return { status: true, data }
    } catch (error) {
        console.log(error);
        return { status: false, error }
    }
};
export const useNewAnnouncement = async ({ announcementData }: any) => {
    try {
        const data = await axios.post(
            `${baseURL}/announcement/new`,
            announcementData
        );
        return { status: true, data }
    } catch (error) {
        console.log(error);
        return { status: false, error }
    }
};