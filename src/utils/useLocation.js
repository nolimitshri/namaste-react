import {useState, useEffect} from 'react'

const useLocation = () => {

    const [coordinates, setCoordinates] = useState(null);
    const [city, setCity] = useState('');

    useEffect(() => {
        // Function to get user's location
        const getUserLocation = async () => {
          if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(
              (position) => {
                const { latitude, longitude } = position.coords;
                setCoordinates({ latitude, longitude });
              },
              (error) => {
                console.error('Error getting user location:', error);
              }
            );
          } else {
            console.log('Geolocation not available in this browser.');
          }
        };
    
        getUserLocation();
      }, []);


      
      const fetchCityFromCoordinates = async (latitude, longitude) => {
        // Call your API to get city based on coordinates
        // Update the 'city' state
      };
    
      useEffect(() => {
        if (coordinates) {
          fetchCityFromCoordinates(coordinates.latitude, coordinates.longitude);
        }
      }, [coordinates]);

    return {city, coordinates};
}

export default useLocation