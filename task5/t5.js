const apiKey = "eafc16fd2e88cc2852848b3f241f7fa7"; // replace with your real key

async function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  const weatherCard = document.getElementById("weatherCard");
  const locationText = document.getElementById("location");
  const tempText = document.getElementById("temperature");
  const descText = document.getElementById("description");

  if (!city) {
    alert("Please enter a city name");
    return;
  }

  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`
    );
    const data = await res.json();

    console.log(data); // ← For debugging

    if (data.cod === 200) {
      locationText.textContent = `${data.name}, ${data.sys.country}`;
      tempText.textContent = `Temperature: ${data.main.temp}°C`;
      descText.textContent = `Weather: ${data.weather[0].description}`;
      weatherCard.style.display = "block";
    } else {
      alert(`City not found! (${data.message})`);
    }
  } catch (error) {
    console.error("Error:", error);
    alert("Error fetching weather. Please try again.");
  }
}

