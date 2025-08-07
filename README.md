# 🧭 AI Travel Planner

The **AI Travel Planner** is a full-stack web application that helps users generate personalized travel itineraries based on their preferences, dates, budget, and interests. It uses Google Maps API for location autocomplete and geocoding, and dynamically renders a tailored day-by-day itinerary.

---

## 🛠 Features

- 🌍 Destination autocomplete with Google Places API
- 📆 Intelligent trip duration calculation
- 🧳 Add multiple travelers with demographics
- 🎯 Select interests, budget, transport, accommodation, and food preferences
- 🧾 Generates a custom itinerary with day-wise activities
- 📌 Map preview with markers using Leaflet.js
- 🌤 Weather widget support (optional)
- 💬 Feedback form and star rating system

---

## 🚀 Live Demo

*(Add your deployed app link here if hosted on platforms like Vercel, Netlify, or Render)*

---

## 📁 Project Structure

```
.
├── app.py               # Flask backend
├── templates/
│   └── index.html       # Main frontend page
├── static/
│   ├── style.css        # Styles
│   └── script.js        # JavaScript logic
├── .env                 # API keys and environment variables
└── README.md            # This file
```

---

## 📦 Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/ai-travel-planner.git
cd ai-travel-planner
```

### 2. Create a Virtual Environment
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

### 3. Install Dependencies
```bash
pip install -r requirements.txt
```

> **Note:** If `requirements.txt` is missing, create it:
```bash
pip install flask python-dotenv requests
pip freeze > requirements.txt
```

### 4. Set Environment Variables
Create a `.env` file and add your Google Maps API key:
```
GMAPS_API_KEY=your_google_maps_api_key
```

---

## 🧪 Run the App Locally

```bash
flask run
```

Access the app at: [http://localhost:5000](http://localhost:5000)

---

## 🌐 API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/` | GET | Home page |
| `/api/places-autocomplete?query=` | GET | Fetch location suggestions |
| `/api/place-details?place_id=` | GET | Get place coordinates |
| `/generate-plan` | POST | Generate itinerary based on form input |

---

## 🧰 Tech Stack

- **Backend**: Flask (Python)
- **Frontend**: HTML, CSS, JavaScript
- **APIs**: Google Maps Places API, Leaflet (map rendering)
- **Utilities**: Axios (API calls), .env for environment management

---

## 📌 Future Enhancements

- Integrate OpenWeatherMap API for real-time weather info
- Add user authentication
- Store feedback in a database
- Support for multi-destination planning

---

## 📄 License

MIT License. See [LICENSE](LICENSE) file for details.

---

## 🙌 Acknowledgements

- [Google Maps Platform](https://developers.google.com/maps)
- [Leaflet.js](https://leafletjs.com/)
- [Flask](https://flask.palletsprojects.com/)
