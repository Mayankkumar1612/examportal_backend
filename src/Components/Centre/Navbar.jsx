// import { useState } from "react";
import img1 from "F:/Office work/exam portal/Exam_portal/src/assets/Screenshot 2024-09-25 155952.png";
import img2 from "F:/Office work/exam portal/Exam_portal/src/assets/5.png";

export default function Navbar() {
  // const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="container">
      <section className="d-flex">
        <div className="col-lg-2" >
          <img src={img1} className=" img-fluid pt-2 " alt="..." />
        </div>
        <div className="mt-3 ms-3 fw-bold pe-4 ">
          <p>
            राष्ट्रीय इलेक्ट्रॉनिकी एवं सूचना प्रौद्योगिकी संस्थान, हरिद्वार
            <br />
            National Institute of Electronics & Information Technology, Haridwar
          </p>
        </div>
        <div className="mt-3 ms-5 fw-bold ps-5 text-end ">
          <p>
          Ministry of Electronics & Information Technology
            <br/>
          Government of India
          </p>
        </div>
        <div className="float-end">
          <img src={img2} className=" img-fluid float-end" alt="..." />
        </div>
      </section>
      <nav className="navbar navbar-expand-lg bg-body-secondary">
        <div className="container-fluid">
          <a className="navbar-brand fw-bold fs-4 ms-5" href="/">
            Exam Portal
          </a>
          <div className="offcanvas offcanvas-end text-bg-dark" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
            <div className="offcanvas-body ">
              <ul className="navbar-nav w-75 mt-2">
                <li className="nav-item">
                  <a className="nav-link fw-bold fs-6" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link fw-bold fs-6" href="/">
                    Contact Us
                  </a>
                </li>
              </ul>
              <form className="d-flex me-40 w-50 p-2" role="search">
                <input
                  className="form-control "
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button
                  className="btn btn-outline-success ms-3 fw-bold fs-6"
                  type="submit"
                >
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </nav>
      {/* <div className="col-md-6 d-flex">
        <ul className="nav nav-pills flex-column" id="myTab">
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === "home" ? "active" : ""}`}
              onClick={() => setActiveTab("home")}
            >
              Home
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === "contact" ? "active" : ""}`}
              onClick={() => setActiveTab("contact")}
            >
              Contact
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === "link" ? "active" : ""}`}
              onClick={() => setActiveTab("link")}
            >
              Link
            </button>
          </li>
        </ul>
        <div className="tab-content py-3 ">
          <div
            className={`tab-pane fade ${
              activeTab === "home" ? "show active" : ""
            }`}
            id="home"
          >
            cndjcbdjcbdjbdvjdvjdncjdwnclw
          </div>
          <div
            className={`tab-pane fade ${
              activeTab === "contact" ? "show active" : ""
            }`}
            id="contact"
          >
            548945689+5628+9562
          </div>
          <div
            className={`tab-pane fade ${
              activeTab === "link" ? "show active" : ""
            }`}
            id="link"
          >
            CTFVYGBUHNIJCTFVYGBHUNJIM
          </div>
        </div>
      </div> */}
      
    </div>
  );
}
