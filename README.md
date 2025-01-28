# World Data Dashboard

This repository contains a **React** application that visualizes various global metrics, such as life expectancy, using interactive maps and charts. The project is a **work in progress** and aims to serve as a comprehensive tool for global data analysis and visualization.

The project is hosted online at [World Data Dashboard](http://aging.wiki/longstate/).

---

## Features

- **Interactive World Map**:
  - Displays country-level metrics in a color-coded format for easy visualization.

- **Customizable Metrics**:
  - Users can adjust various metrics through sliders, remove or add new metrics. Right now it has no effect on demo.

- **Charts**:
  - **Bar Chart**: Displays the top-performing regions based on the integral metric.
  - **Radar Chart**: Provides a multi-dimensional view of key metrics for selected regions.

- **Frontend**:
  - Developed using **React** and powered by **Vite**.

- **Hosting**:
  - The application is hosted on an **Apache** server, with **Nginx** acting as a reverse proxy to efficiently manage incoming traffic and forward it to the Apache server.

---

## Installation and Setup

### Prerequisites
Ensure you have the following installed:
- **Node.js** (v16 or later)
- **npm**

### Steps to Run Locally
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/world-data-dashboard.git
   cd world-data-dashboard
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open the application in your browser at [http://localhost:5173](http://localhost:5173).

---

## Deployment

### Build for Production
To build the application for production:
```bash
npm run build
```

The output files will be in the `dist/` directory.

### Hosting
The application is currently hosted on an **Apache** server, with **Nginx** acting as a reverse proxy. The deployment process involves transferring the contents of the `dist/` directory to the server's document root.

---

## Current Status

The project is a **work in progress**, and some functionality may not yet be implemented. Planned features include:
- **Dynamic metric selection**: Ability to fetch and visualize additional datasets.
- **Region comparisons**: Enhanced radar charts for multi-region analysis.
- **User customization**: Saving and loading user-defined metric weights.

---

## Technologies Used

- **Frontend**: React, Vite
- **Charts and Maps**: Leaflet.js, D3.js
- **Hosting**: Apache and Nginx
- **Styling**: CSS3 and custom components

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
