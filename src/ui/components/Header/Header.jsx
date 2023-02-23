import logo from "../../../assets/logo.png";
import { SelectComponent } from "../SelectComponent/SelectComponent";

import "./Header.css";

export const Header = ({ breedsOptions, subBreedOptions, setBreed, breed }) => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="container__logo">
          <img className="logo__app" src={logo} alt="logo app" />
          <p className="logo__title">DOG APP</p>
        </div>

        <div className="select__container">
          <SelectComponent
            breedsOptions={breedsOptions}
            subBreedOptions={subBreedOptions}
            setBreed={setBreed}
            breed={breed}
          />
        </div>
      </div>
    </div>
  );
};
