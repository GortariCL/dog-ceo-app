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
          <option data-testid="select-breed-option" value="Select breed" disabled>
            Select a breed
          </option>
          {breedsOptions.map((breed) => (
            <option
              data-testid="select-breed-option"
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
          <option value="default" data-testid="select-breed-option" disabled>
            Select a breed
          </option>
          <option data-testid="select-breed-option" disabled>
            No breed info
          </option>
        </select>
      )}
      <p className="message">Sub-breed:</p>
      {subBreedOptions.length > 0 ? (
        <select
          defaultValue="default"
          placeholder="default"
          data-testid="select-sub-breed"
          className="breed__select"
        >
          <option data-testid="select-sub-breed-option" value="Select breed" disabled>
            Select a breed
          </option>
          {subBreedOptions.map((subBreed) => (
            <option
              data-testid="select-sub-breed-option"
              value={subBreed.value}
              key={subBreed.label}
            >
              {subBreed.value}
            </option>
          ))}
        </select>
      ) : (
        <select
          defaultValue="default"
          placeholder="default"
          data-testid="select-sub-breed-no-info"
          className="breed__select"
        >
          <option value="default" data-testid="select-sub-breed-option" disabled>
            Select a sub-breed
          </option>
          <option data-testid="select-sub-breed-option" disabled>
            No sub-breed info
          </option>
        </select>
      )}
    </>
  );
};
