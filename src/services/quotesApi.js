export const getQoute=async()=>{


    try {

        const response= await fetch(`http://quotes.rest/qod.json?category=inspire`);
        const data=await response.json();
        return data;
      
        
    } catch (error) {
        console.error(error);
    }

}