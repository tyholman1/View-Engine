const express = require('express');
const app = express();
const PORT = 3000;

//Week 11 Day 3 Notes
//fs is file system
const fs = require('fs') // this engine requires the fs module
app.engine('portal', (filePath, options, callback) => { // define the view engine called portal
  fs.readFile(filePath, (err, content) => {
    if (err) return callback(err)
    // this is an extremely simple view engine we'll be more complex later
    const rendered = content.toString()
      .replace('#title#', '<title>' + options.title + '</title>')
      .replace('#message#', '<h1>' + options.message + '</h1>').replace('#content#','<div>'+ options.content + '</div>' )
    return callback(null, rendered)
  })
})
app.set('views', './views') // specify the views directory
app.set('view engine', 'portal') // register the portal view engine

app.get('/', (req, res) => {
    res.render('template', { 
        title: 'Hey', 
        message: 'Hello there!', 
        content: 'I am the Boss Ricky Ross' })
  })
  
  app.get('/about-me', (req, res) => {
    res.render('template', { 
        title: 'Hey',
        message: 'Rick Ross!', 
        content: 'The most underated Rapper in the game' })
  })
  
  app.get('/another-one', (req, res) => {
    res.render('template', { 
        title: 'We The Best', 
        message: 'Who!',
        content: 'We Taking Over, Yall know who it is, All I do is win' })
  })

  app.get('/heres-another-one', (req, res) => {
    res.render('template', { 
        title: 'What You Say', 
        message: 'What!',
        content: 'Yea!, WHATT?!' })
  })

  app.get('/another-another-one', (req, res) => {
    res.render('template', { 
        title: 'Wung Tang Clan', 
        message: 'C.R.E.A.M!',
        content: 'Cash Rules Every Thing Around Me, C.R.E.A.M Get the Money' })
  })

  app.get('/final-one', (req, res) => {
    res.render('template', { 
        title: 'Drake', 
        message: 'YOLO!',
        content: 'You Only Live Once!' })
  })

  app.get('/Bryan', (req, res) => {
    res.render('students', { 
        title: 'Bryan Santos', 
        message: "I'm the man!",
        content: 'The King of Street Fighter' })
  })

  
  app.get('/Taher', (req, res) => {
    res.render('students', { 
        title: 'Taher Moosa', 
        message: "The Only and Only",
        content: 'The Code Ninja' })
  })

  
  app.get('/Toyoki', (req, res) => {
    res.render('students', { 
        title: 'Toyoki Tanaka', 
        message: "The Baddest Boy on the Block",
        content: 'Always Finish First' })
  })

  
  app.get('/Josh', (req, res) => {
    res.render('students', { 
        title: 'Joshua Miller', 
        message: "The Code Bully",
        content: 'Too Cool to Code' })
  })

  
  app.get('/Tyasia', (req, res) => {
    res.render('students', { 
        title: 'Tyasia Holman', 
        message: "Queen of Coding",
        content: 'Smooth Coding' })
  })
  


// Week 11 Day 2 Lab Review

//Greetings
app.get('/greetings/:name', (req, res) => {
  res.send(`Hello there, ${req.params.name}!!!`);
});

// Tip Calculator
app.get('/tip/:total/:tipPercentage', (req, res) => {
  const { total, tipPercentage } = req.params;
  const tip = (parseInt(total) * parseInt(tipPercentage)) / 100;
  const result = tip + parseInt(total);

  res.send(
    `<h1>The tip will be $${tip}. Resulting a total bill cost of $${result}</h1>`
  );
});

app.get('/magic/:question', (req, res) => {
  const answers = [
    'It is certain',
    'It is decidedly so',
    'Without a doubt',
    'Yes definitely',
    'You may rely on it',
    'As I see it yes',
    'Most likely',
    'Outlook good',
    'Yes',
    'Signs point to yes',
    'Reply hazy try again',
    'Ask again later',
    'Better not tell you now',
    'Cannot predict now',
    'Concentrate and ask again',
    "Don't count on it",
    'My reply is no',
    'My sources say no',
    'Outlook not so good',
    'Very doubtful',
  ];

  const random = answers[Math.floor(Math.random() * answers.length)];

  res.send(`<h3>${req.params.question}?</h3> <br/> <h1>${random}</h1>`);
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});