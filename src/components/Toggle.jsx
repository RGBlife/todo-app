import "../Toggle.css";

const Toggle = ({ checked, onChange, icons }) => {
  return (
    <label className="switch">
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span className="slider">
        {checked ? icons.checked : icons.unchecked}
      </span>
    </label>
  );
};

export default Toggle;
