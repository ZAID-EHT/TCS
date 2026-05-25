/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ReactLenis } from 'lenis/react';

import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { ExpertisePage } from "./pages/ExpertisePage";
import { EstimatePage } from "./pages/EstimatePage";

export default function App() {
  return (
    <ReactLenis root>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="expertise" element={<ExpertisePage />} />
            <Route path="estimate" element={<EstimatePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ReactLenis>
  );
}

