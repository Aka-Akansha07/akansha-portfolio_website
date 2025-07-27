/* style.css */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.6;
}

header {
  background: #282c34;
  color: white;
  padding: 1rem;
  text-align: center;
}

nav ul {
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  gap: 2rem;
}

nav a {
  color: white;
  text-decoration: none;
}

section {
  padding: 2rem;
}

.project-card {
  background: #f0f0f0;
  margin: 1rem 0;
  padding: 1rem;
  border-radius: 5px;
}

/* 🔄 Responsive Design */
@media (max-width: 768px) {
  nav ul {
    flex-direction: column;
    gap: 1rem;
  }

  body {
    padding: 0 1rem;
  }
}
