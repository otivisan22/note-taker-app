const getFromDb = require("../utils/getFromDb");
const writeToDb = require("../utils/writetoDb");

const deleteNote =
  (req, res) => {
    const data = JSON.parse(getFromDb());
    const id = req.params.id;
    const newData = data.filter((each){
      return each.id === id 
    });
   
    writeToDb(newData);
    res.json(newData);
  };
    
  
