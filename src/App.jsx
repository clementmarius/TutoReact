import React, { useState } from "react";
import { Checkbox } from "./components/forms/Checkbox";
import { Input } from "./components/forms/Input";
import { ProductCategoryRow } from "./components/products/ProductCategoryRow";
import { ProductRow } from "./components/products/ProductRow";

const PRODUCTS = [
  { category: "Fruits", price: "1$", stocked: true, name: "Apple" },
  { category: "Fruits", price: "5$", stocked: true, name: "DragonFruit" },
  { category: "Fruits", price: "7$", stocked: false, name: "PassionFruit" },
  { category: "Fruits", price: "6$", stocked: true, name: "Cherry" },
  { category: "Vegetables", price: "4$", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "12$", stocked: true, name: "Pumpkin" },
  { category: "Vegetables", price: "2$", stocked: true, name: "Peas" },
];

function App() {
  const [showStockedOnly, setShowStockedOnly] = useState(false);
  const [search, setSearch] = useState("");

  const visibleProducts = PRODUCTS.filter((product) => {
    if (showStockedOnly && !product.stocked) {
      return false;
    }

    if (search && !product.name.includes(search)) {
      return false
    }

    return true;
  });

  return (
    <div className="container my-3">
      <SearchBar
        search={search}
        onSearchChange={setSearch}
        showStockedOnly={showStockedOnly}
        onStockedOnlyChange={setShowStockedOnly}
      />
      <ProductTable products={visibleProducts} />
    </div>
  );
}

function SearchBar({
  showStockedOnly,
  onStockedOnlyChange,
  search,
  onSearchChange,
}) {
  return (
    <div>
      <div className="mb-3">
        <Input
          value={search}
          onChange={onSearchChange}
          placeholder="Search items..."
        />
        <Checkbox
          id="stocked"
          checked={showStockedOnly}
          onChange={onStockedOnlyChange}
          label="Show available products"
        />
      </div>
    </div>
  );
}

function ProductTable({ products }) {
  const rows = [];

  let lastCategory = null;

  for (let product of products) {
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow key={product.category} name={product.category} />
      );
    }
    lastCategory = product.category;
    rows.push(<ProductRow product={product} key={product.name} />);
  }

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

export default App;
