## So I don't forget, you start this by running webpack-dev-server in the client folder and babel-node in the server folder. Trust me, the server is running, babel-node won't say anything (you could add a console.log if you are scared).

#### After that you navigate to localhost:8080 and you will see your picks. Right now they are Pokemon, sorry. Now, you have to open another browser window(not a tab, because you need to click "next" after you see the votes tabulated in this new window). This address is localhost:8080/#/results. Sorry about the hash - very bad form - I'll fix that. 

#### By the way, I believe there is something wrong when you have a tie. Either that or something just goes wrong at the end of the election. It gets to a point sometimes where you just have to hit "next" when the other window, the voting screen, freezes. Something is wrong with the logic, that's a todo.

## Todos

- [*] Make the client and server, tabulate voting and have it recorded on the server side.
- [ ] Fix the issue with the tie or end of election "freeze." First figure out what the issue is, then fix it.
- [ ] Get rid of the hashes.
- [ ] Create a homescreen so you can be either a voter or a watcher.
- [ ] Integrate the server's "next" into the client, so on the server you can just watch the votes tabulate.
- [ ] Add pictures to the pokemon, pictures are always nice.
- [ ] Perhaps pick something better than pokemon, that high schoolers will be interested in (some of them are, I believe).
- [ ] Actually put in the voting theory material, like Borda Count, single runoff, etcetera, that was the whole point of making this.

#### Again all the credit for this goes to Tero Parviainen, whose full-stack react/redux/Immutable.js tutorial motivated my idea to integrate this into a classroom lesson or unit. His tutorial is awesome, although it was written in 2015 and some of the features, like the pure-render-mixin, are deprecated. They have been usurped by React's PureComponent. That's another todo:

- [ ] Update deprecated features like pure-render-mixin throughout the application. I think some react-redux API has been added since 2015 that would make the application a bit cleaner. 

##### The tutorial is still awesome, you can't blame him for writing it 2 years ago.
