import { createBrowserRouter } from "react-router-dom";
import Home from "../page/Home/Home";
import About from "../page/About/About";
import Main from "../layout/Main";
import Article from "../page/Article/Article"
import Contacts from "../page/Contacts/Contacts"
import Projects from "../page/Projects/Projects"
import Resume from "../page/Resume/Resume"
import StudyNote from "../page/StudyNote/StudyNote"
import ErrorPage from "../page/ErrorPage/ErrorPage";
import Skills from "../page/Skills/Skills";
import Experience from "../page/Experience/Experience";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/about", element: <About /> },
            { path: "/article", element: <Article /> },
            { path: "/contacts", element: <Contacts /> },
            { path: "/projects", element: <Projects /> },
            { path: "/resume", element: <Resume /> },
            { path: "/studynote", element: <StudyNote /> },
            { path: "/skills", element: <Skills /> },
            { path: "/experience", element: <Experience /> },

        ],
    },


]);

