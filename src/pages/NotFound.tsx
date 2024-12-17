import notFoundImage from "../assets/images/notFound/5203299.jpg";

export const NotFound = () => {
  return (
    <div className="not-found-page">
      <div className="image-container">
        <img
          src={notFoundImage}
          alt="Page not found"
          className="not-found-image"
        />
      </div>
    </div>
  );
};

export default NotFound;
