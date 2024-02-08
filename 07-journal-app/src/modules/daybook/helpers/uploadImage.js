import cloudinaryApi from "@/api/cloudinaryApi"

const uploadImage = async ( file ) => {
    
    if(!file){
        return
    }

    try {
        
        const formData = new FormData() //? Para mandar archivos

        formData.append('upload_preset', 'curso-vue')
        formData.append('file', file)

        const {data} =  await cloudinaryApi.post('', formData)

        return data.secure_url

        

    } catch (error) {
        console.error('Error al cargar imagen, revisar logs');
        console.log(error);

        return null
    }
}

export default uploadImage;