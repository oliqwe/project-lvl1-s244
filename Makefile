install:
	npm install

lint:
	npm run eslint .

start-brain-games:
	npm run babel-node -- src/bin/brain-games.js

start-brain-even:
	npm run babel-node -- src/bin/brain-even.js

start-brain-calc:
	npm run babel-node -- src/bin/brain-calc.js

.PHONY: test log