# About
This site contains relevant information about my experience.

You can pull the code and modify it as you wish.

# How to customize
- `git clone https://github.com/MDOR/mdor.git <folder>`
- `cd <folder>`
- `npm i`
- If you want to start a dev server `npm run watch`
- If you want to generate the artifacts `npm run build:prod`, the content will be placed in `docs` (to change the folder, replace this line: [here](https://github.com/MDOR/mdor/blob/3bbc1d3022562b22cca56e274979b531beec19de/webpack.config.js#L19))

# Lint
The repo includes `husky` and `lint-staged`, this uses `git hooks` to perform operations and keep the code clean and standardized.

The code follows [several standards](https://github.com/MDOR/personal-configurations/blob/master/prettier/README.md) I use across different repos,
