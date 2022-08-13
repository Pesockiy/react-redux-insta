import React from "react";

export default function Toggler() {
  const [theme, setTheme] = React.useState(true);
  return <button onClick={() => setTheme(!theme)} className={theme ? 'toggler' : 'toggler toggler--active'}></button>;
}
