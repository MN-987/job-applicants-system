import { axiosInstance } from "../config.service";


export const saveFormData = async (data) => {
    const formDataObj = {
        type: 'candidate_application',
        data: data
    };
    // JSON.stringify(formDataObj);
    return axiosInstance.post(`/api/v1/apply`, formDataObj);
}

