import face_pic from '../assets/face_picture.jpg';

function HomePage(){
    return (
        <>
            <h2>Garrett Vetter</h2>
            <article>
                <h3>About Me</h3>
                <img src={face_pic} alt="Picture of Garrett Vetter"/>
                <p>
                    I am a rapid, adept learner who excels at problem-solving, with 
                    experience in information technology and fluency with a variety 
                    of software and hardware. Formerly, I managed IT services at AYA, 
                    fulfilling duties such as fixing and creating website components, 
                    installing and deploying network and security equipment at several 
                    locations, maintaining and administering Wi-Fi networks at multiple 
                    locations, and administering Google accounts to employees and clients 
                    using Google Admin. Also, I manage a home lab system where I use 
                    Docker to deploy software such as a Dynamic DNS service, a Minecraft 
                    server, a VPN with ad-blocking capabilities for remote access, and a 
                    web application using Flask and Bootstrap. Currently, I work as a 
                    student employee at Oregon State University, where I hold a position 
                    as an IT Support Technician.
                </p>
                <p>
                    This website is currently a work-in-progress, with more components being
                    added soon!
                </p>
            </article>
        </>
    );
}
export default HomePage;