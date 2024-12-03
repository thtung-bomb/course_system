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

const CopyrightPolicyContent: React.FC = () => {
  return (
    <div>
      <h4>Copyright Policy for Cursus</h4>

      <p><strong>Last Updated:</strong> 04/06/2024</p>

      <h4>1. Introduction</h4>
      <p>
      Cursus respects the intellectual property rights of others and expects users of the platform to do the same. This Copyright Policy outlines our approach to copyright infringement and compliance with applicable copyright laws.
      </p>

      <h4>2. Copyrighted Material</h4>

      <p><strong>2.1 Definition:</strong> Copyrighted material includes, but is not limited to, text, images, audio, video, software, and other creative works protected by copyright laws.</p>

      <p><strong>2.2 Ownership:</strong> All content provided on [Your E-Learning Platform Name], including courses, tutorials, assessments, and supplementary materials, is either owned by us, licensed to us, or used under fair use or other exemptions provided by copyright law.</p>

      <h4>3. Use of Copyrighted Material</h4>

      <p><strong>3.1 Permission:</strong> Users may only use copyrighted materials available on [Your E-Learning Platform Name] as permitted by law or with the express permission of the copyright holder.</p>

      <p><strong>3.2 Fair Use:</strong> Some materials may be used under fair use guidelines outlined in copyright law, including for criticism, comment, news reporting, teaching, scholarship, or research.</p>

      <p><strong>3.3 Attribution:</strong> Users must properly attribute copyrighted material to its original source and indicate where applicable that such content is used under license or with permission.</p>

      <h4>4. Prohibited Activities</h4>

      <p><strong>4.1 Unauthorized Use:</strong> Users are prohibited from reproducing, distributing, modifying, or otherwise using copyrighted material beyond what is permitted by law or the explicit terms of use.</p>

      <p><strong>4.2 Piracy:</strong> Any form of piracy, including but not limited to unauthorized downloading, sharing, or distribution of copyrighted materials on [Your E-Learning Platform Name], is strictly prohibited.</p>

      <h4>5. Copyright Complaints</h4>

      <p><strong>5.1 Reporting Infringements:</strong> If you believe that your copyrighted work has been used on [Your E-Learning Platform Name] in a manner that constitutes copyright infringement, please notify us promptly at [Contact Email Address].</p>

      <p><strong>5.2 Counter Notification:</strong> If you believe that content removed from [Your E-Learning Platform Name] due to a copyright complaint is not infringing, you may submit a counter notification.</p>

      <h4>6. Our Response</h4>

      <p><strong>6.1 Investigation:</strong> Upon receiving a copyright complaint, we will promptly investigate the alleged infringement.</p>

      <p><strong>6.2 Action Taken:</strong> If we determine that copyright infringement has occurred, we will take appropriate actions, which may include removing or disabling access to the infringing material.</p>

      <h4>7. Modifications to Policy</h4>

      <p><strong>7.1 Updates:</strong> We may update this Copyright Policy from time to time. Changes will be effective immediately upon posting on [Your E-Learning Platform Name].</p>

      <h4>8. Contact Us</h4>

      <p><strong>8.1 Questions:</strong> If you have any questions or concerns about this Copyright Policy, please contact us at <StyledLink href="mailto:your@email.com">your@email.com</StyledLink>.</p>
    </div>
  );
};

export default CopyrightPolicyContent;
