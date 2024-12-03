import React from "react";
import styled from "styled-components";

const InvoiceContainer = styled.div`
  max-width: 800px;
  margin: auto;
  border: 1px solid #eaeaea;
  background-color: #fff;
  font-family: "Roboto", sans-serif;
`;

const InvoiceHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eaeaea;
  background: #333333;
  padding: 30px;
  height: 60px;
`;

const InvoiceHeaderRight = styled.div`
  float: right;
  width: 100%;
  padding-left: 60px;
  > div {
    margin-bottom: 10px;
  }
`;

const InvoiceLabel = styled.span`
  color: #333;
  font-size: 14px;
`;

const InvoiceValue = styled.span`
  color: #686f7a;
  font-weight: 400;
  font-size: 14px;
  padding-left: 10px;
`;

const InvoiceTitle = styled.h2`
  color: #fff;
  font-size: 20px;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  margin: 0;
`;

const StyledSecondInvoiceTitle = styled(InvoiceTitle)`
  font-size: 24px;
  font-weight: 600;
  color: #333;
  text-align: left;
  margin-top: 100px;
`;

const InvoiceImage = styled.img`
  width: 100px;
`;

const Main = styled.main`
  padding: 20px;
`;

const InvoiceDetails = styled.section`
  display: flex;
  padding: 20px 0;
  float: right;
`;

const InvoiceTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

const InvoiceTableTh = styled.th`
  border-bottom: 1px solid #efefef !important;
  padding: 20px;
  text-align: left;
  font-size: 14px;
  font-weight: 500;
`;

const InvoiceTableTd = styled.td`
  border-bottom: 1px solid #efefef !important;
  padding: 20px;
  font-size: 14px;
  color: #686f7a;
`;

const AdjustedSpan = styled.span`
  padding-left: -10px;
`;

const InvoiceTo = styled.div`
  margin-top: 30px;
  &:last-child {
    padding-right: 130px;
  }

  h4 {
    font-size: 18px;
    font-weight: 500;
    color: #333;
    text-align: left;
    margin-bottom: 15px;
  }
  li {
    margin: 16px 0;
    color: #686f7a;
    font-size: 14px;
  }
`;

const InvoiceSummary = styled.div`
  text-align: right;
  margin-top: 20px;
`;

const InvoiceTotalText = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: #242424;
  margin-bottom: 10px;
  margin-right: 50px;
`;

const PaymentMethodText = styled.p`
  font-size: 14px;
  color: #686f7a;
  margin-right: 50px;
  padding-top: 10px;
`;

const PrintButton = styled.button`
  background-color: #ed2a26;
  color: #fff;
  border: none;
  padding: 11px 30px;
  cursor: pointer;
  margin-top: 10px;
  border-radius: 5px;
  font-weight: 500;
  font-size: 14px;
  height: 40px;
  margin-right: 30px;
  margin-top: -5px;
  margin-bottom: 40px;
  &:hover {
    background-color: #333;
    
    transition: all 0.3s ease;
  }

  
  &:active {
    transform: translateY(1px);
  }
`;

const Footer = styled.footer`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  
`;

const ThanksText = styled.p`
  font-size: 14px;
  color: #757575;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  text-align: left;
`;

const InvoiceBody = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 30px;
`;

interface InvoiceProps {
  invoiceDate: string;
  invoiceNo: string;
  orderId: string;
  customerName: string;
  customerAddress: string[];
  companyName: string;
  companyAddress: string[];
  item?: {
    title?: string;
    price?: number;
    vat?: number;
    total?: number;
  };
  totalAmount: number;
  paymentMethod: string;
}

const Invoice: React.FC<InvoiceProps> = ({
  item = { title: "", price: 79.0, vat: 10.0, total: 89.0 },
  totalAmount,
  paymentMethod,
}) => {
  const handlePrint = () => {
    window.print();
  };
  
  const formatValue = (value: number | undefined): string => {
    return value !== undefined ? value.toFixed(2) : "0.00";
  };

  const { title = "", price, vat, total } = item;

  console.log("Item values:", { title, price, vat, total });

  const formattedPrice = formatValue(price);
  const formattedVat = formatValue(vat);
  const formattedTotal = formatValue(total);

  return (
    <InvoiceContainer>
      <InvoiceHeader>
        <InvoiceImage
          src="https://gambolthemes.net/html-items/cursus-new-demo/images/ct_logo.svg"
          alt="Cursus Logo"
        />
        <InvoiceTitle>Invoice</InvoiceTitle>
      </InvoiceHeader>
      <Main>
        <InvoiceDetails>
          <InvoiceHeaderRight>
            <div>
              <InvoiceLabel>Date : </InvoiceLabel>
              <InvoiceValue>10 April 2020</InvoiceValue>
            </div>
            <div>
              <InvoiceLabel>Invoice No : </InvoiceLabel>
              <InvoiceValue>IVIP12023598</InvoiceValue>
            </div>
            <div>
              <InvoiceLabel>Order ID : </InvoiceLabel>
              <InvoiceValue>1258963487</InvoiceValue>
            </div>
          </InvoiceHeaderRight>
        </InvoiceDetails>
        <StyledSecondInvoiceTitle>Invoice</StyledSecondInvoiceTitle>
        <InvoiceBody>
          <InvoiceTo>
            <h4>To</h4>
            <ul>
              <li>Rock William</li>
              <li>133, Dracut</li>
              <li>Mlissachusetts</li>
              <li>01826</li>
              <li>United States</li>
            </ul>
          </InvoiceTo>
          <InvoiceTo>
            <h4>Cursus</h4>
            <ul>
              <li>Cursus LTD</li>
              <li>#1234, Shahid karnail Singh Nagar,</li>
              <li>Near MBD Mall,</li>
              <li>141001</li>
              <li>Ludhiana</li>
              <li>Punjab</li>
              <li>India</li>
            </ul>
          </InvoiceTo>
        </InvoiceBody>
        <InvoiceTable>
          <thead>
            <tr>
              <InvoiceTableTh>Item</InvoiceTableTh>
              <InvoiceTableTh>Price</InvoiceTableTh>
              <InvoiceTableTh>Vat(20%)</InvoiceTableTh>
              <InvoiceTableTh>Total Amount</InvoiceTableTh>
            </tr>
          </thead>
          <tbody>
            <tr>
              <InvoiceTableTd>
                <AdjustedSpan>{title || "Item Title"}</AdjustedSpan>
              </InvoiceTableTd>
              <InvoiceTableTd>
                <AdjustedSpan>${formattedPrice}</AdjustedSpan>
              </InvoiceTableTd>
              <InvoiceTableTd>
                <AdjustedSpan>${formattedVat}</AdjustedSpan>
              </InvoiceTableTd>
              <InvoiceTableTd>
                <AdjustedSpan>${formattedTotal}</AdjustedSpan>
              </InvoiceTableTd>
            </tr>
          </tbody>
        </InvoiceTable>
        <InvoiceSummary>
          <InvoiceTotalText>Invoice Total: USD ${formatValue(totalAmount)}</InvoiceTotalText>
          <PaymentMethodText>Paid via Paypal {paymentMethod}</PaymentMethodText>
        </InvoiceSummary>
      </Main>
      <Footer>
        <ThanksText>Thanks for buying.</ThanksText>
        <PrintButton onClick={handlePrint}>PRINT</PrintButton>
      </Footer>
    </InvoiceContainer>
  );
};

export default Invoice;
