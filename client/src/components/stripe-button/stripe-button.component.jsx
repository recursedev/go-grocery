import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
// import { ReactComponent as Logo } from "../../assets/logo.svg";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51HIpz4DkZWQUGBL5Zuv6GFpp6I6jEMLKorIbo7CAdKgI04q01azjAdGFwmViu2KHaHynY7ToI0Bav4r9mJ5cZFnm00d3EIX0vj'

	const onToken = (token) => {
		axios({
			url: "payment",
			method: "post",
			data: {
				amount: priceForStripe,
				token: token,
			},
		})
			.then((response) => {
				alert("succesful payment");
			})
			.catch((error) => {
				console.log("PaymentError: ", error);
				alert(
					"There was an issue with your payment! Please make sure you use the provided credit card."
				);
			});
	};

	return (
		<StripeCheckout
			label="Pay Now"
			name="Wooden Churner"
			billingAddress
			shippingAddress
			description={`Your total is Rs.${price}`}
			amount={priceForStripe}
			panelLabel="Pay Now"
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
};

export default StripeCheckoutButton;

