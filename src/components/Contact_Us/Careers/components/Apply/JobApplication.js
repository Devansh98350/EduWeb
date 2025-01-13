import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./JobApplication.css";
import Layout from "../../../../Layout";
import backgroundImg from "../../../../../assets/contact_us/bk.jpeg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTelegram,
  faXTwitter,
  faWhatsapp,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faLink, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import UserInformation from "./../sections/UserInformation";
import PersonalInformation from "./../sections/PersonalInformation";
import WorkEducation from "./../sections/WorkEducation";
import VoluntaryInformation from "./../sections/VoluntaryInformation";
import ReviewSubmit from "./../sections/ReviewSubmit";
import ProgressBar from "./../sections/ProgressBar";

const jobDetails = {
  "trainee-faculty": {
    title: "Trainee Faculty",
    description: (
      <div className="job-listing-container1">
        <div
          className="job-listing-header2"
          style={{
            backgroundImage: `url(${backgroundImg})`,
          }}
        >
          <div className="job-header-content">
            <h1 style={{ color: "orange", fontWeight: "bold" }}>
              IIT Academy | Full time
            </h1>
            <h2>Trainee Faculty</h2>
            <p>In-office Job</p>
            <button
              style={{
                backgroundColor: "transparent",
                color: "transparent",
                cursor: "default",
                pointerEvents: "none",
              }}
            >
              I'm interested
            </button>

            <p>Share job via:</p>
            <div className="share-icons">
              <a
                href="https://www.facebook.com/sharer/sharer.php?u=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://twitter.com/intent/tweet?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faXTwitter}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://wa.me/?text=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://t.me/share/url?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faTelegram}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://www.linkedin.com/sharing/share-offsite/?url?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://t.me/share/url?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://www.linkedin.com/sharing/share-offsite/?url?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLink} className="linkedin-icon23" />
              </a>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  "academic-content-developer": {
    title: "Academic Content Developer",
    description: (
      <div className="job-listing-container1">
        <div
          className="job-listing-header2"
          style={{
            backgroundImage: `url(${backgroundImg})`,
          }}
        >
          <div className="job-header-content">
            <h1 style={{ color: "orange", fontWeight: "bold" }}>
              IIT Academy | Full time
            </h1>
            <h2>Academic Content Developer</h2>
            <p>In-office Job</p>
            <button
              style={{
                backgroundColor: "transparent",
                color: "transparent",
                cursor: "default",
                pointerEvents: "none",
              }}
            >
              I'm interested
            </button>
            <p>Share job via:</p>
            <div className="share-icons">
              <a
                href="https://www.facebook.com/sharer/sharer.php?u=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://twitter.com/intent/tweet?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faXTwitter}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://wa.me/?text=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://t.me/share/url?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faTelegram}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://www.linkedin.com/sharing/share-offsite/?url?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://t.me/share/url?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://www.linkedin.com/sharing/share-offsite/?url?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLink} className="linkedin-icon23" />
              </a>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  "faculty-training-manager": {
    title: "Faculty Training Manager",
    description: (
      <div className="job-listing-container1">
        <div
          className="job-listing-header2"
          style={{
            backgroundImage: `url(${backgroundImg})`,
          }}
        >
          <div className="job-header-content">
            <h1 style={{ color: "orange", fontWeight: "bold" }}>
              IIT Academy | Full time
            </h1>
            <h2>Faculty Training Manager</h2>
            <p>In-office Job</p>
            <button
              style={{
                backgroundColor: "transparent",
                color: "transparent",
                cursor: "default",
                pointerEvents: "none",
              }}
            >
              I'm interested
            </button>
            <p>Share job via:</p>
            <div className="share-icons">
              <a
                href="https://www.facebook.com/sharer/sharer.php?u=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://twitter.com/intent/tweet?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faXTwitter}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://wa.me/?text=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://t.me/share/url?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faTelegram}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://www.linkedin.com/sharing/share-offsite/?url?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://t.me/share/url?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://www.linkedin.com/sharing/share-offsite/?url?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLink} className="linkedin-icon23" />
              </a>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  "senior-faculty-jee-physics": {
    title: "Senior Faculty JEE Physics",
    description: (
      <div className="job-listing-container1">
        <div
          className="job-listing-header2"
          style={{ backgroundImage: `url(${backgroundImg})` }}
        >
          <div className="job-header-content">
            <h1 style={{ color: "orange", fontWeight: "bold" }}>
              IIT Academy | Full time
            </h1>
            <h2>Senior Faculty JEE Physics</h2>
            <p>In-office Job</p>
            <button
              style={{
                backgroundColor: "transparent",
                color: "transparent",
                cursor: "default",
                pointerEvents: "none",
              }}
            >
              I'm interested
            </button>
            <p>Share job via:</p>
            <div className="share-icons">
              <a
                href="https://www.facebook.com/sharer/sharer.php?u=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://twitter.com/intent/tweet?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faXTwitter}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://wa.me/?text=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://t.me/share/url?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faTelegram}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://www.linkedin.com/sharing/share-offsite/?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="mailto:?subject=Check out this job&body=Check this job: YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://www.linkedin.com/sharing/share-offsite/?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLink} className="linkedin-icon23" />
              </a>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  "senior-faculty-jee-maths": {
    title: "Senior Faculty JEE Maths",
    description: (
      <div className="job-listing-container11">
        <div
          className="job-listing-header2"
          style={{ backgroundImage: `url(${backgroundImg})` }}
        >
          <div className="job-header-content">
            <h1 style={{ color: "orange", fontWeight: "bold" }}>
              IIT Academy | Full time
            </h1>
            <h2>Senior Faculty JEE Maths</h2>
            <p>In-office Job</p>
            <button
              style={{
                backgroundColor: "transparent",
                color: "transparent",
                cursor: "default",
                pointerEvents: "none",
              }}
            >
              I'm interested
            </button>
            <p>Share job via:</p>
            <div className="share-icons">
              <a
                href="https://www.facebook.com/sharer/sharer.php?u=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://twitter.com/intent/tweet?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faXTwitter}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://wa.me/?text=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://t.me/share/url?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faTelegram}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://www.linkedin.com/sharing/share-offsite/?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="mailto:?subject=Check%20this%20Job&body=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://www.linkedin.com/sharing/share-offsite/?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLink} className="linkedin-icon23" />
              </a>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  "senior-faculty-jee-chemistry": {
    title: "Senior Faculty JEE Chemistry",
    description: (
      <div className="job-listing-container1">
        <div
          className="job-listing-header2"
          style={{ backgroundImage: `url(${backgroundImg})` }}
        >
          <div className="job-header-content">
            <h1 style={{ color: "orange", fontWeight: "bold" }}>
              IIT Academy | Full time
            </h1>
            <h2>Senior Faculty JEE Chemistry</h2>
            <p>In-office Job</p>
            <button
              style={{
                backgroundColor: "transparent",
                color: "transparent",
                cursor: "default",
                pointerEvents: "none",
              }}
            >
              I'm interested
            </button>
            <p>Share job via:</p>
            <div className="share-icons">
              <a
                href="https://www.facebook.com/sharer/sharer.php?u=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://twitter.com/intent/tweet?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faXTwitter}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://wa.me/?text=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://t.me/share/url?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faTelegram}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://www.linkedin.com/sharing/share-offsite/?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="linkedin-icon23"
                />
              </a>

              <a
                href="https://t.me/share/url?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://www.linkedin.com/sharing/share-offsite/?url?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLink} className="linkedin-icon23" />
              </a>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  "data-analyst": {
    title: "Data Analyst",
    description: (
      <div className="job-listing-container1">
        <div
          className="job-listing-header2"
          style={{ backgroundImage: `url(${backgroundImg})` }}
        >
          <div className="job-header-content">
            <h1 style={{ color: "orange", fontWeight: "bold" }}>
              IIT Academy | Full time
            </h1>
            <h2>Data Analyst</h2>
            <p>In-office Job</p>

            <button
              style={{
                backgroundColor: "transparent",
                color: "transparent",
                cursor: "default",
                pointerEvents: "none",
              }}
            >
              I'm interested
            </button>
            <p>Share job via:</p>
            <div className="share-icons">
              <a
                href="https://www.facebook.com/sharer/sharer.php?u=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://twitter.com/intent/tweet?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faXTwitter}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://wa.me/?text=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://t.me/share/url?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faTelegram}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://www.linkedin.com/sharing/share-offsite/?url?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://t.me/share/url?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://www.linkedin.com/sharing/share-offsite/?url?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLink}
                  rotation={45}
                  className="linkedin-icon23"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  "google-adwords-specialist": {
    title: "Google AdWords Specialist",
    description: (
      <div className="job-listing-container1">
        <div
          className="job-listing-header2"
          style={{ backgroundImage: `url(${backgroundImg})` }}
        >
          <div className="job-header-content">
            <h1 style={{ color: "orange", fontWeight: "bold" }}>
              IIT Academy | Full time
            </h1>
            <h2>Google AdWords Specialist</h2>
            <p>In-office Job</p>

            <button
              style={{
                backgroundColor: "transparent",
                color: "transparent",
                cursor: "default",
                pointerEvents: "none",
              }}
            >
              I'm interested
            </button>
            <p>Share job via:</p>
            <div className="share-icons">
              <a
                href="https://www.facebook.com/sharer/sharer.php?u=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://twitter.com/intent/tweet?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faXTwitter}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://wa.me/?text=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://t.me/share/url?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faTelegram}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://www.linkedin.com/sharing/share-offsite/?url?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://t.me/share/url?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://www.linkedin.com/sharing/share-offsite/?url?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLink}
                  rotation={45}
                  className="linkedin-icon23"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  "business-development-executive": {
    title: "Business Development Executive",
    description: (
      <div className="job-listing-container1">
        <div
          className="job-listing-header2"
          style={{ backgroundImage: `url(${backgroundImg})` }}
        >
          <div className="job-header-content">
            <h1 style={{ color: "orange", fontWeight: "bold" }}>
              IIT Academy | Full time
            </h1>
            <h2>Business Development Executive</h2>
            <p>In-office Job</p>
            <button
              style={{
                backgroundColor: "transparent",
                color: "transparent",
                cursor: "default",
                pointerEvents: "none",
              }}
            >
              I'm interested
            </button>
            <p>Share job via:</p>
            <div className="share-icons">
              <a
                href="https://www.facebook.com/sharer/sharer.php?u=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://twitter.com/intent/tweet?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faXTwitter}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://wa.me/?text=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://t.me/share/url?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faTelegram}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://www.linkedin.com/sharing/share-offsite/?url?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://t.me/share/url?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://www.linkedin.com/sharing/share-offsite/?url?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLink} className="linkedin-icon23" />
              </a>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  "digital-marketing-manager": {
    title: "Digital Marketing Manager",
    description: (
      <div className="job-listing-container1">
        <div
          className="job-listing-header2"
          style={{ backgroundImage: `url(${backgroundImg})` }}
        >
          <div className="job-header-content">
            <h1 style={{ color: "orange", fontWeight: "bold" }}>
              IIT Academy | Full time
            </h1>
            <h2>Digital Marketing Manager</h2>
            <p>In-office Job</p>
            <button
              style={{
                backgroundColor: "transparent",
                color: "transparent",
                cursor: "default",
                pointerEvents: "none",
              }}
            >
              I'm interested
            </button>
            <p>Share job via:</p>
            <div className="share-icons">
              <a
                href="https://www.facebook.com/sharer/sharer.php?u=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://twitter.com/intent/tweet?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faXTwitter}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://wa.me/?text=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://t.me/share/url?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faTelegram}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://www.linkedin.com/sharing/share-offsite/?url?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://t.me/share/url?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://www.linkedin.com/sharing/share-offsite/?url?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLink} className="linkedin-icon23" />
              </a>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  "front-office-executive": {
    title: "Front Office Executive",
    description: (
      <div className="job-listing-container1">
        <div
          className="job-listing-header2"
          style={{ backgroundImage: `url(${backgroundImg})` }}
        >
          <div className="job-header-content">
            <h1 style={{ color: "orange", fontWeight: "bold" }}>
              IIT Academy | Full time
            </h1>
            <h2>Front Office Executive</h2>
            <p>In-office Job</p>
            <button
              style={{
                backgroundColor: "transparent",
                color: "transparent",
                cursor: "default",
                pointerEvents: "none",
              }}
            >
              I'm interested
            </button>
            <p>Share job via:</p>
            <div className="share-icons">
              <a
                href="https://www.facebook.com/sharer/sharer.php?u=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://twitter.com/intent/tweet?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faXTwitter}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://wa.me/?text=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://t.me/share/url?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faTelegram}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://www.linkedin.com/sharing/share-offsite/?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://t.me/share/url?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://www.linkedin.com/sharing/share-offsite/?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLink} className="linkedin-icon23" />
              </a>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  "career-counsellor": {
    title: "Career Counsellor",
    description: (
      <div className="job-listing-container1">
        <div
          className="job-listing-header2"
          style={{ backgroundImage: `url(${backgroundImg})` }}
        >
          <div className="job-header-content">
            <h1 style={{ color: "orange", fontWeight: "bold" }}>
              IIT Academy | Full time
            </h1>
            <h2>Career Counsellor</h2>
            <p>In-office Job</p>
            <button
              style={{
                backgroundColor: "transparent",
                color: "transparent",
                cursor: "default",
                pointerEvents: "none",
              }}
            >
              I'm interested
            </button>
            <p>Share job via:</p>
            <div className="share-icons">
              <a
                href="https://www.facebook.com/sharer/sharer.php?u=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://twitter.com/intent/tweet?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faXTwitter}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://wa.me/?text=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://t.me/share/url?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faTelegram}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://www.linkedin.com/sharing/share-offsite/?url?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://t.me/share/url?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://www.linkedin.com/sharing/share-offsite/?url?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLink} className="linkedin-icon23" />
              </a>
            </div>
          </div>
        </div>
      </div>
    ),
  },
};

// const JobApplication = () => {
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);
//   const { domain } = useParams();
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     domain: "",
//     firstName: "",
//     email: "",
//     mobile: "",
//     address: "",
//     gender: "",
//     linkedIn: "",
//     resume: null,
//     photo: null,
//     college: "",
//     degree: "",
//     branch: "",
//     semester: "",

//     captcha: "",
//   });
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   useEffect(() => {
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       domain: domain,
//     }));
//   }, [domain]);

//   useEffect(() => {
//     console.log("Form submission state:", isSubmitted);
//   }, [isSubmitted]);

//   useEffect(() => {
//     const handleBackButton = (event) => {
//       event.preventDefault();
//       navigate("/");
//     };

//     window.addEventListener("popstate", handleBackButton);

//     return () => {
//       window.removeEventListener("popstate", handleBackButton);
//     };
//   }, [navigate]);

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     setFormData({
//       ...formData,
//       [name]: files ? files[0] : value,
//     });
//   };

//   const handleFileUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const validTypes = ["application/pdf"];
//       if (validTypes.includes(file.type)) {
//         setFormData({
//           ...formData,
//           resume: file,
//         });
//         toast.success("Resume uploaded successfully!");
//       } else {
//         e.target.value = null;
//         toast.error("Please upload a valid pdf only.");
//       }
//     }
//   };

//   const handlephotoUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const validTypes = ["image/jpeg", "image/png"];
//       if (validTypes.includes(file.type)) {
//         setFormData({
//           ...formData,
//           photo: file,
//         });
//         toast.success("Photo uploaded successfully!");
//       } else {
//         e.target.value = null;
//         toast.error("Please upload a valid image file: .jpeg, .png");
//       }
//     }
//   };

//   const getBase64 = (file) => {
//     return new Promise((resolve, reject) => {
//       const reader = new FileReader();
//       reader.onload = () => resolve(reader.result.split(",")[1]); // Get base64 without data URL header
//       reader.onerror = (error) => reject(error);
//       reader.readAsDataURL(file);
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     // Show loading message
//     const loadingSwal = Swal.fire({
//       title: "Submitting your details",
//       text: "Please wait...",
//       allowOutsideClick: false,
//       didOpen: () => {
//         Swal.showLoading(); // Show loading spinner
//       },
//     });

//     // Create a new FormData object to handle the form data
//     const formDataObj = new FormData();

//     // Append form fields
//     formDataObj.append("domain", formData.domain);
//     formDataObj.append("firstName", formData.firstName);
//     formDataObj.append("email", formData.email);
//     formDataObj.append("mobile", formData.mobile);
//     formDataObj.append("address", formData.address);
//     formDataObj.append("gender", formData.gender);
//     formDataObj.append("linkedIn", formData.linkedIn);
//     formDataObj.append("college", formData.college);
//     formDataObj.append("degree", formData.degree);
//     formDataObj.append("branch", formData.branch);
//     formDataObj.append("semester", formData.semester);

//     // Convert resume and photo files to base64 and append to formDataObj
//     if (formData.resume) {
//       const base64Resume = await getBase64(formData.resume);
//       formDataObj.append("resume", base64Resume);
//     }

//     if (formData.photo) {
//       const base64Photo = await getBase64(formData.photo);
//       formDataObj.append("photo", base64Photo);
//     }

//     // Make a POST request to your Google Apps Script URL
//     fetch(
//       "https://script.google.com/macros/s/AKfycbwG7MGZjtG8g0kVmccdwTqzZrRJagisLosy8UTqsdQPeh_3fPKFewzCqUX18Iidz8HZCw/exec",
//       {
//         method: "POST",
//         body: formDataObj,
//       }
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         console.log("Form submitted successfully:", data);
//         setIsSubmitted(true);
//         setFormData({
//           domain: "",
//           firstName: "",
//           email: "",
//           mobile: "",
//           address: "",
//           gender: "",
//           linkedIn: "",
//           resume: null,
//           photo: null,
//           college: "",
//           degree: "",
//           branch: "",
//           semester: "",
//           captcha: "",
//         });
//         // Update the loading popup to show success message
//         loadingSwal.then(() => {
//           Swal.fire({
//             title: "Thank you!",
//             html: `
//     <p>Your application has been submitted successfully.</p>
//     <p>A copy of your application will be sent to <strong>${formData.email}</strong> for your records.</p>`,
//             icon: "success",
//             showCloseButton: false,
//             showCancelButton: false,
//             focusConfirm: false,
//             didRender: () => {
//               setTimeout(() => {
//                 Swal.close();
//                 navigate(`/internship-description/${formData.domain}`);
//               }, 1500);
//             },
//           });
//         });
//       })
//       .catch((error) => {
//         console.error("Error submitting form:", error);
//         // Optionally, show an error message here
//       })
//       .finally(() => {
//         // Close the loading message after the process is complete
//         Swal.close();
//       });
//   };

//   const job = jobDetails[domain];
//   return (
//     <Layout title={`${job.title} Application`}>
//       <ToastContainer
//         position="top-right"
//         autoClose={3000}
//         hideProgressBar={false}
//         closeOnClick
//         pauseOnHover
//         draggable
//         pauseOnFocusLoss
//       />
//       <div className="job-application">
//         <div
//           className="job-listing-header"
//           style={{
//             backgroundImage: `url(${backgroundImg})`,
//           }}
//         >
//           <div>{job.description}</div>
//         </div>

//         <form onSubmit={handleSubmit} className="application-form">
//           <div className="form-section">
//             <label style={{ display: "none" }}>
//               Domain *
//               <input
//                 type="text"
//                 name="domain"
//                 value={formData.domain}
//                 onChange={handleChange}
//                 required
//               />
//             </label>
//             <h1
//               style={{
//                 fontWeight: "bold",
//                 textAlign: "center",
//                 fontSize: "20px",
//                 color: "black",
//               }}
//             >
//               Part-1: Personal Information
//             </h1>
//             <label>
//               Full Name *
//               <input
//                 type="text"
//                 name="firstName"
//                 value={formData.firstName}
//                 onChange={handleChange}
//                 required
//               />
//             </label>
//             <label>
//               Email Id *
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//               />
//             </label>
//             <label>
//               Mobile No (WhatsApp) *
//               <input
//                 type="tel"
//                 name="mobile"
//                 value={formData.mobile}
//                 onChange={handleChange}
//                 required
//               />
//             </label>
//             <label>
//               Permanent Address *
//               <input
//                 type="text"
//                 name="address"
//                 value={formData.address}
//                 onChange={handleChange}
//                 required
//               />
//             </label>
//             <label>
//               Gender *
//               <select
//                 name="gender"
//                 value={formData.gender}
//                 onChange={handleChange}
//                 required
//               >
//                 <option value="">Select</option>
//                 <option value="male">Male</option>
//                 <option value="female">Female</option>
//                 <option value="other">Other</option>
//               </select>
//             </label>
//           </div>

//           <div className="form-section">
//             <label>
//               LinkedIn Profile *
//               <input
//                 type="url"
//                 name="linkedIn"
//                 value={formData.linkedIn}
//                 onChange={handleChange}
//                 required
//               />
//             </label>

//             <label>
//               Upload Resume *
//               <input
//                 type="file"
//                 name="resume"
//                 accept=".pdf"
//                 onChange={handleFileUpload}
//                 required
//               />
//             </label>
//             <label>
//               Upload Your Photo *
//               <input
//                 type="file"
//                 name="photo"
//                 accept="image/jpeg, image/png"
//                 onChange={handlephotoUpload}
//                 required
//               />
//             </label>
//           </div>

//           <div className="form-section">
//             <h1
//               style={{
//                 fontWeight: "bold",
//                 textAlign: "center",
//                 fontSize: "20px",
//                 color: "black",
//               }}
//             >
//               Part-2: Academic Information
//             </h1>
//             <label>
//               College Name *
//               <input
//                 type="text"
//                 name="college"
//                 value={formData.college}
//                 onChange={handleChange}
//                 required
//               />
//             </label>
//             <label>
//               Degree (Currently Pursuing / Last Pursued) *
//               <input
//                 type="text"
//                 name="degree"
//                 value={formData.degree}
//                 onChange={handleChange}
//                 required
//               />
//             </label>
//             <label>
//               Branch *
//               <input
//                 type="text"
//                 name="branch"
//                 value={formData.branch}
//                 onChange={handleChange}
//                 required
//               />
//             </label>
//             <label>
//               Current Semester *
//               <select
//                 name="semester"
//                 value={formData.semester}
//                 onChange={handleChange}
//                 required
//               >
//                 <option value="">Select</option>
//                 <option value="1">1 (First)</option>
//                 <option value="2">2 (Second)</option>
//                 <option value="3">3 (Third)</option>
//                 <option value="4">4 (Fourth)</option>
//                 <option value="5">5 (Fifth)</option>
//                 <option value="6">6 (Sixth)</option>
//                 <option value="7">7 (Seventh)</option>
//                 <option value="8">8 (Eighth)</option>
//               </select>
//             </label>
//           </div>

//           <button type="submit" disabled={isSubmitting}>
//             {isSubmitting ? "Submitting details..." : "Submit Application"}
//           </button>
//         </form>
//       </div>
//     </Layout>
//   );
// };

export const steps = [
  "User Information",
  "Personal Information",
  "Education and Work Experience",
  "Voluntary Information",
  "Review and Submit",
];

const JobApplication = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [currentStep, setCurrentStep] = useState(() => {
    const savedStep = localStorage.getItem("currentStep");
    return savedStep ? JSON.parse(savedStep) : 0;
  });

  const [formData, setFormData] = useState(() => {
    const savedData = localStorage.getItem("formData");
    return savedData ? JSON.parse(savedData) : {};
  });

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  useEffect(() => {
    localStorage.setItem("currentStep", JSON.stringify(currentStep));
  }, [currentStep]);

  const handleNext = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = () => {
    console.log("Form submitted successfully!");
    localStorage.removeItem("formData");
    localStorage.removeItem("currentStep");
  };

  const handleDataChange = (data) => {
    setFormData((prevData) => ({
      ...prevData,
      ...data,
    }));
  };

  const getCurrentStepComponent = (stepIndex) => {
    switch (stepIndex) {
      case 0:
        return (
          <UserInformation
            onNext={handleNext}
            onDataChange={handleDataChange}
            formData={formData.userInformation}
          />
        );
      case 1:
        return (
          <PersonalInformation
            onNext={handleNext}
            onBack={handleBack}
            onDataChange={handleDataChange}
            formData={formData.personalInformation}
          />
        );
      case 2:
        return (
          <WorkEducation
            onNext={handleNext}
            onBack={handleBack}
            onDataChange={handleDataChange}
            formData={formData.workAndEducation}
          />
        );
      case 3:
        return (
          <VoluntaryInformation
            onNext={handleNext}
            onBack={handleBack}
            onDataChange={handleDataChange}
            formData={formData.voluntaryInformation}
          />
        );
      case 4:
        return (
          <ReviewSubmit
            onBack={handleBack}
            formData={formData}
            onSubmit={handleSubmit}
          />
        );
      default:
        return null;
    }
  };
  const { domain } = useParams();
  const job = jobDetails[domain];

  return (
    <Layout title={`${job.title} Application`}>
      <div
        className="job-listing-header"
        style={{
          backgroundImage: `url(${backgroundImg})`,
        }}
      >
        <div>{job.description}</div>
      </div>
      <div className=" bg-gray-100 py-6 flex flex-col justify-center items-center  sm:py-12">
        <ProgressBar step={currentStep} totalSteps={steps.length} />
        {/* {steps[currentStep]} */}
        {/* <div className=" max-w-7xl flex flex-col justify-center items-center"> */}
        <div className="relative px-4 mt-4 py-3 bg-white shadow-lg sm:rounded-3xl sm:p-20 w-full">
          {getCurrentStepComponent(currentStep)}
          {/* </div> */}
        </div>
      </div>
    </Layout>
  );
};
export default JobApplication;
