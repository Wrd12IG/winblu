export interface Store {
    id: number;
    name: string;
    address: string;
    city: string;
    zip: string;
    lat: number;
    lng: number;
    phone?: string;
    email?: string;
}

export const stores: Store[] = [
    {
        id: 1,
        name: "FP INFORMATICA DI BELOTTI PATRICIA E C. SNC",
        address: "VIA CROCIFISSO, 47",
        city: "BERGAMO",
        zip: "24123",
        lat: 45.6983,
        lng: 9.6773,
        phone: "035 123456",
        email: "info@fpinformatica.it"
    },
    {
        id: 2,
        name: "IT CONSULTING SRL",
        address: "VIA DON MAZZUCOTELLI, 6",
        city: "GORLE",
        zip: "24020",
        lat: 45.7042,
        lng: 9.7196,
        phone: "035 654321",
        email: "contact@itconsulting.it"
    },
    {
        id: 3,
        name: "OTTOBIT SRL",
        address: "VIA ROMA, 10",
        city: "MILANO",
        zip: "20121",
        lat: 45.4642,
        lng: 9.1900,
        phone: "02 87654321",
        email: "info@ottobit.it"
    },
    {
        id: 4,
        name: "LABTEC SRL",
        address: "VIA VERDI, 25",
        city: "BRESCIA",
        zip: "25121",
        lat: 45.5416,
        lng: 10.2118,
        phone: "030 987654",
        email: "support@labtec.it"
    },
    {
        id: 5,
        name: "DIGITAL WORLD",
        address: "CORSO ITALIA, 100",
        city: "ROMA",
        zip: "00186",
        lat: 41.9028,
        lng: 12.4964,
        phone: "06 12345678",
        email: "sales@digitalworld.it"
    }
];
