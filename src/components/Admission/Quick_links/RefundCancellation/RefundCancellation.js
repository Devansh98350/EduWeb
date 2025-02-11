import React, { useEffect } from "react";
import Layout from "../../../Layout";
import "./../Privacy_policy/PrivacyPolicy";
import Breadcrumb from "../../../Breadcrumbs";

const RefundCancellation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="Refund Policy-IIT Academy">
      <Breadcrumb />
      <div className="container">
        <h2 className="special">Refund Rules</h2>
        <div className="pap">
          <p>1. Form amount/kit amount will not be refunded.</p>
          <p>
            2. <strong>Registration Fee Refund:</strong> No refund of the
            registration fee shall be made under any circumstances whatsoever.
          </p>
          <p>
            3. <strong>Short-Term Course Fee Refund:</strong> No fee refund of
            any type will be made under any circumstances after joining the
            short-term classroom/online courses.
          </p>
          <p>
            4. <strong>Online Live Course Fee Refund:</strong>
          </p>
          <ul
            style={{
              listStyleType: "disc",
              paddingLeft: "0",
              marginLeft: "20px",
            }}
          >
            <li>
              Full refund is available within the first 7 days (from the date of
              admission or batch start, whichever is the latest), apart from the
              kit amount.
            </li>
            <li>
              After 7 days, no refunds will be processed under any
              circumstances.
            </li>
            <li>
              Kit amount for the Online Live Anushaasan Program is 15,000/-,
              which is non-refundable.
            </li>
            <li>No refund policy for 3rd party EMI/Loan.</li>
          </ul>
          <p>
            5. <strong>Offline Classroom Fee Refund:</strong>
          </p>
          <p>
            Starting from day 1 class attendance reflecting in our record till:
          </p>
          <ul
            style={{
              listStyleType: "disc",
              paddingLeft: "0",
              marginLeft: "20px",
            }}
          >
            <li>
              15 days: 20% of the tuition fee without a scholarship will be
              deducted. (Apart from the Kit amount)
            </li>
            <li>
              30 days: 40% of the tuition fee without a scholarship will be
              deducted. (Apart from the Kit amount)
            </li>
            <li>
              45 days: 50% of the tuition fee without a scholarship will be
              deducted. (Apart from the Kit amount)
            </li>
            <li>
              60 days: 60% of the tuition fee without a scholarship will be
              deducted. (Apart from the Kit amount)
            </li>
            <li>
              90 days: 70% of the tuition fee without a scholarship will be
              deducted. (Apart from the Kit amount)
            </li>
            <li>
              120 days: 80% of the tuition fee without a scholarship will be
              deducted. (Apart from the Kit amount)
            </li>
          </ul>
          <p>6. Kit amount for all the batches is non-refundable.</p>

          <p>7. No refund policy for EMI/Loan payments.</p>
        </div>
      </div>
    </Layout>
  );
};

export default RefundCancellation;
