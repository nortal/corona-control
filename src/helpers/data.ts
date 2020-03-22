import allHospitals from '../data/hospitals.json';

const getAllHospitals = () => allHospitals.sort((a, b) => (a.name > b.name) ? 1 : -1);

export default getAllHospitals;