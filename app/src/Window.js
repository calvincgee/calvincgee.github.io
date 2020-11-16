import './Window.css'

function Window ( props ) {

    let proj = props.proj;

    return(
        <div className="window">
            <img className = "windowImage" src = {proj.pic} width = "200" height = "200"></img>
            <div className = "windowText">
                <h3 className = "windowTitle">{proj.title}</h3>
                <p className = "windowDesc">{proj.desc}</p>
                <a className = "windowLink" href = {proj.link} target="_blank">Learn more.</a>
            </div>
        </div>
    )
}

export default Window;