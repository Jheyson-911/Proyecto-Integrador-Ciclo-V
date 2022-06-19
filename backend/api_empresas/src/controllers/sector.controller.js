import {getConnection} from '../databases/databases';

const getAllSectores = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query('SELECT * FROM tbl_sectores');
        res.json(result);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Error al obtener los sectores'
        });
    }
}

const createSector = async (req, res) => {
    try {
        const {  nombre } = req.body;

        const connection = await getConnection();
        const result = await connection.query('INSERT INTO tbl_sectores SET ?', [nombre]);
        res.json({
            message: 'Sector agregado correctamente'
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Error al agregar el sector'
        });
    }
}

const getSector = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query('SELECT * FROM tbl_sectores WHERE sector_id = ?', [id]);
        res.json(result);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Error al obtener el sector'
        });
    }
}

const updateSector = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre } = req.body;

        if(!id || !nombre){
            res.status(400).json({
                message: 'Faltan datos'
            });
        }

        const connection = await getConnection();
        const result = await connection.query('UPDATE tbl_sectores SET ? WHERE sector_id = ?', [sector, id]);
        res.json({
            message: 'Sector actualizado correctamente'
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Error al actualizar el sector'
        });
    }
}

const deleteSector = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query('DELETE FROM tbl_sectores WHERE sector_id = ?', [id]);
        res.json({
            message: 'Sector eliminado correctamente'
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Error al eliminar el sector'
        });
    }
}

export const methodsSector = {
    getAllSectores,
    createSector,
    getSector,
    updateSector,
    deleteSector
}

