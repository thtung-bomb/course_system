import React, { useState } from 'react';
import {
    BiliingAddressContainer,
    Heading,
    FormGroup,
    Input,
    Select,
    Hint,
    Hr1
} from '../Style/BillingandPayoutsStyled';


const countries = [
    "Afghanistan", "Albania", "Algeria", "American Samoa", "Andorra", "Angola",
    "Anguilla", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Australia",
    "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus",
    "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegovina",
    "Botswana", "Brazil", "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi",
    "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central African Republic",
    "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Cook Islands", "Costa Rica",
    "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica",
    "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea",
    "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia",
    "Georgia", "Germany", "Ghana", "Greece", "Greenland", "Grenada", "Guatemala", "Guinea",
    "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia",
    "Iran", "Iraq", "Ireland", "Israel", "Italy", "Ivory Coast", "Jamaica", "Japan", "Jordan",
    "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon",
    "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar",
    "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania",
    "Mauritius", "Mexico", "Micronesia"
];

const BillingAddress: React.FC = () => {
    const [firstName, setFirstName] = useState('Joginder');
    const [lastName, setLastName] = useState('Singh');
    const [academyname, setAcademyName] = useState('Gambolthemes');
    const [country, setCountry] = useState('India');
    const [addressline1, setAddressLine1] = useState('#1234, Sks Nagar, Near MBD Mall, 141001 Ludhiana, Punjab, India');
    const [City, setCity] = useState('Ludhiana');
    const [StateProvinceRegion, setStateProvinceRegion] = useState('Punjab');
    const [PostalCode, setPostalCode] = useState('141001');
    const [phoneNumber, setPhoneNumber] = useState('+91 1234567890');

    const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setCountry(e.target.value);
    };

    return (
        <BiliingAddressContainer>
            <Heading>Billing and Payouts</Heading>
            <p className='text'>Want to charge for a course? Provide your payment info and opt in for our promotional programs</p>
            <Heading>Billing Address</Heading>
            <FormGroup> 
                <Input
                    type="text"
                    className='ip1'
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <Input
                    type="text"
                    className='ip2'
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
            </FormGroup>
            <FormGroup>
                <Input
                    type="text"
                    className='ip3'
                    placeholder="Academy Name"
                    value={academyname}
                    onChange={(e) => setAcademyName(e.target.value)}
                />
            </FormGroup>
            <Hint><p className='text1'>If you want your invoices addressed to a academy. Leave blank to use your full name.</p></Hint>
            <FormGroup>
                <Select
                    className='select-country'
                    value={country}
                    onChange={handleCountryChange}
                    isSelected={country !== 'Choose One'}
                >
                    <option value="Choose One">Choose One</option>
                    {countries.map((country, index) => (
                        <option key={index} value={country}>{country}</option>
                    ))}
                </Select>
            </FormGroup>
            <FormGroup>
                <Input
                    type="text"
                    className='ip4'
                    placeholder="Address Line 1"
                    value={addressline1}
                    onChange={(e) => setAddressLine1(e.target.value)}
                />
            </FormGroup>
            <FormGroup>
                <Input
                    type="text"
                    className='ip5'
                    placeholder="Address Line 2"
                    
                />
            </FormGroup>
            <FormGroup>
                <Input
                    type="text"
                    className='ip6'
                    placeholder="City"
                    value={City}
                    onChange={(e) => setCity(e.target.value)}
                />
            </FormGroup>
            <FormGroup>
                <Input
                    type="text"
                    className='ip7'
                    placeholder="State / Province / Region"
                    value={StateProvinceRegion}
                    onChange={(e) => setStateProvinceRegion(e.target.value)}
                />
            </FormGroup>
            <FormGroup>
                <Input
                    type="text"
                    className='ip8'
                    placeholder="Zip / Postal Code"
                    value={PostalCode}
                    onChange={(e) => setPostalCode(e.target.value)}
                />
            </FormGroup>
            <FormGroup>
                <Input
                    type="text"
                    className='ip9'
                    placeholder="Phone number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                />
            </FormGroup>
            <Hr1 />
        </BiliingAddressContainer>
    );
};

export default BillingAddress;
