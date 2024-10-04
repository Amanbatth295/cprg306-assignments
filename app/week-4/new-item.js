"use client";

import { useState } from "react";

export default function NewItem() {
    const [quantity, setQuantity] = useState(1);
    const handleSubmit = (event) => {
        event.preventDefault();
    
        const item = {
          quantity,
        };

        setQuantity(1);
      };
return(
<main class="flex justify-center w-full">
<div class="flex justify-between">
          <input
            type="number"
            min="1"
            max="99"
            required=""
            class="w-20 ml-1 border-2 border-gray-300 p-2 rounded-lg font-sans"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
          </div>
</main>
);
}