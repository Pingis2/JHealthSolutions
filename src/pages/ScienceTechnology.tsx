import scienceImage from "../assets/images/home-page/science-image.jpg";
export const ScienceTechnology = () => {

  return (
    <>
      <div className="science-technology-container">
        <div className="image-container">
          <img
            src={scienceImage}
            alt="Science and Technology"
            className="science-technology-image"
          />
        </div>
      </div>
    </>
  );
};

export default ScienceTechnology;
