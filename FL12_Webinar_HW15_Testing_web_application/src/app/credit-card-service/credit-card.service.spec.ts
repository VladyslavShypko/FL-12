import { TestBed } from '@angular/core/testing';

import { CreditCardService } from './credit-card.service';

describe('CreditCardService', () => {
  let service: CreditCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreditCardService);
  });

  it('should create CreditCardService', async () => {
    expect(service).toBeTruthy();
  });
  it('should return "Credit card has a valid format" if format and type is correct', async () => {
    expect(service.testCreditCard('3000 0000 0000 04', 'CarteBlanche')).toEqual({
      isValid: true,
      message: 'Credit card has a valid format'
    });
  });

  it('should return "Unknown card type" if card type is unknown', async () => {
    expect(service.testCreditCard('6334 0000 0000 0004', 'Unknown type')).toEqual({
      isValid: false,
      message: 'Unknown card type'
    });
  });
  it('should return message "Credit card number is invalid" if card number prefix is not valid', async () => {
    expect(service.testCreditCard('4052 0000 0232 37', 'DinersClub')).toEqual({
      isValid: false,
      message: 'Credit card number is invalid'
    });
  });
  it('should return message "Credit card number is invalid" if ten digit is not valid', async () => {
    expect(service.testCreditCard('4111 00000 0000000', 'Visa')).toEqual({
      isValid: false,
      message: 'Credit card number is invalid'
    });
  });
  it('should return "Credit card number is in invalid format" when code format contains other symbols or letters', async () => {
    expect(service.testCreditCard('2014 0000 sdf0 009', 'enRoute')).toEqual({
      isValid: false,
      message: 'Credit card number is in invalid format'
    });
  });

  it('should return "Credit card number has an inappropriate number of digits" if number is shorter then 15 digits', async () => {
    expect(service.testCreditCard('3400 0000 0000 00', 'AmEx')).toEqual({
      isValid: false,
      message: 'Credit card number has an inappropriate number of digits'
    });
  });

  it('should return "Credit card number has an inappropriate number of digits" if number is longer then 15 digits', async () => {
    expect(service.testCreditCard('3400 0000 0000 0000', 'AmEx')).toEqual({
      isValid: false,
      message: 'Credit card number has an inappropriate number of digits'
    });
  });

  it('should return "Warning! This credit card number is associated with a scam attempt" if number is scam', async () => {
    expect(service.testCreditCard('5490 9977 7109 2064', 'Mastercard')).toEqual({
      isValid: false,
      message: 'Warning! This credit card number is associated with a scam attempt'
    });
  });
});
