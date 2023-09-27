import React, { useEffect } from 'react';
import { Header, CreateContainer, MainContainer } from './components';
import { Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { getAllFoodItems } from './utils/firebaseFunctions';
import { useStateValue } from './context/StateProvider';
import { actionType } from './context/reducer';

const App = () => {
  const [{ foodItems }, dispatch] = useStateValue();
  const fetchData = async () => {
    await getAllFoodItems().then((data) => {
      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        foodItems: data,
      });
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AnimatePresence mode="wait">
      <div className="flex h-auto w-screen flex-col bg-primary">
        <Header />

        <main className="mt-14 w-full px-4 py-4 md:mt-20 md:px-16">
          <Routes>
            <Route path="/*" element={<MainContainer />} />
            <Route path="/createItem" element={<CreateContainer />} />
          </Routes>
        </main>
      </div>
    </AnimatePresence>
  );
};

export default App;
