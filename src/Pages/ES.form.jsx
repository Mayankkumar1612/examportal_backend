import { useState } from "react";
import img1 from "../../assets/college-entrance-exam-concept-illustration_114360-13742.jpg";
import {
  CitySelect,
  CountrySelect,
  StateSelect,
} 
from "react-country-state-city";

export default function ESform() {
    const [countryid, setCountryid] = useState(0);
    const [stateid, setstateid] = useState(0);

  return (
    <div>
      
            <div className="d-flex">
              <div className="ps-5 border w-50 ">
                <section className="text-center mt-2 fs-2 fw-bold">
                  EXAM SUPERINTENDENT
                </section>
                <form>
                  <table>
                    <tbody>
                      <tr>
                        <td>
                          <label
                            htmlFor="inputCentreCode"
                            className="form-label mt-3  "
                          >
                            ES Code
                          </label>
                        </td>
                        <td>
                          <div className="ps-5">
                            <input
                              type="Code"
                              className="form-control mt-3 "
                              id="inputCentreCode"
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label
                            htmlFor="inputCentreName"
                            className="form-label mt-3"
                          >
                            ES Name
                          </label>
                        </td>
                        <td>
                          <div className="ps-5">
                            <input
                              type="text"
                              className="form-control mt-3"
                              id="inputCentreName"
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label
                            htmlFor="inputCentreName"
                            className="form-label mt-3"
                          >
                            SEX
                          </label>
                        </td>
                        <td>
                          <div className="ps-5">
                            <input
                              className="form-check-input ms-2"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                            <label
                              className="form-check-label ms-2"
                              htmlFor="flexRadioDefault1"
                            >
                              Male
                            </label>
                            <input
                              className="form-check-input ms-2"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                            <label
                              className="form-check-label ms-2"
                              htmlFor="flexRadioDefault1"
                            >
                              Female
                            </label>
                          </div>
                        </td>
                      </tr>
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
                          <div className="ps-5">
                            <input
                              type="email"
                              className="form-control mt-3"
                              id="exampleInputEmail1"
                              aria-describedby="emailHelp"
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label
                            htmlFor="inputCentreName"
                            className="form-label mt-3"
                          >
                            Mobile
                          </label>
                        </td>
                        <td>
                          <div className="ps-5">
                            <input
                              type="text"
                              className="form-control mt-3"
                              id="inputCentreName"
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label
                            htmlFor="inputCentreName"
                            className="form-label mt-3"
                          >
                            Education
                          </label>
                        </td>
                        <td>
                          <div className="ps-5">
                            <input
                              type="text"
                              className="form-control mt-3"
                              id="inputCentreName"
                              placeholder="Highest Qualification"
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label
                            htmlFor="inputCentreName"
                            className="form-label mt-3"
                          >
                            Experience
                          </label>
                        </td>
                        <td>
                          <div className="ps-5">
                            <input
                              type="text"
                              className="form-control mt-3"
                              id="inputCentreName"
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label
                            htmlFor="inputCentreName"
                            className="form-label mt-3"
                          >
                            Job Type
                          </label>
                        </td>
                        <td>
                          <div className="ps-5">
                            <input
                              type="text"
                              className="form-control mt-3"
                              id="inputCentreName"
                              placeholder="Contractual/permanent"
                            />
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
                          <div className="ps-5">
                            <input
                              type="text"
                              className="form-control mt-3"
                              id="inputCity"
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label htmlFor="inputCity" className="form-label mt-3">
                            Country
                          </label>
                        </td>
                        <td>
                          <div className="ps-5 mt-3">
                            <CountrySelect  className="form-select mt-3"
                              onChange={(e) => {
                                setCountryid(e.id);
                              }}
                              placeHolder="Select Country"
                            />
                        
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
                          <div className="ps-5">
                            <StateSelect className="form-select mt-3"
                              countryid={countryid}
                              onChange={(e) => {
                                setstateid(e.id);
                              }}
                              placeHolder="Select State"
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label htmlFor="inputState" className="form-label mt-3">
                            City
                          </label>
                        </td>
                        <td>
                          <div className="ps-5">
                            <CitySelect className="form-select mt-3"
                              countryid={countryid}
                              stateid={stateid}
                              onChange={(e) => {
                                console.log(e);
                              }}
                              placeHolder="Select City"
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <button type="submit" className="btn btn-primary mt-3">
                            Submit
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </form>
              </div>
              <div className="w-50  ">
                <img src={img1} alt="" className="img-fluid" />
              </div>
            </div>
          
    </div>
  )
}
