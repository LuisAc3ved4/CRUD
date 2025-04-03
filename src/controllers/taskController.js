const taskModel = require("../models/taskModel");

//Obtener todas las tareas

const getTasks = async (req, res) => {
    try{
        const tasks = await taskModel.getTasks();
        res.json(tasks);
    } catch (error){
        res.status(500).json({error: error.message});
    }
};

//Obteer tareas por id

const getTasksById = async (req, res) => {
    try {
        const task = await taskModel.getTasksById(req.params.id);
        if(!task){
            return res.status(404).json({ error: "Tarea no encontrada"});
        }
        res.json(task)
    }catch (error){
        res.status(500).json({error: error.message});
    }
};

//Crear una nueva tarea 
const createTask = async (req, res) => {
    try{
        const newTask = await taskModel.createTask(req.body)
        res.status(201).json(newTask)
    } catch (error) {
        res.status(500).json({error:error.message});
    }
};

//Actualizar tarea

const updateTask = async (req, res) => {
    try{
        const updateTask = await taskMode.updateTask(req.params.id, req.body);
    if (!updateTask){
        return res.status(404).json({error: "Tarea no encontrada"});
    }
    res.json(updateTask)
} catch (error){
    res.status(500).json({error:error.message});
}

};

// Eliminar una tarea
const deleteTask = async(req, res) =>{
    try{
        const deleteTask = await taskModel.deleteTask(req.params.id)
        if(!deleteTask){
            return res.status(404).json({ error: 'Task not found'});
        }
        res.json(deleteTask);
    } catch (error){
        res.status(500).json({error: error.message});
    }
};

module.exports = {
    getTasks,
    getTasksById,
    createTask,
    updateTask,
    deleteTask,
};