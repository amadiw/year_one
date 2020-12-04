import React from "react";
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div>
    <nav>

    <Link className="link" to="/">Home</Link>
    <Link className="link" to="/movies">Search</Link>
    </nav>
    <main>
      <h1>
        Amadi's Movie Search
      </h1>
    </main>
    </div>
  );
}
