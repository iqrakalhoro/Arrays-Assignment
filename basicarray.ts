// Part 1: Basic Arrays - Product Inventory
// Step 1
type Product = {
    name: string;
    price: number;
    inventory_detail: { stock: number; colorOption: string[] };
  };
// Step 2
  let products: Product[] = [
    {
      name: "Laptop",
      price: 44000,
      inventory_detail: { stock: 15, colorOption: ["blue", "black", "red"] },
    },
    {
      name: "Mobile",
      price: 30000,
      inventory_detail: { stock: 30, colorOption: ["red", "black", "blue"] },
    },
    {
      name: "Tablet",
      price: 25000,
      inventory_detail: { stock: 10, colorOption: ["black", "red", "blue"] },
    },
  ];
// Step 3 
  function changeColor(products: Product, newColor: string) {
    newColor.toLowerCase();
    if (!products.inventory_detail.colorOption.includes(newColor)) {
      console.log(`${newColor} color of ${products.name} is no Available`);
    } else {
      // increase and decrease product price according to color
      if (newColor == "red") {
        products.price += (products.price / 100) * 10;
      } else if (newColor == "blue") {
        products.price -= (products.price / 100) * 5;
      }
// Step 4
      console.log(
        `Price of ${newColor} color ${products.name} is ${products.price}`
      );
    }
    return products;
  }
  console.log(changeColor(products[0], "red"));
  console.log(changeColor(products[1], "black"));
  console.log(changeColor(products[2], "blue"));
