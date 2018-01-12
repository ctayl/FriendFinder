

var data = {
  list: [
  {
    "name": "sam",
    "photo": "https://soffes-assets.s3.amazonaws.com/images/Sam-Soffes.jpg",
    "scores": [
      "5",
      "2",
      "4",
      "1",
      "2",
      "5",
      "4",
      "5",
      "5",
      "4"
    ]
  },
  {
    "name": "mike",
    "photo": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ0NTk2NzU5NV5BMl5BanBnXkFtZTcwMDE5Mzc0Nw@@._V1_UY317_CR51,0,214,317_AL_.jpg",
    "scores": [
      "1",
      "5",
      "4",
      "2",
      "2",
      "1",
      "4",
      "2",
      "5",
      "1"
    ]
  },
  {
    "name": "jen",
    "photo": "http://www.darkcrystal.com/images/gallery_images/DC_Jen_1264.jpg",
    "scores": [
      "5",
      "5",
      "4",
      "5",
      "2",
      "1",
      "2",
      "1",
      "1",
      "2"
    ]
  },
  {
    "name": "kelly",
    "photo": "https://vignette.wikia.nocookie.net/starwars/images/8/8b/KellyMarieTran.jpg/revision/latest?cb=20160215174822",
    "scores": [
      "2",
      "2",
      "2",
      "1",
      "2",
      "4",
      "5",
      "2",
      "5",
      "1"
    ]
  },
  {
    "name": "andrew",
    "photo": "https://pbs.twimg.com/profile_images/2205986846/gravatar-square-full.jpg",
    "scores": [
      "5",
      "5",
      "3",
      "2",
      "5",
      "5",
      "4",
      "2",
      "3",
      "5"
    ]
  }],
  match: function (user) {
    console.log(user);
    var differences = [];
    for (let x = 0; x < data.list.length; x++) {

      console.log(`x = ${x}`);

      let diff = 0;

      for (let i = 0; i < user.scores.length; i++) {

        diff += Math.abs(user.scores[i] - data.list[x].scores[i]);

      };
      differences.push(diff);
      console.log(`diff = ${diff}`);
      
    };
    return data.list[indexOfSmallest(differences)];
    console.log(differences);

  },
};

module.exports = data;

function indexOfSmallest(a) {
  var lowest = 0;
  for (var i = 1; i < a.length; i++) {
   if (a[i] < a[lowest]) lowest = i;
  }
  return lowest;
 }