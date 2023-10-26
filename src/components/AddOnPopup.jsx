import React, { useState } from 'react';

const AddOnPopup = ({ item }) => {
  const [selectedAddons, setSelectedAddons] = useState([]);
  const [selectedToppings, setSelectedToppings] = useState([]);

  const handleAddToCart = () => {
    // Handle adding the selected item with add-ons and toppings to the cart
    // You can pass this information to your API or cart management system
    // onAddToCart(item, selectedAddons, selectedToppings);
    // onClose();
  };

  return (
    <div className="popup">
      <h2>Customize {item?.name}</h2>

      <h3>Add-ons:</h3>
      <ul>
        {item?.addons.map((addon, index) => (
          <li key={addon.id}>
            <label>
              <input
                type={addon.isRadio ? 'radio' : 'checkbox'}
                name={addon.isRadio ? 'addonRadio' : 'addonCheckbox'}
                value={addon.id}
                checked={selectedAddons.includes(addon.id)}
                onChange={(e) => {
                  const selectedId = addon.id;
                  if (addon.isRadio) {
                    setSelectedAddons([selectedId]);
                  } else {
                    setSelectedAddons((prevSelection) => {
                      if (prevSelection.includes(selectedId)) {
                        return prevSelection.filter((id) => id !== selectedId);
                      } else {
                        return [...prevSelection, selectedId];
                      }
                    });
                  }
                }}
              />
              {addon.name}
            </label>
          </li>
        ))}
      </ul>

      <h3>Toppings:</h3>
      <ul>
        {item?.toppings.map((topping) => (
          <li key={topping.id}>
            <label>
              <input
                type={topping.isRadio ? 'radio' : 'checkbox'}
                name={topping.isRadio ? 'toppingRadio' : 'toppingCheckbox'}
                value={topping.id}
                checked={selectedToppings.includes(topping.id)}
                onChange={(e) => {
                  const selectedId = topping.id;
                  if (topping.isRadio) {
                    setSelectedToppings([selectedId]);
                  } else {
                    setSelectedToppings((prevSelection) => {
                      if (prevSelection.includes(selectedId)) {
                        return prevSelection.filter((id) => id !== selectedId);
                      } else {
                        return [...prevSelection, selectedId];
                      }
                    });
                  }
                }}
              />
              {topping.name}
            </label>
          </li>
        ))}
      </ul>

      {/* <button onClick={handleAddToCart}>Add to Cart</button>
      <button onClick={onClose}>Close</button> */}
    </div>
  );
};

export default AddOnPopup;
