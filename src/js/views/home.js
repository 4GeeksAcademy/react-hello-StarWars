import React, { useState, useEffect, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Card from "../component/card";
import { Context } from "../store/appContext" //para ver las funciones de flux//


export const Home = () => {
	const { store, actions } = useContext(Context) //cada vez que quiero usar flux traer useContext, importar, traer {store,actions}// 
	// const {people} = store  si lo hicieramos asi le estamos diciendo "traeme solo el array de people"//
	useEffect(() => {
		actions.obtenerPersonajes()
	}
		, [])
	return <div className="text-center mt-5">
		<h1>Star Wars API Beli</h1>
		<h1 className="mt-4">characters</h1>
		<div className="d-flex flex-row overflow-scroll">
			{
				store.people.map((item, index) => {
					return (
						<Card key={index} name={item.name} uid={item.uid} />
					)
				})
			}
		</div>
	</div>
};
