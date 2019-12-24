import React from 'react';
import { Formik, Field } from 'formik';
import { Button, Card } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

export const ShippingAddressForm = () => {
    return <div>
        <Field type="text" name="streetNumber"></Field>
        {/* <Field type="text" name="address"></Field>
        <Field type="text" name="unit"></Field>
        <Field type="text" name="city"></Field>
        <Field type="text" name="province"></Field>
        <Field type="text" name="country"></Field>
        <Field type="text" name="postalCode"></Field> */}
    </div>
}

export const PaymentForm = () => {
    return <div>Payment Form</div>
}

export const DeliveryTimeForm = () => {
    return <div>Delivery time Form</div>
}

export const Checkout = () => {
    const totalCost = 12.44
    const handleSubmit = (val) => {
        console.log('Submitted', val)
    }

    return (
        <Formik onSubmit={handleSubmit} initialValues={{ 'streetNumber': 'foo' }}>
            {({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                    <Container>
                        <Card>
                            <ShippingAddressForm />
                        </Card>
                        <Card>

                            <DeliveryTimeForm />
                        </Card>
                        <Card>

                            <PaymentForm />
                        </Card>
                        <div>
                            {totalCost}
                        </div>
                        <div>Checkout Component</div>
                        <Button onClick={handleSubmit} type='submit'>Checkout </Button>
                    </Container>

                </form>
            )}
        </Formik>
    )
}