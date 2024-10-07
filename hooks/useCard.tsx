// import { nanoid } from 'nanoid';
// import { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { addToCart } from '../redux/features/cartSlice';
// import { toggleFavs } from '../redux/features/favsSlice';
// import { pizzasCategory } from './../constants/index';
// import {
//   addActiveDops,
//   addActiveTops,
//   calculateCardPrice,
//   getItemsArr,
//   getProductsMainPizzas,
//   getSortedSizes,
//   removeDops,
//   removeTops,
// } from '../utils/card';
// import { sortByArticle } from '../utils';
// import { useCardDops } from './useCardDops';
// import { motion } from 'framer-motion';
// import { AddDops } from '../components/Shared/Card/CardItem/AddDops';
// import { CardDops } from '../components/Shared/Card/CardItem/CardDops';
// import { CardTops } from '../components/Shared/Card/CardItem/CardTops';
// import cn from 'classnames';
// import { getLimitedProducts } from '../utils/getLimitedProducts';

export const useCard = () => {
  // const { products, productsMain } = useSelector((state) => state.city);

  // const itemsArr = getItemsArr(product, products);

  // const [activeSize, setActiveSize] = useState(itemsArr[0]?.size);
  // const [activeToppings, setActiveToppings] = useState([]);
  // const [activeDops, setActiveDops] = useState([]);
  // const [modalIsOpen, setModalIsOpen] = useState(false);
  // const [isVisible, setIsVisible] = useState(false);

  // const dispatch = useDispatch();

  // const cardWithSize = itemsArr?.find((item) => item.size === activeSize);
  // const pizzaSizes = itemsArr?.map((prod) => prod.size);

  // const { hasDopsFor, hasTopsFor, itemsDops, itemsTops } = useCardDops({
  //   product: cardWithSize,
  // });

  // const productsMainPizzas = getProductsMainPizzas(
  //   productsMain,
  //   pizzasCategory
  // );

  // const handleAddActiveToppings = (topping) => {
  //   addActiveTops(setActiveToppings, topping);
  // };

  // const handleAddActiveDops = (dops) => {
  //   addActiveDops(setActiveDops, dops, productsMainPizzas, cardWithSize);
  // };

  // const removeActiveTopping = (e, tops) => {
  //   e.stopPropagation();
  //   removeTops(setActiveToppings, tops);
  // };

  // const removeActiveDops = (e, dops) => {
  //   e.stopPropagation();
  //   removeDops(setActiveDops, dops);
  // };

  // useEffect(() => {
  //   setActiveDops([]);
  // }, [activeSize]);

  // const itemDopsWithPrice = activeDops?.filter((item) => item.isSingle);
  // const totalPriceItemDopsWithPrice = activeDops
  //   ?.filter((item) => item.isSingle)
  //   ?.reduce((acc, cur) => acc + cur.price * cur.count, 0);

  // const cardPrice = calculateCardPrice(
  //   productsMainPizzas,
  //   cardWithSize,
  //   activeToppings,
  //   activeDops
  // );

  // const handleVisible = () => setIsVisible(!isVisible);

  // const handleAddActiveSize = (size) => {
  //   setActiveSize(size);
  //   handleVisible();
  // };

  // const uniqSizes = getSortedSizes([...new Set(pizzaSizes)]);

  // const priceItemAddedToCart = activeDops?.every((item) => item?.isSingle)
  //   ? cardPrice - totalPriceItemDopsWithPrice
  //   : cardPrice;

  // const topsItemAddedToCart = sortByArticle(activeToppings);
  // const dopsItemAddedToCart = sortByArticle(activeDops);

  // const limitedItem = getLimitedProducts(products);

  // const itemAddedToCart = {
  //   ...cardWithSize,
  //   isRegular: true,
  //   cart_id: nanoid(),
  //   size: activeSize,
  //   price: priceItemAddedToCart,
  //   startPrice: priceItemAddedToCart,
  //   tops: topsItemAddedToCart,
  //   dops: dopsItemAddedToCart,
  // };

  // const openModal = () => {
  //   setModalIsOpen(true);
  // };

  // const closeModal = () => {
  //   setModalIsOpen(false);
  // };

  // const handleToggleFavs = (e, item) => {
  //   e.stopPropagation();
  //   dispatch(toggleFavs(item));
  // };

  // const handleRemoveFromFavs = (e, item) => {
  //   e.stopPropagation();
  //   dispatch(removeFromFavs(item));
  // };

  // const handleAddItemToCart = (item) => {
  //   dispatch(addToCart(item));
  //   closeModal();
  // };

  // const handleAddItemToCartFromArticle = (e, item) => {
  //   e.stopPropagation();

  //   dispatch(addToCart(item));
  //   itemDopsWithPrice?.length !== 0 &&
  //     itemDopsWithPrice?.map((el) =>
  //       dispatch(
  //         addToCart({
  //           ...el,
  //           price: el.price,
  //           startPrice: el.price,
  //           cart_id: nanoid(),
  //         })
  //       )
  //     );

  //   closeModal();
  // };

  // const classGridSizes = cn(
  //   'relative mb-2 z-[2] bg-zinc-200 rounded-full overflow-hidden grid dark:bg-darkBgGray',
  //   {
  //     'grid-cols-1': uniqSizes?.length === 1,
  //     'grid-cols-2': uniqSizes?.length === 2,
  //     'grid-cols-3': uniqSizes?.length === 3,
  //     '!rounded-3xl': uniqSizes?.length >= 4,
  //   }
  // );

  // const classBigImg = cn(
  //   'max-w-[450px] w-full object-contain mx-auto lg:mx-0 transition-all duration-300',
  //   hasDopsFor || hasTopsFor || product?.size !== ''
  //     ? 'h-[450px]'
  //     : 'h-[300px]',
  //   {
  //     '!h-[370px]': cardWithSize?.size === '28 см',
  //     '!h-[410px]': cardWithSize?.size === '38 см',
  //     '!h-[450px]': cardWithSize?.size === '48 см',
  //   }
  // );

  // const cardSizesRender = () => {
  //   return (
  //     <>
  //       {cardWithSize?.size !== '' && (
  //         <div className={classGridSizes}>
  //           {uniqSizes?.map((item, index) => {
  //             return (
  //               <motion.button
  //                 key={index}
  //                 onClick={() => handleAddActiveSize(item)}
  //                 className={cn(
  //                   'relative z-[2] w-full rounded-full p-2 px-4 flex items-center justify-center text-base leading-[1.2] transition-colors duration-200 h-[40px] dark:bg-darkBgGray dark:text-darkTextWhite dark:border-darkWhite04',
  //                   activeSize === item && '!text-white !font-semibold'
  //                 )}
  //                 transition={{
  //                   transition: 0.2,
  //                 }}
  //               >
  //                 {activeSize === item && (
  //                   <motion.span
  //                     layoutId="activeItem"
  //                     className="absolute block rounded-full w-full h-full left-0 bg-accent top-0"
  //                   ></motion.span>
  //                 )}
  //                 <span className="z-[2]">{item}</span>
  //               </motion.button>
  //             );
  //           })}
  //         </div>
  //       )}
  //     </>
  //   );
  // };

  // const cardIngredients = () => {
  //   return (
  //     <div className="mb-5">
  //       <CardTops
  //         hasTopsFor={hasTopsFor}
  //         itemsTops={itemsTops}
  //         activeToppings={activeToppings}
  //         handleAddActiveToppings={handleAddActiveToppings}
  //         removeActiveTopping={removeActiveTopping}
  //       />

  //       {!productsMainPizzas?.includes(cardWithSize?.article) ? (
  //         <CardDops
  //           hasDopsFor={hasDopsFor}
  //           itemsDops={itemsDops}
  //           activeDops={activeDops}
  //           handleAddActiveDops={handleAddActiveDops}
  //           product={product}
  //         />
  //       ) : (
  //         <AddDops
  //           itemsDops={itemsDops}
  //           activeDops={activeDops}
  //           handleAddActiveDops={handleAddActiveDops}
  //           removeActiveDops={removeActiveDops}
  //           product={cardWithSize}
  //         />
  //       )}
  //     </div>
  //   );
  // };

  return {
    // itemsArr,
    // cardWithSize,
    // uniqSizes,
    // activeSize,
    // activeToppings,
    // activeDops,
    // itemAddedToCart,
    // modalIsOpen,
    // productsMainPizzas,
    // cardPrice,
    // classGridSizes,
    // classBigImg,
    // cardIngredients,
    // cardSizesRender,
    // closeModal,
    // setIsVisible,
    // openModal,
    // handleToggleFavs,
    // handleRemoveFromFavs,
    // handleAddActiveDops,
    // handleAddActiveToppings,
    // removeActiveTopping,
    // handleAddActiveSize,
    // handleAddItemToCart,
    // handleAddItemToCartFromArticle,
    // setModalIsOpen,
    // removeActiveDops,
  };
};
