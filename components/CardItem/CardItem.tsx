'use client';

import { nanoid } from 'nanoid';
import { memo, useState } from 'react';
import { useMedia } from 'react-use';
import cn from 'classnames';
import Image from 'next/image';

interface ICardItem {
  product: any;
}

const CardItem = memo(
  ({
    product = {},
  }: // isSearchItem = false,
  // isAdditional = false,
  // isSmall = false,
  ICardItem) => {
    // const {
    //   hasDopsFor,
    //   hasTopsFor,
    //   itemAddedToCart,
    //   modalIsOpen,
    //   closeModal,
    //   openModal,
    //   handleToggleFavs,
    //   handleAddItemToCartFromArticle,
    // } = useCard({
    //   product,
    // });
    const [isOpen, setIsOpen] = useState(false);

    const isMobile = useMedia('(max-width: 991px)');
    // const isMobile = useMemo(() => window.innerWidth <= 991, []);

    const handleOpenCardDrawer = () => {
      setIsOpen(true);
    };

    const handleToggleModal = () => {
      // return !isMobile ? openModal() : handleOpenCardDrawer();
    };

    return (
      <>
        <article
          onClick={handleToggleModal}
          key={nanoid()}
          className={cn(
            'relative flex gap-5 translate-top-img h-full p-4 rounded-2xl w-full md:gap-3 bg-white dark:text-darkTextWhite dark:bg-transparent'
          )}
        >
          {product.img_new !== 'default' ? (
            <picture className="block w-full h-full">
              <source
                srcSet={`https://files.dobropizza.ru/images/products/${400}x${400}/${
                  product.img_new
                }.avif`}
                type="image/avif"
              />
              <source
                srcSet={`https://files.dobropizza.ru/images/products/${400}x${400}/${
                  product.img_new
                }.webp`}
                type="image/webp"
              />
              <Image
                className="w-full h-full object-contain transition-all duration-300"
                src={`https://files.dobropizza.ru/images/products/${400}x${400}/${
                  product.img_new
                }.png`}
                width={300}
                height={300}
                alt={product.alt}
              />
            </picture>
          ) : (
            <Image
              src={`https://dobropizza.ru/upload/products/${product.img}`}
              width={300}
              height={300}
              className="w-full h-full object-contain transition-all duration-300"
              alt={product.alt}
            />
          )}

          <div
            className={cn(
              'flex flex-col gap-3 flex-1 relative md:flex-grow md:h-full'
            )}
          >
            <div
              className={cn('flex items-center justify-between gap-3 relative')}
            >
              <h3 className="w-[90%]">{product?.name}</h3>
            </div>

            <div
              className={cn(
                'flex items-center justify-between gap-2 md:mt-auto'
              )}
            >
              <span
                className={cn(
                  'font-semibold text-xl md:text-[24px] flex-shrink-0'
                )}
              >
                {/* {hasDopsFor || hasTopsFor || product?.size !== ''
                  ? `от ${product?.price} ₽`
                  : `${product?.price} ₽`} */}
              </span>

              {/* {hasTopsFor || hasDopsFor || product?.size ? (
                <Button className={isAdditional && '!px-4 !h-[40px]'}>
                  Выбрать
                </Button>
              ) : product?.article === 9999 ? (
                <Button className={isAdditional && '!px-4 !h-[40px]'}>
                  Выбрать
                </Button>
              ) : (
                <CardBtn
                  itemAddedToCart={itemAddedToCart}
                  handleAddToCart={handleAddItemToCartFromArticle}
                />
              )} */}
            </div>
          </div>
        </article>

        {/* {!isMobile ? (
          <CardModal
            modalIsOpen={modalIsOpen}
            closeModal={closeModal}
            product={product}
          />
        ) : (
          <>
            {product?.article && product?.article === pizzasHalfArticle ? (
              <CardDrawerHalves
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                product={product}
              />
            ) : (
              <CardDrawer
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                product={product}
              />
            )}
          </>
        )}

        {!isMobile &&
          product?.article &&
          product?.article === pizzasHalfArticle && (
            <CardModalHalves
              modalIsOpen={modalIsOpen}
              closeModal={closeModal}
              product={product}
            />
          )} */}
      </>
    );
  }
);

CardItem.displayName = 'CardItem';
export { CardItem };
