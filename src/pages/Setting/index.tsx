import React, { useState } from "react";
import {
  Body,
  Container,
  SettingsToolbar,
  SettingsTitle,
  SettingsIcon,
  SettingsCircle,
  SettingsTabs,
  TabButton,
  TabContent,
  SettingsContainer,
  StyledLink,
  SettingsForm,
  SettingContent,
  ToggleCheckbox,
  Divider,
  SaveButton,
  RequestButton,
  CheckboxWrapper,
  Warnings,
} from "./SettingStyled.tsx";

interface Tab {
  name: string;
  content: JSX.Element;
}

const Setting: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("Account");
  const [checkboxes, setCheckboxes] = useState<{ [key: string]: boolean }>({
    s1: false,
    s2: false,
    s3: false,
    s4: false,
    s5: false,
    s6: false,
    s7: false,
    s8: false,
    s9: false,
  });

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = event.target;
    setCheckboxes((prevState) => ({ ...prevState, [id]: checked }));
  };

  const tabs: Tab[] = [
    { name: "Account", content: <div>This is account tab content.</div> },
    {
      name: "Notification",
      content: (
        <SettingsContainer>
          <h4>Notifications - Choose when and how to be notified</h4>
          <p>Select push and email notifications you'd like to receive</p>
          <SettingsForm>
            <SettingContent>
              <div className="title">
                <h4>Choose when and how to be notified</h4>
              </div>
              <ToggleCheckbox>
                <CheckboxWrapper>
                  <input
                    id="s1"
                    type="checkbox"
                    className="switch"
                    checked={checkboxes.s1}
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor="s1">Subscriptions</label>
                </CheckboxWrapper>
                <p className="sub">
                  Notify me about activity from the profiles I'm subscribed to
                </p>
              </ToggleCheckbox>
              <ToggleCheckbox>
                <CheckboxWrapper>
                  <input
                    id="s2"
                    type="checkbox"
                    className="switch"
                    checked={checkboxes.s2}
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor="s2">Recommended Courses</label>
                </CheckboxWrapper>
                <p className="sub">
                  Notify me of courses I might like based on what I watch
                </p>
              </ToggleCheckbox>
              <ToggleCheckbox>
                <CheckboxWrapper>
                  <input
                    id="s3"
                    type="checkbox"
                    className="switch"
                    checked={checkboxes.s3}
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor="s3">Activity on my comments</label>
                </CheckboxWrapper>
                <p className="sub">
                  Notify me about activity on my comments on others’ courses
                </p>
              </ToggleCheckbox>
              <ToggleCheckbox>
                <CheckboxWrapper>
                  <input
                    id="s4"
                    type="checkbox"
                    className="switch"
                    checked={checkboxes.s4}
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor="s4">Replies to my comments</label>
                </CheckboxWrapper>
                <p className="sub">Notify me about replies to my comments</p>
              </ToggleCheckbox>
              <Divider />
              <h4>Email notifications</h4>
              <p>
                Your emails are sent to gambol943@gmail.com. To unsubscribe from
                an email, click the "Unsubscribe" link at the bottom of it.
                <StyledLink to="/setting"> Learn more</StyledLink> about emails
                from Edututs+.
              </p>
              <ToggleCheckbox>
                <CheckboxWrapper>
                  <input
                    id="s5"
                    type="checkbox"
                    className="switch"
                    checked={checkboxes.s5}
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor="s5">
                    Send me emails about my Cursus activity and updates I
                    requested
                  </label>
                </CheckboxWrapper>
                <p className="sub">
                  If this setting is turned off, Cursus may still send you
                  messages regarding your account, required service
                  announcements, legal notifications, and privacy matters
                </p>
              </ToggleCheckbox>
              <ToggleCheckbox>
                <CheckboxWrapper>
                  <input
                    id="s6"
                    type="checkbox"
                    className="switch"
                    checked={checkboxes.s6}
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor="s6">
                    Promotions, course recommendations, and helpful resources
                    from Cursus.
                  </label>
                </CheckboxWrapper>
                <p className="sub"></p>
              </ToggleCheckbox>
              <ToggleCheckbox>
                <CheckboxWrapper>
                  <input
                    id="s7"
                    type="checkbox"
                    className="switch"
                    checked={checkboxes.s7}
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor="s7">
                    Announcements from instructors whose course(s) I’m enrolled
                    in.
                  </label>
                </CheckboxWrapper>
                <p className="sub">
                  To adjust this preference by course, leave this box checked
                  and go to the course dashboard and click on "Options" to opt
                  in or out of specific announcements.
                </p>
              </ToggleCheckbox>
            </SettingContent>
          </SettingsForm>

          <SaveButton>Save Changes</SaveButton>
        </SettingsContainer>
      ),
    },
    {
      name: "Privacy",
      content: (
        <SettingsContainer>
          <h4>Privacy</h4>
          <p>Modify your privacy settings here</p>
          <SettingsForm>
            <SettingContent>
              <div className="title">
                <h4>Profile page settings</h4>
              </div>
              <ToggleCheckbox>
                <CheckboxWrapper>
                  <input
                    id="s8"
                    type="checkbox"
                    className="switch"
                    checked={checkboxes.s8}
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor="s8">Show your profile on search engines</label>
                </CheckboxWrapper>
                <p className="sub"></p>
              </ToggleCheckbox>
              <ToggleCheckbox>
                <CheckboxWrapper>
                  <input
                    id="s9"
                    type="checkbox"
                    className="switch"
                    checked={checkboxes.s9}
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor="s9">
                    Show courses you're taking on your profile page
                  </label>
                </CheckboxWrapper>
                <p className="sub"></p>
              </ToggleCheckbox>
            </SettingContent>
          </SettingsForm>
          <SaveButton>Save Changes</SaveButton>
        </SettingsContainer>
      ),
    },
    {
      name: "Billing and Payouts",
      content: (
        <SettingsContainer>
          <h4>Billing and Payouts</h4>
          <p>
            Want to charge for a course? Provide your payment info and opt in
            for our promotional programs
          </p>
          <SettingsForm>
            <SettingContent>
              <div className="title">
                <h4>Billing Address</h4>
              </div>
            </SettingContent>
          </SettingsForm>
          <SaveButton>Save Changes</SaveButton>
        </SettingsContainer>
      ),
    },
    {
      name: "API Clients",
      content: (
        <SettingsContainer>
          <h4>Affiliate API</h4>
          <p>
            The Cursus Affiliate API exposes functionalities of Cursus to help
            developers build client applications and integrations with Cursus.
          </p>
          <SettingsForm>
            <SettingContent>
              <p className="sub">
                To see more details, please visit
                <StyledLink to="/setting"> Cursus Affiliate API</StyledLink>
              </p>
            </SettingContent>
          </SettingsForm>
          <RequestButton>Request Affiliate API Client</RequestButton>
          <Warnings>
            <SettingsCircle />
            You don't have any API clients yet.
          </Warnings>
        </SettingsContainer>
      ),
    },
    {
      name: "Close Account",
      content: <div>Close Account content goes here.</div>,
    },
  ];

  const activeTabContent = tabs.find((tab) => tab.name === activeTab)?.content;

  return (
    <Body>
      <Container>
        <SettingsToolbar>
          <SettingsTitle>
            <SettingsIcon />
            <span>Settings</span>
          </SettingsTitle>
          <SettingsTabs>
            {tabs.map((tab) => (
              <TabButton
                key={tab.name}
                active={activeTab === tab.name}
                onClick={() => handleTabClick(tab.name)}
              >
                {tab.name}
              </TabButton>
            ))}
          </SettingsTabs>
        </SettingsToolbar>
        <TabContent>{activeTabContent}</TabContent>
      </Container>
    </Body>
  );
};

export default Setting;
