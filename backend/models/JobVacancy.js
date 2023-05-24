const mongoose = require('mongoose');

const JobVacancySchema = new mongoose.Schema({
    createdBy: {type: String,required: true},
    createdByName: {type: String,required: true},
    createrEmail: {type: String,required: true},
    title: {type: String,required: true,trim: true},
    discription: {type: String,required: true,trim: true},
    jobType: {type: String,required: true,trim: true},
    jobCategory: {type: String,required: true,trim: true},
    closing_date: {type: Date,required: true,trim: true},
    
    createdAt: {type: Date,default: Date.now()}
},
{
    timestamps: true,
 }
);

const JobVacancy = mongoose.model("JobVacancy", JobVacancySchema);
module.exports = JobVacancy;