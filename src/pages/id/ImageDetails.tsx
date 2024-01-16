import {useParams} from "react-router-dom";
import {Box, Image} from "@chakra-ui/react";
import {ImageCollectionData} from "../../data.ts";

const ImageDetails = () => {
    const {id = ""} = useParams();

    // const [image, setImage] = useState(null);
    // useEffect(() => {
    //     const fetchImage = async () => {
    //         try {
    //             const response = await fetch(`/api/images/${id}`);
    //             const data = await response.json();
    //             setImage(data);
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     };
    //
    //     fetchImage();
    // }, [id]);

    const image = ImageCollectionData.find(img => img.id === parseInt(id));

    return (
        <Box>
            {image && (
                <>
                    <h1>{image.text}</h1>
                    <Image src={image.image} alt={image.text}/>
                </>
            )}
        </Box>
    );
};

export default ImageDetails;