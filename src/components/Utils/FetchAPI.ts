export const fetchLocalAPI = async () =>{
    const BASE_URL = "/Galleria-slideshow-site";
    try {
      const response = await fetch(`${BASE_URL}/data.json`);
      console.log({
        'Your response is': response});
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        console.log({
            'Your jsonData is': jsonData});
        return jsonData;
      } catch (error) {
        console.error('Error fetching data:', error);
        return [];
      }
  }