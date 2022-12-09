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
} from "@stripe/react-stripe-js"
import { useAuth0 } from "@auth0/auth0-react"
import { useParams } from "react-router-dom"
import Error from "../routes/Error"
import { purchaseTiers } from "../links"
const promise = loadStripe(import.meta.env.VITE_STRIPE_KEY)

const CheckOutForm = () => {
  const { user } = useAuth0()
  const stripe = useStripe()
  const elements = useElements()
  const { plan } = useParams()

  // Stripe States
  const [succeeded, setSucceeded] = useState(false)
  const [processing, setProcessing] = useState(false)
  const [disabled, setDisabled] = useState(true)
  const [clientSecret, setClientSecret] = useState("")
  const [error, setError] = useState(null)

  const createPaymentIntent = async () => {
    try {
    } catch (err) {
      console.log(err.response)
    }
  }
  console.log(plan)

  useEffect(() => {
    setClientSecret()
  }, [])

  if (
    plan !== "basic" &&
    plan !== "pro" &&
    plan !== "deluxe" &&
    plan !== "mvp"
  ) {
    return <Error />
  }

  const { nickname } = user

  // Get current plan based on route
  const currentPlan = purchaseTiers.find((tier) => tier.userType === plan)

  return (
    <PlanWrapper>
      <div className="left">
        <h2>{nickname}</h2>
        <ul>
          {currentPlan.offers.map((offer, idx) => {
            return <li key={idx}>{offer}</li>
          })}
        </ul>
      </div>
      <div className="right">
        <form>
          <CardElement />
        </form>
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

const PlanWrapper = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: hsl(var(--clr-white));
`

const StripeWrapper = styled.aside``

export default StripeCheckout
