# Игра Виселица (Hangman Game)

![Hangman game1](https://user-images.githubusercontent.com/108275492/212659577-898f23f0-7937-4f82-9bd2-18b6751ea23d.png)
![Hangman game2](https://user-images.githubusercontent.com/108275492/212659634-aee4f526-a948-4a6a-8f69-577e522339fc.png)
![Hangman game3](https://user-images.githubusercontent.com/108275492/212659679-35a14c7b-cc82-4dbb-b9c7-5f97bc1bafe2.png)

Проект-игра был создан для практики использования React в связке с TypeScript. В начале игры загадывается слово, которое представляется в виде полос(пропусков) в количестве букв в слово. Слово рандомно определяется из заранее составленного списка ```wordList.json``` \
Угадывать буквы в слове можно как выбирая буквы на экарнной клавиатуре, так и используя клавиатуру компьютера. При правильном выборе буквы она подсвечивается голубым цветом и появляется в слове в нужном месте. При ошибочном выборе буквы буква становится серая и на виселице появляется одна из шести частей. \
При полном нарисовании повешенного человечка игра проиграна и выводится сообщение о проигрыше.
При угаданном слове выводится сообщение о победе. \
Для начала новой игры нужно обновить страницу или нажать клавишу Enter.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
