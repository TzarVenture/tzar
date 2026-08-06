"use server"
import dbConn from "@/utils/dbConn";
import Contact from "@/models/webdev";

export const submitContact = async (data) =>{
    try{

        await dbConn();
        await Contact.create(data);
        return{ status:"OK", message:"Message sent successfully!"};

    }catch(e){
        return{ status:"ERROR", message:"Server error, please try again!"};

    }
}

// "use server"
// import dbConn from "@/utils/dbConn";
// import Contact from "@/models/webdev";

// export const submitContact = async (data) =>{
//     try{

//         await dbConn();
//         await Contact.create(data);
//         return{ status:"OK", message:"Message sent successfully!"};

//     }catch(e){
//         return{ status:"ERROR", message:"Server error, please try again!"};

//     }
// }