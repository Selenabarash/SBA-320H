// src/components/BeerList.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBeers } from '../redux/beerSlice';

const BeerList = () => {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.beers);

  useEffect(() => {
    dispatch(fetchBeers());
  }, [dispatch]);

  if (loading) return <p>Loading beers...</p>;
  if (error) return <p>Error loading beers: {error}</p>;

  return (
    <div className="beer-list">
      {items.map((beer) => (
        <div key={beer.id} className="beer-item">
          <img src={beer.image_url} alt={beer.name} style={{ width: '50px' }} />
          <h2>{beer.name}</h2>
          <p>{beer.tagline}</p>
        </div>
      ))}
    </div>
  );
};

export default BeerList;
