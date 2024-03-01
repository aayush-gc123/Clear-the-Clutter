
import fs from "fs/promises"
import fsn from "fs"
import path from "path"

const mainpath = "D:\\clear the clutter";

let files = await fs.readdir(mainpath)

for (const item of files) {
    console.log("running for ", item)
    let ext = item.split(".")[item.split(".").length - 1]
    if (ext != "js" && ext != "json" && ext != "MD" && item.split(".").length > 1) {


        if (fsn.existsSync(path.join(mainpath, ext))) {
            // Move the file to this directory if its not a js or json file
            fs.rename(path.join(mainpath, item), path.join(mainpath, ext, item))
        }
        else {
            fs.mkdir(ext)
            fs.rename(path.join(mainpath, item), path.join(mainpath, ext, item))
        }
    }

}



// import fs from "fs/promises";
// import fsn from "fs"
// import path from "path";

// let files = await fs.readdir("D:\\clear the clutter");

// const basepath = "D:\\clear the clutter";


// for (const items of files) {
//     let ext = items.split(".")[items.split(".").length - 1]
//     console.log(ext)
//     if (ext != "js" && ext != "json" && items.split(".").length > 1) {

//         if (fsn.existsSync(path.join(basepath, ext))) {
//             // move files to the directory if its not a js or json file
//             fs.rename( path.join(basepath, items), path.join(basepath, ext, items))
//         }
//         else {
//             fs.mkdir(ext)
//             fs.rename(items.toString(), path.join(basepath, items), path.join(basepath, ext, items))
//         }
//     }

// }