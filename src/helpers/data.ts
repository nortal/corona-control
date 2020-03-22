import allHospitals from '../data/hospitals.json';

const getAllHospitals = () => allHospitals.sort((a, b) => (a.name > b.name) ? 1 : -1);
const getHospitalById = (id: string) => allHospitals.find(hospital => hospital.id === id);

export { getAllHospitals, getHospitalById };
