import React from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

import './styles.css';

import Input from '../../components/Input';
import Select from '../../components/Select';



function TeacherList() {
    return (
        <div id="page-teachers-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis.">
                <form id="search-teachers">
                    <Select name="subject" label="Matéria" options={[
                        { value: 'Eletrônica', label: 'Eletrônica' },
                        { value: 'Eletricidade', label: 'Eletricidade' },
                        { value: 'Robótica', label: 'Robótica' },
                        { value: 'Programação', label: 'Programação' },
                        { value: 'IOT', label: 'IOT' },
                    ]}
                    />

                    <Select name="week-day" label="Dia da semana" options={[
                        { value: '0', label: 'Domingo' },
                        { value: '1', label: 'Segunda-feira' },
                        { value: '2', label: 'Terça-feira' },
                        { value: '3', label: 'Quarta-feira' },
                        { value: '4', label: 'Quinta-feira' },
                        { value: '5', label: 'Sexta-feira' },
                        { value: '6', label: 'Sábado' },
                    ]}
                    />


                    <Input name="time" label="Hora" />

                </form>
            </PageHeader>

            <main>
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </main>
        </div>
    )
}

export default TeacherList;