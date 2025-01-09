import flask_code from '../assets/flask_app_main_code.png';
import maintained_trail from '../assets/maintained_trail.jpg';
import number_counter from '../assets/number_counter_widget.png';
import space_invaders from '../assets/space_invaders_game_loop_code.png';

const images = [flask_code, maintained_trail, number_counter, space_invaders]

function GalleryPage(){
    return (
        <>
            <h2>Gallery</h2>
            <p>
                This page will eventually feature more cohesive images of my projects,
                but for now, enjoy my screenshots and photos of flask web app code, a 
                well-maintained trail (you couldn't see any dirt before we worked on it!), 
                a number counter widget, and main game loop for my space invaders game!
            </p>
            <article>
            {
                images.map((image) => 
                    <figure>
                        <img src={image} alt="" title="" />
                    </figure>
                    )
                }
            </article>
        </>
    );
}
export default GalleryPage;