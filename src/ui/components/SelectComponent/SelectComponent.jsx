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
      <Select
        className="select"
        options={breedsOptions}
        onChange={handleChange}
      />
      <p className="message">Sub-breed:</p>
      <Select className="select" options={subBreedOptions} />
    </>
  );
};
