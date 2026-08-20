"use server"
import dbConn from "@/utils/dbConn";
import Contact from "@/models/hireus";
import { forwardToCrm } from "@/utils/forwardToCrm";

export const submitContact = async (data) =>{
    try{

        await dbConn();
        await Contact.create(data);

        // Forward to Central CRM
        await forwardToCrm({
            source: "HIRE_US",
            fullName: data.fullName || data.fullname || data.name,
            email: data.email,
            phone: data.phone,
            interestedServices: data.internshipType ? [data.internshipType] : [],
            requirementsMessage: `Internship/Hire: ${data.internshipType || "N/A"}${data.resume ? ` | Resume: ${data.resume}` : ""}`,
            tzarData: {
                formType: "HIRE_US",
                resumeUrl: data.resume || "",
            },
        });

        return{ status:"OK", message:"Message sent successfully!"};

    }catch(e){
        return{ status:"ERROR", message:"Server error, please try again!"};

    }
}


// "use server"
// import dbConn from "@/utils/dbConn";
// import Contact from "@/models/hireus";

// export const submitContact = async (data) =>{
//     try{

//         await dbConn();
//         await Contact.create(data);
//         return{ status:"OK", message:"Message sent successfully!"};

//     }catch(e){
//         return{ status:"ERROR", message:"Server error, please try again!"};

//     }
// }