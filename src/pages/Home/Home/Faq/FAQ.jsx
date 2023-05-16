import React from 'react';
import Accordion from 'react-bootstrap/Accordion';


const FAQ = () => {
    return (
        <div className='mt-5 text-center'>
            <hr />
            <h1 className='mt-5 text-center fw-bold mb-4'>Frequently Asked Question</h1>
             <Accordion className='fst-italic'>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Can I see the food menu ?</Accordion.Header>
        <Accordion.Body>
        Certainly! Here's an updated version of Dim Sum Dynasty food menu with prices: <br />

<b> Appetizers:</b> <br />

1. Spring Rolls: $4.99 <br />
2. Steamed Dumplings: $5.99 <br />
3. Peking Duck Pancakes: $12.99 <br />
4. Hot and Sour Soup: $3.99  <br /> <br />

<b> Main Courses: </b><br />
1. General Tso's Chicken: $10.99 <br />
2. Kung Pao Shrimp: $12.99 <br />
3. Sweet and Sour Pork: $9.99 <br />
4. Beef with Broccoli: $11.99 <br />
5. Ma Po Tofu: $9.99 <br />
6. Mapo Eggplant: $8.99 <br />
7. Lemon Chicken: $10.99 <br />
8. Mongolian Beef: $12.99 <br />
9. Prawn Chow Mein: $11.99 <br />
10. Vegetable Fried Rice: $9.99 <br /> <br />

<b> Rice and Noodles: </b><br />
1. Yang Chow Fried Rice: $10.99 <br />
2. Singapore Noodles: $11.99 <br />
3. Beef Chow Fun: $12.99 <br />
4. Chicken Lo Mein: $10.99 <br /> <br />

<b>Vegetarian Options: </b><br />
1. Tofu and Vegetable Stir-Fry: $9.99 <br />
2. Buddhist Delight: $8.99 <br /> <br />

<b>Desserts: </b><br />
1. Mango Pudding: $4.99 <br />
2. Fried Banana with Honey: $5.99 <br /> <br />

<b>Beverages: </b><br />
1. Jasmine Tea: $1.99 <br />
2. Tsingtao Beer: $3.99 <br />
3. Lychee Juice: $2.99 <br /> <br />

        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Can I get home delevary ?</Accordion.Header>
        <Accordion.Body>
          <p>Yes, you can !!</p>
          <p>Provide your address and confirm your order! </p>
          
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Paymment methods?</Accordion.Header>
        <Accordion.Body>
          <p>
          Certainly! Here's a demonstration of a typical payment method process at Dim Sum Dynasty: <br /> <br />
            1. Take a look at the bill to verify the total amount owed for your meal, including any taxes or service charges. <br />
 2. In China, it is common to pay using mobile payment methods such as WeChat Pay or Alipay. These are widely accepted and convenient options. <br />
3. Open the mobile payment app on your smartphone and select the "Scan" or "Pay" option. <br />
 4. The waiter/waitress will present a QR code either on the bill or on a separate card. Aim your smartphone's camera at the QR code to scan it. <br />
 5. Once the QR code is successfully scanned, the payment app will display the total amount due on your screen. <br />
 6. Confirm the payment amount and authorize the transaction using your preferred payment method within the app (e.g., linked bank account, credit card, or available balance in the app).
 7. After the payment is successfully processed, you will receive a payment confirmation notification on your smartphone.  <br />
 8. Inform the waiter/waitress that you have completed the payment, and they will provide you with a receipt if needed. <br />
9. It is customary to leave a tip in China, but it is not obligatory or expected in most situations. However, if you wish to leave a tip, you can give it directly to the waiter/waitress in cash. <br /> <br />
<small>It's important to note that while mobile payment methods are prevalent in China, some restaurants may still accept cash or credit/debit cards. Additionally, the specific mobile payment apps and procedures may vary slightly depending on the restaurant and the payment provider.</small> </p>
          
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        </div>
    );
};

export default FAQ;