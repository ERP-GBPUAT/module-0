import React from "react";
import { Link } from "react-router-dom";
import CardProfile from "./CardProfile";

const HeaderDash = () => {
  const [inputDisabled, setInputDisabled] = React.useState(true);
  const handleChange = () => {
    console.log("hi");
  };
  const handleInputDisabled = (edit) => {
    if (edit) {
      setInputDisabled(false);
    } else {
      setInputDisabled(true);
    }
  }
  return (
    <>
      <div className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center imageStyle">
        {/* <!-- Mask --> */}
        <span className="mask bg-gradient-default opacity-8"></span>
        {/* <!-- Header container --> */}
        <div className="container-fluid d-flex align-items-center">
          <div className="row">
            <div className="col-lg-7 col-md-10">
              <h1 className="display-2 text-white">Hello Jesse</h1>
              <p className="text-white mt-0 mb-5">
                This is your profile page. You can see the progress you've made
                with your work and manage your projects or assigned tasks
              </p>
              {inputDisabled ? <Link onClick={() => handleInputDisabled(true)} className="btn btn-info ">
                      Edit Profile
                    </Link> :
                      <div></div>}
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid mt--7">
        <div className="row">
          <div className="col-xl-4 order-xl-2 mb-5 mb-xl-0">
            <CardProfile />
          </div>
          <div className="col-xl-8 order-xl-1">
            <div className="card bg-secondary shadow">
              <div className="card-header bg-white border-0">
                <div className="row align-items-center">
                  <div className="col-8">
                    <h3 className="mb-0 text-oliveGreen">My account</h3>
                  </div>
                  <div className="col-4 text-right">
                    {inputDisabled ? <Link onClick={() => handleInputDisabled(true)} className="btn btn-sm btn-primary">
                      Edit Profile
                    </Link> :
                      <Link onClick={() => handleInputDisabled(false)} className="btn btn-sm btn-primary">
                        Update
                      </Link>}
                  </div>
                </div>
              </div>
              <div className="card-body">
                <form>
                  <div className="">
                    <h6 className="heading-small text-darkOliveGreen mb-4">
                      User information
                    </h6>
                  </div>
                  <div className="pl-lg-4">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group focused">
                          <label
                            className="form-control-label"
                            htmlFor="input-username"
                          >
                            Username
                          </label>
                          <input
                            disabled={inputDisabled}
                            onChange={handleChange}
                            type="text"
                            id="input-username"
                            className="form-control form-control-alternative"
                            placeholder="Username"
                            value="lucky.jesse"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label
                            className="form-control-label"
                            htmlFor="input-email"
                          >
                            Email address
                          </label>
                          <input
                            disabled={inputDisabled}
                            onChange={handleChange}
                            type="email"
                            id="input-email"
                            className="form-control form-control-alternative"
                            value="jesse@gmail.com"
                            placeholder="jesse@example.com"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group focused">
                          <label
                            className="form-control-label"
                            htmlFor="input-first-name"
                          >
                            First name
                          </label>
                          <input
                            disabled={inputDisabled}
                            onChange={handleChange}
                            type="text"
                            id="input-first-name"
                            className="form-control form-control-alternative"
                            placeholder="First name"
                            value="Lucky"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group focused">
                          <label
                            className="form-control-label"
                            htmlFor="input-last-name"
                          >
                            Last name
                          </label>
                          <input
                            disabled={inputDisabled}
                            onChange={handleChange}
                            type="text"
                            id="input-last-name"
                            className="form-control form-control-alternative"
                            placeholder="Last name"
                            value="Jesse"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr className="my-4" />
                  <h6 className="heading-small text-darkOliveGreen mb-4">
                    Other information
                  </h6>
                  <div className="pl-lg-4">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group focused">
                          <label
                            className="form-control-label"
                            htmlFor="input-research"
                          >
                            Research Intrests
                          </label>
                          <input
                            disabled={inputDisabled}
                            onChange={handleChange}
                            id="input-research"
                            className="form-control form-control-alternative"
                            placeholder="Research Intrests"
                            value="Network security and Database"
                            type="text"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-4">
                        <div className="form-group focused">
                          <label
                            className="form-control-label"
                            htmlFor="input-phone"
                          >
                            Phone number
                          </label>
                          <input
                            disabled={inputDisabled}
                            onChange={handleChange}
                            type="text"
                            id="input-phone"
                            className="form-control form-control-alternative"
                            placeholder="Phone number"
                            value="8738958334"
                          />
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="form-group focused">
                          <label
                            className="form-control-label"
                            htmlFor="input-designation"
                          >
                            Designation
                          </label>
                          <input
                            disabled={inputDisabled}
                            onChange={handleChange}
                            type="text"
                            id="input-designation"
                            className="form-control form-control-alternative"
                            placeholder="Designation"
                            value="Professor"
                          />
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="form-group">
                          <label
                            className="form-control-label"
                            htmlFor="input-department"
                          >
                            Department
                          </label>
                          <input
                            disabled={inputDisabled}
                            onChange={handleChange}
                            value="Information Technology"
                            type="text"
                            id="input-department"
                            className="form-control form-control-alternative"
                            placeholder="Department"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr className="my-4" />
                  <h6 className="heading-small text-darkOliveGreen mb-4">
                    About me
                  </h6>
                  <div className="pl-lg-4">
                    <div className="form-group focused">
                      <label className="form-control-label">About Me</label>
                      <textarea
                        disabled={inputDisabled}
                        rows="4"
                        className="form-control form-control-alternative"
                        placeholder="A few words about you ..."
                      >
                        A beautiful Dashboard for Bootstrap 4. It is Free and
                        Open Source.
                      </textarea>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderDash;
