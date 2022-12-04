import { api } from ".";


export const uploadImage = async (image: any) => {
  const data = new FormData();
  data.append("file", image);
  data.append("upload_preset", "ek_images");
  try {
    let res = await fetch(
      "https://api.cloudinary.com/v1_1/dkpaiyjv5/image/upload",
      {
        method: "post",
        body: data
      }
    );
    const urlData = await res.json();
    return urlData.secure_url;
  } catch (error) {
    console.log(error);
    return error;
  }
};


export const useLogin = async ({ formData }: any) => {
  try {
    console.log(formData)
    const data = await api.post(`/auth/login`, formData);
    if (data.data.code !== "#Success") return { status: false, data, message: data.data.message }
    return { status: true,isAdmin:data.data.isAdmin, data };
  } catch (error: any) {
    console.log(error)
    return { status: false, message: error.response.data.message };
  }
}

export const useGetUserDetails = async()=>{
  try {
    const data = await api.post(`/auth/login`);
    return { status: true,isAdmin:data.data.isAdmin, data }
  } catch (error:any) {
    console.log(error)
    return { status: false, message: error.response.data.message };
  }
}

export const useLogout = async()=>{
  try {
    const data = await api.get(`/auth/logout`);
    return data;
  } catch (error:any) {
    console.log(error)
    return { status: false, message: error.response.data.message };
  }
}
