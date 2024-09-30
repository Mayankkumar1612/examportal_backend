import { useState } from "react";
import img1 from "F:/Office work/exam portal/Exam_portal/src/assets/college-entrance-exam-concept-illustration_114360-13742.jpg";
import {
  CitySelect,
  CountrySelect,
  StateSelect,
  LanguageSelect,
} 
from "react-country-state-city";

export default function CentreForm() {
  const [activeTab, setActiveTab] = useState("home");
  const [countryid, setCountryid] = useState(0);
  const [stateid, setstateid] = useState(0);
  
  return (
    <>
      <div className=" container   d-flex" id="navtab">
        <ul className=" nav nav-pills " id="myTab">
          <li className="pt-2 nav-item">
            <button
              className={`nav-link ms-2 me-2 ${
                activeTab === "home" ? "active" : ""
              }`}
              onClick={() => setActiveTab("home")}
            >
              EXAM CENTRE
            </button>
          </li>
          <li className="pt-2 nav-item">
            <button
              className={`nav-link me-2 ${
                activeTab === "contact" ? "active" : ""
              }`}
              onClick={() => setActiveTab("contact")}
            >
              EXAM SUPERINTENDENT
            </button>
          </li>
          <li className="pt-2 nav-item">
            <button
              className={`nav-link me-2 ${
                activeTab === "link" ? "active" : ""
              }`}
              onClick={() => setActiveTab("link")}
            >
              ES EXAM CENTRE
            </button>
          </li>
        </ul>
      </div>
      <div className="container d-flex">
        <div className="tab-content ">
          <div
            className={`tab-pane fade ${
              activeTab === "home" ? "show active" : ""
            }`}
            id="EXAM CENTRE"
          >
            <div className="d-flex">
              <div className="ps-5 w-50 h-auto">
                <section className="text-center mt-2 fs-2 fw-bold">
                  EXAM CENTRE
                </section>
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <label
                          htmlFor="inputCentreCode"
                          className="form-label mt-3 grid "
                        >
                          Centre Code
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
                          Centre Name
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
                        <label htmlFor="inputState" className="form-label mt-3">
                          Language
                        </label>
                      </td>
                      <td>
                        <div className="ps-5">
                          <LanguageSelect className="form-select mt-3"
                            onChange={(e) => {
                              console.log(e);
                            }}
                            placeHolder="Select Language"
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
              </div>
              <div className="w-50 h-auto ">
                <img src={img1} alt="" className="img-fluid" />
              </div>
            </div>
          </div>
          <div
            className={`tab-pane fade ${
              activeTab === "contact" ? "show active" : ""
            }`}
            id="EXAM SUPERINTENDENT"
          >
            <div className="d-flex">
              <div className="ps-5 w-50 h-auto">
                <section className="text-center mt-2 fs-2 fw-bold">
                  EXAM SUPERINTENDENT
                </section>
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
              </div>
              <div className="w-50 h-auto ">
                <img src={img1} alt="" className="img-fluid" />
              </div>
            </div>
          </div>
          <div
            className={`tab-pane d-flex fade ${
              activeTab === "link" ? "show active" : ""
            }`}
            id="ES EXAM CENTRE"
          >
            <div className="d-flex">
              <div className="ps-5 w-50 h-auto">
                <section className="text-center mt-2 fs-2 fw-bold">
                  ES EXAM CENTRE
                </section>
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <label
                          htmlFor="inputCentreCode"
                          className="form-label mt-3 grid "
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
                          Centre Code
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
                        <label htmlFor="inputCity" className="form-label mt-3">
                          Exam City
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
                          Exam Date
                        </label>
                      </td>
                      <td>
                        <div className="ps-5">
                          <input
                            type="Date"
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
              </div>
              <div className="w-50 h-auto ">
                <img src={img1} alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
