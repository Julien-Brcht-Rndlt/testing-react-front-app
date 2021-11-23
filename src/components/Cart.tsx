import { useState } from "react";

type CartProps = {
    onCancel: () => void
}

export default function Cart({ onCancel }: CartProps) {

    const [purchased, setPurchased] = useState<boolean>(false);

    return (
    <div>
        { purchased && <p>Thank You!</p> }
        <button onClick={() => setPurchased(true)}>purchase</button>
        <button onClick={() => onCancel()}>cancel</button>
    </div>
    )
}