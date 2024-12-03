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

const PricingAndPromotionsPolicyContent: React.FC = () => {
  return (
    <div>
      <h4>Pricing and Promotions Policy</h4>

      <p>
        <strong>Last Updated:</strong> 04/06/2024
      </p>

      <h4>1. Introduction</h4>
      <p>
        This Pricing and Promotions Policy ("Policy") outlines the guidelines
        and rules for pricing and promotions on the Cursus
        e-learning platform ("Platform"). By using our services, you agree to
        comply with this Policy.
      </p>

      <h4>2. Pricing</h4>
      <p>
        <strong>2.1 Setting Prices:</strong> Instructors have the flexibility to
        set the prices for their courses. The prices must be fair, reasonable,
        and in line with market standards.
      </p>
      <p>
        <strong>2.2 Discounts:</strong> Instructors may offer discounts on their
        courses at their discretion. Discounts must be clearly communicated and
        should not be misleading.
      </p>
      <p>
        <strong>2.3 Currency:</strong> All prices on the Platform are listed in
        [Currency]. Users are responsible for any currency conversion fees
        charged by their financial institutions.
      </p>
      <p>
        <strong>2.4 Taxes:</strong> Prices listed on the Platform may be
        inclusive or exclusive of applicable taxes. Users are responsible for
        any taxes that apply to their purchases.
      </p>

      <h4>3. Promotions</h4>
      <p>
        <strong>3.1 Platform Promotions:</strong> [Your Company Name] may run
        promotions to offer discounts on courses. These promotions are subject
        to specific terms and conditions, which will be communicated at the time
        of the promotion.
      </p>
      <p>
        <strong>3.2 Instructor Promotions:</strong> Instructors may run their
        own promotions. All promotions must be transparent, fair, and comply
        with the Platform's guidelines.
      </p>
      <p>
        <strong>3.3 Promotional Abuse:</strong> Any abuse of promotions, such as
        creating fake accounts to gain discounts, is strictly prohibited and may
        result in account suspension or termination.
      </p>

      <h4>4. Refunds</h4>
      <p>
        <strong>4.1 Refund Policy:</strong> Users may request a refund for
        courses under specific conditions. The refund policy is detailed in our{" "}
        <StyledLink href="/refund-policy">Refund Policy</StyledLink>.
      </p>
      <p>
        <strong>4.2 Processing Refunds:</strong> Refunds will be processed
        according to the original method of payment. Refunds may take several
        business days to appear in the user’s account.
      </p>

      <h4>5. Changes to Pricing and Promotions</h4>
      <p>
        [Your Company Name] reserves the right to change prices and promotions
        at any time. Any changes will be communicated to users through the
        Platform.
      </p>

      <h4>6. Contact Us</h4>
      <p>
        If you have any questions about this Policy, please contact us at{" "}
        <StyledLink href="mailto:your@email.com">your@email.com</StyledLink>.
      </p>
    </div>
  );
};

export default PricingAndPromotionsPolicyContent;
