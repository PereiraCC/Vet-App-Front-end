
import nothingImage from '../../assets/NothingImage.png';

export const NothingPage = () => {

  return (

        <div className='nothing_main'>

            <div className='nothing_title'>
                <h1>Suvesa</h1>
            </div>

            <div className='nothing_Image'>
                <img 
                    // src='/public/assets/NothingImage.png' 
                    src={ nothingImage }
                    alt='logo'  
                    className='nothing_Image-img'
                />
            </div>
        </div>
  )
}
