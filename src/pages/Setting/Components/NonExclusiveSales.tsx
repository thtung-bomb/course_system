import React, { useEffect, useState } from 'react';
import {
    NonExclusiveSalesContainer,
    Heading,
    BillingPercentages,
    BillingPercentagesProgressBar,
    ProgressBarLabels,
    ProgressBarLabelItem,
    ProgressBarLabel,
    Profit,
    Percent,
    FormatCurrency,
    Hr1
} from '../Style/BillingandPayoutsStyled';

const NonExclusiveSales: React.FC = () => {
    const [salesData, setSalesData] = useState([
        { profit: 0, percent: 50 },
        { profit: 2000, percent: 30 },
        { profit: 8000, percent: 30 },
        { profit: 18000, percent: 30 },
        { profit: 40000, percent: 30 },
        { profit: 75000, percent: 30 },
        { profit: 100000, percent: 30 },
    ]);

    useEffect(() => {
        // Giả sử bạn có một API trả về dữ liệu doanh thu
        fetch('/api/sales-data')
            .then(response => response.json())
            .then(data => setSalesData(data))
            .catch(error => console.error('Error fetching sales data:', error));
    }, []);

    return (
        <NonExclusiveSalesContainer>
            <Heading>Non Exclusive Sales</Heading>
            <p className='text4'>
            Sell more of your non-exclusive products of this type (equal to the amount on the left) to get 70% cut from every non-exclusive sales.
            </p>
            
            <BillingPercentages>
                <BillingPercentagesProgressBar>
                    <ProgressBarLabels>
                        {salesData.map((item, index) => (
                            <ProgressBarLabelItem key={index}>
                                <ProgressBarLabel className={item.profit === 0 ? "zero-level" : ""}>
                                    <Profit>
                                        <FormatCurrency>${item.profit.toLocaleString()}</FormatCurrency>
                                    </Profit>
                                    <Percent className={item.profit === 0 ? "zero-level" : ""}>{item.percent}%</Percent>
                                </ProgressBarLabel>
                            </ProgressBarLabelItem>
                        ))}
                    </ProgressBarLabels>
                </BillingPercentagesProgressBar>
            </BillingPercentages>
            <Hr1 />
        </NonExclusiveSalesContainer>
    );
};

export default NonExclusiveSales;
