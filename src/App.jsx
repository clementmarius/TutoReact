import React from "react";
import { Checkbox } from "./components/forms/Checkbox";
import { Input } from "./components/forms/Input";

const PRODUCTS = [
  { category: "Fruits", price: "1$", stocked: true, name: "Apple" },
  { category: "Fruits", price: "5$", stocked: true, name: "DragonFruit" },
  { category: "Fruits", price: "7$", stocked: true, name: "PassionFruit" },
  { category: "Fruits", price: "6$", stocked: true, name: "Cherry" },
  { category: "Vegetables", price: "4$", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "12$", stocked: true, name: "Pumpkin" },
  { category: "Vegetables", price: "2$", stocked: true, name: "Peas" },
];

function App() {
  return (
    <div className="container my-3">
      <SearchBar />
    </div>
  );
}

function SearchBar() {
  return (
    <div>
      <div className="mb-3">
        <Input value="" onChange={() => null} placeholder="Search items..." />
        <Checkbox
          id="stocked"
          checked={false}
          onChange={() => null}
          label="Show available products"
        />
      </div>
    </div>
  );
}

export default App;
