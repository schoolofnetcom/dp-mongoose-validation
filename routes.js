import people from './people/index'

export default (app) => {
	app.use('/people', people)
}