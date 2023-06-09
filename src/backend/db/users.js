import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * Every user will have cart (Quantity of all Products in Cart is set to 1 by default), wishList by default
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Vivek",
    lastName: "Bhatt",
    email: "vivekbhatt07@gmail.com",
    password: "system32",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    address: [
      {
        _id: uuid(),
        addressFormName: "Vivek Bhatt",
        addressFormNumber: "9975558910",
        addressFormPin: "263153",
        addressFormCity: "Rudrapur",
        addressFormAddress: "6, Alliance",
        addressFormAlternateNumber: "9546721547",
        addressFormState: "Uttarakhand",
      },
    ],
  },
];
