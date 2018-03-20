import Person from './../schema/Person'

export default (req, res) => {
	let person = new Person(req.body)

	person
		.save()
		.then((created) => {
			if (!created) {
				return res.status(404)
						  .json({ status: false, data: {} })
			}

			return res.status(201)
					  .json({ status: true, data: created })
		})
		.catch(err => res.status(500)
			.json({ status: false, data: err }) 
		)
}