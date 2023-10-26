import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const BarrasBusqueda = () => {
    const [location, setLocation] = useState('');
    const [selectedDate, setSelectedDate] = useState(null);
  
    const handleLocationChange = (e) => {
      setLocation(e.target.value);
    };
  
    const handleDateChange = (date) => {
      setSelectedDate(date);
    };
  
    const handleButtonClick = () => {
      // Realiza la acción que desees con los datos ingresados
      console.log("Ubicación:", location);
      console.log("Fecha:", selectedDate);
    };
  
    return (
      <div>
        <div>
          <label>Ubicación:</label>
          <input type="text" value={location} onChange={handleLocationChange} />
        </div>
        <div>
          <label>Fecha:</label>
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            dateFormat="dd/MM/yyyy"
            isClearable
            placeholderText="Selecciona una fecha"
          />
        </div>
        <button onClick={handleButtonClick}>Buscar</button>
      </div>
    )
}

export default BarrasBusqueda