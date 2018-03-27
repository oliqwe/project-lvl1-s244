install:
	npm install

lint:
	npm run eslint .

test:
	echo 'run tests....'

start:
	npm run babel-node -- src/bin/brain-games.js

start-even:
	npm run babel-node -- src/bin/brain-even.js

.PHONY: test log