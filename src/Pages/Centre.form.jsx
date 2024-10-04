import { useState } from "react";
import img1 from "../assets/college-entrance-exam-concept-illustration_114360-13742.jpg";
import {
  CitySelect,
  CountrySelect,
  StateSelect,
  LanguageSelect,
} from "react-country-state-city";

export default function Centreform() {
  const [countryid, setCountryid] = useState(0);
  const [stateid, setstateid] = useState(0);
  const submitForm = (e) => {
    e.preventDefault();
    console.log("form data submitted");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-6 border">
          <section className="text-center mt-2 fs-2 fw-bold">
            EXAM CENTRE
          </section>
          <form onSubmit={submitForm}>
            <table className="table table-borderless">
              <tbody>
                <tr>
                  <td>
                    <label
                      htmlFor="inputCentreCode"
                      className="form-label mt-3"
                    >
                      Centre Code
                    </label>
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control mt-3"
                      id="inputCentreCode"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label
                      htmlFor="inputCentreName"
                      className="form-label mt-3"
                    >
                      Centre Name
                    </label>
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control mt-3"
                      id="inputCentreName"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="inputCountry" className="form-label mt-3">
                      Country
                    </label>
                  </td>
                  <td>
                    <CountrySelect
                      className="form-select mt-3"
                      onChange={(e) => setCountryid(e.id)}
                      placeHolder="Select Country"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="inputState" className="form-label mt-3">
                      State
                    </label>
                  </td>
                  <td>
                    <StateSelect
                      className="form-select mt-3"
                      countryid={countryid}
                      onChange={(e) => setstateid(e.id)}
                      placeHolder="Select State"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="inputCity" className="form-label mt-3">
                      City
                    </label>
                  </td>
                  <td>
                    <CitySelect
                      className="form-select mt-3"
                      countryid={countryid}
                      stateid={stateid}
                      onChange={(e) => console.log(e)}
                      placeHolder="Select City"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="inputLanguage" className="form-label mt-3">
                      Language
                    </label>
                  </td>
                  <td>
                    <LanguageSelect
                      className="form-select mt-3"
                      onChange={(e) => console.log(e)}
                      placeHolder="Select Language"
                    />
                  </td>
                </tr>
                <tr>
                  <td colSpan={2} className="text-center">
                    <button type="submit" className="btn btn-primary mt-3">
                      Submit
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
        <div className="col-6 border">
          <img src={img1} alt="Exam Illustration" className="img-fluid" />
        </div>
      </div>
    </div>
  );
}
