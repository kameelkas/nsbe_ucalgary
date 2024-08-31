import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const colors = {
  brand: {
    NSBEYellow: '#fff200',
    NSBEGreen: '#2eb457',
    NSBERed: '#ed1c2e',
    NSBEBlack: '#231f20'
  },
}

const theme = extendTheme({ colors })

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <ChakraProvider theme={theme}>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
        </Routes>
      
    </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
