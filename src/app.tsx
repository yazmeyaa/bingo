import AppProviders from "./components/appProviders";
import Template from "./components/template";
import Router from "./router/router";

export default function App() {
    return (
        <AppProviders>
            <Template>
                <Router />
            </Template>
        </AppProviders>
    )
}