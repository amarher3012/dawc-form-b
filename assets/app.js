const provinceSelect = document.getElementById('provinces');
const citySelect = document.getElementById('cities');

const provinces = {
	Almería: ['Almería', 'Roquetas de Mar', 'El Ejido', 'Níjar', 'Vera'],
	Cádiz: [
		'Cádiz',
		'Jerez de la Frontera',
		'Algeciras',
		'San Fernando',
		'Chiclana de la Frontera',
	],
	Córdoba: ['Córdoba', 'Lucena', 'Puente Genil', 'Montilla', 'Pozoblanco'],
	Granada: ['Granada', 'Motril', 'Almuñécar', 'Baza', 'Maracena'],
	Huelva: ['Huelva', 'Lepe', 'Ayamonte', 'Almonte', 'Valverde del Camino'],
	Jaén: ['Jaén', 'Andújar', 'Úbeda', 'Linares', 'Baeza'],
	Málaga: ['Málaga', 'Marbella', 'Ronda', 'Torremolinos', 'Fuengirola'],
	Sevilla: [
		'Sevilla',
		'Alcalá de Guadaíra',
		'Dos Hermanas',
		'Coria del Río',
		'Mairena del Aljarafe',
	],
	// Add more provinces here
};

// Renders provinces
Object.keys(provinces).forEach((province) => {
	const provinceList = document.createElement('option');
	provinceList.value = province;
	provinceList.textContent = province;
	provinceSelect.appendChild(provinceList);
});

// Renders cities depending on province selection
provinceSelect.addEventListener('input', () => {
	const cities = [...citySelect];
	cities.forEach((city) => {
		// Optional check to keep the default value in
		if (city.value !== 'default') {
			city.remove();
		}
	});

	provinces[provinceSelect.value].forEach((city) => {
		const cityList = document.createElement('option');
		cityList.value = city;
		cityList.textContent = city;
		citySelect.appendChild(cityList);
	});
});
