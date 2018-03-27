install:
	npm install

lint:
	npm run eslint .

test:
	echo 'run tests....'

start:
	npm run babel-node -- src/bin/brain-games.js

.PHONY: test log