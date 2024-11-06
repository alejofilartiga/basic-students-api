import mongoose from 'mongoose';

export const conectarDB = async (): Promise<void> => { 
    try {
        await mongoose.connect("mongodb+srv://alejofilartiga:alejo@students.fu4sw.mongodb.net/students");
        console.log("Base de datos online");
    } catch (error) {
        console.log("Error de conexión", error);
    }
};

export default conectarDB
