import React, { useState } from 'react';
import Menu from './Menu';
import './styles.css';

const menuData = [
  {
    id: 1,
    title: "Buttermilk Pancakes",
    category: "breakfast",
    price: "₹250",
    img: "https://images.unsplash.com/photo-1583503654530-a4ca08800292?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8QnV0dGVybWlsayUyMFBhbmNha2VzfGVufDB8fDB8fHww",
    desc: "Fluffy pancakes served with syrup and fresh fruits."
  },
  {
    id: 2,
    title: "Country Delight",
    category: "breakfast",
    price: "₹200",
    img: "https://images.unsplash.com/photo-1497888329096-51c27beff665?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJyZWFrZmFzdHxlbnwwfHwwfHx8MA%3D%3D",
    desc: "Classic breakfast with toast, butter, and eggs."
  },
  {
    id: 3,
    title: "Bacon & Eggs",
    category: "breakfast",
    price: "₹300",
    img: "https://images.unsplash.com/photo-1588464083183-e4b8879983e4?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8QmFjb24lMjAlMjYlMjBFZ2dzfGVufDB8fDB8fHww",
    desc: "Crispy bacon with scrambled eggs."
  },
  {
    id: 4,
    title: "Grilled Chicken",
    category: "lunch",
    price: "₹450",
    img: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8R3JpbGxlZCUyMENoaWNrZW58ZW58MHx8MHx8fDA%3D",
    desc: "Healthy grilled chicken served with veggies."
  },
  {
    id: 5,
    title: "Veggie Delight",
    category: "lunch",
    price: "₹350",
    img: "https://images.unsplash.com/photo-1651718243509-742f5bd5836c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8VmVnZ2llJTIwRGVsaWdodCUyMGx1bmNofGVufDB8fDB8fHww",
    desc: "Mixed vegetables cooked with Indian spices."
  },
  {
    id: 6,
    title: "Paneer Curry",
    category: "lunch",
    price: "₹400",
    img: "https://plus.unsplash.com/premium_photo-1665972700836-50bbb88e43e5?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8JTIyUGFuZWVyJTIwQ3VycnklMjJ8ZW58MHx8MHx8fDA%3D",
    desc: "Soft paneer pieces cooked in a rich gravy."
  },
  {
    id: 7,
    title: "Oreo Shake",
    category: "shakes",
    price: "₹180",
    img: "https://images.unsplash.com/photo-1507750549272-e58742b1df80?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fE9yZW8lMjBTaGFrZXxlbnwwfHwwfHx8MA%3D%3D",
    desc: "Thick Oreo milkshake topped with whipped cream."
  },
  {
    id: 8,
    title: "Chocolate Shake",
    category: "shakes",
    price: "₹160",
    img: "https://plus.unsplash.com/premium_photo-1667544654787-cd984212004d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2hvY29sYXRlJTIwbWlsa3NoYWtlfGVufDB8fDB8fHww",
    desc: "Rich chocolate shake for chocolate lovers."
  },
  {
    id: 9,
    title: "Strawberry Shake",
    category: "shakes",
    price: "₹170",
    img: "https://plus.unsplash.com/premium_photo-1695927470343-f80f750aa920?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8U3RyYXdiZXJyeSUyMFNoYWtlfGVufDB8fDB8fHww",
    desc: "Fresh strawberry shake served chilled."
  }
];



const App = () => {
  const [menuItems, setMenuItems] = useState(menuData);

  const filterItems = (category) => {
    const filteredItems = menuData.filter(item => item.category === category);
    setMenuItems(filteredItems);
  };

  const showAll = () => {
    setMenuItems(menuData);
  };

  return (
    <div id="main">
      <h1>Our Menu</h1>
      
      <div className="filter-buttons">
        <button onClick={showAll}>All</button>
        <button id="filter-btn-1" onClick={() => filterItems('breakfast')}>
          Breakfast
        </button>
        <button id="filter-btn-2" onClick={() => filterItems('lunch')}>
          Lunch
        </button>
        <button id="filter-btn-3" onClick={() => filterItems('shakes')}>
          Shakes
        </button>
      </div>

      <Menu items={menuItems} />
    </div>
  );
};

export default App;