
function Projects({isMobile}) {
    if(isMobile){
        return(
            <>
            <title>Projects</title>
            <div className="container">  
                <h1 className="gradHeading-mobile"><span className="gradText">COMING SOON</span></h1>
                <p class="description description-mobile">there's nothing here right now, but maybe someday!</p>
            </div>
            </>
        )
    } else {
        return(
            <>
            <title>Projects</title>
            <div className="container projects-container">  
            <h1 className="gradHeading-desktop"><span className="gradText">COMING SOON</span></h1>
                <p class="description description-desktop">there's nothing here right now, but maybe someday!</p>
            </div>
            </>
        )
    }
    
}

export default Projects