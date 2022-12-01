import axios, { AxiosResponse } from "axios";

const baseURL = process.env.NEXT_PUBLIC_SERVER_URL

export const useStudents = async ({ year, className, schoolId }: any) => {
    try {
        const data = await axios.get(
            `${baseURL}/student/getAll?year=${year}&class=${className}`
        );
        return { status: true, data };
    } catch (error) {
        console.log(error);
        return { status: false, error }
    }
}

export const useNewStudent = async ({ studentData }: any) => {
    try {
        const data = await axios.post(`${baseURL}/student/add`, studentData);
        console.log(data)
        return { status: true, data };
    } catch (error) {
        console.log(error);
        return { status: false, error }
    }
}


export const useUpdateStudent = async ({ studentData }: any) => {
    try {
        const data = await axios.post(`${baseURL}/student/edit`, studentData);
        return { status: true, data };
    } catch (error) {
        console.log(error);
        return { status: false, error }
    }
}

export const useNewRecord = async ({ recordData }: any) => {
    try {
        const data = await axios.post(`${baseURL}/student/addRecord`, recordData);
        return { status: true, data };
    } catch (error) {
        console.log(error);
        return { status: false, error }
    }
};

export const useUpdateRecord = async ({ newMark }: any) => {
    try {
        const data = await axios.post(`${baseURL}/student/updateMark`, newMark);
        return { status: true, data };
    } catch (error) {
        console.log(error);
        return { status: false, error }

    }
};

export const useRecords = async ({ _class, _year }: any) => {
    try {
        const data = await axios.post(
            `${baseURL}/student/getRecords?_class=${_class}&_year=${_year}`
        );
        return { status: true, data };
    } catch (error) {
        console.log(error);
        return { status: false, error }
    }
}

export const useDeleteRecord = async (_id: any) => {
    try {
        const data = await axios.delete(`${baseURL}/student/deleteRecord`, {
            headers: {},
            data: { _id },
        });
        return { status: true, data };
    } catch (error) {
        console.log(error);
        return { status: false, error }
    }
}

export const useAddParent = async ({ parent_email, studentId }: any) => {
    try {
        const data = await axios.post(`${baseURL}/student/addParent`, {
            parent_email,
            studentId,
        });
        return { status: true, data };
    } catch (error) {
        console.log(error);
        return { status: false, error }
    }
};

export const useGetSummary = async () => {
    try {
        const data = await axios.post(`${baseURL}/student/getSummary`);
        return { status: true, data };
    } catch (error) {
        console.log(error);
        return { status: false, error }
    }
};