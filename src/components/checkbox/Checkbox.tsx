import { FaCheck } from "react-icons/fa";

interface CheckBoxProps {
  checked: boolean;
  onChange: () => void;
}

const Checkbox: React.FC<CheckBoxProps> = ({ checked, onChange }) => (
  <div className="flex items-center">
    <div className={`w-5 h-5 relative overflow-hidden rounded cursor-pointer`}>
      <input
        type="checkbox"
        className="w-full h-full appearance-none cursor-pointer focus:outline-none"
        checked={checked}
        onChange={onChange}
      />
      <div
        className={`pointer-events-none w-full h-full absolute top-0 left-0 flex items-center justify-center text-xs text-white ${
          checked ? "bg-primary border-border" : "bg-accent"
        }`}>
        {checked ? <FaCheck /> : null}
      </div>
    </div>
  </div>
);

export default Checkbox;
