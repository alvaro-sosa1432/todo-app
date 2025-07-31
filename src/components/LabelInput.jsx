export const LabelInputForm = ({
  name,
  value,
  setValue,
  type,
  placeholder,
}) => {
  return (
    <div className="flex flex-col  gap-2">
      <label className="text-left">{name}</label>
      <input
        className="border border-white/20  bg-white/10 backdrop-blur-lg outline-none rounded-lg py-2 w-56"
        value={value}
        type={type}
        placeholder={placeholder}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};
