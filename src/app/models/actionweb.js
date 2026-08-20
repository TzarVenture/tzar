"use server"
import dbConn from "@/utils/dbConn";
import Contact from "@/models/webdev";
import { forwardToCrm } from "@/utils/forwardToCrm";

export const submitContact = async (data) =>{
    try{

        await dbConn();
        await Contact.create(data);

        // Forward to Central CRM
        const servicesList = [
            data.websitesdevelopment,
            data.socialmedia,
            data.perfomancemarketing,
            data.influencermarketing,
            data.brandmarketing,
            data.searchengineoptimization,
            data.productshoot,
            data.animation,
            data.logodesign,
            data.productpackaging,
        ].filter(Boolean);

        await forwardToCrm({
            source: "WEBDEV_ENQUIRY",
            fullName: data.fullname || data.name,
            email: data.email,
            phone: data.phone,
            city: data.city || "",
            country: data.country || "India",
            interestedServices: servicesList,
            requirementsMessage: data.requirmentmsg || "",
            tzarData: {
                formType: "WEBDEV",
                domain: data.domain || "",
            },
        });

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