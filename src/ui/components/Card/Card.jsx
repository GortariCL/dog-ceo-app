import "./Card.css";

export const Card = ({ breedImages }) => {
  return (
    <>
      <ul className="modal__container">
        {breedImages ? (
          breedImages.map((breed, index) => {
            return (
              <li key={index + 1} className="breed__image__container">
                <img
                  className="breed__image"
                  src={breed}
                  alt={`selected breed number ${index + 1}`}
                />
              </li>
            );
          })
        ) : (
          <h2>No existen imagenes disponibles</h2>
        )}{" "}
      </ul>
    </>
  );
};
