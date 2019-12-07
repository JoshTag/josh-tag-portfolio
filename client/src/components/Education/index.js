import React, { Component } from "react";
import "./Education.scss";

export class Education extends Component {
  render() {
    return (
      <div className="education" name="education">
          <h3 className="education__header">Education</h3>
          <div className="education__block">
            <h4 className="education__block__title">BrainStation</h4>
            <p className="education__block__date">June 2019</p>
            <p className="education__block__program">
              Full-Time Web Development Diploma
            </p>
          </div>
          <div className="education__block">
            <h4 className="education__block__title">Ryerson University</h4>
            <p className="education__block__date">August 2016</p>
            <p className="education__block__program">
              Bachelor of Commerce – Accounting
            </p>
          </div>
          <div className="education__block">
            <h4 className="education__block__title">Sheridan College</h4>
            <p className="education__block__date">April 2013</p>
            <p className="education__block__program">
              Business Administration – Accounting
            </p>
          </div>
      </div>
    );
  }
}

export default Education;
