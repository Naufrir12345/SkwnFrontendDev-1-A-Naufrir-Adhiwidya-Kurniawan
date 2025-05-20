# SkwnFrontendDev-1-A

A React project built with Vite, showcasing a product slider integrated with the JSONPlaceholder API.

## Project Overview
This project is a front-end application built with React and Vite, featuring components like `Navbar`, `Hero`, `Product`, and more. The `Product` component displays a slider of products fetched from the JSONPlaceholder API (`https://jsonplaceholder.typicode.com/posts`) with placeholder images from `https://picsum.photos/`.

## Features
- Responsive product slider using Swiper.
- Data fetched dynamically from JSONPlaceholder API.
- Styled with Tailwind CSS for a modern, clean design.
- Navigation with custom arrow buttons using React Icons.

## How to Start Project

### Prerequisites
- **Node.js**: Version 16 or higher. Download from [nodejs.org](https://nodejs.org/).
- **Git**: Install from [git-scm.com](https://git-scm.com/).

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Naufrir12345/SkwnFrontendDev-1-A-Naufrir-Adhiwidya-Kurniawan.git
   ```
2. Navigate to the project folder:
   ```bash
   cd SkwnFrontendDev-1-A-Naufrir-Adhiwidya-Kurniawan
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Project
1. Start the development server:
   ```bash
   npm run dev
   ```
2. Open `http://localhost:5173` in your browser.

### Project Structure
- `src/`: Contains React components and source code.
- `src/components/`: Includes `Navbar`, `Hero`, `Product`, `Content`, etc.
- `public/`: Static assets like images.
- `Product.jsx`: Fetches and displays product data in a Swiper slider.

### Dependencies
- React
- Vite
- Swiper (for product slider)
- React Icons (for navigation arrows)
- Tailwind CSS (for styling)

### Notes
- The `Product` component uses the JSONPlaceholder API (`https://jsonplaceholder.typicode.com/posts`) to fetch product data.
- Placeholder images are sourced from `https://picsum.photos/` as JSONPlaceholder does not provide images.
- Prices in the `Product` slider are simulated (e.g., `$100`, `$110`, etc.) since JSONPlaceholder does not include price data.

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request with your changes.

## License
MIT License