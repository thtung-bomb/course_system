import React from 'react';
import styled from 'styled-components';

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

const CreditsProgramContent: React.FC = () => {
  return (
    <div>
      <h4>Credits Program</h4>

      <p><strong>Last Updated:</strong> 04/06/2024</p>

      <h4>1. Introduction</h4>
      <p>
        The Credits Program at Cursus rewards users for their contributions and participation within the platform.
      </p>

      <h4>2. Earning Credits</h4>

      <p><strong>2.1 Activities:</strong> Users can earn credits by participating in various activities, including but not limited to:</p>
      <ul>
        <li>Completing courses</li>
        <li>Writing reviews</li>
        <li>Participating in discussions</li>
        <li>Referring friends</li>
        <li>Other engagement activities as defined by Cursus</li>
      </ul>

      <p><strong>2.2 Credit Calculation:</strong> The method of calculating credits may vary based on the activity and is determined by [Your E-Learning Platform Name].</p>

      <h4>3. Redemption of Credits</h4>

      <p><strong>3.1 Rewards:</strong> Credits can be redeemed for rewards offered by [Your E-Learning Platform Name], which may include:</p>
      <ul>
        <li>Discounts on courses</li>
        <li>Access to premium content</li>
        <li>Gift cards or merchandise</li>
        <li>Other rewards as determined by [Your E-Learning Platform Name]</li>
      </ul>

      <p><strong>3.2 Terms:</strong> Redemption terms and conditions apply, and rewards are subject to availability and change at any time.</p>

      <h4>4. Monitoring and Adjustments</h4>

      <p><strong>4.1 Review:</strong> [Your E-Learning Platform Name] reserves the right to review credits earned and adjust or revoke credits if they are obtained through fraudulent or inappropriate means.</p>

      <h4>5. Changes to the Program</h4>

      <p><strong>5.1 Updates:</strong> The Credits Program and its terms may be updated or modified by [Your E-Learning Platform Name] at any time. Users will be notified of significant changes.</p>

      <h4>6. Contact Us</h4>

      <p><strong>6.1 Questions:</strong> If you have any questions or concerns about the Credits Program, please contact us at <StyledLink href="mailto:tunglkce170271@fpt.edu.vn">admin@email.com</StyledLink>.</p>
    </div>
  );
};

export default CreditsProgramContent;
