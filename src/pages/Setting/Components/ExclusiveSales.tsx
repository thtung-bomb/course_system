import React, { useEffect, useState } from 'react';
import {
    ExclusiveSalesContainer,
    Heading,
    BillingPercentages,
    BillingPercentagesProgressBar,
    ProgressBarLabels,
    ProgressBarLabelItem,
    ProgressBarLabel,
    Profit,
    Percent,
    FormatCurrency,
} from '../Style/BillingandPayoutsStyled';

const ExclusiveSales: React.FC = () => {
    const [salesData, setSalesData] = useState([
        { profit: 0, percent: 50 },
        { profit: 2000, percent: 53 },
        { profit: 8000, percent: 55 },
        { profit: 18000, percent: 58 },
        { profit: 40000, percent: 62 },
        { profit: 75000, percent: 70 },
        { profit: 100000, percent: 80 },
    ]);

    useEffect(() => {
        // Giả sử bạn có một API trả về dữ liệu doanh thu
        fetch('/api/sales-data')
            .then(response => response.json())
            .then(data => setSalesData(data))
            .catch(error => console.error('Error fetching sales data:', error));
    }, []);

    return (
        <ExclusiveSalesContainer>
            <Heading>Exclusive Sales</Heading>
            <p className='text3'>
                Sell more of your exclusive products of this type (equal to the amount on the left) to get % cut from further exclusive sales.
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
        </ExclusiveSalesContainer>
    );
};

export default ExclusiveSales;
