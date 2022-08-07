import React from 'react';
import { Routes, Route } from "react-router-dom";
import { Inicio} from './Inicio';
import { TemasImportantes} from './TemasImportantes';
import { Contacto} from './Contacto';


function App() {
    return (
        <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="temas-importantes" element={<TemasImportantes />} />
            <Route path="contacto" element={<Contacto />} />
        </Routes>
    );
}

export default App;
