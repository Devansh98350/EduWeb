import React, { useEffect } from "react";
import "./Feestructure.css";
import Layout from "../../Layout";
import { HashLink } from "react-router-hash-link";

function Feestructure() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Layout title="Fees Structure">
        <section className="fee-section">
          <h1>FEE Structure</h1>
          <div className="fee-table">
            <h2>i) Engineering Division</h2>
            <table>
              <thead>
                <tr>
                  <th>Course Name (Code)</th>
                  <th>Eligibility</th>
                  <th>FEE Structure</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Arjuna (JA)</td>
                  <td>10th to 11th moving</td>
                  <td>
                    <HashLink
                      smooth
                      to="/engineering-class-11-iit-academy#details"
                      className="view"
                    >
                      view
                    </HashLink>
                  </td>
                </tr>
                <tr>
                  <td>Chaitanya (JC)</td>
                  <td>11th to 12th moving</td>
                  <td>
                    <HashLink
                      to="/engineering-class-12-iit-academy#details"
                      className="view"
                    >
                      view
                    </HashLink>
                  </td>
                </tr>
                <tr>
                  <td>Eklavya (JE)</td>
                  <td>12th passed</td>
                  <td>
                    <HashLink
                      to="/engineering-class-13-iit-academy#details"
                      className="view"
                    >
                      view
                    </HashLink>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="fee-table">
            <h2>ii) Medical Divison</h2>
            <table>
              <thead>
                <tr>
                  <th>Course Name (Code)</th>
                  <th>Eligibility</th>
                  <th>FEE Structure</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Ananta (MA)</td>
                  <td>10th to 11th moving</td>
                  <td>
                    <HashLink
                      to="/medical-class-11-iit-academy#details"
                      className="view"
                    >
                      view
                    </HashLink>
                  </td>
                </tr>
                <tr>
                  <td>Sudarshan (MD)</td>
                  <td>11th to 12th moving</td>
                  <td>
                    <HashLink
                      to="/medical-class-12-iit-academy#details"
                      className="view"
                    >
                      view
                    </HashLink>
                  </td>
                </tr>
                <tr>
                  <td>Swadhyaya (MS)</td>
                  <td>12th passed</td>
                  <td>
                    <HashLink
                      to="/medical-class-13-iit-academy#details"
                      className="view"
                    >
                      view
                    </HashLink>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="fee-table">
            <h2>iii) Foundation Division</h2>
            <table>
              <thead>
                <tr>
                  <th>Course Name (Code)</th>
                  <th>Eligibility</th>
                  <th>FEE Structure</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Aadhya (AA)</td>
                  <td>5th to 6th moving</td>
                  <td>
                    <HashLink
                      to="/foundation-class-06-iit-academy#details"
                      className="view"
                    >
                      view
                    </HashLink>
                  </td>
                </tr>
                <tr>
                  <td>Abhinav (AB)</td>
                  <td>6th to 7th moving</td>
                  <td>
                    <HashLink
                      to="/foundation-class-07-iit-academy#details"
                      className="view"
                    >
                      view
                    </HashLink>
                  </td>
                </tr>
                <tr>
                  <td>Abhyas (AH)</td>
                  <td>7th to 8th moving</td>
                  <td>
                    <HashLink
                      to="/foundation-class-08-iit-academy#details"
                      className="view"
                    >
                      view
                    </HashLink>
                  </td>
                </tr>
                <tr>
                  <td>Aarohan (AR)</td>
                  <td>8th to 9th moving</td>
                  <td>
                    <HashLink
                      to="/foundation-class-09-iit-academy#details"
                      className="view"
                    >
                      view
                    </HashLink>
                  </td>
                </tr>
                <tr>
                  <td>Atal (AT)</td>
                  <td>9th to 10th moving</td>
                  <td>
                    <HashLink
                      to="/foundation-class-10-iit-academy#details"
                      className="view"
                    >
                      view
                    </HashLink>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="fee-table">
            <h2>iv) DLP Division</h2>
            <table>
              <thead>
                <tr>
                  <th>Course Name (Code)</th>
                  <th>Eligibility</th>
                  <th>FEE Structure</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Sankalp (DA)</td>
                  <td>9th to 10th moving</td>
                  <td>
                    <HashLink
                      to="/distance-class-10-iit-academy#details"
                      className="view"
                    >
                      view
                    </HashLink>
                  </td>
                </tr>
                <tr>
                  <td>Utkarsh (DK)</td>
                  <td>10th to 11th moving (Engg.)</td>
                  <td>
                    <HashLink
                      to="/distance-class-11-engg-iit-academy#details"
                      className="view"
                    >
                      view
                    </HashLink>
                  </td>
                </tr>
                <tr>
                  <td>Lakshya (DL)</td>
                  <td>11th to 12th moving (Engg.)</td>
                  <td>
                    <HashLink
                      to="/distance-class-12-engg-iit-academy#details"
                      className="view"
                    >
                      view
                    </HashLink>
                  </td>
                </tr>
                <tr>
                  <td>Abhiyaan (DH)</td>
                  <td>12th passed (Engg.)</td>
                  <td>
                    <HashLink
                      to="/distance-class-13-engg-iit-academy#details"
                      className="view"
                    >
                      view
                    </HashLink>
                  </td>
                </tr>
                <tr>
                  <td>Yukti (DU)</td>
                  <td>10th to 11th moving (Medical)</td>
                  <td>
                    <HashLink
                      to="/distance-class-11-med-iit-academy#details"
                      className="view"
                    >
                      view
                    </HashLink>
                  </td>
                </tr>
                <tr>
                  <td>Sarthak (DS)</td>
                  <td>11th to 12th moving (Medical)</td>
                  <td>
                    <HashLink
                      to="/distance-class-12-med-iit-academy#details"
                      className="view"
                    >
                      view
                    </HashLink>
                  </td>
                </tr>
                <tr>
                  <td>Pragya (DY)</td>
                  <td>12th passed (Medical)</td>
                  <td>
                    <HashLink
                      to="/distance-class-13-med-iit-academy#details"
                      className="view"
                    >
                      view
                    </HashLink>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="fee-table">
            <h2>v)Boards Division</h2>
            <table>
              <thead>
                <tr>
                  <th>Course Name (Code)</th>
                  <th>Eligibility</th>
                  <th>FEE Structure</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Sammarsa (BS)</td>
                  <td>10th to 11th moving (PCM)</td>
                  <td>
                    <HashLink
                      to="/boards-class-11-pcm-iit-academy#details"
                      className="view"
                    >
                      view
                    </HashLink>
                  </td>
                </tr>
                <tr>
                  <td>Vikash (BV)</td>
                  <td>11th to 12th moving (PCM)</td>
                  <td>
                    <HashLink
                      to="/boards-class-12-pcm-iit-academy#details"
                      className="view"
                    >
                      view
                    </HashLink>
                  </td>
                </tr>
                <tr>
                  <td>Daksh (BD)</td>
                  <td>10th to 11th moving (PCB)</td>
                  <td>
                    <HashLink
                      to="/boards-class-11-pcb-iit-academy#details"
                      className="view"
                    >
                      view
                    </HashLink>
                  </td>
                </tr>
                <tr>
                  <td>Samridhi (BM)</td>
                  <td>11th to 12th moving (PCB)</td>
                  <td>
                    <HashLink
                      to="/boards-class-12-pcb-iit-academy#details"
                      className="view"
                    >
                      view
                    </HashLink>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <section id="section" className="section">
          <h1>Scholarship Criteria</h1>
          <div className="table">
            <h2>i) Based on 10-12 boards percentage</h2>
            <table>
              <thead>
                <tr>
                  <th>Boards Percentage</th>
                  <th>Rebate in Fees</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>97% & ABOVE</td>
                  <td>80%</td>
                </tr>
                <tr>
                  <td>96%-97%</td>
                  <td>60%</td>
                </tr>
                <tr>
                  <td>95%-96%</td>
                  <td>50%</td>
                </tr>
                <tr>
                  <td>94%-95%</td>
                  <td>40%</td>
                </tr>
                <tr>
                  <td>92%-94%</td>
                  <td>35%</td>
                </tr>
                <tr>
                  <td>90%-92%</td>
                  <td>30%</td>
                </tr>
                <tr>
                  <td>85%-90%</td>
                  <td>20%</td>
                </tr>
                <tr>
                  <td>80%-85%</td>
                  <td>10%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="table">
            <h2>ii) Based on JEE Main Percentile</h2>
            <table>
              <thead>
                <tr>
                  <th>JEE Main %tile</th>
                  <th>Rebate in Fee</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>97-100</td>
                  <td>80%</td>
                </tr>
                <tr>
                  <td>96.5-97</td>
                  <td>70%</td>
                </tr>
                <tr>
                  <td>96-96.5</td>
                  <td>65%</td>
                </tr>
                <tr>
                  <td>95-96</td>
                  <td>60%</td>
                </tr>
                <tr>
                  <td>94-95</td>
                  <td>55%</td>
                </tr>
                <tr>
                  <td>93-94</td>
                  <td>50%</td>
                </tr>
                <tr>
                  <td>92-93</td>
                  <td>40%</td>
                </tr>
                <tr>
                  <td>90-92</td>
                  <td>30%</td>
                </tr>
                <tr>
                  <td>85-90</td>
                  <td>20%</td>
                </tr>
                <tr>
                  <td>80-85</td>
                  <td>10%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="table">
            <h2>iii) Based on IIT Academy Scholarship Test</h2>
            <table>
              <thead>
                <tr>
                  <th>Rank Obtained</th>
                  <th>Scholarship</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1st Rank</td>
                  <td>100%</td>
                </tr>
                <tr>
                  <td>2nd Rank</td>
                  <td>90%</td>
                </tr>
                <tr>
                  <td>3rd Rank</td>
                  <td>80%</td>
                </tr>
                <tr>
                  <td>4th Rank</td>
                  <td>70%</td>
                </tr>
                <tr>
                  <td>5th Rank</td>
                  <td>60%</td>
                </tr>
                <tr>
                  <td>6-10</td>
                  <td>50%</td>
                </tr>
                <tr>
                  <td>11-20</td>
                  <td>40%</td>
                </tr>
                <tr>
                  <td>21-50</td>
                  <td>30%</td>
                </tr>
                <tr>
                  <td>51-100</td>
                  <td>20%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="table">
            <h2>iv) Other Scholarships</h2>
            <table>
              <thead>
                <tr>
                  <th>Particular</th>
                  <th>Rebate in fees</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Martyrs</td>
                  <td>30%</td>
                </tr>
                <tr>
                  <td>Ex-Army</td>
                  <td>10%</td>
                </tr>
                <tr>
                  <td>Para Military</td>
                  <td>10%</td>
                </tr>
                <tr>
                  <td>Covid Effected</td>
                  <td>30%</td>
                </tr>
                <tr>
                  <td>Girls</td>
                  <td>10%</td>
                </tr>
                <tr>
                  <td>Bihar Police</td>
                  <td>10%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </Layout>
    </>
  );
}

export default Feestructure;
