import React, { useState } from 'react';
import Select, { StylesConfig, CSSObjectWithLabel } from 'react-select';
import {
    StyledInput,
    SaveButton,
    Container,
    WithdrawalMethodContainer,
    Heading,
    Option,
    FromOption,
    Form
} from '../Style/BillingandPayoutsStyled';


interface CountryOption {
    value: string;
    label: JSX.Element;
}

const countries = [
    { name: "Algeria", flag: "https://flagcdn.com/w320/dz.png" },
    { name: "Andorra", flag: "https://flagcdn.com/w320/ad.png" },
    { name: "Angola", flag: "https://flagcdn.com/w320/ao.png" },
    { name: "Antigua and Barbuda", flag: "https://flagcdn.com/w320/ag.png" },
    { name: "Argentina", flag: "https://flagcdn.com/w320/ar.png" },
    { name: "Armenia", flag: "https://flagcdn.com/w320/am.png" },
    { name: "Australia", flag: "https://flagcdn.com/w320/au.png" },
    { name: "Austria", flag: "https://flagcdn.com/w320/at.png" },
    { name: "Azerbaijan", flag: "https://flagcdn.com/w320/az.png" },
    { name: "Bahamas", flag: "https://flagcdn.com/w320/bs.png" },
    { name: "Bahrain", flag: "https://flagcdn.com/w320/bh.png" },
    { name: "Bangladesh", flag: "https://flagcdn.com/w320/bd.png" },
    { name: "Barbados", flag: "https://flagcdn.com/w320/bb.png" },
    { name: "Belarus", flag: "https://flagcdn.com/w320/by.png" },
    { name: "Belgium", flag: "https://flagcdn.com/w320/be.png" },
    { name: "Belize", flag: "https://flagcdn.com/w320/bz.png" },
    { name: "Benin", flag: "https://flagcdn.com/w320/bj.png" },
    { name: "Bhutan", flag: "https://flagcdn.com/w320/bt.png" },
    { name: "Bolivia", flag: "https://flagcdn.com/w320/bo.png" },
    { name: "Bosnia and Herzegovina", flag: "https://flagcdn.com/w320/ba.png" },
    { name: "Botswana", flag: "https://flagcdn.com/w320/bw.png" },
    { name: "Brazil", flag: "https://flagcdn.com/w320/br.png" },
    { name: "Brunei", flag: "https://flagcdn.com/w320/bn.png" },
    { name: "Bulgaria", flag: "https://flagcdn.com/w320/bg.png" },
    { name: "Burkina Faso", flag: "https://flagcdn.com/w320/bf.png" },
    { name: "Burundi", flag: "https://flagcdn.com/w320/bi.png" },
    { name: "Cabo Verde", flag: "https://flagcdn.com/w320/cv.png" },
    { name: "Cambodia", flag: "https://flagcdn.com/w320/kh.png" },
    { name: "Cameroon", flag: "https://flagcdn.com/w320/cm.png" },
    { name: "Canada", flag: "https://flagcdn.com/w320/ca.png" },
    { name: "Central African Republic", flag: "https://flagcdn.com/w320/cf.png" },
    { name: "Chad", flag: "https://flagcdn.com/w320/td.png" },
    { name: "Chile", flag: "https://flagcdn.com/w320/cl.png" },
    { name: "China", flag: "https://flagcdn.com/w320/cn.png" },
    { name: "Colombia", flag: "https://flagcdn.com/w320/co.png" },
    { name: "Comoros", flag: "https://flagcdn.com/w320/km.png" },
    { name: "Congo (Congo-Brazzaville)", flag: "https://flagcdn.com/w320/cg.png" },
    { name: "Costa Rica", flag: "https://flagcdn.com/w320/cr.png" },
    { name: "Croatia", flag: "https://flagcdn.com/w320/hr.png" },
    { name: "Cuba", flag: "https://flagcdn.com/w320/cu.png" },
    { name: "Cyprus", flag: "https://flagcdn.com/w320/cy.png" },
    { name: "Czech Republic", flag: "https://flagcdn.com/w320/cz.png" },
    { name: "Denmark", flag: "https://flagcdn.com/w320/dk.png" },
    { name: "Djibouti", flag: "https://flagcdn.com/w320/dj.png" },
    { name: "Dominica", flag: "https://flagcdn.com/w320/dm.png" },
    { name: "Dominican Republic", flag: "https://flagcdn.com/w320/do.png" },
    { name: "Ecuador", flag: "https://flagcdn.com/w320/ec.png" },
    { name: "Egypt", flag: "https://flagcdn.com/w320/eg.png" },
    { name: "El Salvador", flag: "https://flagcdn.com/w320/sv.png" },
    { name: "Equatorial Guinea", flag: "https://flagcdn.com/w320/gq.png" },
    { name: "Eritrea", flag: "https://flagcdn.com/w320/er.png" },
    { name: "Estonia", flag: "https://flagcdn.com/w320/ee.png" },
    { name: "Eswatini", flag: "https://flagcdn.com/w320/sz.png" },
    { name: "Ethiopia", flag: "https://flagcdn.com/w320/et.png" },
    { name: "Fiji", flag: "https://flagcdn.com/w320/fj.png" },
    { name: "Finland", flag: "https://flagcdn.com/w320/fi.png" },
    { name: "France", flag: "https://flagcdn.com/w320/fr.png" },
    { name: "Gabon", flag: "https://flagcdn.com/w320/ga.png" },
    { name: "Gambia", flag: "https://flagcdn.com/w320/gm.png" },
    { name: "Georgia", flag: "https://flagcdn.com/w320/ge.png" },
    { name: "Germany", flag: "https://flagcdn.com/w320/de.png" },
    { name: "Ghana", flag: "https://flagcdn.com/w320/gh.png" },
    { name: "Greece", flag: "https://flagcdn.com/w320/gr.png" },
    { name: "Grenada", flag: "https://flagcdn.com/w320/gd.png" },
    { name: "Guatemala", flag: "https://flagcdn.com/w320/gt.png" },
    { name: "Guinea", flag: "https://flagcdn.com/w320/gn.png" },
    { name: "Guinea-Bissau", flag: "https://flagcdn.com/w320/gw.png" },
    { name: "Guyana", flag: "https://flagcdn.com/w320/gy.png" },
    { name: "Haiti", flag: "https://flagcdn.com/w320/ht.png" },
    { name: "Honduras", flag: "https://flagcdn.com/w320/hn.png" },
    { name: "Hungary", flag: "https://flagcdn.com/w320/hu.png" },
    { name: "Iceland", flag: "https://flagcdn.com/w320/is.png" },
    { name: "India", flag: "https://flagcdn.com/w320/in.png" },
    { name: "Indonesia", flag: "https://flagcdn.com/w320/id.png" },
    { name: "Iran", flag: "https://flagcdn.com/w320/ir.png" },
    { name: "Iraq", flag: "https://flagcdn.com/w320/iq.png" },
    { name: "Ireland", flag: "https://flagcdn.com/w320/ie.png" },
    { name: "Israel", flag: "https://flagcdn.com/w320/il.png" },
    { name: "Italy", flag: "https://flagcdn.com/w320/it.png" },
    { name: "Jamaica", flag: "https://flagcdn.com/w320/jm.png" },
    { name: "Japan", flag: "https://flagcdn.com/w320/jp.png" },
    { name: "Jordan", flag: "https://flagcdn.com/w320/jo.png" },
    { name: "Kazakhstan", flag: "https://flagcdn.com/w320/kz.png" },
    { name: "Kenya", flag: "https://flagcdn.com/w320/ke.png" },
    { name: "Kiribati", flag: "https://flagcdn.com/w320/ki.png" },
    { name: "Kuwait", flag: "https://flagcdn.com/w320/kw.png" },
    { name: "Kyrgyzstan", flag: "https://flagcdn.com/w320/kg.png" },
    { name: "Laos", flag: "https://flagcdn.com/w320/la.png" },
    { name: "Latvia", flag: "https://flagcdn.com/w320/lv.png" },
    { name: "Lebanon", flag: "https://flagcdn.com/w320/lb.png" },
    { name: "Lesotho", flag: "https://flagcdn.com/w320/ls.png" },
    { name: "Liberia", flag: "https://flagcdn.com/w320/lr.png" },
    { name: "Libya", flag: "https://flagcdn.com/w320/ly.png" },
    { name: "Liechtenstein", flag: "https://flagcdn.com/w320/li.png" },
    { name: "Lithuania", flag: "https://flagcdn.com/w320/lt.png" },
    { name: "Luxembourg", flag: "https://flagcdn.com/w320/lu.png" },
    { name: "Madagascar", flag: "https://flagcdn.com/w320/mg.png" },
    { name: "Malawi", flag: "https://flagcdn.com/w320/mw.png" },
    { name: "Malaysia", flag: "https://flagcdn.com/w320/my.png" },
    { name: "Maldives", flag: "https://flagcdn.com/w320/mv.png" },
    { name: "Mali", flag: "https://flagcdn.com/w320/ml.png" },
    { name: "Malta", flag: "https://flagcdn.com/w320/mt.png" },
    { name: "Marshall Islands", flag: "https://flagcdn.com/w320/mh.png" },
    { name: "Mauritania", flag: "https://flagcdn.com/w320/mr.png" },
    { name: "Mauritius", flag: "https://flagcdn.com/w320/mu.png" },
    { name: "Mexico", flag: "https://flagcdn.com/w320/mx.png" },
    { name: "Micronesia", flag: "https://flagcdn.com/w320/fm.png" },
    { name: "Moldova", flag: "https://flagcdn.com/w320/md.png" },
    { name: "Monaco", flag: "https://flagcdn.com/w320/mc.png" },
    { name: "Mongolia", flag: "https://flagcdn.com/w320/mn.png" },
    { name: "Montenegro", flag: "https://flagcdn.com/w320/me.png" },
    { name: "Morocco", flag: "https://flagcdn.com/w320/ma.png" },
    { name: "Mozambique", flag: "https://flagcdn.com/w320/mz.png" },
    { name: "Myanmar (formerly Burma)", flag: "https://flagcdn.com/w320/mm.png" },
    { name: "Namibia", flag: "https://flagcdn.com/w320/na.png" },
    { name: "Nauru", flag: "https://flagcdn.com/w320/nr.png" },
    { name: "Nepal", flag: "https://flagcdn.com/w320/np.png" },
    { name: "Netherlands", flag: "https://flagcdn.com/w320/nl.png" },
    { name: "New Zealand", flag: "https://flagcdn.com/w320/nz.png" },
    { name: "Nicaragua", flag: "https://flagcdn.com/w320/ni.png" },
    { name: "Niger", flag: "https://flagcdn.com/w320/ne.png" },
    { name: "Nigeria", flag: "https://flagcdn.com/w320/ng.png" },
    { name: "North Korea", flag: "https://flagcdn.com/w320/kp.png" },
    { name: "North Macedonia", flag: "https://flagcdn.com/w320/mk.png" },
    { name: "Norway", flag: "https://flagcdn.com/w320/no.png" },
    { name: "Oman", flag: "https://flagcdn.com/w320/om.png" },
    { name: "Pakistan", flag: "https://flagcdn.com/w320/pk.png" },
    { name: "Palau", flag: "https://flagcdn.com/w320/pw.png" },
    { name: "Palestine", flag: "https://flagcdn.com/w320/ps.png" },
    { name: "Panama", flag: "https://flagcdn.com/w320/pa.png" },
    { name: "Papua New Guinea", flag: "https://flagcdn.com/w320/pg.png" },
    { name: "Paraguay", flag: "https://flagcdn.com/w320/py.png" },
    { name: "Peru", flag: "https://flagcdn.com/w320/pe.png" },
    { name: "Philippines", flag: "https://flagcdn.com/w320/ph.png" },
    { name: "Poland", flag: "https://flagcdn.com/w320/pl.png" },
    { name: "Portugal", flag: "https://flagcdn.com/w320/pt.png" },
    { name: "Qatar", flag: "https://flagcdn.com/w320/qa.png" },
    { name: "Romania", flag: "https://flagcdn.com/w320/ro.png" },
    { name: "Russia", flag: "https://flagcdn.com/w320/ru.png" },
    { name: "Rwanda", flag: "https://flagcdn.com/w320/rw.png" },
    { name: "Saint Kitts and Nevis", flag: "https://flagcdn.com/w320/kn.png" },
    { name: "Saint Lucia", flag: "https://flagcdn.com/w320/lc.png" },
    { name: "Saint Vincent and the Grenadines", flag: "https://flagcdn.com/w320/vc.png" },
    { name: "Samoa", flag: "https://flagcdn.com/w320/ws.png" },
    { name: "San Marino", flag: "https://flagcdn.com/w320/sm.png" },
    { name: "Sao Tome and Principe", flag: "https://flagcdn.com/w320/st.png" },
    { name: "Saudi Arabia", flag: "https://flagcdn.com/w320/sa.png" },
    { name: "Senegal", flag: "https://flagcdn.com/w320/sn.png" },
    { name: "Serbia", flag: "https://flagcdn.com/w320/rs.png" },
    { name: "Seychelles", flag: "https://flagcdn.com/w320/sc.png" },
    { name: "Sierra Leone", flag: "https://flagcdn.com/w320/sl.png" },
    { name: "Singapore", flag: "https://flagcdn.com/w320/sg.png" },
    { name: "Slovakia", flag: "https://flagcdn.com/w320/sk.png" },
    { name: "Slovenia", flag: "https://flagcdn.com/w320/si.png" },
    { name: "Solomon Islands", flag: "https://flagcdn.com/w320/sb.png" },
    { name: "Somalia", flag: "https://flagcdn.com/w320/so.png" },
    { name: "South Africa", flag: "https://flagcdn.com/w320/za.png" },
    { name: "South Korea", flag: "https://flagcdn.com/w320/kr.png" },
    { name: "South Sudan", flag: "https://flagcdn.com/w320/ss.png" },
    { name: "Spain", flag: "https://flagcdn.com/w320/es.png" },
    { name: "Sri Lanka", flag: "https://flagcdn.com/w320/lk.png" },
    { name: "Sudan", flag: "https://flagcdn.com/w320/sd.png" },
    { name: "Suriname", flag: "https://flagcdn.com/w320/sr.png" },
    { name: "Sweden", flag: "https://flagcdn.com/w320/se.png" },
    { name: "Switzerland", flag: "https://flagcdn.com/w320/ch.png" },
    { name: "Syria", flag: "https://flagcdn.com/w320/sy.png" },
    { name: "Taiwan", flag: "https://flagcdn.com/w320/tw.png" },
    { name: "Tajikistan", flag: "https://flagcdn.com/w320/tj.png" },
    { name: "Tanzania", flag: "https://flagcdn.com/w320/tz.png" },
    { name: "Thailand", flag: "https://flagcdn.com/w320/th.png" },
    { name: "Timor-Leste", flag: "https://flagcdn.com/w320/tl.png" },
    { name: "Togo", flag: "https://flagcdn.com/w320/tg.png" },
    { name: "Tonga", flag: "https://flagcdn.com/w320/to.png" },
    { name: "Trinidad and Tobago", flag: "https://flagcdn.com/w320/tt.png" },
    { name: "Tunisia", flag: "https://flagcdn.com/w320/tn.png" },
    { name: "Turkey", flag: "https://flagcdn.com/w320/tr.png" },
    { name: "Turkmenistan", flag: "https://flagcdn.com/w320/tm.png" },
    { name: "Tuvalu", flag: "https://flagcdn.com/w320/tv.png" },
    { name: "Uganda", flag: "https://flagcdn.com/w320/ug.png" },
    { name: "Ukraine", flag: "https://flagcdn.com/w320/ua.png" },
    { name: "United Arab Emirates", flag: "https://flagcdn.com/w320/ae.png" },
    { name: "United Kingdom", flag: "https://flagcdn.com/w320/gb.png" },
    { name: "United States", flag: "https://flagcdn.com/w320/us.png" },
    { name: "Uruguay", flag: "https://flagcdn.com/w320/uy.png" },
    { name: "Uzbekistan", flag: "https://flagcdn.com/w320/uz.png" },
    { name: "Vanuatu", flag: "https://flagcdn.com/w320/vu.png" },
    { name: "Vatican City", flag: "https://flagcdn.com/w320/va.png" },
    { name: "Venezuela", flag: "https://flagcdn.com/w320/ve.png" },
    { name: "Vietnam", flag: "https://flagcdn.com/w320/vn.png" },
    { name: "Yemen", flag: "https://flagcdn.com/w320/ye.png" },
    { name: "Zambia", flag: "https://flagcdn.com/w320/zm.png" },
    { name: "Zimbabwe", flag: "https://flagcdn.com/w320/zw.png" }
    
];

const countryOptions: CountryOption[] = countries.map(country => ({
    value: country.name,
    label: (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={country.flag} alt={country.name} style={{ width: '20px', marginRight: '10px' }} />
            {country.name}
        </div>
    )
}));

const customStyles: StylesConfig<CountryOption, false> = {
    control: (base: CSSObjectWithLabel) => ({
        ...base,
        display: 'flex',
        width: '21%',
        fontSize: '14px', 
    }),
    menu: (base: CSSObjectWithLabel) => ({
        ...base,
        width: '21%',
        marginTop: 0,   
    }),
    option: (base: CSSObjectWithLabel, { isSelected }) => ({
        ...base,
        display: 'flex',
        alignItems: 'center',
        fontSize: '14px', 
        color: isSelected ? '#333' : '#333',
        fontWeight: isSelected ? 'bold' : 'normal',
    }),
    singleValue: (base: CSSObjectWithLabel) => ({
        ...base,
        display: 'flex',
        alignItems: 'center',
        fontSize: '14px', 
    }),
    placeholder: (base: CSSObjectWithLabel) => ({
        ...base,
        fontSize: '14px', 
    }),
    menuList: (base: CSSObjectWithLabel) => ({
        ...base,
        padding: 0,
    }),
};

const WithdrawalMethod = () => {
    const [selectedOption, setSelectedOption] = useState<string>('');
    const [selectedCountry, setSelectedCountry] = useState<CountryOption | null>(null);

    const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedOption(event.target.value);
    };

    const handleCountryChange = (selectedOption: CountryOption | null) => {
        setSelectedCountry(selectedOption);
    };

    return (
        <Container>
            <Heading>Withdrawal Method</Heading>
            <FromOption>
                <Option className={selectedOption === 'paypal' ? 'selected' : ''}>
                    <input
                        className='withdrawal-method'
                        type="radio"
                        name="withdrawal-method"
                        value="paypal"
                        checked={selectedOption === 'paypal'}
                        onChange={handleOptionChange}
                    />
                    PayPal
                </Option>
                <Option className={selectedOption === 'payoneer' ? 'selected' : ''}>
                    <input
                        type="radio"
                        name="withdrawal-method"
                        value="payoneer"
                        checked={selectedOption === 'payoneer'}
                        onChange={handleOptionChange}
                    />
                    Payoneer
                </Option>
                <Option className={selectedOption === 'swift' ? 'selected' : ''}>
                    <input
                        type="radio"
                        name="withdrawal-method"
                        value="swift"
                        checked={selectedOption === 'swift'}
                        onChange={handleOptionChange}
                    />
                    Swift
                </Option>
            </FromOption>

            <WithdrawalMethodContainer>
                <Form className={selectedOption === 'paypal' ? 'expanded' : ''}>
                    <h3>Your PayPal Account</h3>
                    <p>Minimum - $50.00</p>
                    <b>
                        Get paid by credit or debit card, PayPal transfer or even via bank account in just a few clicks. All you need is your email address or mobile number.
                        <a href="#">More about PayPal</a> | <a href="#">Create an account</a>
                    </b>
                    <StyledInput type="text" placeholder="Email address" />
                    <StyledInput type="text" placeholder="Confirm email address" />
                    <SaveButton>Set Payout Account</SaveButton>
                </Form>

                <Form className={selectedOption === 'payoneer' ? 'expanded' : ''}>
                    <h3>Your Payoneer Account</h3>
                    <p>Minimum - $50.00</p>
                    <b>
                        Payoneer Prepaid MasterCard® or Global Bank Transfer (Payoneer) offers an easy, convenient and cost-effective way to get paid. <a href="#!">More about Payoneer</a> | <a href="#!">Payoneer FAQs</a>
                    </b>
                    <StyledInput type="text" placeholder="Email address" />
                    <StyledInput type="text" placeholder="Confirm email address" />
                    <SaveButton>Set Payout Account</SaveButton>
                </Form>

                <Form className={selectedOption === 'swift' ? 'expanded' : ''}>
                    <h3>Your SWIFT Account</h3>
                    <p>Minimum - $500.00</p>
                    <b>
                        SWIFT (International Transfer) get paid directly into your bank account. Connected with over 9000 banking organisations, security institutions and customers in more than 200 countries <a href="#!">More about SWIFT</a>
                    </b>
                    <StyledInput type="text" placeholder="Full Name" />
                    <StyledInput className="address" type="text" placeholder="Your Address" /> 
                    <Select
                        className='select-country'
                        value={selectedCountry}
                        onChange={handleCountryChange}
                        options={countryOptions}
                        isSearchable
                        placeholder="Select Country" 
                        styles={customStyles}
                    />
                    <StyledInput type="text" placeholder="Swift-Code" />
                    <StyledInput type="text" placeholder="Bank Account Number" />
                    <StyledInput type="text" placeholder="Bank Name" />
                    <StyledInput type="text" placeholder="Bank Address" />
                    <SaveButton>Set Payout Account</SaveButton>
                </Form>
            </WithdrawalMethodContainer>
            <SaveButton>Save Changes</SaveButton>
        </Container>
    );
};

export default WithdrawalMethod;