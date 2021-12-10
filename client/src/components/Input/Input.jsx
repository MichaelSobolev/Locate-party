export const Input = ({
  id,
  name,
  value,
  type,
  handleChange,
  min = "",
  max = "",
  className = "form-control",
}) => {
  return (
    <div key={id} className="mb-3">
      <input
        type={type}
        value={value}
        onChange={handleChange}
        className={className}
        id={id}
        name={name}
        min={min}
        max={max}
      />
    </div>
  );
};
