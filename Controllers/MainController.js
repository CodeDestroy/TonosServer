const { Prisma } = require("@prisma/client");
const { response } = require("express");

class MainController {

    async getResults(req, res) {
        try {
            console.log(req.body.SYS)
            res.send('200')

            if(!req.body) return res.sendStatus(400);
            await global.prisma.monitoring_ton.create({
                data: {
                    is_del: null,
                    upper_pressure: parseInt(req.body.SYS),
                    lower_pressure: parseInt(req.body.DIA),
                    heart_rate: parseInt(req.body.PUL),
                    reaction: null,
                    measurement_comment: null,
                    apointment: {
                        connectOrCreate: {
                            where: {
                              id: 80629,
                            },
                            create: {
                                patient_id: 111,               
                                medic_id: 11,              
                                device_id: 44,                        
                                sp_apointment_type_id: 2,                                            
                                finished_status: -1,       
                                sp_district_id: 4          
                            },
                          },
                    }
                },
              });
            res.send('Успешно')          
        }
        catch (e) {
            console.log(e);
        }
    }
}
module.exports = new MainController();
