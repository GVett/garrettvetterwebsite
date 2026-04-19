import bay from '../assets/bay.JPEG';
import high_sierra from '../assets/high_sierra.JPEG';
import snow_bridge from '../assets/snow_bridge.JPEG';
import steelhead_fishing from '../assets/steelhead_fishing.JPEG';

const images = [
  { src: bay, alt: "Bay view", caption: "Bay" },
  { src: high_sierra, alt: "High Sierra mountains", caption: "High Sierra" },
  { src: snow_bridge, alt: "Snow-covered bridge", caption: "Snow Bridge" },
  { src: steelhead_fishing, alt: "Steelhead fishing", caption: "Steelhead Fishing" },
];

function GalleryPage() {
  return (
    <>
      <h2>Gallery</h2>
      <p>Photos from my life</p>
      <article className="gallery">
        {images.map((image) => (
          <figure key={image.alt}>
            <img src={image.src} alt={image.alt} title={image.caption} />
            <figcaption>{image.caption}</figcaption>
          </figure>
        ))}
      </article>
    </>
  );
}

export default GalleryPage;
