import { api } from ".";

export const useStudents = async ({ year, className, schoolId }: any) => {
    try {
        const data = await api.get(
            `/student/getAll?year=${year}&class=${className}`
        );
        return { status: true, data };
    } catch (error) {
        console.log(error);
        return { status: false, error }
    }
}

export const useNewStudents = async ({ studentData }: any) => {
    try {
        const data = await api.post(`/student/add`, {students:[...studentData]}, { withCredentials: true });
        console.log(studentData)
        return { status: true, data };
    } catch (error) {
        console.log(error);
        return { status: false, error }
    }
}


export const useUpdateStudent = async ({ studentData }: any) => {
    try {
        const data = await api.post(`/student/edit`, studentData);
        return { status: true, data };
    } catch (error) {
        console.log(error);
        return { status: false, error }
    }
}

export const useNewRecord = async ({ recordData }: any) => {
    try {
        const data = await api.post(`/student/addRecord`, recordData);
        return { status: true, data };
    } catch (error) {
        console.log(error);
        return { status: false, error }
    }
};

export const useUpdateRecord = async ({ newMark }: any) => {
    try {
        const data = await api.post(`/student/updateMark`, newMark);
        return { status: true, data };
    } catch (error) {
        console.log(error);
        return { status: false, error }

    }
};

export const useRecords = async ({ _class, _year }: any) => {
    try {
        const data = await api.post(`/student/getRecords?_class=${_class}&_year=${_year}`
        );
        return { status: true, data };
    } catch (error) {
        console.log(error);
        return { status: false, error }
    }
}

export const useDeleteRecord = async (_id: any) => {
    try {
        const data = await api.delete(`/student/deleteRecord`, {
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
        const data = await api.post(`/student/addParent`, {
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
        const data = await api.post(`/student/getSummary`);
        return { status: true, data };
    } catch (error) {
        console.log(error);
        return { status: false, error }
    }
};