import React from 'react'
import { connect } from 'react-redux'


const ImageGridView = ({images}) => {
    const renderImages = () => {
        return images.map(img => {
            return <img src = {img} style = {{width: '200px', height: '200px'}} />
        })
    }

    /* useEffect(() => {
        if (images.length > 10) {
            console.log(images.length)
            images.length = 0
        }
    }, [images]) */
    
    return (
        <div>
            {renderImages()} 
        </div>
    )
}

function mapToStateProps(state) {
    // console.log(state)
    return  {images: state.images}
}


export default connect(mapToStateProps)(ImageGridView)