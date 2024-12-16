const provinceSelect = document.getElementById('provinces');
const citySelect = document.getElementById('city');

const provinces = {
    almeria: ['Almería', 'Roquetas de Mar', 'El Ejido', 'Níjar', 'Vera'],
    cadiz: [
        'Cádiz',
        'Jerez de la Frontera',
        'Algeciras',
        'San Fernando',
        'Chiclana de la Frontera',
    ],
    cordoba: ['Córdoba', 'Lucena', 'Puente Genil', 'Montilla', 'Pozoblanco'],
    granada: ['Granada', 'Motril', 'Almuñécar', 'Baza', 'Maracena'],
    huelva: ['Huelva', 'Lepe', 'Ayamonte', 'Almonte', 'Valverde del Camino'],
    jaen: ['Jaén', 'Andújar', 'Úbeda', 'Linares', 'Baeza'],
    malaga: ['Málaga', 'Marbella', 'Ronda', 'Torremolinos', 'Fuengirola'],
    sevilla: [
        'Sevilla',
        'Alcalá de Guadaíra',
        'Dos Hermanas',
        'Coria del Río',
        'Mairena del Aljarafe',
    ],
};

provinceSelect.addEventListener('input', () => {
    const cities = [...citySelect];
    cities.forEach((city) => city.remove());

    if (provinceSelect.value === 'huelva') {
        provinces.huelva.forEach((city) => {
            const cityList = document.createElement('option');
            cityList.value = city;
            cityList.textContent = city;
            citySelect.appendChild(cityList);
        });
    }
});
