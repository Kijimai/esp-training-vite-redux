import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { loadStripe } from "@stripe/stripe-js"
import {
  Elements,
  useElements,
  CardElement,
  CardCvcElement,
  CardExpiryElement,
  useStripe,
} from "@stripe/react-stripe-js"
import { useAuth0 } from "@auth0/auth0-react"
const promise = loadStripe(import.meta.env.VITE_STRIPE_KEY)

const CheckOutForm = () => {
  const { user } = useAuth0()
  const stripe = useStripe()
  const elements = useElements()
  
  const createPaymentIntent = async () => {}

  console.log(user)

  return <div>Hello Diveasdasdasdasda</div>
}

const StripeCheckout = () => {
  return (
    <Wrapper>
      <Elements stripe={promise}>
        <CheckOutForm />
      </Elements>
    </Wrapper>
  )
}

const Wrapper = styled.aside``

export default StripeCheckout
