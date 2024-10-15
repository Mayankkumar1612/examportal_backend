import { useState } from "react";
import axios from "axios";

export default function ESform() {
  const [examSupritendentCode, setExamSupritendentCode] = useState("");
  const [examSupritendentName, setExamSupritendentName] = useState("");
  const [examSupritendentEmail, setExamSupritendentEmail] = useState("");
  const [examSupritendentMobile, setExamSupritendentMobile] = useState("");
  const [examSupritendentQualification, setExamSupritendentQualification] =
    useState("");

  const submitForm = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      console.log("Form data submitted");
      // Clear fields
      form.reset(); // Resets all input fields
    }
  };

  return (
    <div className="container">
      <div className="">
        <section className="text-center mt-2 fs-2 fw-bold">
          EXAM SUPERINTENDENT
        </section>
        <form onSubmit={submitForm} id="examSupritendentForm">
          <table className="table table-borderless">
            <tbody>
              {/* esCode Input field */}
              <tr>
                <td>
                  <label
                    htmlFor="examSupritendentCode"
                    className="form-label mt-3"
                  >
                    Exam Supritendent Code
                  </label>
                </td>
                <td>
                  <input
                    type="text"
                    className="form-control mt-3"
                    id="inputExamSupritendentCode"
                    value={examSupritendentCode}
                    onChange={(e) => setExamSupritendentCode(e.target.value)}
                    required
                  />
                  <div className="invalid-feedback">
                    <p> Please enter a valid ES Code.</p>
                  </div>
                </td>
              </tr>
              {/* esName input field  */}
              <tr>
                <td>
                  <label
                    htmlFor="examSupritendentName"
                    className="form-label mt-3"
                  >
                    Exam Supritendent Name
                  </label>
                </td>
                <td>
                  <input
                    type="text"
                    className="form-control mt-3"
                    id="examSupritendentName"
                    value={examSupritendentName}
                    onChange={(e) => setExamSupritendentName(e.target.value)}
                    required
                  />
                  <div className="invalid-feedback">
                    Please enter a valid Exam Supritendent Name.
                  </div>
                </td>
              </tr>
              {/* Sex field */}
              <tr>
                <td>
                  <label htmlFor="inputSex" className="form-label mt-3">
                    SEX
                  </label>
                </td>
                <td>
                  <input
                    className="form-check-input ms-2"
                    type="radio"
                    name="sex"
                    id="sexMale"
                    value="male"
                    required
                  />
                  <label className="form-check-label ms-2" htmlFor="sexMale">
                    Male
                  </label>
                  <input
                    className="form-check-input ms-2"
                    type="radio"
                    name="sex"
                    id="sexFemale"
                    value="female"
                    required
                  />
                  <label className="form-check-label ms-2" htmlFor="sexFemale">
                    Female
                  </label>
                  <div className="invalid-feedback">
                    Please select your sex.
                  </div>
                </td>
              </tr>
              {/* Email address */}
              <tr>
                <td>
                  <label
                    htmlFor="exampleInputEmail1"
                    className="form-label mt-3"
                  >
                    Email address
                  </label>
                </td>
                <td>
                  <input
                    type="email"
                    className="form-control mt-3"
                    id="exampleInputEmail1"
                    value={examSupritendentEmail}
                    required
                  />
                  <div className="invalid-feedback">
                    Please provide a valid email address.
                  </div>
                </td>
              </tr>
              {/* Mobile */}
              <tr>
                <td>
                  <label htmlFor="inputMobile" className="form-label mt-3">
                    Mobile
                  </label>
                </td>
                <td>
                  <input
                    type="tel"
                    className="form-control mt-3"
                    id="inputMobile"
                    value={examSupritendentMobile}
                    required
                  />
                  <div className="invalid-feedback">
                    Please provide a valid mobile number.
                  </div>
                </td>
              </tr>
              {/* qualification */}
              <tr>
                <td>
                  <label htmlFor="inputEducation" className="form-label mt-3">
                    Education
                  </label>
                </td>
                <td>
                  <input
                    type="text"
                    value={examSupritendentQualification}
                    className="form-control mt-3"
                    id="inputEducation"
                    placeholder="Highest Qualification"
                    required
                  />
                  <div className="invalid-feedback">
                    Please provide your highest qualification.
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="inputExperience" className="form-label mt-3">
                    Experience
                  </label>
                </td>
                <td>
                  <input
                    type="number"
                    className="form-control mt-3"
                    id="inputExperience"
                    required
                  />
                  <div className="invalid-feedback">
                    Please provide your experience.
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="inputJobType" className="form-label mt-3">
                    Job Type
                  </label>
                </td>
                <td>
                  <input
                    type="text"
                    className="form-control mt-3"
                    id="inputJobType"
                    placeholder="Contractual/permanent"
                    required
                  />
                  <div className="invalid-feedback">
                    Please specify the job type.
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="inputCity" className="form-label mt-3">
                    Address
                  </label>
                </td>
                <td>
                  <input
                    type="text"
                    className="form-control mt-3"
                    id="inputCity"
                    required
                  />
                  <div className="invalid-feedback">
                    Please provide your address.
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
                    onChange={(e) => {
                      setCountryid(e.id);
                    }}
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
                    onChange={(e) => {
                      setstateid(e.id);
                    }}
                    placeHolder="Select State"
                    required
                  />
                  <div className="invalid-feedback">Please select a state.</div>
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="inputCitySelect" className="form-label mt-3">
                    City
                  </label>
                </td>
                <td>
                  <CitySelect
                    className="form-select mt-3"
                    countryid={countryid}
                    stateid={stateid}
                    onChange={(e) => {
                      console.log(e);
                    }}
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
