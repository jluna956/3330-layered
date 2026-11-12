import { db } from '../app.js';

const getTasks = (req, res, next) => {
    try{
        const allTasks = db;
        res.status(200).json({
            success: true,
            data: allTasks
        });
    }catch(error){
        next(error);
    }
};

const createTask = (req, res, next) => {
    try{
        const params = req.body;
        const newTask = {
            id: Math.max(...db.map( (user) => user.id )) + 1, 
            title: params.title.trim(),
            completed: false
        };
        db.push(newTask); 

        res.status(201).json({
            success: true,
            data: newTask
        });
    }catch(error){
        next(error);
    }
    return newTask;
};

export default {
    getTasks,
    createTask
};

