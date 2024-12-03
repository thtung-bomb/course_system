import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
const TermsOfUseContent: React.FC = () => (
  <div>
    <div >
      These Terms of Use <strong>("Terms")</strong> were last updated on August
      1, 2020.
    </div>
    <p className="breakline">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
      volutpat maximus pellentesque. Integer sem enim, luctus at nibh at,
      condimentum sagittis sapien. Sed tempus ipsum erat, sit amet efficitur
      velit interdum eu. Vestibulum hendrerit id dolor eu scelerisque. Phasellus
      ex dui, consequat nec feugiat eu, dapibus eget ante. Sed sodales interdum
      dui, at euismod mi feugiat hendrerit. Suspendisse auctor libero in tempor
      mollis. Nulla et dolor velit. Aliquam sit amet luctus quam.
    </p>
    <p>
      Nam a egestas libero, eget eleifend turpis. Sed id ipsum a ipsum aliquam
      laoreet sit amet sit amet nibh. Proin dapibus, libero sed posuere rhoncus,
      orci mi cursus enim, at accumsan eros massa lacinia mi. Nunc eget finibus
      felis, volutpat malesuada sem. Aliquam ac nisl pellentesque, varius neque
      sit amet, porttitor nunc. Nullam elit tellus, dapibus non eleifend sed,
      hendrerit eget velit. Aliquam ut felis dictum, tincidunt magna vitae,
      aliquam massa. In porttitor tristique quam, non dignissim sapien pharetra
      ultrices. Cras non ante non velit mollis mollis. Pellentesque habitant
      morbi tristique senectus et netus et malesuada fames ac turpis egestas.
      Quisque et bibendum urna, eget consequat sapien. Integer sed condimentum
      nibh. Integer id neque tristique, lobortis massa ac, dapibus nibh. Donec
      nulla odio, porttitor ac rutrum eget, volutpat a velit. Curabitur et enim
      quis diam congue dictum et vitae dui. Nulla tortor orci, luctus a pretium
      vel, ultrices porta nisl.
    </p>
    <p>
      Etiam lobortis dictum tincidunt. Interdum et malesuada fames ac ante ipsum
      primis in faucibus. Suspendisse ultricies efficitur dui, suscipit tempus
      elit condimentum quis. Duis sed vestibulum tortor, eget cursus odio.
    </p>
    <h4>Table of Contents</h4>
    <table>
      <tbody>
        <tr>
          <td>
            <StyledLink href="#accounts">1. Accounts</StyledLink>
          </td>
        </tr>
        <tr>
          <td>
            <StyledLink href="#Course-Enrollment-and-Lifetime-Access">
              2. Course Enrollment and Lifetime Access
            </StyledLink>
          </td>
        </tr>
        <tr>
          <td>
            <StyledLink href="#pay">
              3. Payments, Credits, and Refunds
            </StyledLink>{" "}
          </td>
        </tr>
        <tr>
          <td>
            <StyledLink href="#content">
              4. Content and Behavior Rules
            </StyledLink>{" "}
          </td>
        </tr>
        <tr>
          <td>
            <StyledLink href="#content-you-post">
              5. Cursus’s Rights to Content You Post
            </StyledLink>
          </td>
        </tr>
        <tr>
          <td>
            <StyledLink href="#cursus-rights">6. Cursus’s Rights</StyledLink>
          </td>
        </tr>
        <tr>
          <td>
            <StyledLink href="#how-to-contact-us">
              7. How to Contact Us
            </StyledLink>
          </td>
        </tr>
      </tbody>
    </table>
    <div>
      <section id="accounts">
        <h4>1. Accounts</h4>
        <p>
          Morbi lectus nunc, lacinia ut consequat a, semper vel erat. Duis ut
          lacus nec dui sodales mattis. Mauris tellus dolor, pulvinar sit amet
          pretium a, malesuada sed tellus. Aliquam ultrices elit neque, quis
          lacinia ex porttitor non. Donec ac iaculis turpis. Nulla lacinia enim
          quis orci aliquam, non cursus urna pellentesque. Class aptent taciti
          sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos. Phasellus in mi a nisi auctor interdum. Vivamus faucibus
          magna sed elit interdum consequat. Vestibulum eu tortor vel ante
          feugiat faucibus quis et urna. Quisque interdum ac enim eu tempus.
          Fusce viverra, lectus egestas tincidunt cursus, tortor sapien
          convallis metus, vitae auctor risus metus vel nisi. Aenean dapibus
          bibendum mauris ut iaculis.
        </p>
      </section>

      <section id="Course-Enrollment-and-Lifetime-Access">
        <h4>2. Course Enrollment and Lifetime Access</h4>
        <p>
          Quisque et bibendum urna, eget consequat sapien. Integer sed
          condimentum nibh. Integer id neque tristique, lobortis massa ac,
          dapibus nibh. Donec nulla odio, porttitor ac rutrum eget, volutpat a
          velit. Curabitur et enim quis diam congue dictum et vitae dui. Nulla
          tortor orci, luctus a pretium vel, ultrices porta nisl.
        </p>
      </section>

      <section id="pay">
        <h4>3. Payments, Credits, and Refunds</h4>
        <p>
          Morbi lectus nunc, lacinia ut consequat a, semper vel erat. Duis ut
          lacus nec dui sodales mattis. Mauris tellus dolor, pulvinar sit amet
          pretium a, malesuada sed tellus. Aliquam ultrices elit neque, quis
          lacinia ex porttitor non. Donec ac iaculis turpis. Nulla lacinia enim
          quis orci aliquam, non cursus urna pellentesque. Class aptent taciti
          sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos. Phasellus in mi a nisi auctor interdum. Vivamus faucibus
          magna sed elit interdum consequat. Vestibulum eu tortor vel ante
          feugiat faucibus quis et urna. Quisque interdum ac enim eu tempus.
          Fusce viverra, lectus egestas tincidunt cursus, tortor sapien
          convallis metus, vitae auctor risus metus vel nisi. Aenean dapibus
          bibendum mauris ut iaculis.
        </p>
      </section>

      <section id="content">
        <h4>4. Content and Behavior Rules</h4>
        <p>
          Quisque et bibendum urna, eget consequat sapien. Integer sed
          condimentum nibh. Integer id neque tristique, lobortis massa ac,
          dapibus nibh. Donec nulla odio, porttitor ac rutrum eget, volutpat a
          velit. Curabitur et enim quis diam congue dictum et vitae dui. Nulla
          tortor orci, luctus a pretium vel, ultrices porta nisl.
        </p>
      </section>

      <section id="content-you-post">
        <h4>5. Cursus’s Rights to Content You Post</h4>
        <p>
          Morbi lectus nunc, lacinia ut consequat a, semper vel erat. Duis ut
          lacus nec dui sodales mattis. Mauris tellus dolor, pulvinar sit amet
          pretium a, malesuada sed tellus. Aliquam ultrices elit neque, quis
          lacinia ex porttitor non. Donec ac iaculis turpis. Nulla lacinia enim
          quis orci aliquam, non cursus urna pellentesque. Class aptent taciti
          sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos. Phasellus in mi a nisi auctor interdum. Vivamus faucibus
          magna sed elit interdum consequat. Vestibulum eu tortor vel ante
          feugiat faucibus quis et urna. Quisque interdum ac enim eu tempus.
          Fusce viverra, lectus egestas tincidunt cursus, tortor sapien
          convallis metus, vitae auctor risus metus vel nisi. Aenean dapibus
          bibendum mauris ut iaculis.
        </p>
      </section>

      <section id="cursus-rights">
        <h4>6. Cursus’s Rights</h4>
        <p>
          Quisque et bibendum urna, eget consequat sapien. Integer sed
          condimentum nibh. Integer id neque tristique, lobortis massa ac,
          dapibus nibh. Donec nulla odio, porttitor ac rutrum eget, volutpat a
          velit. Curabitur et enim quis diam congue dictum et vitae dui. Nulla
          tortor orci, luctus a pretium vel, ultrices porta nisl.
        </p>
      </section>

      <section id="how-to-contact-us">
        <h4>7. How to Contact Us</h4>
        <p>
          Morbi lectus nunc, lacinia ut consequat a, semper vel erat. Duis ut
          lacus nec dui sodales mattis. Mauris tellus dolor, pulvinar sit amet
          pretium a, malesuada sed tellus. Aliquam ultrices elit neque, quis
          lacinia ex porttitor non. Donec ac iaculis turpis. Nulla lacinia enim
          quis orci aliquam, non cursus urna pellentesque. Class aptent taciti
          sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos. Phasellus in mi a nisi auctor interdum. Vivamus faucibus
          magna sed elit interdum consequat. Vestibulum eu tortor vel ante
          feugiat faucibus quis et urna. Quisque interdum ac enim eu tempus.
          Fusce viverra, lectus egestas tincidunt cursus, tortor sapien
          convallis metus, vitae auctor risus metus vel nisi. Aenean dapibus
          bibendum mauris ut iaculis.
        </p>
      </section>
    </div>
  </div>
);

export default TermsOfUseContent;
