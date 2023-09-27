import React, { useEffect, useRef, useState } from 'react';
import { MdShoppingBasket } from 'react-icons/md';
import { motion } from 'framer-motion';
import NotFound from '../img/NotFound.svg';
import { useStateValue } from '../context/StateProvider';
import { actionType } from '../context/reducer';

const RowContainer = ({ flag, data, scrollValue }) => {
  const rowContainer = useRef();
  const [items, setItems] = useState([]);
  const [{ cartItems }, dispatch] = useStateValue();

  const addToCart = () => {
    dispatch({
      type: actionType.SET_CARTITEMS,
      cartItems: items,
    });
    localStorage.setItem('cartItems', JSON.stringify(items));
  };

  useEffect(() => {
    rowContainer.current.scrollLeft = scrollValue;
  }, [scrollValue]);

  useEffect(() => {
    addToCart();
  }, [items]);

  return (
    <div
      ref={rowContainer}
      className={`my-12 flex w-full items-center gap-3 scroll-smooth ${
        flag
          ? 'overflow-x-scroll scrollbar-none'
          : 'flex-wrap justify-center overflow-x-hidden'
      }`}
    >
      {data && data.length > 0 ? (
        data.map((item) => (
          <div
            className="relative my-12 flex h-[175px] w-275 min-w-[275px] flex-col items-center justify-evenly rounded-lg bg-cardOverlay px-4 py-2 backdrop-blur-lg hover:drop-shadow-lg md:w-300 md:min-w-[300px] "
            key={item?.id}
          >
            <div className="flex h-24 w-full items-center justify-between">
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="-mt-8 h-40 w-40 drop-shadow-2xl"
              >
                <img
                  src={item?.imageURL}
                  alt="fruitImage"
                  className="h-full w-full object-contain"
                />
              </motion.div>

              <motion.div
                whileTap={{ scale: 0.75 }}
                className="-mt-8 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-red-600 hover:shadow-md"
                onClick={() => setItems([...cartItems, item])}
              >
                <MdShoppingBasket className="text-white" />
              </motion.div>
            </div>

            <div className="flex w-full flex-col items-end justify-end">
              <p className="text-base font-semibold text-textColor md:text-lg">
                {item?.title}
              </p>
              <p className="mt-1 text-sm text-gray-500">
                {item?.calories} Calories
              </p>
              <div className="flex items-center gap-8">
                <p className="text-lg font-semibold text-headingColor">
                  <span className="text-sm text-red-500">$</span> {item?.price}
                </p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="flex w-full flex-col items-center justify-center">
          <img src={NotFound} alt="NotFound" className="h-340" />
          <p className="my-2 text-xl font-semibold text-headingColor">
            Items Not Available
          </p>
        </div>
      )}
    </div>
  );
};

export default RowContainer;
