import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";

export function TextInputs({
  placeholder,
  label,
  name,
  type,
  register,
  isRequired = true,
  isDisabled = false,
  errors,
  width = "",
}) {
  return (
    <div
      className={`grid ${
        width ? width : "max-w-sm"
      } items-center gap-1.5 col-span-2 sm:col-span-1`}
    >
      <Label className='font-bold mb-2' htmlFor={name}>
        {label}
      </Label>
      <Input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        {...register(`${name}`)}
        {...register(`${name}`, { required: isRequired })}
      />
      {errors[`${name}`] && (
        <span className='text-sm text-red-600 '>{label} is required</span>
      )}
    </div>
  );
}
