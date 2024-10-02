import { StatesProvider } from '../providers/StatesProvider';
import { WorkspaceProvider } from '../providers/WorkspaceProvider';
import Home from './pages/home/Home'
import Workspace from './pages/workspace/Workspace'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <WorkspaceProvider>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route 
          path="/workspace" 
          element={
            <StatesProvider>
              <Workspace />
            </StatesProvider>
          } 
        />
      </Routes>
    </BrowserRouter>

    </WorkspaceProvider>
  )
}

export default App