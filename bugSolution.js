```javascript
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} >
          <Route path=":id" element={<ContactDetail/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function Home() { return <h1>Home</h1>; }
function About() { return <h1>About</h1>; }
function Contact() { 
  const location = useLocation();
  // Check if there is a nested :id parameter
  const hasIdParam = location.pathname.includes('/contact/');
  return (
    <h1>Contact</h1>
    {hasIdParam ? <p>Loading...</p> : null}
  );
}
function ContactDetail() { return <h1>Contact Detail</h1>; }
export default App; 
```