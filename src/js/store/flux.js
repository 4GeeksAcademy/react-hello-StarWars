const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [] //indicamos el nombre del store y con corchetes le indicamos que es un array vacio//
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

		}
	};
};

export default getState;
