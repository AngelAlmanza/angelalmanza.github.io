const cities = [
  {
    city: "Barcelona",
    timezone: "Europe/Madrid"
  },
  {
    city: "La Paz",
    timezone: "America/Mazatlan"
  },
  {
    city: "Ciudad de México",
    timezone: "America/Mexico_City"
  ,}
];

export const getDates = (baseDate) => {
  const dates = cities.map(city => {
    const options = {
      timeZone: city.timezone,
      hour12: true
    };
    return {
      city: city.city,
      date: baseDate.toLocaleTimeString('es-MX', options),
      dateObject: new Date(baseDate.toLocaleString('en-US', { timeZone: city.timezone }))
    };
  });
  return dates;
};
