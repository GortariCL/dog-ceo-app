import "./Card.css";

export const Card = ({ breedImages }) => {
  return (
    <>
      <ul className="modal__container" data-testid="breed-images-list">
        {breedImages.length > 0 ? (
          breedImages.map((breed, index) => {
            return (
              <li key={index + 1} className="breed__image__container" data-testid="breed-image">
                <img
                  className="breed__image"
                  src={breed}
                  alt={`selected breed number ${index + 1}`}
                />
              </li>
            );
          })
        ) : (
          <h2 data-testid="message-images">Select a breed</h2>
        )}{" "}
      </ul>
    </>
  );
};
