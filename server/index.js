import {app} from "./app.js";
import {PORT} from "./config.js"
import connectToDB from "./db/index.js"

connectToDB()
.then(()=>{
    app.listen(PORT, () => {
        console.log(`Server app running on PORT ${PORT}`);
    })
})
.catch((error)=>{
    console.log("MongoDB Database Failed to connect! ", error);
})