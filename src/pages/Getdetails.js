import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './CSS/GetDetails.css'; // Import your custom CSS for styling

function GetDetails() {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [currentTime, setCurrentTime] = useState(new Date());
    const [validationResult, setValidationResult] = useState(null);

    const handleGetCurrentTime = () => {
        if (startDate == null) {
            setStartDate(new Date());
        } else if (endDate == null) {
            setEndDate(new Date());
        }else {
            alert("You have already set the time");
        }

    };

    const handleValidateDates = () => {
        if (startDate && endDate && startDate <= endDate) {
            setValidationResult('Dates are correct.');
        } else {
            setValidationResult('Dates are not correct.');
        }
    };

    return (
        <div className="background">
            <div className="container mx-auto p-8">
                <div className="date-picker-top">
                    <div className="date-picker">
                        <label className="block mb-2 font-bold text-white" htmlFor="startDateTime">
                            Start Date & Time
                        </label>
                        <DatePicker
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            showTimeSelect
                            dateFormat="Pp"
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div className="date-picker">
                        <label className="block mb-2 font-bold text-white" htmlFor="endDateTime">
                            End Date & Time
                        </label>
                        <DatePicker
                            selected={endDate}
                            onChange={(date) => setEndDate(date)}
                            showTimeSelect
                            dateFormat="Pp"
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                        />
                    </div>
                </div>
                <div>
                    <button
                        type="button"
                        onClick={handleGetCurrentTime}
                        className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                    >
                        {startDate === null ? 'Set Start Date' : endDate === null ? 'Set End Date' : 'Auto mode'}
                    </button>
                    <button
                        type="button"
                        onClick={handleValidateDates}
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Validate Dates
                    </button>
                </div>
                <div className="selected-dates">
                    <input
                        type="text"
                        value={startDate ? `Selected Start Date & Time: ${startDate.toLocaleString()}` : 'Selected Start Date & Time: Not selected'}
                        readOnly
                        className="selected-input"
                    />
                    <input
                        type="text"
                        value={endDate ? `Selected End Date & Time: ${endDate.toLocaleString()}` : 'Selected End Date & Time: Not selected'}
                        readOnly
                        className="selected-input"
                    />
                    <input
                        type="text"
                        value={`Current Time: ${currentTime.toLocaleString()}`}
                        readOnly
                        className="selected-input"
                    />
                    <input
                        type="text"
                        value={`Validation Result: ${validationResult || 'Not validated'}`}
                        readOnly
                        className="selected-input"
                    />
                </div>
            </div>
        </div>
    );
}

export default GetDetails;
