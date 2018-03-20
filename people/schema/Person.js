import mongoose from 'mongoose'

const Person = new mongoose.Schema({
	name: {
		type: String,
		required: [true, 'Name can not be blank'] 
	},
	age: {
		type: Number,
		required: true,
		min: [12, 'Too age']
	},
	tel: {
		type: String,
		required: [true, 'Telephone can not be blank'],
		validate: {
			validator: function(value) {
				return /\d{3}-\d{3}-\d{4}/.test(value)
			},
			message: 'Is not a valida phone number'
		}
	}
})

export default mongoose.model('Person', Person)