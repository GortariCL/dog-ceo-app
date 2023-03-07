import Select from "react-select";

import "./SelectComponent.css";

export const SelectComponent = ({
  breedsOptions,
  subBreedOptions,
  setBreed,
  breed,
}) => {
  const handleChange = (element) => {
    setBreed(element.value);
  };
  return (
    <>
      <p className="message">Breed:</p>
      {breedsOptions.length > 0 ? (
        <select className="breed__select" data-testid="select-breed">
          <option value="Select breed" disabled>
            Select breed
          </option>
          {breedsOptions.map((breed) => (
            <option value={breed.value} key={breed.label}>
              {breed.value}
            </option>
          ))}
        </select>
      ) : (
        <select
          defaultValue="default"
          placeholder="default"
          data-testid="select-breed"
          className="breed__select"
        >
          <option value="default" disabled>Select breed</option>
          <option disabled>No hay razas para mostrar</option>
        </select>
      )}
      <p className="message">Sub-breed:</p>
      {/* <Select className="select" options={subBreedOptions} /> */}
    </>
  );
};
