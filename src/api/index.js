import axios from "axios";

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

const options = {
  params: {
    bl_latitude: '11.847676',
    tr_latitude: '12.838442',
    bl_longitude: '109.095887',
    tr_longitude: '109.149359',
    
  },
  headers: {
    'X-RapidAPI-Key': '7904ddccf4msh1d487968a36450dp12492fjsnb4a82e52fa1c',
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
  }
};



// defined the functions to call the api
export const getPlacesData = async () => {
    try {
        const {data: { data }} = await axios.get(URL, options);

        return data
        
    } catch (error) {
        console.log(error)
    }
}