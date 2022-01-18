import { Routes, Route } from 'react-router-dom';
import Home from './components/shared/Home';
import NoMatch from './components/shared/NoMatch';

const App = () => (
  <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='*' element={<NoMatch />} />
    </Routes>
  </>
)

export default App;