import React from "react";
import { useForm } from "react-hook-form";

function Form({handleFormSubmitData}) {

  const {register, handleSubmit, reset} = useForm()

  const handleFormSubmit = (data) => {
    // even I would say ish ki body open kar lijiye or curly brackets laga dijiye, jo ki hum laga chuke hein
    handleFormSubmitData(data)
    // ab ishke turant baad chala do reset()
    reset()
  }

  return (
    <div className="mt-10 flex justify-center">
      <form className="flex gap-4" onSubmit={handleSubmit(handleFormSubmit)} action="">
        <input {...register("name")} className="px-2 py-1 rounded text-base font-semibold border-none" type="text" placeholder="name"/>
        <input {...register("email")} className="px-2 py-1 rounded text-base font-semibold border-none" type="text" placeholder="e-mail"/>
        <input {...register("image")} className="px-2 py-1 rounded text-base font-semibold border-none" type="text" placeholder="image url"/>
        <input className="px-5 py-1 rounded text-white bg-blue-500 text-base font-semibold" type="submit" />

      </form>
    </div>
  );
}

export default Form;
