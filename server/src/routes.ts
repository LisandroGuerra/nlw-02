import express from 'express';
import db from './database/connection';
import convertHourToMinutes from './utils/convertHoursToMinutes';

 const routes = express.Router();

 interface ScheduleItem {
     week_day: number;
     from: string;
     to: string;
 }

routes.get('/', (request, response) => {
    return response.json({message: 'Hello World!'});
});

routes.post('/classes', async (request, response) => {
    const {
        name,
        avatar,
        whatsapp,
        bio,
        subject,
        cost,
        schedule
    } = request.body;

   const insertedUsersIds = await db('users').insert({
       name,
       avatar,
       whatsapp,
       bio
   });

   const user_id = insertedUsersIds[0];

   const insertedClassesIds = await db('classes').insert({
       subject,
       cost,
       user_id
   });

   const class_id = insertedClassesIds[0];

   const classSchedule = schedule.map((scheduleItem: ScheduleItem) => {
       return {
           class_id,
           week_day: scheduleItem.week_day,
           from: convertHourToMinutes(scheduleItem.from),
           to: convertHourToMinutes(scheduleItem.to)
       };
   });

   const insertedSchedules = await db('class_schedules').insert(classSchedule);

    return response.send();
});

export default routes;