export default function Icon({ name, className = '', size = 20, fill = false }) {
  return (
    <span
      className={`material-symbols-outlined select-none inline-flex items-center justify-center ${className}`}
      style={{
        fontSize: `${size}px`,
        fontVariationSettings: fill ? "'FILL' 1" : "'FILL' 0",
      }}
    >
      {name}
    </span>
  );
}
