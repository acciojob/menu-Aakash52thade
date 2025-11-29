import React from 'react';

const Menu = ({ items }) => {
  return (
    <div className="menu-container">
      {items.map((item) => (
        <div key={item.id} data-test-id={`menu-item-${item.category}`} className="menu-item">
          <img src={item.img} alt={item.title} />
          <div className="menu-item-content">
            <div className="menu-item-header">
              <h3 className="menu-item-title">{item.title}</h3>
              <span className="menu-item-price">{item.price}</span>
            </div>
            <p className="menu-item-desc">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Menu;