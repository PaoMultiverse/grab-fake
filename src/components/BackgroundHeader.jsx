import bgImage from "../assets/bgImage.jpg"
function BackgroundHeader(){
    return (
        <>
            <img className=" w-full h-[380px] odject-cover z-[-1]" src={bgImage} alt="" />
            <div class="border-bottom">.</div>
            <div className="container-sm mt-32 mb-7"></div>
        </>
    )
}

export default BackgroundHeader;