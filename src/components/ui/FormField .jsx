import { Label } from "@/components/ui/label";
import { Input } from "./input";
import { Textarea } from "./textarea";
import { memo } from "react";

function FormField({
  type,
  placeholder,
  label,
  name,
  register,
  errors,
  index,
}) {
  return (
    <li key={index} className="space-y-2 capitalize list-none">
      <Label htmlFor={name}>{label}</Label>

      {type === "textarea" ? (
        <Textarea
          id={name}
          placeholder={placeholder}
          {...register(name, { required: true })}
        />
      ) : (
        <Input
          id={name}
          type={type}
          placeholder={placeholder}
          {...register(name, { required: `${name} is required` })}
        />
      )}

      {errors[name] && <p className="text-red-500">{errors[name].message}</p>}
    </li>
  );
}

export default memo(FormField);
