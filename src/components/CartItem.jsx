import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { BiPlus, BiMinus } from 'react-icons/bi';
import { useStateValue } from '../context/StateProvider';
import { actionType } from '../context/reducer';

let items = [];

const CartItem = ({ item, setFlag, flag }) => {
  const [{ cartItems }, dispatch] = useStateValue();
  const [qty, setQty] = useState(item.qty);

  const cartDispatch = () => {
    localStorage.setItem('cartItems', JSON.stringify(items));
    dispatch({
      type: actionType.SET_CARTITEMS,
      cartItems: items,
    });
  };

  const updateQty = (action, id) => {
    if (action === 'add') {
      setQty(qty + 1);
      cartItems.map((item) => {
        if (item.id === id) {
          item.qty += 1;
          setFlag(flag + 1);
        }
      });
      cartDispatch();
    } else {
      if (qty === 1) {
        items = cartItems.filter((item) => item.id !== id);
        setFlag(flag + 1);
        cartDispatch();
      } else {
        setQty(qty - 1);
        cartItems.map((item) => {
          if (item.id === id) {
            item.qty -= 1;
            setFlag(flag + 1);
          }
        });
        cartDispatch();
      }
    }
  };

  useEffect(() => {
    items = cartItems;
  }, [qty, cartItems]);

  return (
    <div className="flex w-full items-center gap-2 rounded-lg bg-cartItem p-1 px-2">
      <img
        src={item?.imageURL}
        alt="productImage"
        className="h-20 w-20 max-w-[60px] rounded-full object-contain"
      />
      {/* name section */}
      <div className="flex flex-col gap-2">
        <p className="text-base text-gray-50">{item?.name}</p>
        <p className="block text-sm font-semibold text-gray-300">
          $ {parseFloat(item?.price) * qty}
        </p>
      </div>
      {/* button section */}
      <div className="group ml-auto flex cursor-pointer items-center gap-2">
        <motion.div
          whileTap={{ scale: 0.75 }}
          onClick={() => updateQty('remove', item?.id)}
        >
          <BiMinus className="text-gray-50" />
        </motion.div>
        <p className="flex h-5 w-5 items-center justify-center rounded-sm bg-cartBg text-gray-50">
          {qty}
        </p>
        <motion.div
          whileTap={{ scale: 0.75 }}
          onClick={() => updateQty('add', item?.id)}
        >
          <BiPlus className="text-gray-50" />
        </motion.div>
      </div>
    </div>
  );
};

export default CartItem;
