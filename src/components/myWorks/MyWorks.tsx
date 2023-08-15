import React from 'react';
import s from './myWorks.module.scss';
import s_container from "../../common/styles/container.module.css";
import ExampleOfWork from "./exampleOfWork/ExampleOfWork";
import workPhoto1 from '../../common/img/EXEMPLEofWORK/my-socialnetwork.png';
import workPhoto2 from '../../common/img/EXEMPLEofWORK/ToDoList.png';
import {Zoom} from "react-awesome-reveal";

const MyWorks = () => {
    const hrefForTodo = 'https://ArtsiomChulc.github.io/RTK';
    const hrefForSNT = 'https://artsiomchulc.github.io/samurai-way-main/';
    return (
        <div id='myWorks' className={s.myWorksBlock}>
            <h2 className={s.title}>My works</h2>
            <div className={`${s_container.container} ${s.container}`}>
                <Zoom>
                    <ExampleOfWork
                        photo={workPhoto1}
                        nameProject={"Example social network"}
                        description={"A number of useful libraries were used in this social network project: " +
                            "Formik - for managing forms and validating data. This allows you to work efficiently with forms in React. " +
                            "react-router-dom - for routing in a React single page app. Allows you to organize navigation between pages/components. " +
                            "axios - for making HTTP requests to the server. This simplifies integration with the backend. " +
                            "react-redux - for centralized application state management through Redux. " +
                            "Implements the Flux pattern and fixes the problem with passing data between components. " +
                            "The use of these libraries made it possible to successfully solve such problems as: Form validation and processing\n" +
                            "Routing\n" +
                            "Making AJAX Requests\n" +
                            "Centralized storage and updating of state\n" +
                            "Thus, the selected tools helped to simplify the development and improve the quality of the social network project."}
                        href = {hrefForSNT}
                    />
                </Zoom>
                <Zoom>
                    <ExampleOfWork
                        photo={workPhoto2}
                        nameProject={"Todolist project"}
                        description={"In this application (todo list), the following main technologies and libraries were used:\n" +
                            "\n" +
                            "React is the main library for creating a SPA application.\n" +
                            "\n" +
                            "@mui/material is a popular Material UI library for creating visual components. Allowed to provide high-quality interface design.\n" +
                            "\n" +
                            "Formik is a library for managing forms in React. Used to create and process the form for adding/editing list items.\n" +
                            "\n" +
                            "@reduxjs/toolkit - A toolkit for developing with Redux. Allowed to centrally store and update the state of the application.\n" +
                            "\n" +
                            "Axios is a library for making http requests. Used to interact with the backend API. Thus, these libraries allowed:\n" +
                            "\n" +
                            "    Create a high-quality and user-friendly interface using Material UI\n" +
                            "\n" +
                            "Organize data entry and validation using Formik\n" +
                            "\n" +
                            "Centrally store and update application state via Redux\n" +
                            "\n" +
                            "Make requests to the server using Axios\n" +
                            "\n" +
                            "Which ultimately ensured the successful implementation of a functional todo-list application in React."}
                        href = {hrefForTodo}
                    />
                </Zoom>
            </div>
        </div>
    );
};

export default MyWorks;

