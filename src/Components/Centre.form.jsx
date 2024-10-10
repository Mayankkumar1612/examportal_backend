import axios from "axios";
import { useState } from "react";
import indianStateCityList from "../assets/indianStateCityList.json";

export default function Centreform() {
  const [centreCode, setCentreCode] = useState("");
  const [centreName, setCentreName] = useState("");
  const [centreCountry, setCentreCountry] = useState("");
  const [centreState, setCentreState] = useState("");
  const [centreCity, setCentreCity] = useState("");

  const stateList = Object.keys(indianStateCityList)?.sort() || [];
  let [cityList, setCityList] = useState([]);

  const handleCountryChange = (e) => {
    setCentreCountry(e.target.value);
    console.log(centreCountry);
  };
  const handleStateChange = (e) => {
    const selectedState = e.target.value;
    setCityList(indianStateCityList[selectedState].sort());
    setCentreState(e.target.value);
  };
  const handleCityChange = (e) => {
    setCentreCity(e.target.value);
  };

  const resetForm = () => {
    setCentreCode("");
    setCentreName("");
    setCentreCountry("");
    setCentreState("");
    setCentreCity("");
  };

  const submitForm = (e) => {
    e.preventDefault();
    console.log("successful pressed submit button");
    const formData = {
      centreCode,
      centreName,
      centreCountry,
      centreState,
      centreCity,
    };
    console.log("formdata \n", formData);

    const formValidations =
      centreCode && centreName && centreCountry && centreState && centreCity
        ? true
        : false;
    if (formValidations) {
      console.log("data valid");
      axios
        .post("http://127.0.0.1:3000/api/register/centre", formData)
        .then((response) => {
          console.log("Form data submitted successfully", response.data);

          alert(`data saved with centre code ${centreCode}`);
          resetForm();
        })
        .catch((error) => {
          console.error(
            "Error occurred during form submission:",
            error.message
          );
        });
    } else {
      console.log("error in data");
    }
  };

  return (
    <div className="container">
      <div className="">
        <section className="text-center mt-2 fs-2 fw-bold">EXAM CENTRE</section>
        <form id="centreForm" onSubmit={submitForm}>
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
              {/* country */}
              <tr>
                <td>
                  <label htmlFor="inputCountry" className="form-label mt-3">
                    Country
                  </label>
                </td>
                <td>
                  <div>
                    <select
                      name=""
                      id=""
                      onChange={handleCountryChange}
                      value={centreCountry}
                      required
                    >
                      <option value="">Select Country</option>
                      <option value="India">India</option>
                    </select>
                  </div>
                </td>
              </tr>
              {/* state  */}
              <tr>
                <td>
                  <label htmlFor="inputState" className="form-label mt-3">
                    State
                  </label>
                </td>
                <td>
                  <div className="invalid-feedback">Please select a state.</div>
                  <div>
                    <select
                      name="statesList"
                      id=""
                      onChange={handleStateChange}
                      value={centreState}
                      required
                    >
                      <option value="">Select state</option>
                      {stateList.map((stateName, index) => (
                        <option key={index} value={stateName}>
                          {stateName}
                        </option>
                      ))}
                    </select>
                  </div>
                </td>
              </tr>
              {/* city */}
              <tr>
                <td>
                  <label htmlFor="inputCity" className="form-label mt-3">
                    City
                  </label>
                </td>
                <td>
                  <div>
                    <select
                      name="cityList"
                      id=""
                      onChange={handleCityChange}
                      value={centreCity}
                      required
                    >
                      <option value="">Select city</option>
                      {cityList.map((item, index) => (
                        <option value={item} key={index}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </div>
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
