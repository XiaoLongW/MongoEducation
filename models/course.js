'use strict';

module.exports = function(sequelize, DataTypes) {
  var Course = sequelize.define('Course', {
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    classMethods: {
      associate: function (models) {
        Course.hasMany(models.Chapter, {as: 'Chapter'});
        Course.belongsTo(models.Teacher, {as: 'Teacher'});
      },
      findByTeacherId: function (callback) {
        this.findAll({
          attributes: ['id', 'name'],
          where: {
            TeacherId: 1
          }
        }).then(function (datas) {
          var courses = [];

          datas.forEach(function (data) {
            courses.push(data.dataValues);
          });

          callback(courses);
        });
      },
      findCoursesData: function (callback) {
        this.findAll({attributes: ['id', 'name', 'description']})
          .then(function (datas) {
            var result = [];

            datas.forEach(function(data) {
              result.push(data.dataValues);
            });

            callback(result);
          });
      },
      deleteById: function(courseId, callback) {
        this.destroy({
          where: {
            id: courseId
          }
        }).then(callback);
      },
      interCourseData: function(name, description) {
        this.create({name: name, description: description});
      }
    }
   });
  return Course;
};
