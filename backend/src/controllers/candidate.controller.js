const {publishEvent} = require('../events/producer');

const apply =  async(req,res)=>{
    const event = {
        type: 'candidate_application',
        data: req.body
    };
    await publishEvent(event.type, event.data);
    res.status(200).json({message: 'Application submitted successfully'});
}

module.exports = {apply};