import * as Yup from "yup";

export const LoginValidation = Yup.object({
  username: Yup.string().required("Username is required"),
  password: Yup.string().required("Password is required"),
});

export const checkOutValidation = Yup.object({
  fullName: Yup.string().required("Full Name is required"),
  phone: Yup.string().required("Phone number is Required"),
  pincode: Yup.string().required("Pincode is required"),
  houseNo: Yup.string().required("House Number is required"),
  roadName: Yup.string().required("Road Name is required"),
  city: Yup.string().required("city is required"),
  state: Yup.string().required("state is required"),
  landmark: Yup.string().required("Landmark is required"),
});
