import { useRef } from "react";

const UseRef = () => {
  const inputRef = useRef(null);
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);
  const inputRef4 = useRef(null);

  const onFocusToggle = () => {
    console.log(inputRef.current);
    if (!inputRef.current) return;
    inputRef.current.focus();
    inputRef.current.value = "Anika";
    inputRef.current.color = "white";
    inputRef.current.style.backgroundColor = "red";
    if (!inputRef1.current) return;
    inputRef1.current.focus();
    inputRef1.current.value = "vaurn";
    inputRef1.current.color = "white";
    inputRef1.current.style.backgroundColor = "blue";
    if (!inputRef2.current) return;
    inputRef2.current.focus();
    inputRef2.current.value = "ankit";
    inputRef2.current.color = "white";
    inputRef2.current.style.backgroundColor = "white";
    if (!inputRef3.current) return;
    inputRef3.current.focus();
    inputRef3.current.value = "ravi";
    inputRef3.current.color = "white";
    inputRef3.current.style.backgroundColor = "green";
    if (!inputRef4.current) return;
    inputRef4.current.focus();
    inputRef4.current.value = "hello";
    inputRef4.current.color = "white";
    inputRef4.current.style.backgroundColor = "orange";
  };

  return (
    <div style={{ height: "100vh", display: "grid", placeItems: "center" }}>
      <input ref={inputRef} type="search" placeholder="Search here!" />
      <input ref={inputRef1} type="search" placeholder="Search here!" />
      <input ref={inputRef2} type="search" placeholder="Search here!" />
      <input ref={inputRef3} type="search" placeholder="Search here!" />
      <input ref={inputRef4} type="search" placeholder="Search here!" />
      <button onClick={onFocusToggle}>Toggle Focus</button>
    </div>
  );
};

export default UseRef;
