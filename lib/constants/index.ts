export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || 'Prostore'
export const APP_DESCRIPTION = process.env.NEXT_PUBLIC_APP_DESCRIPTION || 'A modern ecommerce plateform built with Next.js'
export const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'
export const LATEST_PRODUCT_LIMIT = Number(process.env.LATEST_PRODUCT_LIMIT) || 4;

export const signInDefaultValues = {
    email: '',
    pawssword: ''
}


export const signUpDefaultValues = {
    name: '',
    email: '',
    pawssword: '',
    confirmPassword: ''
}

export const shippingAddressDefaultValues = {
    fullName: 'John Smith',
    streetAddress: '123 Main st',
    city: 'Anytwon',
    postalCode : '12345',
    country: 'USA'
}

export const PAYMENT_METHOD = process.env.PAYMENT_METHOD ? process.env.PAYMENT_METHOD.split(", ") : ['Paypal', 'Stripe', 'CashOnDelevery']
export const DEFAULT_PAYMENT_METHOD = process.env.DEFAULT_PAYMENT_METHOD || 'Paypal'