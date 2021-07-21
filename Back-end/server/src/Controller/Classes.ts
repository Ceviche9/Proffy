import { Response, Request, response } from 'express';
import db from '../database/connections';
import convertHourToMinutes from '../Utils/ConvertHourToMinutes';

interface IScheduleItem {
  week_day: number;
  from: string;
  to: string;
}

export default class ClassesController {

    async index(req: Request, res: Response) {
        const filters = req.query;
    
        const subject = filters.subject as string;
        const week_day = filters.week_day as string;
        const time = filters.time as string;
    
        if (!filters.week_day || !filters.subject || !filters.time) {
          return response.status(400).json({
            error: 'Missing filters to search classes'
          });
        }
    
        const timeInMinutes = convertHourToMinutes(time);
    
        const classes = await db('classes')
          .whereExists(function() {
            this.select('class_schedule.*')
              .from('class_schedule')
              .whereRaw('`class_schedule`.`class_id` = `classes`.`id`')
              .whereRaw('`class_schedule`.`week_day` = ??', [Number(week_day)])
              .whereRaw('`class_schedule`.`from` <= ??', [timeInMinutes])
              .whereRaw('`class_schedule`.`to` > ??', [timeInMinutes])
          })
          .where('classes.subject', '=', subject)
          .join('users', 'classes.user_id', '=', 'users.id')
          .select(['classes.*', 'users.*']);
    
        return res.json(classes);
      }
    
    async create(req: Request, res: Response) {
        const {
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost,
            schedule
        } = req.body;
      
        const trx = await db.transaction()
      
        try{
          // O user id já é adicionado automaticamente
          const insertUserID = await trx('users').insert({
              name,
              avatar,
              whatsapp,
              bio
          });
          // Para pegar o user id
          const user_id = insertUserID[0]
          // Para pegar o Id da Classe
          const InsertClassesID = await trx('classes').insert({
              subject,
              cost,
              user_id
          });
      
          const class_id = InsertClassesID[0];
      
          const classSchedule = schedule.map((scheduleItem: IScheduleItem) => {
             return {
                  class_id,
                  week_day: scheduleItem.week_day,
                  from: convertHourToMinutes(scheduleItem.from),
                  to: convertHourToMinutes(scheduleItem.to)
             }
          });
      
          await trx('class_schedule').insert(classSchedule);
      
          // Coloca todas as informações ao justas no banco
          await trx.commit();
      
        } catch(e){
          // Desfaz todas as alterações que tenham acontecido no banco.  
          trx.rollback();
          console.log(e);
          return res.json({massage: "ERRO"});
        }
      
        return res.json({massage: "OK"});
      
    };
}