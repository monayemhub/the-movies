# The Movies 🎬

A modern movie catalogue web application, showcasing a curated collection of cinema classics and top-rated films.

### [Live link](https://the-movies-ashy.vercel.app/)

## ✨ Features

- **Curated Movie Collection**: Browse top-rated films featuring titles, directors, release years, ratings, and high-quality posters.
- **Responsive Design**: Mobile-first layout with smooth transitions into multi-column grid views on larger screens.
- **Image Optimization**: Utilizes `next/image` with responsive sizing and base64 placeholders for fast load times.
- **Modern Typography**: Styled with the Bebas Neue font via `next/font/google`.
- **Next.js React Compiler**: Enabled for automatic memoization and optimal rendering performance.
- **SEO & Metadata Ready**: Comprehensive metadata configuration including custom favicons and keywords.

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Library**: [React](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Linting**: [ESLint](https://eslint.org/)

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v20+ recommended) and `npm` installed.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/monayemhub/the-movies.git
   cd the-movies
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## 📜 Available Scripts

| Command         | Description                                              |
| :-------------- | :------------------------------------------------------- |
| `npm run dev`   | Starts the Next.js development server with hot-reloading |
| `npm run build` | Builds the application for production deployment         |
| `npm start`     | Runs the compiled production build                       |
| `npm run lint`  | Runs ESLint to inspect code for errors and conventions   |

## 📁 Project Structure

```text
the-movies/
├── public/                 # Static assets (logo, favicon)
├── src/
│   ├── app/
│   │   ├── globals.css     # Global CSS and Tailwind imports
│   │   ├── layout.tsx      # Root layout, metadata & font setup
│   │   ├── page.tsx        # Homepage movie listing
│   │   └── ui/
│   │       └── movie-card.tsx # Movie item display component
│   ├── data/
│   │   └── movie-data.ts   # Curated list of movie entries
│   └── types/
│       └── movie.ts        # TypeScript interface for Movie objects
├── next.config.ts          # Next.js configuration & image remote patterns
├── package.json            # Project dependencies and scripts
├── tsconfig.json           # TypeScript configuration
└── README.md               # Project documentation
```

## 👤 Author

**Monayem Kabir Khan**

## 📄 License

This project is private and intended for personal/showcase use.
