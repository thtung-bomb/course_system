import React, { useState } from 'react';
import { FiSettings } from 'react-icons/fi';
import ProfileForm from './ProfileForm'; 
import ProfileLinksForm from './ProfileLinksForm';
import CloseAccountForm from './CloseAccountForm';
import BillingAddress from './BillingAddress';
import ExclusiveSales from './ExclusiveSales';
import NonExclusiveSales from './NonExclusiveSales';
import WithrawalMethod from './WithrawalMethod';

import {
  SettingsToolbarContainer,
  SettingsTitle,
  SettingsTabs,
  TabButton,
  TabContent,
  
} from '../Style/StyledComponents';

const SettingsToolbar = () => {
  const [activeTab, setActiveTab] = useState<string>('Account'); // Xác định kiểu dữ liệu của activeTab là string

  const handleTabClick = (tabName: string) => { // Xác định kiểu dữ liệu của tham số tabName là string
    setActiveTab(tabName);
  };
  
  return (
    <SettingsToolbarContainer>
      <SettingsTitle>
        <FiSettings className="settings-icon" /> Setting
      </SettingsTitle>
      <SettingsTabs>
        {['Account', 'Notification', 'Privacy', 'Billing and Payouts', 'API Clients', 'Close Account'].map((tabName) => (
          <TabButton
            key={tabName}
            active={activeTab === tabName}
            onClick={() => handleTabClick(tabName)}
          >
            {tabName}
          </TabButton>
        ))}
      </SettingsTabs>
      <TabContent>
        {activeTab === 'Account' && (
          <>
           
            <ProfileForm />
            <ProfileLinksForm />
          </>
        )}
        {activeTab === 'Billing and Payouts' && (
          <>
            <BillingAddress />
            <ExclusiveSales />
            <NonExclusiveSales /> 
            <WithrawalMethod />
          </>
        )}
        {activeTab === 'Close Account' && (
          <>           
            <CloseAccountForm />
            
          </>
        )}
       
      </TabContent>
    </SettingsToolbarContainer>
  );
};

export default SettingsToolbar;
