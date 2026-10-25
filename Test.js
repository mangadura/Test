const fs = require("fs");
  if (fs.existsSync("vitima.txt")) {
     fs.unlinkSync("vitima.text");
   console.log("matemo o neguin");
 } else {
   console.log("fugiu");
 }
