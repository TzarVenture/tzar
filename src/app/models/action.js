"use server"
import dbConn from "@/utils/dbConn";
import Contact from "@/models/contact";
import { forwardToCrm } from "@/utils/forwardToCrm";

export const submitContact = async (data) =>{
    try{

        await dbConn();
        await Contact.create(data);

        // Forward to Central CRM
        await forwardToCrm({
            source: "WEBSITE_CONTACT",
            fullName: data.fullname || data.name,
            email: data.email,
            phone: data.phone,
            city: data.city || "",
            country: data.country || "India",
            interestedServices: data.services ? [data.services] : [],
            requirementsMessage: data.message || "",
            tzarData: {
                formType: "CONTACT",
                checkbox: data.checkbox || "",
            },
        });

        return{ status:"OK", message:"Message sent successfully!"};

    }catch(e){
        return{ status:"ERROR", message:"Server error, please try again!"};

    }
}

// "use server"
// import dbConn from "@/utils/dbConn";
// import Contact from "@/models/contact";

// export const submitContact = async (data) => {
//   try {
//     await dbConn();
//     console.log("Incoming data:", data);
//     const result = await Contact.create(data);
//     console.log("Saved contact:", result);
//     return { status: "OK", message: "Message sent successfully!" };
//   } catch (e) {
//     console.error("Error saving contact:", e);
//     return { status: "ERROR", message: e.message };  // 👈 don’t hide it
//   }
// };
