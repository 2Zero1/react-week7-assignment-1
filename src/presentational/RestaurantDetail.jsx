import React from 'react';

import MenuItems from 'presentational/MenuItems';
import Reviews from 'presentational/Reviews';
import ReviewFormContainer from 'container/ReviewFormContainer';

export default function RestaurantDetail({ restaurant, accessToken }) {
  const {
    id, name, address, menuItems, reviews,
  } = restaurant;

  return (
    <div>
      <h2>{name}</h2>
      <p>
        주소:
        {' '}
        {address}
      </p>
      <h3>메뉴</h3>
      <MenuItems menuItems={menuItems} />

      <h3>리뷰</h3>
      {accessToken && <ReviewFormContainer restaurantId={id} />}
      <Reviews reviews={reviews} />
    </div>
  );
}
