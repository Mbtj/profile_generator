//import * as readline from 'node:readline';

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? ', (answer) => {
  console.log(`Hi, ${answer}!`);

  rl.question('What is an activity you like doing? ', (answer) => {
    console.log(`Wow, ${answer} sounds like fun!`);
  
    rl.question('What music do you listen to? ', (answer) => {
      console.log(`${answer}? Good choice!`);
    
      rl.question('What is your favourite meal period, Breakfast, Lunch or Dinner?', (answer) => {
        console.log(`${answer}... Yummy.`);
      
        rl.question('What is your favourite thing to eat?', (answer) => {
          console.log(`${answer} is pretty good`);
        
          rl.question(`Tell me your favourite sport`, (answer) => {
            console.log(`${answer} is indeed very fun and engaging!`);
          
            rl.question('What is your superpower? IN a few words, tell us what you are amazing at.', (answer) => {
              console.log(`"${answer}". Very cool.`);
            
              rl.close();
            });

            
          });

           
        });

         
      });

       
    });
    

     
  });

});

