// import { useState } from "react";
// import {
//   CitySelect,
//   CountrySelect,
//   StateSelect,
// } 
// from "react-country-state-city";
// import "react-country-state-city/dist/react-country-state-city.css";

// export default function ESform() {
//     const [countryid, setCountryid] = useState(0);
//     const [stateid, setstateid] = useState(0);
//     const submitForm = (e) => {
//       e.preventDefault();
//       console.log("form data submitted");
//     };

//   return (
//     <div className="container">
//         <div className="">
//           <section className="text-center mt-2 fs-2 fw-bold">
//             EXAM SUPERINTENDENT
//           </section>
//           <form onSubmit={submitForm}>
//             <table className="table table-borderless">
//               <tbody>
//                 <tr>
//                   <td>
//                     <label
//                       htmlFor="inputCentreCode"
//                       className="form-label mt-3  "
//                     >
//                       ES Code
//                     </label>
//                   </td>
//                   <td>
//                       <input
//                         type="Code"
//                         className="form-control mt-3 "
//                         id="inputCentreCode"
//                       />
//                   </td>
//                 </tr>
//                 <tr>
//                   <td>
//                     <label
//                       htmlFor="inputCentreName"
//                       className="form-label mt-3"
//                     >
//                       ES Name
//                     </label>
//                   </td>
//                   <td>
//                       <input
//                         type="text"
//                         className="form-control mt-3"
//                         id="inputCentreName"
//                       />
//                   </td>
//                 </tr>
//                 <tr>
//                   <td>
//                     <label
//                       htmlFor="inputCentreName"
//                       className="form-label mt-3"
//                     >
//                       SEX
//                     </label>
//                   </td>
//                   <td>
//                       <input
//                         className="form-check-input ms-2"
//                         type="radio"
//                         name="flexRadioDefault"
//                         id="flexRadioDefault1"
//                       />
//                       <label
//                         className="form-check-label ms-2"
//                         htmlFor="flexRadioDefault1"
//                       >
//                         Male
//                       </label>
//                       <input
//                         className="form-check-input ms-2"
//                         type="radio"
//                         name="flexRadioDefault"
//                         id="flexRadioDefault1"
//                       />
//                       <label
//                         className="form-check-label ms-2"
//                         htmlFor="flexRadioDefault1"
//                       >
//                         Female
//                       </label>
//                   </td>
//                 </tr>
//                 <tr>
//                   <td>
//                     <label
//                       htmlFor="exampleInputEmail1"
//                       className="form-label mt-3"
//                     >
//                       Email address
//                     </label>
//                   </td>
//                   <td>
//                       <input
//                         type="email"
//                         className="form-control mt-3"
//                         id="exampleInputEmail1"
//                         aria-describedby="emailHelp"
//                       />
//                   </td>
//                 </tr>
//                 <tr>
//                   <td>
//                     <label
//                       htmlFor="inputCentreName"
//                       className="form-label mt-3"
//                     >
//                       Mobile
//                     </label>
//                   </td>
//                   <td>
//                       <input
//                         type="number"
//                         className="form-control mt-3"
//                         id="inputCentreName"
//                       />
//                   </td>
//                 </tr>
//                 <tr>
//                   <td>
//                     <label
//                       htmlFor="inputCentreName"
//                       className="form-label mt-3"
//                     >
//                       Education
//                     </label>
//                   </td>
//                   <td>
//                       <input
//                         type="text"
//                         className="form-control mt-3"
//                         id="inputCentreName"
//                         placeholder="Highest Qualification"
//                       />
//                   </td>
//                 </tr>
//                 <tr>
//                   <td>
//                     <label
//                       htmlFor="inputCentreName"
//                       className="form-label mt-3"
//                     >
//                       Experience
//                     </label>
//                   </td>
//                   <td>
//                       <input
//                         type="number"
//                         className="form-control mt-3"
//                         id="inputCentreName"
//                       />
//                   </td>
//                 </tr>
//                 <tr>
//                   <td>
//                     <label
//                       htmlFor="inputCentreName"
//                       className="form-label mt-3"
//                     >
//                       Job Type
//                     </label>
//                   </td>
//                   <td>
//                       <input
//                         type="text"
//                         className="form-control mt-3"
//                         id="inputCentreName"
//                         placeholder="Contractual/permanent"
//                       />
//                   </td>
//                 </tr>
//                 <tr>
//                   <td>
//                     <label htmlFor="inputCity" className="form-label mt-3">
//                       Address
//                     </label>
//                   </td>
//                   <td>
//                       <input
//                         type="text"
//                         className="form-control mt-3"
//                         id="inputCity"
//                       />
//                   </td>
//                 </tr>
//                 <tr>
//                   <td>
//                     <label htmlFor="inputCity" className="form-label mt-3">
//                       Country
//                     </label>
//                   </td>
//                   <td>
//                       <CountrySelect  className="form-select mt-3"
//                         onChange={(e) => {
//                           setCountryid(e.id);
//                         }}
//                         placeHolder="Select Country"
//                       />
//                   </td>
//                 </tr>
//                 <tr>
//                   <td>
//                     <label htmlFor="inputState" className="form-label mt-3">
//                       State
//                     </label>
//                   </td>
//                   <td>
//                       <StateSelect className="form-select mt-3"
//                         countryid={countryid}
//                         onChange={(e) => {
//                           setstateid(e.id);
//                         }}
//                         placeHolder="Select State"
//                       />
//                   </td>
//                 </tr>
//                 <tr>
//                   <td>
//                     <label htmlFor="inputState" className="form-label mt-3">
//                       City
//                     </label>
//                   </td>
//                   <td>
//                       <CitySelect className="form-select mt-3"
//                         countryid={countryid}
//                         stateid={stateid}
//                         onChange={(e) => {
//                           console.log(e);
//                         }}
//                         placeHolder="Select City"
//                       />
//                   </td>
//                 </tr>
//                 <tr>
//                   <td colSpan={2} className="text-center">
//                     <button type="submit" className="btn btn-primary mt-3">
//                       Submit
//                     </button>
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//           </form>
//         </div>     
//     </div>
//   )
// }



import { useState } from "react";
import {
  CitySelect,
  CountrySelect,
  StateSelect,
} 
from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";

export default function ESform() {
  const [countryid, setCountryid] = useState(0);
  const [stateid, setstateid] = useState(0);
  const [validated, setValidated] = useState(false);

  const submitForm = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    
    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      console.log("Form data submitted");
      // Clear fields
      form.reset(); // Resets all input fields
      setCountryid(0); // Reset state-controlled inputs
      setstateid(0);
      setValidated(false); // Reset validation state
    }

    setValidated(true);
  };

  return (
    <div className="container">
      <div className="">
        <section className="text-center mt-2 fs-2 fw-bold">
          EXAM SUPERINTENDENT
        </section>
        <form onSubmit={submitForm} noValidate className={validated ? 'was-validated' : ''}>
          <table className="table table-borderless">
            <tbody>
              <tr>
                <td>
                  <label htmlFor="inputCentreCode" className="form-label mt-3">
                    ES Code
                  </label>
                </td>
                <td>
                  <input
                    type="text"
                    className="form-control mt-3"
                    id="inputCentreCode"
                    required
                  />
                  <div className="invalid-feedback">
                    Please enter a valid ES Code.
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="inputCentreName" className="form-label mt-3">
                    ES Name
                  </label>
                </td>
                <td>
                  <input
                    type="text"
                    className="form-control mt-3"
                    id="inputCentreName"
                    required
                  />
                  <div className="invalid-feedback">
                    Please enter a valid ES Name.
                  </div>
                </td>
              </tr>
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
              <tr>
                <td>
                  <label htmlFor="exampleInputEmail1" className="form-label mt-3">
                    Email address
                  </label>
                </td>
                <td>
                  <input
                    type="email"
                    className="form-control mt-3"
                    id="exampleInputEmail1"
                    required
                  />
                  <div className="invalid-feedback">
                    Please provide a valid email address.
                  </div>
                </td>
              </tr>
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
                    required
                  />
                  <div className="invalid-feedback">
                    Please provide a valid mobile number.
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="inputEducation" className="form-label mt-3">
                    Education
                  </label>
                </td>
                <td>
                  <input
                    type="text"
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
                  <div className="invalid-feedback">
                    Please select a state.
                  </div>
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
                  <div className="invalid-feedback">
                    Please select a city.
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