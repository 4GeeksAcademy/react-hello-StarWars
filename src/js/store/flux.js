import CardVehicles from "../component/cardvehicles";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [], //indicamos el nombre del store y con corchetes le indicamos que es un array vacio//
			vehicles: [],
		},
		actions: {


			obtenerPersonajes: async () => {
				try {
					const response = await fetch("https://www.swapi.tech/api/people")
					const data = await response.json() //Transforma la info que llega del fetch en un objeto json//
					setStore({ people: data.results }) //para que guarde en store para verlo de todos los archivos//
				} catch (error) {
					console.log(error)
					return false
				}
			},
			obtenerPlanetas: async () => {
				try {
					const response = await fetch("https://www.swapi.tech/api/planets")
					const data = await response.json() //Transforma la info que llega del fetch en un objeto json//
					setStore({ planets: data.results }) //para que guarde en store para verlo de todos los archivos//
				} catch (error) {
					console.log(error)
					return false
				}
			},
			obtenerVehiculos: async () => {
				try {
					const response = await fetch("https://www.swapi.tech/api/vehicles")
					const data = await response.json() //Transforma la info que llega del fetch en un objeto json//
					setStore({ vehicles: data.results }) //para que guarde en store para verlo de todos los archivos//
				} catch (error) {
					console.log(error)
					return false
				}
			},

		}
	};
};

export default getState;

