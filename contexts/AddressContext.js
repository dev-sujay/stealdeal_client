import React, { createContext, useContext, useState } from 'react';

// Create Address Context
const AddressContext = createContext();

// Custom hook to use the Address Context
export const useAddress = () => {
    return useContext(AddressContext);
};

// Address Provider component
export const AddressProvider = ({ children }) => {
    const [addresses, setAddresses] = useState([
        {
            id: 1,
            address: 'Mp/A 29, Mondol Parara, Keshtopur, Kolkata, West Bengal, 700102',
            isCurrent: true
        },
        {
            id: 2,
            address: 'Rajarhat, Kolkata, West Bengal, 700102',
            isCurrent: false
        },
        {
            id: 3,
            address: 'RDB Boulevard, Sector V, Salt Lake City, Kolkata, West Bengal, 700102',
            isCurrent: false
        }
    ]);

    const updateAddress = (selectedAddress) => {
        setAddresses((prevAddresses) =>
            prevAddresses.map((address) =>
                address.id === selectedAddress.id ? { ...address, isCurrent: true } : { ...address, isCurrent: false }
            )
        );
    };

    return (
        <AddressContext.Provider value={{ addresses, updateAddress }}>
            {children}
        </AddressContext.Provider>
    );
};
