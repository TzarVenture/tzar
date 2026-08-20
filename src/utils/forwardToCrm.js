export async function forwardToCrm(payload) {
  try {
    const crmUrl =
      process.env.CENTRAL_CRM_INGEST_URL ||
      process.env.TZAR_CRM_URL ||
      "https://tzar-crm.vercel.app/api/v1/ingest";
    const apiKey =
      process.env.TZAR_INGEST_API_KEY || "tzar_live_ingest_key_demo";

    const fullName =
      payload.fullName || payload.fullname || payload.name || "Anonymous";
    const email = payload.email || "";
    const phone = payload.phone || "";
    const city = payload.city || "";
    const country = payload.country || "India";

    let interestedServices = [];
    if (Array.isArray(payload.interestedServices)) {
      interestedServices = payload.interestedServices.filter(Boolean);
    } else if (payload.interestedServices || payload.services) {
      interestedServices = [payload.interestedServices || payload.services].filter(Boolean);
    }

    const requirementsMessage =
      payload.requirementsMessage || payload.message || payload.requirmentmsg || "";

    const bodyData = {
      business: "tzar",
      source: payload.source || "WEBSITE_CONTACT",
      fullName,
      email,
      phone,
      city,
      country,
      interestedServices,
      requirementsMessage,
      tzarData: payload.tzarData || {},
    };

    console.log(`Forwarding lead [${payload.source || "WEBSITE_CONTACT"}] to Central CRM...`);

    const response = await fetch(crmUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-tzar-api-key": apiKey,
      },
      body: JSON.stringify(bodyData),
    });

    if (!response.ok) {
      console.warn(
        `Central CRM Ingestion returned non-ok status: ${response.status} ${response.statusText}`
      );
    } else {
      console.log("Central CRM Ingestion Successful.");
    }

    const result = await response.json().catch(() => ({}));
    return result;
  } catch (crmErr) {
    console.error("Central CRM Ingestion Error:", crmErr?.message || crmErr);
    return null;
  }
}
