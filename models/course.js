'use strict';

module.exports = function (sequelize, DataTypes) {
  var Course = sequelize.define('Course', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    categoryId: DataTypes.STRING,
    teacherId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function (models) {
        Course.hasMany(models.Chapter);
        Course.belongsTo(models.Teacher, {as: 'Teacher'});
      },
      findByTeacherId: function (page, count, search, teacherId, callback) {
        this.findAndCount({
          where: {
            teacherId: teacherId,
            name: {
              $like:'%' + search + '%'
            }
          },
          limit: count,
          offset: (page - 1) * count
        }).then(function (courses) {
          callback(courses);
        });
      },
      deleteById: function (courseId, callback) {
        this.destroy({
          where: {
            id: courseId
          }
        }).then(callback);
      },
      interCourseData: function (name, description) {
        this.create({name: name, description: description});
      },
      pageAll: function (pageSize, pageIndex, callback) {

        this.findAndCountAll({offset: (pageIndex-1) * pageSize, limit: pageSize}).then(function (result) {
          var totalPages = Math.ceil(result.count / pageSize);
          var courses = result.rows;
          callback(totalPages, courses);
        });
      },
      queryAndPage: function (pageSize, pageIndex, query, categoryId, callback) {

        this.findAndCountAll({where:{name: {$like: '%' + query + '%'}, categoryId: {$like:categoryId + '%'}},offset: (pageIndex-1) * pageSize, limit: pageSize}).then(function (result) {
          var totalPages = Math.ceil(result.count / pageSize);
          var courses = result.rows;
          callback(totalPages, courses);
        });
      },
      findLastId: function (callback) {
        this.findAll({attributes: ['id']})
          .then(function (datas) {
            var result = [];

            datas.forEach(function (data) {
              result.push(data.dataValues);
            });

            callback(result[result.length-1].id);
          });
      }
    }
  });
  return Course;
};
