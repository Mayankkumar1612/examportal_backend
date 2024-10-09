import axios from "axios";
import { useState, useRef } from "react";
import {
  CitySelect,
  CountrySelect,
  StateSelect,
} from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";

export default function Centreform() {
  const [countryid, setCountryid] = useState(0);
  const [stateid, setStateid] = useState(0);
  const [centreCode, setCentreCode] = useState("");
  const [centreName, setCentreName] = useState("");
  const [validated, setValidated] = useState(false);
  const formRef = useRef(null); // Create a form ref to reset the form

  const submitForm = async (e) => {
    const form = e.currentTarget;

    e.preventDefault();
    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      const formData = {
        countryid,
        stateid,
        centreCode,
        centreName,
      };
      console.log("formdata", formData);

      const { data } = await axios.post(
        "https://127.0.0.1:3000/api/register/centre",
        formData
      );

      console.log("form data submitted", data);

      // Clear the form fields
      setCountryid(0);
      setStateid(0);
      setCentreCode("");
      setCentreName("");

      formRef.current.reset(); // Reset the form fields
    }
    setValidated(true);
  };

  return (
    <div className="container">
      <div className="">
        <section className="text-center mt-2 fs-2 fw-bold">EXAM CENTRE</section>
        <form
          id="centreForm"
          noValidate
          ref={formRef}
          onSubmit={submitForm}
          className={`needs-validation ${validated ? "was-validated" : ""}`}
        >
          <table className="table table-borderless">
            <tbody>
              <tr>
                <td>
                  <label htmlFor="inputCentreCode" className="form-label mt-3">
                    Centre Code
                  </label>
                </td>
                <td>
                  <input
                    type="text"
                    className="form-control mt-3"
                    id="inputCentreCode"
                    value={centreCode}
                    onChange={(e) => setCentreCode(e.target.value)}
                    required
                  />
                  <div className="invalid-feedback">
                    Please provide a Centre Code.
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="inputCentreName" className="form-label mt-3">
                    Centre Name
                  </label>
                </td>
                <td>
                  <input
                    type="text"
                    className="form-control mt-3"
                    id="inputCentreName"
                    value={centreName}
                    onChange={(e) => setCentreName(e.target.value)}
                    required
                  />
                  <div className="invalid-feedback">
                    Please provide a Centre Name.
                  </div>
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
                    required
                  />
                  <div className="invalid-feedback">
                    Please select a country.
                  </div>
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
                    onChange={(e) => setStateid(e.id)}
                    placeHolder="Select State"
                    required
                  />
                  <div className="invalid-feedback">Please select a state.</div>
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
                    required
                  />
                  <div className="invalid-feedback">Please select a city.</div>
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
    </div>
  );
}
