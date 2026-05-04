/*
Design reminder — Neo-Brutalismo Cartográfico Corporativo: blanco operativo + negro institucional, acentos guinda/rojo derivados de marca, módulos tipo visor, coordenadas, retículas discretas y composición asimétrica de firma premium.
*/

import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import About from "./pages/About";
import Acquisition from "./pages/Acquisition";
import Home from "./pages/Home";
import StorageStudio from "./pages/StorageStudio";
function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/nosotros"} component={About} />
      <Route path={"/adquisicion"} component={Acquisition} />
      <Route path={"/admin/archivos"} component={StorageStudio} />
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
