import React from "react"
import Input from "../Input"
import Field from "../Field"

const DeliveryEditForm = ({ handleSubmit, handleBlur, handleChange, isSubmitting, values = {}, errors }) => {
  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <Field
        name="title"
        label="Title"
        component={Input}
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.title}
        invalid={!!errors.title}
        errorMessage={errors.title}
      />
      <Field
        name="description"
        label="Description"
        component={Input}
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.description}
        invalid={!!errors.description}
        errorMessage={errors.description}
      />
      <Field
        type="date"
        name="date"
        label="Date"
        onBlur={handleBlur}
        onChange={handleChange}
        component={Input}
        value={values.date}
        invalid={!!errors.date}
        errorMessage={errors.date}
      />
      <div className="space-x-2 flex justify-end">
        <button disabled={isSubmitting} type="submit" className="bg-indigo-600 px-4 py-2 rounded-md text-white">
          Save
        </button>
      </div>
    </form>
  )
}

export default DeliveryEditForm
