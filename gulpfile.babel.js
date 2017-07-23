import gulp from 'gulp';
import fs from 'fs';
import path from 'path';

function taskFilter(name) {
  return /(\.(js)$)/i.test(path.extname(name));
}

const tasks = fs.readdirSync('./gulp/').filter(taskFilter);

tasks.forEach((task) => {
  require('./gulp/' + task);
});
