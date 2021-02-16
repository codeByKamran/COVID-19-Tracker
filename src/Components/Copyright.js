import React from "react";
import "./Copyright.css";

const CopyrightSection = () => {
  return (
    <div className="copyright__section">
      <h1>
        @This <strong>COVID-19 Tracker</strong> is built by{" "}
        <a href="https://kamran-covid19tracker.netlify.app/" target="_blank">
          Kamran A.
        </a>
        with <strong>React</strong> to Showcase Skills@
      </h1>
    </div>
  );
};

export default CopyrightSection;
