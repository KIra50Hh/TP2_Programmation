import {removeLine, updateLine, useStore} from "../hooks/use-cart";
import React from "react";
import {ProductCartLine} from "tp-kit/components/products";

export default function cart() {
    const cartItems = useStore((state) => state.lines);

    return (<>
        {cartItems.map((line) => (
            <ProductCartLine
                className={"mb-4"}
                key={line.product.id}
                product={line.product}
                qty={line.qty}
                onDelete={() => {
                    removeLine(line.product.id);
                }}
                onQtyChange={(qty) => {
                    if (qty === 0) {
                        removeLine(line.product.id);
                    } else {
                        updateLine({product: line.product, qty: qty});
                    }
                }}
            />
        ))}
    </>);
}