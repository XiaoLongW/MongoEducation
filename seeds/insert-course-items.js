'use strict';

var db = require('../models/index');

var courses = [
  {"name": "数学1", "description": "This is an English course"},
  {"name": "数学2", "description": "This is an English course"},
  {"name": "数学3", "description": "This is an English course"},
  {"name": "数学4", "description": "This is an English course"},
  {"name": "数学5", "description": "This is an English course"},
  {"name": "数学6", "description": "This is an English course"},
  {"name": "数学7", "description": "This is an English course"},
  {"name": "数学8", "description": "This is an English course"},
  {"name": "数学9", "description": "This is an English course"},
  {"name": "数学10", "description": "This is an English course"},
  {"name": "数学11", "description": "This is an English course"},
  {"name": "数学12", "description": "This is an English course"},
  {"name": "数学13", "description": "This is an English course"},
  {"name": "数学14", "description": "This is an English course"},
  {"name": "数学15", "description": "This is an English course"},
  {"name": "数学16", "description": "This is an English course"},
  {"name": "数学17", "description": "This is an English course"},
  {"name": "数学18", "description": "This is an English course"},
  {"name": "数学19", "description": "This is an English course"},
  {"name": "数学20", "description": "This is an English course"},
  {"name": "数学21", "description": "This is an English course"},
  {"name": "数学22", "description": "This is an English course"},
  {"name": "数学23", "description": "This is an English course"},
  {"name": "数学24", "description": "This is an English course"},
  {"name": "数学25", "description": "This is an English course"},
  {"name": "数学26", "description": "This is an English course"},
  {"name": "数学27", "description": "This is an English course"},
  {"name": "数学28", "description": "This is an English course"},
  {"name": "数学29", "description": "This is an English course"},
  {"name": "数学30", "description": "This is an English course"},
  {"name": "数学31", "description": "This is an English course"},
  {"name": "数学32", "description": "This is an English course"},
  {"name": "数学33", "description": "This is an English course"},
  {"name": "数学34", "description": "This is an English course"},
  {"name": "数学35", "description": "This is an English course"},
  {"name": "数学36", "description": "This is an English course"},
  {"name": "数学37", "description": "This is an English course"},
  {"name": "数学38", "description": "This is an English course"},
  {"name": "数学39", "description": "This is an English course"}

];

db.Course.bulkCreate(courses);

