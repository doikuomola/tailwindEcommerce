import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Header } from './components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomeScreen, ProductScreen } from './screens';

export default function App() {
  return (
    <BrowserRouter>
      <div className="container mx-auto">
        <Helmet>
          <title>Hello World</title>
        </Helmet>
        <header>
          <Header />
        </header>

        <main className="mt-20 mx-auto">
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/product" element={<ProductScreen />} />
          </Routes>
        </main>

        <footer></footer>
      </div>
    </BrowserRouter>
  );
}
