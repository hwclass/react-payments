import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Payments, {Name, Surname, CardNumber, Expiration, CVC, PurchaseButton} from '../index';

storiesOf('Payments', module)
  .add('default view', () => (
    <Payments 
      name="John"
      surname="Doe"
      cardNumber="1218723871287312"
      expiration="8/16"
      cvc="756"
      onClick={ action('button clicked') }>Purchase</Payments>
  ));
