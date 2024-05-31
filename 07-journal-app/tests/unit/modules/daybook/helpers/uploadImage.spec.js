import uploadImage from "@/modules/daybook/helpers/uploadImage";
import axios from "axios";


describe('Se testea sobre uploadImge', () => {

    test('Debe de cargar un archivo y retornar url', async () => {

        const {data} = await axios.get('https://res.cloudinary.com/dsewcra3v/image/upload/v1709056370/oppzhs4tylmaj87c2jar.jpg', {
            responseType: 'arraybuffer'
        })

        const file = new File([data], 'foto.jpg')

        console.log(file);



    })

})