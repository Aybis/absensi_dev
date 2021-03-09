export const storeData = async (key, value) => {
    try {
      //   convert data from object to string use stringify
      await localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      //saving error
    }
  };
  
  export const getData = async (key) => {
    try {
      const value = await localStorage.getItem(key);
      if (value !== null) {
        //value previously stored return data to object
        return JSON.parse(value);
      }
    } catch (error) {
      // error reading value
    }
  };
  
  export const removeData = async (key) => {
      try{
        await localStorage.removeItem(key);
      } catch (error) {

      // error reading value
      }
  }