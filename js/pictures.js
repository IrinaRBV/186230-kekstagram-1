'use strict';

var picture = document.querySelector('#picture')
    .content
    .querySelector('.setup-similar-item');

var comments = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

var description = [
  'Тестим новую камеру!',
  'Затусили с друзьями на море',
  'Как же круто тут кормят',
  'Отдыхаем...',
  'Цените каждое мгновенье. Цените тех, кто рядом с вами и отгоняйте все сомненья. Не обижайте всех словами......',
  'Вот это тачка!'
];

var descriptionPhoto = generateDummy(25);

function generateDummy (num) {
  var dummy = [];

  for (var i=0; i < num; i++) {
    var dataObject = {'url':'', 'likes':0, 'comments':[], 'description':''};

    // dataObject.url = 'photos/'+ (i + 1) + '.jpg';
    // dataObject.likes = getRandomLikes(15, 200);
    dataObject.comments = getRandomComment(comments);
    // dataObject.description = getRandomDescription(description);

    dummy.push(dataObject);
  }
  return dummy;
}

function getRandomComment(arr) {

  var min = 1;
  var max = 2;
  var num = Math.floor(Math.random() * (max - min + 1)) + min;

  var randComment = [];

  for (var i = 0; i < num; i++) {
    var rand = Math.floor(Math.random() * arr.length);
    randComment.push(arr[rand]);

    // var idx = randComment.indexOf(rand);
    // while (idx != -1) {
    //   indices.push(idx);
    //   idx = array.indexOf(element, idx + 1);
    // }
  }
  console.log(randComment)
  return randComment;
}

function getRandomDescription(arr) {
  var rand = description[Math.floor(Math.random() * description.length)];
  return arr;
}

function getRandomLikes(min, max) {
  return Math.random() * (max - min) + min;
}
