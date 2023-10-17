import Toggle from "./Toggle";

const Header = ({ setIsDark, isDark }) => {

  return (
    <div className="header">
      <h1>To-Do App</h1>
      <Toggle
        checked={isDark}
        onChange={({ target }) => setIsDark(target.checked)}
        icons={{ checked: "🌙", unchecked: "🔆" }}
        aria-label="Dark mode toggle"
      />
    </div>
  );
};

export default Header;
