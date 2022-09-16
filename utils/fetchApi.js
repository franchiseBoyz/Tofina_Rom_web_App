import axios from 'axios';


export const baseUrl = "https://bayut.p.rapidapi.com"


 export const fetchApi = async(url) => {
    const {data} = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': 'c83659363amsh24911ab7e683cbbp1492acjsnfa19e351a623',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }
    });

    return data;
 }