import React from 'react';

import {PageHeader} from '../../components/PageHeader';
import {TeacherItem} from '../../components/TeacherItem';

import './styles.css';

export const TeacherList = () => {
    return (
        <div id="page-teacher-list" className="container" >
            <PageHeader title="Este são os Professores disponíveis">
               <form id="search-teacher">
                    <div className="input-block">
                        <label htmlFor="subject">Materia</label>
                        <input type="text" id="subject"/>
                    </div>

                    <div className="input-block">
                        <label htmlFor="week-day">Dia da semana</label>
                        <input type="text" id="week-day"/>
                    </div>

                    <div className="input-block">
                        <label htmlFor="time">Hora</label>
                        <input type="text" id="time"/>
                    </div>
               </form>
            </PageHeader>
                <main>
                    <TeacherItem/>
                    <TeacherItem/>
                </main>
        </div>
    )

}