import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { loadStripe } from "@stripe/stripe-js"
import {
  Elements,
  useElements,
  PaymentElement,
  CardElement,
  CardCvcElement,
  CardExpiryElement,
  useStripe,
  CardNumberElement,
} from "@stripe/react-stripe-js"
import Loading from "react-loading"
import { useAuth0 } from "@auth0/auth0-react"
import { useNavigate, useParams } from "react-router-dom"
import Error from "../routes/Error"
import { purchaseTiers } from "../links"
import axios from "axios"
import { toast } from "react-toastify"

const promise = loadStripe(import.meta.env.VITE_STRIPE_KEY)

const CheckOutForm = () => {
  const { user } = useAuth0()
  const { plan } = useParams()
  const navigate = useNavigate()

  // Stripe States
  const [succeeded, setSucceeded] = useState(false)
  const [processing, setProcessing] = useState(false)
  const [disabled, setDisabled] = useState(true)
  const [clientSecret, setClientSecret] = useState("")
  const [error, setError] = useState(null)

  const stripe = useStripe()
  const elements = useElements()

  // Get current plan based on route
  const currentPlan = purchaseTiers.find((tier) => tier.userType === plan)

  const createPaymentIntent = async () => {
    try {
      const { data } = await axios.post(
        "/.netlify/functions/create-payment-intent",
        JSON.stringify({ cost: currentPlan.cost, email: user.email })
      )

      setClientSecret(data.clientSecret)
    } catch (err) {
      console.log(err.response)
    }
  }

  useEffect(() => {
    createPaymentIntent()
  }, [])

  const cardStyle = {
    style: {
      base: {
        color: "#32325d",
        fontFamily: "Arial, sans-serif",
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#32325d",
        },
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a",
      },
    },
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setProcessing(true)

    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    })

    if (payload.error) {
      setError(`Payment failed: ${payload.error.message}`)
      setProcessing(false)
    } else {
      setError(null)
      setProcessing(false)
      setSucceeded(true)
      toast(
        `Thank you for purchasing the ${plan} service! Redirecting to dashboard...`
      )
      setTimeout(() => {
        navigate("../../dashboard")
      }, 6000)
    }
  }

  const handleChange = async (event) => {
    // event.empty returns a boolean value to see if the input is empty or not -- the button will be disabled if the input is empty
    setDisabled(event.empty)
    setError(event.error ? event.error.message : "")
  }

  if (
    plan !== "basic" &&
    plan !== "pro" &&
    plan !== "deluxe" &&
    plan !== "mvp"
  ) {
    return <Error />
  }

  const { nickname } = user

  return (
    <PlanWrapper>
      <article className="left">
        <h2>Thanks for considering us, {nickname}!</h2>
        <p>
          You've chosen the <b>{plan}</b> plan which includes:{" "}
        </p>
        <ul>
          {currentPlan.offers.map((offer, idx) => {
            return <li key={idx}>{offer}</li>
          })}
        </ul>
      </article>
      <div className="right">
        {succeeded ? (
          <div>
            <h2>Thank you very much!</h2>
            <p>You will be redirected shortly...</p>
          </div>
        ) : (
          <form id="payment-form" onSubmit={handleSubmit}>
            <p>Test Card Number: 4242 4242 4242 4242</p>
            <CardElement
              id="card-element"
              onChange={handleChange}
              options={cardStyle}
            />
            <button
              className="payment-btn"
              disabled={processing || disabled || succeeded}
              id="submit"
              onClick={handleSubmit}
            >
              {processing ? (
                <Loading
                  type="spin"
                  color="lightblue"
                  height={"3rem"}
                  width={"3rem"}
                />
              ) : (
                "Pay"
              )}
            </button>
            <span className="display-error">{error}</span>
          </form>
        )}
      </div>
    </PlanWrapper>
  )
}

const StripeCheckout = () => {
  return (
    <StripeWrapper>
      <Elements stripe={promise}>
        <CheckOutForm />
      </Elements>
    </StripeWrapper>
  )
}

const PlanWrapper = styled.section`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 4rem;
  background-color: hsl(var(--clr-white));

  .left {
    p {
      font-size: 1.6rem;
    }

    ul {
      padding: 2rem;
      font-size: 1.4rem;
      list-style: circle;
    }
  }

  .right {
    background-color: hsl(var(--clr-off-white));
    padding: 2rem;
    border-radius: 0.5rem;
    box-shadow: 0 0 1rem hsl(var(--clr-black));
  }

  .payment-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 1rem;
    margin: 1rem 0;
    background-color: hsl(var(--clr-lightblue));
    color: hsl(var(--clr-white));
    border: none;
    transition: 0.2s ease color, 0.2s ease background-color;

    &:hover {
      background-color: hsl(var(--clr-orange));
      color: hsl(var(--clr-white));
    }
  }

  .display-error {
    color: red;
  }
`

const StripeWrapper = styled.main`
  min-height: 60vh;
`

export default StripeCheckout
