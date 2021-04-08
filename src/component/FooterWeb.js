import React from "react";
import "../style/FooterWeb.css";

function FooterWeb() {
  return (
    <div className="main-footer">
      <div className="container" style={{ textAlign: "center" }}>
        <div className="row">
          {/* Column2 */}
          <div className="col">
            <a
              href="https://www.instagram.com/faqihmubarak1/"
              style={{ color: "Purple" }}
            >
              <i className="fab fa-instagram fa-5x" />
            </a>
          </div>
          {/* Column3 */}
          <div className="col">
            <a
              href="https://www.linkedin.com/in/faqih-mubarak-a367b4182/"
              style={{ color: "Slate Blue" }}
            >
              <i className="fab fa-linkedin fa-5x" />
            </a>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} FAQIH MUBARAK | All rights reserved
            | Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default FooterWeb;
