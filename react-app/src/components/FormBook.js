import React, { useState } from "react";
import axios from 'axios'; 
import Header from "./Header";
import Footer from "./Footer";

// import '../components/order.css';

function FormBook() {
  // Set up state variables for form fields using the useState hook
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [houseAdd, setHouseAdd] = useState("");
  const [city, setCity] = useState("");
  const [postcode, setPostcode] = useState("");
  const [phone, setPhone] = useState("");
  const [style, setStyle] = useState(null); // For handling file upload
  const [paymentMethod, setPaymentMethod] = useState(""); // Added state
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare data to be sent to the server
    const formData = new FormData();
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("houseAdd", houseAdd);
    formData.append("city", city);
    formData.append("postcode", postcode);
    formData.append("phone", phone);
    formData.append("style", style); // Assuming style is a file
    // formData.append("material", material);
    // formData.append("orderDetails", orderDetails); // Unused
    // formData.append("address", address); // Unused

    const axiosconfig = {
      method: 'post',
      url: 'https://localhost:7300/api/orders',
      headers: {
        'Content-Type': 'application/json'
      },
      data : JSON.stringify({
        order: {
          // order details here
        }
      })
    };
  
    console.log("POSTing data to fulfillment");
    try {
      const response = await axios(axiosconfig);
      console.log("Order fulfilled successfully");
      return {
        statusCode: 200,
        body: JSON.stringify({ message: "Order fulfilled successfully" })
      };
    } catch (error) {
      console.log("Error fulfilling order", error);
      return {
        statusCode: 500,
        body: JSON.stringify({ message: "Error fulfilling order" })
      };
    }
  };

  return (
    <>
    <Header/>
      <div className="App">
        <div className="container">
          <div className="title">
            <h2>Stitching Order Form</h2>
          </div>
          <div className="d-flex">
            <form onSubmit={handleSubmit}>

            <label>
              <span className="fname">First Name <span className="required">*</span></span>
              <input
                type="text"
                name="fname"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </label>
            <label>
              <span className="lname">Last Name <span className="required">*</span></span>
              <input
                type="text"
                name="lname"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </label>
            <label>
              <span>Street Address <span className="required">*</span></span>
              <input
                type="text"
                name="houseadd"
                value={houseAdd}
                onChange={(e) => setHouseAdd(e.target.value)}
                placeholder="House number and street name"
                required
              />
            </label>
            <label>
              <span>Town / City <span className="required">*</span></span>
              <input
                type="text"
                name="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
              />
            </label>
            <label>
              <span>Postcode / ZIP <span className="required">*</span></span>
              <input
                type="text"
                name="postcode"
                value={postcode}
                onChange={(e) => setPostcode(e.target.value)}
                required
              />
            </label>
            <label>
              <span>Phone <span className="required">*</span></span>
              <input
                type="tel"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </label>
            </form>
          <div className="Yorder">
            <table>
              <tr>
                <th colSpan="2">Your order</th>
              </tr>
              <tr>
                <td>Product Name x 2(Qty)</td>
                <td>LKR800.00</td>
              </tr>
              <tr>
                <td>Subtotal</td>
                <td>LKR800.00</td>
              </tr>
              <tr>
                <td>Shipping</td>
                <td>Free shipping</td>
              </tr>
            </table>
            <br />
            <div>
              <input
                type="radio"
                name="paymentMethod"
                value="dbt"
                checked={paymentMethod === "dbt"}
                onChange={() => setPaymentMethod("dbt")}
              />{" "}
              Direct Bank Transfer
            </div>
            <p>
              Make your payment directly into our bank account. Please use your
              Order ID as the payment reference. Your order will not be shipped
              until the funds have cleared in our account.
            </p>
            <div>
              <input
                type="radio"
                name="paymentMethod"
                value="cd"
                checked={paymentMethod === "cd"}
                onChange={() => setPaymentMethod("cd")}
              />{" "}
              Cash on Delivery
            </div>
            <div>
              <input
                type="radio"
                name="paymentMethod"
                value="paypal"
                checked={paymentMethod === "paypal"}
                onChange={() => setPaymentMethod("paypal")}
              />{" "}
              Paypal{" "}
              <span>
                <img
                  src="https://www.logolynx.com/images/logolynx/c3/c36093ca9fb6c250f74d319550acac4d.jpeg"
                  alt=""
                  width="50"
                />
              </span>
            </div>
            <button type="submit">Place Order</button>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default  FormBook;