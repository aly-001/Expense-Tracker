import React, { FormEvent, useRef, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Message from "../Message";

/* Configure the shape of the form */
const schema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 characters." }),
  age: z.number( {invalid_type_error: "Age field is required."} ).min(18, { message: "You must be at least 18 years old."}),
});

type FormData = z.infer<typeof schema>;

const Form = () => {
  /* Now pass our schema object into useForm() */
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });
  const onSubmit = (data: FieldValues) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          {...register("name")}
          type="text"
          id="name"
          className="form-control"
        />
        {errors.name && (
          /* Check for the existance of an error */
          /* Let our schema generate default messages */
          <p className="text-danger">{errors.name.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          {...register("age", { valueAsNumber: true })}
          type="number"
          id="age"
          className="form-control"
        />
        {errors.age && (
          /* Check for the existance of an error */
          /* Let our schema generate default messages */
          <p className="text-danger">{errors.age.message}</p>
        )}
      </div>
      <button disabled={!isValid}className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
