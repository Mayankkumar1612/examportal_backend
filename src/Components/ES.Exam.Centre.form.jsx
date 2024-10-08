// import { useState } from "react";
// import {
//   CitySelect,
//   CountrySelect,
//   StateSelect,
// } 
// from "react-country-state-city";
// import "react-country-state-city/dist/react-country-state-city.css";

// export default function ESExamCentreform() {
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
//             ES EXAM CENTRE
//           </section>
//           <form onSubmit={submitForm}>
//             <table className="table table-borderless">
//               <tbody>
//                 <tr>
//                   <td>
//                     <label
//                       htmlFor="inputCentreCode"
//                       className="form-label mt-3 grid "
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
//                       Centre Code
//                     </label>
//                   </td>
//                   <td>
//                       <input
//                         type="code"
//                         className="form-control mt-3"
//                         id="inputCentreName"
//                       />
//                   </td>
//                 </tr>
//                 <tr>
//                   <td>
//                     <label htmlFor="inputCity" className="form-label mt-3">
//                       Exam Date
//                     </label>
//                   </td>
//                   <td>
//                       <input
//                         type="Date"
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
//                       Exam City
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
} from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";

export default function ESExamCentreform() {
  const [countryid, setCountryid] = useState(0);
  const [stateid, setstateid] = useState(0);
  const [validated, setValidated] = useState(false);

  const submitForm = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      e.preventDefault();
      console.log("form data submitted");
      
      // Reset form and states after submission
      form.reset();
      setCountryid(0);
      setstateid(0);
    }
    setValidated(true);
  };

  return (
    <div className="container">
      <div className="">
        <section className="text-center mt-2 fs-2 fw-bold">ES EXAM CENTRE</section>
        <form
          onSubmit={submitForm}
          noValidate
          className={`needs-validation ${validated ? "was-validated" : ""}`}
        >
          <table className="table table-borderless">
            <tbody>
              <tr>
                <td>
                  <label
                    htmlFor="inputCentreCode"
                    className="form-label mt-3 grid"
                  >
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
                  <div className="invalid-feedback">Please provide a valid ES Code.</div>
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
                    required
                  />
                  <div className="invalid-feedback">Please provide a valid Centre Name.</div>
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="inputExamDate" className="form-label mt-3">
                    Exam Date
                  </label>
                </td>
                <td>
                  <input
                    type="date"
                    className="form-control mt-3"
                    id="inputExamDate"
                    required
                  />
                  <div className="invalid-feedback">Please select a valid exam date.</div>
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
                  <div className="invalid-feedback">Please select a country.</div>
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
                  <label htmlFor="inputCity" className="form-label mt-3">
                    Exam City
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
