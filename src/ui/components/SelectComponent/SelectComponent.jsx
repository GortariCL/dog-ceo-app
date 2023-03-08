import Select from "react-select";

import "./SelectComponent.css";

export const SelectComponent = ({
  breedsOptions,
  subBreedOptions,
  setBreed,
  breed,
}) => {
  const handleChange = ({ target: { value } }) => {
    setBreed(value);
  };
  return (
    <>
      <p className="message">Breed:</p>
      {breedsOptions.length > 0 ? (
        <select
          defaultValue="default"
          className="breed__select"
          data-testid="select-breed"
          onChange={handleChange}
        >
          <option data-testid="select-option" value="Select breed" disabled>
            Select a breed
          </option>
          {breedsOptions.map((breed) => (
            <option
              data-testid="select-option"
              value={breed.value}
              key={breed.label}
            >
              {breed.value}
            </option>
          ))}
        </select>
      ) : (
        <select
          defaultValue="default"
          placeholder="default"
          data-testid="select-breed-no-info"
          className="breed__select"
        >
          <option value="default" data-testid="select-no-info" disabled>
            Select a breed
          </option>
          <option data-testid="select-option" disabled>
            No hay razas para mostrar
          </option>
        </select>
      )}
      <p className="message">Sub-breed:</p>
      {/* <Select className="select" options={subBreedOptions} /> */}
    </>
  );
};
