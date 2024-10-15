import { useCallback, useState } from "react";

export default function ESform() {
  const [examSupritendentFormData, setExamSupritendentFormData] = useState({
    examSupritendentCode: "",
    examSupritendentName: "",
    examSupritendentEmail: "",
    examSupritendentMobile: "",
    examSupritendentSex: "",
    examSupritendentEducation: "",
    examSupritendentAddress: "",
    examSupritendentExperience: "",
    examSupritendentJobType: "",
  });
  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setExamSupritendentFormData((prevData) => ({ ...prevData, [name]: value }));
  }, []);

  return (
    <div className="container">
      <div className="">
        <section className="text-center mt-2 fs-2 fw-bold">
          EXAM SUPERINTENDENT
        </section>
        <form id="examSupritendentForm">
          <table className="table table-borderless">
            <tbody>
              {[
                {
                  label: "Exam Supritendent Code",
                  name: "ExamSupritendentCode",
                  type: "text",
                  placeholder: "eg. es98",
                },
                {
                  label: "Exam Supritendent Name",
                  name: "ExamSupritendentName",
                  type: "text",
                  placeholder: "eg. Mohit Kumar",
                },
                {
                  label: "Exam Supritendent Email",
                  name: "ExamSupritendentEmail",
                  type: "email",
                  placeholder: "eg. asb@gmail.com",
                },
                {
                  label: "Exam Supritendent Mobile",
                  name: "ExamSupritendentMobile",
                  type: "number",
                  placeholder: "eg. 8701234567",
                },
                {
                  label: "Exam Supritendent Sex",
                  name: "ExamSupritendentSex",
                  type: "text",
                  placeholder: "M/F",
                },
                {
                  label: "Exam Supritendent Highest qualification",
                  name: "ExamSupritendentEducation",
                  type: "text",
                  placeholder: "eg. M Tech",
                },
                {
                  label: "Exam Supritendent Address",
                  name: "ExamSupritendentAddress",
                  type: "text",
                  placeholder:
                    "eg. 2nd Floor, Government Polytechnic Building Plot No. 6C, Sector-11, Sidcul Rd, Haridwar, Uttarakhand 249403 ",
                },
                {
                  label: "Exam Supritendent Experience",
                  name: "ExamSupritendentExperience",
                  type: "number",
                  placeholder: "1.5",
                },
                {
                  label: "Exam Supritendent JobType",
                  name: "ExamSupritendentJobType",
                  type: "text",
                  placeholder: "Permanent/Contractual",
                },
              ].map(({ label, name, type, placeholder }) => (
                <tr key={name}>
                  <td>
                    <label htmlFor={`input${name}`} className="form-label mt-3">
                      {label}
                    </label>
                  </td>
                  <td>
                    <input
                      type={type}
                      className="form-control mt-3"
                      id={`input${name}`}
                      name={name}
                      value={examSupritendentFormData[name]}
                      onChange={handleInputChange}
                      required
                      placeholder={placeholder}
                    />
                  </td>
                </tr>
              ))}

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
