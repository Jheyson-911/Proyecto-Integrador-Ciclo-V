import { getConnection } from '../databases/databases';

const getAllEmpresas = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query('SELECT * FROM tbl_empresa');
        res.json(result);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Error al obtener las empresas'
        });
    }
}

const createEmpresa = async (req, res) => {
    try {
        const {nombre, img, ruc , descripcion, mision, vision ,areasTrabajo, requisitos, sector} = req.body;
            if(!nombre || !img || !ruc || !descripcion || !mision || !vision || !areasTrabajo || !requisitos || !sector){
                res.status(400).json({
                    message: 'Faltan datos'
                });
            }

            const empresas = {
                nombre,
                img,
                ruc,
                descripcion,
                mision,
                vision,
                areasTrabajo,
                requisitos,
                sector
            }
            const connection = await getConnection();
            const result = await connection.query('INSERT INTO tbl_empresa SET ?', [empresas]);
            res.json({
                message: 'Empresa agregada correctamente'
            });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Error al agregar la empresa'
        });
    }
}

const getEmpresa = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query('SELECT * FROM tbl_empresa WHERE empresa_id = ?', [id]);
        res.json(result);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Error al obtener la empresa'
        });
    }
}

const updateEmpresa = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, img, ruc , descripcion, mision, vision ,areasTrabajo, requisitos, sector } = req.body;
        const empresas = {
            nombre,
            img,
            ruc,
            descripcion,
            mision,
            vision,
            areasTrabajo,
            requisitos,
            sector
        }

        if(!id || !nombre || !img || !ruc || !descripcion || !mision || !vision || !areasTrabajo || !requisitos || !sector){
            res.status(400).json({
                message: 'Faltan datos'
            });
        }
        const  connection = await getConnection();
        const result = await connection.query('UPDATE tbl_empresa SET ? WHERE empresa_id = ?', [ empresas, id]);
        res.json({
            message: 'Empresa actualizada correctamente'
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Error al actualizar la empresa'
        });
    }
}

const deleteEmpresa = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query('DELETE FROM tbl_empresa WHERE empresa_id = ?', [id]);
        res.json({
            message: 'Empresa eliminada correctamente'
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Error al eliminar la empresa'
        });
    }
}

export const methodsEmpresa = {
    getAllEmpresas,
    createEmpresa,
    getEmpresa,
    updateEmpresa,
    deleteEmpresa
}