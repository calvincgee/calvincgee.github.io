import './TitlePage.css'

import night_sky from './pics/night-sky.JPG';

function TitlePage( props ) {
    return(
        <div className = "titlepage">
            <div className = "pic-wrapper">
                <img src = {night_sky} className = "fullscreen"></img>
            </div>
            <div className = "title-text">
                <h2>Welcome to Calvin's Website</h2>
                <button>Enter</button>
            </div>
        </div>
    )
}
export default TitlePage;