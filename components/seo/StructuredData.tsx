import React from "react";

export function StructuredData() {
    const organizationData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Bregalia",
        url: "https://bregalia.es",
        logo: "https://bregalia.es/logo-land.svg",
        description: "Solución completa para el registro de jornada y gestión de equipos.",
    };

    const softwareApplicationData = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "Bregalia",
        operatingSystem: "Web",
        applicationCategory: "BusinessApplication",
        offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "EUR",
        },
        description: "Plataforma de control horario y gestión de equipos para empresas.",
        featureList: [
            "Fichaje digital",
            "Gestión de turnos",
            "Control de vacaciones",
            "Informes oficiales para inspección",
            "Geolocalización",
        ],
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationData) }}
            />
        </>
    );
}
