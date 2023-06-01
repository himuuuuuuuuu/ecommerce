import { toast } from "react-toastify";

const validateEmail = (input) => {
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    input.toLowerCase()
  );
};

const validatePassword = (input) => {
  return /^(?=.{8,20}$)\D*\d/.test(input);
};

const simpleString = (str) => {
  return str.trim().split(" ").join("").toLowerCase();
};

const ToastHandler = (type, message) => {
  if (type === "error") {
    toast.error(message, {
      position: "bottom-right",
      autoClose: 1000,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  } else if (type === "warn") {
    toast.warn(message, {
      position: "bottom-right",
      autoClose: 1000,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  } else if (type === "success") {
    toast.success(message, {
      position: "bottom-right",
      autoClose: 1000,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  } else if (type === "info") {
    toast.info(message, {
      position: "bottom-right",
      autoClose: 1000,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
};

export { validateEmail, validatePassword, simpleString, ToastHandler };
