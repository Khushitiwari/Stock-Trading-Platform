
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Hero from '../landing_page/home/Hero.jsx'



describe('Hero component', () => {
  test('renders hero image', () => {
    render(<Hero />);
    const heroImage = screen.getByAltText('hero');
    expect(heroImage).toBeInTheDocument();
    expect(heroImage).toHaveAttribute("src", '/src/assets/homeHero.png');
  });

   test('renders signup button ', () => {
    render(<Hero />);
    const singupButton = screen.getByRole('button' , {name :/Sign up for free/i});
    expect(singupButton).toBeInTheDocument();
    expect(singupButton).toHaveClass("btn-primary");
  });
});