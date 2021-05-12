import React, { useRef, useState } from "react";

function Example() {
    let cust = useRef(null);
    const [state, setstate] = useState(0);
    return (
        <div key="123" className="aaa" ref={cust}>
            {state}
        </div>
    );
}

export default Example;
