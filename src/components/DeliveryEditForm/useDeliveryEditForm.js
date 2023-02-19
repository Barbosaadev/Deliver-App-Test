import * as Yup from "yup"
import { useFormik } from "formik"

const Schema = Yup.object({
  title: Yup.string().required("title is required"),
  description: Yup.string().required("description is required"),
  date: Yup.string().required("date is required"),
})

export const useDeliveryEditForm = ({ onSubmit }) => {
  return useFormik({
    initialValues: {
      id: "",
      title: "",
      description: "",
      date: "",
      toggle: false,
    },

    onSubmit,
    validationSchema: Schema,
    validateOnBlur: true,
    validateOnChange: false,
  })
}

export default useDeliveryEditForm
