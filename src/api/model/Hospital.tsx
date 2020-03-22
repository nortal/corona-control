interface Hospital {
    id: string;
    name: string;
    address: string;
    street: string;
    houseNumber: string;
    zipCode: string;
    city: string;
    latitude: number;
    longitude: number;
    phone?: string;
    picture?: string;
}

export default Hospital;
