import React from 'react';
    import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
//import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({category}) => {

    /*const [images, setImages] = useState([]);

    useEffect(() => {
        getGifs(category).then(setImages);
    }, [category])
    */

    const {data:images, loading} = useFetchGifs(category);

    return (
        <>
            <h3>{ category }</h3>
            { loading && <p>Loading...</p> }
            <div className='row'>
            {
                images.map(( img ) => (
                    <div key = { img.id } className='col'> 
                        <GifGridItem 
                            {...img }
                        />
                    </div>
                ))
            }
            </div>
        </>
    )
}
