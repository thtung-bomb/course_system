import React from "react";
import styled from "styled-components";

const StyledLink = styled.a`
  font-weight: 400;
  display: block;
  font-size: 14px;
  color: #333;
  text-decoration: none;
  line-height: 26px;

  &:hover {
    text-decoration: underline;
  }
`;

const InstructorTermsContent: React.FC = () => {
  return (
    <div>
      <h4>Instructor Terms and Conditions</h4>

      <p>
        <strong>Last Updated:</strong> 04/06/2024
      </p>

      <h4>1. Introduction</h4>
      <p>
        Welcome to the Instructor Terms and Conditions ("Agreement"). This
        Agreement governs your use of the instructor services provided by [Your
        Company Name] ("we," "us," or "our") on our e-learning platform
        ("Platform").
      </p>

      <h4>2. Instructor Obligations</h4>
      <p>
        As an instructor on our Platform, you agree to:
        <ul>
          <li>
            Provide accurate and complete information about yourself and your
            qualifications.
          </li>
          <li>
            Create and deliver high-quality courses and content that comply with
            our guidelines and policies.
          </li>
          <li>
            Interact professionally and respectfully with students and other
            users of the Platform.
          </li>
        </ul>
      </p>

      <h4>3. Course Content</h4>
      <p>
        <strong>3.1 Ownership:</strong> You retain ownership of the content you
        create and submit to the Platform. By submitting content, you grant us a
        worldwide, non-exclusive, royalty-free license to use, distribute,
        reproduce, modify, adapt, and publicly display the content in connection
        with the operation of the Platform.
      </p>
      <p>
        <strong>3.2 Prohibited Content:</strong> You agree not to submit any
        content that is illegal, offensive, defamatory, or infringes on the
        rights of others.
      </p>

      <h4>4. Compensation</h4>
      <p>
        <strong>4.1 Payment:</strong> You will be compensated for the courses
        you create and deliver based on our payment policies, which may be
        updated from time to time. Payment details will be provided separately.
      </p>
      <p>
        <strong>4.2 Taxes:</strong> You are responsible for any taxes applicable
        to the payments you receive under this Agreement.
      </p>

      <h4>5. Termination</h4>
      <p>
        <strong>5.1 By You:</strong> You may terminate this Agreement at any
        time by providing us with written notice. Upon termination, you must
        cease all use of the Platform and remove your content.
      </p>
      <p>
        <strong>5.2 By Us:</strong> We may terminate this Agreement or suspend
        your access to the Platform at any time for any reason, including but
        not limited to violation of this Agreement or our policies.
      </p>

      <h4>6. Confidentiality</h4>
      <p>
        You agree to maintain the confidentiality of any proprietary or
        confidential information that you may receive from us in connection with
        your use of the Platform.
      </p>

      <h4>7. Limitation of Liability</h4>
      <p>
        To the maximum extent permitted by law, we shall not be liable for any
        indirect, incidental, special, consequential, or punitive damages, or
        any loss of profits or revenues, whether incurred directly or
        indirectly, or any loss of data, use, goodwill, or other intangible
        losses, resulting from your use of the Platform.
      </p>

      <h4>8. Governing Law</h4>
      <p>
        This Agreement shall be governed by and construed in accordance with the
        laws of [Your Jurisdiction].
      </p>

      <h4>9. Changes to this Agreement</h4>
      <p>
        We may update this Agreement from time to time. We will notify you of
        any changes by posting the new Agreement on the Platform. Your continued
        use of the Platform after any such changes constitutes your acceptance
        of the new terms.
      </p>

      <h4>10. Contact Us</h4>
      <p>
        If you have any questions about this Agreement, please contact us at{" "}
        <StyledLink href="mailto:your@email.com">your@email.com</StyledLink>.
      </p>
    </div>
  );
};

export default InstructorTermsContent;
