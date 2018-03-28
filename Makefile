storybook:
	docker run -it --rm -p 6006:6006 -v $(PWD):/app -w /app node:9.5.0-slim yarn storybook