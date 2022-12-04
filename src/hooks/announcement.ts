import { api } from ".";


export const useGetAllAnnouncements = async () => {
    try {
        const data = await api.get(`/announcement/getAll`);
        return { status: true, data }
    } catch (error) {
        console.log(error);
        return { status: false, error }
    }
};
export const useNewAnnouncement = async ({ announcementData }: any) => {
    try {
        const data = await api.post(
            `/announcement/new`,
            announcementData
        );
        return { status: true, data }
    } catch (error) {
        console.log(error);
        return { status: false, error }
    }
};