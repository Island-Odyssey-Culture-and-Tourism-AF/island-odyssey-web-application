const mongoose = require('mongoose');

const JobVacancySchema = new mongoose.Schema({
    createdBy: {type: String},
    createdByName: {type: String},
    createrEmail: {type: String},
    title: {type: String},
    discription: {type: String},
    jobType: {type: String},
    jobCategory: {type: String},
    closing_date: {type: String},
    createdAt: {type: String}
},
{
    timestamps: true,
 }
);

const JobVacancy = mongoose.model("JobVacancy", JobVacancySchema);
module.exports = JobVacancy;