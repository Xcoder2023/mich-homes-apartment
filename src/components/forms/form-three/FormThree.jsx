import React, { useState } from "react";
import "./FormThree.css";
import { Link, useNavigate } from "react-router-dom";

const FormThree = () => {
  const navigate = useNavigate();
  const validateForm = () => {
    navigate("/gama");
  };
  const [color, setColor] = useState("white");
  const colorChange = () => {
    setColor("black");
  };
  return (
    <>
      <div className="form-three">
        <div className="formthree-part">
          <p>Start your search!</p>
          <select name="" id="searched">
            <option value="">Disclaimer</option>
          </select>
        </div>

        <div className="formThree-proper">
          <form onSubmit={validateForm} action="" id="data-forms">
            <div className="firstName">
              <label htmlFor="">First Name</label>
              <input
                type="text"
                placeholder="First Name"
                id="first-name"
                required
                onClick={colorChange}
              />
            </div>
            <div className="firstName">
              <label htmlFor="">Last Name</label>
              <input
                type="text"
                placeholder="Last Name"
                id="first-name"
                required
                onClick={colorChange}
              />
            </div>
            <div className="firstName">
              <label htmlFor="">Phone Number</label>
              <input
                type="number"
                placeholder="(123) 456 7890"
                id="first-name"
                required
                onClick={colorChange}
              />
            </div>
            <div className="firstName">
              <label htmlFor="">Email Address</label>
              <input
                type="email"
                placeholder="Email"
                id="first-name"
                required
                onClick={colorChange}
              />
            </div>
            <div className="advert-means">
              <label htmlFor="">How did you hear about us? </label>
              <div className="advert-input-btn">
                <input
                  type="text"
                  placeholder="-"
                  id="advert-search"
                  required
                  onClick={colorChange}
                />
                <button id="advert-btn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                  >
                    <path
                      d="M12 17.5712C11.8218 17.5712 11.6513 17.5415 11.4885 17.4821C11.3246 17.4227 11.1832 17.3187 11.0644 17.1702L3.26733 9.41773C3.08911 9.23951 3 9.04644 3 8.83852C3 8.6306 3.10396 8.43753 3.31188 8.25931C3.4901 8.08109 3.68317 7.99198 3.89109 7.99198C4.09901 7.99198 4.29208 8.06624 4.4703 8.21476L12 15.789L19.5297 8.21476C19.7079 8.03654 19.901 7.95515 20.1089 7.9706C20.3168 7.98486 20.5248 8.08109 20.7327 8.25931C20.9109 8.43753 21 8.6306 21 8.83852C21 9.04644 20.9109 9.23951 20.7327 9.41773L12.9356 17.1702C12.8168 17.3187 12.676 17.4227 12.5133 17.4821C12.3493 17.5415 12.1782 17.5712 12 17.5712Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="firstName">
              <label htmlFor="">Any special requests?</label>
              <textarea id="text-box" placeholder="Type something"></textarea>
            </div>

            <div className="text-area-btn">
              <Link to="/alpha">
                <button id="left-pointers">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <path
                      d="M3.45254 16.6544L3.45183 16.6537C3.32557 16.5275 3.25904 16.4226 3.22679 16.342C3.18901 16.2475 3.16663 16.1356 3.16663 16.0001C3.16663 15.8646 3.18901 15.7526 3.22679 15.6582C3.25904 15.5776 3.32557 15.4727 3.45183 15.3464L3.45254 15.3457L15.4902 3.26011C15.4903 3.26003 15.4904 3.25995 15.4904 3.25987C15.5575 3.19287 15.6226 3.16675 15.7122 3.16675C15.7471 3.16675 15.8272 3.17749 15.9561 3.32787L15.9686 3.34245L15.9821 3.35603C16.1014 3.47534 16.1235 3.56204 16.1235 3.62598C16.1235 3.68985 16.1015 3.77645 15.9825 3.89557C15.9824 3.89569 15.9823 3.89581 15.9821 3.89593L5.09563 14.7345L4.23751 15.5888H5.4484H28.47C28.5462 15.5888 28.6232 15.6127 28.7169 15.7052C28.7953 15.7847 28.8333 15.8727 28.8333 16.0001C28.8333 16.1272 28.7964 16.1965 28.7342 16.2535C28.6435 16.3355 28.5611 16.3634 28.47 16.3634H5.4484H4.24129L5.09485 17.2169L16.0301 28.1522C16.0973 28.2194 16.1235 28.2845 16.1235 28.3742C16.1235 28.4381 16.1014 28.5248 15.9821 28.6441L15.9686 28.6577L15.9561 28.6723C15.8272 28.8227 15.7471 28.8334 15.7122 28.8334C15.6678 28.8334 15.5639 28.8135 15.3949 28.6447C15.3947 28.6445 15.3945 28.6443 15.3943 28.6441L3.45254 16.6544Z"
                      stroke="white"
                    />
                  </svg>
                </button>
              </Link>

              <button
                id="next-parts"
                type="submit"
                className={color === "black" ? "black" : "parted"}
              >
                Next{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12.6755 21.45L22.1231 12L12.6731 2.55005M1.87549 12H22.1255H1.87549Z"
                    stroke="#0C1618"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default FormThree;
