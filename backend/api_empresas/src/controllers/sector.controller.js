import {getConnection} from '../databases/databases';

const getAllSectores = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query('SELECT * FROM tbl_sectore');
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
        const {  sector_nom } = req.body;
        console.log(req.body);
        if(!sector_nom){
            res.status(400).json({
                message: 'Faltan datos'
            });
        }
        const sector = {
            sector_nom
        }
        
        const connection = await getConnection();
        const result = await connection.query('INSERT INTO tbl_sectore SET ?', sector);
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
        const result = await connection.query('SELECT * FROM tbl_sectore WHERE sector_id = ?', [id]);
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
        const { sector_nom } = req.body;

        if(!id || !sector_nom){
            res.status(400).json({
                message: 'Faltan datos'
            });
        }
        const sector = {
            sector_nom
        }

        const connection = await getConnection();
        const result = await connection.query('UPDATE tbl_sectore SET ? WHERE sector_id = ?', [sector, id]);
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
        const result = await connection.query('DELETE FROM tbl_sectore WHERE sector_id = ?', [id]);
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

