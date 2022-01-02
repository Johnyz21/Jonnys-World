install:
	brew install node || brew install node@14
	npm install

run-dev:
	npm run serve

build:
	npm run build
