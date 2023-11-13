import React, { useState } from "react";
import "./FormTwo.css";
import { Link, useNavigate } from "react-router-dom";

const FormTwo = () => {
  const navigate = useNavigate();

  const validateForm = () => {
    // event.preventDefault()
    navigate("/beta");
  };
  const [color, setColor] = useState("white");
  const colorChange = () => {
    setColor("black");
  };
  return (
    <>
      <div className="form-two-two">
        <div className="formtwo-parts">
          <p>Which apartment size and what is your budget?</p>
          <select name="" id="searchs">
            <option value="">find out the 'why'?</option>
          </select>
        </div>

        <div className="formTwo-propers">
          <form onSubmit={validateForm} action="" id="data-forms">
            <div className="bed-bath-roomss">
              <div className="bed-roomss">
                <div className="bed-labels">
                  <label htmlFor="">Bedrooms</label>
                  <div className="search-btns">
                    <input
                      type="text"
                      placeholder="-"
                      id="bath-search"
                      required
                      onClick={colorChange}
                    />
                    <button id="bed-btns">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M12 16.6024C11.8218 16.6024 11.6513 16.5727 11.4885 16.5133C11.3246 16.4539 11.1832 16.35 11.0644 16.2015L3.26733 8.44898C3.08911 8.27076 3 8.07769 3 7.86977C3 7.66185 3.10396 7.46878 3.31188 7.29056C3.4901 7.11234 3.68317 7.02323 3.89109 7.02323C4.09901 7.02323 4.29208 7.09749 4.4703 7.24601L12 14.8203L19.5297 7.24601C19.7079 7.06779 19.901 6.9864 20.1089 7.00185C20.3168 7.01611 20.5248 7.11234 20.7327 7.29056C20.9109 7.46878 21 7.66185 21 7.86977C21 8.07769 20.9109 8.27076 20.7327 8.44898L12.9356 16.2015C12.8168 16.35 12.676 16.4539 12.5133 16.5133C12.3493 16.5727 12.1782 16.6024 12 16.6024Z"
                          fill="white"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              {/* bathrooms */}

              <div className="bath-roomss">
                <div className="bed-labels">
                  <label htmlFor="">Bathrooms</label>
                  <div className="search-btns">
                    <input
                      type="text"
                      placeholder="-"
                      id="bath-search"
                      required
                      onClick={colorChange}
                    />
                    <button id="bed-btns">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M12 16.6024C11.8218 16.6024 11.6513 16.5727 11.4885 16.5133C11.3246 16.4539 11.1832 16.35 11.0644 16.2015L3.26733 8.44898C3.08911 8.27076 3 8.07769 3 7.86977C3 7.66185 3.10396 7.46878 3.31188 7.29056C3.4901 7.11234 3.68317 7.02323 3.89109 7.02323C4.09901 7.02323 4.29208 7.09749 4.4703 7.24601L12 14.8203L19.5297 7.24601C19.7079 7.06779 19.901 6.9864 20.1089 7.00185C20.3168 7.01611 20.5248 7.11234 20.7327 7.29056C20.9109 7.46878 21 7.66185 21 7.86977C21 8.07769 20.9109 8.27076 20.7327 8.44898L12.9356 16.2015C12.8168 16.35 12.676 16.4539 12.5133 16.5133C12.3493 16.5727 12.1782 16.6024 12 16.6024Z"
                          fill="white"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* long-center-form-button */}

            <div className="bed-labels">
              <label htmlFor="">Budget</label>
              <div className="search-btns">
                <input
                  type="text"
                  placeholder="-"
                  id="buget-bath-searchs"
                  required
                  onClick={colorChange}
                />
                <button id="bed-btns">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12 16.6024C11.8218 16.6024 11.6513 16.5727 11.4885 16.5133C11.3246 16.4539 11.1832 16.35 11.0644 16.2015L3.26733 8.44898C3.08911 8.27076 3 8.07769 3 7.86977C3 7.66185 3.10396 7.46878 3.31188 7.29056C3.4901 7.11234 3.68317 7.02323 3.89109 7.02323C4.09901 7.02323 4.29208 7.09749 4.4703 7.24601L12 14.8203L19.5297 7.24601C19.7079 7.06779 19.901 6.9864 20.1089 7.00185C20.3168 7.01611 20.5248 7.11234 20.7327 7.29056C20.9109 7.46878 21 7.66185 21 7.86977C21 8.07769 20.9109 8.27076 20.7327 8.44898L12.9356 16.2015C12.8168 16.35 12.676 16.4539 12.5133 16.5133C12.3493 16.5727 12.1782 16.6024 12 16.6024Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <select name="" id="searchs-phone">
              <option value="">find out the 'why'?</option>
            </select>
            <div className="next-btns">
              <Link to="/shape">
                <button id="left-pointer">
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
              <button className={color === "black" ? "black" : "next"}>
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

export default FormTwo;
