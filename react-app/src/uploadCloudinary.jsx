import axios from "axios";

export const uploadCloudinary = async (file) => {
    const formData = new FormData ();
    formData.append("file",file)
    formData.append("upload_preset","ml_default")
    const {data} = await axios.post("https://api.cloudinary.com/v1_1/dlwkur7zi/image/upload",formData)
    return  data?.secure_url
}