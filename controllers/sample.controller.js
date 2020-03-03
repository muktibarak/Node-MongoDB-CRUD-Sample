const Sample = require('../models/sample.model');
//lets test if this is working or not
// exports.test = function(req, res){
//     res.send('This is test server sending response from controller');
// };

// exports.test = ((req, res)=>{
//     res.send('Responded by controller')
// });
//create controller
exports.sample_create = ((req, res)=>{
    let sample = new Sample({
        id: req.body.id,
        name: req.body.name
    });
    sample.save((err)=>{
        if(err) {
            return next(err);
        }
        res.send('New sample created successfully.')
    })
});

//get controller method
exports.sample_details = ((req, res)=>{
    Sample.findById(req.params.id, (err, sample)=>{
        if(err)
            return next(err);
        res.send(sample);
    })
});

//update method
exports.sample_update = ((req, res)=>{
    Sample.findByIdAndUpdate(req.params.id, {$set: req.body},
        (err)=>{
            if(err) return next(err);
            res.send('Sample updated');
        })
});

//Delete method
exports.sample_delete = ((req, res)=>{
    Sample.findByIdAndRemove(req.params.id, (err)=>{
        if(err) return next(err);
        res.send('Successfully deleted sample')
    })
});