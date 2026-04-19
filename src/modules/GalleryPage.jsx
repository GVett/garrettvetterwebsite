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
      <h2 className="mb-4" style={{color:'#ffe38d'}}>Gallery</h2>
      <p className="card-text">
        Small excerpts from my life. All photos displayed are taken by me or a friend.
      </p>
      <div className="row g-4">
        {images.map((image) => (
          <div className="col-sm-6 col-lg-3" key={image.alt}>
            <div className="card h-100">
              <img src={image.src} alt={image.alt} className="card-img-top" style={{objectFit:'cover', height:'220px'}} />
              <div className="card-footer text-center text-secondary">{image.caption}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default GalleryPage;
