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

const CursusApiAgreementContent: React.FC = () => {
  return (
    <div>
      <h4>Cursus API Agreement</h4>

      <p>
        <strong>Last Updated:</strong> 04/06/2024
      </p>

      <h4>1. Introduction</h4>
      <p>
        Welcome to the Cursus API Agreement. This agreement governs your use of
        the Cursus API (the "API") provided by [Your Company Name].
      </p>

      <h4>2. Definitions</h4>
      <p>
        <strong>API:</strong> Means the Cursus API provided by [Your Company
        Name].
        <br />
        <strong>Developer:</strong> Means any person or entity accessing or
        using the API.
        <br />
        <strong>Platform:</strong> Means the platform or service through which
        the API is accessed.
      </p>

      <h4>3. API Access and Use</h4>
      <p>
        <strong>3.1 License:</strong> Subject to compliance with this agreement,
        [Your Company Name] grants Developers a non-exclusive, non-transferable,
        revocable license to use the API solely to develop, test, and support
        integrations with the Platform.
      </p>
      <p>
        <strong>3.2 Restrictions:</strong> Developers may not (a) modify, adapt,
        or create derivative works of the API; (b) sublicense, rent, lease,
        loan, or otherwise transfer the API; (c) reverse engineer, disassemble,
        or decompile the API; (d) use the API for any unlawful or unauthorized
        purpose.
      </p>

      <h4>4. API Support and Maintenance</h4>
      <p>
        [Your Company Name] will provide reasonable support for the API as
        described in the API documentation. [Your Company Name] may modify or
        discontinue the API at any time without notice.
      </p>

      <h4>5. Data and Privacy</h4>
      <p>
        Developers shall comply with all applicable data protection and privacy
        laws in their use of the API. Developers shall not store or use any data
        obtained through the API for any purpose other than integrating with the
        Platform.
      </p>

      <h4>6. Ownership and Feedback</h4>
      <p>
        [Your Company Name] retains all rights, title, and interest in and to
        the API and any modifications or improvements thereto. Developers may
        provide feedback on the API, and [Your Company Name] may use such
        feedback without restriction.
      </p>

      <h4>7. Termination</h4>
      <p>
        [Your Company Name] may suspend or terminate access to the API for any
        reason, including but not limited to violation of this agreement. Upon
        termination, Developers must cease all use of the API and delete any
        data obtained through the API.
      </p>

      <h4>8. Miscellaneous</h4>
      <p>
        This agreement constitutes the entire agreement between [Your Company
        Name] and Developers concerning the API. This agreement shall be
        governed by and construed in accordance with the laws of [Your
        Jurisdiction].
      </p>

      <h4>9. Contact Us</h4>
      <p>
        If you have any questions about this agreement, please contact us at{" "}
        <StyledLink href="mailto:your@email.com">your@email.com</StyledLink>.
      </p>
    </div>
  );
};

export default CursusApiAgreementContent;
