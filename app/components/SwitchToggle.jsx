"use client";


export default function SwitchToggle() {
  const { BgColor, setBgColor } = useTheme();

  return (
    <div className="wrapper">
      <input
        type="checkbox"
        className="switch"
        checked={BgColor === 1} 
        onChange={(e) => setBgColor(e.target.checked ? 1 : 0)}
      />
    </div>
  );
}
