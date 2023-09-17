
async function getWeatherData() {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=Jakarta&appid=37bcd6cddd1c7a984248311fc2e2dfd9&units=metric`);
    const data = await response.json();

    const dailyWeather = data.list.filter((item, index) => index % 8 === 0);

    dailyWeather.forEach((item) => {
      const date = new Date(item.dt * 1000);
      const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'short' });
      const dateOfDayMonth = date.toLocaleDateString('id-ID', {
        day: "numeric",
        month: "short",
        year: "numeric"
      })
      const temperature = item.main.temp;

      console.log(`${dayOfWeek}, ${dateOfDayMonth}: ${temperature}°C`);
    });
  } catch (error) {
    console.error('Terjadi kesalahan:', error);
  }
}
getWeatherData();
